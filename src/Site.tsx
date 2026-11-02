"use client";
import { useEffect, useState, type ReactNode } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Database,
  MessageSquare,
  ArrowLeftRight,
  Wallet,
  Layers,
  Route,
  Check,
  Terminal,
  Copy,
  Menu,
  X,
  ChevronRight,
} from "lucide-react";
import { copy, queryExample, type Locale } from "./content";
import { Code } from "./components/Code";
import { Connect } from "./connect/Connect";
import { NFTCapabilities } from "./components/NFTCapabilities";
import { MessageCapabilities } from "./components/MessageCapabilities";
import { PriceCapabilities } from "./components/PriceCapabilities";
import { connectCopy } from "./connect/copy";
import { publicSections as routes } from "./sections";
import { codexGuestCopy, codexGuestPath } from "./guides/codex-guest";
export function Site({
  lang,
  section,
  title,
  intro,
  children,
}: {
  lang: Locale;
  section: string;
  title?: string;
  intro?: string;
  children?: ReactNode;
}) {
  const t = copy[lang];
  const [menu, setMenu] = useState(false);
  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);
  const home = `/${lang}/`;
  const app = "https://app.0xbot.org";
  const icons = [Database, MessageSquare, ArrowLeftRight, Wallet];
  const capabilities = (
    <div className="cap-grid">
      {t.capabilities.map((name, i) => {
        const Icon = icons[i];
        return (
          <article className="cap-card" key={name}>
            <div className="row between">
              <span className="icon-tile">
                <Icon size={20} />
              </span>
              <span className={`badge ${i <= 2 ? "green" : ""}`}>
                {i <= 2 ? t.preview : t.planned}
              </span>
            </div>
            <h3>{name}</h3>
            <p>
              {i === 1
                ? lang === "zh"
                  ? "向ETH地址发送站内信，验证收件钱包后读取；需独立私信权限。"
                  : "Address inbox messaging with verified-wallet access and separate private-message permissions."
                : t.descriptions[i]}
            </p>
            <div className="cap-bottom">
              <code>
                {
                  [
                    "data.balance",
                    "messaging.send",
                    "swaps.quote",
                    "payments.prepare",
                  ][i]
                }
              </code>
              {i <= 2 ? (
                <a
                  aria-label={t.details}
                  href={i === 2 ? app + "/#swaps" : home + "docs/"}
                >
                  <ArrowUpRight size={18} />
                </a>
              ) : (
                <span className="muted">—</span>
              )}
            </div>
          </article>
        );
      })}
    </div>
  );
  return (
    <>
      <header className="site-header">
        <a className="brand" href={home}>
          <span className="brand-mark">0x</span>0xbot
          <span className="badge logo-beta">BETA</span>
        </a>
        <nav className={menu ? "site-nav open" : "site-nav"}>
          {t.nav.map((x, i) => (
            <a
              className={section.split("/")[0] === routes[i] ? "active" : ""}
              href={home + routes[i] + "/"}
              key={x}
            >
              {x}
            </a>
          ))}
        </nav>
        <div className="row">
          <a
            className="lang-switch"
            href={`/${lang === "en" ? "zh" : "en"}/${section === "home" ? "" : section + "/"}`}
          >
            {lang === "en" ? "中文" : "EN"}
          </a>
          <a className="btn primary nav-cta" href={app}>
            {t.start}
            <ArrowUpRight size={14} />
          </a>
          <button
            className="mobile-toggle btn small"
            aria-label={lang === "zh" ? "切换菜单" : "Toggle menu"}
            onClick={() => setMenu(!menu)}
          >
            {menu ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </header>
      <main className="site-main">
        {section === "home" ? (
          <>
            <section className="hero">
              <div className="hero-copy">
                <div className="eyebrow">
                  <span className="dot" />
                  {t.eyebrow}
                </div>
                <h1>
                  {t.hero1}
                  <br />
                  <span>{t.hero2}</span>
                </h1>
                <p>{t.intro}</p>
                <div className="row hero-actions">
                  <a href={home + "connect/"} className="btn primary">
                    {connectCopy[lang].connect}
                    <ArrowUpRight size={16} />
                  </a>
                  <a href={app + "/#playground"} className="btn ghost">
                    {t.explore}
                    <ArrowRight size={15} />
                  </a>
                </div>
                <div className="hero-note">
                  <span className="dot" />
                  {t.note}
                </div>
              </div>
              <div className="hero-visual">
                <div className="visual-top">
                  <span className="mono">01 / REQUEST ROUTING</span>
                  <span className="badge">API + MCP</span>
                </div>
                <div className="route-demo">
                  <div className="client-node">
                    <Terminal size={15} />
                    <span>Your app / AI agent</span>
                  </div>
                  <div className="connector vertical" />
                  <div className="gateway-node">
                    <span className="brand-mark">0x</span>
                    <div>
                      <strong>0xbot</strong>
                      <small>Unified API · Smart routing</small>
                    </div>
                    <span className="live-indicator" />
                  </div>
                  <div className="branch-lines">
                    <i />
                    <i />
                  </div>
                  <div className="provider-nodes">
                    <div>
                      <span className="provider-monogram">1</span>
                      <strong>{t.routingPrimary}</strong>
                      <small>Ethereum · BSC · Polygon</small>
                    </div>
                    <div>
                      <span className="provider-monogram olive">2</span>
                      <strong>{t.routingBackup}</strong>
                      <small>Ethereum · Polygon</small>
                    </div>
                  </div>
                </div>
                <div className="visual-bottom">
                  <span className="mono">
                    provider: <b>"auto"</b>
                  </span>
                  <span>
                    {t.readOnly}
                    <Check size={13} />
                  </span>
                </div>
              </div>
            </section>
            <Connect lang={lang} />
            <NFTCapabilities lang={lang} />
            <PriceCapabilities lang={lang} />
            <MessageCapabilities lang={lang} />
            <section className="site-section">
              <div className="section-head">
                <div>
                  <div className="eyebrow">01 / {t.nav[0]}</div>
                  <h2>
                    {t.build}
                    <br />
                    {t.build2}
                  </h2>
                </div>
                <p>{t.buildText}</p>
              </div>
              {capabilities}
            </section>
            <section className="site-section standards">
              <div>
                <div className="eyebrow">02 / DEVELOPER EXPERIENCE</div>
                <h2>{t.standards}</h2>
                <p>{t.standardsText}</p>
                <a className="text-link row" href={home + "docs/"}>
                  {t.readDocs}
                  <ArrowRight size={14} />
                </a>
              </div>
              <Code value={queryExample} lang={lang} label="REST API · cURL" />
            </section>
            <section className="principles">
              {t.principles.map((p, i) => {
                const Icon = [Layers, Route, Check][i];
                return (
                  <div key={p}>
                    <Icon size={20} />
                    <h3>{p}</h3>
                    <p>{t.principleText[i]}</p>
                  </div>
                );
              })}
            </section>
          </>
        ) : (
          <>
            <section className="inner-hero">
              <div className="eyebrow">
                0XBOT / {t.nav[routes.indexOf(section.split("/")[0])]}
              </div>
              <h1>
                {title ??
                  (section === "capabilities"
                    ? t.capTitle
                    : section === "pricing"
                      ? t.pricingTitle
                      : section === "connect"
                        ? connectCopy[lang].title
                        : t.docsTitle)}
              </h1>
              <p>
                {intro ??
                  (section === "capabilities"
                    ? t.capIntro
                    : section === "pricing"
                      ? t.pricingIntro
                      : section === "connect"
                        ? connectCopy[lang].intro
                        : t.docsIntro)}
              </p>
            </section>
            {children}
            {section === "connect" && (
              <>
                <Connect lang={lang} />
                <p className="inner-body">
                  <a className="text-link" href={`/${lang}/${codexGuestPath}/`}>
                    {codexGuestCopy[lang].link} →
                  </a>
                </p>
              </>
            )}
            {section === "capabilities" && (
              <section className="inner-body">
                {capabilities}
                <NFTCapabilities lang={lang} />
                <PriceCapabilities lang={lang} />
                <MessageCapabilities lang={lang} />
                <div className="notice section-notice">{t.noFunds}</div>
              </section>
            )}
            {section === "pricing" && (
              <section className="inner-body">
                <article className="pricing-card panel">
                  <div className="eyebrow">{t.free}</div>
                  <div className="price">
                    {t.price}
                    <span>{t.per}</span>
                  </div>
                  <ul>
                    {t.priceFeatures.map((f) => (
                      <li key={f}>
                        <Check size={17} />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <a className="btn primary" href={app}>
                    {t.start}
                    <ArrowUpRight size={15} />
                  </a>
                  <p>{t.priceNote}</p>
                </article>
              </section>
            )}
            {section === "docs" && (
              <section className="docs-grid inner-body">
                <aside>
                  <a href="#quickstart">Quickstart</a>
                  <a href="#rest">REST API</a>
                  <a href="#mcp">MCP</a>
                  <a href={`/${lang}/${codexGuestPath}/`}>
                    {codexGuestCopy[lang].link}
                  </a>
                  <a href="https://api.0xbot.org/openapi.json">
                    OpenAPI <ArrowUpRight size={13} />
                  </a>
                </aside>
                <div className="docs-content">
                  <article className="notice">
                    <h2>{codexGuestCopy[lang].title}</h2>
                    <p>{codexGuestCopy[lang].intro}</p>
                    <a
                      className="text-link"
                      href={`/${lang}/${codexGuestPath}/`}
                    >
                      {codexGuestCopy[lang].link} →
                    </a>
                  </article>
                  <NFTCapabilities lang={lang} />
                  <PriceCapabilities lang={lang} />
                  <MessageCapabilities lang={lang} />
                  <div id="quickstart" className="steps">
                    {t.steps.map((s, i) => (
                      <article key={s}>
                        <span>{i + 1}</span>
                        <div>
                          <h3>{s}</h3>
                          <p>{t.stepText[i]}</p>
                        </div>
                      </article>
                    ))}
                  </div>
                  <div id="rest">
                    <Code
                      value={queryExample}
                      lang={lang}
                      label="POST /v1/data/balance"
                    />
                    <Code
                      value={
                        'POST https://api.0xbot.org/v1/data/token-balance\nAuthorization: Bearer <YOUR_API_KEY>\nContent-Type: application/json\n\n{\n  "address": "0x0000000000000000000000000000000000000000",\n  "network": "eip155:1",\n  "contract": "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",\n  "provider": "auto"\n}'
                      }
                      lang={lang}
                      label="USDC · POST /v1/data/token-balance"
                    />
                    <Code
                      value={
                        'POST https://api.0xbot.org/v1/data/balances\nAuthorization: Bearer <YOUR_API_KEY>\nContent-Type: application/json\n\n{\n  "address": "0x0000000000000000000000000000000000000000",\n  "network": "eip155:56",\n  "provider": "auto"\n}'
                      }
                      lang={lang}
                      label="BNB + USDT + USDC · POST /v1/data/balances"
                    />
                    <p>{t.tokenNote}</p>
                  </div>
                  <div className="notice">{t.noFunds}</div>
                  <div id="mcp">
                    <h2>{t.mcpTitle}</h2>
                    <p>{t.mcpText}</p>
                    <Code
                      value={
                        "URL: https://api.0xbot.org/mcp\nTransport: Streamable HTTP\nAuthorization: Bearer <YOUR_API_KEY>\nTools:\n  send_message (messages:send)\n  list_messages (messages:read)\n  get_message (messages:read)\n  get_asset_price\n  get_token_price\n  get_native_balance\n  get_supported_tokens\n  get_token_balance\n  get_common_balances\n  get_nft_detail\n  get_nft_owner\n  get_nft_balance\n  resolve_token_bound_account\n  get_token_bound_account"
                      }
                      lang={lang}
                      label="MCP"
                    />
                  </div>
                  <a
                    className="text-link row"
                    href="https://api.0xbot.org/openapi.json"
                  >
                    {t.contract}
                    <ArrowUpRight size={15} />
                  </a>
                </div>
              </section>
            )}
          </>
        )}
        <section className="site-cta">
          <div>
            <h2>{t.cta}</h2>
            <p>{t.ctaText}</p>
          </div>
          <a className="btn primary" href={app}>
            {t.start}
            <ArrowUpRight size={17} />
          </a>
        </section>
      </main>
      <footer className="site-footer">
        <div>
          <a className="brand" href={home}>
            <span className="brand-mark">0x</span>0xbot
          </a>
          <p>{t.footer}</p>
        </div>
        <div>
          <div className="row">
            {t.nav.map((x, i) => (
              <a href={home + routes[i] + "/"} key={x}>
                {x}
              </a>
            ))}
          </div>
          <small>{t.copyright}</small>
        </div>
      </footer>
    </>
  );
}
