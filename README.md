# 一缸微光：iOS App 与桌面小组件

基线 demo 标签：`v0.1.0-demo`。本仓库保存已跑通的 iOS 工程、打包游戏资源、小组件、测试、部署脚本和复盘文档，可从 GitHub 克隆后直接打开 `Stillwater.xcodeproj`。

这是原生 **Xcode 源码工程**，不是可直接安装的 IPA。包含现有 3D 游戏、本机存档桥接、小号/中号 WidgetKit 小组件，最低 iOS 17。网页仍可正常使用，当前公开网址不需要替换。

小组件显示最近保存的鱼缸快照；点击进入完整游戏。鱼群、鱼缸和布置来自自己的存档。小组件没有后台渲染、联网或离线成长。系统控制刷新时间，不能保证离开 App 后立刻刷新。

2026-10-21 已完成个人真机部署，用户已确认手机游戏与桌面小组件整体流程跑通。环境、签名、排障经验及后续迭代与分发计划见[真机部署复盘](docs/2026-10-21-ios-delivery-retrospective.md)。

## 先在 Mac 模拟器里打开

1. 在 Mac App Store 安装 **Xcode**，首次打开并完成组件安装。使用 Xcode 16 或更新版本；真机系统比当前 Xcode 支持的版本新时，先更新 Xcode。
2. 在 Xcode Settings → Components（部分版本名为 Platforms）下载 iOS 模拟器运行环境。
3. 解压 `stillwater-ios-source.zip`，双击里面的 **Stillwater.xcodeproj**。整个文件夹都要保留，不要只复制这个工程文件。
4. 顶部 Scheme 选择 **Stillwater**，运行设备选择 iPhone 模拟器，点击 ▶。
5. 在 App 里等待首次鱼缸快照生成；按模拟器的 Home 返回桌面，长按空白处 → 编辑/添加小组件 → 一缸微光，选择小号或中号。

下载包已包含游戏资源，不需要在 Mac 安装 Node.js 或重新构建网页。模拟器不需要 App Store 发布；若没有可选 iPhone，在 Window → Devices and Simulators 新建模拟器。

如果看到“尚未配置 App Groups”，App 内仍能使用本地鱼缸，但小组件不会读取这份回退存档。请按下一节配置共享能力，不能将回退模式视为小组件验收通过。启用共享容器且该容器尚无存档时，App 会尝试迁移自己的本地回退存档。

## 再安装到自己的 iPhone

1. 在 Xcode Settings → Accounts 登录 Apple 账号。
2. 先复制本地签名配置模板：

   ```bash
   cp Configuration.local.xcconfig.example Configuration.local.xcconfig
   ```

   打开 **Configuration.local.xcconfig**，只需改两项。该文件由共享配置自动读取，并已被 Git 忽略：

   ```text
   STILLWATER_BUNDLE_PREFIX = com.你的唯一标识.stillwater
   DEVELOPMENT_TEAM = 你的10位TeamID
   ```

   Bundle ID 请使用英文字母、数字和点，例如 `com.yourname.stillwater`。上面的中文只是占位说明。App 与小组件都从该文件获得签名设置，不要给它们配置不同的 App Group。

3. 选择 App 和 StillwaterWidget 两个 Target → Signing & Capabilities，确认同一个 Team、自动签名，以及同一个 App Groups 条目 `group.com.yourname.stillwater.shared`。若显示红色，先在开发者账号中注册/启用该 Group，并让 Xcode 更新签名描述文件。
4. 普通 Apple 账号可先使用 Personal Team 自动签名。本机在 2026-10-21 已成功为 App 和 Widget 签出包含同一 App Group 的开发描述文件，并安装到 iPhone。其他账号以 Xcode 实际签名结果为准；若提示团队不支持该能力，需要使用支持该能力的团队。不要删掉 App Groups 后把 App 能运行当成组件同步成功。
5. 用数据线连接 iPhone，在手机上选择信任 Mac；按提示在设置 → 隐私与安全性 → 开发者模式中开启并重启。
6. 顶部选择自己的 iPhone，点击 ▶。打开 App 初始化鱼缸，再从桌面添加「一缸微光」小组件。
7. 若首次打开提示开发者尚未受信任，在手机的设置 → 通用 → VPN 与设备管理中找到自己的开发者账号，按提示信任，必要时允许重启。

当前开发安装使用开发签名，不是永久分发包；签名失效后需要重新编译安装。不要为了续签先卸载 App，卸载会清掉 App 内存档。改 Bundle ID 相当于另一个 App，修改前先导出备份。此版本未提交 TestFlight/App Store，也没有自动注册账号或代付开发者会员。

本机已配置好账号和手机后，可在此目录重新签名、覆盖安装并启动：

```bash
bash install-on-iphone.sh
```

脚本默认选择唯一已连接的真实 iPhone；连接多台手机时可设置 `STILLWATER_IPHONE_ID=目标手机UDID`。Personal Team 本次生成的描述文件有效期为 7 天，截至 2026-10-28；到期后连接手机重新运行脚本。保持本地配置中的 Bundle ID，覆盖安装保留原有存档。App 前台运行至少 10 秒后，再回桌面查看小组件。

