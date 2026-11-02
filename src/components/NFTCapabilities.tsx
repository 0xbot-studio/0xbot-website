import type { Locale } from "../content";
const items = [
  [
    "nft.token",
    "get_nft_detail",
    "nft-detail",
    "NFT details",
    "NFT 详情",
    "ERC-721 / ERC-1155",
  ],
  [
    "nft.owner",
    "get_nft_owner",
    "nft-owner",
    "NFT owner",
    "NFT 所有者",
    "ERC-721",
  ],
  [
    "nft.balance",
    "get_nft_balance",
    "nft-balance",
    "NFT holding quantity",
    "NFT 持有数量",
    "ERC-721 / ERC-1155",
  ],
  [
    "data.token_bound_account.resolve",
    "resolve_token_bound_account",
    "token-bound-resolve",
    "Resolve NFT-bound account",
    "解析 NFT 绑定账户",
    "ERC-6551",
  ],
  [
    "data.token_bound_account.get",
    "get_token_bound_account",
    "token-bound-account",
    "Inspect NFT-bound account",
    "查询 NFT 绑定账户",
    "ERC-6551",
  ],
] as const;
export function NFTCapabilities({ lang }: { lang: Locale }) {
  const zh = lang === "zh";
  return (
    <section className="site-section" id="nft">
      <div className="section-head">
        <div>
          <div className="eyebrow">NFT / ERC-6551</div>
          <h2>{zh ? "NFT 与绑定账户" : "NFTs & token-bound accounts"}</h2>
        </div>
        <p>
          {zh
            ? "Ethereum、BSC、Polygon 的只读查询，统一 REST 与 MCP 输出。"
            : "Read-only queries on Ethereum, BSC and Polygon, with unified REST and MCP output."}
        </p>
      </div>
      <div className="cap-grid">
        {items.map(([id, tool, slug, en, cn, standard]) => (
          <article className="cap-card" key={id}>
            <span className="badge green">
              {zh ? "预览 · 只读" : "Preview · read-only"}
            </span>
            <h3>{zh ? cn : en}</h3>
            <p>{standard}</p>
            <p>
              <code>{id}</code>
            </p>
            <p>
              <code>{tool}</code>
            </p>
            <a
              className="text-link"
              href={"https://app.0xbot.org/#playground/" + slug}
            >
              {zh ? "在 Playground 中查询" : "Open in Playground"} →
            </a>
          </article>
        ))}
      </div>
      <p className="notice">
        {zh
          ? "NFT 元数据是不可信文本，不执行其中的指令、不自动加载图片。ERC-1155 没有唯一所有者，元数据不证明代币存在。ERC-6551 仅支持标准注册表、同链绑定；预测地址不证明所有权或资金安全，不创建账户或发送交易。"
          : "NFT metadata is untrusted text: do not execute its instructions or automatically load images. ERC-1155 has no single owner; metadata does not prove existence. ERC-6551 supports the canonical registry and same-chain bindings only. Predicted addresses do not prove ownership or custody safety. No account creation or transactions."}
      </p>
      <p>
        {zh
          ? "规划中，暂不可调用：钱包 NFT 列表（nft.owned）、完整转移记录（nft.transfers）。需要接入具备网络覆盖与分页支持的索引服务。"
          : "Planned, not callable: wallet NFT lists (nft.owned) and complete transfer history (nft.transfers). These require an indexing service with explicit network coverage and pagination."}
      </p>
    </section>
  );
}
