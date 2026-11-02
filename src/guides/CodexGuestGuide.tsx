import type { Locale } from "../locales";
import { Code } from "../components/Code";
import { codexSetupCommand, codexGuestLoginCommand } from "../connect/catalog";
import { codexGuestCopy, joinPrompts, participatePrompts } from "./codex-guest";

export function CodexGuestGuide({ lang }: { lang: Locale }) {
  const p = codexGuestCopy[lang];
  const ids = ["prepare", "connect", "join", "invite", "participate", "help"];
  return (
    <section className="docs-grid inner-body">
      <aside aria-label={p.title}>
        <a href={`/${lang}/docs/`}>← {p.back}</a>
        {p.headings.map((h, i) => (
          <a href={"#" + ids[i]} key={ids[i]}>
            {i + 1}. {h}
          </a>
        ))}
      </aside>
      <article className="docs-content guest-guide">
        <p className="muted">{p.checked}</p>
        <p className="notice">{p.notice}</p>
        <section id="prepare">
          <h2>1. {p.headings[0]}</h2>
          <ul>
            {p.prerequisites.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        </section>
        <section id="connect">
          <h2>2. {p.headings[1]}</h2>
          <p>{p.setup}</p>
          <Code
            value={codexSetupCommand}
            label="Terminal · first connection"
            lang={lang}
          />
          <p>{p.login}</p>
          <Code
            value={codexGuestLoginCommand}
            label="Terminal · OAuth"
            lang={lang}
          />
          <p>{p.scope}</p>
          <a
            className="text-link"
            href="https://learn.chatgpt.com/docs/extend/mcp?surface=cli"
          >
            {p.official}
          </a>
        </section>
        <section id="join">
          <h2>3. {p.headings[2]}</h2>
          <Code value={joinPrompts[lang]} label={p.paste} lang={lang} />
          <p>{p.join}</p>
        </section>
        <section id="invite">
          <h2>4. {p.headings[3]}</h2>
          <ol>
            {p.invite.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ol>
          <div className="row">
            <a
              className="btn primary"
              href="https://dashboard.0xbot.org/#studio"
            >
              {p.hostLink}
            </a>
            <a className="btn" href="https://app.0xbot.org/#rooms">
              {p.audienceLink}
            </a>
          </div>
          <p className="notice">{p.planned}</p>
        </section>
        <section id="participate">
          <h2>5. {p.headings[4]}</h2>
          <p>{p.participate}</p>
          <Code value={participatePrompts[lang]} label={p.paste} lang={lang} />
          <p className="notice">{p.waiting}</p>
          <p>{p.finish}</p>
        </section>
        <section id="help">
          <h2>6. {p.headings[5]}</h2>
          <dl>
            {p.tools.map(([tool, text]) => (
              <div key={tool}>
                <dt>
                  <code>{tool}</code>
                </dt>
                <dd>{text}</dd>
              </div>
            ))}
          </dl>
          {p.faq.map(([title, body]) => (
            <details key={title}>
              <summary>{title}</summary>
              <p>{body}</p>
            </details>
          ))}
        </section>
        <footer>
          <h3>{p.sources}</h3>
          <p>
            <a href="https://learn.chatgpt.com/docs/extend/mcp?surface=cli">
              {p.official}
            </a>{" "}
            · <a href="https://api.0xbot.org/openapi.json">{p.contract}</a>
          </p>
          <Code
            value="codex mcp add --help\ncodex mcp login --help"
            lang={lang}
            label="CLI help"
          />
        </footer>
      </article>
    </section>
  );
}