## 迁移你现在的鱼缸

1. 在目前使用的网页中点「随身鱼缸 → 导出存档」，保存 JSON 文件到“文件”或通过 AirDrop 发给手机。
2. 原生 App 中点「随身鱼缸 → 导入存档」，选择文件。
3. 确认鱼的数量与金币，点击替换。只有格式校验及本机写入成功后才替换当前鱼缸；取消、无效文件和写入失败均保留当前进度。
4. 使用「导出存档」会打开 iOS 分享面板，可选择“存储到文件”。网页与 App 不自动同步，之后要迁移回来也使用导出/导入。

同一台手机安装桌面 PWA 与原生 App，也会是两个独立存档。没有账号、云端存档或服务器计算。

## 已检查与待验证

2026-10-21 已在 macOS 26.6、Xcode 27.1 完成 App 和 Widget 的模拟器与真机架构构建；iOS 27.1 模拟器上 3 项 XCTest 全部通过。已在 iPhone 16（iOS 26.6.1）完成开发签名、安装和真实 WKWebView 启动，画面显示鱼缸且没有 App Groups 回退提示。App 与 Widget 的签名、描述文件及 Info.plist 均已核对为同一 App Group。

用户已确认手机游戏与桌面小组件整体流程跑通。后续版本仍按下方清单回归音频、导入导出、各尺寸与显示模式、辅助功能等行为；整体流程跑通不代表这些组合都已逐项记录验收。

在 Mac 终端进入此目录，运行：

```bash
bash validate-on-mac.sh
```

脚本选择已安装的可用 iPhone 模拟器，执行 Xcode 构建和 XCTest。也可指定设备：

```bash
STILLWATER_SIMULATOR_ID=模拟器UDID bash validate-on-mac.sh
```

XCTest 覆盖本机存档重开、无效写入不覆盖、损坏旧档保留、成对快照原子发布、坏图片不替换已有快照。随后需要手动验收：

- 开飞行模式后冷启动，鱼缸、商店、音乐可用；退出重开保留鱼、金币与布置。
- 从网页导入存档，再导出到“文件”；无效文件/取消导入不改变鱼缸。
- 添加小号和中号组件：完整显示玻璃缸，无网页按钮，鱼数与最近快照一致；点击进入 App。
- 买鱼、繁殖、换缸、移动布置后保持 App 前台至少 10 秒，再回桌面等待系统刷新。
- 退出/锁屏后音频暂停、成长暂停；返回不补算离开时间。
- 检查浅色、深色、iOS 18+ 着色模式，放大文字与 VoiceOver；着色时图片按系统采用去色模式。
- 先添加组件但未打开过 App 时，显示默认鱼缸与初始化提示。
- 高频布置不会每次立即重渲染快照；生成最多每 10 秒一次，刷新请求通常最多每分钟一次，退到后台时有待发布快照会补发一次请求。实际刷新仍由 iOS 决定。

## 后续开发

当前目录是 iOS 交付源码包，未包含 `package.json` 和下列原始网页构建脚本。持续修改玩法和 3D 资源前，先取回原始网页工程并建立版本控制；详细优先顺序见[真机部署复盘](docs/2026-10-21-ios-delivery-retrospective.md)。

在原项目根目录执行：

```bash
npm ci
npm run ios:prepare
npm run ios:check
npm test
npm run ios:package
```

- `ios:prepare` 重建 3D 脚本，并将白名单游戏资源复制到 `Stillwater/Web/`；只在原生包里加入桥接与原生管理入口，不打包 Service Worker。
- `ios:check` 验证 PBX 引用、三种 Target、共享配置、资源哈希和打包内容。它不是 Swift 编译器。
- `ios:package` 输出 `release/stillwater-ios-source.zip`，可直接转移到 Mac。
- Xcode 工程已生成并保存在项目里，不需要 XcodeGen 或 CocoaPods。新增 Swift 文件时添加到对应 Target；共享存储代码需同时属于 App 与 Widget Target。
- `scripts/generate-ios-project.py` 是原始工程生成器，仅修改工程结构时使用，运行会重新生成工程；不会替你填写 Team ID。

桥接仅允许主框架中的本地包页面访问，不允许远程网页导航后继续访问原生存储。游戏规则由现有 `Garden.validate` 校验；Widget 不执行交易逻辑。保存文件为 App Group 容器中的 `Aquarium/garden.json`，快照先写两张带唯一编号的 JPEG，再原子替换 `snapshot.json`；读取失败显示默认画面而不修改文件。旧快照至少保留一天供并发读取，后续写入时清理。

官方参考：[Widget Extension](https://developer.apple.com/documentation/widgetkit/creating-a-widget-extension)、[App Groups](https://developer.apple.com/documentation/xcode/configuring-app-groups)、[开发能力与会员类型](https://developer.apple.com/help/account/capabilities/capabilities-overview)。
