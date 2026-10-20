import { ChapterLayout } from '@/components/chapter-layout'
import { QuizAccordion } from '@/components/quiz-accordion'
import { Callout, ContentSection, LeadCard, ResponsiveTable, SourceList } from '@/components/week-layout'
import type { Locale } from '@/i18n'

const sources = [
  'quiz/chapter01-official.md · Q1–4; quiz/chapter02-official.md · Q1–6; quiz/chapter03-official.md · Q1–6 (question styles only)',
  'quiz/rubric.md · Identification of Issues 30%; Application of Strategies / Concepts 30%; Justification & Professional Judgement 40%',
  'week09/own-time/transcripts/Chapter 5 introduction; Copyright Seminar · 03:33–49:14; Root Cause analysis · 00:35–04:07 (native captions)',
  'week09/own-time/Understanding intellectual property (IP).md; What is fair dealing and when can you copy without permission.md',
  'week09/own-time/Good Open Data - by design.md; Four things you should know about open data quality.md',
  'week09/own-time/IT Project Failures and the Law.pdf · Bosnic (2009), printed pp. 12–16',
  'week09/own-time/Root Cause Analysis.md (redirected: 7 Powerful Root Cause Analysis Tools and Techniques)',
  'week09/real-time/Week 9 Real-time Activities.md · Blooble Scenarios 1–5 (assets/image (7)–(10).png)',
  'week10/own-time · Introduction to Ethics for IT Professionals.pdf; Professionals and Ethics.pdf; ACS Code of Professional Conduct.pdf (2014 V2.1, pp. 4–8); A Framework for Ethical Decision Making.pdf; Ethics Canvas.pdf',
  'week10/own-time · Australian Privacy Principles - a summary for APP entities.pdf; ISM - Cyber Security Principles.pdf; Framework for Governance of Indigenous Data.pdf; Ethical Principles for AI Capability.md',
  'week10/own-time · 5 examples of ethical issues in software development.md; Ethical issues for IT security professionals.md',
  'week10/real-time · Rawls - social contract & EDI.srt; Case Study - Week 10 Ethical Issues.png; Week 10 Real-time Activities.md (Q1–4); FIT5122 Week 6 Debate Scenario - student.pdf (archive case only); Applied Session Plan Week 10 · pp. 3, 5–9',
  'week11/own-time/transcripts/The Ethics of IT systems.srt · 00:00–18:52',
  'week11/own-time · Social media addiction; Infiltration of privacy; National ID matching; The Uses and Abuses of Customer Profiling; Targeting products by surveilling the sick; Facebook approves alcohol, gambling and dating ads targeting teens; Is privacy dead; ChatGPT is a data privacy nightmare; Two data points are enough to spot you in open transport records',
  'week11/real-time · Week 11 Real-time Activities.md; EthicsVideo.srt (same file as Week 10 Introduction To Ethics Video); Ethical dilemma and Conflict of Interest - Walkthrough.png; Applied Session Plan Week 11v2 · p. 6',
]

