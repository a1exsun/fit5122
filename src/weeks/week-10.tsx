import { ExternalLink } from 'lucide-react'
import { QuizAccordion } from '@/components/quiz-accordion'
import { Callout, ContentSection, InfoCard, LeadCard, ResponsiveTable, WeekLayout } from '@/components/week-layout'
import type { Locale } from '@/i18n'

const sources = [
  ['Introduction to Ethics for IT Professionals', 'https://learning.monash.edu/mod/resource/view.php?id=6110374', 'foundations', 'PDF · pp. 1–2'],
  ['Introduction To Ethics Video', 'https://learning.monash.edu/mod/resource/view.php?id=6110375', 'design', 'Video · 15:30; 11:14–14:19; cases 14:29–15:29'],
  ['Professionals and Ethics', 'https://learning.monash.edu/mod/resource/view.php?id=6110380', 'responsibility', 'PDF · pp. 1–4'],
  ['A Framework for Ethical Decision Making', 'https://learning.monash.edu/mod/resource/view.php?id=6110382', 'decision', 'PDF · pp. 1–2 · May 2009 course version'],
  ['ACS Code of Professional Conduct', 'https://learning.monash.edu/mod/resource/view.php?id=6110384', 'acs', 'PDF · pp. 4–8 · V2.1, April 2014'],
  ['Ethics Canvas', 'https://learning.monash.edu/mod/resource/view.php?id=6110385', 'canvas', 'PDF · p. 1 · v1.8, 2017'],
  ['Australian Privacy Principles — a summary for APP entities', 'https://learning.monash.edu/mod/resource/view.php?id=6110386', 'privacy', 'PDF · p. 1 · from 12 March 2014'],
  ['ISM — Cyber Security Principles', 'https://learning.monash.edu/mod/resource/view.php?id=6110387', 'security', 'PDF · pp. 1–2 · 2 March 2023'],
  ['Ethics in IT', 'https://learning.monash.edu/course/view.php?id=46900&section=45', 'foundations', 'Course infographic · visual review'],
  ['Ethical frameworks for the digital locksmith', 'https://learning.monash.edu/course/view.php?id=46900&section=45', 'risks', 'Audio · 6:09 · local automatic transcription'],
  ['Chapter 5 introduction', 'https://monash.au.panopto.com/Panopto/Pages/Viewer.aspx?id=436b29d1-4e25-4ae4-a59a-aff20061fdff', 'overview', 'Video · 2:11'],
  ['Ethics And IT', 'https://monash.au.panopto.com/Panopto/Pages/Viewer.aspx?id=e6333eb3-855c-49ba-8ddf-aff900730d88', 'responsibility', 'Video · 9:28; responsibility 05:41–09:14'],
  ['Root Cause analysis', 'https://monash.au.panopto.com/Panopto/Pages/Viewer.aspx?id=cea8f692-a7bc-4f1a-a56c-aff2006afc72', 'decision', 'Video · 4:52; tools 02:18–03:04'],
  ['Ethical strategies and Professional societies', 'https://monash.au.panopto.com/Panopto/Pages/Viewer.aspx?id=70929fdc-5526-4802-8b24-aff9007648e2', 'approaches', 'Video · 12:25; theories 02:25–05:09; case 09:29–11:50'],
  ['5 examples of ethical issues in software development', 'https://www.techtarget.com/it-infrastructure/tip/8-examples-of-ethical-issues-in-software-development', 'risks', 'Reading · current article has 8 examples · 1 August 2025'],
  ['Ethical issues for IT security professionals', 'https://www.computerworld.com/article/1692552/ethical-issues-for-it-security-professionals.html', 'risks', 'Reading · privacy, privilege and conflicts of interest'],
  ['Framework for Governance of Indigenous Data', 'https://www.niaa.gov.au/sites/default/files/documents/2024-05/framework-governance-indigenous-data.pdf', 'indigenous', 'PDF · pp. 6–22, 27–34 · May 2024'],
  ['Ethical Principles for AI Capability', 'https://www.industry.gov.au/publications/australias-ai-ethics-principles', 'ai', 'Reading · Australia’s AI Ethics Principles · 8 principles'],
] as const

