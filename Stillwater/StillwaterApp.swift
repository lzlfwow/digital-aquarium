import SwiftUI
import WebKit
import UniformTypeIdentifiers

@main
@MainActor
struct StillwaterApp: App {
    @StateObject private var aquarium = AquariumController()
    @Environment(\.scenePhase) private var scenePhase

    var body: some Scene {
        WindowGroup {
            AquariumView(controller: aquarium)
                .onOpenURL { url in
                    if url.scheme == "stillwater", url.host == "aquarium" { aquarium.openAquarium() }
                }
                .onChange(of: scenePhase) { _, phase in aquarium.setForeground(phase == .active) }
        }
    }
}

private struct AquariumView: View {
    @ObservedObject var controller: AquariumController
    var body: some View {
        VStack(spacing: 0) {
            if let warning = controller.configurationWarning {
                Text(warning).font(.caption).padding(10).frame(maxWidth: .infinity)
                    .background(Color(red: 0.97, green: 0.93, blue: 0.84))
            }
            BundledWebView(webView: controller.webView)
        }
        .background(Color(red: 0.76, green: 0.86, blue: 0.89))
        .fileImporter(isPresented: $controller.showImporter, allowedContentTypes: [.json]) { result in
            switch result {
            case .success(let url): Task { await controller.prepareImport(url) }
            case .failure(let error): controller.notice = error.localizedDescription
            }
        }
        .confirmationDialog("替换当前鱼缸？", isPresented: $controller.confirmImport, titleVisibility: .visible) {
            Button("导入并替换", role: .destructive) { Task { await controller.applyImport() } }
            Button("取消", role: .cancel) { controller.cancelImport() }
        } message: { Text(controller.importSummary) }
        .alert("一缸微光", isPresented: Binding(get: { controller.notice != nil }, set: { if !$0 { controller.notice = nil } })) {
            Button("知道了") { controller.notice = nil }
        } message: { Text(controller.notice ?? "") }
        .sheet(item: $controller.shareFile) { file in ShareSheet(url: file.url) }
    }
}

private struct BundledWebView: UIViewRepresentable {
    let webView: WKWebView
    func makeUIView(context: Context) -> WKWebView { webView }
    func updateUIView(_ uiView: WKWebView, context: Context) {}
}

private struct ShareSheet: UIViewControllerRepresentable {
    let url: URL
    func makeUIViewController(context: Context) -> UIActivityViewController {
        UIActivityViewController(activityItems: [url], applicationActivities: nil)
    }
    func updateUIViewController(_ uiViewController: UIActivityViewController, context: Context) {}
}