const copy = {
  zh: {
    subtitle: 'Weeks 09–11 · 考前速记',
    summary: '只列会考的定义、清单与辨析：IP 与许可、开放数据与 RCA、伦理原则与 ACS、APP / ISM / AI 原则、Rawls、画像与再识别、利益冲突。“必记”列背下来，“说明”列用来排除选项。',
    lead: '能做 ≠ 合法 ≠ 获得许可 ≠ 应该做。情境题：事实 → 受影响者 → ACS 价值 / 伦理原则 → 比较方案 → 行动与验证。',
    tags: ['Weeks 09–11', '速记版', '36 道选择题 + 6 道综合题', '自编练习 · 非官方题'],
    headers: ['考点', '必记', '说明 / 易错'],
    noteLabel: '易错',
    sections: [
      {
        id: 'ip', title: 'Week09 · 知识产权：区分保护对象',
        rows: [
          ['课程四类 IP', 'Copyright · Trade mark · Patent · Trade secret', '版权保护表达；商标保护来源标识；专利保护发明；商业秘密保护保密信息。'],
          ['是否需要注册', '版权：自动产生，无需注册或 © · 专利：须申请 · 商业秘密：靠保密 / NDA', '“没有 © 就没有版权”是错的。'],
          ['IP Australia 四类注册权', 'Trade marks · Patents · Design rights · Plant breeder’s rights', '不含 copyright 与 trade secret，是 NOT 题陷阱。'],
          ['版权保护什么', '表达（代码、文本、图像），不保护想法或单纯事实', '计算机程序属于 literary work。'],
          ['归属', '雇佣中完成的作品通常归雇主，除非合同另有约定', '跳槽不能带走为前雇主写的代码。'],
          ['经济权 vs 精神权', '经济：复制、发布、传播 · 精神：署名、反对虚假署名、作品完整性', '获得使用许可也不能删除作者署名。'],
          ['四个常见误区', '可在线访问 ≠ 可复制 · 署名 ≠ 许可 · 没有“改 X% 就安全” · 截图也是复制', ''],
        ],
        note: '先确认题目问的是哪份“四类”清单，再作答。',
      },
      {
        id: 'licences', title: 'Fair dealing 与许可证',
        rows: [
          ['Fair dealing 五个目的', 'Research or study · Criticism or review · Parody or satire · Reporting the news · Professional (legal) advice', '还须通过公平性判断；学生身份不自动合理。'],
          ['公平性因素', '目的、作品性质、取用量与重要性、能否获得许可、市场影响', '没有固定百分比。'],
          ['Fair dealing vs fair use', '澳大利亚：限定目的 + 公平 · 美国 fair use 范围更宽', '不要套用美国规则。'],
          ['MIT', '可使用、修改、分发、商用；必须保留版权与许可声明', '宽松 ≠ 不需要声明。'],
          ['GPL', 'Copyleft：分发时须提供源码并沿用同一许可', '不能随意并入闭源产品再分发。'],
          ['CC 组件', 'BY 署名 · SA 相同方式共享 · NC 非商业 · ND 禁止改编', 'CC0 ≈ 放弃版权，但不解决隐私或商标问题。'],
          ['没有许可证', '默认不可使用', 'GitHub “quick hack” 先查许可。'],
        ],
        note: '署名解决剽窃问题，许可解决侵权问题，两者不能互相替代。',
      },
      {
        id: 'data-rca', title: '开放数据、RCA 与 IT 项目失败',
        rows: [
          ['开放数据质量四点', '1 发布质量重要（可发现、可访问、有文档、许可清楚）· 2 问题类型不同 · 3 修复需要不同证据 · 4 质量取决于用途', '格式有效 ≠ 事实正确。'],
          ['Fitness for purpose', '是否“够好”取决于用途、风险与资源', '异常传感器读数对故障分析可能正是证据。'],
          ['Provenance', '记录创建者、时间、来源、访问与变更', '数据许可 ≠ 隐私合规。'],
          ['RCA 五步', '定义问题 → 收集数据 → 识别可能原因 → 确定根因 → 实施 / 建议方案', 'RCA 找原因，不是找人背锅。'],
          ['RCA 工具', '5 Whys · Fishbone（people, methods, machines, materials, environment）· Pareto（80/20）· FMEA（severity, occurrence, detection）· Fault Tree · PROACT · Affinity', 'FMEA 用于预防，不证明过去事故的原因。'],
          ['IT 项目失败案例', 'Ateco：客户未做需求分析，索赔被驳回 · Durham：误导性陈述 · Westsub：性能要求未写入合同 · Unisys v RACV：通过验收后在真实负载下失败', '写清需求与性能目标；验收用真实负载；供应商不必然独自负责。'],
        ],
        note: 'Five Whys（找原因）≠ Week08 的 Why / Who / What / When / How（沟通规划）。',
      },
      {
        id: 'ethics', title: 'Week10 · 伦理基础',
        rows: [
          ['Morality vs ethics', 'Morality：社会关于应当做什么的规则 · Ethics：研究对错判断如何作出与证成', ''],
          ['Trolley + lever', '技术能救五人，也让原本安全的人陷入风险', '技术会重新分配风险：既看受益者，也看新增的受害者。'],
          ['Ethics in / by / for designers', 'In = 目标（ends）· By = 手段（means）· For designers = 动机（motivation）', '目标好不代表手段正当。'],
          ['四项原则', 'Beneficence 谁受益 · Non-maleficence 谁受害 · Autonomy 选择、隐私、尊严 · Justice 公平与权利（含财产权）', ''],
          ['Responsibility gap', '自主 AI 出错时责任落空', '“系统决定的”不是答案，要追问设计、验证、部署与监督者。'],
          ['Consequentialism vs deontology', '看结果（utilitarianism 是其中一种）vs 看义务、规则、权利', '好结果不自动允许侵犯权利。'],
          ['Should I build it?', '先问“该不该做”，再问“能不能做”', 'Week11 讲座主线：动手前考虑后果，尽量降低负面影响。'],
        ],
        note: 'Public interest ≠ 多数受益：故意伤害个人会侵犯权利，是“a step too far”。',
      },
      {
        id: 'acs', title: 'ACS 六项价值与决策框架',
        rows: [
          ['六项价值', '1 Primacy of the Public Interest · 2 Enhancement of Quality of Life · 3 Honesty · 4 Competence · 5 Professional Development · 6 Professionalism', '价值冲突时 public interest 优先。'],
          ['Public interest', '公众利益高于个人、商业与局部利益', '受影响者包括非客户，例如 HR 记录中的员工。'],
          ['Honesty / Competence', 'Honesty：不误导，如实说明风险与限制 · Competence：认识局限、遵守标准、拒绝不合适的方案', '不实施明知不达标的安全方案。'],
          ['决策五阶段', 'Recognise an ethical issue → Get the facts → Evaluate alternative actions → Make a decision and test it → Act and reflect on the outcome', '第二步就要列出未知、咨询利益相关者。'],
          ['五个 lens', 'Utilitarian · Rights · Justice · Common good · Virtue', 'Utilitarian = 最多好处、最少伤害。'],
          ['Ethics Canvas', '第 1–8 块探索影响；第 9 块选出 4 个最重要的影响并给出回应', ''],
        ],
        note: '“服从或辞职”是错误的二选一；应说明风险、提出替代方案、记录并上报。',
      },
      {
        id: 'privacy', title: 'APP、ISM、AI 原则与 FAIR / CARE',
        rows: [
          ['APP 1–5', '1 公开透明管理 · 2 匿名 / 假名 · 3 收集所请求的信息 · 4 未请求的信息 · 5 收集通知', ''],
          ['APP 6–9', '6 使用或披露 · 7 直接营销 · 8 跨境披露 · 9 政府相关标识符', '出售用户数据 → 6、7（可能还有 8）。'],
          ['APP 10–13', '10 质量 · 11 安全（含销毁 / 去标识化）· 12 访问 · 13 更正', '加密只覆盖 APP 11 的一部分。'],
          ['ISM 四项活动', 'Govern · Protect · Detect · Respond', '安全目标：CIA（confidentiality, integrity, availability）。'],
          ['ISM 成熟度', 'Incomplete → Initial → Developing → Managing → Optimising', 'Optimising 是成熟度等级，不是活动。'],
          ['AI Ethics Principles（8 项）', 'Wellbeing · Human-centred values · Fairness · Privacy & security · Reliability & safety · Transparency & explainability · Contestability · Accountability', '透明 = 解释；可质疑 = 能申诉复核；问责 = 谁负责纠正。'],
          ['FAIR / CARE', 'FAIR：Findable, Accessible, Interoperable, Reusable · CARE：Collective benefit, Authority to control, Responsibility, Ethics', 'CARE 补充原住民群体的控制权与集体利益。'],
        ],
        note: '公开可见的个人信息仍受 APP 约束。',
      },
      {
        id: 'rawls', title: 'Rawls：无知之幕',
        rows: [
          ['Veil of ignorance', '制定规则时不知道自己的性别、年龄、阶层、族裔、能力', '因此人会 rationally disinterested（理性无偏）。'],
          ['Equal liberty', '基本自由（言论、迁徙、免受迫害）人人平等', '这一项不允许不平等。'],
          ['Fair equality of opportunity', '带来优势的职位对所有人开放', ''],
          ['Difference principle', '不平等仅在使最不利者比绝对平均时更好才允许', '≠ 多数受益（那是功利主义）。'],
        ],
        note: 'IT 应用：“如果我是最不利的用户，我能接受这个设计吗？”',
      },
      {
        id: 'week11', title: 'Week11 · 数据技术的收益与风险',
        rows: [
          ['Profiling 定义', '结合多来源数据建立个人详细档案，以评估或预测行为，或识别人群类别', ''],
          ['Overt vs covert 收集', 'Overt：注册、更新资料、问卷、抽奖 · Covert：cookies、追踪软件、web bugs、beacons', '多选题高频。'],
          ['数据 = 资产 + 负债', '持有大量个人数据有泄露、声誉、罚款与民事责任风险', '这是数据最小化的理由。'],
          ['Location tracking', '收益：导航、紧急定位、车队管理 · 风险：跟踪骚扰、政府控制', 'Google 被澳大利亚联邦法院认定在位置设置上误导用户。'],
          ['Predictive algorithms', '按过去的数据预测行为', '风险：预测不准；filter bubbles 强化偏见。'],
          ['Jigsaw identification', '组合两个以上来源的信息，可重新识别“去标识化”数据', ''],
          ['AI', '收益：处理重复任务、辅助诊断 · 风险：缺乏情感与创造力、岗位替代、放大隐私问题', ''],
        ],
        note: '去标识化 ≠ 匿名。',
      },
      {
        id: 'readings', title: 'Week11 阅读：必记事实',
        rows: [
          ['Myki（Pursuit）', '15M 张卡，只删除卡号 · 2 次刷卡识别自己 · ±5 秒同刷识别同行者 · 推文识别州议员', '补救：differential privacy；时间粗化无效。'],
          ['Contextual integrity（ChatGPT 一文）', '信息不应在其产生的语境之外被披露，即使是公开数据', '另记：right to be forgotten、版权数据、prompt 泄露。'],
          ['Creepy line（Is privacy dead）', 'Creepy line 存在且会移动，而且不止一条', '隐私是情境性的、关乎权力；同意缺乏真实选择。'],
          ['Interest proxies（The Markup）', '用“cancer awareness”“oxygen”等兴趣替代健康类别做定向', '绕开“没有健康类别”的保护；屏幕广告可能暴露病情。'],
          ['Teen ads（ABC）', '赌博、酒精、约会广告获批；香烟被拒，电子烟获批', '青少年数据被当作成年人数据处理。'],
          ['Attention economy（Guardian）', 'Variable rewards（老虎机）· pull-to-refresh · 红色通知', '“privileges our impulses over our intentions”；like 按钮的意外后果。'],
          ['Customer profiling', '区分 anonymity 与 privacy · 内部使用比出售更可接受', '“It’s practices, not policies, that count.”'],
          ['National ID matching', 'Home Affairs 招标建设全国人脸识别系统（驾照照片）', '缺乏立法监督与透明度。'],
        ],
        note: '答题时引用机制（代理变量、拼图识别、语境完整性），比引用新闻细节更稳妥。',
      },
      {
        id: 'coi', title: 'Ethical dilemma vs Conflict of Interest',
        rows: [
          ['Ethical dilemma', '在相互冲突的正当价值或义务之间选择（两好或两坏）', '用决策框架比较方案、说明取舍。'],
          ['Conflict of interest', '个人利益或关系可能影响（或看起来影响）职业判断与义务', '处理：披露 → 回避 → 按政策记录。'],
          ['一句话区分', 'Dilemma = 价值 vs 价值 · COI = 私利 vs 职责', 'COI 本身不一定违规，未披露、未管理才是问题。'],
          ['COI 典型情形（走查 10 例）', '经济利益：持有供应商股份、收钱泄露信息、兼职服务雇主客户、私下做顾问 · 关系：与上下级恋爱、雇用不合格亲属、包庇朋友、不披露与应聘者的亲属关系', '发布公司弱点、面试泄露计划还涉及保密义务。'],
          ['相关 ACS 价值', 'Public interest（提出冲突）· Honesty · Professionalism', ''],
        ],
        note: 'Week11 材料没有给出原文定义；以上定义综合自 Week10 材料与一般职业实践。',
      },
      {
        id: 'scenarios', title: '课堂情境速答',
        rows: [
          ['Blooble → Beta 跳槽', '不能带走代码或保密信息，能带走的是一般技能', 'Ownership、trade secret、honesty。'],
          ['开放用户发帖（UGC）', '版权、诽谤、隐私风险 → 使用条款、审核、下架机制', '公司不能说“是用户发的，与我们无关”。'],
          ['赶工用 GitHub / ChatGPT 代码', '先查许可（MIT 声明、GPL copyleft），审查 AI 代码，不泄露保密代码', '截止压力不改变许可义务。'],
          ['收集用户数据并出售', 'APP 3、5、6、7、8、11', '先用于改进服务、再出售 = 二次使用。'],
          ['HR 数据喂给免费 ChatGPT', '敏感信息外泄 · APP 6 / 8 / 11 · 违背 contextual integrity', '付费版也要核对合同；自建模型仍需最小化与访问控制。'],
          ['削减 HR 系统安全预算（Pete）', '说明并记录风险 → 提出替代的节省方案 → 必要时上报', '员工也是利益相关者。'],
          ['遗留编码导致残障数据失真', '选 public interest、quality of life、honesty；标注不可比、做映射或抽样修正、向政策使用者披露', '用 Ethics Canvas 识别受影响群体。'],
        ],
        note: '每题先问：谁拥有？什么许可 / 合同？涉及哪些个人信息？谁承担风险？',
      },
      {
        id: 'traps', title: '易混对照',
        rows: [
          ['De-identified vs anonymous', '删除标识符 ≠ 无法再识别', '例：Myki。'],
          ['Anonymity vs privacy', '不知道你是谁 vs 控制谁知道你的什么', ''],
          ['Legal vs ethical vs possible', '三个不同的问题', '能做、合法，不代表应该做。'],
          ['Transparency vs contestability vs accountability', '解释 vs 申诉复核 vs 谁负责纠正', ''],
          ['RCA vs 伦理判断', 'RCA 解释原因；伦理框架决定应该怎么做', '预算超支解释了压力，不能证明降低安全是正当的。'],
          ['ISM 活动 vs 成熟度', 'Govern / Protect / Detect / Respond vs Incomplete … Optimising', ''],
        ],
        note: '遇到 NOT 题先圈否定词，确认问的是哪份清单。',
      },
      {
        id: 'method', title: '情境题答题模板',
        rows: [
          ['评分权重', '问题识别 30% · 概念应用 30% · 专业判断 40%', '理由与判断占比最高。'],
          ['1 立场', '直接给出有条件的建议', ''],
          ['2 问题 + 事实', '按重要性列出法律 / 伦理问题，引用题干事实', ''],
          ['3 受影响者', '包括非用户、弱势群体与公众', ''],
          ['4 比较方案', '至少两个可行方案，用 ACS 价值 / 伦理原则说明取舍', '避免“服从或辞职”。'],
          ['5 行动 + 验证', '负责人、步骤、证据（审计、再识别测试、反馈）', '只写“加强隐私保护”太空泛。'],
        ],
        note: 'I recommend … because … . Although … , it risks … for … . Applying ACS … , the team should … . Success would be shown by … .',
      },
    ],
    practiceTitles: ['Week09 · 12 道选择题（含多选）', 'Week10 · 12 道选择题（含多选）', 'Week11 · 12 道选择题（含多选）', '综合应用与批判题 · 6 道示范'],
    practiceIntro: '自编练习，题型参照 Chapter01–03 official；非 Moodle 官方题。先作答，再展开答案。',
    quiz09: [
      ['IP Australia 负责注册的四类权利中，哪项不在其中？\nA. Trade marks\nB. Patents\nC. Copyright\nD. Plant breeder’s rights', '答案：C。澳大利亚版权自动产生，无需注册。IP Australia 的四类是 trade marks、patents、design rights、plant breeder’s rights；课程比较的四类是 copyright、trade marks、trade secrets、patents。'],
      ['公司从未公开推荐算法的参数，员工签有保密协议。最贴切的保护形式？\nA. Trade mark\nB. Trade secret\nC. Copyright registration\nD. Public domain', '答案：B。保密信息依靠保密义务保护；澳大利亚版权本就无需注册；商标保护来源识别，不保护算法。'],
      ['开发者在 GitHub 找到一段没有 © 标记的代码，可以直接放进商业产品吗？\nA. 可以，没有 © 就没有版权\nB. 可以，只要注明出处\nC. 不能默认可用，先确认许可证及其条件\nD. 可以，只要改动超过 50%', '答案：C。没有 © 不代表没有版权；署名不等于许可；改动比例没有通用规则。没有许可证时默认不可用。'],
      ['以下哪项不是指定阅读列出的 fair dealing 目的？\nA. Research or study\nB. Criticism or review\nC. Commercial advertising\nD. Parody or satire', '答案：C。阅读列出 research/study、criticism/review、parody/satire、reporting the news、professional advice。商业广告不是限定目的。'],
      ['学生把整本教材扫描版放在公开作品集网站，理由是“学习用途”。最佳判断？\nA. 学生身份使其自动合法\nB. 学习目的仍需公平性判断，公开发布整本教材很难成立\nC. 只要署名即可\nD. 扫描不属于复制', '答案：B。目的只是第一步，还要看数量、重要性、市场影响与能否获得许可。公开传播整本书远超学习所需。'],
      ['MIT 许可证的关键条件是？\nA. 禁止商业使用\nB. 分发修改版时必须公开全部源码\nC. 在副本或实质部分中保留版权与许可声明\nD. 禁止修改', '答案：C。MIT 宽松，但仍需保留声明。B 是 GPL copyleft 的特征；A、D 属于 CC NC、ND 一类限制。'],
      ['多选 · 想把 CC BY-NC-ND 图片改色后用于公司付费广告，哪些条款构成障碍？\nA. BY\nB. NC\nC. ND\nD. 没有障碍，CC 等于免费', '答案：B、C。NC 限制商业用途，ND 限制分享改编作品；BY 只要求署名，本身不阻止此用途。D 是常见误解。'],
      ['数据集中所有邮箱都通过格式校验，但大量退信。这说明什么？\nA. Schema 校验已证明数据正确\nB. 格式有效不等于事实正确，需按用途对照权威来源核查\nC. 应删除全部数据\nD. 数据质量与用途无关', '答案：B。不同问题需要不同证据：schema 检查结构，事实与时效需另外核查。'],
      ['“质量取决于用途”最接近哪种说法？\nA. 所有数据都应达到最高精度\nB. 是否足够好取决于用途、风险与资源\nC. 损坏的传感器读数必须全部删除\nD. 只要发布即可', '答案：B。粗略地图与边界纠纷要求不同精度；异常读数对故障研究可能正是证据。'],
      ['RCA 五步的正确顺序？\nA. 实施方案 → 定义问题 → 收集数据 → 找原因\nB. 定义问题 → 收集数据 → 识别可能原因 → 确定根因 → 实施 / 建议方案\nC. 找责任人 → 处罚 → 结束\nD. 收集数据 → 实施方案 → 定义问题', '答案：B。先定义与取证，再检验候选原因；C 把 RCA 变成追责，正是讲座提醒避免的做法。'],
      ['多选 · 哪些是 RCA 讲座或阅读中的分析工具？\nA. Five Whys\nB. Fishbone (Ishikawa)\nC. Pareto chart\nD. Elevator pitch\nE. Fault Tree Analysis', '答案：A、B、C、E。Elevator pitch 属于 Week08 沟通内容；有用不等于属于题目所问的类别。'],
      ['Unisys v RACV 中，系统通过验收测试后在实际运行中失败。最直接的教训？\nA. 验收应以明确目标在真实负载下测试\nB. 通过验收即免除供应商全部责任\nC. 无需书面需求\nD. 客户无需参与', '答案：A。文章记述供应商上诉失败；验收与免责条款都不会自动消除所有责任。'],
    ],
    quiz10: [
      ['按课程提供的 2014 ACS Code of Professional Conduct，六项价值冲突时优先哪一项？\nA. Competence\nB. Honesty\nC. The Primacy of the Public Interest\nD. Professionalism', '答案：C。公共利益优先于个人、商业与局部利益，但仍需判断“公共利益”的具体含义。'],
      ['以下哪项不是 ACS 六项价值之一？\nA. Enhancement of Quality of Life\nB. Professional Development\nC. Profit Maximisation\nD. Honesty', '答案：C。六项为 public interest、quality of life、honesty、competence、professional development、professionalism。'],
      ['Ethics by Design 主要审视什么？\nA. 系统目标是否值得追求\nB. 系统用什么手段实现目标\nC. 设计者的动机\nD. 项目利润', '答案：B。In = ends（目标）；By = means（手段）；For designers = motivations（动机）。'],
      ['“Who or what might be harmed?” 对应哪项原则？\nA. Beneficence\nB. Non-maleficence\nC. Autonomy\nD. Justice', '答案：B。Beneficence 问谁受益；autonomy 问选择、隐私与尊严；justice 问公平与权利。'],
      ['Santa Clara 伦理决策框架的第二阶段是？\nA. Recognise an ethical issue\nB. Get the facts\nC. Act and reflect on the outcome\nD. Make a decision and test it', '答案：B。此阶段列出已知与未知、咨询利益相关者并扩展选项。'],
      ['“哪个选项带来最多好处、最少伤害？”属于哪个 lens？\nA. Rights\nB. Virtue\nC. Utilitarian\nD. Common good', '答案：C。Rights 关注权利；virtue 关注品格；common good 关注整体社群。'],
      ['客户因预算超支，要求 Pete 降低存有薪资与病历的 HR 系统安全等级。最佳回应？\nA. 客户付钱，照做\nB. 立即辞职\nC. 说明并记录对员工的风险，提出其他节省方案，必要时上报\nD. 悄悄保持原标准但不告诉客户', '答案：C。员工也是利益相关者；public interest、competence、honesty 都支持 C。D 违背诚实；A、B 是错误的二选一。'],
      ['APP 11 主要关于？\nA. 直接营销\nB. 个人信息安全，以及在特定情况下销毁或去标识化\nC. 跨境披露\nD. 匿名与假名', '答案：B。A 是 APP 7，C 是 APP 8，D 是 APP 2。'],
      ['多选 · ISM 的四项活动是？\nA. Govern\nB. Protect\nC. Detect\nD. Respond\nE. Optimise', '答案：A、B、C、D。Optimising 是五个成熟度等级之一，不是活动——两份清单不要混淆。'],
      ['AI Ethics Principles 中“为受 AI 重大影响的人提供及时、可及的质疑途径”是？\nA. Transparency and explainability\nB. Contestability\nC. Accountability\nD. Fairness', '答案：B。Transparency 提供解释；accountability 指定负责人；三者互补而不互相替代。'],
      ['CARE 原则中的 A 指？\nA. Accessible\nB. Authority to Control\nC. Accuracy\nD. Anonymity', '答案：B。Accessible 属于 FAIR。CARE 补充了集体利益、控制权、责任与伦理。'],
      ['Rawls 的 difference principle 允许不平等的条件是？\nA. 多数人受益即可\nB. 不平等使最不利者比绝对平均分配时更好，且相关职位对所有人公平开放\nC. 最富有者贡献最大\nD. 基本自由可以不平等分配', '答案：B。基本自由必须平等（equal liberty）；A 是功利总量思路，不是 Rawls 的条件。'],
    ],
    quiz11: [
      ['课程对 profiling 的定义最接近？\nA. 一次性收集用户邮箱\nB. 结合多来源数据建立个人详细档案，以评估或预测行为，或识别人群类别\nC. 只在用户同意时收集问卷\nD. 加密数据库', '答案：B。关键词：多来源、详细档案、评估 / 预测、分类。'],
      ['多选 · 哪些属于 covert（隐性）数据收集？\nA. 注册表单\nB. Cookies\nC. Web bugs / beacons\nD. 抽奖报名表\nE. 推断兴趣的追踪软件', '答案：B、C、E。注册、问卷、抽奖是 overt 收集。隐性收集使用户难以知道被收集了什么。'],
      ['讲座强调，持有大量个人数据是？\nA. 纯粹的资产\nB. 资产，同时也是负债\nC. 与安全无关\nD. 只有政府才有风险', '答案：B。泄露风险、声誉损害、罚款与民事责任使数据同时是负债，这也是数据最小化的理由。'],
      ['Myki 研究者凭自己的两次刷卡找到自己的全部出行记录。组合多来源信息重新识别的现象叫？\nA. Differential privacy\nB. Jigsaw (re-)identification\nC. Pseudonymity\nD. Encryption', '答案：B。删除卡号并未切断同一张卡的出行关联，外部已知信息即可拼出身份。'],
      ['Myki 阅读推荐的补救措施是？\nA. 只删除卡号\nB. 把时间粗化到 5 分钟\nC. Differential privacy\nD. 发布给更多团队', '答案：C。阅读指出时间粗化到 5 分钟后，5 次事件仍使 50% 以上的卡唯一；只用地点时 2 次即可。'],
      ['Facebook 没有明确的健康类别，药企却用 “cancer awareness”“oxygen” 等兴趣投放。核心问题？\nA. 兴趣可充当敏感健康状况的代理变量，绕开隐私保护\nB. 广告文字太长\nC. 药企不应做任何广告\nD. 兴趣类别总是准确', '答案：A。代理变量让“没有健康类别”的承诺失去意义，还可能在屏幕上向他人暴露病情。'],
      ['Reset Australia 的测试中，哪类面向青少年的广告被拒绝？\nA. 赌博\nB. 酒精\nC. 香烟\nD. 约会', '答案：C。香烟广告被拒，但换成电子烟的同一广告获批。测试广告未付费、未投放——研究者自身也做了伦理选择。'],
      ['ChatGPT 隐私文章中的 contextual integrity 指？\nA. 数据必须加密\nB. 个人信息不应在其最初产生的语境之外被披露，即使是公开数据\nC. 模型输出必须正确\nD. 用户可以删除账号', '答案：B。“公开可见”不等于可用于任何语境，这与 APP 对公开信息的处理思路一致。'],
      ['关于 Schmidt 的 “creepy line”，Is privacy dead 的结论最接近？\nA. 只有一条固定的 creepy line\nB. Creepy line 存在且会移动；有数百条，应由社区划定并让企业先证明正当性\nC. 隐私已死，无需讨论\nD. 同意书能解决所有问题', '答案：B。文章还指出同意缺乏真实选择、无法覆盖公共空间，他人数据也能推断你。'],
      ['Social media addiction 中，pull-to-refresh 被比作什么？\nA. 电梯警报\nB. 老虎机（variable rewards）\nC. 图书馆目录\nD. 邮件归档', '答案：B。可变奖励制造渴望；注意力经济“privileges our impulses over our intentions”。'],
      ['The Ethics of IT systems 讲座认为应先问哪个问题？\nA. Can I build it?\nB. Should I build it?\nC. How fast can I ship?\nD. How much data can I collect?', '答案：B。随后问可能后果，以及如何构建才能把负面影响降到最低。'],
      ['多选 · 哪些情形构成或可能构成利益冲突？\nA. 持有向雇主供货公司的股份却未披露\nB. 不披露自己与应聘者是亲属\nC. 因为是朋友而不调查同事违规\nD. 在团队会议上按议程讨论技术方案\nE. 收取另一家公司的顾问费并为其谋利', '答案：A、B、C、E。私人经济利益或关系可能影响职业判断；D 是正常工作。处理方式：披露、回避、按政策记录。'],
    ],
    critical: [
      ['情境 1 · 你在 Blooble 开发数据库与网站，竞争对手 Beta 提供更好的职位，暗示看重“你写过的代码”。你打算把在 Blooble 写的模块带去 Beta 复用。批判评价这一做法，并提出合适行动。', '参考答案：不应带走或复用这些代码。雇佣过程中创作的作品通常归雇主，除非协议另有约定，因此应先核对雇佣合同、IP 与保密条款；若模块含内部方法或数据结构，还涉及 trade secret。队友的贡献更不属于你。复用会违反 ACS honesty 与 professionalism，并可能使 Beta 面临侵权风险。合理做法：接受职位前确认不得带走的内容；离职时交还资料；在 Beta 只用一般技能与公开知识，必要时重新独立设计并记录；若 Beta 要求提供原代码，应拒绝并说明理由。验证：离职清单、无 Blooble 代码进入 Beta 仓库的审查记录。'],
      ['情境 2 · 经理要求用员工聊天记录与 HR 档案训练内部问答 chatbot。为省钱，你打算把数据上传到免费版 ChatGPT。批判评价，并比较付费版、自建模型、加入网站抓取 UGC 三种变体。', '参考答案：免费版方案应停止。HR 与聊天记录包含敏感个人信息与保密内容，上传第三方服务涉及 APP 6（超出原目的的使用）、APP 8（可能跨境）与 APP 11（安全），并违背 contextual integrity：员工提供数据是为了雇佣，而非训练模型。免费服务的保留与训练条款可能不受公司控制。付费 / 企业版需核对合同中的数据保留、训练用途与地点，不能想当然认为安全。自建模型降低外泄风险，但仍需目的限定、最小化（排除病历、薪资）、访问控制与告知员工。加入抓取的 UGC 叠加版权与用户隐私问题。建议：先做隐私影响评估，只用政策文档等非个人数据，设置人工复核与问责人。验证：数据清单、DPIA、访问日志与员工反馈渠道。'],
      ['情境 3 · 政府新编码约定沿用了旧系统中含义不同的代码，导致残障类别的时间序列多报或少报，而这些数字用于为族裔社群制定政策。管理层决定不修历史系统。用 Ethics Canvas 和三项最相关的 ACS 价值说明你如何处理。', '参考答案：问题不只是技术不一致，而是错误数字可能导致资源分配不公。Canvas：受影响个人（残障人士）、群体（族裔社群、政策制定者）、产品失败（错误时间序列）与问题性资源使用。选三项价值：public interest（政策影响弱势群体）、quality of life（服务获取）、honesty（不能把不可比数据当可比数据呈现）。方案比较：全面修复成本高；完全不修则持续误导。建议折中：建立新旧代码映射表并抽样修正关键类别；在所有报告中标注断点与不可比；向政策使用者书面说明限制；与受影响社群沟通。验证：抽样核对的误差率、报告中的披露、政策团队确认理解。'],
      ['情境 4 · 政府委托顾问公司数字化一批 1940–1965 年的档案，其中有 1943 年 400 份未婚生育后送养女性的调查（含姓名、住址、宗教与家属），表格曾承诺保密。开发者 Lavinda 打算把这些数据与当前政府个人数据库关联，做后代教育与心理健康的纵向分析。评价她的计划并提出建议。', '参考答案：她的计划不应按现状推进。利益相关者包括受访女性及其后代与家属、档案员、研究者、政府与公众。原表格承诺保密，关联当前数据库会违背原始语境（contextual integrity），并可能通过拼图识别暴露送养身份，造成严重伤害。这是 dilemma：历史研究价值与当事人隐私、尊严之间的冲突。建议：不建立带姓名的可检索索引；档案员保留原件但限制访问；研究者需经伦理审查、在受控环境中使用去标识或汇总数据；不与当前个人数据库关联，除非有法律授权与伦理批准；考虑差分隐私等技术。需进一步了解：适用法律、当事人是否在世、是否可征得同意。ACS public interest、honesty 与 competence 支持该做法。'],
      ['情境 5 · 明确分问：交通部门发布“已去标识化”的公交刷卡数据用于数据马拉松，只删除了卡号，保留到秒的时间与站点。\n1. 解释“去标识化”在此为何不足。\n2. 分析可能的伤害与受影响者。\n3. 提出两项改进或评估方法，说明各自产生的证据；至少一项直接针对再识别风险。', '参考答案：1. 删除卡号不切断同一张卡的出行链；结合两次已知刷卡或社交媒体信息即可拼图识别（Myki：2 个点，±5 秒同行者，州议员）。2. 受影响者包括普通乘客、儿童卡用户、议员与警察；伤害包括住址与工作地暴露、被前伴侣跟踪、家庭关系泄露。数据作为资产的同时也是负债。3. (a) 发布前进行再识别测试（红队尝试用公开信息匹配），证据是匹配成功率；(b) 采用 differential privacy 或只发布汇总，证据是隐私预算与可用性评估；也可分级访问并签署使用协议。粗化时间不足，阅读显示 5 分钟粒度下仍高度唯一。'],
      ['情境 6 · 一款面向 13–17 岁用户的游戏 app，市场经理提议按兴趣画像推送能量饮料与抽奖式道具广告，并称“没有收集年龄以外的敏感信息”。你随后得知该经理持有其中一家广告商的股份。批判评价。', '参考答案：存在两个问题：画像伤害与利益冲突。画像方面，兴趣可充当敏感特征的代理，可变奖励式道具利用青少年的冲动，违背 autonomy 与 non-maleficence；Facebook 青少年广告案例显示“把青少年当成年人处理”是问题所在。COI 方面，经理的股份可能影响决策，即使提案本身合理也需披露并回避。建议：先问 “Should we build it?”；停止针对未成年人的此类投放，改用情境广告或排除高风险品类；向管理层书面提出 COI 并由无利益关系者决策；按 APP 3、5、7 检查收集与营销；记录 ACS public interest 与 professionalism 的理由。验证：广告品类审计、COI 登记与决策记录、家长与用户投诉指标。'],
    ],
    sourcesTitle: '内容依据与材料限制',
    sourcesNote: '交叉核对了本地字幕、PDF、阅读与课程图片；字幕有识别错误（如 Myki 讲座数字、Five Whys、ACS），以清晰上下文和阅读原文为准。Week09 的 1:48 音频与 Week11 的 How Algorithms Secretly Control Your Choices 音频没有转录，其独有内容未计入。Week11 材料没有定义 ethical dilemma 与 conflict of interest，相关定义综合自 Week10 材料与一般职业实践，并已标注。Building Strong Arguments 与课堂辩论安排只作背景，未用于生成辩论内容。法律案例与新闻为发表时情况，不代表现行法律或公司政策。全部练习与参考答案为自编，非 Moodle 官方题。',
  },
  en: {
    subtitle: 'Weeks 09–11 · Exam cram sheet',
    summary: 'Only the examinable definitions, lists and distinctions: IP and licences, open data and RCA, ethical principles and ACS, APP / ISM / AI principles, Rawls, profiling and re-identification, conflicts of interest. Memorise the middle column; use the last column to eliminate options.',
    lead: 'Possible ≠ legal ≠ permitted ≠ right. Scenarios: facts → affected people → ACS values / ethical principles → compare options → action and verification.',
    tags: ['Weeks 09–11', 'Cram sheet', '36 MCQs + 6 integrated questions', 'Original practice · not official'],
    headers: ['Topic', 'Memorise', 'Note / trap'],
    noteLabel: 'Trap',
    sections: [
      {
        id: 'ip', title: 'Week09 · Intellectual property: distinguish protected objects',
        rows: [
          ['Course’s four IP types', 'Copyright · Trade mark · Patent · Trade secret', 'Copyright protects expression; trade marks, source identity; patents, inventions; trade secrets, confidential information.'],
          ['Registration?', 'Copyright: automatic, no registration or © · Patent: application required · Trade secret: secrecy / NDA', '“No © means no copyright” is wrong.'],
          ['IP Australia’s four registered rights', 'Trade marks · Patents · Design rights · Plant breeder’s rights', 'Excludes copyright and trade secrets: a NOT-question trap.'],
          ['What copyright protects', 'Expression (code, text, images), not ideas or bare facts', 'Computer programs are literary works.'],
          ['Ownership', 'Work made in employment usually belongs to the employer unless a contract says otherwise', 'You cannot take a former employer’s code to a new job.'],
          ['Economic vs moral rights', 'Economic: copy, publish, communicate · Moral: attribution, against false attribution, integrity', 'Permission to use does not allow removing the author’s credit.'],
          ['Four myths', 'Online ≠ free to copy · Credit ≠ permission · No “change X% and it’s safe” rule · A screenshot is copying', ''],
        ],
        note: 'First check which “four types” list the question means.',
      },
      {
        id: 'licences', title: 'Fair dealing and licences',
        rows: [
          ['Five fair dealing purposes', 'Research or study · Criticism or review · Parody or satire · Reporting the news · Professional (legal) advice', 'Must still be fair; being a student is not automatically enough.'],
          ['Fairness factors', 'Purpose, nature of work, amount and significance, licence availability, market effect', 'No fixed percentage.'],
          ['Fair dealing vs fair use', 'Australia: listed purpose + fairness · US fair use is broader', 'Do not apply US rules.'],
          ['MIT', 'Use, modify, distribute, commercialise; keep copyright and permission notices', 'Permissive ≠ notice-free.'],
          ['GPL', 'Copyleft: distribution requires source and the same licence', 'Cannot casually ship inside closed products.'],
          ['CC elements', 'BY credit · SA share-alike · NC non-commercial · ND no derivatives', 'CC0 ≈ waives copyright, but not privacy or trade marks.'],
          ['No licence', 'Assume no permission', 'Check the licence before any GitHub “quick hack”.'],
        ],
        note: 'Credit addresses plagiarism; permission addresses infringement. Neither replaces the other.',
      },
      {
        id: 'data-rca', title: 'Open data, RCA and IT project failures',
        rows: [
          ['Four open data quality points', '1 Publishing quality matters (discoverable, accessible, documented, licensed) · 2 Problems differ · 3 Fixes need different evidence · 4 Quality depends on purpose', 'Valid format ≠ factually correct.'],
          ['Fitness for purpose', '“Good enough” depends on purpose, risk and resources', 'Odd sensor readings may be the evidence for failure analysis.'],
          ['Provenance', 'Record creator, time, source, access and changes', 'Data licence ≠ privacy compliance.'],
          ['Five RCA steps', 'Define the problem → Collect data → Identify possible causes → Identify root cause(s) → Implement / suggest solutions', 'RCA finds causes, not scapegoats.'],
          ['RCA tools', '5 Whys · Fishbone (people, methods, machines, materials, environment) · Pareto (80/20) · FMEA (severity, occurrence, detection) · Fault Tree · PROACT · Affinity', 'FMEA prevents; it does not prove a past cause.'],
          ['IT failure cases', 'Ateco: client skipped requirements analysis, claims dismissed · Durham: misleading representations · Westsub: performance needs left out of the contract · Unisys v RACV: failed under real load after acceptance', 'Write down requirements and targets; test under real load; the vendor is not automatically solely liable.'],
        ],
        note: 'Five Whys (causes) ≠ Week08’s Why / Who / What / When / How (communication planning).',
      },
      {
        id: 'ethics', title: 'Week10 · Ethical foundations',
        rows: [
          ['Morality vs ethics', 'Morality: a society’s rules on what one ought to do · Ethics: how right and wrong are judged and justified', ''],
          ['Trolley + lever', 'Technology can save five but puts a previously safe person at risk', 'Technology redistributes risk: look at who benefits and who is newly harmed.'],
          ['Ethics in / by / for designers', 'In = ends (goal) · By = means · For designers = motivation', 'A good goal does not justify the means.'],
          ['Four principles', 'Beneficence: who benefits · Non-maleficence: who is harmed · Autonomy: choice, privacy, dignity · Justice: fairness and rights (incl. property)', ''],
          ['Responsibility gap', 'Responsibility disappears when an autonomous AI errs', '“The system decided” is not an answer: ask who designed, validated, deployed and monitored it.'],
          ['Consequentialism vs deontology', 'Outcomes (utilitarianism is one form) vs duties, rules, rights', 'Good outcomes do not automatically permit violating rights.'],
          ['Should I build it?', 'Ask “should” before “can”', 'Week11 lecture theme: consider consequences first and minimise harm.'],
        ],
        note: 'Public interest ≠ majority benefit: deliberately harming one person violates rights, “a step too far”.',
      },
      {
        id: 'acs', title: 'Six ACS values and the decision framework',
        rows: [
          ['Six values', '1 Primacy of the Public Interest · 2 Enhancement of Quality of Life · 3 Honesty · 4 Competence · 5 Professional Development · 6 Professionalism', 'Public interest prevails when values conflict.'],
          ['Public interest', 'Public above personal, business and sectional interests', 'Affected people include non-clients, e.g. employees in HR records.'],
          ['Honesty / Competence', 'Honesty: do not mislead; disclose risks and limits · Competence: know your limits, follow standards, advise against unsuitable proposals', 'Do not build security you know is substandard.'],
          ['Five decision stages', 'Recognise an ethical issue → Get the facts → Evaluate alternative actions → Make a decision and test it → Act and reflect on the outcome', 'Stage two lists unknowns and consults stakeholders.'],
          ['Five lenses', 'Utilitarian · Rights · Justice · Common good · Virtue', 'Utilitarian = most good, least harm.'],
          ['Ethics Canvas', 'Blocks 1–8 explore impacts; block 9 picks the four key impacts and responses', ''],
        ],
        note: '“Comply or resign” is a false binary: explain risks, propose alternatives, document and escalate.',
      },
      {
        id: 'privacy', title: 'APPs, ISM, AI principles and FAIR / CARE',
        rows: [
          ['APP 1–5', '1 Open and transparent management · 2 Anonymity / pseudonymity · 3 Collection of solicited information · 4 Unsolicited information · 5 Notification of collection', ''],
          ['APP 6–9', '6 Use or disclosure · 7 Direct marketing · 8 Cross-border disclosure · 9 Government-related identifiers', 'Selling user data → 6, 7 (maybe 8).'],
          ['APP 10–13', '10 Quality · 11 Security (incl. destroy / de-identify) · 12 Access · 13 Correction', 'Encryption covers only part of APP 11.'],
          ['Four ISM activities', 'Govern · Protect · Detect · Respond', 'Security goal: CIA (confidentiality, integrity, availability).'],
          ['ISM maturity', 'Incomplete → Initial → Developing → Managing → Optimising', 'Optimising is a maturity level, not an activity.'],
          ['AI Ethics Principles (8)', 'Wellbeing · Human-centred values · Fairness · Privacy & security · Reliability & safety · Transparency & explainability · Contestability · Accountability', 'Transparency = explain; contestability = challenge and review; accountability = who fixes it.'],
          ['FAIR / CARE', 'FAIR: Findable, Accessible, Interoperable, Reusable · CARE: Collective benefit, Authority to control, Responsibility, Ethics', 'CARE adds Indigenous collective control and benefit.'],
        ],
        note: 'Publicly visible personal information is still covered by the APPs.',
      },
      {
        id: 'rawls', title: 'Rawls: the veil of ignorance',
        rows: [
          ['Veil of ignorance', 'Make rules without knowing your gender, age, class, ethnicity or ability', 'So people are rationally disinterested (unbiased).'],
          ['Equal liberty', 'Equal basic liberties for all (speech, movement, freedom from persecution)', 'No inequality allowed here.'],
          ['Fair equality of opportunity', 'Positions of advantage open to everyone', ''],
          ['Difference principle', 'Inequality only if it leaves the worst off better than strict equality', '≠ majority benefit (that is utilitarianism).'],
        ],
        note: 'IT use: “Would I accept this design if I were the least advantaged user?”',
      },
      {
        id: 'week11', title: 'Week11 · Data technologies: benefits and risks',
        rows: [
          ['Profiling definition', 'Combining multi-source data into a detailed file on individuals to assess or predict behaviour, or identify categories of people', ''],
          ['Overt vs covert collection', 'Overt: registration, profile updates, surveys, contests · Covert: cookies, tracking software, web bugs, beacons', 'A select-all favourite.'],
          ['Data = asset + liability', 'Large personal data holdings bring breach, reputation, fine and civil-liability risk', 'The reason for data minimisation.'],
          ['Location tracking', 'Benefits: navigation, emergency location, fleets · Risks: stalking, state control', 'The Australian Federal Court found Google misled users about location settings.'],
          ['Predictive algorithms', 'Predict behaviour from past data', 'Risks: wrong predictions; filter bubbles reinforce bias.'],
          ['Jigsaw identification', 'Combining information from two or more sources re-identifies “de-identified” data', ''],
          ['AI', 'Benefits: routine tasks, diagnostic support · Risks: no emotion or creativity, job loss, amplified privacy problems', ''],
        ],
        note: 'De-identified ≠ anonymous.',
      },
      {
        id: 'readings', title: 'Week11 readings: facts to remember',
        rows: [
          ['Myki (Pursuit)', '15M cards, only card IDs removed · 2 touch-ons identify yourself · ±5 s co-travellers · an MP via tweets', 'Fix: differential privacy; coarsening times fails.'],
          ['Contextual integrity (ChatGPT article)', 'Information should not be revealed outside the context it was produced in, even if public', 'Also: right to be forgotten, copyrighted data, prompt leakage.'],
          ['Creepy line (Is privacy dead)', 'The creepy line exists and moves, and there is more than one', 'Privacy is contextual and about power; consent lacks real choice.'],
          ['Interest proxies (The Markup)', 'Interests like “cancer awareness” or “oxygen” stand in for health categories in targeting', 'Bypasses “no health categories”; on-screen ads can reveal conditions.'],
          ['Teen ads (ABC)', 'Gambling, alcohol and dating ads approved; cigarettes rejected, e-cigarettes approved', 'Teen data treated like adult data.'],
          ['Attention economy (Guardian)', 'Variable rewards (slot machine) · pull-to-refresh · red notifications', '“privileges our impulses over our intentions”; the like button’s unintended effects.'],
          ['Customer profiling', 'Separate anonymity from privacy · internal use is more acceptable than selling', '“It’s practices, not policies, that count.”'],
          ['National ID matching', 'Home Affairs tendered for national facial recognition built on licence photos', 'Lacked legislative oversight and transparency.'],
        ],
        note: 'In answers, cite mechanisms (proxies, jigsaw identification, contextual integrity) rather than news details.',
      },
      {
        id: 'coi', title: 'Ethical dilemma vs conflict of interest',
        rows: [
          ['Ethical dilemma', 'A choice between conflicting legitimate values or duties (two goods or two bads)', 'Compare options with the framework and explain the tradeoff.'],
          ['Conflict of interest', 'A personal interest or relationship that could influence, or appear to influence, professional judgement and duties', 'Respond: disclose → recuse → record under policy.'],
          ['One-line difference', 'Dilemma = value vs value · COI = self-interest vs duty', 'A COI is not misconduct in itself; failing to disclose or manage it is.'],
          ['Typical COIs (10 walkthrough cases)', 'Financial: supplier shares, selling information, paid side work for the employer’s customer, private consulting · Relationships: dating a supervisor or subordinate, hiring an unqualified relative, shielding a friend, hiding a relation to a candidate', 'Posting company weaknesses or leaking plans in interviews also breach confidentiality.'],
          ['Relevant ACS values', 'Public interest (raise conflicts) · Honesty · Professionalism', ''],
        ],
        note: 'Week11 materials give no verbatim definitions; these synthesise Week10 materials and general professional practice.',
      },
      {
        id: 'scenarios', title: 'Class scenarios: quick answers',
        rows: [
          ['Blooble → Beta job move', 'Cannot take code or confidential information; only general skills go with you', 'Ownership, trade secret, honesty.'],
          ['Opening user posts (UGC)', 'Copyright, defamation, privacy risks → terms of use, moderation, takedown', 'The company cannot say “users posted it, not our problem”.'],
          ['Rushed GitHub / ChatGPT code', 'Check licences (MIT notices, GPL copyleft), review AI code, never paste confidential code', 'Deadlines do not change licence duties.'],
          ['Harvesting and selling user data', 'APP 3, 5, 6, 7, 8, 11', 'Improve services first, sell later = secondary use.'],
          ['HR data into free ChatGPT', 'Sensitive data leakage · APP 6 / 8 / 11 · breaches contextual integrity', 'Paid tiers still need contract checks; in-house models still need minimisation and access control.'],
          ['Cutting HR system security (Pete)', 'Explain and document risks → propose other savings → escalate if needed', 'Employees are stakeholders too.'],
          ['Legacy codes distort disability data', 'Pick public interest, quality of life, honesty; flag non-comparability, map or sample-correct, disclose to policy users', 'Use the Ethics Canvas to find affected groups.'],
        ],
        note: 'Ask each time: who owns it, what licence or contract, what personal data, who bears the risk?',
      },
      {
        id: 'traps', title: 'Easily confused pairs',
        rows: [
          ['De-identified vs anonymous', 'Removing identifiers ≠ impossible to re-identify', 'e.g. Myki.'],
          ['Anonymity vs privacy', 'Not knowing who you are vs controlling who knows what about you', ''],
          ['Legal vs ethical vs possible', 'Three different questions', 'Possible and legal does not mean right.'],
          ['Transparency vs contestability vs accountability', 'Explain vs challenge and review vs who fixes it', ''],
          ['RCA vs ethical judgement', 'RCA explains causes; ethical frameworks decide what to do', 'A budget overrun explains pressure but does not justify weaker security.'],
          ['ISM activities vs maturity', 'Govern / Protect / Detect / Respond vs Incomplete … Optimising', ''],
        ],
        note: 'For NOT questions, circle the negative and confirm which list is meant.',
      },
      {
        id: 'method', title: 'Scenario answer template',
        rows: [
          ['Marking weights', 'Issues 30% · Concepts 30% · Judgement 40%', 'Reasoning and judgement weigh most.'],
          ['1 Position', 'Give a conditional recommendation up front', ''],
          ['2 Issues + facts', 'Rank legal / ethical issues and cite scenario facts', ''],
          ['3 Affected people', 'Include non-users, vulnerable groups and the public', ''],
          ['4 Compare options', 'At least two feasible options, with ACS values / principles explaining the tradeoff', 'Avoid “comply or resign”.'],
          ['5 Action + verification', 'Owner, steps, evidence (audits, re-identification tests, feedback)', '“Strengthen privacy” is too vague.'],
        ],
        note: 'I recommend … because … . Although … , it risks … for … . Applying ACS … , the team should … . Success would be shown by … .',
      },
    ],
    practiceTitles: ['Week09 · 12 MCQs (including select-all)', 'Week10 · 12 MCQs (including select-all)', 'Week11 · 12 MCQs (including select-all)', 'Integrated and critical questions · 6 worked examples'],
    practiceIntro: 'Original practice in the Chapter01–03 official styles; not Moodle questions. Answer first, then expand.',
    quiz09: [
      ['Which is NOT one of the four rights IP Australia registers?\nA. Trade marks\nB. Patents\nC. Copyright\nD. Plant breeder’s rights', 'Answer: C. Australian copyright arises automatically without registration. IP Australia registers trade marks, patents, design rights and plant breeder’s rights; the course compares copyright, trade marks, trade secrets and patents.'],
      ['A company never publishes its recommendation algorithm’s parameters and staff sign NDAs. Which protection fits best?\nA. Trade mark\nB. Trade secret\nC. Copyright registration\nD. Public domain', 'Answer: B. Confidential information is protected through secrecy obligations. Australian copyright needs no registration, and trade marks protect source identification, not algorithms.'],
      ['A developer finds GitHub code with no © notice. Can it go straight into a commercial product?\nA. Yes, no © means no copyright\nB. Yes, if the source is credited\nC. Not by default; check the licence and its conditions first\nD. Yes, if more than 50% is changed', 'Answer: C. No © does not mean no copyright, credit is not permission, and there is no universal modification percentage. Without a licence, assume no permission.'],
      ['Which is NOT a fair dealing purpose listed in the set reading?\nA. Research or study\nB. Criticism or review\nC. Commercial advertising\nD. Parody or satire', 'Answer: C. The reading lists research/study, criticism/review, parody/satire, reporting the news and professional advice. Advertising is not a listed purpose.'],
      ['A student posts a scanned textbook on a public portfolio site “for study”. Best judgement?\nA. Student status makes it lawful\nB. Study purpose still needs a fairness assessment; publishing a whole textbook is unlikely to qualify\nC. Credit is enough\nD. Scanning is not copying', 'Answer: B. Purpose is only the first step; amount, significance, market effect and licence availability also count. Public distribution of a whole book far exceeds study needs.'],
      ['What is the key condition of the MIT licence?\nA. No commercial use\nB. Distributing modifications requires releasing all source\nC. Keep the copyright and permission notices in copies or substantial portions\nD. No modification', 'Answer: C. MIT is permissive but not notice-free. B describes GPL copyleft; A and D resemble CC NC and ND restrictions.'],
      ['Select all that apply · You want to recolour a CC BY-NC-ND image for a paid company ad. Which terms block this?\nA. BY\nB. NC\nC. ND\nD. None; CC means free', 'Answer: B, C. NC restricts commercial use and ND restricts sharing adaptations. BY requires credit but does not itself block the use. D is a common misconception.'],
      ['Every email in a dataset passes format validation, yet many bounce. What does this show?\nA. Schema checks proved the data correct\nB. Valid format ≠ factual correctness; verify against authoritative sources for the purpose\nC. Delete all the data\nD. Quality is independent of purpose', 'Answer: B. Different problems need different evidence: schema checks cover structure; facts and currency need separate checks.'],
      ['Which statement best matches “quality depends on purpose”?\nA. All data needs maximum precision\nB. Whether data is good enough depends on purpose, risk and resources\nC. Broken sensor readings must always be deleted\nD. Publishing is enough', 'Answer: B. A rough map and a boundary dispute need different precision; anomalous readings may be the very evidence for failure research.'],
      ['What is the correct order of the five RCA steps?\nA. Implement → define → collect → find causes\nB. Define the problem → collect data → identify possible causes → identify root cause(s) → implement / suggest solutions\nC. Find who is to blame → punish → close\nD. Collect data → implement → define', 'Answer: B. Define and gather evidence before testing candidates. C turns RCA into blame, exactly what the lecture warns against.'],
      ['Select all that apply · Which are analysis tools in the RCA lecture or reading?\nA. Five Whys\nB. Fishbone (Ishikawa)\nC. Pareto chart\nD. Elevator pitch\nE. Fault Tree Analysis', 'Answer: A, B, C, E. The elevator pitch is Week08 communication content; useful is not the same as belonging to the category asked.'],
      ['In Unisys v RACV, the system failed in operation after passing acceptance tests. Most direct lesson?\nA. Acceptance should test explicit targets under realistic load\nB. Passing acceptance removes all vendor responsibility\nC. Written requirements are unnecessary\nD. The client need not participate', 'Answer: A. The article records that the vendor’s appeal failed; neither acceptance nor exclusions automatically remove all responsibility.'],
    ],
    quiz10: [
      ['Under the supplied 2014 ACS Code of Professional Conduct, which value takes precedence when values conflict?\nA. Competence\nB. Honesty\nC. The Primacy of the Public Interest\nD. Professionalism', 'Answer: C. Public interest comes before personal, business and sectional interests, though its meaning still needs judgement.'],
      ['Which is NOT one of the six ACS values?\nA. Enhancement of Quality of Life\nB. Professional Development\nC. Profit Maximisation\nD. Honesty', 'Answer: C. The six are public interest, quality of life, honesty, competence, professional development and professionalism.'],
      ['What does Ethics by Design mainly examine?\nA. Whether the goal is worth pursuing\nB. The means by which the system achieves its goal\nC. The designer’s motivation\nD. Project profit', 'Answer: B. In = ends; By = means; For designers = motivations.'],
      ['“Who or what might be harmed?” matches which principle?\nA. Beneficence\nB. Non-maleficence\nC. Autonomy\nD. Justice', 'Answer: B. Beneficence asks who benefits; autonomy concerns choice, privacy and dignity; justice concerns fairness and rights.'],
      ['What is the second stage of the Santa Clara decision framework?\nA. Recognise an ethical issue\nB. Get the facts\nC. Act and reflect on the outcome\nD. Make a decision and test it', 'Answer: B. List knowns and unknowns, consult stakeholders and widen the options.'],
      ['“Which option produces the most good and least harm?” belongs to which lens?\nA. Rights\nB. Virtue\nC. Utilitarian\nD. Common good', 'Answer: C. Rights focuses on entitlements, virtue on character, common good on the whole community.'],
      ['After a budget overrun, a client asks Pete to weaken security on an HR system holding salary and medical records. Best response?\nA. The client pays, so comply\nB. Resign immediately\nC. Explain and document the risks to employees, propose other savings and escalate if needed\nD. Quietly keep the original standard without telling the client', 'Answer: C. Employees are stakeholders; public interest, competence and honesty all support C. D breaches honesty; A and B are a false binary.'],
      ['APP 11 mainly concerns?\nA. Direct marketing\nB. Security of personal information, plus destruction or de-identification in specified cases\nC. Cross-border disclosure\nD. Anonymity and pseudonymity', 'Answer: B. A is APP 7, C is APP 8, D is APP 2.'],
      ['Select all that apply · What are the four ISM activities?\nA. Govern\nB. Protect\nC. Detect\nD. Respond\nE. Optimise', 'Answer: A, B, C, D. Optimising is one of the five maturity levels, not an activity; keep the two lists apart.'],
      ['Which AI Ethics Principle provides timely, accessible ways to challenge AI outcomes with significant impact?\nA. Transparency and explainability\nB. Contestability\nC. Accountability\nD. Fairness', 'Answer: B. Transparency explains; accountability names who is responsible. They complement rather than replace one another.'],
      ['In CARE, what does A stand for?\nA. Accessible\nB. Authority to Control\nC. Accuracy\nD. Anonymity', 'Answer: B. Accessible belongs to FAIR. CARE adds collective benefit, control, responsibility and ethics.'],
      ['When does Rawls’s difference principle allow inequality?\nA. When most people benefit\nB. When it leaves the worst off better than strict equality and positions are open to all\nC. When the richest contribute most\nD. When basic liberties are unequal', 'Answer: B. Basic liberties must be equal (equal liberty). A is utilitarian aggregation, not Rawls’s condition.'],
    ],
    quiz11: [
      ['Which best matches the course definition of profiling?\nA. Collecting an email address once\nB. Combining data from multiple sources into a detailed file on individuals to assess or predict behaviour or identify categories of people\nC. Surveys collected only with consent\nD. Encrypting a database', 'Answer: B. Key words: multiple sources, detailed file, assess / predict, categorise.'],
      ['Select all that apply · Which are covert data collection?\nA. Registration forms\nB. Cookies\nC. Web bugs / beacons\nD. Contest entry forms\nE. Tracking software inferring interests', 'Answer: B, C, E. Registration, surveys and contests are overt. Covert collection leaves users unaware of what is gathered.'],
      ['The lecture describes large personal data holdings as?\nA. Purely an asset\nB. An asset and also a liability\nC. Unrelated to security\nD. A risk only for governments', 'Answer: B. Breach risk, reputational damage, fines and civil liability make data a liability too, which supports data minimisation.'],
      ['Myki researchers found their own trips from two known touch-ons. Re-identifying by combining information from several sources is called?\nA. Differential privacy\nB. Jigsaw (re-)identification\nC. Pseudonymity\nD. Encryption', 'Answer: B. Removing card IDs did not break the link between trips on one card, so outside knowledge could complete the picture.'],
      ['What remedy does the Myki reading recommend?\nA. Remove card IDs only\nB. Coarsen times to five minutes\nC. Differential privacy\nD. Release to more teams', 'Answer: C. Even at five-minute granularity, five events made over 50% of cards unique; with location only, two sufficed.'],
      ['Facebook has no explicit health categories, yet pharma targets “cancer awareness” and “oxygen” interests. Core problem?\nA. Interests act as proxies for sensitive health conditions, bypassing privacy protections\nB. Ad text is too long\nC. Pharma should never advertise\nD. Interest categories are always accurate', 'Answer: A. Proxies empty the “no health categories” promise of meaning and may reveal conditions to others on screen.'],
      ['In Reset Australia’s test, which teen-targeted ad type was rejected?\nA. Gambling\nB. Alcohol\nC. Cigarettes\nD. Dating', 'Answer: C. Cigarette ads were rejected but e-cigarette versions were approved. The test ads were never paid for or run, an ethical choice by the researchers.'],
      ['In the ChatGPT privacy article, contextual integrity means?\nA. Data must be encrypted\nB. Personal information should not be revealed outside the context in which it was produced, even if public\nC. Model outputs must be correct\nD. Users can delete accounts', 'Answer: B. “Publicly visible” does not mean usable in any context, consistent with the APP approach to public information.'],
      ['On Schmidt’s “creepy line”, what does Is privacy dead conclude?\nA. There is one fixed creepy line\nB. The line exists and moves; there are hundreds, to be drawn by communities with companies justifying themselves first\nC. Privacy is dead\nD. Consent forms solve everything', 'Answer: B. The article also argues consent lacks real choice, cannot cover public spaces, and others’ data can be used to infer yours.'],
      ['In Social media addiction, what is pull-to-refresh compared to?\nA. An elevator alarm\nB. A slot machine (variable rewards)\nC. A library catalogue\nD. Email archiving', 'Answer: B. Variable rewards create craving; the attention economy “privileges our impulses over our intentions”.'],
      ['Which question does The Ethics of IT systems say to ask first?\nA. Can I build it?\nB. Should I build it?\nC. How fast can I ship?\nD. How much data can I collect?', 'Answer: B. Then ask about likely consequences and how to build it to minimise negative impacts.'],
      ['Select all that apply · Which are, or may be, conflicts of interest?\nA. Undisclosed shares in a supplier to your employer\nB. Not disclosing that a job candidate is a relative\nC. Not investigating a coworker’s wrongdoing because they are a friend\nD. Discussing technical options in a team meeting per the agenda\nE. Taking consulting fees to advise another company for personal gain', 'Answer: A, B, C, E. Private financial interests or relationships may sway professional judgement; D is normal work. Respond by disclosing, recusing and recording under policy.'],
    ],
    critical: [
      ['Scenario 1 · You are building Blooble’s database and website. Competitor Beta offers you a better role and hints it values “the code you have written”. You plan to reuse the modules you wrote at Blooble. Critically evaluate and propose suitable action.', 'Worked answer: Do not take or reuse the code. Work created in the course of employment usually belongs to the employer unless an agreement says otherwise, so check the employment contract, IP and confidentiality clauses; internal methods or data structures may also be trade secrets. Teammates’ contributions are certainly not yours. Reuse would breach ACS honesty and professionalism and could expose Beta to infringement. Instead, clarify before accepting what you may not bring; return materials when leaving; at Beta use only general skills and public knowledge, independently redesigning and documenting where needed; refuse and explain if Beta asks for Blooble code. Verification: an exit checklist and a review showing no Blooble code entered Beta’s repository.'],
      ['Scenario 2 · Your manager wants an internal Q&A chatbot trained on staff chats and HR records. To save money you plan to upload the data to free ChatGPT. Critically evaluate, comparing a paid tier, an in-house model, and adding scraped UGC.', 'Worked answer: Stop the free-tier plan. HR and chat records contain sensitive personal and confidential information; uploading them engages APP 6 (use beyond the original purpose), APP 8 (possibly overseas) and APP 11 (security), and breaches contextual integrity: staff provided data for employment, not model training. Free-tier retention and training terms may be outside company control. Paid or enterprise tiers need contract checks on retention, training use and location rather than assumed safety. An in-house model reduces leakage but still needs purpose limits, minimisation (exclude medical and salary data), access control and notice to staff. Scraped UGC adds copyright and user-privacy issues. Recommend a privacy impact assessment, starting with non-personal policy documents, human review and a named owner. Verification: data inventory, PIA, access logs and a staff feedback channel.'],
      ['Scenario 3 · A government coding convention reuses codes that meant different things in legacy systems, so disability-category time series over- and under-report, and these figures inform policy for ethnic communities. Management will not fix legacy systems. Using the Ethics Canvas and the three most relevant ACS values, explain how you would handle it.', 'Worked answer: This is not just a technical inconsistency; wrong numbers can misallocate resources. Canvas: affected individuals (people with disabilities), groups (ethnic communities, policy makers), product failure (misleading series) and problematic resource use. Three values: public interest (policy affects vulnerable groups), quality of life (access to services), honesty (non-comparable data must not be presented as comparable). Full remediation is costly; doing nothing keeps misleading. Recommend a middle path: build an old-to-new code mapping and sample-correct key categories; flag series breaks in every report; brief policy users in writing on limitations; consult affected communities. Verification: error rates from sample checks, disclosures in reports, and policy teams confirming understanding.'],
      ['Scenario 4 · A consultancy digitises 1940–1965 archives, including 400 surveys from 1943 of women who gave children up for adoption after birth out of wedlock (names, addresses, religion, family members), which promised confidentiality. Developer Lavinda plans to link them to current government personal databases for longitudinal analysis of descendants. Evaluate and recommend.', 'Worked answer: The plan should not proceed as designed. Stakeholders include the women, their descendants and families, the archivist, researchers, government and the public. The forms promised confidentiality; linking to current databases breaks the original context (contextual integrity) and could expose adoption histories through jigsaw identification, causing serious harm. It is a dilemma between historical research value and privacy and dignity. Recommend: no name-searchable index; the archivist retains originals under restricted access; researchers use de-identified or aggregate data in controlled settings after ethics review; no linkage to current personal data without legal authority and ethics approval; consider differential privacy. Unknowns to resolve: applicable law, whether participants are alive, and whether consent is possible. ACS public interest, honesty and competence support this approach.'],
      ['Scenario 5 · Explicit subparts: A transport agency releases “de-identified” tap-on data for a datathon, removing only card IDs and keeping times to the second and stops.\n1. Explain why “de-identified” is insufficient here.\n2. Analyse possible harms and who is affected.\n3. Recommend two improvements or evaluations and the evidence each provides; at least one must directly address re-identification.', 'Worked answer: 1. Removing card IDs keeps each card’s trips linked; two known touch-ons or social media posts enable jigsaw identification (Myki: two points, ±5-second co-travellers, a state MP). 2. Affected people include ordinary passengers, child-card holders, MPs and police; harms include exposing home and work locations, stalking by ex-partners and revealing family links. The dataset is a liability as well as an asset. 3. (a) Pre-release re-identification testing, where a red team tries to match with public information; evidence is the match rate. (b) Differential privacy or aggregate-only release; evidence is the privacy budget and utility assessment. Tiered access with use agreements can add control. Coarsening alone fails: the reading shows high uniqueness even at five minutes.'],
      ['Scenario 6 · A gaming app for 13–17-year-olds: the marketing manager proposes interest-based profiling to push energy drinks and loot-box items, saying “we collect nothing sensitive beyond age”. You then learn the manager holds shares in one advertiser. Critically evaluate.', 'Worked answer: There are two issues: profiling harm and a conflict of interest. Interests can proxy sensitive traits, and variable-reward loot boxes exploit adolescents’ impulses, breaching autonomy and non-maleficence; the Facebook teen-ads case shows the problem of treating teens like adults. The manager’s shareholding may sway the decision; even if the proposal had merit, it must be disclosed and the manager should step back. Recommend asking “Should we build it?”; stop such targeting of minors in favour of contextual ads or excluding high-risk categories; raise the COI in writing so an unconflicted person decides; check collection and marketing against APP 3, 5 and 7; record reasons under ACS public interest and professionalism. Verification: ad-category audits, a COI register and decision record, and parent and user complaint metrics.'],
    ],
    sourcesTitle: 'Content basis and material limits',
    sourcesNote: 'Local captions, PDFs, readings and course images were cross-checked; captions contain recognition errors (e.g. the lecture’s Myki figures, Five Whys, ACS), so clear context and the readings take precedence. The Week09 1:48 audio and Week11 “How Algorithms Secretly Control Your Choices” audio have no transcript; their unique content is not counted. Week11 materials do not define ethical dilemma or conflict of interest; the definitions here synthesise Week10 materials and general professional practice and are labelled as such. Building Strong Arguments and the class debate arrangements are background only and were not used to produce debate content. Legal cases and news reflect their publication dates, not current law or company policy. All practice and worked answers are original, not Moodle questions.',
  },
} as const

