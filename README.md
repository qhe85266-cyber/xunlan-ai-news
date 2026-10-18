# 讯澜 AI · Xunlan AI

![讯澜 AI 原创品牌封面](assets/brand-cover.jpg)

从信息浪潮里，看清产品动向。面向 AI 产品经理的资讯聚合与日报演示，减少重复浏览和手工整理。

## 能做什么

- 汇集公开 AI 信源，新增 9 个与产品管理、AI 应用相关的信息源。
- 以筛选、评分、中文摘要和事件归组组织资讯，同一事件的报道集中阅读。
- 提供精选、热点、日报、主题和搜索，以及 RSS、API 与 MCP 阅读出口。

这些能力来自开源框架和本仓库配置；内容质量、在线采集与模型调用需要部署后单独验证。

## 本仓库的修改

站名改为「讯澜 AI」，同步导航字标、页面元信息、抓取标识与自有图标；使用原创品牌封面，重新编写本 README，移除上游宣传海报、性能宣传及原作者第一人称叙述。保留已有信源和业务流程，不改变已有 MCP 工具名前缀，避免破坏接入。

## 本地运行

需要 Node.js 24、PostgreSQL 17，或 Docker Compose。先按 [部署说明](docs/deploy.md) 配置本地环境和模型凭证，不要提交 `.env`。

```sh
git clone https://github.com/qhe85266-cyber/xunlan-ai-news.git
cd xunlan-ai-news
npm ci
```

后续启动步骤见 [部署](docs/deploy.md)，站点配置见 [site/site.ts](site/site.ts)，信源见 [industry/sources.json](industry/sources.json)。只改品牌也需要重新构建。历史运行记录与截图位于 [demo](demo/)，可能仍显示旧站名，不能视为此次更新的运行证明。

## 来源与许可

本项目基于 [KKKKhazix/AIHOT](https://github.com/KKKKhazix/AIHOT) 改编。引擎与大量源码由上游提供，使用 MIT 许可证；[LICENSE](LICENSE) 和 [NOTICE](NOTICE) 完整保留。讯澜 AI 是本仓库的展示名称，不代表 AIHOT 官方服务。资讯原文与信源标志的权利归各来源方。

[品牌与图片说明](BRANDING.md) · [信源](docs/sources.md) · [精选与校准](docs/selection.md) · [架构](docs/architecture.md)
