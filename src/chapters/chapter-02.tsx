import { ChapterLayout } from '@/components/chapter-layout'
import { QuizAccordion, type QuizItem } from '@/components/quiz-accordion'
import { Callout, ContentSection, InfoCard, LeadCard, ResponsiveTable, SourceList } from '@/components/week-layout'
import type { Locale } from '@/i18n'

type Point = readonly [string, string]

const copy = {
  zh: {
    title: 'Teams Across Boundaries',
    subtitle: 'Chapter 02 · 团队、领导力与跨文化协作',
    summary: '本页把 Week 02–04 的 30 个优先考点与 30 道模拟题组织成一条递进逻辑：先建立团队机制，再诊断领导与冲突，最后把同一套判断放进跨文化情境。',
    tags: ['Week 02–04', '30 个优先考点', '30 道模拟题', 'MCQ + Short answer'],
    toc: ['考试地图', 'Week 02', 'Week 03', 'Week 04', '跨周连接', '易错辨析', '答题模板', 'W02 题库', 'W03 题库', 'W04 题库', '依据'],
    map: {
      title: '三周不是三座孤岛',
      intro: '命题会把模型放进项目场景，要求选择最直接行动、解释机制，并说明限制。先识别问题处于 team process、conflict/leadership 还是 intercultural interpretation。',
      lead: 'Build the team → diagnose conflict → adapt across culture.',
      weeks: [
        ['Week 02 · Team operating system', '决策流程、Social Contract、倾听与提问、发展阶段，以及让责任和思考可见的工具。'],
        ['Week 03 · Human judgement in action', 'AI 辅助边界、冲突模式、领导风格、根因诊断，以及 Agile 团队的透明与自治。'],
        ['Week 04 · Culture as a hypothesis', '识别 context 与时间观差异，用研究证据和 mutual learning 建立共同规则，但不把群体倾向套到个人。'],
      ],
    },
    week02: {
      title: 'Week 02 · 团队机制与沟通工具',
      intro: '高绩效来自过程质量，而非把最聪明的人放在一起。Social Contract、倾听、提问与可见责任是主要出题入口。',
      points: [
        ['01 · High-performing teams', '共同目标、清楚角色、开放沟通、心理安全与有效集体决策；压力后必须 review and adapt。'],
        ['02 · Social Contract', '由全员共同创建、可见、可执行且可修订；shared ownership 才能形成 commitment 与 accountability。'],
        ['03 · Active listening', 'Listening 是有意识地理解并保留 verbal/non-verbal information；rehearsing rebuttal 会让人错过后续信息。'],
        ['04 · Effective questioning', 'Explore → Clarify → Confirm：open 用于探索，reflective 用于核对，closed 用于承诺与收尾。'],
        ['05 · Tuckman stages', 'Forming → Storming → Norming → Performing → Adjourning；可能倒退、循环、跳过或停滞。'],
        ['06 · Assertive I-statement', 'I feel + specific behaviour + impact + workable request；聚焦行为而非人格。'],
        ['07 · Six Thinking Hats', 'Parallel thinking 要求所有人同时使用同一临时视角；Blue 通常界定并收束流程。'],
        ['08 · Z-Process', 'Creator → Advancer → Refiner → Executor；跳过用户反馈或 refinement 会导致返工。'],
        ['09 · Johari Window', 'Feedback 缩小 Blind Spot；适度 self-disclosure 缩小 Facade，共同扩大 Arena。'],
        ['10 · Groupthink vs social loafing', '前者由一致压力压制异议，后者因个人贡献不可见而减少努力；预防机制不同。'],
      ],
    },
    week03: {
      title: 'Week 03 · 冲突、领导力与人类判断',
      intro: '最高权重来自 Social Contract applied activity、Thomas-Kilmann、冲突来源与 Lewin 领导风格。答案必须把模型选择与情境条件连接起来。',
      points: [
        ['01 · Genuine Social Contract', '规则不能因为 AI 建议或“听起来专业”就加入；必须 practical、visible、adaptable 并获得全员真实同意。'],
        ['02 · AI-assisted workflow', 'AI 可起草 agenda、整理 minutes、组织 contract；目标、决定、核验、同意与 accountability 必须由人完成。'],
        ['03 · Thomas-Kilmann', '用 assertiveness 与 cooperativeness 定位 Competing、Collaborating、Compromising、Avoiding、Accommodating。'],
        ['04 · Conflict source → response', '识别沟通、角色、目标、文化或伦理等具体来源，再说明预防/解决行为为何直接处理该来源。'],
        ['05 · Lewin leadership', 'Authoritarian、Participative、Laissez-faire 没有永远最佳；按 urgency、capability、risk 与 creativity 选择。'],
        ['06 · Conflict Iceberg', '表面事件之下可能有权力、公平、期望、关系、情绪与程序问题；只修表面会复发。'],
        ['07 · Complete I-statement', 'Feeling → observable behaviour → impact → requested change，降低防御并给出可执行下一步。'],
        ['08 · Tuckman regression', '重大失败或成员变化可使 Performing 回到 Storming；需重建 Norming 的角色与 ground rules。'],
        ['09 · Monochronic / Polychronic', '差异是时间与关系的组织逻辑；应协商明确规则并询问个人偏好，不能按国籍推断。'],
        ['10 · Agile team performance', '优先 backlog、限制 WIP、让 blockers 可见、准备 stand-up、预留 buffer、移除 impediments 并 retrospective。'],
      ],
    },
    week04: {
      title: 'Week 04 · 跨文化证据与共同协议',
      intro: '文化模型用于生成待验证的解释，不是个人行为定律。高分答案同时做到：准确用模型、核查证据、避免 stereotype、提出 shared protocol。',
      points: [
        ['01 · High / Low context', 'High-context 将意义放在关系与非语言线索；Low-context 偏好明确编码。双方都可能误读对方。'],
        ['02 · TKI ↔ Rahim', 'Competing↔Dominating；Collaborating↔Integrating；Compromising↔Compromising；Avoiding↔Avoiding；Accommodating↔Obliging。'],
        ['03 · Traditional prediction', 'High-context 可能偏 Avoiding/Obliging；Low-context 可能偏 direct Competing/Dominating——这是 tendency，不是定律。'],
        ['04 · Croucher et al. 2012', 'N=1,792；部分支持传统预测，但 Integrating 不服从简单二分，显示文化影响是非刚性的。'],
        ['05 · Research critique', '核查来源、sample、method、findings、地理代表性、self-report 限制与 generalisability。'],
        ['06 · Intercultural Playbook', 'Evidence-based challenge → practical rule → Mutual Learning protocol，并明确不把 national tendency 当 individual fact。'],
        ['07 · DMIS', 'Denial → Defense → Minimisation → Acceptance → Adaptation → Integration；关键是 alternative cultural experience。'],
        ['08 · Three mutual processes', 'Learning 发现 what；Understanding 探究 why；Teaching 用 instruction/facilitation 解决 how。'],
        ['09 · Cultural Translator', '解释隐含文化逻辑、调解误解、建立确认规则；不应替群体发言或强化 stereotype。'],
        ['10 · Time orientations', 'Polychronic 重关系与弹性；Monochronic 重线性计划与守时；通过 team charter 管理差异。'],
      ],
    },
    synthesis: {
      title: '跨周连接：同一个案例会考多层判断',
      intro: '把模型串起来能避免只背定义。先诊断系统，再选择互动方式，最后验证文化解释和行动规则。',
      headers: ['案例信号', '第一层', '第二层', '最终行动'],
      rows: [
        ['成员不表达异议', 'Active listening / psychological safety', 'High-context cues + Accommodating/Obliging', '结构化发言、私下 dissent channel、逐人确认'],
        ['任务反复漏做', 'Social loafing 或 ownership 不清', 'Storming / weak Agile visibility', 'Named owner、WIP 可见、checkpoint 与 follow-up'],
        ['两名负责人争抢资源', 'Compromising if equal power + time pressure', '选择适当 leadership/facilitation', '临时中间方案并安排后续 integrated review'],
        ['AI 给出文化结论', 'Human verification duty', 'Research critique + anti-stereotyping', '查原文、样本、方法，向真实成员询问偏好'],
      ],
    },
    traps: {
      title: '六组高频易错辨析',
      intro: '选择题常把相邻概念互换，简答题则用绝对化语言诱导过度结论。',
      items: [
        ['Collaborating ≠ Compromising', 'Collaborating 寻找同时满足关切的整合方案；Compromising 接受双方让步以快速得到中间点。'],
        ['Hearing ≠ Active listening', '听见声音不等于澄清、复述、反映感受与总结。'],
        ['Groupthink ≠ Social loafing', '一个是异议被一致压力压制，一个是个人努力因不可见而下降。'],
        ['Acceptance ≠ Adaptation', '承认文化差异同样复杂不等于已经能从另一 worldview 生成适当行为。'],
        ['Cultural tendency ≠ individual fact', '群体研究结果只能形成 hypothesis，不能预测每一名成员。'],
        ['AI assistance ≠ AI authority', 'AI 可以组织文字，不能替团队决定、同意、核验或承担责任。'],
      ],
    },
    method: {
      title: '情境简答题五步结构',
      intro: '每个模型都要回到题干事实。没有应用的定义，以及没有理由的建议，都不完整。',
      rows: [
        ['1 · Diagnose', '点名最主要概念/阶段/模式，并引用题干信号。'],
        ['2 · Define', '用一到两句准确解释模型维度或机制。'],
        ['3 · Apply', '逐项说明题干行为为何符合该模型，而不是只复述定义。'],
        ['4 · Distinguish', '解释最容易混淆的替代概念为什么不如你的选择。'],
        ['5 · Act + qualify', '提出直接行动，并说明时间、风险、文化或证据方面的限制。'],
      ],
      rule: 'Concept → mechanism → scenario evidence → action → limitation.',
    },
    practiceIntro: '以下 30 题对应当前 `quiz/week02-04` 的中英文整理。建议先闭卷作答，再展开答案检查术语、应用和限制。',
    practiceTitles: ['Week 02 · 10 题', 'Week 03 · 10 题', 'Week 04 · 10 题'],
    quizzes: {
      week02: [
        { question: 'Survival at Sea 开始前，哪种做法最符合高绩效团队？\nA. 最自信成员快速决定\nB. 个人排序→约定决策流程→比较理由→协作排序→对照专家复盘\nC. 直接平均数字\nD. 采用第一个完整答案', answer: '答案：B。重点是有效集体决策，以及团队在压力下 review and adapt 的能力；团队优势取决于过程质量。' },
        { question: '为什么 Social Contract 能减少冲突？\nA. 管理层统一强制\nB. 团队共同商定可见、可执行的沟通、会议、责任与分歧规则\nC. 可以覆盖组织政策\nD. 签署后不可修改', answer: '答案：B。共同制定产生 ownership，并在冲突前明确期望；协议可共同修订，但不能覆盖 organisational policy。' },
        { question: 'Priya 生气后默默构思反驳，因此错过发言者后续解释。这是什么 listening barrier？\nA. Mind-reading\nB. Rehearsing\nC. Quick fixing\nD. Subject changing', answer: '答案：B。Rehearsing 是把注意力用于准备回应，从而停止真正倾听。' },
        { question: '给出三种 question type。每种提供例子、益处，并说明应在 mentor meeting 哪个阶段使用。', answer: 'Open（opening/exploration）：获取详细信息；Reflective（middle/clarification）：复述观点或感受并核对理解；Closed（closing/confirmation）：确认选择、承诺与结束。Hypothetical 可用于不立即承诺的方案探索。' },
        { question: '新团队先因目标角色不清而依赖 leader，随后挑战权威、争议任务与工作方式。识别 Tuckman 阶段、建议行动，并说明为何不是单向序列。', answer: '先是 Forming：澄清目标、角色、charter 与个人贡献；后是 Storming：尽早处理冲突、明确责任和决策流程、保护心理安全。成员/目标/压力变化可导致倒退或循环。' },
        { question: '哪句话是合格的 assertive I-statement？\nA. 我觉得你不在乎\nB. 你很不负责任\nC. 收不到进度更新时我会担心，希望商定 check-in time\nD. 所有人都觉得你不可接受', answer: '答案：C。它表达真实感受、具体事件与建设性请求，不攻击人格。' },
        { question: 'Six Thinking Hats 的 parallel thinking 定义是什么？\nA. 永久人格帽\nB. 同时辩护不同立场直到获胜\nC. 所有人同时使用同一思考视角再切换\nD. 永远先用 Black Hat', answer: '答案：C。帽子是临时视角；Blue 通常用于界定和总结流程。' },
        { question: 'Creator 直接把新想法交给 Executor，为什么是严重的 Z-Process short circuit？', answer: '它跳过 Advancer 的 user feedback 与 Refiner 的批判分析/prototype。正常路径是 Creator → Advancer → Refiner → Executor。' },
        { question: '同事知道 leader 经常打断别人，但 leader 自己不知道。Johari Window 中属于哪里，如何缩小？', answer: 'Blind Spot；主动寻求并接受 feedback，把信息移动到 Arena。' },
        { question: '比较 groupthink 与 social loafing：分别解释机制、至少两个 warning signs、至少两个 preventive actions。', answer: 'Groupthink：一致压力造成错误决策；信号包括自我审查、压制异议、集体合理化；用 devil’s advocate、比较 alternatives、低地位成员先发言等预防。Social loafing：个人努力不可见而 free-ride；信号包括 owner 不清、任务反复遗漏、负担不均；用 named owner、可见进度、checkpoint 与 peer accountability。' },
      ],
      week03: [
        { question: 'AI 起草 Social Contract，加入团队未讨论的“两小时内回复”规则，一名成员无法遵守。应否纳入？团队下一步做什么？', answer: '不应以当前形式纳入。合同必须 genuine agreement、practical、visible、adaptable。团队应讨论目的与限制，协商可行规则，只在全员理解同意后加入，并保持可复审。' },
        { question: '解释 Social Contract 活动的三阶段 AI-assisted workflow，并区分每阶段 AI 与人的责任。', answer: '个人 agenda：AI 组织，人先定义并审核目标；团队 minutes：AI 整理，人讨论、决定并核验；contract draft：AI 组织已核实决定，人拒绝虚构规则并确认共同同意。Judgement 与 accountability 始终在人。' },
        { question: '两名同权 product lead 争用资源，目标均中等重要，周五前需临时分配。哪个 TKI mode 最合适？为何优于 Collaborating？', answer: 'Compromising：assertiveness 与 cooperativeness 都中等，适合同权、时间压力与临时方案。Collaborating 更整合但需要更多时间。' },
        { question: '两人都以为共同负责 testing，却都等对方开始，导致反复 miss deadline。识别冲突来源，给出一项预防与两项解决行为。', answer: '来源是 unclear roles/expectations。预防：记录一名 accountable owner、supporting roles 与 deadline。解决：以事实把人和问题分开；active listening 后重建 ownership model，并 follow up。' },
        { question: '比较 Lewin 的 authoritarian、participative/democratic、laissez-faire；各给一个适用情境及一项影响或风险。', answer: 'Authoritarian 适合危机/经验不足，快但损害参与；Participative 适合创意与 buy-in，质量高但耗时；Laissez-faire 适合成熟专家，提高自治但可能协调弱、问题发现晚。' },
        { question: '“她没告诉我就修改 shared document。”用 Conflict Iceberg 解释为什么只修版本不够；给三个隐藏问题和一个探索问题。', answer: '表面事件下可能有 unmet expectations、fairness/power、关系/历史、情绪或程序。可问：“修改 shared work 前你期望团队怎么做，为什么这对你重要？”' },
        { question: '把“你很不负责任，因为从不更新 Jira”改为完整 I-statement，并指出四部分。', answer: '“Jira 在 stand-up 前未更新时我会焦虑，因为看不到 progress/blockers；我希望每位 owner 会前更新。”四部分是 feeling、specific behaviour、impact/reason、requested change。' },
        { question: 'Performing 团队在失败后开始争论 control、roles 与 acceptable behaviour。回到哪个 Tuckman 阶段？下一步？', answer: '回到 Storming。应处理冲突、澄清角色目标与行为期望，重建 Norming 的 shared processes 和 ground rules。' },
        { question: '比较 monochronic 与 polychronic time orientation；给一个冲突与两种不刻板化的管理做法。', answer: 'Monochronic 重线性、守时和单任务；Polychronic 接受多任务与弹性、重当前关系。团队可共同规定 deadline/tolerance/priority，并请成员复述确认、询问实际偏好而非按国籍推断。' },
        { question: 'Agile board 上 WIP 很多、完成很少；stand-up 才决定下一步，意外持续打断。建议四项实践并解释。', answer: '可选：优先 backlog、限制 WIP/避免 multitasking、可视化 blockers、准备好的短 stand-up、移除 impediments、预留 interruption buffer、retrospective、保留 team autonomy 与 individual accountability。' },
      ],
      week04: [
        { question: '一人用停顿和暗示表达异议，另一人期待明确批评并把沉默当同意。最佳解释？', answer: '可能分别偏 high-context 与 low-context：意义主要位于 contextual cues 或 explicit verbal code。应澄清含义，不应把任一方式评为天然更专业。' },
        { question: '哪个 TKI–Rahim 对应正确？\nA. Competing–Integrating\nB. Collaborating–Compromising\nC. Accommodating–Obliging\nD. Avoiding–Dominating', answer: '答案：C。Competing 对应 Dominating；Collaborating 对应 Integrating。' },
        { question: '传统 high-/low-context theory 如何预测 conflict preference？', answer: 'High-context 可能偏 Avoiding/Obliging 以保持和谐；Low-context 可能偏直接的 Competing/Dominating。这是 group tendency，不是 individual rule。' },
        { question: '哪项最准确概括 Croucher et al. 2012 四国研究？', answer: 'High-context 组较偏 Avoiding、Obliging、Compromising；Low-context 较偏 Dominating；Integrating 不服从简单二分。因此理论有用但不能僵化。' },
        { question: 'AI 声称新研究证明所有印度成员偏一种 conflict style、所有爱尔兰成员偏另一种。使用前如何批判性评估？', answer: '验证论文及 countries/sample/method/findings；检查样本地点与代表性、self-report 限制；区分 group tendency 与 individual fact；判断 generalisability 与 modern shifts。' },
        { question: 'Hybrid global team 中 Dominating 成员压过 Obliging 成员。按要求写三点 Intercultural Playbook。', answer: '1) Evidence-based challenge：把偏好当待验证趋势；2) Practical rule：structured turns、书面 dissent、逐人确认；3) Mutual Learning：询问偏好、观察结果、共同修订，不按国籍假设。' },
        { question: 'DMIS review 中 adaptation 与 integration 的 crux 是什么？', answer: '形成 alternative cultural experience 的能力，即能通过另一种 cultural worldview 感知情境。发展需要经验、reflection 与 training。' },
        { question: '区分 Mutual Learning、Mutual Understanding、Mutual Teaching。', answer: 'Learning 通过 absorbing/asking/relating 发现 what；Understanding suspend judgement 并解释 why；Teaching 用 instructing/facilitating 解决如何共同工作。' },
        { question: 'Bicultural 成员发现一组人的“yes”表示听见，另一组理解为同意。如何做 Cultural Translator？边界是什么？', answer: '解释两种文化含义、核对 intended interpretation、调解误解并建立 explicit confirmation rule。不能假设人人相同、长期替他人发言或强化 stereotype。' },
        { question: '一人多任务、临时改约且关系优先；另一人守时、单任务、计划稳定。最合适回应？', answer: '识别可能的 polychronic–monochronic difference，并在 team charter 中明确 deadlines、interruptions 与 schedule changes；不能把一方诊断为不专业。' },
      ],
    },
    sourcesTitle: '内容依据',
    sourcesNote: '优先级来自 Week 01 真实考试规律校准后的 Week 02–04 key-points；模拟题使用现有中英文题库，未引入尚未整理的 Week 05–06 内容。',
  },
  en: {
    title: 'Teams Across Boundaries',
    subtitle: 'Chapter 02 · Teams, leadership, and cross-cultural collaboration',
    summary: 'This page turns 30 priority points and 30 practice questions from Weeks 02–04 into one progression: build the team system, diagnose leadership and conflict, then apply the same judgement across cultures.',
    tags: ['Weeks 02–04', '30 priority points', '30 practice questions', 'MCQ + Short answer'],
    toc: ['Exam map', 'Week 02', 'Week 03', 'Week 04', 'Connections', 'Distinctions', 'Answer method', 'W02 bank', 'W03 bank', 'W04 bank', 'Basis'],
    map: {
      title: 'Three weeks, one examination logic',
      intro: 'Questions put models inside project scenarios and ask for the most direct action, its mechanism, and its limits. First locate the issue in team process, conflict/leadership, or intercultural interpretation.',
      lead: 'Build the team → diagnose conflict → adapt across culture.',
      weeks: [
        ['Week 02 · Team operating system', 'Decision process, Social Contract, listening and questioning, team stages, and tools that make thinking and responsibility visible.'],
        ['Week 03 · Human judgement in action', 'Limits of AI assistance, conflict modes, leadership styles, root-cause diagnosis, and transparency and autonomy in Agile teams.'],
        ['Week 04 · Culture as a hypothesis', 'Recognise context and time differences, then use evidence and mutual learning to agree protocols without mapping a group tendency onto a person.'],
      ],
    },
    week02: {
      title: 'Week 02 · Team systems and communication tools',
      intro: 'High performance comes from process quality, not merely assembling capable people. Social Contracts, listening, questioning, and visible accountability are the main exam gateways.',
      points: [
        ['01 · High-performing teams', 'Shared goals, clear roles, open communication, psychological safety, and effective collective decisions; review and adapt after pressure.'],
        ['02 · Social Contract', 'Co-created by all, visible, practical, and revisable; shared ownership creates commitment and accountability.'],
        ['03 · Active listening', 'Listening consciously interprets and retains verbal/non-verbal information; rehearsing a rebuttal loses the continuing message.'],
        ['04 · Effective questioning', 'Explore → Clarify → Confirm: open for exploration, reflective for checking, closed for commitment and closure.'],
        ['05 · Tuckman stages', 'Forming → Storming → Norming → Performing → Adjourning; teams may regress, loop, skip, or stall.'],
        ['06 · Assertive I-statement', 'I feel + specific behaviour + impact + workable request; focus on behaviour, not character.'],
        ['07 · Six Thinking Hats', 'Parallel thinking means everyone uses the same temporary lens together; Blue normally frames and closes.'],
        ['08 · Z-Process', 'Creator → Advancer → Refiner → Executor; skipping user feedback or refinement creates rework.'],
        ['09 · Johari Window', 'Feedback shrinks the Blind Spot; proportionate self-disclosure shrinks the Facade, expanding the Arena.'],
        ['10 · Groupthink vs social loafing', 'Agreement pressure suppresses dissent in the former; invisible individual contribution reduces effort in the latter.'],
      ],
    },
    week03: {
      title: 'Week 03 · Conflict, leadership, and human judgement',
      intro: 'The strongest signals are the Social Contract activity, Thomas-Kilmann, conflict sources, and Lewin leadership. Connect every model choice to scenario conditions.',
      points: [
        ['01 · Genuine Social Contract', 'Do not add rules because AI suggested them or they sound professional; they need genuine agreement and must be practical, visible, and adaptable.'],
        ['02 · AI-assisted workflow', 'AI may draft agendas, organise minutes, and structure contracts; people retain goals, decisions, verification, consent, and accountability.'],
        ['03 · Thomas-Kilmann', 'Use assertiveness and cooperativeness to locate Competing, Collaborating, Compromising, Avoiding, and Accommodating.'],
        ['04 · Conflict source → response', 'Identify the specific communication, role, goal, culture, or ethics source, then show why the response addresses it.'],
        ['05 · Lewin leadership', 'Authoritarian, Participative, and Laissez-faire each fit conditions of urgency, capability, risk, and creativity.'],
        ['06 · Conflict Iceberg', 'Power, fairness, expectations, relationship, emotion, and procedure may sit below a visible incident; surface repairs may recur.'],
        ['07 · Complete I-statement', 'Feeling → observable behaviour → impact → requested change reduces defensiveness and gives an actionable next step.'],
        ['08 · Tuckman regression', 'Failure or membership change can move Performing back to Storming; rebuild roles and Norming ground rules.'],
        ['09 · Monochronic / Polychronic', 'Different logics organise time and relationship; agree rules and ask individual preferences rather than infer from nationality.'],
        ['10 · Agile team performance', 'Prioritise backlog, limit WIP, expose blockers, prepare stand-ups, reserve buffer, remove impediments, and retrospect.'],
      ],
    },
    week04: {
      title: 'Week 04 · Cross-cultural evidence and shared protocols',
      intro: 'Culture models generate hypotheses, not laws of individual behaviour. Strong answers apply the model, test evidence, avoid stereotypes, and build a shared protocol.',
      points: [
        ['01 · High / Low context', 'High-context locates meaning in relationship and non-verbal cues; Low-context prefers explicit code. Each can misread the other.'],
        ['02 · TKI ↔ Rahim', 'Competing↔Dominating; Collaborating↔Integrating; Compromising↔Compromising; Avoiding↔Avoiding; Accommodating↔Obliging.'],
        ['03 · Traditional prediction', 'High-context may favour Avoiding/Obliging and Low-context direct Competing/Dominating—a tendency, not a law.'],
        ['04 · Croucher et al. 2012', 'N=1,792; several predictions held, but Integrating did not follow a simple split, so cultural influence is non-rigid.'],
        ['05 · Research critique', 'Verify source, sample, method, findings, geographic representation, self-report limits, and generalisability.'],
        ['06 · Intercultural Playbook', 'Evidence-based challenge → practical rule → Mutual Learning protocol, without treating national tendency as individual fact.'],
        ['07 · DMIS', 'Denial → Defense → Minimisation → Acceptance → Adaptation → Integration; alternative cultural experience is the crux.'],
        ['08 · Three mutual processes', 'Learning discovers what; Understanding examines why; Teaching uses instruction/facilitation to address how.'],
        ['09 · Cultural Translator', 'Explain implicit cultural logic, mediate misunderstanding, and build confirmation rules without speaking for a whole group.'],
        ['10 · Time orientations', 'Polychronic favours relationship/flexibility; Monochronic favours linear plans/punctuality; manage through the team charter.'],
      ],
    },
    synthesis: {
      title: 'Across weeks: one scenario can test several layers',
      intro: 'Connecting models prevents definition-only revision. Diagnose the system, choose an interaction, then test the cultural explanation and proposed rule.',
      headers: ['Scenario signal', 'First layer', 'Second layer', 'Final action'],
      rows: [
        ['A member withholds dissent', 'Active listening / psychological safety', 'High-context cues + Accommodating/Obliging', 'Structured turns, private dissent channel, individual confirmation'],
        ['Work repeatedly falls through', 'Social loafing or unclear ownership', 'Storming / weak Agile visibility', 'Named owner, visible WIP, checkpoint and follow-up'],
        ['Two leads compete for a resource', 'Compromising under equal power + time pressure', 'Choose suitable leadership/facilitation', 'Temporary middle ground plus later integrated review'],
        ['AI supplies a cultural claim', 'Human verification duty', 'Research critique + anti-stereotyping', 'Check source, sample, method, then ask actual members'],
      ],
    },
    traps: {
      title: 'Six high-frequency distinctions',
      intro: 'MCQs swap adjacent concepts; short answers tempt you into absolute claims.',
      items: [
        ['Collaborating ≠ Compromising', 'Collaborating integrates concerns; Compromising accepts concessions to reach a middle point quickly.'],
        ['Hearing ≠ Active listening', 'Receiving sound is not clarifying, paraphrasing, reflecting feelings, and summarising.'],
        ['Groupthink ≠ Social loafing', 'One suppresses dissent through agreement pressure; the other reduces effort when contribution is invisible.'],
        ['Acceptance ≠ Adaptation', 'Recognising equally complex differences does not yet mean producing behaviour from another worldview.'],
        ['Cultural tendency ≠ individual fact', 'A group study forms a hypothesis; it cannot predict every member.'],
        ['AI assistance ≠ AI authority', 'AI can organise language, not decide, consent, verify, or carry accountability for the team.'],
      ],
    },
    method: {
      title: 'Five-step scenario-answer method',
      intro: 'Return every model to the facts. A definition without application, or advice without rationale, is incomplete.',
      rows: [
        ['1 · Diagnose', 'Name the primary concept/stage/mode and cite the scenario signal.'],
        ['2 · Define', 'Explain the relevant dimensions or mechanism accurately in one or two sentences.'],
        ['3 · Apply', 'Show how specific facts fit; do not merely repeat the definition.'],
        ['4 · Distinguish', 'Explain why the closest alternative is a weaker fit.'],
        ['5 · Act + qualify', 'Recommend direct action and state relevant time, risk, culture, or evidence limits.'],
      ],
      rule: 'Concept → mechanism → scenario evidence → action → limitation.',
    },
    practiceIntro: 'These 30 questions mirror the current `quiz/week02-04` bank. Answer closed-book first, then reveal terminology, application, and qualification.',
    practiceTitles: ['Week 02 · 10 questions', 'Week 03 · 10 questions', 'Week 04 · 10 questions'],
    quizzes: {
      week02: [
        { question: 'Before Survival at Sea, which process best reflects a high-performing team?\nA. Most confident member decides\nB. Individual ranking → agree decision process → compare reasons → collaborate → review against expert\nC. Average numbers\nD. Take the first complete answer', answer: 'Answer: B. It tests effective collective decision-making and the ability to review and adapt under pressure; team advantage depends on process quality.' },
        { question: 'Why can a Social Contract minimise conflict?\nA. Management imposes it\nB. The team co-creates visible, practical expectations for communication, meetings, accountability, and disagreement\nC. It overrides policy\nD. It can never change', answer: 'Answer: B. Co-creation creates ownership and clarifies expectations before conflict. It remains revisable and cannot override organisational policy.' },
        { question: 'Priya silently constructs a rebuttal and misses the rest of the speaker’s explanation. Which listening barrier is this?\nA. Mind-reading\nB. Rehearsing\nC. Quick fixing\nD. Subject changing', answer: 'Answer: B. Rehearsing redirects attention from the continuing message to preparing a response.' },
        { question: 'Give three question types. For each, provide an example, benefit, and suitable stage of a mentor meeting.', answer: 'Open at opening/exploration for detail; Reflective in the middle to check viewpoint or feeling; Closed at closing for choice, commitment, and closure. Hypothetical is valid for option exploration without immediate commitment.' },
        { question: 'A new team first depends on its leader because goals and roles are unclear, then disputes authority, allocation, and methods. Identify Tuckman stages, actions, and why the model is not one-way.', answer: 'Forming: clarify goal, roles, charter, and contribution. Storming: address conflict, decision process, responsibility, and psychological safety. Membership, goals, pressure, or environment can cause regression and loops.' },
        { question: 'Which is an assertive I-statement?\nA. I feel like you do not care\nB. You are irresponsible\nC. I feel worried when I receive no update; I would like an agreed check-in time\nD. Everyone says your communication is unacceptable', answer: 'Answer: C. It gives a genuine feeling, specific event, and constructive request without judging character.' },
        { question: 'What defines parallel thinking in Six Thinking Hats?\nA. Permanent personality hats\nB. Opposing viewpoints at once\nC. Everyone uses the same perspective together, then switches\nD. Black Hat always first', answer: 'Answer: C. Hats are temporary lenses; Blue normally frames and closes the process.' },
        { question: 'Why is Creator → Executor a serious Z-Process short circuit?', answer: 'It skips Advancer user feedback and Refiner critique/prototyping. The intended path is Creator → Advancer → Refiner → Executor.' },
        { question: 'Others know a leader interrupts people, but the leader does not. Where is this in Johari Window, and what reduces it?', answer: 'Blind Spot; seeking and accepting feedback moves the information into the Arena.' },
        { question: 'Compare groupthink and social loafing: mechanism, two warning signs, and two preventive actions for each.', answer: 'Groupthink is defective decision-making under agreement pressure; signs include self-censorship and pressure on dissent; use alternatives, devil’s advocate, low-status-first or external input. Social loafing is reduced effort when contribution is invisible; signs include unclear ownership and uneven work; use named owners, visible progress, checkpoints, and peer accountability.' },
      ],
      week03: [
        { question: 'AI adds a “reply within two hours” rule to a Social Contract, but the team never discussed it and one member cannot comply. Include it? What next?', answer: 'Not in its current form. A contract needs genuine agreement and must be practical, visible, and adaptable. Discuss purpose and constraints, negotiate a workable rule, adopt only after shared understanding, and review later.' },
        { question: 'Explain the three-stage AI-assisted Social Contract workflow, separating AI and human responsibility.', answer: 'Individual agenda: AI structures, people define/review goals. Team minutes: AI organises, people discuss, decide, verify. Contract draft: AI structures verified decisions, people reject invention and confirm agreement. Judgement and accountability remain human.' },
        { question: 'Equal-power product leads need one specialist team; both goals matter moderately and a temporary allocation is due Friday. Which TKI mode, and why not Collaborating?', answer: 'Compromising: moderate assertiveness/cooperativeness fits equal power, time pressure, and a temporary settlement. Collaborating may integrate better but costs more time.' },
        { question: 'Two people both thought they jointly owned testing and waited for the other, repeatedly missing deadlines. Identify the source, one preventive action, and two resolution actions.', answer: 'Unclear roles/expectations. Prevent with one documented accountable owner, supporting roles, and deadline. Resolve by separating people from the factual process, then listen and agree a new ownership model with follow-up.' },
        { question: 'Compare Lewin’s Authoritarian, Participative/Democratic, and Laissez-faire styles, giving one useful context and one impact/risk each.', answer: 'Authoritarian: crisis/inexperience, fast but suppresses participation. Participative: creativity and buy-in, better commitment but slower. Laissez-faire: mature experts, autonomy but weak coordination or late problem discovery.' },
        { question: '“She edited the shared document without telling me.” Use Conflict Iceberg: why is fixing the version insufficient, what may be hidden, and what could you ask?', answer: 'Hidden concerns may include unmet expectations, fairness/power, relationship/history, emotion, or procedure. Ask: “What did you expect before shared work changed, and why is that process important?”' },
        { question: 'Rewrite “You are irresponsible because you never update Jira” as a complete I-statement and identify four parts.', answer: '“I feel anxious when Jira is not updated before stand-up because I cannot see progress or blockers. I would like each owner to update before the meeting.” Feeling, observable behaviour, impact/reason, requested change.' },
        { question: 'After failure, a previously Performing team argues over control, roles, and acceptable behaviour. Which Tuckman stage, and what next?', answer: 'Storming. Address conflict, clarify roles/goals/behaviour, and rebuild Norming shared processes and ground rules.' },
        { question: 'Compare monochronic and polychronic time orientations; give one conflict and two non-stereotyping management practices.', answer: 'Monochronic favours linear time, punctuality, one task; Polychronic accepts simultaneity/flexibility and prioritises relationships. Agree deadlines/tolerances/priorities, confirm understanding, and ask actual preferences rather than infer nationality.' },
        { question: 'An Agile board has much WIP, little completion; stand-ups decide the next task and disruption repeats. Recommend four practices.', answer: 'Any four: prioritised backlog, WIP limits/no multitasking, visible blockers, prepared short stand-ups, remove impediments, interruption buffer, retrospectives, team autonomy plus individual accountability.' },
      ],
      week04: [
        { question: 'One person objects through pauses and hints; another expects explicit criticism and reads silence as agreement. Best explanation?', answer: 'Possible high-context and low-context preferences, locating meaning in contextual cues versus explicit verbal code. Clarify meaning; neither style is inherently more professional.' },
        { question: 'Which TKI–Rahim mapping is correct?\nA. Competing–Integrating\nB. Collaborating–Compromising\nC. Accommodating–Obliging\nD. Avoiding–Dominating', answer: 'Answer: C. Competing maps to Dominating; Collaborating maps to Integrating.' },
        { question: 'What does traditional high-/low-context theory predict about conflict preference?', answer: 'High-context may favour Avoiding/Obliging for harmony; Low-context may favour direct Competing/Dominating. This is a group tendency, not an individual rule.' },
        { question: 'What conclusion best represents Croucher et al. (2012)?', answer: 'High-context groups preferred Avoiding, Obliging, and Compromising; Low-context preferred Dominating; Integrating did not follow a simple split. The theory is useful but non-rigid.' },
        { question: 'AI says a new study proves all Indian members prefer one conflict style and all Irish members another. How do you evaluate it before use?', answer: 'Verify the article, countries, sample, method, and findings; inspect location/representation and self-report limits; separate group tendency from individual claim; test generalisability and modern shifts.' },
        { question: 'Dominating members are crowding out Obliging members in a hybrid global team. Build the required three-point Intercultural Playbook.', answer: '1) Evidence-based challenge treated as a hypothesis; 2) practical rule with structured turns, written dissent, and individual confirmation; 3) Mutual Learning protocol that asks preferences, observes results, and revises without nationality assumptions.' },
        { question: 'What is the crux of DMIS adaptation and integration?', answer: 'Ability to form an alternative cultural experience—to perceive through another cultural worldview. It develops through experience, reflection, and training.' },
        { question: 'Distinguish Mutual Learning, Mutual Understanding, and Mutual Teaching.', answer: 'Learning discovers what through absorbing/asking/relating; Understanding suspends judgement to explain why; Teaching uses instructing/facilitating to determine how to work together.' },
        { question: 'A bicultural member sees “yes” mean “I hear you” to one group and agreement to another. How can they translate, and what are the limits?', answer: 'Explain meanings, check intended interpretation, mediate, and build an explicit confirmation rule. Do not assume everyone is alike, speak permanently for others, or reinforce stereotypes.' },
        { question: 'One member multitasks and changes appointments for relationships; another values punctuality, single-tasking, and stable plans. Best response?', answer: 'Recognise a possible polychronic–monochronic difference and agree deadlines, interruptions, and change rules in the team charter. Do not label either side unprofessional.' },
      ],
    },
    sourcesTitle: 'Content basis',
    sourcesNote: 'Priorities come from Week 02–04 key points calibrated against the Week 01 exam pattern. Practice uses the existing bilingual question bank and excludes unfinished Weeks 05–06 material.',
  },
} as const

