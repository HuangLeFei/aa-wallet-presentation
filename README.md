# AA 钱包深度解析演示文稿 (AA Wallet Presentation)

一份关于账户抽象（Account Abstraction）钱包的交互式演示幻灯片，深入剖析了 EIP-4337 标准与 EIP-7702 提案。

## 🌟 项目亮点

- **沉浸式演示体验**：采用沉浸式侧边导航设计，支持全屏视窗交互。
- **动态布局**：自适应高度卡片设计，在不同屏幕尺寸下均有良好表现。
- **深度内容**：
  - EOA (外部拥有账户) 的工作原理与限制。
  - **EIP-4337**：UserOperation、Bundler、EntryPoint 和 Paymaster 四大核心组件详解。
  - **EIP-7702**：协议层实现的临时授权机制及其对 EOA 的赋能。
  - 核心案例分析：Argent、Safe、Biconomy 等。
  - 未来展望：AI 辅助钱包、隐私增强与 Web2 级用户体验。

## 🛠 技术栈

- **框架**：React 19
- **构建工具**：Vite 7
- **样式**：Tailwind CSS
- **图标**：Lucide React

## 🚀 快速启动

### 1. 安装依赖
```bash
npm install
```

### 2. 启动开发服务器
```bash
npm run dev
```
项目默认在端口 `2525` 启动，并已配置支持局域网访问。

## ⚙️ 项目配置

项目核心配置位于 `vite.config.js`：
- **Port**: 2525 (可通过修改 `server.port` 自定义)
- **Host**: 已开启，支持通过局域网 IP 访问。

## 📝 备注
本演示文稿由 [lfhuang](https://github.com/huanglefei) 整理与制作。内容涵盖了从传统钱包到智能账户演进的完整技术路线。

