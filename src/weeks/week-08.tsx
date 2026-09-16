import { ExternalLink } from 'lucide-react'
import { QuizAccordion } from '@/components/quiz-accordion'
import { Callout, ContentSection, InfoCard, LeadCard, ResponsiveTable, WeekLayout } from '@/components/week-layout'
import type { Locale } from '@/i18n'

const sources = [
  ['Effective Business Communication', 'visual', ''],
  ['Complex Communication part 2', 'lecture', 'https://monash.au.panopto.com/Panopto/Pages/Viewer.aspx?id=45e7aecb-df56-4497-8c1e-afea006d14b3'],
  ['Communication In Organisations', 'organisation', 'https://monash.au.panopto.com/Panopto/Pages/Viewer.aspx?id=64254f3c-c267-4cd4-8652-afea0071a8b8'],
  ['Visual Presentations', 'presentation', 'https://monash.au.panopto.com/Panopto/Pages/Viewer.aspx?id=5e97d7a5-e3cd-4e83-8e7b-afea00745c0d'],
  ['How to use visuals in presentations', 'article', 'https://virtualspeech.com/blog/visual-aids-presentation'],
  ['10 tips for presenting data', 'incomplete', 'https://www.observepoint.com/blog/10-tips-for-presenting-data/'],
  ['Tips for choosing which chart to use', 'article', 'https://www.skillsyouneed.com/num/graphs-charts.html'],
  ['How to Tell a Story With Data — A Guide for Beginners', 'optional', 'https://venngage.com/blog/data-storytelling/'],
  ['How to Give a Flawless Elevator Pitch', 'pitch', 'https://learning.monash.edu/mod/resource/view.php?id=6110309'],
  ['Using elevator pitches to promote yourself', 'optional', 'https://www.thebalancemoney.com/elevator-speech-examples-and-writing-tips-2061976'],
  ['Effective Communication — Email Dos and Donts', 'email', 'https://learning.monash.edu/mod/resource/view.php?id=6110312'],
  ['Workplace Etiquette: The Unwritten Rules of Business Success', 'etiquette', 'https://doi.org/10.1002/ert.20152'],
  ['Remove friction from your business communication', 'pending', ''],
] as const

