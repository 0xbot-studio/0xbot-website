import type { Locale } from "../content";
export function MessageCapabilities({ lang }: { lang: Locale }) {
  const zh = lang === "zh";
  return (
    <section className="site-section" id="messages">
      <h2>{zh ? "地址消息" : "Address messaging"}</h2>
      <p>
        {zh
          ? "向ETH地址发送站内信，对方验证钱包身份后读取。消息写入收件箱，不会推送到钱包 App。"
          : "Send an inbox message to an Ethereum address. The recipient verifies their wallet to read it; no wallet-app push notification."}
      </p>
      <div className="cap-grid">
        {[
          ["send-message", "send_message", zh ? "发送消息" : "Send message"],
          ["inbox", "list_messages", zh ? "最近收件" : "Recent inbox"],
          [
            "message-detail",
            "get_message",
            zh ? "消息详情" : "Message details",
          ],
        ].map(([slug, tool, title]) => (
          <article className="cap-card" key={slug}>
            <span className="badge">
              {zh ? "预览 · 需授权" : "Preview · authorization required"}
            </span>
            <h3>{title}</h3>
            <code>{tool}</code>
            <p>
              <a
                className="text-link"
                href={"https://app.0xbot.org/#playground/" + slug}
              >
                {zh ? "打开消息工具" : "Open messaging tool"} →
              </a>
            </p>
          </article>
        ))}
      </div>
      <p className="notice">
        {zh
          ? "服务端存储纯文本，非端到端加密；请勿发送秘密。既有 data:read API Key 和 MCP 授权不能读写私信。MCP 必须重新发起包含 messages:read 或 messages:send 的授权请求，并由用户确认绑定的已验证钱包。XMTP 尚未接入，不同服务不自动互通或切换。"
          : "Plain text is stored by the service, not end-to-end encrypted. Do not send secrets. Existing data:read API keys and MCP grants cannot access private messages. Start a new MCP authorization requesting messages:read or messages:send alongside data:read, then explicitly approve a verified wallet. XMTP is not connected; no automatic cross-provider delivery or fallback."}
      </p>
    </section>
  );
}
