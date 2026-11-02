// Run after next build. Checks exported HTML, not a substitute for browser QA.
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {codexGuestCopy, codexGuestPath} from '../src/guides/codex-guest.ts';
for (const lang of ['en','zh']) {
  const html = await readFile(new URL(`../out/${lang}/${codexGuestPath}/index.html`,import.meta.url),'utf8');
  const head = html.slice(0,html.indexOf('</head>'));
  assert.ok(head.includes(`${codexGuestCopy[lang].title} · 0xbot`));
  assert.ok(head.includes(`https://0xbot.org/${lang}/${codexGuestPath}/`));
  for(const locale of ['en','zh','x-default']) assert.ok(head.includes(`hrefLang="${locale}"`));
  assert.ok(html.includes(`href="/${lang === 'en' ? 'zh' : 'en'}/${codexGuestPath}/"`));
  for(const id of ['prepare','connect','join','invite','participate','help']) assert.ok(html.includes(`id="${id}"`));
  assert.ok(html.includes('codex mcp login 0xbot --scopes data:read,rooms:read,rooms:write'));
  assert.ok(html.includes('https://dashboard.0xbot.org/#studio'));
  for(const parent of ['docs','connect']) {
    const index=await readFile(new URL(`../out/${lang}/${parent}/index.html`,import.meta.url),'utf8');
    assert.ok(index.includes(`href="/${lang}/${codexGuestPath}/"`));
  }
}
const sitemap=await readFile(new URL('../out/sitemap.xml',import.meta.url),'utf8');
for(const lang of ['en','zh']) assert.ok(sitemap.includes(`https://0xbot.org/${lang}/${codexGuestPath}/`));
console.log('Both exported guides, metadata, language links, section anchors, docs/connect entry points and sitemap verified.');
