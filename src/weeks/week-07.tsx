import { ExternalLink } from 'lucide-react'
import { QuizAccordion } from '@/components/quiz-accordion'
import { Callout, ContentSection, InfoCard, LeadCard, ResponsiveTable, WeekLayout } from '@/components/week-layout'
import type { Locale } from '@/i18n'

const sources = [
  ['Advanced Communications Techniques', 'visual', null],
  ['Communications Theories', 'visual', null],
  ['FIT5122 - Chapter 4 Complex Communication', 'intro', null],
  ['FIT5122 Communications Theories', 'lecture', null],
  ['Empathy Forecasting', 'article', 'https://www.sketchgroup.com.au/empathy-forecast-successful-communication/'],
  ['Storyboarding for developing a product video', 'article', 'https://www.crazyegg.com/blog/storyboard-a-marketing-video/'],
  ['STAR for structuring responses in interviews', 'article', 'https://www.thebalancemoney.com/what-is-the-star-interview-response-technique-2061629'],
  ['The three key structures of effective communication — Ian Brownlee', 'pdf', null],
  ['FIT5122 Communication Theories and Interpersonal Communication', 'pdf', null],
  ['Euson — Communicating in the 21st Century, Chapter 10', 'reading', null],
  ['Bypassing the brain’s hidden communication barriers', 'pending', null],
] as const

