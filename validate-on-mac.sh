#!/bin/bash
set -euo pipefail
cd "$(dirname "$0")"
if [[ "$(uname -s)" != "Darwin" ]]; then
  echo "请在已安装完整 Xcode 的 Mac 上运行。Linux 不能编译 iOS App。" >&2
  exit 1
fi
xcodebuild -version
if [[ -z "${STILLWATER_SIMULATOR_ID:-}" ]]; then
  STILLWATER_SIMULATOR_ID=$(xcrun simctl list devices available -j | /usr/bin/python3 -c 'import sys,json; d=json.load(sys.stdin); print(next((x["udid"] for runtime,items in d["devices"].items() if "iOS" in runtime for x in items if x.get("isAvailable") and "iPhone" in x["name"]), ""))')
fi
if [[ -z "$STILLWATER_SIMULATOR_ID" ]]; then
  echo "请先在 Xcode Settings → Components 下载 iOS 17 或更新的模拟器，并在 Devices and Simulators 创建一台 iPhone。" >&2
  exit 1
fi
xcodebuild -project Stillwater.xcodeproj -scheme Stillwater -configuration Debug \
  -destination "platform=iOS Simulator,id=$STILLWATER_SIMULATOR_ID" \
  -derivedDataPath DerivedData CODE_SIGNING_ALLOWED=NO test
