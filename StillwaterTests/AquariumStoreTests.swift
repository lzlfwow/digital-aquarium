import XCTest
import UIKit
@testable import Stillwater

final class AquariumStoreTests: XCTestCase {
    var directory: URL!
    var store: AquariumStore!
    let save: [String: Any] = ["version": 1, "coins": 40, "fish": [["location": "tank"]], "decor": [], "tank": "basic"]

    override func setUpWithError() throws {
        directory = FileManager.default.temporaryDirectory.appendingPathComponent(UUID().uuidString)
        store = try AquariumStore(testDirectory: directory)
    }
    override func tearDownWithError() throws { try? FileManager.default.removeItem(at: directory) }

    func testSaveSurvivesReopeningAndInvalidWriteDoesNotReplaceIt() throws {
        XCTAssertNil(try store.loadSave())
        try store.writeSave(save)
        let original = try store.loadSave()
        XCTAssertThrowsError(try store.writeSave(["version": 999]))
        XCTAssertEqual(try AquariumStore(testDirectory: directory).loadSave(), original)
    }
    func testCorruptSaveIsPreserved() throws {
        let file = directory.appendingPathComponent("garden.json")
        try Data("corrupt".utf8).write(to: file)
        XCTAssertThrowsError(try store.loadSave())
        XCTAssertEqual(try String(contentsOf: file, encoding: .utf8), "corrupt")
    }
    func testSnapshotPairPublishesTogetherAndInvalidImageRetainsPrevious() throws {
        let images = ["small": jpeg(width: 512), "medium": jpeg(width: 1024)]
        try store.writeSnapshot(save: save, images: images)
        let original = try XCTUnwrap(store.readSnapshot())
        XCTAssertEqual(original.fishCount, 1)
        XCTAssertEqual(store.readImage(original.smallFile)?.cgImage?.width, 512)
        XCTAssertEqual(store.readImage(original.mediumFile)?.cgImage?.width, 1024)
        XCTAssertThrowsError(try store.writeSnapshot(save: save, images: ["small": images["small"]!, "medium": "broken"]))
        XCTAssertEqual(store.readSnapshot()?.smallFile, original.smallFile)
        XCTAssertNil(store.readImage("../garden.json"))
    }
    private func jpeg(width: Int) -> String {
        let format = UIGraphicsImageRendererFormat(); format.scale = 1; format.opaque = true
        let image = UIGraphicsImageRenderer(size: CGSize(width: CGFloat(width), height: 512), format: format).image { context in
            UIColor.systemTeal.setFill();context.fill(CGRect(x: 0, y: 0, width: CGFloat(width), height: 512))
        }
        return "data:image/jpeg;base64," + image.jpegData(compressionQuality: 0.8)!.base64EncodedString()
    }
}
