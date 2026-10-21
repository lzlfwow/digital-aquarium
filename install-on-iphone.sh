#!/bin/bash
# Rebuild and install over the existing app to preserve its save data.
# Set STILLWATER_IPHONE_ID when more than one physical iPhone is connected.
set -euo pipefail
cd "$(dirname "$0")"

device_id=${STILLWATER_IPHONE_ID:-}
if [[ -z "$device_id" ]]; then
  task_device_json=$(mktemp "${TMPDIR:-/tmp}/stillwater-devices.XXXXXX")
  trap 'rm -f "$task_device_json"' EXIT
  xcrun devicectl list devices --json-output "$task_device_json" >/dev/null
  device_id=$(/usr/bin/python3 - "$task_device_json" <<'PY'
import json, sys
with open(sys.argv[1]) as stream:
    devices = json.load(stream).get("result", {}).get("devices", [])
phones = [device for device in devices
    if device.get("hardwareProperties", {}).get("reality") == "physical"
    and device.get("hardwareProperties", {}).get("deviceType") == "iPhone"
    and device.get("connectionProperties", {}).get("tunnelState") == "connected"]
if not phones:
    sys.exit("未找到已连接的真实 iPhone。请连接并解锁手机，信任 Mac，开启开发者模式。")
if len(phones) > 1:
    sys.exit("检测到多台 iPhone，请设置 STILLWATER_IPHONE_ID=目标手机UDID 后重试。")
print(phones[0]["hardwareProperties"]["udid"])
PY
  )
fi
app_path=DerivedData-iPhone/Build/Products/Debug-iphoneos/Stillwater.app

xcodebuild -project Stillwater.xcodeproj -scheme Stillwater -configuration Debug \
  -destination "platform=iOS,id=$device_id" -destination-timeout 120 \
  -derivedDataPath DerivedData-iPhone \
  -allowProvisioningUpdates -allowProvisioningDeviceRegistration build

xcrun devicectl device install app --device "$device_id" "$app_path"
bundle_id=$(/usr/libexec/PlistBuddy -c 'Print :CFBundleIdentifier' "$app_path/Info.plist")
xcrun devicectl device process launch --device "$device_id" "$bundle_id"
echo "已安装并启动。请保持 App 前台至少 10 秒，再添加或查看「一缸微光」小组件。"
