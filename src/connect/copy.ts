export const connectCopy = {
  en: {
    title: "Connect Web3 to your agent.",
    intro: "One MCP endpoint. Your choice of client and provider.",
    choose: "Choose your agent environment",
    browser:
      "Add the server, then sign in through your browser and approve read-only access. In Cursor, open MCP settings and use the server's sign-in action. Older Claude Code versions can authenticate through /mcp.",
    key: "For scripts, sign in to your workspace and create a read-only API key. Keep it in your local secret manager; never paste it into chat or commit it.",
    config: "Or merge this configuration without replacing existing servers:",
    agent: "Let your agent help",
    source: "Official setup documentation",
    safety:
      "Public-data tools are read-only. Private messages require separate wallet-bound consent; sending is a write. No private keys or transfers. Wallet login is available; X requires application configuration. You can revoke connected apps from your account.",
    try: "Then ask your agent",
    example:
      "List the supported USDT/USDC contracts, then ask me for an address and network before querying its common-asset balances.",
    limits:
      "Ethereum · BSC · Polygon. Free preview; public upstream limits apply. Receipts, transaction details and wallet NFT enumeration are planned. Exact NFT queries and address inbox messaging have separate capability entries.",
    status:
      "OAuth integration preview · client compatibility requires verification with your installed version.",
    connect: "Connect my agent",
  },
  zh: {
    title: "为你的 Agent 接入 Web3。",
    intro: "一个 MCP 入口，自由选择客户端与 Provider。",
    choose: "选择 Agent 的运行环境",
    browser:
      "添加服务后，通过浏览器登录并确认只读授权。Cursor 在 MCP 设置中点击服务的登录操作；旧版 Claude Code 可通过 /mcp 进行授权。",
    key: "脚本可先登录工作区，创建只读 API Key。密钥放在本地安全配置中，不要粘贴到聊天或提交到仓库。",
    config: "也可合并以下配置，请保留已有服务器：",
    agent: "让 Agent 帮你配置",
    source: "官方接入说明",
    safety:
      "公开数据工具为只读；私信需独立的钱包绑定授权，发送属于写操作。不索取私钥、不授权转账。支持钱包登录，X 需配置应用凭证。可在账号页撤销已连接应用。",
    try: "接入后试着问",
    example:
      "列出支持的 USDT/USDC 合约，然后询问我要查询的地址和网络，再查询该网络的常用资产余额。",
    limits:
      "Ethereum · BSC · Polygon。预览期免费，受公共上游限流约束。Receipt、交易详情及钱包NFT列表尚未开放；指定NFT查询与地址消息请查看独立能力说明。",
    status: "OAuth 接入预览 · 请按所安装客户端版本验证兼容性。",
    connect: "接入我的 Agent",
  },
};
