"use client";
import { useState } from "react";
import { Code } from "../components/Code";
import { clients, endpoint, agentPrompt } from "./catalog";
import { connectCopy } from "./copy";
import type { Locale } from "../content";
import "./connect.css";
export function Connect({ lang }: { lang: Locale }) {
  const [id, setID] = useState<string>("claude");
  const client = clients.find((item) => item.id === id)!;
  const t = connectCopy[lang];
  return (
    <section className="connect-section" id="connect">
      <header>
        <div className="eyebrow">MCP / QUICKSTART</div>
        <h2>{t.title}</h2>
        <p>{t.intro}</p>
      </header>
      <div className="connect-layout">
        <nav aria-label={t.choose}>
          <strong>{t.choose}</strong>
          {clients.map((item) => (
            <button
              key={item.id}
              className="btn"
              aria-pressed={id === item.id}
              onClick={() => setID(item.id)}
            >
              {item.name}
            </button>
          ))}
        </nav>
        <article className="connect-card">
          <div className="row between">
            <h3>{client.name}</h3>
            <span className="badge">
              {client.id === "http" ? "API Key" : "OAuth · PKCE"}
            </span>
          </div>
          <code>{endpoint}</code>
          <p>{client.id === "http" ? t.key : t.browser}</p>
          {client.commands && (
            <Code lang={lang} label="Terminal" value={client.commands} />
          )}
          <p>{t.config}</p>
          <Code lang={lang} label={client.file} value={client.config} />
          <a
            className="text-link"
            href={client.source}
            target="_blank"
            rel="noreferrer"
          >
            {t.source} ↗
          </a>
        </article>
      </div>
      <h3>{t.agent}</h3>
      <Code lang={lang} label={client.name} value={agentPrompt(client, lang)} />
      <div className="connect-notes">
        <div>
          <h3>{t.try}</h3>
          <p>{t.example}</p>
        </div>
        <div>
          <p>{t.safety}</p>
          <small>{t.limits}</small>
        </div>
      </div>
      <small className="muted">{t.status}</small>
    </section>
  );
}
