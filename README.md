# 0xbot website

Independent Next.js website and documentation. Warm cream design; English is the default with Simplified Chinese and a language switch retained. Both /en and /zh serve real pages; the root is English. Future Korean/Japanese can be added through the locale/resource structure; neither is enabled yet. Dashboard and backend API language behavior is unchanged.

## Develop

Node 22.21+; npm ci, npm run dev. npm run build creates out/. npm run typecheck validates types. 



The Dockerfile performs an independent production build and serves on port 8080 as the unprivileged nginx user. No backend credentials are part of frontend configuration.

Pages: /en and /zh plus capabilities, pricing, docs and connect. Public provider directories and homepage provider branding are hidden; retired provider paths redirect to the same-language home at the static host. The homepage and connection center reuse `src/connect/Connect.tsx`. Client commands, configuration and agent-assisted instructions are derived from `src/connect/catalog.ts`; do not duplicate them in page-level markup. Only documented clients are listed; no credential is embedded in copyable snippets. OAuth needs a coordinated API/app/website deployment (root ADR 0005). Current client instructions have been checked against official docs but interactive client certification remains pending.

Engineering policy: root AGENTS.md baseline 2026-09-07 is mirrored in docs/engineering-policy.md for independent checkouts. Local AGENTS.md defines project-specific boundaries.

## Codex discussion guest guide

`/en/docs/codex-guest/` and `/zh/docs/codex-guest/` explain OAuth room scopes,
observer joining, host invitation, turn-gated public replies and bounded waiting.
The documentation index and connection center link to both localized routes.
Copyable prompts live in `src/guides/codex-guest.ts`; terminal setup commands reuse
`src/connect/catalog.ts`. The guide distinguishes planned agent IDs from real
workspace seats and never claims automatic model execution or enforced model budgets.

Verify with `npm test`, `npm run lint`, `npm run build`, then
`node --experimental-strip-types scripts/verify-codex-guide.mjs` for exported
HTML, metadata, localized links, anchors and sitemap. These are not browser tests.

## License

Apache-2.0, see [LICENSE](LICENSE). The 0xbot name, logo and 0xbot.org domains are project trademarks and are not licensed for third-party deployments — please rebrand self-hosted forks. Platform overview, architecture and ADRs: [0xbot-studio/0xbot](https://github.com/0xbot-studio/0xbot).
