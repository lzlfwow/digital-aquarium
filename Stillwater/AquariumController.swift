import SwiftUI
import WebKit
import WidgetKit
import UniformTypeIdentifiers

@MainActor
final class AquariumController: NSObject, ObservableObject, WKNavigationDelegate, WKScriptMessageHandlerWithReply {
    let webView: WKWebView
    private let webRoot: URL?
    private let store: AquariumStore?
    @Published var notice: String?
    @Published var configurationWarning: String?
    @Published var showImporter = false
    @Published var confirmImport = false
    @Published var importSummary = ""
    @Published var shareFile: SharedFile?
    @Published var ready = false
    private var pendingImport: String?
    private var foreground = true
    private var reloadPending = false
    private var lastWidgetReload = Date.distantPast

    struct SharedFile: Identifiable { let id = UUID(); let url: URL }

    override init() {
        let localStore = try? AquariumStore(allowLocalFallback: true)
        store = localStore
        webRoot = Bundle.main.url(forResource: "Web", withExtension: nil)
        let config = WKWebViewConfiguration()
        config.websiteDataStore = .default()
        config.allowsInlineMediaPlayback = true
        config.mediaTypesRequiringUserActionForPlayback = [.audio, .video]
        let bootstrap = Self.bootstrap(store: localStore)
        config.userContentController.addUserScript(WKUserScript(source: bootstrap,
            injectionTime: .atDocumentStart, forMainFrameOnly: true))
        webView = WKWebView(frame: .zero, configuration: config)
        super.init()
        if localStore?.isShared != true {
            configurationWarning = "鱼缸可在 App 内使用；尚未配置 App Groups，桌面小组件暂时无法同步。请按安装说明配置。"
        }
        config.userContentController.addScriptMessageHandler(self, contentWorld: .page, name: "stillwater")
        webView.navigationDelegate = self
        webView.isOpaque = false
        webView.backgroundColor = UIColor(red: 0.76, green: 0.86, blue: 0.89, alpha: 1)
        webView.scrollView.isScrollEnabled = false
        load()
    }

    private static func bootstrap(store: AquariumStore?) -> String {
        var values: [String: Any] = ["save": NSNull(), "loadError": ""]
        do {
            guard let store else { throw AquariumStore.StoreError.unavailable }
            if let save = try store.loadSave() { values["save"] = save }
        } catch { values["loadError"] = error.localizedDescription }
        let data = (try? JSONSerialization.data(withJSONObject: values)) ?? Data("{}".utf8)
        return "window.__stillwaterBootstrap = \(String(decoding: data, as: UTF8.self));"
    }

    private func load() {
        guard let root = webRoot else { notice = "游戏文件缺失，请先运行 npm run ios:prepare 再编译。"; return }
        ready = false
        webView.loadFileURL(root.appendingPathComponent("index.html"), allowingReadAccessTo: root)
    }

    func setForeground(_ value: Bool) {
        foreground = value
        guard ready else { return }
        webView.evaluateJavaScript("window.StillwaterNative?.setActive(\(value ? "true" : "false"))")
        if !value { reloadWidgetIfNeeded(force: true) }
    }

    func openAquarium() {
        if ready { webView.evaluateJavaScript("document.querySelector('#portable-panel')?.close()") }
    }

    private func reloadWidgetIfNeeded(force: Bool = false) {
        guard reloadPending, store?.isShared == true else { return }
        // Snapshot generation is already throttled. Avoid spending the widget budget on rapid shop edits.
        if force || Date().timeIntervalSince(lastWidgetReload) >= 60 {
            WidgetCenter.shared.reloadTimelines(ofKind: AquariumStore.widgetKind)
            lastWidgetReload = Date(); reloadPending = false
        }
    }

    func userContentController(_ userContentController: WKUserContentController, didReceive message: WKScriptMessage,
                               replyHandler: @escaping (Any?, String?) -> Void) {
        guard message.frameInfo.isMainFrame, let url = message.frameInfo.request.url,
              url.isFileURL, let root = webRoot,
              url.standardizedFileURL.path.hasPrefix(root.standardizedFileURL.path + "/"),
              let body = message.body as? [String: Any], let type = body["type"] as? String else {
            replyHandler(nil, "Unsupported bridge request"); return
        }
        do {
            switch type {
            case "save":
                guard let store, let save = body["save"] else { throw AquariumStore.StoreError.unavailable }
                try store.writeSave(save)
            case "snapshot":
                guard let store, let save = body["save"] as? [String: Any],
                      let images = body["images"] as? [String: String] else { throw AquariumStore.StoreError.invalidImage }
                try store.writeSnapshot(save: save, images: images)
                reloadPending = true; reloadWidgetIfNeeded()
            case "ready":
                ready = true; setForeground(foreground)
            case "import": showImporter = true
            case "export": Task { await exportSave() }
            default: replyHandler(nil, "Unknown bridge action"); return
            }
            replyHandler(["ok": true], nil)
        } catch { replyHandler(nil, error.localizedDescription) }
    }

