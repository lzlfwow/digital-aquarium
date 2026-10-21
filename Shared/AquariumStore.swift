import Foundation
import UIKit

struct AquariumSnapshot: Codable {
    let schema: Int
    let capturedAt: Date
    let fishCount: Int
    let tank: String
    let smallFile: String
    let mediumFile: String
}

/// Only the app writes. A snapshot manifest is replaced last so the extension never reads half a pair.
final class AquariumStore {
    static let widgetKind = "StillwaterAquarium"
    let directory: URL
    let isShared: Bool
    private let manager = FileManager.default

    init(allowLocalFallback: Bool = false) throws {
        let group = Bundle.main.object(forInfoDictionaryKey: "StillwaterAppGroup") as? String ?? ""
        if let shared = FileManager.default.containerURL(forSecurityApplicationGroupIdentifier: group) {
            directory = shared.appendingPathComponent("Aquarium", isDirectory: true)
            isShared = true
        } else if allowLocalFallback {
            directory = try FileManager.default.url(for: .applicationSupportDirectory, in: .userDomainMask,
                appropriateFor: nil, create: true).appendingPathComponent("Aquarium", isDirectory: true)
            isShared = false
        } else {
            throw StoreError.unavailable
        }
        try manager.createDirectory(at: directory, withIntermediateDirectories: true)
        if isShared && allowLocalFallback {
            // If App Groups is enabled after a local-only trial, move forward without resetting progress.
            let local = try manager.url(for: .applicationSupportDirectory, in: .userDomainMask,
                appropriateFor: nil, create: true).appendingPathComponent("Aquarium/garden.json")
            let destination = directory.appendingPathComponent("garden.json")
            if !manager.fileExists(atPath: destination.path), manager.fileExists(atPath: local.path) {
                let data = try Data(contentsOf: local)
                _ = try Self.saveData(JSONSerialization.jsonObject(with: data))
                try data.write(to: destination, options: .atomic)
            }
        }
    }

    // An isolated directory makes storage failure/atomicity checks possible in simulator tests.
    init(testDirectory: URL) throws {
        directory = testDirectory; isShared = false
        try manager.createDirectory(at: directory, withIntermediateDirectories: true)
    }

    enum StoreError: LocalizedError {
        case unavailable, invalidSave, invalidImage
        var errorDescription: String? {
            switch self {
            case .unavailable: return "尚未配置 App Groups，小组件无法读取鱼缸。"
            case .invalidSave: return "存档无法读取，原文件已保留。"
            case .invalidImage: return "鱼缸快照无法读取，保留上次画面。"
            }
        }
    }

    // Full game semantics are validated by Garden.validate in the bundled, trusted game.
    static func saveData(_ object: Any) throws -> Data {
        guard let save = object as? [String: Any], save["version"] as? Int == 1,
              save["fish"] is [[String: Any]], save["decor"] is [[String: Any]],
              let coins = save["coins"] as? Int, coins >= 0,
              JSONSerialization.isValidJSONObject(save) else { throw StoreError.invalidSave }
        let data = try JSONSerialization.data(withJSONObject: save, options: [.sortedKeys])
        guard data.count <= 2 * 1024 * 1024 else { throw StoreError.invalidSave }
        return data
    }

    func loadSave() throws -> String? {
        let file = directory.appendingPathComponent("garden.json")
        guard manager.fileExists(atPath: file.path) else { return nil }
        let data = try Data(contentsOf: file)
        guard data.count <= 2 * 1024 * 1024 else { throw StoreError.invalidSave }
        _ = try Self.saveData(JSONSerialization.jsonObject(with: data))
        guard let text = String(data: data, encoding: .utf8) else { throw StoreError.invalidSave }
        return text
    }

    func writeSave(_ object: Any) throws {
        try Self.saveData(object).write(to: directory.appendingPathComponent("garden.json"), options: .atomic)
    }

    private func imageData(_ url: String, width: Int) throws -> Data {
        let prefix = "data:image/jpeg;base64,"
        guard url.hasPrefix(prefix), url.count < 2_000_000,
              let data = Data(base64Encoded: String(url.dropFirst(prefix.count))),
              let image = UIImage(data: data), image.cgImage?.width == width,
              image.cgImage?.height == 512 else { throw StoreError.invalidImage }
        return data
    }

    func writeSnapshot(save: [String: Any], images: [String: String]) throws {
        _ = try Self.saveData(save)
        let small = try imageData(images["small"] ?? "", width: 512)
        let medium = try imageData(images["medium"] ?? "", width: 1024)
        let generation = UUID().uuidString
        let smallName = "\(generation)-small.jpg", mediumName = "\(generation)-medium.jpg"
        let fish = (save["fish"] as? [[String: Any]] ?? []).filter { $0["location"] as? String == "tank" }
        let snapshot = AquariumSnapshot(schema: 1, capturedAt: Date(), fishCount: fish.count,
            tank: save["tank"] as? String ?? "basic", smallFile: smallName, mediumFile: mediumName)
        try small.write(to: directory.appendingPathComponent(smallName), options: .atomic)
        try medium.write(to: directory.appendingPathComponent(mediumName), options: .atomic)
        try JSONEncoder().encode(snapshot).write(to: directory.appendingPathComponent("snapshot.json"), options: .atomic)
        // Keep prior images long enough for an extension concurrently reading its previous manifest.
        let cutoff = Date().addingTimeInterval(-86400)
        for file in (try? manager.contentsOfDirectory(at: directory, includingPropertiesForKeys: [.contentModificationDateKey])) ?? [] {
            guard file.pathExtension == "jpg", file.lastPathComponent != smallName, file.lastPathComponent != mediumName,
                  let date = try? file.resourceValues(forKeys: [.contentModificationDateKey]).contentModificationDate,
                  date < cutoff else { continue }
            try? manager.removeItem(at: file)
        }
    }

    func readSnapshot() -> AquariumSnapshot? {
        guard let data = try? Data(contentsOf: directory.appendingPathComponent("snapshot.json")),
              let value = try? JSONDecoder().decode(AquariumSnapshot.self, from: data), value.schema == 1,
              value.fishCount >= 0 else { return nil }
        return value
    }

    func readImage(_ name: String) -> UIImage? {
        guard name == URL(fileURLWithPath: name).lastPathComponent, name.hasSuffix(".jpg") else { return nil }
        return UIImage(contentsOfFile: directory.appendingPathComponent(name).path)
    }
}
