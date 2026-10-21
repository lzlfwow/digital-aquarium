import SwiftUI
import WidgetKit
import UIKit

struct AquariumEntry: TimelineEntry {
    let date: Date
    let snapshot: AquariumSnapshot?
    let small: UIImage?
    let medium: UIImage?
}

struct AquariumProvider: TimelineProvider {
    func placeholder(in context: Context) -> AquariumEntry { empty() }
    func getSnapshot(in context: Context, completion: @escaping (AquariumEntry) -> Void) { completion(read()) }
    func getTimeline(in context: Context, completion: @escaping (Timeline<AquariumEntry>) -> Void) {
        // The app requests reloads after writing. No timer, growth calculation or network in the extension.
        completion(Timeline(entries: [read()], policy: .never))
    }
    private func empty() -> AquariumEntry { AquariumEntry(date: Date(), snapshot: nil, small: nil, medium: nil) }
    private func read() -> AquariumEntry {
        guard let store = try? AquariumStore(), let snapshot = store.readSnapshot(),
              let small = store.readImage(snapshot.smallFile), let medium = store.readImage(snapshot.mediumFile) else { return empty() }
        return AquariumEntry(date: Date(), snapshot: snapshot, small: small, medium: medium)
    }
}

struct AquariumWidgetView: View {
    let entry: AquariumEntry
    @Environment(\.widgetFamily) private var family
    @Environment(\.widgetRenderingMode) private var renderingMode
    @Environment(\.colorScheme) private var colorScheme

    private var picture: UIImage? { family == .systemSmall ? entry.small : entry.medium }
    var body: some View {
        GeometryReader { geometry in
            ZStack(alignment: .bottomLeading) {
                if let picture {
                    aquariumImage(picture)
                        .scaledToFit()
                        .frame(width: geometry.size.width, height: geometry.size.height)
                } else {
                    Image(family == .systemSmall ? "WidgetPlaceholderSmall" : "WidgetPlaceholderMedium").resizable().scaledToFit()
                        .frame(width: geometry.size.width, height: geometry.size.height)
                }
                LinearGradient(colors: [.clear, .black.opacity(colorScheme == .dark ? 0.62 : 0.45)], startPoint: .center, endPoint: .bottom)
                VStack(alignment: .leading, spacing: 3) {
                    if let snapshot = entry.snapshot {
                        if family == .systemMedium {
                            Text("一缸微光 · \(snapshot.fishCount) 尾鱼").font(.system(size: 13, weight: .medium))
                            Text("保存于 \(snapshot.capturedAt.formatted(date: .omitted, time: .shortened))")
                                .font(.system(size: 10))
                        } else { Text("一缸微光").font(.system(size: 11, weight: .medium)) }
                    } else {
                        Text("一缸微光").font(.system(size: 13, weight: .medium))
                        Text("打开 App，迎接小鱼").font(.system(size: 10))
                    }
                }
                .foregroundStyle(.white)
                .padding(12)
            }
            .clipped()
        }
        .containerBackground(for: .widget) {
            Color(red: 0.76, green: 0.86, blue: 0.89)
        }
        .widgetURL(URL(string: "stillwater://aquarium"))
        .accessibilityElement(children: .ignore)
        .accessibilityLabel(entry.snapshot.map { "一缸微光，鱼缸里有\($0.fishCount)尾鱼，点击打开鱼缸" } ?? "一缸微光，点击打开 App 初始化鱼缸")
    }

    @ViewBuilder
    private func aquariumImage(_ image: UIImage) -> some View {
        if #available(iOSApplicationExtension 18.0, *) {
            Image(uiImage: image).resizable()
                .widgetAccentedRenderingMode(renderingMode == .accented ? .desaturated : .fullColor)
        } else {
            Image(uiImage: image).resizable()
        }
    }
}

@main
struct StillwaterWidget: Widget {
    var body: some WidgetConfiguration {
        StaticConfiguration(kind: AquariumStore.widgetKind, provider: AquariumProvider()) { entry in
            AquariumWidgetView(entry: entry)
        }
        .configurationDisplayName("一缸微光")
        .description("把最近保存的鱼缸放在桌面，轻点回来看看小鱼。")
        .supportedFamilies([.systemSmall, .systemMedium])
        .contentMarginsDisabled()
    }
}
