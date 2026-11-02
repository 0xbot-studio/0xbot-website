import type { Locale } from "../content";
export function PriceCapabilities({ lang }: { lang: Locale }) {
  const zh = lang === "zh";
  return (
    <section className="site-section" id="prices">
      <h2>{zh ? "价格查询" : "Reference prices"}</h2>
      <p>
        {zh
          ? "BTC、ETH、BNB，以及 Ethereum、BSC、Polygon 上指定合约代币的美元参考行情。"
          : "Reference USD prices for BTC, ETH, BNB and supported token contracts on Ethereum, BSC and Polygon."}
      </p>
      <div className="cap-grid">
        {[
          ["asset-price", "get_asset_price", zh ? "主流币价格" : "Asset price"],
          [
            "token-price",
            "get_token_price",
            zh ? "合约代币价格" : "Contract token price",
          ],
        ].map(([slug, tool, title]) => (
          <article className="cap-card" key={slug}>
            <span className="badge green">
              {zh ? "预览 · 只读" : "Preview · read-only"}
            </span>
            <h3>{title}</h3>
            <p>
              <code>{tool}</code>
            </p>
            <a
              className="text-link"
              href={"https://app.0xbot.org/#playground/" + slug}
            >
              {zh ? "打开价格查询" : "Open price query"} →
            </a>
          </article>
        ))}
      </div>
      <p className="notice">
        {zh
          ? "返回来源、报价更新时间和缓存状态。缓存30秒；拒绝超过10分钟或置信度不足的报价。并非所有合约均有行情，无报价不等于零。美元参考价格不是USDT成交价、兑换承诺或安全评级。"
          : "Results include source, quote update time and cache status. Cache: 30 seconds; stale (>10 minutes) or low-confidence quotes are rejected. Not every contract is priced; missing data is not zero. A reference USD price is not a USDT trade price, execution promise or safety rating."}
      </p>
    </section>
  );
}
