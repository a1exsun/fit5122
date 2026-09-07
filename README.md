<div align="center">
  <img src="public/favicon.svg" width="72" height="72" alt="FIT5122 Study Hub 图标" />
  <h1>FIT5122 Study Hub</h1>
  <p><strong>Professional Practice · 从每周理解，到考前复习</strong></p>
  <p>面向 Monash FIT5122 的中英双语学习站，将 Own-time 摘要、章节考点与练习问答整理在一个地方。</p>
  <p>
    <a href="https://fit5122.xsun.work"><img src="https://img.shields.io/badge/Visit-Study_Hub-0b766b?style=for-the-badge&amp;logo=cloudflare&amp;logoColor=white" alt="访问 Study Hub" /></a>
    <img src="https://img.shields.io/badge/Language-中文_%2F_EN-7858a6?style=for-the-badge" alt="支持中文与英文" />
    <img src="https://img.shields.io/badge/Guides-Week_01--06-356c78?style=for-the-badge" alt="Week 01 至 06 学习指南" />
  </p>
  <h3>🌐 <a href="https://fit5122.xsun.work">fit5122.xsun.work</a></h3>
  <p>
    <a href="https://fit5122.xsun.work/?lang=zh">中文阅读</a> ·
    <a href="https://fit5122.xsun.work/?lang=en">Read in English</a> ·
    <a href="#content">内容导航</a> ·
    <a href="#development">本地运行</a> ·
    <a href="#deployment">部署说明</a>
  </p>
</div>

---

<a name="overview"></a>

## 学习方式 / How it works

<table>
  <tr>
    <td width="50%" valign="top">
      <h3>📖 每周理解</h3>
      <p><strong>Own-time Summary</strong></p>
      <p>按 Week 01–06 阅读主题摘要、关键概念与案例，用本页目录定位需要复习的内容。</p>
    </td>
    <td width="50%" valign="top">
      <h3>🎯 章节复习</h3>
      <p><strong>Exam Focus</strong></p>
      <p>按章节串联每周知识，结合考点与可展开的练习答案进行自测。Chapter 01–02 已发布。</p>
    </td>
  </tr>
  <tr>
    <td width="50%" valign="top">
      <h3>🌏 双语切换</h3>
      <p>随时切换中文与英文；语言偏好保存在本地，也可以通过 URL 分享指定语言的页面。</p>
    </td>
    <td width="50%" valign="top">
      <h3>🖨️ 随处阅读</h3>
      <p>响应式布局适配不同屏幕；使用页面打印按钮，在浏览器打印窗口中打印或保存为 PDF。</p>
    </td>
  </tr>
</table>

打开站点后，首页会进入最新已发布周次（目前为 **Week 06**）。顶部导航可以切换周次、章节与学习维度。

<a name="content"></a>

## 内容导航 / Study map

### 每周摘要

