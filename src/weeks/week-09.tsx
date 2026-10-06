import { ExternalLink } from 'lucide-react'
import { QuizAccordion } from '@/components/quiz-accordion'
import { Callout, ContentSection, InfoCard, LeadCard, ResponsiveTable, WeekLayout } from '@/components/week-layout'
import type { Locale } from '@/i18n'

const sources = [
  [
    "Copyright & IP",
    "visual",
    "https://learning.monash.edu/course/view.php?id=46900&section=40"
  ],
  [
    "Chapter 5 introduction",
    "intro",
    "https://monash.au.panopto.com/Panopto/Pages/Viewer.aspx?id=436b29d1-4e25-4ae4-a59a-aff20061fdff"
  ],
  [
    "Root Cause analysis",
    "rca",
    "https://monash.au.panopto.com/Panopto/Pages/Viewer.aspx?id=cea8f692-a7bc-4f1a-a56c-aff2006afc72"
  ],
  [
    "Copyright Seminar",
    "seminar",
    "https://monash.au.panopto.com/Panopto/Pages/Viewer.aspx?id=9dd27d8f-fcb7-424d-a8b7-b1600096ddbe"
  ],
  [
    "Good Open Data — by design",
    "article",
    "https://blogs.worldbank.org/en/opendata/good-open-data-design"
  ],
  [
    "Four things you should know about open data quality",
    "article",
    "https://opendataincubator.eu/four-things-you-should-know-about-open-data-quality/"
  ],
  [
    "Understanding intellectual property (IP)",
    "article",
    "https://www.ipaustralia.gov.au/understanding-ip"
  ],
  [
    "What is fair dealing and when can you copy without permission?",
    "article",
    "https://theconversation.com/explainer-what-is-fair-dealing-and-when-can-you-copy-without-permission-80745"
  ],
  [
    "IT project failures and the law",
    "law",
    "https://learning.monash.edu/mod/resource/view.php?id=6110344"
  ],
  [
    "Root Cause Analysis — redirected reading",
    "redirect",
    "https://reliability.com/root-cause-analysis/7-root-cause-analysis-tools/"
  ],
  [
    "Weekly Introduction Podcast",
    "pending",
    "https://learning.monash.edu/course/view.php?id=46900&section=40"
  ]
] as const

const checks = [
  [
    "Attorney-General’s Department · Copyright basics",
    "https://www.ag.gov.au/rights-and-protections/copyright/copyright-basics"
  ],
  [
    "IP Australia · Types of IP",
    "https://www.ipaustralia.gov.au/understanding-ip/types-of-ip"
  ],
  [
    "Creative Commons · CC licences",
    "https://creativecommons.org/cc-licenses/"
  ],
  [
    "Open Source Initiative · MIT licence",
    "https://opensource.org/license/mit"
  ],
  [
    "OAIC · APP 3 collection guidance",
    "https://www.oaic.gov.au/privacy/australian-privacy-principles/australian-privacy-principles-guidelines/chapter-3-app-3-collection-of-solicited-personal-information"
  ],
  [
    "EDPB · GDPR territorial scope",
    "https://www.edpb.europa.eu/our-work-tools/our-documents/guidelines/guidelines-32018-territorial-scope-gdpr-article-3-version_en"
  ]
] as const