const copy = {
  zh: {
    title: 'Effective Communication', subtitle: '从传递信息到共同理解',
    summary: '沟通的结果不取决于你说了多少，而取决于对方如何理解与回应。本周将受众分析、沟通模型、叙事结构和倾听反馈连接起来，帮助你把复杂信息转化为清晰、可信、可行动的表达。',
    tags: ['10 项已整理 · 1 项待转译', '三种沟通模型', '受众 → 叙事 → 反馈', '12 道自测'],
    toc: ['沟通主线', '三种模型', 'Empathy Forecast', '三种信息结构', '产品视频与故事板', 'STAR', '倾听与提问', 'Johari Window', '综合自测', '材料与边界'],
    overview: {
      title: '理解受众，再设计信息', intro: '课程目标是判断不同受众的需要、选择合适渠道，并用规划和结构化方法提升复杂沟通的效果。',
      lead: 'Intended meaning ≠ sent message ≠ interpreted meaning。发出了信息，不代表对方理解了意图，更不代表已经作出承诺。',
      cards: [['受众与效果', '先明确谁需要知道什么，以及希望对方理解、判断或采取什么行动。不要默认所有受众都有相同知识、兴趣与语境。'], ['形式与结构', '渠道和表达层次都要匹配任务。技术细节可以留在支持文档；重点信息必须能被当前受众理解。'], ['回应与验证', '通过重述、澄清、提问与反馈检查理解。出现误解时，检查整条沟通链，而不是直接责怪接收者。']],
      paradox: '课程 PDF 用 Priestley’s Paradox 提醒我们反思：增加技术层次可能反而减少有效沟通。这是思考工具，不是“越短越好”或“技术必然有害”的定律。',
    },
    models: {
      title: '三种模型，三个诊断视角', intro: '先用 Lasswell 规划，再用 Shannon–Weaver 查找干扰，最后用 Schramm 理解关系与背景。模型互补，不是互相替代。',
      headers: ['模型', '关注点', '应用问题'],
      rows: [['Lasswell', 'Who → Says what → In which channel → To whom → With what effect', '谁适合发言？信息是什么？用什么渠道？受众是谁？希望产生什么效果？'], ['Shannon–Weaver', '信息源 → 编码/发射 → 信道 → 解码/接收 → 目的地；噪声可能使信息失真', '是信号中断、表述不清，还是术语被误解？哪一个环节需要修复？'], ['Schramm', '关系、经验、组织角色、文化与社会环境影响编码、解释和回应', '队友熟悉的背景，导师是否知道？同一个词在双方经验里是否意味着同一件事？']],
      noise: [['技术/外部干扰', '网络断线、声音被环境噪声盖住、设备或平台传输失败。可以改善渠道并确认遗漏内容。'], ['语义/内部干扰', '术语、含糊表达、注意力不足、默认共享知识、文化俚语造成误读。需要澄清意义，而非只提高音量。']],
      note: '原始传输模型侧重信道噪声；课程把 noise 扩展到语义与人际干扰。Schramm 进一步强调共同经验与反馈：收到、理解、同意是不同状态。',
    },
    empathy: {
      title: 'Empathy Forecast：Before → After → Bridge', intro: 'Sketch Group 将 empathy map 从“当前快照”扩展为“预期变化”，帮助团队形成与真实受众相关的语言。',
      cards: [['Before · 现在', '明确一个具体受众，梳理其 thinking、feeling、hearing、seeing、saying、doing，找出痛点和顾虑。'], ['After · 之后', '设想产品或沟通成功后，对方的体验、情绪和行为应发生什么变化；不要只罗列产品功能。'], ['Bridge · 连接', '逐项追问：对方需要听到什么，才可能从 Before 走向 After？把答案转化为关键信息、证据与行动提示。']],
      boundary: 'Empathy Forecast 是团队提出假设的工具，不是真实用户研究的替代品。必须区分“我们想象的需要”与“已经向受众验证的需要”。',
      example: '应用示例（学习页自拟）：导师担心演示只展示功能 → 希望看见可验证的用户价值 → 用一个用户任务、实际结果与明确限制连接两端，再请导师复述其理解。',
    },
    structure: {
      title: 'Brownlee：三种信息结构', intro: '复杂不等于专业。通过与受众已知内容建立联系、控制细节层次和逐步增加复杂度，让他们跟得上推理。',
      cards: [['Known → Unknown', '从受众熟悉并认可的情境出发，明确连接新信息；不要高估其背景知识，也不要低估其理解能力。'], ['General → Specific', '先提供整体框架，再聚焦相关细节。概要在前，支持数据按需展开，避免把全部分析倾倒给听众。'], ['Simple → Complex', '先讲基本元素，再逐步连接关系，建立整体模型；不要求听众一开始就理解完整系统。']],
      example: '同一个产品演示可以同时使用三种结构：已知的预约痛点 → 新方案；整体流程 → 一个典型任务；单步操作 → 多角色协作。三者描述不同维度，不是三个只能选一个的模板。',
      caution: '作者讨论的 Yes Set 不应成为操纵受众同意的借口。专业表达仍须保持证据、风险与限制透明；快速表达也不等于有效表达。',
    },
    storyboard: {
      title: '产品视频：先讲价值，再拍画面', intro: '故事板是镜头级的计划：用缩略图、台词、旁白、镜头与转换说明，提前让团队看见同一部视频。',
      arc: [['Opener', '用相关情境、问题或悬念获得注意。'], ['Problem statement', '说明这个受众面对的具体困难。'], ['Solution', '展示产品如何解决问题，让功能服务于价值。'], ['Call to action', '明确下一步，给受众足够时间理解并行动。']],
      steps: [['Timeline', '确定叙事顺序与各段时间。'], ['Key scenes', '选择推动理解与行动的关键镜头。'], ['Detail', '决定细节密度，确保主旨不被淹没。'], ['Script', '写清旁白和对话，再与画面对应。'], ['Tool', '选简单可协作的工具，并统一画幅比例。'], ['Thumbnails', '画出场景；火柴人也能验证想法。'], ['Annotations', '补充台词、灯光、镜头角度与编号。'], ['Cuts & transitions', '标明切换、强调点和画面衔接。']],
      workflow: 'Workshop → Script → Storyboard → Shoot → Edit → Final video。课程图特别强调：删除不服务于主旨的内容，剪辑时让画面动作与旁白同步。',
      examples: 'Crazy Egg 文章以 Dropbox 的普遍痛点、Facebook 的短功能场景、Salesforce 的销售工作流程说明受众差异。这里依据文章描述整理，没有声称观看其二级外链视频，也不将文中旧营销数字视为当前效果保证。',
    },
    star: {
      title: 'STAR：用经历证明能力', intro: '适合行为式面试问题，例如“说说你曾经如何处理……”。准备与岗位能力相关的真实案例，而不是背诵泛泛的自我评价。',
      cards: [['Situation', '交代具体背景与挑战，让听众知道发生了什么。'], ['Task', '说明你承担的责任与目标，不要只重复项目背景。'], ['Action', '解释你采取了什么行动、如何处理挑战；区分个人贡献和团队贡献。'], ['Result', '说明结果或学到什么。有证据时量化，没有证据时不要编造数字。']],
      example: '示例（自拟，非个人经历）：演示前出现任务冲突（S）；我负责恢复排期（T）；我澄清依赖并组织重新分工（A）；团队完成约定演示，并在复盘中记录沟通改进点（R）。',
      note: 'STAR 是“经历与证据”的结构；产品视频四段式是“问题与行动”的结构。两者都从受众需要出发，但不能机械互换。',
    },
    listening: {
      title: '倾听与提问：让反馈闭环', intro: 'Euson 指定阅读为书中 318–323 页（本地 PDF 第 12–17 页）。倾听是主动澄清，不是沉默地等待自己发言。',
      barriersTitle: '11 种倾听障碍',
      barriers: [['Subject changing', '因无聊或不适转移话题。'], ['Daydreaming', '随联想走神，失去上下文。'], ['Distracted', '看似在听，注意力却在别处。'], ['Just give me the facts', '只收集事实，忽略感受与隐含意义。'], ['Mind-reading', '过度揣测，不向对方求证。'], ['Rehearsing', '忙着排练反驳，漏听后续信息。'], ['Comparing', '不断比较自己与对方，偏离信息。'], ['Push my buttons', '被敏感话题触发，失去客观性。'], ['Stereotyping', '按身份或外表判断，忽略实际观点。'], ['Quick fix', '尚未理解就打断并给出方案。'], ['Tuning out', '因长期不被听见而形成选择性忽视。']],
      responsesTitle: '六种主动倾听回应',
      responses: [['Clarifying check', '澄清用语与具体意思：“你说的完成包括哪些部分？”'], ['Accuracy check', '重述事实并求证：“我理解主要阻碍是依赖未就绪，对吗？”'], ['Feelings check', '暂定地反映感受，让对方纠正：“你似乎担心自己的意见没被考虑？”'], ['Summarising check', '把主要事实与感受汇总，检查是否遗漏。'], ['Noncommittal acknowledgement', '表明在听，但不表示同意、批准或承诺。'], ['Door opener', '邀请继续解释，为对方保留发言空间。']],
      questionHeaders: ['提问方式', '目的与注意点'],
      questions: [['Straightforward probe', '直接探查核心问题；需要温和建立信任时避免过于生硬。'], ['Open', '开放式问题促进信息、关系与探索；不适合单独用于最后确认。'], ['Closed', '封闭式问题确认事实、选择和承诺；过早使用会压缩表达。'], ['Objective criteria', '寻找双方认可的标准，将争论从意见转向证据。'], ['Testing', '提问者已知答案，用来检验能力或诚实；须警惕审讯感。'], ['Softening up', '从易同意的问题建立关系；不能把顺从当作真实共识。'], ['Hypothetical', '用假设探索选项，不使双方立刻作出承诺。'], ['Reflective', '反映感受并邀请进一步说明。'], ['Leading', '问题暗示期望答案，不是中立调查。'], ['Rhetorical', '不真正期待答案；可能表达立场，也可能令对方防御。'], ['“Stupid” / basic', '回到基础问题，揭示大家假装理解的前提。'], ['Trick compliment', '借赞美争取时间；属于策略，可能损害信任。'], ['Back on track', '礼貌地把话题拉回议程。'], ['False dilemma', '把更多可能性缩成两个选项；是逻辑谬误，会破坏创造性解决方案。']],
      boundary: '这是材料中的提问类型清单，不是全部都值得采用的建议。专业实践应优先真诚澄清；acknowledgement ≠ agreement，理解感受也不意味着接受所有主张。',
    },
    johari: {
      title: 'Johari Window：反馈与适当披露', intro: '课程图中的补充模型；另以 Euson 330–332 页核对，超出本周指定的 318–323 页核心阅读范围。',
      headers: ['区域', '自己知道？', '别人知道？'], rows: [['Arena · 开放区', '是', '是'], ['Blind spot · 盲区', '否', '是'], ['Facade · 隐藏区', '是', '否'], ['Unknown · 未知区', '否', '否']],
      note: '主动寻求并听取反馈有助于缩小盲区；适当自我披露可缩小隐藏区。披露须考虑信任、风险、隐私和文化语境，不应强迫队友公开个人信息。',
    },
    review: {
      title: '把模型用到同一个场景', intro: '情境：向不熟悉技术的导师演示产品。这些是依据材料自拟的学习自测，不是 Moodle 测验原题或考试预测。',
      quiz: [['沟通成功是否等于消息已发送？', '不是。需要检查对方是否理解原本意图，以及是否产生目标回应；发送、理解、同意、承诺不能混为一谈。'], ['用 Lasswell 规划一次导师演示，要问什么？', '谁发言、说什么、用什么渠道、面向谁、希望产生什么效果。要考虑谁具有知识和可信度，而非默认所有话都由自己说。'], ['断线与术语误解都叫噪声，修复方式一样吗？', '不一样。断线需要修复传输并补齐遗漏；术语误解需要解释词义、补充背景和确认理解。'], ['为什么同一句话对队友和导师产生不同理解？', 'Schramm 强调共享经验、关系、角色与文化语境不同；需要给导师补充团队内部默认已知的背景。'], ['Empathy Forecast 相比单张 empathy map 多了什么？', '在 Before 快照之外增加 After 目标状态，再找出连接二者所需的信息；仍须验证受众假设。'], ['Brownlee 的三个结构能否同时使用？', '可以。Known→Unknown 连接背景，General→Specific 控制范围，Simple→Complex 逐步建立复杂关系。'], ['产品视频四段式是什么？', 'Opener → Problem statement → Solution → Call to action。不要以功能列表代替与受众有关的价值故事。'], ['故事板与脚本有什么区别？', '脚本说明说什么；故事板进一步把语言与镜头、顺序、角度、灯光和转换对应起来，是拍摄前的共同计划。'], ['STAR 中 Task 与 Action 如何区分？', 'Task 是你的责任或目标；Action 是你为完成责任实际采取的行为；Result 要补上结果或学习。'], ['导师表达顾虑时立刻给方案有什么风险？', '可能是 Quick fix：尚未理解事实与感受就抢答。先澄清、重述并邀请补充，再讨论方案。'], ['开放式、封闭式与诱导式问题分别适合做什么？', '开放式用于探索，封闭式用于确认与收束；诱导式预设答案，不应伪装成中立反馈收集。'], ['如何减小 Johari 盲区，又不强迫披露？', '邀请具体反馈并认真听取，区分反馈与自我披露。只分享与任务相关、符合信任和隐私边界的信息。']],
    },
    sourcesTitle: '材料索引与证据边界', sourcesIntro: '11 项直接材料中，10 项已用于整理，1 段音频待转译。课程原始 PDF、音视频、字幕和图片不随页面上传；公开文章提供来源链接。',
    sourceLabels: { visual: '课程图 · 已核对内容', intro: '原生字幕 · 2:04 · 15 条', lecture: '原生字幕 · 12:55 · 107 条', article: '公开文章 · 本地正文', pdf: '课程 PDF · 已阅读', reading: '核心阅读 318–323；Johari 补充 330–332', pending: '5:45 · 待 OmniVerse 转译 · 未用于内容推导' },
    pending: '音频摘要尚未转译', pendingBody: 'Bypassing the brain’s hidden communication barriers 已下载，但没有找到原生字幕。本页不推测其内容，留待下一轮 OmniVerse 转译后补充。',
    boundary: '两段视频按原生字幕整理，模型名称以课程 PDF 校正；正文案例和自测明确为自拟。故事板文章的二级视频链接未另行观看。Chapter 04 考点整理暂为占位，不影响本页学习。',
  },
  en: {
    title: 'Effective Communication', subtitle: 'From information transfer to shared meaning',
    summary: 'Communication is measured by what people understand and how they respond, not by how much you say. Connect audience analysis, communication models, narrative structure and listening to make complex ideas clear, credible and actionable.',
    tags: ['10 sources covered · 1 transcript pending', 'Three communication models', 'Audience → Narrative → Feedback', '12 self-checks'],
    toc: ['Core principle', 'Three models', 'Empathy Forecast', 'Three structures', 'Video & storyboards', 'STAR', 'Listening & questions', 'Johari Window', 'Self-checks', 'Sources & boundaries'],
    overview: {
      title: 'Understand the audience before designing the message', intro: 'The course asks you to evaluate audience needs, choose an appropriate medium, and use planning and structure to improve complex communication.',
      lead: 'Intended meaning ≠ sent message ≠ interpreted meaning. Sending information does not establish understanding, agreement or commitment.',
      cards: [['Audience & effect', 'Identify who needs to know what, and what you want them to understand, decide or do. Do not assume shared knowledge, interest or context.'], ['Medium & structure', 'Match both channel and level of detail to the task. Supporting documents can hold technical detail; the central message must make sense to this audience.'], ['Response & verification', 'Check understanding through restatement, clarification, questions and feedback. Diagnose the communication system before blaming the receiver.']],
      paradox: 'The course PDF uses Priestley’s Paradox to question whether additional technological layers reduce effective communication. Treat it as a prompt for reflection, not a law that shorter messages are always better or technology always harms communication.',
    },
    models: {
      title: 'Three models, three diagnostic lenses', intro: 'Plan with Lasswell, locate interference with Shannon–Weaver, and examine relationships and context with Schramm. The models complement each other.',
      headers: ['Model', 'Focus', 'Application'],
      rows: [['Lasswell', 'Who → Says what → In which channel → To whom → With what effect', 'Who should speak? What is the message? Which medium? Which audience? What outcome?'], ['Shannon–Weaver', 'Source → encoding/transmitter → channel → decoding/receiver → destination; noise can distort transmission', 'Is the problem a lost signal, unclear expression or misunderstood terminology? Which part needs repair?'], ['Schramm', 'Relationships, experience, organisational roles, culture and social context shape interpretation and response', 'Does the mentor share the team’s background? Does the same word have the same meaning in both people’s experience?']],
      noise: [['Technical / external interference', 'A dropped connection, environmental noise or transmission failure. Improve the channel and confirm what was missed.'], ['Semantic / internal interference', 'Jargon, ambiguity, inattention, assumed knowledge or cultural idioms. Clarify meaning rather than merely increasing volume.']],
      note: 'The original transmission model focuses on channel noise; the course extends noise to semantic and interpersonal interference. Schramm highlights shared experience and feedback: receiving, understanding and agreeing remain different states.',
    },
    empathy: {
      title: 'Empathy Forecast: Before → After → Bridge', intro: 'Sketch Group extends an empathy map from a present-state snapshot to an anticipated change, helping teams develop language relevant to their audience.',
      cards: [['Before', 'Choose a specific audience and explore thinking, feeling, hearing, seeing, saying and doing. Identify concerns and pain points.'], ['After', 'Imagine how experience, feelings and behaviour should change if the product or communication succeeds. Move beyond a feature list.'], ['Bridge', 'Ask what the person needs to hear to move between the two states. Turn those answers into key messages, evidence and action cues.']],
      boundary: 'An Empathy Forecast generates hypotheses; it does not replace real user research. Separate imagined needs from needs validated with the audience.',
      example: 'Original study example: a mentor fears a feature-only demo → wants demonstrable user value → bridge the gap with one user task, an observed result and explicit limitations, then ask the mentor to restate the takeaway.',
    },
    structure: {
      title: 'Brownlee: three structures for information', intro: 'Complexity does not prove professionalism. Connect to what people know, manage detail, and build complexity progressively so the audience can follow.',
      cards: [['Known → Unknown', 'Start with familiar, accepted context and explicitly connect new information. Do not overestimate background knowledge or underestimate intelligence.'], ['General → Specific', 'Offer an overall frame before narrowing to relevant detail. Present the key points first and make supporting analysis available when needed.'], ['Simple → Complex', 'Introduce basic elements and connect them step by step. Do not require the audience to understand the complete system immediately.']],
      example: 'One demo can use all three: familiar booking difficulties → a new solution; overall workflow → one task; one simple action → multi-role coordination. These are different dimensions, not mutually exclusive templates.',
      caution: 'The author’s discussion of a Yes Set is not a licence to manipulate agreement. Keep evidence, risks and limitations transparent; fast communication is not necessarily effective communication.',
    },
    storyboard: {
      title: 'Product video: establish value before filming', intro: 'A storyboard is a shot-level plan: thumbnails, dialogue, voiceover, camera directions and transitions let the team see the same video before production.',
      arc: [['Opener', 'Earn attention with a relevant situation, question or tension.'], ['Problem statement', 'Identify a specific difficulty faced by this audience.'], ['Solution', 'Show how the product addresses the problem; connect features to value.'], ['Call to action', 'Make the next step explicit and allow time to understand and act.']],
      steps: [['Timeline', 'Set the narrative order and timing.'], ['Key scenes', 'Choose shots that advance understanding and action.'], ['Detail', 'Set the level of detail without burying the message.'], ['Script', 'Write dialogue and voiceover, then connect them to visuals.'], ['Tool', 'Choose a practical collaborative tool and consistent aspect ratio.'], ['Thumbnails', 'Sketch the scenes; stick figures can test the idea.'], ['Annotations', 'Add words, lighting, camera angles and shot numbers.'], ['Cuts & transitions', 'Mark changes, emphasis and visual continuity.']],
      workflow: 'Workshop → Script → Storyboard → Shoot → Edit → Final video. The course visual emphasises cutting material that does not serve the message and synchronising on-screen action with voiceover.',
      examples: 'Crazy Egg describes Dropbox’s broadly relatable problem, Facebook’s short feature scenarios and Salesforce’s sales workflow to illustrate audience differences. This summary uses the article’s descriptions, not independent viewing of its linked videos; historical marketing figures are not current performance guarantees.',
    },
    star: {
      title: 'STAR: demonstrate capability through experience', intro: 'Use it for behavioural interview prompts such as “Tell me about a time…”. Prepare real examples relevant to the role, not generic claims about yourself.',
      cards: [['Situation', 'Establish the specific context and challenge.'], ['Task', 'Explain your responsibility or goal, not merely the project background.'], ['Action', 'Describe what you did to address the challenge. Distinguish your contribution from the team’s contribution.'], ['Result', 'Explain the outcome or learning. Quantify when evidence exists; never invent a number.']],
      example: 'Fictional study example: a task conflict emerged before a demo (S); I owned restoring the schedule (T); I clarified dependencies and coordinated reassignment (A); the team delivered the agreed demo and recorded communication improvements in its retrospective (R).',
      note: 'STAR structures experience and evidence; the product-video arc structures a problem and a call to action. Both are audience-centred, but they are not interchangeable templates.',
    },
    listening: {
      title: 'Listening and questioning close the feedback loop', intro: 'The assigned Euson reading is printed pages 318–323 (pages 12–17 of the local PDF). Listening means actively clarifying, not waiting silently for your turn.',
      barriersTitle: 'Eleven barriers to listening',
      barriers: [['Subject changing', 'Rerouting the conversation out of boredom or discomfort.'], ['Daydreaming', 'Following an association and losing the thread.'], ['Distracted', 'Appearing attentive while focusing elsewhere.'], ['Just give me the facts', 'Ignoring feelings and implicit meaning while collecting facts.'], ['Mind-reading', 'Overinterpreting without checking.'], ['Rehearsing', 'Preparing a rebuttal instead of hearing the next point.'], ['Comparing', 'Comparing yourself with the speaker rather than following the message.'], ['Push my buttons', 'Reacting automatically to a sensitive topic.'], ['Stereotyping', 'Judging identity or appearance instead of the ideas.'], ['Quick fix', 'Interrupting with a solution before understanding the problem.'], ['Tuning out', 'Learning selective inattention after repeatedly not being heard.']],
      responsesTitle: 'Six active-listening responses',
      responses: [['Clarifying check', 'Clarify specific meaning: “Which parts does complete include?”'], ['Accuracy check', 'Restate facts and verify: “Is the main blocker the unavailable dependency?”'], ['Feelings check', 'Tentatively reflect feelings and allow correction: “Are you concerned your view was not considered?”'], ['Summarising check', 'Bring together the central facts and feelings, checking for omissions.'], ['Noncommittal acknowledgement', 'Signal attention without agreement, approval or commitment.'], ['Door opener', 'Invite further explanation and preserve room for the speaker.']],
      questionHeaders: ['Question type', 'Purpose and caution'],
      questions: [['Straightforward probe', 'Get directly to the issue; bluntness can undermine gentle rapport-building.'], ['Open', 'Explore information and build rapport; insufficient alone for final confirmation.'], ['Closed', 'Confirm facts, choices and commitments; premature use restricts exploration.'], ['Objective criteria', 'Seek mutually accepted standards rather than trading opinions.'], ['Testing', 'Ask a question whose answer you know to check competence or honesty; avoid an interrogation dynamic.'], ['Softening up', 'Build rapport through easy agreement; compliance is not necessarily genuine consensus.'], ['Hypothetical', 'Explore options without immediate commitment.'], ['Reflective', 'Reflect feelings and invite elaboration.'], ['Leading', 'Prompt a preferred answer rather than investigate neutrally.'], ['Rhetorical', 'Expect no real answer; may express a position or provoke defensiveness.'], ['“Stupid” / basic', 'Return to fundamentals and expose assumed understanding.'], ['Trick compliment', 'Use praise to gain time; a tactic that may damage trust.'], ['Back on track', 'Politely return the discussion to the agenda.'], ['False dilemma', 'Reduce several possibilities to two; a logical fallacy that undermines creative solutions.']],
      boundary: 'This is a taxonomy from the reading, not an endorsement of every tactic. Prefer genuine clarification: acknowledgement ≠ agreement, and recognising feelings does not mean accepting every claim.',
    },
    johari: {
      title: 'Johari Window: feedback and appropriate disclosure', intro: 'A supplementary model in the course visual, checked against Euson pages 330–332; it is beyond the assigned core reading on pages 318–323.',
      headers: ['Area', 'Known to self?', 'Known to others?'], rows: [['Arena', 'Yes', 'Yes'], ['Blind spot', 'No', 'Yes'], ['Facade', 'Yes', 'No'], ['Unknown', 'No', 'No']],
      note: 'Seeking and listening to feedback can reduce the blind spot; appropriate self-disclosure can reduce the facade. Consider trust, risk, privacy and cultural context rather than requiring teammates to expose personal information.',
    },
    review: {
      title: 'Apply the models to one situation', intro: 'Scenario: explain a product to a non-technical mentor. These original study questions are derived from the materials, not Moodle quiz questions or exam predictions.',
      quiz: [['Does sending a message establish successful communication?', 'No. Check whether the audience understood the intended meaning and produced the intended response. Sending, understanding, agreement and commitment are different.'], ['What does Lasswell ask you to plan for a mentor demo?', 'Who speaks, what they say, which channel they use, whom they address and what effect they seek. Consider expertise and credibility when choosing the speaker.'], ['Do a dropped connection and jargon need the same repair?', 'No. Repair transmission and recover omissions for the former; explain terminology, supply context and confirm meaning for the latter.'], ['Why can the same sentence mean different things to a teammate and a mentor?', 'Schramm highlights different shared experience, relationships, roles and cultural contexts. Supply background that the team may take for granted.'], ['What does Empathy Forecast add to a single empathy map?', 'An After state and the messages that bridge it from the Before snapshot. The audience assumptions still need validation.'], ['Can Brownlee’s three structures work together?', 'Yes. Known→Unknown connects context; General→Specific manages scope; Simple→Complex builds relationships progressively.'], ['What is the four-part product-video arc?', 'Opener → Problem statement → Solution → Call to action. Connect features to audience value rather than listing them.'], ['How does a storyboard differ from a script?', 'A script specifies words; a storyboard connects them to shots, sequence, angles, lighting and transitions, providing a shared plan before filming.'], ['How do Task and Action differ in STAR?', 'Task is your responsibility or goal; Action is what you actually did to fulfil it. Result adds the outcome or learning.'], ['What is risky about immediately solving the mentor’s concern?', 'It may be a Quick fix: answering before understanding facts and feelings. Clarify, restate and invite elaboration before proposing solutions.'], ['How do open, closed and leading questions differ?', 'Open questions explore; closed questions confirm and conclude; leading questions presume a preferred answer and should not masquerade as neutral feedback collection.'], ['How can you reduce a Johari blind spot without forcing disclosure?', 'Invite specific feedback and listen. Distinguish feedback from self-disclosure; share only what is appropriate to the task, trust and privacy boundaries.']],
    },
    sourcesTitle: 'Sources and evidence boundaries', sourcesIntro: 'Ten of the eleven direct materials inform this guide; one audio transcript is pending. Original course PDFs, media, captions and images are not uploaded with the page. Public readings link to their sources.',
    sourceLabels: { visual: 'Course visual · reviewed', intro: 'Native captions · 2:04 · 15 cues', lecture: 'Native captions · 12:55 · 107 cues', article: 'Public article · local text', pdf: 'Course PDF · reviewed', reading: 'Core pp. 318–323; Johari supplement pp. 330–332', pending: '5:45 · OmniVerse transcription pending · not used for claims' },
    pending: 'Audio summary transcription pending', pendingBody: 'Bypassing the brain’s hidden communication barriers is downloaded, but no native captions were found. This page does not infer its content; it can be added after OmniVerse transcription in the next round.',
    boundary: 'Video summaries use native captions, with model names checked against the course PDF. Examples and self-checks are explicitly original. Videos linked within the storyboard article were not independently viewed. Chapter 04 Exam Focus remains a placeholder while this Own-time guide is available.',
  },
} as const