| 周次 | 学习主题 | 状态 | 直接阅读 |
| :--- | :--- | :---: | :--- |
| **Week 01** | 会议、演示与负责任使用 AI | ✅ 已发布 | [中文](https://fit5122.xsun.work/week/01?lang=zh) · [EN](https://fit5122.xsun.work/week/01?lang=en) |
| **Week 02** | 团队、思考与专业沟通 | ✅ 已发布 | [中文](https://fit5122.xsun.work/week/02?lang=zh) · [EN](https://fit5122.xsun.work/week/02?lang=en) |
| **Week 03** | 冲突处理与领导力 | ✅ 已发布 | [中文](https://fit5122.xsun.work/week/03?lang=zh) · [EN](https://fit5122.xsun.work/week/03?lang=en) |
| **Week 04** | 跨文化沟通与团队协作 | ✅ 已发布 | [中文](https://fit5122.xsun.work/week/04?lang=zh) · [EN](https://fit5122.xsun.work/week/04?lang=en) |
| **Week 05** | 质量、可靠性与专业责任 | ✅ 已发布 | [中文](https://fit5122.xsun.work/week/05?lang=zh) · [EN](https://fit5122.xsun.work/week/05?lang=en) |
| **Week 06** | 软件质量的衡量与管理 | ✅ 已发布 | [中文](https://fit5122.xsun.work/week/06?lang=zh) · [EN](https://fit5122.xsun.work/week/06?lang=en) |

### 章节考点

| 章节 | 主题 | 覆盖周次 | 状态与入口 |
| :--- | :--- | :--- | :--- |
| **Chapter 01** | 专业沟通与负责任使用 AI | Week 01 | ✅ [中文](https://fit5122.xsun.work/chapter/01?lang=zh) · [EN](https://fit5122.xsun.work/chapter/01?lang=en) |
| **Chapter 02** | 团队、领导力与跨文化协作 | Week 02–04 | ✅ [中文](https://fit5122.xsun.work/chapter/02?lang=zh) · [EN](https://fit5122.xsun.work/chapter/02?lang=en) |
| **Chapter 03** | 质量与可靠性 | Week 05–06 | 🕓 [待整理占位页](https://fit5122.xsun.work/chapter/03?lang=zh) |

<details>
<summary><strong>双语链接与学习维度如何对应？</strong></summary>

- 在页面地址后添加 `?lang=zh` 或 `?lang=en`，可直接打开指定语言。
- 语言检测依次读取 URL 参数、本地保存的偏好、浏览器语言；回退语言为中文。
- 从每周摘要切换到考点时，会进入该周对应的章节。
- 从章节切回摘要时，会进入该章覆盖的最后一周：Chapter 01 → Week 01，Chapter 02 → Week 04，Chapter 03 → Week 06。

</details>

<a name="development"></a>

## 本地运行 / Quick start

准备 **Node.js 22.12+** 与 npm，然后运行：

```bash
git clone https://github.com/a1exsun/fit5122.git
cd fit5122
npm ci
npm run dev
```

打开终端中 Vite 输出的本地地址。`npm ci` 使用仓库中的 lockfile 安装依赖。

<details>
<summary><strong>开发、检查与构建命令</strong></summary>

| 命令 | 用途 |
| :--- | :--- |
| `npm run dev` | 启动本地开发服务器 |
| `npm run lint` | 使用 Oxlint 检查代码 |
| `npm run typecheck` | 执行 TypeScript 类型检查 |
| `npm run test` | 启动 Vitest 监听模式 |
| `npm run test:run` | 执行一次测试 |
| `npm run build` | 类型检查并生成生产构建 |
| `npm run preview` | 本地预览生产构建（先运行 build） |
| `npm run deploy:dry-run` | 构建并检查 Worker 部署包，不发布 |
| `npm run deploy` | 构建并发布到 Cloudflare |

</details>

### 技术栈

| 层次 | 技术 |
| :--- | :--- |
| 应用与类型 | React 19 · TypeScript 6 |
| 路由与构建 | TanStack Router · Vite 8 |
| 界面与动效 | Tailwind CSS 4 · shadcn/ui · Radix UI · Lucide · GSAP |
| 国际化 | i18next · react-i18next |
| 质量检查 | Oxlint · Vitest · Testing Library |
| 托管 | Cloudflare Workers Static Assets · Wrangler |

<details>
<summary><strong>项目结构与内容入口</strong></summary>

```text
src/
├── weeks/          # 每周双语学习内容
├── chapters/       # 已发布章节的考点与练习
├── content/        # 周次、章节、发布状态与对应关系
├── components/     # 学习导航、页面布局、问答与 UI 组件
├── routes/         # TanStack 文件路由
├── assets/         # 学习页面插图
├── test/           # 应用测试与测试环境
├── i18n.ts         # 界面文案与语言检测
└── index.css       # 全局样式
public/             # 公共静态资源
vite.config.ts      # 构建、路由与 Cloudflare 插件
wrangler.jsonc      # Worker 与自定义域名配置
```

编辑学习内容时，从 [每周内容](src/weeks) 或 [章节内容](src/chapters) 入手；发布状态和周次对应关系分别位于 [weeks.ts](src/content/weeks.ts) 与 [chapters.ts](src/content/chapters.ts)。界面翻译位于 [i18n.ts](src/i18n.ts)，路由清单 `src/routeTree.gen.ts` 由插件生成。

</details>

<a name="deployment"></a>

## 部署 / Cloudflare

项目通过 Cloudflare Vite 插件构建为 **Workers Static Assets**，公开访问地址为 **[https://fit5122.xsun.work](https://fit5122.xsun.work)**。

| 配置 | 当前值 |
| :--- | :--- |
| Worker 名称 | `fit5122-week06-quality` |
| 自定义域名 | `fit5122.xsun.work` |
| SPA 路由处理 | `single-page-application` |
| 配置文件 | [wrangler.jsonc](wrangler.jsonc) |

部署需要具有目标 Cloudflare 账户权限的 Wrangler 登录。部署到自己的账户时，先修改 `wrangler.jsonc` 中的 `account_id`、Worker `name` 与 `routes`。

```bash
npx wrangler login
npm run deploy:dry-run
npm run deploy
```

## 内容反馈

发现错漏或中英文表述不一致，可以 [提交 Issue](https://github.com/a1exsun/fit5122/issues)，注明周次或章节、页面链接、语言及建议修正内容。

课程私有资料在站点中仅列出来源名称，原始文件不上传到公开站点。

---

<div align="center">
  <p><strong>Read weekly. Connect ideas. Practise with purpose.</strong></p>
  <p><a href="https://fit5122.xsun.work">打开 Study Hub ↗</a> · <a href="#overview">返回学习方式 ↑</a></p>
</div>