const copy = {
  zh: {
    subtitle: '把技术能力转化为对公众、受影响者与专业实践的责任。',
    summary: 'Chapter 5 · The Law, Ethics, and Privacy。结合 Week 10 Own-time 的伦理阅读、五段视频、信息图与音频，梳理如何识别风险、论证选择并落实可追责的行动。',
    tags: ['专业责任', '伦理决策', 'ACS 六项价值', '隐私与安全', 'Indigenous Data', 'AI 伦理'],
    overview: '从“能做什么”走向“应该怎样做”',
    lead: '明确目的、手段与动机 → 找到受影响者与事实 → 用伦理视角和专业准则比较方案 → 落实责任与保护措施 → 检查结果并改进。技术可行、商业有利或符合法律，都不能单独证明一个选择在伦理上充分合理。',
    sections: [
      { id: 'foundations', title: '伦理基础：技术改变谁会受益、谁会受害', intro: 'Introduction to Ethics PDF · pp. 1–2；Ethics And IT · 00:38–05:29；Introduction To Ethics Video · 00:18–08:59。', headers: ['概念', '如何理解与应用'], rows: [
        ['Core values / Morality / Ethics', '核心价值是支撑判断的基本信念；道德是社会关于应该和不应该做什么的行为规范；伦理研究这些对错判断如何形成、是否合理。规范可能随社会与时间变化。'],
        ['技术并非只有预期效果', '电车案例里，转轨装置能救原先面临危险的五人，也让原先安全的一人承担风险。分析新技术时，既找预期受益者，也找新暴露于风险的群体。'],
        ['伦理困境', '可能是两个好处之间、两个坏结果之间，或不同群体利益之间的冲突。善意与智能并不保证意见一致，需要说明事实、价值与取舍。'],
        ['公共利益需要解释', '不能把 public interest 简化为“多数人获益即可”。电车讨论展示总收益与个人权利之间的张力，准则仍需要结合场景进行判断。'],
        ['质量以外的责任', '系统运行正确也可能侵犯隐私、鼓励成瘾或放大歧视。软件用途与社会影响同样属于专业责任。'],
      ], note: 'Ethics in IT 信息图可用于快速回顾，但只画了部分 ACS 价值，并把决策流程压缩为三步；完整六项价值与五阶段流程见下文。' },
      { id: 'design', title: '目的、手段、动机：三个层面都要审视', intro: 'Introduction To Ethics Video · 11:14–14:19；术语已对照 11:57 的幻灯片核对。', headers: ['层面', '关键问题'], rows: [
        ['Ethics in Design · 目的 / Ends', '系统要达成什么？这个目标是否值得追求？预期及非预期的影响是什么？'],
        ['Ethics by Design · 手段 / Means', '系统实际如何达成目标？即使目标有益，使用的监控、数据收集或自动决策方式是否尊重受影响者？'],
        ['Ethics for Designers · 动机 / Motivations', '为什么设计者要用这种方式达成这个目标？是改善服务，还是为了自身利益掩盖风险？'],
        ['Beneficence · 行善', '谁或什么会受益？好处是否真实、对受影响者是否有意义？'],
        ['Non-maleficence · 不伤害', '谁可能受到伤害？能否减少暴露、避免可预见的不良后果？'],
        ['Autonomy · 自主', '是否尊重个人及群体的选择、隐私与尊严？是否存在未授权干预或操纵？'],
        ['Justice · 公正', '安排是否公平、无偏？是否侵犯他人的权利，包括财产权？'],
      ], note: '自拟应用：改善校园服务是目的；分析可识别学生的行为是手段；提高服务质量或追求监控收益是动机。“为了帮助学生”不能跳过对数据使用方式的审查。' },
      { id: 'responsibility', title: '专业责任：系统背后要有可识别的负责人', intro: 'Professionals and Ethics · pp. 1–4；Ethics And IT · 05:41–09:14；Ethical strategies · 06:29–08:34。', headers: ['问题', '复习要点'], rows: [
        ['什么使职业具有专业性？', '材料列出专业教育、认证、技能发展、许可、持续学习、伦理准则与专业组织等特征。课程讨论 IT 缺少统一强制门槛，却具有影响公众的重大能力；这并不削弱责任。'],
        ['Locus of responsibility', '责任落点可以关注个人，也可以关注组织系统。这里的“系统”包括流程、政策、训练与管理，不能只看程序代码。'],
        ['Moral agent / Responsibility gap', '课程把能判断对错并承担责任的人视为道德行动者。自动诊断或自主 AI 出错后，应查清开发、部署、管理、监督各环节的责任，不能把责任终点放在“电脑决定的”。'],
        ['责任可能共享', '多人参与不等于无人负责。明确谁决策、谁审查、谁有权纠正，依据其角色、信息与控制能力判断；具体法律责任不能仅凭课堂案例确定。'],
        ['专业组织的作用', 'ACS、ACM、IEEE、BCS 等提供标准、专业学习、社区、伦理指引与行业代表。课程里的组织清单是阅读背景，不代表当前注册或执业要求。'],
        ['行为准则的作用与限度', '帮助表达共同标准、评估行为和寻求支持；课程 ACS 文件说明违规可能涉及纪律处理或被用于专业疏忽评估。准则不是免于判断的机械答案。'],
      ], note: '专业责任也涵盖不作为、对监督人员的责任、真实披露能力边界，以及持续提升自己和同事的能力。' },
      { id: 'acs', title: 'ACS Code of Professional Conduct：六项价值', intro: '课程文件为 April 2014 · V2.1 · pp. 4–8。视频同时提到 2023 Code of Professional Ethics，课程阅读提示要求重点学习这里的 Code of Professional Conduct。', headers: ['价值', '落到具体行为'], rows: [
        ['1 · Primacy of the Public Interest', '公众利益优先于个人、商业或局部利益；识别受影响者，提出利益冲突，保护健康、安全、环境、隐私、保密与知识产权。六项价值冲突时，本项优先。'],
        ['2 · Enhancement of Quality of Life', '保护健康与安全，促进平等获得 ICT 益处，特别考虑弱势群体和残障者，以及受影响者的感受、自主控制和满意度。'],
        ['3 · Honesty', '不误导产品适用性，不接受贿赂；给出实际估算，说明知识或经验限制，区分专业与个人意见，并认可他人的贡献。'],
        ['4 · Competence', '勤勉工作，认清能力边界并寻求适当专家；遵循相关标准与法律，告知不利于利益相关者的方案，接受对自己工作的责任。'],
        ['5 · Professional Development', '持续更新知识、技能与标准认识；支持员工、同事和学生学习，把经验传递给他人。'],
        ['6 · Professionalism', '尊重与维护专业诚信，反对歧视和骚扰，不要求他人违反准则；通过冷静、知情的行动处理不当行为，并促进公众理解 ICT。'],
      ], note: '答案例时写出“价值 → 事实 → 行动”：例如，公共利益要求考虑 HR 数据中的员工，而不只考虑付钱的客户；Honesty 要求如实解释保护措施的限制；Competence 要求提出适当保护或寻求专家。' },
      { id: 'approaches', title: '伦理视角：说明为什么选择这个方案', intro: 'Introduction to Ethics PDF · p. 2；A Framework for Ethical Decision Making · p. 1；Ethical strategies · 02:25–06:26。', headers: ['视角', '判断依据 / 关键问题'], rows: [
        ['Consequentialism · 后果论', '依据行动的结果评估好坏。功利主义是其中一种视角，问哪个方案带来最多益处、最少伤害；要考虑所有受影响者，而不只计算收入。'],
        ['Deontology · 义务论', '依据规则、义务与权利判断行动。课程用“不能因好结果就任意违反规则”的简化例子对照后果论。'],
        ['Utilitarian · 功利', '哪个方案产生最多好处并减少伤害？谁承担代价，后果的证据与不确定性是什么？'],
        ['Rights · 权利', '哪个方案最好地尊重各方的权利，包括隐私与自主？'],
        ['Justice · 公正', '是否平等或按合理比例对待不同的人？差别对待是否有正当理由？'],
        ['Common good · 共同善', '是否服务整个共同体，而不是只惠及部分成员？'],
        ['Virtue · 德性', '这个选择是否符合我希望成为的专业人士的品格？'],
      ], note: '至少从不同视角交叉检查。若结论不同，说明冲突在哪里、哪些事实未知、为何某项义务或风险更关键，并向同事检验推理；不要只挑一个能支持既定结论的标签。' },
      { id: 'decision', title: '决策流程与根因分析：先找事实，再作选择', intro: 'Santa Clara 课程版框架 · 五阶段、十个问题；Root Cause analysis · 01:20–04:07。', headers: ['阶段 / 工具', '应做什么'], rows: [
        ['1 · Recognise an ethical issue', '识别可能伤害谁、哪些价值冲突；判断问题是否超出“是否合法”或“是否高效”。'],
        ['2 · Get the facts', '列出已知、未知与证据；找出重要利益相关者，咨询他们，并提出替代方案，避免只接受“照做或辞职”两种选项。'],
        ['3 · Evaluate alternative actions', '用功利、权利、公正、共同善与德性比较可行方案，并对照专业准则。'],
        ['4 · Make a decision and test it', '选出最能回应问题的方案；向可信任的人解释，检验是否能公开说明理由。'],
        ['5 · Act and reflect', '谨慎实施，照顾各方关切；检查结果与预期差异，记录教训并修正。'],
        ['RCA 五步', '定义问题 → 收集资料与相关人员意见 → 找可能原因 → 识别根因 → 提出并实施解决措施，预判副作用。技术、商业和团队问题都可使用。'],
        ['Appreciation / Five Whys', 'Appreciation 用“So what?”探究事实的影响；Five Whys 连续问“为什么”追到原因，不是沟通规划的 Why / Who / What / When / How。'],
        ['Drill-down / Cause-and-effect diagram', '把大问题拆成具体部分，或画出可能因果因素。与一线人员和专家一起核对，避免把第一个猜测当作根因。'],
      ], note: '根因分析帮助“获取事实”，不能单独决定“应该怎样做”。例如预算超支解释了削减安全的压力，但不会因此证明让员工承担数据风险是合理的。' },
      { id: 'canvas', title: 'Ethics Canvas：把影响讨论转成设计行动', intro: '课程单页模板 · v1.8。按编号 1–8 探索影响，再在 9 选择四项最重要的影响并提出应对。', headers: ['区块', '讨论焦点'], rows: [
        ['1 · Individuals / 2 · Groups affected', '识别受影响的个人类别与群体，包含非用户、不同年龄、社区、组织及政府等。'],
        ['3 · Behaviour / 4 · Relations', '产品会怎样改变习惯、时间、选择与个人之间的关系？'],
        ['5 · Worldviews / 6 · Group conflicts', '是否改变对社会角色的认识？群体间关系会不会受到影响或产生冲突？'],
        ['7 · Product or service failure', '技术或人为失败、资金失败、安全事件、数据丢失等会造成什么后果？'],
        ['8 · Problematic use of resources', '资源使用可能带来哪些环境、隐私或就业影响？'],
        ['9 · What can we do?', '选出四项最重要的伦理影响，通过产品设计、组织安排、使用建议或清楚说明价值来解决。'],
      ], note: '自拟落实方法：每项重要影响写出受影响者、拟议改动、负责人及检查方式。Canvas 用于探索，决策框架用于比较与论证；两者可以互补。' },
      { id: 'risks', title: '软件与安全实践：权限、激励和用途都要检查', intro: 'TechTarget 阅读的现行版本为 8 examples；Computerworld 阅读与 digital locksmith 音频讨论特权带来的伦理边界。', headers: ['风险', '可采取的行动'], rows: [
        ['1 · 成瘾设计', '评估设计是否操纵注意力或鼓励有害使用；把用户福祉和可控使用纳入产品目标。'],
        ['2 · 可疑的个人数据占有 / 变现', '明确收集目的、后续用途和收入激励，让开发者了解整个业务情境并能提出担忧。'],
        ['3 · 算法偏差', '检查数据与评估是否排除某些群体，比较分群表现，建立能报告问题的文化。'],
        ['4 · 弱安全与 PII 保护', '在设计与开发时纳入安全和数据保护，避免只有发布后补漏洞。'],
        ['5 · 功能优先于影响', '把隐私、访问限制、日志与伦理评估放进生命周期，避免只用功能交付速度奖励团队。'],
        ['6 · AI 透明度的假象', '说清数据如何进入训练、系统如何使用及其限制；自动化仍需要适当配置、监督与人员能力。'],
        ['7 · 环境影响', '评估扩大系统规模带来的能源、水与其他资源负担，而不只看性能和收入。'],
        ['8 · 社会与人权影响', '考虑劳动者、供应商与社区；易量化的生产率不能掩盖健康和福祉代价。'],
        ['安全人员的特权与 slippery slope', '能读邮件、监控屏幕、查看文件或恢复加密数据，并不说明应该这样做。小范围窥探可能逐步升级为操纵或滥用，应限定职责、授权、目的和访问范围。'],
        ['咨询与利益冲突', '不利用恐惧推销、不夸大“完全安全”，披露佣金或持股关系，保护不同客户的机密，向客户说明风险及能力边界。'],
      ], note: '阅读提出的是伦理问题，不能把其历史制度或外国法律描述当作澳大利亚现行要求。统一实践主线是主动识别影响、诚实沟通、可追责和把社会责任纳入技术选择。' },
      { id: 'privacy', title: 'APP 1–13：按个人信息生命周期复习', intro: 'OAIC 课程单页摘要 · from 12 March 2014。以下保留原材料的原则编号与例外意识，用于课程复习。', headers: ['原则', '核心内容'], rows: [
        ['APP 1 · Open and transparent management', '公开透明地管理个人信息，提供清晰且及时更新的隐私政策。'],
        ['APP 2 · Anonymity and pseudonymity', '给予不表明身份或使用化名的选择；存在有限例外。'],
        ['APP 3 · Solicited collection', '检查主动收集个人信息的条件；敏感信息适用更高要求。'],
        ['APP 4 · Unsolicited information', '妥善处理未主动索取却收到的个人信息。'],
        ['APP 5 · Notification', '在适当时间和情境告知个人有关收集的信息。'],
        ['APP 6 · Use or disclosure', '检查持有的个人信息可以在何种条件下使用或披露。'],
        ['APP 7 · Direct marketing', '组织进行直接营销时，使用或披露个人信息须满足条件。'],
        ['APP 8 · Cross-border disclosure', '在向境外披露前采取措施保护个人信息。'],
        ['APP 9 · Government identifiers', '组织把政府标识符用作自己的标识符，或使用、披露它们，仅限特定情况。'],
        ['APP 10 · Quality', '合理确保收集信息准确、最新、完整；使用或披露时还应与目的相关。'],
        ['APP 11 · Security', '采取合理措施保护信息，防止滥用、干扰、丢失或未经授权访问、修改与披露；在一定情况下销毁或去标识化。'],
        ['APP 12 · Access', '回应个人访问信息的请求，除特定例外外提供访问。'],
        ['APP 13 · Correction', '履行更正所持个人信息的义务。'],
      ], note: '自拟应用：收集 GPS 不只是“有加密吗”。还应检查收集条件与通知（3、5）、二次用途（6）、境外披露（8）、准确性（10）、保留与保护（11）及访问、更正（12、13）。同意不是整个分析的替代品。' },
      { id: 'security', title: 'ISM：Govern → Protect → Detect → Respond', intro: '课程 ISM 摘录 · 2 March 2023 · pp. 1–2；保护对象包括 Confidentiality、Integrity、Availability（CIA）。', headers: ['活动', '材料中的控制重点'], rows: [
        ['Govern · G1–G5', 'CISO 领导监督；登记系统、应用和数据的身份、价值与 CIA 需求；把安全风险纳入组织风险管理，授权使用前及运行中持续识别、管理与接受风险。'],
        ['Protect · P1–P6', '按价值和 CIA 需求管理生命周期；使用可信供应商，减少攻击面，安全且可追责地管理系统，及时处理漏洞，只运行可信且受支持的软件与代码。'],
        ['Protect · P7–P9', '静态与系统间传输数据加密；控制并可检查系统间的数据；定期进行安全且经过验证的备份。'],
        ['Protect · P10–P14', '审查人员可信性、按职责最小授权、采用多种身份识别与认证方法、持续安全意识训练、限制物理访问。'],
        ['Detect · D1–D2', '及时收集和分析事件日志，再分析安全事件以识别安全事故。'],
        ['Respond · R1–R3', '及时向相关内部和外部机构报告，遏制、根除并恢复；必要时启动业务连续性与灾难恢复计划。'],
        ['五级成熟度', 'Incomplete：未做或只做部分；Initial：随意实施；Developing：按项目实施；Managing：组织内成为稳健常规；Optimising：持续优化与改进。'],
      ], note: '安全保护是伦理决策的落实手段。加密不能补足未授权收集；只有防护而缺少检测和响应，也不能覆盖整个安全过程。' },
      { id: 'indigenous', title: 'Indigenous Data：治理要包含集体权利与共同决策', intro: 'NIAA · May 2024 · 为 Australian Public Service 提供实践指导；重点 pp. 6–22、生命周期 pp. 27–29、概念 pp. 33–34。', headers: ['概念 / 指引', '实践含义'], rows: [
        ['Indigenous Data / Sovereignty / Governance', '数据包括以任何格式存在、关于或可能影响 Aboriginal and Torres Strait Islander peoples 的信息或知识，影响可涉及个人和集体。主权关注所有权与控制权；治理把这些权利落实到收集、访问、分析、解释、传播与复用。'],
        ['1 · Partner with people', '在数据生命周期各阶段与相关社区共同决策，赋予治理安排实际影响力，并为伙伴的时间和专业知识提供资源。'],
        ['2 · Build data-related capabilities', '同时提升 APS 与社区的数据、文化和合作能力，支持基础设施、培训与相互学习。'],
        ['3 · Provide knowledge of data assets', '让社区知道政府持有哪些数据、用途及访问方法；给出清楚流程、回应安排、拒绝理由与复核路径。'],
        ['4 · Build an inclusive data system', '改变组织文化、结构与指标，把社区纳入治理，减少识别错误、去情境化和单纯描述缺陷的数据叙事。'],
        ['FAIR + CARE', 'FAIR：Findable、Accessible、Interoperable、Reusable；CARE：Collective Benefit、Authority to Control、Responsibility、Ethics。技术上可分享的数据，还需要考虑谁控制、为何使用及集体利益。'],
        ['实施与问责', '按 Prepare → Grow → Extend 提升成熟度；制定有时限的计划，内部监测、向社区及公众报告，并落实高层监督。'],
      ], note: '去标识化不能自动解决集体污名或不当叙事。案例阅读中，标准化政府指标与当地社区自己定义的成功可能冲突；应在收集前就共同定义需求与有意义的结果，并在法律和隐私边界内提供可用数据。' },
      { id: 'ai', title: 'Australia’s AI Ethics Principles：八项原则', intro: '课程 “Ethical Principles for AI Capability” 旧链接已迁移；本地阅读保存的是八项自愿伦理原则及详细说明。', headers: ['原则', '要检查什么'], rows: [
        ['1 · Human, societal and environmental wellbeing', '整个生命周期对个人、社会与环境的益处及影响，包括组织之外的后果。'],
        ['2 · Human-centred values', '尊重人权、多样性与自主，避免欺骗、不当操纵与无正当理由的监控。'],
        ['3 · Fairness', '保证包容、可访问与公平待遇，识别对弱势或代表不足群体的不公平影响。'],
        ['4 · Privacy protection and security', '对输入、生成数据及推断进行治理，保护隐私与安全，评估滥用与对抗风险。'],
        ['5 · Reliability and safety', '按预定目的可靠运行，持续测试、监测和管理风险，并明确安全责任。'],
        ['6 · Transparency and explainability', '让人知道何时正与 AI 交互或受到重大影响，并提供及时、合理的信息解释结果。'],
        ['7 · Contestability', '重大影响发生时，有及时、可访问的方式挑战 AI 的使用或结果，并有适当的人类判断与监督。'],
        ['8 · Accountability', '各生命周期阶段的负责人可识别、可追责，并具备适当的人类监督和独立审查支持。'],
      ], note: '透明度回答“发生了什么、为什么”；可质疑性回答“怎样提出挑战并获得复核”；问责回答“谁负责处理和纠正”。这三者相互支持，不能互相替代；自愿原则本身也不等于法定合规证明。' },
      { id: 'cases', title: '课堂案例：把原则写成有理由的行动', intro: '以下案例事实来自视频及画面；分析与行动建议为本摘要的练习示范，并非官方答案。', headers: ['案例与事实', '分析与行动'], rows: [
        ['PunkSpider · 14:29–15:08', '公开可搜索的网站漏洞可能推动修补，也会降低攻击门槛。用行善、不伤害、自主和公正检查：谁获益、谁承担风险、站点与用户是否有控制。可比较协调披露、限制公开细节与修补窗口，而不是只看“公开有助安全”。'],
        ['Alice 图书馆分析 · 15:15–15:29', 'Alice 在服务改进中识别一个具有性别、学科和族裔特征的学生群体；场景说数据用于原定目的、不对他人披露身份且拟提供更好服务。仍应检验“无伤害”的假设、透明度与自主、群体标签与公平性，比较聚合分析或与学生协商等选择。'],
        ['Pete 的 HR 系统 · Ethical strategies · 09:29–11:50', '客户因超预算要求较弱安全，系统存有绩效、医疗和薪资数据。员工也是利益相关者。对照公共利益、隐私、Honesty 与 Competence，解释并记录风险，寻求其他降本方案或适当升级；讲者建议不实施不达标的安全方案。'],
        ['Sue / 自动诊断 · Ethics And IT · 06:57–08:56', '把病理人员换成机器并不能消除责任。检查开发验证、适用范围、部署决策、监督与故障纠正；从具体控制和义务分析个人与组织责任，不把全部责任随意归给一位程序员。'],
      ], note: '练习答题顺序：事实与未知 → 利益相关者 → 原则 / 准则 → 至少两个方案 → 有理由的选择 → 实施责任与结果检查。说出原则名称以后，还要解释它怎样影响选择。' },
    ],
    quiz: [
      ['合法或技术上能实现，是否就足以证明伦理上合理？', '不足以。还应考虑用途、手段、动机、受影响者、权利和伤害。伦理判断超出合法性与效率；技术能力也不等于授权。'],
      ['电车案例对新技术的启示是什么？', '技术改变可选行动及风险分配：有人原先处于危险而可能获救，也有人原先安全却新增风险。应同时分析受益者与新承担风险的人。'],
      ['Ethics in / by Design 与 for Designers 如何区分？', 'in：目的及可能后果；by：实现目的的手段与系统行为；for：设计者的动机和行为伦理。三者都需要审查。'],
      ['四项伦理原则分别问什么？', 'Beneficence：谁受益；Non-maleficence：谁受害；Autonomy：选择、隐私和尊严是否受尊重；Justice：是否公平且尊重权利。应把问题连到具体事实。'],
      ['后果论与义务论的关键区别？', '前者按结果评估行动；后者按规则、义务或权利评估行动。不同视角可能产生不同结论，需要解释冲突和取舍。'],
      ['ACS 六项价值是什么，冲突时哪项优先？', '公共利益优先、提升生活质量、诚实、胜任、专业发展、专业精神。按课程 2014 Code of Professional Conduct，公共利益在价值冲突时优先。'],
      ['伦理决策的五阶段是什么？', '识别问题 → 获取事实 → 比较行动 → 决策并检验 → 行动及反思。明确未知、咨询利益相关者和实施后的检查是流程的一部分。'],
      ['Five Whys 能单独证明某行动正确吗？', '不能。它帮助调查原因和事实；发现预算压力或管理失误后，仍要用伦理视角和准则判断应采取什么行动。'],
      ['Ethics Canvas 的第 9 区块要求什么？', '从前面讨论中选择四项最重要的伦理影响，并通过设计、组织安排、使用建议或价值说明提出应对。不是只列出风险便结束。'],
      ['有管理员权限，就能随意阅读员工邮件吗？', '不能把能力等同正当使用。应核对职责、授权、必要性、目的、范围与透明度，并考虑隐私与滑坡式滥用风险。'],
      ['APP 10、11、12、13 分别关注什么？', '10：信息质量；11：安全与一定情况下的销毁或去标识化；12：个人访问；13：更正。加密不能代替收集与用途方面的判断。'],
      ['ISM 四项活动与成熟度如何记？', 'Govern、Protect、Detect、Respond；成熟度为 Incomplete、Initial、Developing、Managing、Optimising。从按项目做，进步到组织常规与持续改进。'],
      ['FAIR 为什么还需要 CARE？', 'FAIR 关注可发现、可访问、可互操作与可复用；CARE 加入集体利益、控制权、责任和伦理。技术可用性不能代替 Indigenous peoples 对数据与叙事的参与和控制。'],
      ['AI 透明、可质疑和可追责有何不同？', '透明提供信息与解释；可质疑提供挑战和复核途径；可追责识别负责人并落实监督和纠正。仅解释一个错误决定并未提供有效复核。'],
      ['客户坚持削减 HR 数据安全，怎样回应？', '把员工列为利益相关者，查清数据和风险；对照公共利益、隐私、诚实与胜任，比较替代降本方案，沟通记录并适当升级。客户同意不能取消对受影响者的责任。'],
      ['AI 出错后说“这是系统决定的”有什么问题？', '把责任放到机器上形成责任空缺。要检查谁设计、验证、部署、监测和纠正，以及其信息、控制权与义务；责任可以共享，但不能因此消失。'],
    ],
    reviewTitle: '自测：用事实与原则解释选择',
    reviewIntro: '16 道原创复习题，依据 Own-time 材料整理；不是 Moodle 官方测验或标准答案。展开查看解释。',
    sourcesTitle: '材料索引与学习范围',
    sourcesIntro: '18 项 Own-time 材料逐项列出。PDF 与网页按原文整理；五段视频使用内嵌字幕，并核对关键案例画面。课程私有原文件不随网站上传，Moodle / Panopto 链接需要课程访问权限。',
    sourceLink: '查看来源', sectionLink: '对应笔记',
    audioTitle: '音频串联：digital locksmith 的权力与边界',
    audioBody: '音频用“拥有所有房屋钥匙的锁匠”比喻管理员特权，并连接滑坡式滥用、公共利益优先、决策框架、APP 11 与集体数据权利。它是复习串联材料：对“准则完全自愿”的概括应结合 ACS 原文理解，2014 文件要求 ACS 成员遵守，并提及纪律后果；不要把音频比喻或制度概括当作独立法律结论。',
    boundaryLabel: '版本与证据范围',
    boundary: '这里总结课程指定版本：ACS 2014、APP 2014 单页摘要、ISM 2023、NIAA 2024 和课程链接的八项自愿 AI 伦理原则；不是对现行法律适用性或最新标准的完整审计。旧网页链接变更已说明。视频字幕存在识别噪声，关键术语以 PDF 与画面校正；音频为自动转录，独有表述不当作经人工逐字核验的事实。示例中的实践建议为原创分析。',
  },
  en: {
    subtitle: 'Turn technical capability into responsibility for people, the public and professional practice.',
    summary: 'Chapter 5 · The Law, Ethics, and Privacy. Connect the Week 10 Own-time readings, five videos, infographic and audio to a practical method for identifying risks, justifying choices and assigning accountable action.',
    tags: ['Professional responsibility', 'Ethical decisions', 'Six ACS values', 'Privacy & security', 'Indigenous Data', 'AI ethics'],
    overview: 'Move from what we can do to what we ought to do',
    lead: 'Examine ends, means and motivations → identify affected people and facts → compare options using ethical lenses and professional codes → assign responsibility and protections → review outcomes and improve. Technical feasibility, commercial benefit or legality alone cannot establish that a choice is ethically justified.',
    sections: [
      { id: 'foundations', title: 'Ethical foundations: technology changes who benefits and who is at risk', intro: 'Introduction to Ethics PDF · pp. 1–2; Ethics And IT · 00:38–05:29; Introduction To Ethics Video · 00:18–08:59.', headers: ['Concept', 'Meaning and application'], rows: [
        ['Core values / Morality / Ethics', 'Core values are fundamental beliefs guiding judgments. Morality concerns a society’s rules about what people ought to do. Ethics examines how judgments of right and wrong are made and justified. Social norms can change over time.'],
        ['Technology creates more than its intended benefit', 'In the trolley example, a switching mechanism can save five people already at risk while placing a previously safe person at risk. Identify intended beneficiaries and groups newly exposed to harm.'],
        ['Ethical dilemmas', 'A choice may involve competing goods, competing harms or conflicting stakeholder interests. Intelligent, well-intentioned people can disagree; explain the facts, values and tradeoffs.'],
        ['Public interest requires interpretation', 'Public interest cannot simply mean that a majority benefits. The trolley discussion exposes tension between total benefit and individual rights: a code still requires judgment in context.'],
        ['Responsibility beyond quality', 'A system can operate correctly while invading privacy, promoting addiction or amplifying discrimination. Its purpose and social effects are part of professional responsibility.'],
      ], note: 'The Ethics in IT infographic is a quick recap. It displays only some ACS values and compresses the decision process into three steps; use the full six values and five stages below.' },
      { id: 'design', title: 'Ends, means and motivations: examine all three', intro: 'Introduction To Ethics Video · 11:14–14:19; terminology checked against the slide at 11:57.', headers: ['Dimension', 'Question to ask'], rows: [
        ['Ethics in Design · Ends', 'What is the system’s goal? Is it worth pursuing? What intended and unintended effects could follow?'],
        ['Ethics by Design · Means', 'How does the deployed system achieve its goal? Even with a beneficial goal, do surveillance, collection and automated decisions respect affected people?'],
        ['Ethics for Designers · Motivations', 'Why does the designer pursue this goal in this way? Is the motivation service improvement, or personal gain that conceals risks?'],
        ['Beneficence', 'Who or what benefits? Are the benefits real and meaningful to those affected?'],
        ['Non-maleficence', 'Who or what might be harmed? Can exposure and foreseeable adverse effects be reduced?'],
        ['Autonomy', 'Are individual and group choices, privacy and dignity respected? Is there unauthorised interference or manipulation?'],
        ['Justice', 'Is the arrangement impartial and fair? Does it violate rights, including property rights?'],
      ], note: 'Original application: improving campus services is an end; analysing identifiable student behaviour is a means; service quality or surveillance revenue could be motivations. A desire to help students does not remove the need to examine data use.' },
      { id: 'responsibility', title: 'Professional responsibility: identify the people behind the system', intro: 'Professionals and Ethics · pp. 1–4; Ethics And IT · 05:41–09:14; Ethical strategies · 06:29–08:34.', headers: ['Issue', 'Revision point'], rows: [
        ['What characterises a profession?', 'The reading lists professional education, accreditation, certification, licensing, skills development, continuing learning, ethical codes and societies. The course questions IT’s uneven mandatory entry requirements while recognising its considerable capacity to harm the public.'],
        ['Locus of responsibility', 'Responsibility can focus on individuals or organisational systems. A system includes procedures, policies, training and management, not just software.'],
        ['Moral agent / Responsibility gap', 'The course treats people able to distinguish right from wrong as moral agents. After an automated diagnosis or autonomous AI error, examine design, deployment, management and oversight; “the computer decided” cannot be the endpoint of accountability.'],
        ['Responsibility can be shared', 'Multiple contributors do not imply no responsibility. Identify decision makers, reviewers and people able to correct failures, then examine their roles, knowledge and control. A classroom scenario alone cannot determine legal liability.'],
        ['Professional societies', 'ACS, ACM, IEEE and BCS illustrate standards, professional learning, communities, ethical guidance and representation. The reading’s historical list does not establish current registration or licensing requirements.'],
        ['Codes: support and limits', 'Codes articulate shared standards, guide assessment and support ethical action. The course ACS document discusses disciplinary action and relevance to professional negligence assessment. A code does not mechanically decide every dilemma.'],
      ], note: 'Professional responsibility also covers inaction, supervision, honest disclosure of capability limits and ongoing development of oneself and colleagues.' },
      { id: 'acs', title: 'ACS Code of Professional Conduct: six values', intro: 'Course document · April 2014 · V2.1 · pp. 4–8. The introduction video also mentions the 2023 Code of Professional Ethics; the course reading instruction prioritises this Code of Professional Conduct.', headers: ['Value', 'Concrete conduct'], rows: [
        ['1 · Primacy of the Public Interest', 'Prioritise the public over personal, business and sectional interests. Identify affected people, raise conflicts and protect health, safety, the environment, privacy, confidentiality and intellectual property. This value takes precedence when the six values conflict.'],
        ['2 · Enhancement of Quality of Life', 'Protect health and safety and promote equal access to ICT benefits, especially for disadvantaged people and people with disabilities. Consider affected people’s perceptions, satisfaction and control.'],
        ['3 · Honesty', 'Do not mislead about product suitability or accept bribery. Give realistic estimates, qualify advice based on limited knowledge, distinguish professional and personal opinions, and credit others.'],
        ['4 · Competence', 'Work diligently, recognise limits and seek appropriate expertise. Follow relevant standards and legislation, advise against unsuitable proposals and accept responsibility for your work.'],
        ['5 · Professional Development', 'Update knowledge, skills and awareness of standards. Support staff, colleagues and students in learning and pass on experience.'],
        ['6 · Professionalism', 'Maintain integrity and respect, oppose discrimination and harassment, and do not pressure others to breach the code. Address misconduct through calm, informed action and improve public understanding of ICT.'],
      ], note: 'Write “value → fact → action”. Public interest requires considering employees whose HR records are stored, beyond the paying client; honesty requires explaining protection limits; competence requires suitable controls or additional expertise.' },
      { id: 'approaches', title: 'Ethical lenses: explain why an option is justified', intro: 'Introduction to Ethics PDF · p. 2; A Framework for Ethical Decision Making · p. 1; Ethical strategies · 02:25–06:26.', headers: ['Lens', 'Basis of judgment / question'], rows: [
        ['Consequentialism', 'Evaluate actions through outcomes. Utilitarianism is one consequentialist lens: seek greater benefit and less harm, considering everyone affected rather than revenue alone.'],
        ['Deontology', 'Evaluate actions through duties, rules and rights. The course contrasts it with consequentialism using simplified examples where beneficial outcomes do not automatically permit breaking rules.'],
        ['Utilitarian', 'Which option produces the most good and least harm? Who bears costs, and what evidence and uncertainty support the predicted outcomes?'],
        ['Rights', 'Which option best respects stakeholders’ rights, including privacy and autonomy?'],
        ['Justice', 'Are people treated equally or proportionately? Is different treatment justified?'],
        ['Common good', 'Does the option serve the community as a whole, rather than only some members?'],
        ['Virtue', 'Does this choice express the character of the professional I want to become?'],
      ], note: 'Cross-check different lenses. If conclusions differ, identify the conflict and unknown facts, explain which obligation or risk matters most, and test the reasoning with colleagues. Do not select a label merely to endorse a predetermined answer.' },
      { id: 'decision', title: 'Decision making and root causes: establish facts before choosing', intro: 'Santa Clara course framework · five stages and ten questions; Root Cause analysis · 01:20–04:07.', headers: ['Stage / tool', 'Action'], rows: [
        ['1 · Recognise an ethical issue', 'Identify potential harm and competing values. Ask whether the issue goes beyond legality or efficiency.'],
        ['2 · Get the facts', 'List evidence, knowns and unknowns. Identify and consult stakeholders and develop alternatives rather than accepting “comply or resign” as the only options.'],
        ['3 · Evaluate alternative actions', 'Compare feasible options through utilitarian, rights, justice, common-good and virtue lenses, and relevant professional codes.'],
        ['4 · Make a decision and test it', 'Choose the option that best addresses the situation. Explain it to someone you respect and test whether the reasons withstand public scrutiny.'],
        ['5 · Act and reflect', 'Implement carefully with attention to stakeholders. Compare actual and expected outcomes, record lessons and revise.'],
        ['Five RCA steps', 'Define the problem → collect information and stakeholder input → identify possible causes → establish root causes → propose and implement solutions while anticipating side effects. Applies to technical, business and team problems.'],
        ['Appreciation / Five Whys', 'Appreciation asks “So what?” about a fact’s implications. Five Whys repeatedly asks why to investigate underlying causes; it differs from communication planning’s Why / Who / What / When / How.'],
        ['Drill-down / Cause-and-effect diagram', 'Break a large problem into specific parts or map possible causal factors. Check with frontline staff and experts instead of treating the first hypothesis as a root cause.'],
      ], note: 'Root cause analysis supports fact finding; it cannot by itself establish what ought to be done. An overrun may explain pressure to cut security without justifying exposing employees’ records.' },
      { id: 'canvas', title: 'Ethics Canvas: turn impact discussions into design action', intro: 'Course one-page template · v1.8. Explore impacts in blocks 1–8, then select the four most important impacts and responses in block 9.', headers: ['Block', 'Discussion focus'], rows: [
        ['1 · Individuals / 2 · Groups affected', 'Identify affected categories of people and collectives, including non-users, age groups, communities, organisations and government.'],
        ['3 · Behaviour / 4 · Relations', 'How might the product change habits, schedules, choices and relationships between people?'],
        ['5 · Worldviews / 6 · Group conflicts', 'Could it change perceptions of social roles or affect relationships and conflicts between groups?'],
        ['7 · Product or service failure', 'Consider technical or human failure, financial failure, security incidents and data loss.'],
        ['8 · Problematic use of resources', 'Consider environmental, privacy and employment impacts of resource consumption.'],
        ['9 · What can we do?', 'Select four key ethical impacts and address them through product design, organisational changes, recommendations for use or clearer statements of design values.'],
      ], note: 'Original implementation method: record the affected people, proposed change, owner and verification for each key impact. The canvas explores impacts; the decision framework compares and justifies choices. They can work together.' },
      { id: 'risks', title: 'Software and security practice: examine privilege, incentives and purpose', intro: 'The linked TechTarget reading now has 8 examples. Computerworld and the digital locksmith audio examine the ethical boundaries of privileged access.', headers: ['Risk', 'Practical response'], rows: [
        ['1 · Addictive design', 'Examine attention manipulation and harmful use; include wellbeing and user control in product objectives.'],
        ['2 · Questionable personal data ownership', 'Clarify collection, subsequent use and revenue incentives. Help developers understand the whole business context and raise concerns.'],
        ['3 · Algorithmic bias', 'Check whether data and evaluation exclude groups, compare group performance and create a culture that supports reporting concerns.'],
        ['4 · Weak security and PII protection', 'Include security and data protection during design and development instead of relying only on fixes after release.'],
        ['5 · Prioritising features over impact', 'Build privacy, access restrictions, logging and ethical evaluation into the lifecycle rather than rewarding feature delivery alone.'],
        ['6 · Mirage of AI transparency', 'Explain training data use, system operation and limitations. Automation still requires appropriate configuration, supervision and expertise.'],
        ['7 · Environmental impact', 'Assess energy, water and other resource burdens of scaling systems alongside performance and revenue.'],
        ['8 · Social and human rights impact', 'Consider workers, suppliers and communities. Easily measured productivity must not conceal costs to health and wellbeing.'],
        ['Security privilege and the slippery slope', 'Being able to read emails, monitor screens, inspect files or recover encrypted data does not justify doing so. Small intrusions can escalate into manipulation or abuse; define duties, authorisation, purpose and access scope.'],
        ['Consulting and conflicts of interest', 'Avoid fear-based selling and promises of complete security. Disclose commissions or ownership interests, protect different clients’ confidential information and explain risks and capability limits.'],
      ], note: 'These readings raise ethical questions. Their historical institutional descriptions or foreign-law examples do not establish current Australian requirements. The practical thread is proactive impact assessment, honesty, accountability and social responsibility in technical choices.' },
      { id: 'privacy', title: 'APP 1–13: revise the personal information lifecycle', intro: 'OAIC course summary · from 12 March 2014. The notes preserve the supplied numbering and awareness of exceptions for course revision.', headers: ['Principle', 'Core content'], rows: [
        ['APP 1 · Open and transparent management', 'Manage personal information transparently with a clear and current privacy policy.'],
        ['APP 2 · Anonymity and pseudonymity', 'Offer the option of not identifying oneself or using a pseudonym, subject to limited exceptions.'],
        ['APP 3 · Solicited collection', 'Check conditions for collecting requested personal information; sensitive information has higher requirements.'],
        ['APP 4 · Unsolicited information', 'Handle personal information received without being solicited appropriately.'],
        ['APP 5 · Notification', 'Notify individuals about collection in the relevant circumstances and at the appropriate time.'],
        ['APP 6 · Use or disclosure', 'Check the conditions under which held personal information can be used or disclosed.'],
        ['APP 7 · Direct marketing', 'An organisation’s use or disclosure for direct marketing must meet applicable conditions.'],
        ['APP 8 · Cross-border disclosure', 'Take steps to protect personal information before disclosure overseas.'],
        ['APP 9 · Government identifiers', 'An organisation’s adoption, use or disclosure of government-related identifiers is restricted to specified circumstances.'],
        ['APP 10 · Quality', 'Take reasonable steps to ensure collected information is accurate, current and complete; used or disclosed information should also be relevant to its purpose.'],
        ['APP 11 · Security', 'Take reasonable protective steps against misuse, interference, loss and unauthorised access, alteration or disclosure; destroy or de-identify information in specified circumstances.'],
        ['APP 12 · Access', 'Respond to individuals’ access requests, providing access unless a specific exception applies.'],
        ['APP 13 · Correction', 'Meet obligations to correct held personal information.'],
      ], note: 'Original application: GPS collection requires more than encryption. Examine collection and notification (3, 5), secondary use (6), overseas disclosure (8), quality (10), retention and protection (11), and access and correction (12, 13). Consent alone does not replace the whole analysis.' },
      { id: 'security', title: 'ISM: Govern → Protect → Detect → Respond', intro: 'Course ISM extract · 2 March 2023 · pp. 1–2; requirements cover Confidentiality, Integrity and Availability (CIA).', headers: ['Activity', 'Controls in the reading'], rows: [
        ['Govern · G1–G5', 'CISO leadership; document systems, applications, data, value and CIA needs; integrate security into organisational risk management and assess, manage and accept risks before authorisation and throughout operation.'],
        ['Protect · P1–P6', 'Manage the lifecycle according to value and CIA needs; use trusted suppliers, reduce attack surface, administer securely and accountably, mitigate vulnerabilities promptly and run trusted, supported software and code.'],
        ['Protect · P7–P9', 'Encrypt stored data and transfers between systems; control and inspect communications; make secure, proven backups regularly.'],
        ['Protect · P10–P14', 'Vet personnel, grant minimum access for duties, use multiple identification and authentication methods, provide ongoing awareness training and restrict physical access.'],
        ['Detect · D1–D2', 'Collect and analyse event logs promptly, then analyse security events to identify incidents.'],
        ['Respond · R1–R3', 'Report to relevant internal and external bodies promptly; contain, eradicate and recover; enact continuity and disaster recovery plans when required.'],
        ['Five maturity levels', 'Incomplete: absent or partial; Initial: ad hoc; Developing: project by project; Managing: robust organisational practice; Optimising: continual improvement.'],
      ], note: 'Security controls implement parts of ethical decisions. Encryption cannot make unauthorised collection appropriate, and protection without detection and response does not cover the full security process.' },
      { id: 'indigenous', title: 'Indigenous Data: include collective rights and shared decisions', intro: 'NIAA · May 2024 · practical guidance for the Australian Public Service; guidelines pp. 6–22, lifecycle pp. 27–29, concepts pp. 33–34.', headers: ['Concept / guideline', 'Practical meaning'], rows: [
        ['Indigenous Data / Sovereignty / Governance', 'Data includes information or knowledge in any format about or affecting Aboriginal and Torres Strait Islander peoples, individually or collectively. Sovereignty concerns ownership and control; governance implements these rights through collection, access, analysis, interpretation, dissemination and reuse.'],
        ['1 · Partner with people', 'Share decisions with relevant communities throughout the lifecycle, give governance arrangements real influence and resource partners’ time and expertise.'],
        ['2 · Build data-related capabilities', 'Develop data, cultural and partnership capabilities in both the APS and communities, supporting infrastructure, training and mutual learning.'],
        ['3 · Provide knowledge of data assets', 'Help communities find what government holds, how it is used and how to access it. Provide clear processes, response arrangements, reasons for refusal and review pathways.'],
        ['4 · Build an inclusive data system', 'Change organisational culture, structures and measures; include communities in governance and address misidentification, loss of context and deficit-focused narratives.'],
        ['FAIR + CARE', 'FAIR: Findable, Accessible, Interoperable, Reusable. CARE: Collective Benefit, Authority to Control, Responsibility, Ethics. Shareable data still requires attention to control, purpose and collective benefit.'],
        ['Implementation and accountability', 'Advance through Prepare → Grow → Extend. Set implementation plans and timeframes, monitor internally, report to communities and the public, and provide executive oversight.'],
      ], note: 'De-identification alone cannot resolve group stigma or inappropriate narratives. The case studies show tensions between standard government metrics and locally defined success. Co-design needs and meaningful outcomes before collection, and provide usable data within privacy and legal boundaries.' },
      { id: 'ai', title: 'Australia’s AI Ethics Principles: eight principles', intro: 'The old course link “Ethical Principles for AI Capability” has moved. The saved reading contains eight voluntary ethical principles and their detailed explanations.', headers: ['Principle', 'What to examine'], rows: [
        ['1 · Human, societal and environmental wellbeing', 'Benefits and effects across the lifecycle for individuals, society and the environment, including impacts outside the organisation.'],
        ['2 · Human-centred values', 'Human rights, diversity and autonomy; avoid deception, unfair manipulation and unjustified surveillance.'],
        ['3 · Fairness', 'Inclusion, accessibility and equitable treatment; identify unfair impacts on vulnerable and underrepresented groups.'],
        ['4 · Privacy protection and security', 'Govern inputs, generated data and inferences; protect privacy and security and assess misuse and adversarial risks.'],
        ['5 · Reliability and safety', 'Operate reliably for the intended purpose, monitor and test continuously, manage risk and assign safety responsibility.'],
        ['6 · Transparency and explainability', 'Let people know when they interact with AI or are significantly affected, and provide timely, reasonable information about outcomes.'],
        ['7 · Contestability', 'Provide timely, accessible ways to challenge AI use or outcomes with significant impact, supported by appropriate human judgment and oversight.'],
        ['8 · Accountability', 'Identify accountable people throughout the lifecycle, enable human oversight and support independent review.'],
      ], note: 'Transparency asks “what happened and why?”; contestability asks “how can it be challenged and reviewed?”; accountability asks “who will handle and correct it?”. They support rather than replace one another. Voluntary principles alone do not establish legal compliance.' },
      { id: 'cases', title: 'Classroom cases: connect principles to justified action', intro: 'Case facts come from video captions and slides. The analysis and suggested actions are original revision examples, not official answers.', headers: ['Case and facts', 'Analysis and action'], rows: [
        ['PunkSpider · 14:29–15:08', 'A searchable public vulnerability catalogue may encourage fixes while lowering the barrier to attacks. Examine beneficence, non-maleficence, autonomy and justice: who benefits, who bears risk and what control owners and users retain. Compare coordinated disclosure, restricted details and remediation windows.'],
        ['Alice’s library analytics · 15:15–15:29', 'Alice identifies a student group by gender, subject and ethnicity while improving services. The scenario states original-purpose use, no disclosure of identities to others and an offer of better services. Still test the “no harm” assumption, transparency, autonomy, group labelling and fairness; compare aggregate analysis or consultation with students.'],
        ['Pete’s HR system · Ethical strategies · 09:29–11:50', 'The client requests weaker security after a budget overrun despite performance, medical and salary records. Employees are stakeholders too. Apply public interest, privacy, honesty and competence; explain and document risks, explore alternative savings or escalate appropriately. The lecturer advises against implementing substandard security.'],
        ['Sue / automated diagnosis · Ethics And IT · 06:57–08:56', 'Replacing a pathologist with software does not eliminate responsibility. Examine validation, intended use, deployment, oversight and correction; assess individual and organisational duties and control instead of arbitrarily blaming one programmer.'],
      ], note: 'Answer sequence: facts and unknowns → stakeholders → principles and code → at least two options → justified choice → implementation responsibility and outcome checks. Naming a principle is only the start: explain how it changes the decision.' },
    ],
    quiz: [
      ['Does legality or technical feasibility establish ethical justification?', 'No. Examine purpose, means, motivation, affected people, rights and harms. Ethics goes beyond legality and efficiency; technical capability is not authorisation.'],
      ['What does the trolley example teach about new technology?', 'Technology changes available actions and the distribution of risk. It may save people already at risk while exposing previously safe people. Assess both beneficiaries and those newly at risk.'],
      ['How do ethics in design, by design and for designers differ?', 'In: purpose and likely effects. By: means and deployed behaviour. For: designers’ motivations and ethics. All three require scrutiny.'],
      ['What do the four ethical principles ask?', 'Beneficence: who benefits? Non-maleficence: who is harmed? Autonomy: are choice, privacy and dignity respected? Justice: is the arrangement fair and respectful of rights? Connect each question to facts.'],
      ['What distinguishes consequentialism from deontology?', 'Consequentialism evaluates outcomes; deontology evaluates duties, rules or rights. They can disagree, requiring an explanation of the conflict and the reasons for the choice.'],
      ['What are the six ACS values, and which takes precedence?', 'Public interest, quality of life, honesty, competence, professional development and professionalism. In the supplied 2014 Code of Professional Conduct, public interest takes precedence when values conflict.'],
      ['What are the five ethical decision stages?', 'Recognise the issue → get facts → evaluate alternatives → decide and test → act and reflect. Unknowns, stakeholder consultation and review after implementation belong in the process.'],
      ['Can Five Whys prove an action is ethically right?', 'No. It supports causal investigation and fact finding. Budget pressure or management errors still require ethical lenses and professional codes to decide the appropriate response.'],
      ['What does block 9 of the Ethics Canvas require?', 'Select the four most important ethical impacts and propose responses through design, organisation, recommendations for use or explanations of values. Listing risks alone is insufficient.'],
      ['Do administrator rights justify reading employees’ emails?', 'Capability does not justify use. Check duties, authorisation, necessity, purpose, scope and transparency, considering privacy and the risk of escalating misuse.'],
      ['What do APP 10, 11, 12 and 13 address?', '10: information quality. 11: security and destruction or de-identification in specified circumstances. 12: individual access. 13: correction. Encryption does not replace collection and purpose analysis.'],
      ['What are the ISM activities and maturity levels?', 'Govern, Protect, Detect, Respond. Maturity: Incomplete, Initial, Developing, Managing, Optimising. Progress from project-specific controls to organisational practice and ongoing improvement.'],
      ['Why does FAIR need CARE?', 'FAIR concerns findability, accessibility, interoperability and reuse. CARE adds collective benefit, control, responsibility and ethics. Technical usability cannot replace Indigenous participation and control of data and narratives.'],
      ['How do AI transparency, contestability and accountability differ?', 'Transparency provides information and explanation. Contestability provides challenge and review. Accountability identifies responsible people and supports oversight and correction. Explaining a wrong decision does not itself provide review.'],
      ['How should you respond to cuts in HR data security?', 'Identify employees as stakeholders and establish data risks. Apply public interest, privacy, honesty and competence, compare other savings, communicate and document risks and escalate appropriately. Client agreement does not remove duties to affected people.'],
      ['What is wrong with saying “the system decided” after an AI error?', 'It creates an accountability gap by placing responsibility on a machine. Examine who designed, validated, deployed, monitored and corrected it, along with their knowledge, control and duties. Responsibility can be shared without disappearing.'],
    ],
    reviewTitle: 'Self-checks: justify choices through facts and principles',
    reviewIntro: '16 original revision questions based on the Own-time materials. These are not official Moodle questions or model answers. Expand to see explanations.',
    sourcesTitle: 'Material index and learning scope',
    sourcesIntro: 'All 18 Own-time materials are indexed. PDFs and articles were read directly; five videos use embedded captions with key case slides checked visually. Private course originals are not uploaded with the site; Moodle and Panopto links require course access.',
    sourceLink: 'View source', sectionLink: 'Related notes',
    audioTitle: 'Audio thread: the digital locksmith’s power and boundaries',
    audioBody: 'The audio compares an administrator to a locksmith holding every house key. It connects escalating misuse, public interest, decision frameworks, APP 11 and collective data rights. Treat it as a revision synthesis: its broad description of codes as completely voluntary needs the ACS document’s qualification. The supplied 2014 code requires ACS members to comply and discusses disciplinary consequences. Metaphors and institutional generalisations do not establish independent legal conclusions.',
    boundaryLabel: 'Versions and evidence scope',
    boundary: 'This guide summarises supplied course versions: ACS 2014, the APP 2014 one-page summary, ISM 2023, NIAA 2024 and the linked eight voluntary AI ethics principles. It is not a complete audit of current legal applicability or latest standards. Link migrations are noted. Video captions contain recognition errors; key terms were checked against PDFs and slides. The audio is automatically transcribed; unique wording is not treated as manually verified fact. Suggested practical responses are original analysis.',
  },
} as const

