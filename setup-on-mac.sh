#!/bin/bash
# Install Xcode from the App Store and finish its first launch before running.
# Uses the system Python only for JSON parsing; no conda or pip packages needed.
set -euo pipefail
cd "$(dirname "$0")"

if [[ "$(uname -s)" != Darwin ]]; then
  echo "请在 Mac 上运行此脚本。" >&2
  exit 1
fi

# Scope the toolchain to this process, without changing global xcode-select.
if [[ -z "${DEVELOPER_DIR:-}" ]]; then
  active_developer_dir=$(xcode-select -p 2>/dev/null || true)
  if [[ -x "$active_developer_dir/usr/bin/xcodebuild" ]]; then
    export DEVELOPER_DIR="$active_developer_dir"
  else
    for xcode_app in /Applications/Xcode.app "$HOME/Applications/Xcode.app"; do
      if [[ -x "$xcode_app/Contents/Developer/usr/bin/xcodebuild" ]]; then
        export DEVELOPER_DIR="$xcode_app/Contents/Developer"
        break
      fi
    done
  fi
fi

if [[ -z "${DEVELOPER_DIR:-}" || ! -x "$DEVELOPER_DIR/usr/bin/xcodebuild" ]]; then
  echo "尚未安装完整 Xcode。请从 App Store 安装 Xcode 16 或更新版本，" >&2
  echo "首次打开完成组件安装与系统认证，然后重新运行 bash setup-on-mac.sh。" >&2
  echo "若 Xcode 安装在其他位置，请设置 DEVELOPER_DIR 指向其 Contents/Developer。" >&2
  exit 1
fi

xcode_version=$(xcodebuild -version)
printf '%s\n' "$xcode_version"
xcode_major=$(printf '%s\n' "$xcode_version" | awk '/^Xcode / {split($2, v, "."); print v[1]}')
if [[ -z "$xcode_major" || "$xcode_major" -lt 16 ]]; then
  echo "需要 Xcode 16 或更新版本。" >&2
  exit 1
fi

if ! xcodebuild -checkFirstLaunchStatus; then
  echo "请先打开 Xcode，完成首次启动的协议、组件安装和系统认证，再重新运行。" >&2
  exit 1
fi

select_simulator() {
  xcrun simctl list --json | /usr/bin/python3 -c '
import json, sys
data = json.load(sys.stdin)
def version(runtime):
    return tuple(int(part) for part in runtime["version"].split("."))
runtimes = sorted((r for r in data["runtimes"]
    if r.get("isAvailable") and ".iOS-" in r["identifier"]
    and version(r) >= (17,)), key=version, reverse=True)
for runtime in runtimes:
    devices = [d for d in data["devices"].get(runtime["identifier"], [])
        if d.get("isAvailable") and ".iPhone-" in d.get("deviceTypeIdentifier", "")]
    if devices:
        device = next((d for d in devices if d["name"] == "Stillwater iPhone"), devices[0])
        print(runtime["identifier"])
        print(device["udid"])
        break
else:
    print(runtimes[0]["identifier"] if runtimes else "")
    print("")
'
}

if [[ -z "${STILLWATER_SIMULATOR_ID:-}" ]]; then
  selection=$(select_simulator)
  runtime=${selection%%$'\n'*}
  if [[ -z "$runtime" ]]; then
    echo "下载并安装 iOS 模拟器运行环境（可能需要较长时间）……"
    xcodebuild -downloadPlatform iOS
    selection=$(select_simulator)
    runtime=${selection%%$'\n'*}
  fi
  if [[ -z "$runtime" ]]; then
    echo "没有可用的 iOS 17+ 运行环境，请在 Xcode Settings → Components 中安装。" >&2
    exit 1
  fi
  simulator_id=${selection#*$'\n'}
  if [[ "$selection" != *$'\n'* || -z "$simulator_id" ]]; then
    simulator_id=$(xcrun simctl create "Stillwater iPhone" \
      com.apple.CoreSimulator.SimDeviceType.iPhone-15 "$runtime")
  fi
  export STILLWATER_SIMULATOR_ID="$simulator_id"
fi

echo "使用模拟器：$STILLWATER_SIMULATOR_ID"
bash validate-on-mac.sh
open Stillwater.xcodeproj
echo "构建和 XCTest 已通过。请在 Xcode 中运行 App，继续 README 中的小组件手动验收。"