export default function Chapter05({ locale }: { locale: Locale }) {
  const c = copy[locale]
  const practice = [
    { id: 'practice09', title: c.practiceTitles[0], items: c.quiz09 },
    { id: 'practice10', title: c.practiceTitles[1], items: c.quiz10 },
    { id: 'practice11', title: c.practiceTitles[2], items: c.quiz11 },
    { id: 'critical', title: c.practiceTitles[3], items: c.critical },
  ]
  const toc = [
    ...c.sections.map(({ id, title }) => ({ id, label: title })),
    ...practice.map(({ id, title }) => ({ id, label: title })),
    { id: 'sources', label: c.sourcesTitle },
  ]

  return (
    <ChapterLayout chapterId="05" locale={locale} eyebrow="Chapter 05 · Weeks 09–11" title="The Law, Ethics & Privacy" subtitle={c.subtitle} summary={c.summary} updated="21 Oct 2026" tags={[...c.tags]} toc={toc}>
      {c.sections.map((section, index) => (
        <ContentSection key={section.id} id={section.id} index={String(index + 1).padStart(2, '0')} title={section.title}>
          {index === 0 && <div className="mb-5"><LeadCard label={locale === 'zh' ? '答题主线' : 'Answer spine'}>{c.lead}</LeadCard></div>}
          <ResponsiveTable headers={[...c.headers]} rows={section.rows.map(row => [...row])} />
          <Callout label={c.noteLabel}>{section.note}</Callout>
        </ContentSection>
      ))}
      {practice.map((group, index) => (
        <ContentSection key={group.id} id={group.id} index={String(c.sections.length + index + 1).padStart(2, '0')} title={group.title} intro={c.practiceIntro}>
          <QuizAccordion items={group.items.map(([question, answer]) => ({ question, answer }))} />
        </ContentSection>
      ))}
      <ContentSection id="sources" index={String(c.sections.length + practice.length + 1).padStart(2, '0')} title={c.sourcesTitle}>
        <SourceList items={sources} note={c.sourcesNote} />
      </ContentSection>
    </ChapterLayout>
  )
}
