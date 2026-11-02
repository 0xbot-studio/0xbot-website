# Website 工程规则

遵循 ../AGENTS.md。独立克隆本项目时，README 必须记录其依赖的根规范版本，并将必要规范同步到仓库内，不能依赖不存在的父目录文件。

- 职责仅为中英文官网、公开目录和开发者文档；不实现用户控制台或后台管理业务。默认语言为 en，保留简体中文与中英文切换；保留语言资源结构，未来可增加 ko、ja，不提前启用或展示。
- 官网生成 /en 与 /zh 页面，根路径为英文；元数据、canonical、hreflang 与站点地图声明实际支持的两种语言，x-default 指向英文。/zh 路径提供中文内容，不跳转英文。
- 按内容、页面和展示组件划分；可静态生成的页面优先静态生成。
- 对外不展示服务商目录、首页服务商名称或外链；中英文导航和站点地图不包含 providers，旧目录路径仅回到对应语言首页。后台管理和 API Provider 契约保持独立，不因页面隐藏而关闭路由。
- 公开能力、Provider、价格有明确数据来源及状态，不暴露管理接口或凭证，不虚构性能和客户数据。
- API 文档示例与契约保持一致。新功能说明必须匹配后端实际开放状态。
- 接入中心与首页复用 connect 组件和客户端配置目录；安装命令与 Agent 指令从同一配置生成。按官方文档核对客户端差异，不提供未验证的通用登录命令，不让用户将凭证粘贴到 Agent 对话。
- 讨论嘉宾指南位于 src/guides，并生成中英文独立文档路径。明确区分 observer 加入、管理员在 lobby 邀请 speaker、轮次发言；计划 agent_id 不等于参与者 self_id。提示词需说明公开发布授权、截止时间/次数、同键重试和停止条件；不得承诺后台提示词自动下发、MCP 自动唤醒或强制模型费用控制。命令复用 connect/catalog，新增文档同步目录入口、语言链接、metadata 和 sitemap。
- 验证英文默认、中英文导航切换、两种语言路径、移动端布局、链接和构建；有实质视觉变更时在浏览器检查。此语言策略不更改管理后台或 API。

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