const copy = {
  zh: {
    subtitle: '把复杂信息组织成受众能理解、判断并采取行动的专业表达。',
    summary: '从目的与受众出发，选择结构和渠道，再用报告、pitch、邮件与图表支持具体行动。依据 Week 08 Own-time 的 12 项可核对材料整理；另 1 段音频待转录。',
    tags: ['沟通规划', '组织沟通', 'PSB · Pitch', '商业报告', '数据表达', '职场礼仪'],
    overview: '先确定希望受众做什么',
    lead: '目的 → 受众 → 关键信息 → 时机与渠道 → 理解、反馈与行动。专业表达的价值在于减少对方理解和决策的负担。',
    sections: [
      { id: 'planning', title: '规划与结构：先问问题，再组织信息', intro: 'Complex Communication part 2 · 00:48–05:22。课程口头称为 “five Ws”，实际列出 Why、Who、What、When、How；不要与连续追问原因的 Five Whys 混淆。', headers: ['工具', '如何使用'], rows: [
        ['Why / Who / What / When / How', '目的是什么？受众需要知道什么、已有何种背景？核心信息是什么？何时需要收到？怎样传递才容易按原意理解？'],
        ['Known → Unknown', '从受众已知、接受的背景，连接到新的问题、洞察或方案。'],
        ['General → Specific', '先给总览和情境，再逐步进入细节，避免一开始就堆技术信息。'],
        ['Simple → Complex', '先解释基本要素，再建立要素间关系和复杂限制。'],
        ['Problem → Solution → Benefit（PSB）', '说明谁遇到什么问题、方案如何应对、会带来什么价值，适用于推介机会或想法。'],
        ['What? → So what? → Now what?', '交代情况、解释与受众的关系、提出下一步行动。'],
      ], note: '这些结构可以组合使用；选择依据是受众与目的。字幕中的 “PSP”等拼写是识别噪声，此处按讲解内容与课程图统一为 PSB。' },
      { id: 'channels', title: '组织沟通：正式与非正式渠道互补', intro: 'Communication In Organisations · 00:43–07:32。良好沟通有助于共同决策、解决问题、明确角色、减少返工和建立信任，也有助于参与感与对变更的理解。', headers: ['渠道', '用途与优势', '风险与应对'], rows: [
        ['正式 Formal', '沿预定流程传递政策、报告、正式邮件与会议决定；向下发布指令，向上汇报、建议或投诉。提供官方记录与一致依据。', '审批可能缓慢，措辞可能官僚或被不同理解；必须保留澄清和反馈机会。正式发布不等于大家已认同。'],
        ['非正式 Informal', '日常对话、快速讨论、即时反馈；有利于探索想法、澄清问题和及时化解小摩擦。', '可能漏掉成员、产生传言或多种版本；重要决定需要回到共同可查的正式记录。'],
      ], note: '自拟应用：先与同事讨论排期冲突，再把同意的负责人、期限与变更记录发到正式渠道，并确认相关人都收到。渠道是否正式取决于组织流程，不仅取决于软件。' },
      { id: 'reports', title: '商业报告：让管理者能据此作决定', intro: 'Complex Communication part 2 · 05:36–08:45。重点是理论的实际应用、发现和建议；读者是需要决策的管理层。', headers: ['部分', '应该回答什么'], rows: [
        ['Executive summary', '可独立阅读的整份报告摘要：目的、主要发现、结论、建议。课程建议通常不超过一页；忙碌读者不必读正文也能把握结论。'],
        ['Introduction', '解释目的、背景与范围，告诉读者报告将讨论什么；不能替代包含实际发现的 executive summary。'],
        ['分析正文', '用与决策有关的证据支持发现，说明实际影响；简洁分节，避免把正文写成理论教材。'],
        ['Recommendations', '单独列出明确建议、为什么重要，以及可实施的步骤；让行动不被埋在长段落中。'],
      ], note: '课堂对脚注、简化引文的建议属于商业文体语境，不等于作业可以不引用。提交时以当前 assessment brief 与引用要求为准。' },
      { id: 'pitch', title: 'Elevator pitch：引起兴趣并获得下一次对话', intro: '课堂 · 08:58–10:44；Geoffrey James 的课程 PDF · 第 2–5 页。课堂以约 30 秒说明；可选求职阅读建议 30–60 秒。重点是简明、有针对性，时长服从具体场景。', headers: ['结构 / 要素', '要表达的内容'], rows: [
        ['课堂 PSB + differentiator', '谁遇到什么问题 → 你的解决办法 → 对受众的好处；补充为什么你的办法与现有选择不同。'],
        ['阅读 Benefit → Differentiator → Ask', '从客户能获得的实际效果切入，给出可核对的差异点，对方有兴趣时请求后续会面。'],
        ['Benefit ≠ feature', '“库存系统”是产品类别；减少积压才是客户价值。量化收益需要证据，不能照抄阅读里的示例数字。'],
        ['Differentiator ≠ slogan', '用具体、可独立衡量的事实支撑差异，避免只有“领先”“最好”或“我们很兴奋”。'],
        ['Ask ≠ close the sale', '提出具体、低门槛的下一步，如需求讨论；不要急着要求成交，也不要只递名片等待对方联系。'],
        ['可选：个人介绍', '我是谁、有什么相关技能或经历、希望寻找什么机会。按听众调整，留出回应空间；练习但不背成机械独白。'],
      ], note: '自拟产品示例（非真实业绩）：学生经常找不到小组最新文件；我们的共享清单把交付物、负责人和状态放在一起，帮助减少版本混乱；不同于单纯网盘，它按任务显示状态。能否约十分钟了解你们的协作流程？' },
      { id: 'email', title: '专业邮件：让收件人一次读懂请求', intro: '课堂 · 10:55–13:19；Email Dos and Donts · 8 页。核心是有目的、可独立理解且便于回应。', headers: ['检查点', '行动'], rows: [
        ['主题与身份', '主题写出事项或请求；对不熟悉你的收件人，说明姓名、课程或项目和必要背景。'],
        ['目的与结构', '开头说清为何写信，再提供必要信息与具体请求；多个相关问题可编号，不相关事项拆分。'],
        ['语气与收件人', '专业、自然、礼貌；克制愤怒与讽刺，只抄送需要知情的人，不滥用 Reply all 或 Urgent。'],
        ['附件、链接与校对', '正文保留关键内容；需要附件时检查版本、文件名、大小、权限和是否真的附上，发送前人工校对。'],
        ['隐私与渠道', '邮件可能被转发，不要假定私密；敏感或容易误解的话题考虑通话或面谈，再记录结论。'],
        ['回应与跟进', '无法立即答复可先确认收到并给出预计回复时间；适当跟进一次仍无回应时，考虑更合适的渠道。'],
      ], note: '批判性阅读：课程明确提醒部分邮件建议过时。“避免附件”应理解为减少无谓负担；课堂提到约 24 小时回复是讲者的一般期望，并非所有机构的固定规定。遵循实际紧急程度与约定。' },
      { id: 'visuals', title: '视觉辅助：每张图都服务一个重点', intro: 'Visual Presentations · 00:34–05:31；VirtualSpeech 阅读。图像可概括、解释、展示趋势和吸引注意，但必须帮助受众理解当前信息。', headers: ['阶段 / 媒介', '使用原则'], rows: [
        ['准备', '先确定想让受众理解或做什么；一张图一个重点，保持字体、颜色、位置一致，检查远处是否看得清。'],
        ['讲解', '展示时立即解释它与当前观点的关系；面向受众，避免逐字念幻灯片，使用完及时隐藏。'],
        ['Slides / charts', '减少正文和装饰；标题表达结论，图表突出支持结论的证据；动画只在解释过程时使用。'],
        ['Whiteboard / flip chart', '适合现场推导、讨论与收集意见；字要大，留时间记笔记，小型媒介不适合很大的听众群。'],
        ['Handouts / posters', '讲义适合详细资料，但发放时间会影响注意力；海报要考虑观看距离和观众规模。'],
        ['Video / objects / demo', '先说明看什么、为什么看，只保留必要片段；演示动作放慢，避免实物分散听众注意。'],
        ['排练与备用方案', '检查场地和设备，请他人解释他们从图中看到了什么；准备设备失效时仍能完成表达的方案。'],
      ], note: '课堂提出关键信息应在约 1–2 秒内明显，是设计检查目标。阅读中的视觉学习比例和记忆倍数没有在本摘要中独立验证，不作为学习规律或效果保证。' },
      { id: 'charts', title: '选图：先确定比较关系', intro: 'SkillsYouNeed 与 ObservePoint 阅读。数据本身不会自动讲清故事；图的类型、标题、尺度与标注共同决定读者如何理解。', headers: ['想让受众看到', '适用形式', '注意'], rows: [
        ['类别间的差异', 'Bar / column chart', '类别分开，便于比较长度；不要用截断基线夸大差异。'],
        ['连续数值的分布', 'Histogram', '把连续变量分箱，相邻区间连接；区别于比较独立类别的 bar chart。'],
        ['随时间变化', 'Line chart', '保持时间顺序与尺度清楚；用注释解释关键事件。'],
        ['整体如何组成', 'Pie / stacked bar', '分块必须属于同一整体，总计 100%；若需精细比较或类别多，优先考虑条形形式。'],
        ['两个数值变量的关系', 'Cartesian / scatter plot', '明确两个坐标的变量与单位；看到关联本身不证明因果（本摘要的分析提醒）。'],
        ['表格内的小型趋势', 'Sparkline', '用于空间有限时概览趋势；精确读取需要补充数值或尺度。'],
      ], note: '材料差异：ObservePoint 建议饼图至多 3 项；SkillsYouNeed 说超过 5–6 项通常不合适；课堂也强调少分块。应记住共同原则——同一整体、分块少且易比较，不把某个阈值当作通用定律。' },
      { id: 'data', title: '数据呈现：10 项原则与叙事流程', intro: 'ObservePoint 的十项建议；Venngage 的数据叙事阅读为 Optional。美观应帮助理解，不能靠图形效果放大未经证实的结论。', headers: ['ObservePoint 原则', '复习要点'], rows: [
        ['1 · 呈现方式很重要', '设计的目的在于让信息可理解，不只是装饰。'],
        ['2 · 降低数字负担', '合理分隔大数，保留有意义的小数，数值列右对齐；精密位数不等于准确性。'],
        ['3 · 提高 data-pixel ratio', '减少重复图例、厚边框和无意义背景；保留理解所需的单位、标签和尺度。'],
        ['4 · 避免装饰性 3D', '三维透视增加判断长度和数值的负担。'],
        ['5 · 谨慎使用饼图', '只用于少量整体组成，避免用多个饼图作精细比较。'],
        ['6 · 选对图', '根据趋势、类别差异或整体组成选择，而不是依赖软件默认。'],
        ['7 · 不无故混合图型', '同一图中的多个系列应有清楚的比较目的，不能只是省空间。'],
        ['8 · 不用坐标轴误导', '清楚标示尺度与截断；阅读建议需要放大细微变化时，同时给出零起点的全貌。'],
        ['9 · 不只依靠颜色', '补充文字、符号或其他可辨别标记，使黑白打印与色觉差异不妨碍理解。'],
        ['10 · 有目的地用色', '同一指标跨图保持同色，用强调色引导注意，避免任意彩虹配色。'],
      ], note: 'Optional 叙事六步：倾听受众 → 找到有关的数据 → 确定故事线 → 做设计草稿 → 检查盲点并向受众求反馈 → 完善并分享。解释数据为什么重要，但不要让预设故事凌驾于证据。ObservePoint 另提醒：需要同时监控的 dashboard 重点应能在一个视图内把握。' },
      { id: 'etiquette', title: '职场礼仪：用可观察的行为建立信任', intro: 'Ann Marie Sabath，2007，Employment Relations Today 34(2)，53–59。原文的 12 项建议按主题归纳如下。', headers: ['原文主题', '可迁移的原则与边界'], rows: [
        ['1–2 · 提早到场、兑现承诺', '为准备与交通留时间；说明何时回复或交付，并守住承诺，尊重他人的时间。'],
        ['3–5 · 介绍、表达、建立联系', '帮助彼此认识，先组织想法再发言；真诚提问和记住对方关注点，而不是只谈自己。'],
        ['6–8 · 着装与配饰', '了解组织与场合的预期。原文带有年代、文化和性别化规定，不宜把衣着、配饰数量当作能力或晋升资格的标准。'],
        ['9 · 会议', '邀请中列开始和结束时间，提前发议程，明确参与角色；会后记录结果与期限。参会者提前准备并围绕议程发言。'],
        ['10 · 语音留言', '说明姓名、机构、来意、联系方式与方便回拨的时间，简洁且可行动。'],
        ['11 · 邮件', '内外部都保持专业；主题明确、内容简洁、语气友好，避免无关群发与虚假紧急标记。'],
        ['12 · 商务用餐', '重视交流与照顾来宾；具体座位、餐具和剩食规则取决于文化及场合，不能机械套用。'],
      ], note: '复习时区分“原文主张”与“当下应用”：可保留尊重、准备、清晰和可靠等原则；对旧文中的外表判断、固定话术及文化惯例做情境化评估。' },
    ],
    reviewTitle: '自测：把原则用到情境里',
    reviewIntro: '以下为依据材料自拟的学习检查，不是 Moodle 官方测验或考题预测。',
    quiz: [
      ['Why / Who / What / When / How 与 Five Whys 有什么区别？', '前者用于规划沟通的目的、受众、内容、时机和渠道；后者是反复追问原因。课堂口头称 five Ws，但实际包括 How。'],
      ['政策变更只在午餐时口头通知，有什么不足？', '信息可能传播快，但覆盖不全、版本不一致、无法查证。应保留正式记录，并用讨论回应疑问。'],
      ['Executive summary 可以只写报告将讨论什么吗？', '不够。这更像 introduction。Executive summary 需要实际发现、主要结论和建议，并能独立阅读。'],
      ['“我们的 App 使用 AI”为什么还不是 benefit？', '它描述功能或技术。Benefit 应说明对特定用户或业务的价值，并以证据支撑；不能凭空承诺效率提升。'],
      ['PSB 和 Benefit–Differentiator–Ask 如何配合？', 'PSB 说明问题、方案和价值；后者强调受众收益、可核对的差异与后续邀约。可以组合，但应清楚区分各自来自何处。'],
      ['给导师发邮件，主题“Help”应怎样改？', '自拟改写：“FIT5122：请确认报告建议部分的范围”。正文交代身份、已查阅的要求、具体疑问和所需回应，语气简洁礼貌。'],
      ['邮件没在几分钟内回复，是否该不断重发？', '不应默认即时回复。按紧急程度和沟通约定合理等待；必要时适当跟进或改用更适合的渠道。'],
      ['展示年龄分布和部门人数，要选同一种柱状图吗？', '年龄等连续变量分箱用 histogram；部门是独立类别，用 bar chart。要依据变量与比较目的区分。'],
      ['为什么不用 12 个分块的饼图比较各月变化？', '分块多难比较，而且饼图表达同一整体的组成。随时间的趋势通常用折线图；类别差异用条形图。'],
      ['如何修正只用红绿区分成败的图？', '加入清楚的文字、符号或其他标记，保持色彩含义一致，并检查黑白状态下是否仍可理解。'],
      ['数据故事写得有说服力就够了吗？', '不够。还需核对数据与尺度、解释情境，向目标受众检查理解，并检视自己对数据和听众的假设。'],
      ['应怎样使用 2007 年职场礼仪阅读？', '识别守时、承诺、会议准备和尊重等可迁移原则；对性别化着装、配饰和用餐细则保留年代与文化语境。'],
    ],
    sourcesTitle: '来源与覆盖范围',
    sourcesIntro: '13 项直接材料中，12 项用于本摘要。视频依据 240 条原生字幕归纳；两项 Optional 阅读明确标记。课程原图、视频和 PDF 不随站点发布。',
    sourceLabels: { visual: '课程概览图 · 已目视核对', lecture: '13:38 · 114 条原生字幕', organisation: '7:56 · 66 条原生字幕', presentation: '6:51 · 60 条原生字幕', article: '指定网页阅读 · 本地正文', incomplete: '本地正文 · 迁站后部分公式和内嵌图表缺失', optional: 'Optional · 本地正文', pitch: '课程 PDF · 5 页', email: '课程 PDF · 8 页 · 按课程提示批判性阅读', etiquette: '期刊全文 · 印刷页 53–59 · 2007 年', pending: '5:33 音频 · 待转录 · 未用于内容主张' },
    pending: '音频摘要待转录',
    pendingBody: 'Remove friction from your business communication 已下载，但没有字幕或文字稿；本页不推断其内容，转录后再补充。',
    boundary: '字幕可能有识别错误，本页为综合整理而非逐字引文。ObservePoint 缺失的图表和公式没有补造；数字示例不等于真实成效。材料间的阈值差异与旧文的情境限制已在对应章节说明。',
  },
  en: {
    subtitle: 'Turn complex information into professional communication people can understand and act on.',
    summary: 'Start with purpose and audience, select a structure and channel, then use reports, pitches, email and visuals to support action. Based on 12 verifiable Week 08 Own-time materials; one audio transcript is pending.',
    tags: ['Planning', 'Organisational channels', 'PSB · Pitch', 'Business reports', 'Data presentation', 'Etiquette'],
    overview: 'Start with the action your audience needs to take',
    lead: 'Purpose → audience → key message → timing and channel → understanding, feedback and action. Professional communication reduces the effort needed to understand and decide.',
    sections: [
      { id: 'planning', title: 'Planning and structure: ask before arranging', intro: 'Complex Communication part 2 · 00:48–05:22. The lecture calls these “five Ws” but lists Why, Who, What, When and How. This is different from the repeated-cause Five Whys technique.', headers: ['Tool', 'How to apply it'], rows: [
        ['Why / Who / What / When / How', 'Define the objective; the audience’s needs and background; the key message; when it is needed; and the delivery method most likely to convey the intended meaning.'],
        ['Known → Unknown', 'Connect accepted background to a new problem, insight or solution.'],
        ['General → Specific', 'Establish the overview and context before narrowing to detail.'],
        ['Simple → Complex', 'Explain basic elements before adding relationships and constraints.'],
        ['Problem → Solution → Benefit (PSB)', 'Explain whose problem is being addressed, how the solution works and why its outcome matters. Useful for an opportunity or idea.'],
        ['What? → So what? → Now what?', 'Describe the situation, its significance to this audience and the next action.'],
      ], note: 'Structures can be combined. Choose for the audience and purpose. Caption spellings such as “PSP” are recognition noise; this guide uses PSB, consistent with the explanation and course visual.' },
      { id: 'channels', title: 'Organisational communication: combine formal and informal', intro: 'Communication In Organisations · 00:43–07:32. Clear communication supports decisions, problem solving, role clarity, productivity, trust, engagement and understanding of change.', headers: ['Channel', 'Purpose and strengths', 'Risks and response'], rows: [
        ['Formal', 'Predefined procedures for policies, reports, official email and meeting decisions. Downward instructions and upward reports, suggestions or complaints provide an official record and consistent reference.', 'Approval can be slow, language impersonal and interpretation uneven. Allow clarification and feedback; distribution alone does not establish buy-in.'],
        ['Informal', 'Everyday conversations, quick discussions and immediate feedback help explore ideas, clarify uncertainty and resolve minor frustrations.', 'People can be missed, rumours spread and versions diverge. Capture important decisions in a shared official record.'],
      ], note: 'Original application: discuss a scheduling conflict with colleagues, then record agreed owners, dates and changes through the formal channel and check that everyone affected received them. Formality depends on organisational process, not just the software.' },
      { id: 'reports', title: 'Business reports: support a management decision', intro: 'Complex Communication part 2 · 05:36–08:45. Focus on applying theory to practical findings and recommendations for management.', headers: ['Part', 'What it should answer'], rows: [
        ['Executive summary', 'A standalone account of the whole report: purpose, main findings, conclusions and recommendations. The lecture suggests usually no more than one page, allowing a busy reader to grasp the outcome without the body.'],
        ['Introduction', 'Purpose, background and scope: what the report will address. It cannot replace an executive summary containing actual findings.'],
        ['Analysis', 'Use decision-relevant evidence to support findings and explain practical consequences. Keep sections concise rather than reproducing a theory textbook.'],
        ['Recommendations', 'Give recommendations their own section. State the action, why it matters and tangible implementation steps.'],
      ], note: 'The lecture’s advice on footnotes and lighter citation styles concerns business writing. It does not remove assessment referencing requirements: follow the current brief.' },
      { id: 'pitch', title: 'Elevator pitches: earn interest and a next conversation', intro: 'Lecture · 08:58–10:44; Geoffrey James course PDF · pages 2–5. The lecture uses roughly 30 seconds; the optional careers reading suggests 30–60 seconds. Keep it concise and adapt to the occasion.', headers: ['Structure / element', 'What to communicate'], rows: [
        ['Lecture: PSB + differentiator', 'Who has the problem → how your solution addresses it → the benefit; add why it differs from existing choices.'],
        ['Reading: Benefit → Differentiator → Ask', 'Lead with the customer’s business outcome, support a concrete distinction and request a follow-up meeting when interest is shown.'],
        ['Benefit ≠ feature', 'An inventory system is a product category; reduced excess stock is customer value. Quantified benefits require evidence, not copied example figures.'],
        ['Differentiator ≠ slogan', 'Use specific, independently measurable facts rather than unsupported claims of leadership, superiority or enthusiasm.'],
        ['Ask ≠ close the sale', 'Request a clear, modest next step such as a needs discussion. Avoid premature closing or merely handing over a card and waiting.'],
        ['Optional: introducing yourself', 'Say who you are, the relevant skills or experience you offer and the opportunity you seek. Tailor to the listener, allow a response and practise without sounding robotic.'],
      ], note: 'Fictional product example, not measured performance: students struggle to find their team’s latest files. Our shared checklist brings deliverables, owners and status together to reduce version confusion. Unlike a file folder alone, it displays status by task. Could we arrange ten minutes to understand your team’s workflow?' },
      { id: 'email', title: 'Professional email: make the request clear in one reading', intro: 'Lecture · 10:55–13:19; Email Dos and Donts · 8 pages. Make messages purposeful, self-contained and easy to answer.', headers: ['Check', 'Action'], rows: [
        ['Subject and identity', 'Name the issue or request in the subject. For unfamiliar recipients, give your name, course or project and essential background.'],
        ['Purpose and organisation', 'State why you are writing, provide necessary context and make a specific request. Number related questions; separate unrelated topics.'],
        ['Tone and recipients', 'Be professional, natural and courteous. Avoid angry or sarcastic replies; copy only relevant people and use Reply all and Urgent selectively.'],
        ['Attachments, links and proofreading', 'Keep the key message in the body. When files are needed, check version, name, size, permissions and actual attachment; proofread before sending.'],
        ['Privacy and channel', 'Messages may be forwarded. Consider a call or conversation for sensitive or easily misunderstood issues, then document the conclusion.'],
        ['Response and follow-up', 'Acknowledge receipt with an expected response time if the answer needs work. After an appropriate follow-up, consider another channel instead of repeated emails.'],
      ], note: 'Read critically, as Moodle requests: “avoid attachments” means avoiding unnecessary recipient effort. The lecturer’s roughly 24-hour expectation is contextual advice, not a universal service rule. Follow urgency and agreed expectations.' },
      { id: 'visuals', title: 'Visual aids: one purpose for every visual', intro: 'Visual Presentations · 00:34–05:31; VirtualSpeech reading. Visuals can summarise, clarify, show trends and sustain attention when they support the current message.', headers: ['Stage / medium', 'Principle'], rows: [
        ['Preparation', 'Define the intended understanding or action. Keep one key point per visual, use consistent typography and colour, and check readability from the back of the room.'],
        ['Delivery', 'Explain the visual’s relevance as it appears. Face the audience, avoid reading slides aloud and hide the aid when it is no longer needed.'],
        ['Slides / charts', 'Reduce prose and decoration. Give charts a message-led title and evidence that supports it. Animate only when it explains something.'],
        ['Whiteboard / flip chart', 'Useful for live explanation and gathering ideas. Write large, allow note-taking time and match the medium to audience size.'],
        ['Handouts / posters', 'Handouts carry detail, but their timing affects attention. Posters need adequate viewing distance and audience access.'],
        ['Video / objects / demonstrations', 'Explain what to watch and why, use only relevant excerpts and demonstrate slowly. Objects can compete for attention.'],
        ['Rehearsal and contingency', 'Check the venue and equipment. Ask someone what they understood from the visual and prepare a way to communicate if equipment fails.'],
      ], note: 'The lecture’s roughly 1–2-second takeaway is a design check. This guide does not independently validate the article’s visual-learning percentages or memory multipliers and does not treat them as guarantees.' },
      { id: 'charts', title: 'Chart choice: identify the relationship first', intro: 'SkillsYouNeed and ObservePoint readings. Data does not explain itself: type, title, scale and annotation guide interpretation.', headers: ['Intended relationship', 'Useful form', 'Check'], rows: [
        ['Differences between categories', 'Bar / column chart', 'Separate categories for length comparison. Do not exaggerate differences with a truncated baseline.'],
        ['Distribution of a continuous variable', 'Histogram', 'Group values into adjoining intervals; distinguish this from bars for separate categories.'],
        ['Change over time', 'Line chart', 'Keep time order and scales clear; annotate relevant events.'],
        ['Composition of a whole', 'Pie / stacked bar', 'Parts must belong to one whole and total 100%. Consider bars for many categories or precise comparisons.'],
        ['Relationship between numeric variables', 'Cartesian / scatter plot', 'Identify variables and units on both axes. Association alone does not prove causation (an analytical caution added in this guide).'],
        ['Small trends within a table', 'Sparkline', 'Useful when space is limited; precise reading needs additional values or scale information.'],
      ], note: 'Compare the sources: ObservePoint recommends at most three pie segments; SkillsYouNeed says more than five or six is usually unsuitable; the lecture also favours few segments. Remember the shared principle: a real whole, few parts and an easy comparison, rather than a universal numerical cutoff.' },
      { id: 'data', title: 'Data presentation: ten checks and a storytelling process', intro: 'ObservePoint’s ten recommendations; the Venngage data-storytelling reading is Optional. Appearance should aid understanding without amplifying unsupported conclusions.', headers: ['ObservePoint principle', 'Revision takeaway'], rows: [
        ['1 · Presentation matters', 'Design for comprehension rather than decoration.'],
        ['2 · Make numbers approachable', 'Group large numbers, use meaningful decimal precision and right-align numeric columns. Precision is not accuracy.'],
        ['3 · Increase the data-pixel ratio', 'Remove redundant legends, heavy borders and decorative clutter while retaining necessary units, labels and scales.'],
        ['4 · Avoid decorative 3D', 'Perspective adds work to judging lengths and values.'],
        ['5 · Use pie charts cautiously', 'Reserve them for a few parts of a whole; avoid multiple pies for precise comparisons.'],
        ['6 · Choose the right chart', 'Match trends, category differences or composition rather than accepting software defaults.'],
        ['7 · Do not mix types without a reason', 'Combined series need a clear shared purpose, not merely a desire to save space.'],
        ['8 · Do not mislead with axes', 'Label scales and truncation clearly. The reading recommends pairing a zoomed view with a zero-based overview for small changes.'],
        ['9 · Do not rely on colour alone', 'Add labels, symbols or other cues so colour-vision differences and monochrome printing do not remove meaning.'],
        ['10 · Use colour intentionally', 'Keep series colours consistent across charts and use emphasis selectively.'],
      ], note: 'Optional storytelling workflow: listen to the audience → identify relevant data → outline the story arc → draft the design → check blind spots with feedback → refine and share. Explain why the data matters without forcing it into a predetermined story. ObservePoint’s bonus dashboard advice is to keep information that must be monitored together visible in one view.' },
      { id: 'etiquette', title: 'Workplace etiquette: build trust through behaviour', intro: 'Ann Marie Sabath, 2007, Employment Relations Today 34(2), 53–59. The original twelve recommendations are grouped below.', headers: ['Original topics', 'Transferable principle and boundary'], rows: [
        ['1–2 · Arrive early and honour commitments', 'Allow preparation and travel time. State when you will respond or deliver and meet the commitment.'],
        ['3–5 · Introductions, speaking and connection', 'Help people introduce themselves, collect your thoughts before speaking and show sincere interest through questions and remembered concerns.'],
        ['6–8 · Clothing and accessories', 'Understand organisational and situational expectations. The article contains dated, culturally specific and gendered prescriptions; accessory counts and appearance should not become standards of competence or promotion eligibility.'],
        ['9 · Meetings', 'Specify start and finish times, circulate an agenda and clarify roles; record outcomes and deadlines. Participants prepare and keep contributions relevant.'],
        ['10 · Voice mail', 'Give name, organisation, purpose, contact details and a suitable callback time in a concise message.'],
        ['11 · Email', 'Maintain professionalism internally and externally, with meaningful subjects, concise content and courtesy. Avoid irrelevant mass messages and false urgency.'],
        ['12 · Business meals', 'Prioritise conversation and guests’ comfort. Seating, utensils and leaving food on a plate depend on cultural and situational norms.'],
      ], note: 'Distinguish the author’s prescriptions from present application: retain respect, preparation, clarity and reliability while critically evaluating appearance judgments, fixed scripts and cultural conventions.' },
    ],
    reviewTitle: 'Self-checks: apply the principles',
    reviewIntro: 'Original study questions derived from the materials, not Moodle official questions or exam predictions.',
    quiz: [
      ['How does Why / Who / What / When / How differ from Five Whys?', 'The first plans purpose, audience, message, timing and channel. Five Whys repeatedly asks about causes. The lecture calls its planning list five Ws but includes How.'],
      ['What is missing if a policy change is announced only over lunch?', 'Rapid conversation can miss people, create inconsistent versions and leave no reference. Provide an official record and use discussion for clarification.'],
      ['Can an executive summary only say what the report will cover?', 'No. That resembles an introduction. An executive summary includes actual findings, conclusions and recommendations and stands on its own.'],
      ['Why is “our app uses AI” not yet a benefit?', 'It describes technology. A benefit explains value to a particular user or business and requires support; do not invent efficiency claims.'],
      ['How can PSB and Benefit–Differentiator–Ask work together?', 'PSB explains the problem, solution and value. The reading highlights customer impact, an evidenced distinction and a follow-up invitation. They can be combined while retaining their different emphases.'],
      ['How would you improve an email subject of “Help” to a tutor?', 'Original rewrite: “FIT5122: please clarify the scope of the recommendations section”. Identify yourself, the guidance already checked, the specific question and the response needed, courteously and concisely.'],
      ['Should you resend repeatedly if an email is unanswered after minutes?', 'Do not assume email is instant. Follow urgency and agreed expectations; use an appropriate follow-up or another channel if necessary.'],
      ['Would ages and departmental headcounts use the same bars?', 'A continuous age distribution grouped into intervals uses a histogram. Departments are separate categories for a bar chart. Match the variable and comparison.'],
      ['Why avoid a twelve-slice pie for monthly change?', 'Many segments are hard to compare and pies communicate composition of one whole. Use a line for change over time or bars for category differences.'],
      ['How would you repair a chart that only uses red and green for outcomes?', 'Add clear labels, symbols or other cues, keep colour meanings consistent and check whether the message survives monochrome reproduction.'],
      ['Is a persuasive data story sufficient?', 'No. Check evidence and scales, explain context, seek audience feedback and examine assumptions about both the data and the audience.'],
      ['How should the 2007 etiquette reading be applied?', 'Transfer punctuality, reliable commitments, meeting preparation and respect. Retain historical and cultural context for gendered dress, accessories and dining prescriptions.'],
    ],
    sourcesTitle: 'Sources and coverage',
    sourcesIntro: 'Twelve of thirteen direct materials inform this guide. Video summaries use 240 native caption cues; the two Optional readings are marked. Original course images, videos and PDFs are not uploaded with the site.',
    sourceLabels: { visual: 'Course overview image · visually reviewed', lecture: '13:38 · 114 native caption cues', organisation: '7:56 · 66 native caption cues', presentation: '6:51 · 60 native caption cues', article: 'Assigned web reading · local text', incomplete: 'Local text · some formulas and embedded charts lost after migration', optional: 'Optional · local text', pitch: 'Course PDF · 5 pages', email: 'Course PDF · 8 pages · critical reading requested by Moodle', etiquette: 'Full journal article · printed pp. 53–59 · 2007', pending: '5:33 audio · transcription pending · not used for claims' },
    pending: 'Audio summary transcription pending',
    pendingBody: 'Remove friction from your business communication is downloaded, but no captions or transcript are available. This guide does not infer its content; it can be added after transcription.',
    boundary: 'Native captions may contain recognition errors; this guide synthesises rather than quotes them. Missing ObservePoint charts and formulas have not been reconstructed. Example figures are not evidence of performance. Source differences and the context of older advice are noted in their sections.',
  },
} as const