const copy = {
  "zh": {
    "subtitle": "知识产权、开放数据与根因分析中的专业责任。",
    "summary": "先确认作品与数据能否使用，再判断质量是否适合目的；出现失败时，以证据查明原因和责任。依据 Week 09 Own-time 的 10 项可核对材料整理，另 1 段短音频待转录。",
    "tags": [
      "IP · Copyright",
      "Fair dealing",
      "开放许可证",
      "数据质量与溯源",
      "IT 与法律",
      "Root Cause Analysis"
    ],
    "overview": "本周主线：有权使用、值得信赖、能够负责",
    "lead": "权利与许可 → 数据质量与来源 → 可靠实施 → 根因与责任 → 改进并验证。",
    "overviewNote": "Chapter 5 introduction · 00:55–01:54：IT 专业人员需要同时遵守法律、伦理与专业规范。Week 09 聚焦 IP、版权、开放数据和 RCA；课程周次为 28 Sep–4 Oct 2026。",
    "sections": [
      {
        "id": "ip",
        "title": "知识产权：区分保护对象与保护方式",
        "intro": "Copyright Seminar · 03:33–07:28；IP Australia 阅读；课程学习目标。IP 是心智创造的总称，不等于实物载体。",
        "headers": [
          "类型",
          "保护对象与 IT 应用",
          "关键区分"
        ],
        "rows": [
          [
            "Copyright · 版权",
            "代码、文字、图像等原创表达；计算机程序属于文学作品。",
            "保护表达，不保护抽象想法或事实；澳大利亚通常自动产生，无需注册或 ©。"
          ],
          [
            "Trade marks · 商标",
            "区分商品或服务来源的品牌、名称、标识。",
            "关注品牌识别，与代码版权的对象不同。"
          ],
          [
            "Patents · 专利",
            "符合条件的新发明，包括某些技术实现。",
            "需要申请；公开前先评估保密与新颖性，不能假设所有算法或代码都可获专利。"
          ],
          [
            "Trade secrets · 商业秘密",
            "保密的商业或技术信息，例如内部方法、配方。",
            "依赖保密措施与相关义务，公开披露可能失去保密价值；不是版权注册。"
          ],
          [
            "IP Australia 的四种可注册权利",
            "Trade marks、patents、design rights、plant breeder’s rights。",
            "这是该机构的注册类别；课程要求比较的是 copyright、trade marks、trade secrets、patents，两组“四种”不要混淆。"
          ]
        ],
        "note": "IP Australia 的五项建议：识别并估值 → 调研已有权利 → 谨慎公开 → 必要时使用 NDA → 及时保护。公开前的保护方式需按具体 IP 类型判断。"
      },
      {
        "id": "copyright",
        "title": "版权：归属、使用权与常见误区",
        "intro": "Copyright Seminar · 07:37–16:20、31:16–32:15。浏览、复制、截图、改编和公开上传涉及不同使用行为。",
        "headers": [
          "问题",
          "复习要点"
        ],
        "rows": [
          [
            "谁拥有作品？",
            "讲座以作者为一般起点，讨论雇佣作品、团队共同创作及权利转让。检查劳动合同、项目协议和各贡献者许可；一个网站的代码、图片、音乐可能有不同权利人。"
          ],
          [
            "网络公开 ≠ public domain",
            "能够访问不等于能够复制或再发布。没有 © 也不代表没有版权；保护期限因作品类型而异。"
          ],
          [
            "引用 ≠ 许可",
            "引用解决来源透明和学术归属，不能独自授权复制。抄袭与侵权是不同判断：获准复制仍可能因隐瞒来源构成抄袭。"
          ],
          [
            "改了多少 ≠ 自动免责",
            "没有统一的“改 10% / 50% / 80% 就安全”规则。判断复制内容的重要性、使用行为、许可和适用例外。"
          ],
          [
            "事实 ≠ 表达",
            "单个事实或数值与图表、文字、数据库的原创编排应区别；还要核对访问条款、数据许可和隐私。"
          ],
          [
            "Economic / Moral rights",
            "经济权利涉及复制、发表、传播等；精神权利包括署名、不被虚假署名及作品完整性。遵守许可证的同时，保留正确归属。"
          ]
        ],
        "note": "截图或 screen capture 是复制方式，本身不是法律例外。课程讲座使用的教学许可也不能自动延伸到学生的公开作品或商业产品。"
      },
      {
        "id": "fair-dealing",
        "title": "Fair dealing：先看目的，再看公平性",
        "intro": "指定的 The Conversation 解释文章与讲座 · 17:47–20:55。澳大利亚 fair dealing 按规定目的判断，不能直接套用美国较开放的 fair use。",
        "headers": [
          "指定阅读中的目的",
          "如何辨析"
        ],
        "rows": [
          [
            "Research or study",
            "为研究或学习所需的使用；“我是学生”不等于任何复制都合理，更不等于可以公开整本教材。"
          ],
          [
            "Criticism or review",
            "复制片段要服务于真实的分析或评价；为评论某首歌使用必要片段，与仅把它用作背景音乐不同。"
          ],
          [
            "Parody or satire",
            "需要存在戏仿或讽刺目的；“只是好玩”不能直接证明属于该目的或公平。"
          ],
          [
            "Reporting the news",
            "复制要与新闻报道目的有关，且仍需判断公平性。"
          ],
          [
            "Professional legal advice",
            "指定阅读简称 legal advice；具体范围和条件要核对适用规定。"
          ],
          [
            "Fairness · 公平性",
            "结合目的、作品性质、复制的量与重要性、取得许可的可能性及市场影响等相关因素；需要时署名。没有适用于所有媒介的固定比例。"
          ]
        ],
        "note": "五项是指定阅读的概括，不是澳大利亚全部例外的穷尽清单；官方说明还列有无障碍格式相关 fair dealing。答题时先辨用途和司法辖区，再分析公平性、许可与其他例外。"
      },
      {
        "id": "licences",
        "title": "许可证：开放使用仍然有条件",
        "intro": "Copyright Seminar · 22:17–31:07；以 CC 与 MIT 官方文本补充具体条件。识别名称、版本、授权范围及再分发要求。",
        "headers": [
          "许可证 / 元素",
          "允许与限制"
        ],
        "rows": [
          [
            "MIT",
            "允许使用、修改、分发和商业利用；副本或实质部分需要保留版权及许可声明，不能因许可宽松而删掉通知。"
          ],
          [
            "GNU GPL",
            "讲座强调 copyleft：分发受 GPL 覆盖的作品时需满足相应源码及许可义务。内部使用不等于必须向全世界公开；须按版本和具体分发方式判断。"
          ],
          [
            "CC BY / BY-SA",
            "BY 要求适当署名；SA 要求分享改编时采用相同或兼容许可。核对作品链接、许可链接与改动说明。"
          ],
          [
            "CC NC / ND",
            "NC 限制商业用途；ND 限制分享改编版本。CC 不等于任意改动、任意商用。"
          ],
          [
            "CC0 / Public domain",
            "CC0 是尽可能放弃版权的工具，public domain 是作品的权利状态；都不能自动消除隐私、商标或第三方权利。"
          ],
          [
            "代码与媒体分开判断",
            "讲座建议代码使用软件许可证，文字、图片等使用适合的 CC 许可。一个项目可能同时包含多种许可。"
          ]
        ],
        "note": "自拟发布检查：资源 → 作者 / 权利人 → 原始链接 → 许可及版本 → 允许的用途 → 必须保留的声明 → 改动记录。搜索结果的许可标签只是线索，仍需核对原来源。"
      },
      {
        "id": "privacy-ai",
        "title": "隐私与 AI：输入和输出都需要判断",
        "intro": "Copyright Seminar · 32:15–49:14。以下保留讲座的风险框架，并用官方隐私指引澄清两项过于宽泛的表述。",
        "headers": [
          "议题",
          "学习与应用"
        ],
        "rows": [
          [
            "许可与隐私是不同问题",
            "有数据许可并不代表已解决个人信息处理；公开可见的个人信息仍可能受隐私义务约束（OAIC APP 3）。"
          ],
          [
            "敏感 / 健康数据",
            "讲座提醒其保护要求更高。判断收集目的、必要性、权限、存储与披露范围；不能把研究身份当作普遍豁免。"
          ],
          [
            "GDPR 的适用范围",
            "跨境活动要评估相关法规；欧盟能够访问一个网站，本身不足以证明 GDPR 适用。需要分析机构设立、面向欧盟提供服务或监测等条件（EDPB）。"
          ],
          [
            "AI 输入",
            "识别训练或上传材料的来源、许可、保密与个人信息；按具体服务、合同和设置核对保存及再使用规则，不能把讲座的“所有提示词都用于训练”当作所有产品的固定事实。"
          ],
          [
            "AI 输出",
            "审查代码正确性、可能复制他人表达、权利归属及再分发条件；生成来源不能自动排除侵权风险或保证作品可获版权。"
          ],
          [
            "课堂项目限制",
            "讲座中的“不抓取数据”等要求是原 IE 项目语境。当前项目按自己的 brief、授权和治理流程执行；保留其先确认权利与风险的原则。"
          ]
        ],
        "note": "讲座中的诉讼进展和“本月”判决是录制时的信息，不作为 2026 年的现状。这里关注权利来源、人类贡献、服务条款和可追溯记录；未据此推断具体 AI 产品的数据政策。"
      },
      {
        "id": "open-data",
        "title": "开放数据：从设计到发布都要有质量",
        "intro": "Good Open Data… by design 与 Four things you should know about open data quality。公开文件只是起点，可信、可用和可持续才带来价值。",
        "headers": [
          "原则",
          "检查与应用"
        ],
        "rows": [
          [
            "By design · 从源头治理",
            "明确责任人、采集与发布流程、质量标准、数据资产目录、人员技能、数字化与长期保存安排；发布前设计控制比事后清洗更可靠。"
          ],
          [
            "Provenance · 数据溯源",
            "记录创建者、时间、来源、访问与变更历史；维护数据和元数据的完整性，使术语、单位、缩写和统计口径可解释。"
          ],
          [
            "Stewardship · 持续管理",
            "保留归档、版本、维护责任与纠错过程。否则记录可能难以定位、验证或在日后复用。"
          ],
          [
            "1 · 高质量也包括发布质量",
            "可发现、可访问、结构清楚、文档与许可明确；正文再好，用户无法理解或获取也难以使用。"
          ],
          [
            "2 · 错误有不同类型",
            "Schema 不匹配、值无效或错误、缺失、测量精度或舍入问题。格式合法不代表真实正确。"
          ],
          [
            "3 · 修复需要不同证据",
            "用 schema 校验结构和值域，用权威 register 核对取值；对时效和事实需额外验证，允许用户反馈并追踪修复。"
          ],
          [
            "4 · 质量取决于用途",
            "粗略地图与边界争议需要不同 GPS 精度；损坏传感器读数可能是噪声，也可能是研究故障的证据。按目的、风险和资源确定足够好的标准。"
          ]
        ],
        "note": "两篇阅读可合并成检查链：合法发布 → 文档与可访问性 → 内容质量 → 来源与完整性 → 适用性 → 持续维护。课程图及 World Bank 引述的“80% 清洗成本”是历史估计，不是所有项目的固定比例。"
      },
      {
        "id": "law",
        "title": "IT 项目失败：技术问题如何成为法律争议",
        "intro": "Colin Bosnic，Computers & Law，July 2009，印刷页 12–18；主体分析在 12–16，末两页含注释和无关征文广告。下表是文章对历史案件的概括。",
        "headers": [
          "历史案例 / 问题",
          "文章中的结果与专业启示"
        ],
        "rows": [
          [
            "Ateco v Business Bytes · 客户需求变化",
            "Ateco 没有完成详细需求分析，业务扩大，也未提供足够指示、培训和资源；索赔被驳回。客户合作与变更管理也是责任链的一部分。"
          ],
          [
            "Durham v Aduke · 供应商专业能力",
            "供应商对易用性和培训时间的陈述有问题；文章记录误导陈述索赔获支持。培训与交付能力应有合理依据，不能只靠销售承诺。"
          ],
          [
            "Westsub v IDAPS · 项目基线失控",
            "15 个终端和 5 秒响应等需求未妥善写入协议；软件存在基础缺陷。合同索赔受免责条款影响，但误导陈述索赔成功。免责不是对所有行为的普遍保护。"
          ],
          [
            "Unisys v RACV · 需求管理不足",
            "验收测试后运行仍失败，内存配置不能满足检索要求；文章记载客户获赔、供应商上诉失败。验收需覆盖真实负载和明确性能目标。"
          ],
          [
            "为何判例较少？",
            "技术复杂、诉讼成本、谈判资源差异、和解与 ADR、免责及责任限制条款会影响纠纷路径；少量公开判例不等于没有失败或损害。"
          ],
          [
            "Good faith · 诚信与合作",
            "文章探索诚信、合理性和协作义务，但指出当时默示诚信义务的地位不确定。不能把作者的讨论改写成所有 IT 合同必然适用的普遍规则。"
          ]
        ],
        "note": "学习应用：把范围、性能、依赖、双方责任、验收、变更与争议程序写清，并留存依据。文中的 Trade Practices Act、市场规模与失败率属于 2009 年及更早资料；此处不把它们当作现行法律或当前统计。"
      },
      {
        "id": "rca",
        "title": "RCA 流程：从症状追到有证据的原因",
        "intro": "Root Cause analysis · 00:35–04:07；01:25 画面核对了前两步标题。RCA 帮助长期解决问题，也为伦理判断提供原因证据。",
        "headers": [
          "步骤",
          "具体做法"
        ],
        "rows": [
          [
            "1 · Define the problem",
            "描述实际发生了什么、具体症状、受影响的人和范围；不要先把个人过失当作根因。"
          ],
          [
            "2 · Collect data",
            "确认问题存在的证据与持续时间；结合记录和观察，邀请利益相关者、专家、前线人员以及熟悉问题的团队成员。"
          ],
          [
            "3 · Identify possible causes",
            "列出并检验多个可能原因。Appreciation 用事实追问 “So what?” 看后果；Five Whys 追问原因；Drill-down 分解细节；cause-and-effect diagram 展示关系。"
          ],
          [
            "4 · Identify root cause(s)",
            "用研究和证据区分症状、触发事件与重要的底层因素；避免因第一个看似合理的答案而停止。"
          ],
          [
            "5 · Implement / suggest solutions",
            "针对原因改变系统或流程，预测副作用与新风险。持续追踪效果是本页结合阅读补充的应用步骤。"
          ]
        ],
        "note": "字幕把 Five Whys、Drill-down 等术语识别得不稳定，按讲解含义归纳。Five Whys 是追问因果，不是 Week 08 的 Why / Who / What / When / How 沟通规划；“五次”也不是机械的停止条件。"
      },
      {
        "id": "rca-tools",
        "title": "RCA 工具：按问题选择方法",
        "intro": "指定 Root Cause Analysis 链接现重定向到 7 Powerful Root Cause Analysis Tools and Techniques。阅读区分分析方法与承载方法的软件工具。",
        "headers": [
          "方法",
          "用途与边界"
        ],
        "rows": [
          [
            "Fishbone / Ishikawa",
            "按人、方法、设备、材料、环境等类别整理候选原因；头脑风暴结果仍需证据检验。"
          ],
          [
            "Pareto chart",
            "按频率或影响排序，优先处理主要问题；80/20 是启发，不保证每组数据都符合这个比例。"
          ],
          [
            "5 Whys",
            "适合较简单或重复的问题；每个“为什么”需要证据，留意多条因果路径和过度简化。"
          ],
          [
            "FMEA",
            "前瞻评估失效模式、影响、严重程度、发生与可检测性，以安排预防措施；并非已经证明某次事故的实际根因。"
          ],
          [
            "PROACT®",
            "Preserve evidence / acquire data → Order team → Analyze → Communicate → Track。5 Ps：Parts、Position、People、Paper、Paradigms。"
          ],
          [
            "Affinity diagram",
            "把大量定性意见聚成主题，帮助处理模糊问题；聚类不是因果证明。"
          ],
          [
            "Fault Tree Analysis",
            "从顶层失败往下梳理事件组合，适合高后果问题；需要检查假设与关系。"
          ]
        ],
        "note": "自拟练习：开放数据仪表板误报时，先留存原始快照、schema、转换记录和单位，再用 Fishbone 列候选原因，沿证据用 Five Whys 深挖，修复后重算并监测。阅读中的 RCA 软件推广与 ROI 说法不作为独立效果证据。"
      }
    ],
    "reviewTitle": "自测：把原则用于具体情境",
    "reviewIntro": "12 道依据材料编写的原创学习题，不是 Moodle 官方题或考试预测。",
    "quiz": [
      [
        "课程的“四种 IP”与 IP Australia 的“四种”相同吗？",
        "不同。课程对比版权、商标、商业秘密与专利；IP Australia 的可注册类别是商标、专利、设计权和植物育种者权。版权通常自动产生，商业秘密依赖保密。"
      ],
      [
        "截图上有来源链接，可以直接放到公开网站吗？",
        "来源链接不能独自提供复制许可。确认权利人、具体使用行为、许可证或适用例外，并判断隐私与其他权利；截图本身不是豁免理由。"
      ],
      [
        "抄袭与版权侵权为什么要分开判断？",
        "抄袭关乎是否把别人的贡献当作自己的；版权侵权关乎是否未经授权实施受控行为。引用可能避免隐瞒来源，但不能代替许可；获许可也不能伪称原创。"
      ],
      [
        "把代码改了 80%，是否自动安全？",
        "没有统一改动比例。检查是否复制了具有重要性的表达、许可条件、适用例外及其他 IP；不能靠改动数量单独下结论。"
      ],
      [
        "评论歌曲用片段，与使用同片段作背景音乐有何差别？",
        "评论的复制可能与 criticism or review 目的相关，仍须判断公平性；装饰性的背景音乐不因片段短就自动符合该目的。"
      ],
      [
        "MIT 与 GPL 的主要应用区别是什么？",
        "MIT 的许可宽松，但需保留版权及许可声明；GPL 有 copyleft 和相应分发义务，需要核对版本、覆盖范围和源码要求。两者都不能理解为“网上代码随便用”。"
      ],
      [
        "CC BY-NC-ND 图片能否改成商业宣传海报？",
        "NC 限制商业使用，ND 限制分享改编版本，BY 还要求署名。应核对具体许可，取得符合用途的额外授权或换用许可合适的素材。"
      ],
      [
        "公开名单的数据有许可证，是否已经解决隐私？",
        "没有。版权或数据许可与个人信息处理义务需分别评估；公开可见不等于可无限制再利用。检查目的、必要性、权限和披露范围。"
      ],
      [
        "格式正确的邮箱为什么仍可能不可靠？",
        "Schema 或格式校验只能确认形式；拼写错误、过期或并未使用的地址也可能符合格式。需要适合用途的进一步事实核验。"
      ],
      [
        "坏传感器读数必须全部删掉吗？",
        "取决于用途。日常统计可能需要标记或过滤；研究传感器失效则可能需要保留。保留原始记录、说明处理规则并追踪版本。"
      ],
      [
        "为什么 IT 项目失败不一定由供应商单独承担责任？",
        "文章案例展示客户需求分析、培训、资源和变更也影响结果；结合合同、承诺、证据、因果与各方义务判断。验收通过或免责条款也不是自动排除所有责任。"
      ],
      [
        "RCA 到底要做到哪一步才算完成学习应用？",
        "定义问题、收集证据、检验候选原因、找出底层因素、提出或实施针对性改进；预测副作用并跟踪效果。“员工犯错”或暂时消除症状不能代替证据链。"
      ]
    ],
    "sourcesTitle": "来源与覆盖范围",
    "sourcesIntro": "10 项材料用于摘要：课程图、3 段视频（599 条原生字幕）、1 份七页 PDF、5 篇阅读。原始课程图片、音视频和 PDF 不随站点上传。",
    "sourceLabels": {
      "visual": "课程总览图 · 已目视核对",
      "intro": "2:11 · 15 条原生字幕",
      "rca": "4:52 · 39 条原生字幕及步骤画面",
      "seminar": "54:44 · 545 条原生字幕",
      "law": "课程 PDF · 7 页 · July 2009",
      "article": "指定网页阅读 · 本地正文",
      "redirect": "指定阅读 · 使用下载时重定向后的正文",
      "pending": "1:48 音频 · 无字幕 / 转录 · 未用于内容判断"
    },
    "pending": "短音频待转录",
    "pendingBody": "IP_Open_Data_and_Root_Cause_Analysis.m4a 已下载，但没有字幕或转录。摘要未推断其独有内容；其余直接材料均已核对。",
    "verificationTitle": "补充核对 · 官方来源",
    "verificationIntro": "2026-10-07 核对：用于澄清法律范围与许可条件，不扩充为 Week 10 的伦理理论总结。",
    "boundary": "原生字幕有识别噪声，正文以归纳为主。历史案件按 2009 年文章转述；讲座中的 AI 案件、项目指令及服务推测保留原语境。应用例子与自测为原创；课程没有提供本页的官方答案。"
  },
  "en": {
    "subtitle": "Professional responsibility for intellectual property, open data and root cause analysis.",
    "summary": "Establish permission to use material, assess whether data is fit for purpose, and investigate failures through evidence. Based on ten verifiable Week 09 Own-time materials; one short audio introduction awaits transcription.",
    "tags": [
      "IP · Copyright",
      "Fair dealing",
      "Open licences",
      "Data quality & provenance",
      "IT & law",
      "Root Cause Analysis"
    ],
    "overview": "This week: permission, trust and accountability",
    "lead": "Rights and permission → data quality and provenance → reliable delivery → causes and responsibility → improvement and verification.",
    "overviewNote": "Chapter 5 introduction · 00:55–01:54: IT professionals work within legal, ethical and professional boundaries. Week 09 focuses on IP, copyright, open data and RCA. Course week: 28 September–4 October 2026.",
    "sections": [
      {
        "id": "ip",
        "title": "Intellectual property: distinguish objects and protection",
        "intro": "Copyright Seminar · 03:33–07:28; IP Australia reading; course learning objectives. IP concerns creations of the mind rather than their physical carriers.",
        "headers": [
          "Type",
          "Protection and IT relevance",
          "Distinction"
        ],
        "rows": [
          [
            "Copyright",
            "Original expression in code, text and images; computer programs are literary works.",
            "Protects expression rather than abstract ideas or facts. Australian protection generally arises automatically without registration or ©."
          ],
          [
            "Trade marks",
            "Brands, names and signs that distinguish goods or services.",
            "Concern source identification, a different object from code copyright."
          ],
          [
            "Patents",
            "Eligible new inventions, including some technical implementations.",
            "Require an application. Assess confidentiality and novelty before disclosure; do not assume every algorithm or program is patentable."
          ],
          [
            "Trade secrets",
            "Confidential commercial or technical information, such as internal methods or formulas.",
            "Depend on secrecy and related obligations. Disclosure may remove their confidential value; this is not copyright registration."
          ],
          [
            "IP Australia’s four registered rights",
            "Trade marks, patents, design rights and plant breeder’s rights.",
            "These are its registration categories. The course compares copyright, trade marks, trade secrets and patents: distinguish the two lists of four."
          ]
        ],
        "note": "IP Australia’s five tips: identify and value assets → research existing rights → consider disclosure carefully → use an NDA where appropriate → protect in time. Assess protection and disclosure by the particular IP right."
      },
      {
        "id": "copyright",
        "title": "Copyright: ownership, uses and common myths",
        "intro": "Copyright Seminar · 07:37–16:20 and 31:16–32:15. Accessing, copying, capturing a screen, adapting and publishing involve different uses.",
        "headers": [
          "Question",
          "Revision takeaway"
        ],
        "rows": [
          [
            "Who owns it?",
            "The lecture starts with authorship and discusses employment, joint creation and assignment. Check employment and project agreements and contributor permissions; a website’s code, images and music can have different owners."
          ],
          [
            "Online availability and public domain",
            "Access does not grant copying or republication rights. Absence of © does not remove copyright; duration varies with the type of material."
          ],
          [
            "Attribution and permission",
            "A citation makes the source visible but does not itself authorise copying. Plagiarism and infringement require separate judgments: permitted copying can still conceal authorship."
          ],
          [
            "Changes and percentage myths",
            "There is no universal “change 10%, 50% or 80%” rule. Assess the significance of the expression taken, the use, permission and applicable exceptions."
          ],
          [
            "Facts and expression",
            "Distinguish individual facts or values from original text, charts and database arrangements; also check access terms, data licences and privacy."
          ],
          [
            "Economic and moral rights",
            "Economic rights concern copying, publication and communication. Moral rights include attribution, protection against false attribution and integrity. Preserve accurate credit alongside licence compliance."
          ]
        ],
        "note": "Screen capture is a copying method, not an exception in itself. A lecturer’s educational permission does not automatically extend to student public websites or commercial products."
      },
      {
        "id": "fair-dealing",
        "title": "Fair dealing: purpose first, then fairness",
        "intro": "Assigned The Conversation explainer; seminar · 17:47–20:55. Australian fair dealing uses specified purposes; do not import the broader US fair use approach.",
        "headers": [
          "Purpose in the assigned reading",
          "How to distinguish it"
        ],
        "rows": [
          [
            "Research or study",
            "Use must serve research or study. Being a student does not make every copy fair or authorise publishing a whole textbook."
          ],
          [
            "Criticism or review",
            "The excerpt should support actual analysis or evaluation. A necessary song excerpt in a review differs from decorative background music."
          ],
          [
            "Parody or satire",
            "Identify a parody or satire purpose. “It is entertaining” alone does not establish the purpose or fairness."
          ],
          [
            "Reporting the news",
            "Copying needs a news-reporting purpose and a fairness assessment."
          ],
          [
            "Professional legal advice",
            "The reading abbreviates this to legal advice; check the applicable provision for scope and conditions."
          ],
          [
            "Fairness",
            "Relevant considerations include purpose, nature of the work, amount and significance taken, availability of a licence and market effects, with attribution where required. No fixed percentage applies to every medium."
          ]
        ],
        "note": "The reading’s five categories are not an exhaustive list of Australian exceptions: official guidance also lists disability-access fair dealing. Identify jurisdiction and purpose, then assess fairness, permission and other applicable exceptions."
      },
      {
        "id": "licences",
        "title": "Licences: sharing comes with conditions",
        "intro": "Copyright Seminar · 22:17–31:07; official CC and MIT texts clarify conditions. Identify the name, version, scope and redistribution requirements.",
        "headers": [
          "Licence / element",
          "Permissions and conditions"
        ],
        "rows": [
          [
            "MIT",
            "Permits use, modification, distribution and commercial exploitation; copies or substantial portions must retain copyright and permission notices. Permissive does not mean notice-free."
          ],
          [
            "GNU GPL",
            "The lecture emphasises copyleft: distributing a covered work brings corresponding source and licensing obligations. Internal use does not mean publication to the whole world; assess the version and distribution arrangement."
          ],
          [
            "CC BY / BY-SA",
            "BY requires appropriate credit. SA governs the licence for shared adaptations. Check source and licence links and indicate modifications."
          ],
          [
            "CC NC / ND",
            "NC restricts commercial use; ND restricts sharing adaptations. A CC label does not permit every modification or commercial use."
          ],
          [
            "CC0 / Public domain",
            "CC0 seeks to waive copyright; public domain describes a rights status. Neither automatically clears privacy, trade marks or third-party rights."
          ],
          [
            "Code and media",
            "The lecture recommends software licences for code and suitable CC licences for text or images. A project may contain several licences."
          ]
        ],
        "note": "Original release check: asset → creator / rights holder → source link → licence and version → intended use → required notices → change record. Search licence filters are a lead; verify the original source."
      },
      {
        "id": "privacy-ai",
        "title": "Privacy and AI: evaluate inputs and outputs",
        "intro": "Copyright Seminar · 32:15–49:14. Retain its risk framework while using official privacy guidance to qualify two broad statements.",
        "headers": [
          "Issue",
          "Study and application"
        ],
        "rows": [
          [
            "Permission and privacy",
            "A data licence does not resolve personal-information handling. Publicly visible personal information can still carry privacy obligations (OAIC APP 3)."
          ],
          [
            "Sensitive / health data",
            "The lecture highlights stronger protections. Assess purpose, necessity, authority, storage and disclosure; research status is not a general exemption."
          ],
          [
            "GDPR scope",
            "Assess relevant cross-border rules. EU access to a website alone is insufficient; establishment, offering services to people in the EU or monitoring may matter (EDPB)."
          ],
          [
            "AI inputs",
            "Check the origin, licence, confidentiality and personal information in training or uploaded material. Retention and reuse depend on the service, contract and settings; the lecture’s claim that all prompts train models is not a universal product policy."
          ],
          [
            "AI outputs",
            "Review correctness, possible copying, ownership and redistribution conditions. Generation does not automatically eliminate infringement risk or guarantee copyright protection."
          ],
          [
            "Class project restrictions",
            "The recording’s prohibition on scraping concerns its original IE project. Follow the current project brief, permissions and governance while retaining its principle of checking rights and risks first."
          ]
        ],
        "note": "Litigation updates and “this month” judgments refer to the recording’s time, not verified 2026 outcomes. Focus here on provenance, human contribution, service terms and records; no specific AI service’s data policy is inferred."
      },
      {
        "id": "open-data",
        "title": "Open data: design, publish and maintain quality",
        "intro": "Good Open Data… by design and Four things you should know about open data quality. Publishing a file starts the process; trust, usability and sustainability create value.",
        "headers": [
          "Principle",
          "Check and application"
        ],
        "rows": [
          [
            "By design",
            "Assign ownership, collection and release processes, standards, inventories, staff skills, digitisation and long-term preservation. Build controls before release rather than depending on later cleaning."
          ],
          [
            "Provenance",
            "Record creator, time, source, access and changes. Protect the integrity of data and metadata so terminology, units and measures remain interpretable."
          ],
          [
            "Stewardship",
            "Maintain archives, versions, responsibility and correction processes; otherwise records become hard to locate, authenticate or reuse."
          ],
          [
            "1 · Publishing quality matters",
            "Make data discoverable, accessible, structured and documented, with clear licensing. Good contents are of little use if users cannot obtain or understand them."
          ],
          [
            "2 · Problems differ",
            "Schema mismatches, invalid or incorrect values, missing data, measurement precision and rounding problems. Valid format does not establish factual correctness."
          ],
          [
            "3 · Fixes require different evidence",
            "Use schema checks for structure and ranges and authoritative registers for allowed values. Check facts and currency separately, accept feedback and track corrections."
          ],
          [
            "4 · Quality depends on purpose",
            "A rough map and a boundary dispute need different GPS precision. Broken sensor readings may be noise or evidence for failure analysis. Set adequacy according to purpose, risk and resources."
          ]
        ],
        "note": "Combined check: lawful publication → documentation and access → content quality → provenance and integrity → fitness for purpose → maintenance. The course image and World Bank’s “80% cleaning cost” quotation are historical estimates, not a constant for every project."
      },
      {
        "id": "law",
        "title": "IT project failures: from technical issues to disputes",
        "intro": "Colin Bosnic, Computers & Law, July 2009, printed pp. 12–18. Analysis is on pp. 12–16; the final pages include notes and an unrelated competition notice. This table summarises the article’s historical case accounts.",
        "headers": [
          "Historical case / issue",
          "Reported outcome and professional lesson"
        ],
        "rows": [
          [
            "Ateco v Business Bytes · Changing client needs",
            "Ateco did not complete a detailed requirements analysis, expanded its business and failed to supply sufficient instructions, training and resources. Its claims were dismissed. Client cooperation and change management also matter."
          ],
          [
            "Durham v Aduke · Vendor expertise",
            "Representations about usability and training time were problematic; the article records a successful misleading-representation claim. Training and delivery promises need a reasonable basis."
          ],
          [
            "Westsub v IDAPS · Undisciplined baseline",
            "Requirements for 15 terminals and five-second response were omitted from the agreement; the software had a basic flaw. An exclusion affected the contract claim, but the misrepresentation claim succeeded. Exclusions do not cover every act."
          ],
          [
            "Unisys v RACV · Managed requirements",
            "The system failed in operation after acceptance testing; insufficient memory could not meet retrieval requirements. The article records damages and a failed vendor appeal. Acceptance should test realistic load against explicit targets."
          ],
          [
            "Why so few cases?",
            "Complexity, litigation cost, unequal resources, settlement, ADR and liability exclusions affect dispute paths. Few public judgments do not establish few failures or losses."
          ],
          [
            "Good faith",
            "The author explores cooperation, reasonableness and honesty but describes uncertainty about implied good faith at that time. Do not turn this discussion into a universal obligation in every IT contract."
          ]
        ],
        "note": "Study application: document scope, performance, dependencies, responsibilities, acceptance, changes and dispute procedures with supporting evidence. The Trade Practices Act references, market figures and failure rates are historical; this guide does not treat them as current law or statistics."
      },
      {
        "id": "rca",
        "title": "RCA process: trace symptoms to evidenced causes",
        "intro": "Root Cause analysis · 00:35–04:07; the 01:25 slide confirms the first two step headings. RCA supports lasting solutions and provides causal evidence for ethical decisions.",
        "headers": [
          "Step",
          "Action"
        ],
        "rows": [
          [
            "1 · Define the problem",
            "Describe what is happening, symptoms, people affected and scope. Do not start by assuming individual fault."
          ],
          [
            "2 · Collect data",
            "Establish evidence that the problem exists and how long it has persisted. Combine records and observation with stakeholders, experts, frontline staff and informed team members."
          ],
          [
            "3 · Identify possible causes",
            "Develop and test alternatives. Appreciation asks “So what?” of facts to examine consequences; Five Whys explores causes; Drill-down decomposes detail; cause-and-effect diagrams map relationships."
          ],
          [
            "4 · Identify root cause(s)",
            "Use evidence to distinguish symptoms, triggers and underlying factors. Avoid stopping at the first plausible answer."
          ],
          [
            "5 · Implement / suggest solutions",
            "Change systems or processes to address causes and predict side effects. Ongoing measurement is an application added here from the reading."
          ]
        ],
        "note": "Captions contain errors in terms such as Five Whys and Drill-down; the summary follows the explanation. Five Whys investigates causes, unlike Week 08’s Why / Who / What / When / How communication planning. Five is not a mechanical stopping rule."
      },
      {
        "id": "rca-tools",
        "title": "RCA tools: match methods to the problem",
        "intro": "The assigned Root Cause Analysis URL now redirects to 7 Powerful Root Cause Analysis Tools and Techniques. The reading distinguishes analytical methods from the software used to apply them.",
        "headers": [
          "Method",
          "Use and boundary"
        ],
        "rows": [
          [
            "Fishbone / Ishikawa",
            "Organise candidate causes under people, methods, machines, materials and environment. Brainstorming still requires evidence."
          ],
          [
            "Pareto chart",
            "Rank frequency or impact to prioritise major issues. The 80/20 principle is a heuristic, not a guaranteed data split."
          ],
          [
            "5 Whys",
            "Useful for simpler or recurring issues. Support each answer with evidence and consider branching causes and oversimplification."
          ],
          [
            "FMEA",
            "Assess potential failure modes, effects, severity, occurrence and detection to prioritise prevention. This does not prove the actual cause of a past incident."
          ],
          [
            "PROACT®",
            "Preserve evidence / acquire data → Order team → Analyze → Communicate → Track. Five Ps: Parts, Position, People, Paper, Paradigms."
          ],
          [
            "Affinity diagram",
            "Cluster qualitative observations into themes for ambiguous problems. Clusters alone do not prove causation."
          ],
          [
            "Fault Tree Analysis",
            "Work down from a top-level failure to combinations of events, especially for high-consequence problems. Validate assumptions and relationships."
          ]
        ],
        "note": "Original exercise: when an open-data dashboard reports incorrectly, preserve source snapshots, schema, transformations and units; list candidates with Fishbone, investigate through evidenced Five Whys, then recalculate and monitor after correction. The reading’s software promotion and ROI claims are not independent effectiveness evidence."
      }
    ],
    "reviewTitle": "Self-checks: apply the principles",
    "reviewIntro": "Twelve original study questions derived from the materials, not official Moodle questions or exam predictions.",
    "quiz": [
      [
        "Are the course’s four IP types the same as IP Australia’s four?",
        "No. The course compares copyright, trade marks, trade secrets and patents. IP Australia registers trade marks, patents, design rights and plant breeder’s rights. Copyright is generally automatic; trade secrets depend on confidentiality."
      ],
      [
        "Does a source link let you publish a screenshot?",
        "A source link alone does not authorise copying. Check the owner, use, licence or exception and privacy or other rights. A screenshot is not itself an exemption."
      ],
      [
        "Why distinguish plagiarism and copyright infringement?",
        "Plagiarism concerns presenting another person’s contribution as your own; infringement concerns unauthorised acts reserved to a rights holder. Attribution is not permission, and permission does not justify claiming authorship."
      ],
      [
        "Is code automatically safe after changing 80%?",
        "There is no universal modification percentage. Assess significant copied expression, licence conditions, exceptions and other IP; a count of changes cannot settle the question."
      ],
      [
        "How does a song excerpt in a review differ from background music?",
        "The review may have a criticism or review purpose, still subject to fairness. Decorative background music does not acquire that purpose merely by being short."
      ],
      [
        "What is the practical distinction between MIT and GPL?",
        "MIT grants broad permissions while requiring copyright and permission notices. GPL imposes copyleft and relevant distribution obligations: check the version, coverage and source requirements. Neither means online code is unrestricted."
      ],
      [
        "Can a CC BY-NC-ND image become a commercial promotional poster?",
        "NC restricts commercial use, ND restricts sharing adaptations, and BY requires credit. Check the particular licence and obtain additional permission or choose appropriately licensed material."
      ],
      [
        "Does a licence for a public list resolve privacy?",
        "No. Copyright or data permission and personal-information obligations need separate assessment. Visibility is not unlimited reuse permission; check purpose, necessity, authority and disclosure."
      ],
      [
        "Why might a correctly formatted email address still be unreliable?",
        "Schema or format checks establish form, not truth. Misspelled, obsolete or unused addresses may pass; further factual checking depends on the intended use."
      ],
      [
        "Must broken sensor readings always be deleted?",
        "Purpose matters. Routine analysis may flag or filter them; sensor-failure research may need them. Preserve originals, document transformations and track versions."
      ],
      [
        "Why is the vendor not automatically solely responsible for an IT failure?",
        "The historical cases show that client analysis, training, resources and change management also affect outcomes. Assess contracts, representations, evidence, causation and duties. Acceptance or exclusions do not automatically remove all responsibility."
      ],
      [
        "What completes an RCA study application?",
        "Define the problem, gather evidence, test candidates, identify underlying factors and implement or propose targeted changes. Predict side effects and measure results. “Someone made a mistake” or suppressing symptoms is not an evidence chain."
      ]
    ],
    "sourcesTitle": "Sources and coverage",
    "sourcesIntro": "Ten materials inform the guide: one course image, three videos with 599 native caption cues, one seven-page PDF and five readings. Original course images, audio, videos and PDFs are not uploaded with the site.",
    "sourceLabels": {
      "visual": "Course overview image · visually reviewed",
      "intro": "2:11 · 15 native caption cues",
      "rca": "4:52 · 39 native caption cues and step slide",
      "seminar": "54:44 · 545 native caption cues",
      "law": "Course PDF · 7 pages · July 2009",
      "article": "Assigned web reading · local text",
      "redirect": "Assigned reading · saved redirected destination",
      "pending": "1:48 audio · no captions / transcript · excluded from claims"
    },
    "pending": "Short audio transcription pending",
    "pendingBody": "IP_Open_Data_and_Root_Cause_Analysis.m4a is downloaded but has no captions or transcript. Its unique content is not inferred. All other direct materials have been reviewed.",
    "verificationTitle": "Supplementary checks · official sources",
    "verificationIntro": "Checked 7 October 2026 to clarify legal scope and licence conditions; these do not extend this page into Week 10 ethics theory.",
    "boundary": "Native captions contain recognition noise and are synthesised rather than quoted. Cases follow the 2009 article; AI litigation, project instructions and service assumptions retain the recording’s context. Applications and self-checks are original, with no official course answers supplied for this page."
  }
} as const