export default function Week10({ locale }: { locale: Locale }) {
  const c = copy[locale]
  const toc = [
    { id: 'overview', label: locale === 'zh' ? '本周主线' : 'Overview' },
    ...c.sections.map(({ id, title }) => ({ id, label: title.split('：')[0].split(':')[0] })),
    { id: 'review', label: locale === 'zh' ? '自测' : 'Self-checks' },
    { id: 'sources', label: locale === 'zh' ? '材料与来源' : 'Sources' },
  ]
  return (
    <WeekLayout weekId="10" locale={locale} eyebrow="Week 10 · Chapter 5 · 5–11 October 2026" title="Professional Responsibility" subtitle={c.subtitle} summary={c.summary} updated="07 Oct 2026" tags={[...c.tags]} toc={toc}>
      <ContentSection id="overview" index="01" title={c.overview}>
        <LeadCard label={locale === 'zh' ? '本周决策主线' : 'Decision thread'}>{c.lead}</LeadCard>
      </ContentSection>
      {c.sections.map((section, i) => (
        <ContentSection key={section.id} id={section.id} index={String(i + 2).padStart(2, '0')} title={section.title} intro={section.intro}>
          <ResponsiveTable headers={[...section.headers]} rows={section.rows.map(row => [...row])} />
          <Callout label={locale === 'zh' ? '应用与辨析' : 'Application and distinctions'}>{section.note}</Callout>
        </ContentSection>
      ))}
      <ContentSection id="review" index="15" title={c.reviewTitle} intro={c.reviewIntro}>
        <QuizAccordion items={c.quiz.map(([question, answer]) => ({ question, answer }))} />
      </ContentSection>
      <ContentSection id="sources" index="16" title={c.sourcesTitle} intro={c.sourcesIntro}>
        <div className="grid gap-3 sm:grid-cols-2">{sources.map(([title, url, section, detail]) => (
          <InfoCard key={title} title={title}>
            <p>{detail}</p>
            <div className="mt-2 flex flex-wrap gap-x-4 gap-y-2 font-semibold text-[var(--week-accent)]">
              <a href={url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 underline underline-offset-4">{c.sourceLink}<ExternalLink className="size-3.5" /></a>
              <a href={`#${section}`} className="underline underline-offset-4">{c.sectionLink}</a>
            </div>
          </InfoCard>
        ))}</div>
        <Callout label={c.audioTitle}>{c.audioBody}</Callout>
        <Callout label={c.boundaryLabel}>{c.boundary}</Callout>
      </ContentSection>
    </WeekLayout>
  )
}