export default function Week08({ locale }: { locale: Locale }) {
  const c = copy[locale]
  const toc = [{ id: 'overview', label: locale === 'zh' ? '本周主线' : 'Overview' }, ...c.sections.map(({ id, title }) => ({ id, label: title.split('：')[0].split(':')[0] })), { id: 'review', label: locale === 'zh' ? '自测' : 'Self-checks' }, { id: 'sources', label: locale === 'zh' ? '来源与边界' : 'Sources' }]
  return (
    <WeekLayout weekId="08" locale={locale} eyebrow="Week 08 · Professional discourse" title="Business Communication" subtitle={c.subtitle} summary={c.summary} updated="16 Sep 2026" tags={[...c.tags]} toc={toc}>
      <ContentSection id="overview" index="01" title={c.overview}>
        <LeadCard label={locale === 'zh' ? '核心原则' : 'Core principle'}>{c.lead}</LeadCard>
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
            {url && <a href={url} target="_blank" rel="noreferrer" className="mt-2 inline-flex items-center gap-2 font-semibold text-[var(--week-accent)] underline underline-offset-4">{locale === 'zh' ? '查看来源' : 'View source'}<ExternalLink className="size-3.5" /></a>}
          </InfoCard>
        ))}</div>
        <Callout label={c.pending}>{c.pendingBody}</Callout>
        <Callout label={locale === 'zh' ? '证据边界' : 'Evidence boundary'}>{c.boundary}</Callout>
      </ContentSection>
    </WeekLayout>
  )
}