    func prepareImport(_ url: URL) async {
        let access = url.startAccessingSecurityScopedResource()
        defer { if access { url.stopAccessingSecurityScopedResource() } }
        do {
            let size = try url.resourceValues(forKeys: [.fileSizeKey]).fileSize ?? 0
            guard size <= 2 * 1024 * 1024 else { throw AquariumStore.StoreError.invalidSave }
            let data = try Data(contentsOf: url)
            guard data.count <= 2 * 1024 * 1024, let text = String(data: data, encoding: .utf8) else { throw AquariumStore.StoreError.invalidSave }
            let result = try await webView.callAsyncJavaScript("return window.StillwaterNative.inspectImport(text)",
                arguments: ["text": text], in: nil, contentWorld: .page)
            guard let summary = result as? [String: Any], let fish = summary["fish"] as? Int,
                  let coins = summary["coins"] as? Int else { throw AquariumStore.StoreError.invalidSave }
            pendingImport = text
            importSummary = "导入 \(fish) 尾鱼、\(coins) 微光币的鱼缸？将替换当前进度，建议先导出当前存档。"
            confirmImport = true
        } catch { notice = "这份存档无法读取，当前鱼缸没有改变。\n\(error.localizedDescription)" }
    }

    func cancelImport() { pendingImport = nil }

    func applyImport() async {
        guard let text = pendingImport else { return }
        pendingImport = nil
        do {
            _ = try await webView.callAsyncJavaScript("return await window.StillwaterNative.importSave(text)",
                arguments: ["text": text], in: nil, contentWorld: .page)
            notice = "已导入鱼缸。桌面画面将在生成快照后由系统安排刷新。"
        } catch { notice = "未能导入，原有进度已保留。\n\(error.localizedDescription)" }
    }

    private func exportSave() async {
        do {
            let value = try await webView.callAsyncJavaScript("return window.StillwaterNative.exportSave()", arguments: [:], in: nil, contentWorld: .page)
            guard let text = value as? String else { throw AquariumStore.StoreError.invalidSave }
            let url = FileManager.default.temporaryDirectory.appendingPathComponent("stillwater-backup.json")
            try Data(text.utf8).write(to: url, options: .atomic)
            shareFile = SharedFile(url: url)
        } catch { notice = "暂时无法导出存档：\(error.localizedDescription)" }
    }

    func webView(_ webView: WKWebView, decidePolicyFor navigationAction: WKNavigationAction,
                 decisionHandler: @escaping (WKNavigationActionPolicy) -> Void) {
        // Only bundled files may execute in this WebView with the native bridge.
        guard let url = navigationAction.request.url, let root = webRoot, url.isFileURL,
              url.standardizedFileURL.path.hasPrefix(root.standardizedFileURL.path + "/") else {
            decisionHandler(.cancel); return
        }
        if url.standardizedFileURL.path == root.standardizedFileURL.path + "/" {
            decisionHandler(.cancel); return
        }
        if ready && navigationAction.navigationType == .linkActivated {
            openAquarium(); decisionHandler(.cancel); return
        }
        decisionHandler(.allow)
    }

    func webView(_ webView: WKWebView, didFail navigation: WKNavigation!, withError error: Error) {
        notice = "鱼缸暂时无法打开：\(error.localizedDescription)"
    }
    func webView(_ webView: WKWebView, didFailProvisionalNavigation navigation: WKNavigation!, withError error: Error) {
        notice = "鱼缸暂时无法打开：\(error.localizedDescription)"
    }
    func webViewWebContentProcessDidTerminate(_ webView: WKWebView) {
        // Hydrate from the latest native save after WebKit is reclaimed; never reuse the launch-time save.
        let controller = webView.configuration.userContentController
        controller.removeAllUserScripts()
        controller.addUserScript(WKUserScript(source: Self.bootstrap(store: store), injectionTime: .atDocumentStart, forMainFrameOnly: true))
        load()
    }
}