export default function Week07({ locale }: { locale: Locale }) {
  const c = copy[locale]
  const ids = ['overview', 'models', 'empathy', 'structure', 'storyboard', 'star', 'listening', 'johari', 'review', 'sources']
  return (
    <WeekLayout weekId="07" locale={locale} eyebrow="Week 07 · Effective communication" title={c.title} subtitle={c.subtitle} summary={c.summary} updated="07 Sep 2026" tags={[...c.tags]} toc={ids.map((id, i) => ({ id, label: c.toc[i] }))}>
      <ContentSection id="overview" index="01" title={c.overview.title} intro={c.overview.intro}>
        <LeadCard label={locale === 'zh' ? '核心原则' : 'Core principle'}>{c.overview.lead}</LeadCard>
        <div className="mt-4 grid gap-3 md:grid-cols-3">{c.overview.cards.map(([title, body]) => <InfoCard key={title} title={title} tone="blue">{body}</InfoCard>)}</div>
        <Callout label="Priestley’s Paradox">{c.overview.paradox}</Callout>
      </ContentSection>
      <ContentSection id="models" index="02" title={c.models.title} intro={c.models.intro}>
        <ResponsiveTable headers={[...c.models.headers]} rows={c.models.rows.map(row => [...row])} />
        <div className="mt-4 grid gap-3 md:grid-cols-2">{c.models.noise.map(([title, body]) => <InfoCard key={title} title={title} tone="accent">{body}</InfoCard>)}</div>
        <Callout label={locale === 'zh' ? '模型边界' : 'Model boundary'}>{c.models.note}</Callout>
      </ContentSection>
      <ContentSection id="empathy" index="03" title={c.empathy.title} intro={c.empathy.intro}>
        <div className="grid gap-3 md:grid-cols-3">{c.empathy.cards.map(([title, body], i) => <InfoCard key={title} title={`${i + 1} · ${title}`} tone="accent">{body}</InfoCard>)}</div>
        <Callout label={locale === 'zh' ? '假设 ≠ 证据' : 'Hypothesis ≠ evidence'}>{c.empathy.boundary}</Callout>
        <InfoCard title={locale === 'zh' ? '应用示例' : 'Application example'} className="mt-4" tone="warm">{c.empathy.example}</InfoCard>
      </ContentSection>
      <ContentSection id="structure" index="04" title={c.structure.title} intro={c.structure.intro}>
        <div className="grid gap-3 md:grid-cols-3">{c.structure.cards.map(([title, body]) => <InfoCard key={title} title={title} tone="blue">{body}</InfoCard>)}</div>
        <Callout label={locale === 'zh' ? '组合使用' : 'Combine the structures'}>{c.structure.example}</Callout>
        <Callout label={locale === 'zh' ? '专业边界' : 'Professional boundary'}>{c.structure.caution}</Callout>
      </ContentSection>
      <ContentSection id="storyboard" index="05" title={c.storyboard.title} intro={c.storyboard.intro}>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">{c.storyboard.arc.map(([title, body], i) => <InfoCard key={title} title={`${i + 1} · ${title}`} tone="accent">{body}</InfoCard>)}</div>
        <div className="mt-4 grid gap-3 md:grid-cols-2">{c.storyboard.steps.map(([title, body], i) => <InfoCard key={title} title={`${String(i + 1).padStart(2, '0')} · ${title}`}>{body}</InfoCard>)}</div>
        <Callout label="Production workflow">{c.storyboard.workflow}</Callout>
        <InfoCard title={locale === 'zh' ? '文章案例' : 'Article examples'} className="mt-4" tone="warm">{c.storyboard.examples}</InfoCard>
      </ContentSection>
      <ContentSection id="star" index="06" title={c.star.title} intro={c.star.intro}>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">{c.star.cards.map(([title, body]) => <InfoCard key={title} title={title} tone="blue">{body}</InfoCard>)}</div>
        <Callout label={locale === 'zh' ? '自拟示例' : 'Fictional example'}>{c.star.example}</Callout>
        <Callout label={locale === 'zh' ? '结构辨析' : 'Distinction'}>{c.star.note}</Callout>
      </ContentSection>
      <ContentSection id="listening" index="07" title={c.listening.title} intro={c.listening.intro}>
        <h3 className="mb-3 text-lg font-bold">{c.listening.barriersTitle}</h3>
        <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">{c.listening.barriers.map(([title, body]) => <InfoCard key={title} title={title} tone="warm">{body}</InfoCard>)}</div>
        <h3 className="mb-3 mt-6 text-lg font-bold">{c.listening.responsesTitle}</h3>
        <div className="mb-5 grid gap-3 md:grid-cols-2 lg:grid-cols-3">{c.listening.responses.map(([title, body]) => <InfoCard key={title} title={title} tone="accent">{body}</InfoCard>)}</div>
        <ResponsiveTable headers={[...c.listening.questionHeaders]} rows={c.listening.questions.map(row => [...row])} />
        <Callout label={locale === 'zh' ? '理解 ≠ 同意' : 'Understanding ≠ agreement'}>{c.listening.boundary}</Callout>
      </ContentSection>
      <ContentSection id="johari" index="08" title={c.johari.title} intro={c.johari.intro}>
        <ResponsiveTable headers={[...c.johari.headers]} rows={c.johari.rows.map(row => [...row])} />
        <Callout label={locale === 'zh' ? '信任与边界' : 'Trust and boundaries'}>{c.johari.note}</Callout>
      </ContentSection>
      <ContentSection id="review" index="09" title={c.review.title} intro={c.review.intro}>
        <QuizAccordion items={c.review.quiz.map(([question, answer]) => ({ question, answer }))} />
      </ContentSection>
      <ContentSection id="sources" index="10" title={c.sourcesTitle} intro={c.sourcesIntro}>
        <div className="grid gap-3 sm:grid-cols-2">{sources.map(([title, kind, url]) => <InfoCard key={title} title={title} tone={kind === 'pending' ? 'warm' : 'plain'}><p>{c.sourceLabels[kind]}</p>{url && <a href={url} target="_blank" rel="noreferrer" className="mt-2 inline-flex items-center gap-2 font-semibold text-[var(--week-accent)] underline underline-offset-4">{locale === 'zh' ? '阅读原文' : 'Read source'}<ExternalLink className="size-3.5" /></a>}</InfoCard>)}</div>
        <Callout label={c.pending}>{c.pendingBody}</Callout>
        <Callout label={locale === 'zh' ? '证据边界' : 'Evidence boundary'}>{c.boundary}</Callout>
      </ContentSection>
    </WeekLayout>
  )
}
