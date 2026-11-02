export const endpoint = "https://api.0xbot.org/mcp";
export const codexSetupCommand = "codex mcp add 0xbot --url " + endpoint;
export const codexGuestLoginCommand =
  "codex mcp login 0xbot --scopes data:read,rooms:read,rooms:write";
export const clients = [
  {
    id: "claude",
    name: "Claude Code",
    file: ".mcp.json",
    source: "https://code.claude.com/docs/en/mcp",
    commands:
      "claude mcp add --transport http 0xbot " +
      endpoint +
      "\nclaude mcp login 0xbot",
    config: JSON.stringify(
      { mcpServers: { "0xbot": { type: "http", url: endpoint } } },
      null,
      2,
    ),
  },
  {
    id: "cursor",
    name: "Cursor",
    file: ".cursor/mcp.json",
    source: "https://cursor.com/docs/mcp",
    commands: "",
    config: JSON.stringify(
      { mcpServers: { "0xbot": { url: endpoint } } },
      null,
      2,
    ),
  },
  {
    id: "codex",
    name: "Codex CLI",
    file: "config.toml",
    source: "https://learn.chatgpt.com/docs/extend/mcp?surface=cli",
    commands: codexSetupCommand + "\ncodex mcp login 0xbot",
    config: '[mcp_servers."0xbot"]\nurl = "' + endpoint + '"',
  },
  {
    id: "http",
    name: "HTTP / API Key",
    file: "HTTP",
    source: "https://api.0xbot.org/openapi.json",
    commands: "",
    config:
      "POST " +
      endpoint +
      '\nAuthorization: Bearer <YOUR_API_KEY>\nContent-Type: application/json\nAccept: application/json, text/event-stream\n\n{"jsonrpc":"2.0","id":1,"method":"initialize","params":{"protocolVersion":"2025-11-25","capabilities":{},"clientInfo":{"name":"my-agent","version":"1"}}}',
  },
] as const;
export function agentPrompt(
  client: (typeof clients)[number],
  lang: "en" | "zh",
) {
  const setup = client.commands || client.file + "\n" + client.config;
  return lang === "zh"
    ? "请在当前客户端配置 0xbot MCP，保留已有配置，不覆盖其他服务器。\n" +
        setup +
        "\n" +
        (client.id === "http"
          ? "API Key 由我在本地安全配置，不要让我发送到聊天中。"
          : "使用 OAuth；打开浏览器后停下来，让我自行登录 0xbot 并确认只读授权。不要索取 API Key、私钥或验证码。") +
        "\n授权后列出工具，调用 get_supported_tokens 验证连接。不要签署或发送交易。"
    : "Configure 0xbot MCP in this client; preserve existing server entries.\n" +
        setup +
        "\n" +
        (client.id === "http"
          ? "I will configure my API key securely outside chat. Do not ask me to paste it here."
          : "Use OAuth. When the browser opens, stop and let me sign in to 0xbot and approve read-only access. Never ask for API keys, private keys or verification codes.") +
        "\nAfter authorization, list tools and call get_supported_tokens to verify. Do not sign or send transactions.";
}