export default function Week09({ locale }: { locale: Locale }) {
  const c = copy[locale]
  const toc = [{ id: 'overview', label: locale === 'zh' ? '本周主线' : 'Overview' }, ...c.sections.map(({ id, title }) => ({ id, label: title.split('：')[0].split(':')[0] })), { id: 'review', label: locale === 'zh' ? '自测' : 'Self-checks' }, { id: 'sources', label: locale === 'zh' ? '来源' : 'Sources' }]
  return (
    <WeekLayout weekId="09" locale={locale} eyebrow="Week 09 · Law, ethics and privacy" title="IP, Open Data & RCA" subtitle={c.subtitle} summary={c.summary} updated="07 Oct 2026" tags={[...c.tags]} toc={toc}>
      <ContentSection id="overview" index="01" title={c.overview}>
        <LeadCard label={locale === 'zh' ? '核心原则' : 'Core principle'} note={c.overviewNote}>{c.lead}</LeadCard>
      </ContentSection>
      {c.sections.map((section, i) => (
        <ContentSection key={section.id} id={section.id} index={String(i + 2).padStart(2, '0')} title={section.title} intro={section.intro}>
          <ResponsiveTable headers={[...section.headers]} rows={section.rows.map(row => [...row])} />
          <Callout label={locale === 'zh' ? '应用与辨析' : 'Application and distinctions'}>{section.note}</Callout>
        </ContentSection>
      ))}
      <ContentSection id="review" index="11" title={c.reviewTitle} intro={c.reviewIntro}>
        <QuizAccordion items={c.quiz.map(([question, answer]) => ({ question, answer }))} />
      </ContentSection>
      <ContentSection id="sources" index="12" title={c.sourcesTitle} intro={c.sourcesIntro}>
        <div className="grid gap-3 sm:grid-cols-2">{sources.map(([title, kind, url]) => (
          <InfoCard key={title} title={title} tone={kind === 'pending' ? 'warm' : 'plain'}>
            <p>{c.sourceLabels[kind]}</p>
            <a href={url} target="_blank" rel="noreferrer" className="mt-2 inline-flex items-center gap-2 font-semibold text-[var(--week-accent)] underline underline-offset-4">{locale === 'zh' ? '查看来源' : 'View source'}<ExternalLink className="size-3.5" /></a>
          </InfoCard>
        ))}</div>
        <Callout label={c.pending}>{c.pendingBody}</Callout>
        <div className="mt-8 rounded-2xl border bg-card p-6">
          <h3 className="text-lg font-black">{c.verificationTitle}</h3>
          <p className="mt-2 text-sm text-muted-foreground">{c.verificationIntro}</p>
          <ul className="mt-4 space-y-3 text-sm">{checks.map(([title, url]) => (
            <li key={url}><a href={url} target="_blank" rel="noreferrer" className="font-semibold text-[var(--week-accent)] underline underline-offset-4">{title}</a></li>
          ))}</ul>
        </div>
        <Callout label={locale === 'zh' ? '阅读说明' : 'Reading note'}>{c.boundary}</Callout>
      </ContentSection>
    </WeekLayout>
  )
}