function PointGrid({ points }: { points: readonly Point[] }) {
  return (
    <div className="grid gap-3 md:grid-cols-2">
      {points.map(([title, body], index) => <InfoCard key={title} title={title} tone={index < 4 ? 'accent' : index < 7 ? 'blue' : 'plain'}>{body}</InfoCard>)}
    </div>
  )
}

function QuestionBank({ items }: { items: readonly QuizItem[] }) {
  return <QuizAccordion items={items.map((item) => ({ ...item }))} />
}

export default function Chapter02({ locale }: { locale: Locale }) {
  const c = copy[locale]
  const ids = ['map', 'week02', 'week03', 'week04', 'synthesis', 'traps', 'method', 'practice02', 'practice03', 'practice04', 'sources']
  const toc = ids.map((id, index) => ({ id, label: c.toc[index] }))

  return (
    <ChapterLayout chapterId="02" locale={locale} eyebrow="Chapter 02 · Weeks 02–04" title={c.title} subtitle={c.subtitle} summary={c.summary} updated="04 Sep 2026" tags={[...c.tags]} toc={toc}>
      <ContentSection id="map" index="01" title={c.map.title} intro={c.map.intro}>
        <LeadCard label={locale === 'zh' ? '章节主线' : 'Chapter spine'}>{c.map.lead}</LeadCard>
        <div className="mt-4 grid gap-3 lg:grid-cols-3">{c.map.weeks.map(([title, body], index) => <InfoCard key={title} title={title} tone={index === 0 ? 'accent' : index === 1 ? 'coral' : 'blue'}>{body}</InfoCard>)}</div>
      </ContentSection>

      <ContentSection id="week02" index="02" title={c.week02.title} intro={c.week02.intro}><PointGrid points={c.week02.points} /></ContentSection>
      <ContentSection id="week03" index="03" title={c.week03.title} intro={c.week03.intro}><PointGrid points={c.week03.points} /></ContentSection>
      <ContentSection id="week04" index="04" title={c.week04.title} intro={c.week04.intro}><PointGrid points={c.week04.points} /></ContentSection>

      <ContentSection id="synthesis" index="05" title={c.synthesis.title} intro={c.synthesis.intro}>
        <ResponsiveTable headers={[...c.synthesis.headers]} rows={c.synthesis.rows.map((row) => [...row])} />
      </ContentSection>

      <ContentSection id="traps" index="06" title={c.traps.title} intro={c.traps.intro}>
        <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">{c.traps.items.map(([title, body]) => <InfoCard key={title} title={title} tone="warm">{body}</InfoCard>)}</div>
      </ContentSection>

      <ContentSection id="method" index="07" title={c.method.title} intro={c.method.intro}>
        <ResponsiveTable headers={[locale === 'zh' ? '步骤' : 'Step', locale === 'zh' ? '任务' : 'Task']} rows={c.method.rows.map((row) => [...row])} />
        <Callout label="Answer spine">{c.method.rule}</Callout>
      </ContentSection>

      <ContentSection id="practice02" index="08" title={c.practiceTitles[0]} intro={c.practiceIntro}><QuestionBank items={c.quizzes.week02} /></ContentSection>
      <ContentSection id="practice03" index="09" title={c.practiceTitles[1]}><QuestionBank items={c.quizzes.week03} /></ContentSection>
      <ContentSection id="practice04" index="10" title={c.practiceTitles[2]}><QuestionBank items={c.quizzes.week04} /></ContentSection>

      <ContentSection id="sources" index="11" title={c.sourcesTitle}>
        <SourceList items={['week02/key-points.md', 'week03/key-points.md', 'week04/key-points.md', 'quiz/week02-04.md', 'quiz/week02-04-zh_CN.md']} note={c.sourcesNote} />
      </ContentSection>
    </ChapterLayout>
  )
}
