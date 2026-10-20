import { ExternalLink } from 'lucide-react'
import { QuizAccordion } from '@/components/quiz-accordion'
import { Callout, ContentSection, InfoCard, LeadCard, ResponsiveTable, WeekLayout } from '@/components/week-layout'
import type { Locale } from '@/i18n'

const sources = [
  ['Algorithmic Hijack', 'https://learning.monash.edu/course/view.php?id=46900&section=49', 'attention', 'Course infographic · four-panel visual review'],
  ['How Algorithms Secretly Control Your Choices', 'https://learning.monash.edu/course/view.php?id=46900&section=49', 'attention', 'Audio · 5:46 · local automatic transcription'],
  ['Building Strong Arguments', 'https://monash.au.panopto.com/Panopto/Pages/Viewer.aspx?id=526cb676-d7c7-4a53-89bd-b002017f6c1c', 'arguments', 'Video · 11:05; tips 01:04–03:40; biases 03:40–06:15; fallacies 06:15–10:50'],
  ['The Ethics of IT systems', 'https://monash.au.panopto.com/Panopto/Pages/Viewer.aspx?id=071a01db-ce84-4019-ba50-b00201782a71', 'technologies', 'Video · 19:13; responsibility 00:39–02:40; five technologies 02:40–18:55'],
  ['Social media addiction', 'https://www.theguardian.com/technology/2017/oct/05/smartphone-addiction-silicon-valley-dystopia', 'attention', 'Reading · The Guardian · October 2017'],
  ['Infiltration of privacy', 'https://venturebeat.com/business/thought-detection-ai-has-infiltrated-our-last-bastion-of-privacy', 'surveillance', 'Reading · VentureBeat · 13 February 2021'],
  ['The Uses and Abuses of Customer Profiling', 'https://www.destinationcrm.com/Articles/CRM-News/Daily-News/The-Uses-and-Abuses-of-Customer-Profiling-47449.aspx', 'profiling', 'Reading · destinationCRM · 18 April 2000'],
  ['National ID matching', 'https://ia.acs.org.au/content/ia/article/2022/government-building-national-facial-recognition-database.html', 'surveillance', 'Reading · ACS Information Age · 2022'],
  ['Targeting products by surveilling the sick', 'https://themarkup.org/citizen-browser/2021/05/06/how-big-pharma-finds-sick-users-on-facebook', 'targeting', 'Reading · The Markup · 6 May 2021'],
  ['Facebook approves alcohol, gambling and dating ads targeting teens', 'https://www.abc.net.au/news/2021-04-28/facebook-instagram-teenager-tageted-advertising-alcohol-vaping/100097590', 'targeting', 'Reading · ABC News · 28 April 2021'],
  ['Is privacy dead?', 'https://www.ft.com/content/c4288d72-a7d0-11e9-984c-fac8325aaa04', 'privacy', 'Reading · Financial Times · 19 July 2019'],
  ['ChatGPT is a data privacy nightmare', 'https://theconversation.com/chatgpt-is-a-data-privacy-nightmare-if-youve-ever-posted-online-you-ought-to-be-concerned-199283', 'genai', 'Reading · The Conversation · 8 February 2023'],
  ['Two data points are enough to spot you in open transport records', 'https://pursuit.unimelb.edu.au/articles/two-data-points-enough-to-spot-you-in-open-transport-records', 'reidentification', 'Reading · Pursuit, University of Melbourne · 15 August 2019'],
] as const

const copy = {
  zh: {
    subtitle: '技术能做到，不等于应该做；数据可得，不等于可以随意使用。',
    summary: 'Chapter 5 · The Law, Ethics, and Privacy。结合 Week 11 Own-time 的两段视频、信息图、音频和九篇阅读，梳理注意力设计、画像、定向广告、监控与再识别的伦理风险，并学习如何用证据和清晰推理为立场辩护。',
    tags: ['Should I build it?', '注意力经济', '用户画像', '定向广告', '隐私与同意', '再识别', '论证与谬误'],
    overview: '从“能不能建”到“该不该建、怎样建”',
    lead: '识别技术的预期与非预期后果 → 找出谁的数据被收集、被推断、被出售 → 检查同意是否真实、情境是否改变 → 评估弱势群体与再识别风险 → 用事实、理由和对反方意见的回应来论证选择。Week 10 提供伦理框架与准则；Week 11 把它们用于真实技术案例。',
    sections: [
      { id: 'responsibility', title: '专业责任：先问“应该建吗？”', intro: 'The Ethics of IT systems · 00:39–02:40；Social media addiction 阅读中“like”按钮发明者的反思。', headers: ['问题', '复习要点'], rows: [
        ['非预期后果', '“like”按钮原本为了传播正面反馈，后来成为认可与受欢迎程度的代理指标，被指影响年轻人的行为与心理健康。发明者 Rosenstein 说：人们常怀着最好的意图做事，却带来负面后果。'],
        ['Can I build it? → Should I build it?', '讲者把问题从技术可行性转向：这项技术应不应该建？可能有哪些后果？怎样构建才能把负面影响降到最低？'],
        ['技术与伦理挑战同时处理', '在规划阶段就预判后果，发布后也要持续检查实际损害，而不是事后才补救。'],
        ['连接 Week 10', '使用伦理框架与 ACS 准则，特别是识别哪些利益相关者会受影响，再比较方案。'],
        ['改变行为的软件', '当数据或软件改变人们的行为、或让人做原本不会做的事时，责任随之增加：需要审查目的、手段与对用户自主的影响。'],
      ], note: '“没有恶意”不是充分辩护。Guardian 阅读中的设计者多数并非存心让人上瘾，但在广告激励下逐步发现有效的“钩子”。专业判断要覆盖可预见的副作用。' },
      { id: 'technologies', title: '五类新兴技术：益处与代价并列', intro: 'The Ethics of IT systems · 02:40–18:55；术语与案例已对照幻灯片核对。', headers: ['技术', '益处 → 代价'], rows: [
        ['Profiling · 画像（02:40–07:10）', '定义：从多个来源组合数据，形成个人的详细档案，用于评估或预测行为、识别人群类别。益处：推荐更贴合、产品与服务更有针对性。代价：个人数据脱离本人控制，可能被泄露、滥用或用来利用弱势用户；大量持有个人数据既是资产也是负债。'],
        ['Location tracking · 位置追踪（07:10–10:10）', '益处：导航、紧急定位、网约车与外卖进度、资产与车队追踪、为政府决策提供关键数据。代价：可揭示一个人去哪里、见谁；可能被用于跟踪骚扰，也可能被政府或组织滥用。幻灯片案例：ACCC 诉 Google，澳大利亚联邦法院认定 Google 在个人位置数据上误导用户。'],
        ['Predictive algorithms · 预测算法（10:10–12:30）', '益处：过滤重复和垃圾内容，按相关性排序，让平台更有用。代价：可能不准确或次优，依赖数据的准确与完整；形成信息茧房与过滤泡；可能反映程序员和底层数据的偏差。'],
        ['Big data · 大数据（12:30–16:00）', '益处：复杂分析带来更好、更准确的决策。代价：用于商业获利或可疑目的；敏感数据可能被有意或无意公开；去标识化数据可经 jigsaw re-identification（拼图式再识别）重新指向个人。'],
        ['AI · 人工智能（16:00–18:55）', '益处：提高生产力，让人专注需要创造力与同理心的工作；改进医疗诊断；缓解交通拥堵；协助执法。代价：缺少创造力与情感判断；替代岗位，可能造成失业与社会冲击；放大隐私问题，可能在未经直接同意时收集数据并发现趋势。'],
      ], note: '视频把 Myki 再识别归为 Monash 研究人员、并说“50 million”，但课程阅读与幻灯片显示是 University of Melbourne 研究者、约 1500 万张卡；以阅读原文为准。讲者也提醒：大学作业不得用 ChatGPT 生成。' },
      { id: 'attention', title: '注意力经济：说服式设计如何“劫持”选择', intro: 'Social media addiction（The Guardian, 2017）；Algorithmic Hijack 信息图第 1、4 栏；音频的串联讨论。', headers: ['机制 / 观点', '材料中的证据与含义'], rows: [
        ['Attention economy', '以广告需求塑造的互联网：产品争夺用户的注意力时间。文中引述研究称人们每天触碰手机 2,617 次，并担忧“持续性部分注意”。'],
        ['Variable rewards · 可变奖励', 'Pull-to-refresh 与红色通知像老虎机：不知道下一次是有趣内容、大量点赞还是什么都没有，这种不确定性促成强迫式使用。发明者 Brichter 同意这个比喻并表示后悔。'],
        ['Triggers · 触发', 'Nir Eyal 的 Hooked 模型利用无聊、孤独、挫败等负面情绪作为触发；Facebook 通知图标从蓝改红后使用量剧增。'],
        ['个性化的操纵杠杆', '泄露的内部报告显示平台能识别青少年何时感到“没有安全感”。Tristan Harris 指出这类信息是“可以按哪个按钮”的模型，且可以卖给出价最高的人。'],
        ['Impulses over intentions', 'James Williams：注意力经济偏爱冲动而非意图，奖励耸动与愤怒而非细致讨论，可能削弱民主依赖的理性与自我管理能力。'],
        ['商业模式的约束', 'Roger McNamee 认为，除非放弃现行广告模式，公司难以真正解决伤害；Rosenstein 提出可考虑监管“心理操纵式广告”。'],
      ], note: '这篇文章多为从业者访谈与观点，不是系统研究；神经回路与“降低 IQ”等表述应视为文中引述，而非已证实结论。信息图由 NotebookLM 生成，右侧小框文字有乱码（如“woothal facial”），以阅读原文为准。' },
      { id: 'profiling', title: '客户画像：价值、越界与治理', intro: 'The Uses and Abuses of Customer Profiling（destinationCRM, 2000）。案例与制度为当年美国 / 欧盟背景。', headers: ['议题', '要点'], rows: [
        ['Overt vs covert collection', '公开收集：注册、问卷、表单、抽奖；隐蔽收集：cookies 与追踪软件推断兴趣。离线来源（保修卡、会员卡、目录购物、电话调查）也会被聚合成可检索名单。'],
        ['对客户的益处', '更合适的产品、更快的服务响应、更少无关营销。银行行长指出：依赖信任和回头客的行业，出售数据的负面影响远大于额外收入。'],
        ['越界案例', 'Amazon Purchase Circles 按邮编、雇主、学校汇总畅销书，引发批评后增加退出选项；GeoCities 违背“未经同意不披露”的承诺出售信息，被 FTC 处理。'],
        ['内部使用 vs 对外出售', '用客户知识改进自己的服务通常比允许或出售给外部方更容易被接受。'],
        ['Anonymity ≠ privacy', '通过中介、代理或化名身份，让人分享偏好而不暴露真实身份（Harrods 私人采购的例子）；用加密与审计追踪限制访问。'],
        ['Practices, not policies', '关键是实践而非一纸政策：培训员工、寻求第三方认证、思考公司想成为什么样的组织；“技术上能建画像”不代表应该建（Raley’s 取消会员卡计划，以平等对待所有顾客）。'],
      ], note: '文中 FTC 自律立场、EU Directive 95/46/EC、Safe Harbor 与 P3P 都是 2000 年的历史背景，不能当作现行法律（该指令后来已被 GDPR 取代）。可迁移的是“价值 vs 侵扰”的平衡方法和文化、培训与问责的作用。' },
      { id: 'targeting', title: '定向广告：兴趣代理与弱势用户', intro: 'Targeting products by surveilling the sick（The Markup, 2021）；Facebook approves … ads targeting teens（ABC News, 2021）；信息图第 2 栏。', headers: ['发现', '伦理含义'], rows: [
        ['“Interest” 作为健康状况的代理', '平台不提供明确的疾病类别，但药企用“cancer awareness”“Diabetes mellitus awareness”“oxygen”“genetic disorder”等兴趣定位处方药广告。'],
        ['规模与精度', '2019 年健康与制药公司在 Facebook 移动广告上花费近 10 亿美元；“cancer awareness”潜在受众近 2.03 亿。研究还显示仅凭状态更新文本可预测 21 种健康状况。'],
        ['暴露与利用', 'Ostherr 指出：同事看到你屏幕上的肺癌药广告就可能推断你的病情；在患者社区寻求支持的人处于脆弱状态，“他们的优先事项是活下去”，而非防追踪。'],
        ['法律空隙', '美国 HIPAA 只适用于少数直接处理病人健康信息的实体；模糊的兴趣定位可能是一种“法律防御”。'],
        ['青少年被当作成人', 'Reset Australia 用假账号测试：平台对青少年与成人数据一视同仁，可按赌博、吸烟、酒精、约会等兴趣定向；普通香烟广告被拒，换成电子烟后获批（未付费、未投放）。'],
        ['平台回应 vs 结构问题', '平台称有自动与人工审核、年龄限制工具，但“任何有信用卡的人”都能成为广告主。团体呼吁借鉴英国、爱尔兰，禁止追踪和定向儿童。'],
      ], note: '“没有使用医疗记录”或“广告主须遵守法律”不能回答真正的问题：推断出的敏感属性同样可能伤害个人。设计时应把推断数据、弱势群体（病人、未成年人）与广告审核失败一并纳入风险评估。' },
      { id: 'surveillance', title: '监控扩张：人脸识别与“读心”技术', intro: 'National ID matching（ACS Information Age, 2022）；Infiltration of privacy（VentureBeat, 2021）；信息图第 3 栏。', headers: ['技术 / 事件', '关注点'], rows: [
        ['国家人脸识别数据库', 'Home Affairs 发布招标，建设并部署身份匹配系统，迁移已集中存储的各州驾照人脸图像。'],
        ['立法与监督缺口', '2019 年的配套法案被议会委员会要求重写，使其围绕隐私与透明度构建、接受议会监督，包括年度报告。但部门在未完成立法时通过 AusTender 悄然推进采购。'],
        ['民主透明度', 'QCCL 批评此举在 Privacy Act 审查与电子监控立法改革进行中推进，且未公开宣布，偏离民主透明。'],
        ['无线信号推断情绪', 'QMUL 研究用类雷达无线信号测量心跳与呼吸，判断四种情绪；研究者设想用办公室 Wi-Fi 检测人群情绪，HR 可用来评估员工对政策的“真实”反应。'],
        ['脑机接口与思维重建', 'Kyoto 用 fMRI 与神经网络重建所见图像；MIT 设备读取默读时的神经肌肉信号。医疗与沟通价值明确，但“未表达的想法”可能不再私密。'],
      ], note: '同一技术可能用于治疗疾病或控制人群。评估时问：谁有权部署？受影响者是否知情、能否拒绝？有无立法授权、独立监督和报告？在监督机制到位前推进部署本身就是伦理问题。' },
      { id: 'privacy', title: '隐私是否已死：creepy line、同意与情境', intro: 'Is privacy dead?（Financial Times, 2019）。', headers: ['概念', '要点'], rows: [
        ['The creepy line', 'Google 前 CEO Schmidt 说公司要“走到令人不适的边界而不越过”。边界存在，但会被新技术逐步推移：从拒绝家中麦克风到购买智能音箱。'],
        ['从数字时代到预测时代', '摄像头网络、智能门铃、雇主追踪睡眠、零售追踪动线；数据训练算法，再推动人们走向某些行为。'],
        ['隐私是情境的，也是权力的', '我们希望某些信息只给某些人；他人对你知道得越少，越难干预你的生活。完全透明不能满足这两点。'],
        ['公司提供的三种隐私', '内建隐私（阻止追踪、加密消息）；交给用户控制；保护与匿名化数据。但匿名化数据被交叉匹配回个人的风险无法完全消除。'],
        ['同意的局限', '提供同意却没有真正选择：不到 10%（可能接近 1%）的用户修改隐私设置；不接受就不能用服务。公共场所的人脸识别无法逐次签同意书；即使个人退出，行为也可从他人数据推断。'],
        ['隐私作为权利而非商品', '像安全带与器官买卖一样，某些隐私也许不应能被交易。Sidewalk Toronto：顾问 Cavoukian 因去标识化只是“建议”而辞职。文章主张分行业设标准、由社区集体划线，并要求公司先证明其收集正当。'],
      ], note: '作答时不要停在“用户已点同意”。检查同意是否知情、自愿、可拒绝，信息是否在原有情境中流动，以及收集本身是否必要。“Privacy’s a hindsight problem”提醒我们要在伤害发生前评估。' },
      { id: 'genai', title: '生成式 AI：训练数据与提示词的隐私风险', intro: 'ChatGPT is a data privacy nightmare（The Conversation, 2023）。描述的是文章发表时的政策与做法。', headers: ['风险', '文章中的论证'], rows: [
        ['未经同意的抓取', '约 3000 亿词抓取自书籍、文章、网站与帖子，包括未经同意获得的个人信息；写过博客、评论或产品评价的人都可能在其中。'],
        ['Contextual integrity · 情境完整性', '即使信息是公开的，把它带离原有情境使用也可能侵犯隐私。'],
        ['无法核查或删除', '文章称当时没有程序让个人查询是否存有其信息或请求删除；GDPR 的“被遗忘权”在信息不准确时尤其重要。'],
        ['版权与补偿', '训练数据可能受版权保护；被抓取数据的个人、网站和公司没有获得补偿，而公司估值与收入快速增长。'],
        ['提示词也是数据', '律师上传离婚协议、程序员粘贴代码，可能被用于后续训练；隐私政策还收集 IP、浏览器、交互与跨站浏览信息，并可能与未指明的第三方共享。'],
      ], note: '这篇文章是 2023 年的观点评论，相关服务的政策此后可能已变化；复习时把它当作风险清单而非现行事实。专业实践要点：不把客户或雇主的敏感信息输入外部 AI 工具，除非已确认授权和数据处理条件。' },
      { id: 'reidentification', title: '开放数据与拼图式再识别：Myki 案例', intro: 'Two data points are enough to spot you in open transport records（Pursuit, University of Melbourne, 2019）；视频 13:50–16:00。', headers: ['事实', '教训'], rows: [
        ['发布了什么', '2018 年 PTV 为 datathon 发布 Myki 数据：2015–2018 年间超过 1500 万张卡、近 20 亿行触碰记录。唯一的去标识化是遮蔽卡号，同一张卡的行程仍相互关联。'],
        ['敏感字段', '精确到秒的时间、地点与路线；74 种卡类型，包括联邦警察、联邦 / 州议员通行证和不同年龄学生卡。'],
        ['两个事件即可识别', '研究者只用账户里已知的两次触碰记录就唯一找到自己的卡，再用前后 5 秒内触碰的卡做“同行者”分析，找到同事和一名儿童卡。'],
        ['公开信息作为辅助数据', '仅凭一名州议员在社交媒体上关于乘车的帖子，就识别出其卡片。抱怨电车晚点的推文也暴露时间、地点和路线。'],
        ['简单粗化仍不够', '即使时间舍入到 5 分钟，5 次随机事件后超过 50% 的卡仍唯一；加入地点后只需 2 次。'],
        ['更安全的发布', 'Differential privacy（差分隐私）从数学上保证个体记录的属性在发布结果中不可区分；TfNSW 2017 年发布 Opal 数据时使用过。作者主张把隐私置于发布数据的意愿之上。'],
      ], note: '长期、单元记录级（unit record level）的数据会揭示住址、工作地点、出行规律和同行者，可能被用于跟踪骚扰。去标识化不是“删掉 ID”就完成；发布前要考虑攻击者可能拥有的辅助数据。' },
      { id: 'arguments', title: '构建强论证：立场、理由、证据、反驳', intro: 'Building Strong Arguments · 01:04–03:40；幻灯片 “Tips for building an argument”。', headers: ['步骤', '做法'], rows: [
        ['强论证 vs 弱论证', '强论证基于可证明、经过推理的事实与数据；弱论证依赖可能经不起追问的个人信念。'],
        ['1 · Clarify your position', '先明确自己要证明或辩护什么、有什么证据、问题的利弊。'],
        ['2 · Be clear on your reasoning', '有逻辑地解释为什么你的立场成立。'],
        ['3 · Support with reputable evidence', 'Facts and statistics 把立场连接到证据；Reasons and results 说明因果；Examples 展示推理如何运作。立场经不起检验时要修正。'],
        ['4 · Consider key objections', '有哪些不同观点、证据？别人会在你的论证中看到什么问题？通过反驳（counter）或让步并说明可克服（concede）来回应；忽视反对意见会削弱论证。'],
        ['5 · Structure your points', '面对认同的听众：先给支持证据，再反驳异议；面对反对的听众：先回应潜在异议，再给证据。'],
      ], note: '讲者说明这些技巧适用于职业中的伦理论证，也用于课程中的论证类任务。具体考核仍须遵守该任务对 AI 使用的规定；本页只整理通用方法，不提供任何考核题目的论点。' },
      { id: 'reasoning', title: '认知偏差与逻辑谬误：识别并避免', intro: 'Building Strong Arguments · 03:40–10:50；名称与定义按幻灯片核对。', headers: ['类型', '定义与例子'], rows: [
        ['Anchoring · 锚定', '最先听到的信息影响之后一切：先看到 1200 元的 T 恤，500 元的就显得便宜。'],
        ['Availability · 可得性', '把容易想起的例子当作更有代表性；用统计和事实校正第一印象。'],
        ['Confirmation · 确认偏差', '偏爱符合既有信念的信息；问自己“我是怎样、何时形成这个信念的？”'],
        ['Curse of knowledge · 知识的诅咒', '懂了之后以为对所有人都显而易见，因而解释不足、遗漏关键信息。'],
        ['Cherry picking / Anecdotal', '只展示支持自己的数据；用个人经历或孤例证明结论（“祖父抽烟活到 92 岁”）。'],
        ['Appeal to emotion / Genetic', '用情绪替代有效论证；根据来源或说话者出身判断好坏。'],
        ['Black or white · 非黑即白', '只给两个选项，忽略结合两者优点的第三方案。'],
        ['Bandwagon / Appeal to authority', '用流行程度证明正确；援引并非该领域专家的“权威”。'],
        ['Straw man · 稻草人', '歪曲对方论点以便攻击（把“请外部重设计网站”说成“扔钱、毁掉内部团队”）。'],
        ['False cause / Slippery slope', '把相关当因果（“每次洗车都下雨”）；无证据地推演到极端后果，是借恐惧的情绪诉求。'],
      ], note: '这些检查也适用于阅读本周材料：例如访谈式文章可能含 anecdotal 证据，“隐私已死”可能是 bandwagon 式说法；Week 10 的数字锁匠“滑坡”指权限逐步被滥用的风险，需有证据支持，与无证据的 slippery slope 谬误不同。' },
      { id: 'cases', title: '练习案例：把本周概念写成有理由的判断', intro: '以下情境为原创练习，结合本周阅读事实；分析为示范，并非官方答案。', headers: ['情境', '分析与行动'], rows: [
        ['为提高留存加入连续打卡与红点提醒', '利益相关者包括青少年用户和家长。对照可变奖励与触发机制：是否利用负面情绪、是否尊重自主？可比较默认关闭提醒、使用时长提示、把福祉纳入指标；指出“用户喜欢”不是充分理由（bandwagon / appeal to popularity）。'],
        ['药企要求按“疾病认知”兴趣投放广告', '即使不使用医疗记录，推断出的健康状况仍可能暴露病情、利用脆弱用户。可提出排除敏感兴趣、限制频次与可见位置、审查是否符合当地药品广告规定，并记录风险。'],
        ['政府希望开放公共交通刷卡数据', '仅删除 ID 不足以防再识别。考虑数据粒度、时长、卡类型、辅助数据（社交媒体），采用聚合、差分隐私或受控访问，并在发布前做再识别测试。'],
        ['团队想把客户工单粘贴进外部聊天机器人做摘要', '检查授权、合同与数据处理条件；工单可能含个人信息，提示词可能被保留或用于训练。可先脱敏、使用经批准的工具或本地方案，并告知客户。'],
      ], note: '答题顺序：事实与未知 → 受影响者（尤其弱势群体）→ 数据是否被收集、推断、再识别 → 同意与情境 → 至少两个方案 → 有证据的选择与对反方意见的回应。' },
    ],
    quiz: [
      ['“Can I build it?” 与 “Should I build it?” 有什么区别？', '前者只问技术可行性；后者还问可能的后果、谁受影响，以及怎样构建才能把负面影响降到最低。要在规划阶段和发布后都检查。'],
      ['“like”按钮的例子说明了什么？', '善意设计可能产生非预期后果：它成为认可与受欢迎程度的代理指标，被指影响年轻人的心理健康。专业责任包括预判并监测这类副作用。'],
      ['什么是 profiling？它的益处和代价分别是什么？', '从多个来源组合数据形成个人档案，以评估或预测行为、识别人群。益处是更贴合的推荐与服务；代价是失去控制、泄露、滥用和对弱势用户的利用。'],
      ['为什么说持有大量个人数据也是负债？', '数据越多越容易成为攻击目标，泄露会伤害客户，并给组织带来声誉、罚款与法律风险。最小化收集与保留可以降低风险。'],
      ['Pull-to-refresh 为何被比作老虎机？', '它依赖可变奖励：每次下拉不知道会得到有趣内容、点赞还是广告，这种不确定性促成强迫式使用。'],
      ['James Williams 说注意力经济“privileges our impulses over our intentions”是什么意思？', '为了争夺注意力，系统偏向耸动、情绪和愤怒的内容，削弱人们按自己意图行事和理性讨论的能力，进而影响民主所依赖的自我管理。'],
      ['平台不提供疾病类别，为何定向药品广告仍有隐私问题？', '广告主用“cancer awareness”“oxygen”等兴趣作为代理，仍能触达病人；广告出现在屏幕上可能向他人暴露病情，并利用寻求支持的脆弱用户。'],
      ['Reset Australia 的实验发现了什么？', '平台对青少年与成人数据处理相同，可按酒精、赌博、吸烟和约会兴趣定向青少年；普通香烟广告被拒，电子烟广告却获批。'],
      ['国家人脸识别数据库的主要争议是什么？', '在立法被要求围绕隐私、透明度和议会监督重写之前，部门就悄然推进采购，缺少公开宣布与监督，被批评偏离民主透明。'],
      ['什么是 creepy line？它为什么会移动？', 'Schmidt 所说的“令人不适的边界”。人们逐渐适应新技术，过去会拒绝的收集（家中麦克风、摄像头）变得常见，边界随之后移。'],
      ['为什么“用户同意了”不足以解决隐私问题？', '同意往往没有真正选择、很少有人修改设置；公共场所的监控无法逐次同意；个人行为还能从他人数据推断。某些隐私可能应被视为不可交易的权利。'],
      ['什么是 contextual integrity？', '信息应在其产生的情境内流动。即使信息公开，把它抓取并用于训练模型等新情境，也可能侵犯隐私。'],
      ['Myki 数据只遮蔽了卡号，为何仍能再识别？', '同卡行程仍相关联，且包含精确时间、地点、路线和卡类型。研究者凭两次已知触碰就找到自己的卡，并借同行分析和推文识别他人。'],
      ['差分隐私解决什么问题？', '它提供数学保证：发布结果中无法区分任一个体记录的属性，从而降低结合辅助数据进行再识别的风险。简单舍入时间无法做到这一点。'],
      ['构建强论证的五个步骤是什么？', '明确立场 → 清楚推理 → 用可信证据支持（事实与统计、因果、例子）→ 考虑并回应主要反对意见 → 根据听众安排结构。'],
      ['Straw man 与 false cause 如何区分？', 'Straw man 是歪曲对方论点以便攻击；false cause 是把相关或先后顺序当成因果。前者针对论点本身，后者针对因果推理。'],
    ],
    reviewTitle: '自测：识别风险并用证据论证',
    reviewIntro: '16 道原创复习题，依据 Own-time 材料整理；不是 Moodle 官方测验或标准答案。展开查看解释。',
    sourcesTitle: '材料索引与学习范围',
    sourcesIntro: '13 项 Own-time 材料逐项列出。九篇网页按原文整理；两段视频使用内嵌字幕，并对照幻灯片核对术语与案例。课程私有原文件不随网站上传，Moodle / Panopto 链接需要课程访问权限；部分新闻网站可能需要订阅。',
    sourceLink: '查看来源', sectionLink: '对应笔记',
    audioTitle: '音频串联：算法如何影响选择',
    audioBody: '音频用“装在口袋里的赌场”比喻串联本周材料：可变奖励与红点、愤怒内容放大、跨站追踪与画像、Reset Australia 与 The Markup 的定向广告、国家人脸识别数据库，并以“我们的选择还有多少属于自己”收尾。它是复习串联材料，部分表述需按原文校正：Guardian 中“面包师”比喻是 Nir Eyal 为说服式设计辩护，而非批评；cookies 追踪与 jigsaw re-identification 是两件事；The Markup 说明 HIPAA 本就不适用于平台，与其说“绕过”医疗隐私法，不如说是法律空隙；Tesla 自动驾驶事故不在本周阅读中，不作为课程事实使用。',
    boundaryLabel: '版本与证据范围',
    boundary: '阅读跨越 2000–2023 年：destinationCRM（2000）描述的美国 FTC 立场、EU Directive 95/46/EC 与 Safe Harbor 是历史背景；Guardian（2017）、FT（2019）、ABC 与 The Markup（2021）、ACS Information Age（2022）、The Conversation（2023）反映发表时的情况，平台政策与法律此后可能变化。本页不是对现行澳大利亚法律适用性的审计。视频字幕存在识别噪声，关键术语以幻灯片校正；视频对 Myki 研究机构与数量的口述与阅读原文不一致，以原文为准。音频为自动转录。练习案例与建议为原创分析。',
  },
  en: {
    subtitle: 'Being able to build something does not mean we should; being able to access data does not mean we may use it freely.',
    summary: 'Chapter 5 · The Law, Ethics, and Privacy. Connect the Week 11 Own-time videos, infographic, audio and nine readings to the ethical risks of attention design, profiling, targeted advertising, surveillance and re-identification, and learn to defend a position with evidence and clear reasoning.',
    tags: ['Should I build it?', 'Attention economy', 'Profiling', 'Targeted ads', 'Privacy & consent', 'Re-identification', 'Arguments & fallacies'],
    overview: 'From “can we build it?” to “should we, and how?”',
    lead: 'Identify intended and unintended consequences → find whose data is collected, inferred or sold → test whether consent is real and whether context has changed → assess vulnerable groups and re-identification risk → justify the choice with facts, reasons and responses to objections. Week 10 supplied the frameworks and codes; Week 11 applies them to real technologies.',
    sections: [
      { id: 'responsibility', title: 'Professional responsibility: ask “should I build it?” first', intro: 'The Ethics of IT systems · 00:39–02:40; the “like” button creator’s reflections in the Social media addiction reading.', headers: ['Issue', 'Revision point'], rows: [
        ['Unintended consequences', 'The “like” button was meant to spread positivity but became a proxy for approval and popularity, accused of shaping young people’s behaviour and mental health. Its creator, Rosenstein, notes that people often build things with the best intentions that have unintended negative consequences.'],
        ['Can I build it? → Should I build it?', 'The lecturer moves the question beyond feasibility: should this be built, what are the potential consequences, and how should it be built to minimise negative impacts?'],
        ['Address technical and ethical challenges together', 'Anticipate consequences during planning and keep checking for actual harm after release rather than reacting only afterwards.'],
        ['Connection to Week 10', 'Use ethical frameworks and the ACS code, especially to identify which stakeholders a decision may affect, before comparing options.'],
        ['Software that changes behaviour', 'When data or software changes people’s behaviour or enables actions they otherwise would not take, responsibility increases: examine purpose, means and effects on autonomy.'],
      ], note: '“No bad intent” is not a sufficient defence. Most designers in the Guardian reading did not set out to create addiction but discovered effective hooks under advertising incentives. Professional judgment must cover foreseeable side effects.' },
      { id: 'technologies', title: 'Five emerging technologies: benefits alongside costs', intro: 'The Ethics of IT systems · 02:40–18:55; terms and cases checked against the slides.', headers: ['Technology', 'Benefits → drawbacks'], rows: [
        ['Profiling (02:40–07:10)', 'Definition: combining data from multiple sources into a detailed file on individuals to assess or predict behaviour or identify categories of people. Benefits: better-suited recommendations and tailored products and services. Drawbacks: personal data leaves people’s control and may be breached, misused or used to exploit vulnerable users. Holding large amounts of personal data is a liability as well as an asset.'],
        ['Location tracking (07:10–10:10)', 'Benefits: directions, emergency location, rideshare and delivery tracking, asset and fleet tracking, and critical data for government decisions. Drawbacks: reveals where people go and whom they visit; enables stalking; capabilities can be abused by governments and organisations. Slide case: in the ACCC action, Australia’s Federal Court found Google misled users about personal location data.'],
        ['Predictive algorithms (10:10–12:30)', 'Benefits: filter repetition and spam, rank relevant posts and make platforms more useful. Drawbacks: inaccurate or suboptimal outputs that depend on accurate, complete data; filter bubbles and silos; reflecting the bias of programmers and underlying datasets.'],
        ['Big data (12:30–16:00)', 'Benefits: complex analysis for better, more accurate decisions. Drawbacks: misuse for commercial gain or questionable purposes; sensitive data made public intentionally or unintentionally; de-identified data re-linked to individuals through jigsaw re-identification.'],
        ['AI (16:00–18:55)', 'Benefits: productivity, freeing people for creative and empathetic work; improved diagnosis; reduced congestion; support for law enforcement. Drawbacks: lack of creativity and emotional judgment; job displacement and potential social disruption; amplified privacy problems, including collecting data and spotting trends without direct consent.'],
      ], note: 'The video attributes the Myki re-identification to Monash researchers and says “50 million”, but the course reading and slide show University of Melbourne researchers and about 15 million cards; follow the reading. The lecturer also reminds students that ChatGPT must not be used to produce university work.' },
      { id: 'attention', title: 'Attention economy: how persuasive design hijacks choice', intro: 'Social media addiction (The Guardian, 2017); Algorithmic Hijack infographic panels 1 and 4; the audio synthesis.', headers: ['Mechanism / claim', 'Evidence and implication'], rows: [
        ['Attention economy', 'An internet shaped around the demands of advertising, where products compete for time and attention. The article cites research that people touch their phones 2,617 times a day and raises concern about “continuous partial attention”.'],
        ['Variable rewards', 'Pull-to-refresh and red notifications work like slot machines: users do not know whether they will find something interesting, a flood of likes or nothing. That uncertainty drives compulsive use. Its designer, Brichter, accepts the comparison and regrets the downsides.'],
        ['Triggers', 'Nir Eyal’s Hooked model treats boredom, loneliness and frustration as triggers. Facebook’s notification icon was rarely used in blue; usage rose sharply once it turned red.'],
        ['Personalised levers', 'A leaked internal report showed a platform could identify when teens felt “insecure”. Tristan Harris calls this a model of which buttons to push in a person—levers that can be sold to the highest bidder.'],
        ['Impulses over intentions', 'James Williams argues the attention economy privileges impulses over intentions, rewarding sensation and outrage over nuance and potentially eroding the reasoning and self-governance democracy depends on.'],
        ['Business-model constraint', 'Roger McNamee believes companies cannot address the harm without abandoning current advertising models; Rosenstein suggests regulating “psychologically manipulative advertising”.'],
      ], note: 'The article relies mainly on insider interviews and opinions rather than systematic research. Treat claims about neural pathways or lowered IQ as reported views, not established findings. The NotebookLM infographic contains garbled text in its right-hand box (e.g. “woothal facial”); rely on the readings.' },
      { id: 'profiling', title: 'Customer profiling: value, intrusion and governance', intro: 'The Uses and Abuses of Customer Profiling (destinationCRM, 2000). Cases and institutions reflect the US and EU context at that time.', headers: ['Issue', 'Key points'], rows: [
        ['Overt vs covert collection', 'Overt: registration, surveys, forms, contests. Covert: cookies and tracking software that infer interests. Offline sources—warranty cards, loyalty cards, catalogues, phone surveys—are also aggregated into searchable lists.'],
        ['Benefits to customers', 'Better-suited offers, faster service and less irrelevant marketing. A bank president notes that in trust-based, repeat-customer industries, selling data costs far more than any side revenue.'],
        ['Overreach cases', 'Amazon’s Purchase Circles grouped bestseller lists by zip code, employer and college, prompting criticism and an opt-out. GeoCities sold optional personal information despite promising consent first and faced FTC sanctions.'],
        ['Internal use vs external sale', 'Using customer knowledge to improve one’s own service is generally more acceptable than permitting or selling access to outside parties.'],
        ['Anonymity ≠ privacy', 'Intermediaries, proxies or pseudo-identities let people share preferences without revealing identity (the Harrods personal-shopper example); encryption with audit trails restricts access.'],
        ['Practices, not policies', 'Train staff, seek third-party certification and decide what kind of company to be. The ability to build a profile does not make it a good idea—Raley’s ended its loyalty-card programme to treat all customers equally.'],
      ], note: 'The FTC’s self-regulation stance, EU Directive 95/46/EC, Safe Harbor and P3P are 2000-era context, not current law (the Directive was later replaced by the GDPR). What transfers is the method of balancing value against intrusion and the role of culture, training and accountability.' },
      { id: 'targeting', title: 'Targeted advertising: interest proxies and vulnerable users', intro: 'Targeting products by surveilling the sick (The Markup, 2021); Facebook approves … ads targeting teens (ABC News, 2021); infographic panel 2.', headers: ['Finding', 'Ethical implication'], rows: [
        ['“Interests” as health proxies', 'The platform offers no explicit illness categories, yet drug makers targeted prescription ads using interests such as “cancer awareness”, “Diabetes mellitus awareness”, “oxygen” and “genetic disorder”.'],
        ['Scale and precision', 'Health and pharmaceutical companies spent almost $1 billion on Facebook mobile ads in 2019; the “cancer awareness” audience was nearly 203 million. Researchers have predicted 21 health conditions from status-update language alone.'],
        ['Exposure and exploitation', 'Ostherr notes that a colleague seeing a lung-cancer drug ad on your screen could infer your condition. People seeking support in patient communities are vulnerable: “Their priority is surviving,” not avoiding tracking.'],
        ['Legal gaps', 'In the US, HIPAA applies only to a handful of entities handling patient information directly; vague interest targeting may be a “legally defensive manoeuvre”.'],
        ['Teens treated as adults', 'Reset Australia’s test account found teens’ data handled like adults’, targetable by gambling, smoking, alcohol and dating interests. Cigarette ads were rejected, but e-cigarette versions were approved (not paid for or run).'],
        ['Platform response vs structural problem', 'The platform cites automated and human review and age-restriction tools, yet “any advertiser is anyone with a credit card”. Advocates call for UK- and Ireland-style limits on tracking and targeting children.'],
      ], note: '“We don’t use medical history” or “advertisers must follow the law” does not answer the real question: inferred sensitive attributes can still harm people. Include inferred data, vulnerable groups (patients, minors) and ad-review failures in risk assessment.' },
      { id: 'surveillance', title: 'Expanding surveillance: facial recognition and “thought detection”', intro: 'National ID matching (ACS Information Age, 2022); Infiltration of privacy (VentureBeat, 2021); infographic panel 3.', headers: ['Technology / event', 'Concern'], rows: [
        ['National facial recognition database', 'Home Affairs went to tender to build and deploy an identity-matching system, migrating an existing centralised database of facial images from state driver licences.'],
        ['Legislation and oversight gap', 'A parliamentary committee said the 2019 bill should be redrafted around privacy and transparency, with parliamentary oversight including annual reporting. The department nevertheless began procurement quietly via AusTender.'],
        ['Democratic transparency', 'The QCCL criticised proceeding during the Privacy Act review and electronic surveillance reform, without announcement—a step away from democratic transparency.'],
        ['Inferring emotion from wireless signals', 'QMUL research used radar-like wireless signals to measure heart and breathing rates and classify four emotions. Researchers envisaged office Wi-Fi detecting group emotions—HR could gauge reactions to policies regardless of what staff say.'],
        ['Brain–computer interfaces', 'Kyoto researchers reconstructed viewed images from fMRI with a neural network; an MIT device reads neuromuscular signals from internal verbalisation. Medical and communication value is clear, but unexpressed thoughts may not stay private.'],
      ], note: 'The same technology can cure disease or control populations. Ask: who may deploy it, do affected people know and can they refuse, and is there legal authority, independent oversight and reporting? Deploying before oversight exists is itself an ethical problem.' },
      { id: 'privacy', title: 'Is privacy dead? The creepy line, consent and context', intro: 'Is privacy dead? (Financial Times, 2019).', headers: ['Concept', 'Key points'], rows: [
        ['The creepy line', 'Eric Schmidt described Google’s policy as getting “right up to the creepy line” without crossing it. The line exists but shifts as people grow used to technologies—from refusing home microphones to buying smart speakers.'],
        ['From a digital age to an age of prediction', 'Camera networks, smart doorbells, employers tracking sleep, retailers following shoppers; the data trains algorithms that nudge behaviour.'],
        ['Privacy is contextual and about power', 'We want certain information limited to certain people, and the less others know, the less easily they can meddle in our lives. Total transparency satisfies neither.'],
        ['Three corporate offers of privacy', 'Building in privacy (blocking tracking, encrypted messaging); giving users control; safeguarding and anonymising data. The risk of anonymised data being cross-matched back to individuals cannot be eliminated.'],
        ['Limits of consent', 'Consent without real choice: under 10% (probably closer to 1%) of users change privacy settings, and refusing often means losing the service. Public facial recognition cannot rely on consent forms, and opted-out behaviour can be inferred from others’ data.'],
        ['Privacy as a right, not a commodity', 'Like seat belts or organ sales, some privacy may not be tradeable. At Sidewalk Toronto, adviser Ann Cavoukian resigned because de-identification was only recommended. The article favours sector-specific standards, communities drawing lines collectively and companies justifying collection first.'],
      ], note: 'Do not stop at “the user clicked accept”. Check whether consent is informed, voluntary and refusable, whether information flows within its original context, and whether collection is necessary at all. “Privacy’s a hindsight problem” is a reason to assess before harm occurs.' },
      { id: 'genai', title: 'Generative AI: privacy risks in training data and prompts', intro: 'ChatGPT is a data privacy nightmare (The Conversation, 2023). It describes policies and practices at the time of publication.', headers: ['Risk', 'The article’s argument'], rows: [
        ['Scraping without consent', 'Some 300 billion words were scraped from books, articles, websites and posts, including personal information obtained without consent; anyone who has blogged, reviewed or commented may be included.'],
        ['Contextual integrity', 'Even public information can breach privacy when used outside the context in which it was produced.'],
        ['No way to check or delete', 'The article says there was no procedure to check whether personal information was stored or request deletion; the GDPR “right to be forgotten” matters especially when outputs are inaccurate.'],
        ['Copyright and compensation', 'Training data may be copyrighted, and the people and organisations who produced it were not compensated while the company’s value and revenue grew.'],
        ['Prompts are data too', 'A lawyer’s draft divorce agreement or a programmer’s code may be used for further training. The privacy policy also covered IP address, browser, interactions and cross-site browsing, and permitted sharing with unspecified third parties.'],
      ], note: 'This is a 2023 commentary and service policies may have changed; use it as a risk checklist, not a statement of current fact. Professional takeaway: do not enter client or employer sensitive information into external AI tools without confirming authorisation and data-handling terms.' },
      { id: 'reidentification', title: 'Open data and jigsaw re-identification: the Myki case', intro: 'Two data points are enough to spot you in open transport records (Pursuit, University of Melbourne, 2019); video 13:50–16:00.', headers: ['Fact', 'Lesson'], rows: [
        ['What was released', 'In 2018 PTV released Myki data for a datathon: over 15 million cards and nearly two billion touch events from mid-2015 to mid-2018. The only de-identification was redacting card IDs; trips on the same card remained linked.'],
        ['Sensitive fields', 'Times to the second, locations and routes; 74 card types, including Federal Police, federal and state parliamentarian passes and school-children cards.'],
        ['Two events are enough', 'Researchers uniquely found their own cards using two known touch events from their accounts, then ranked cards touching on within five seconds to find co-travellers, including a colleague and a child’s card.'],
        ['Public posts as auxiliary data', 'A state MP’s card was identified from their tweets about travelling. A tweet about a late tram reveals time, place and route.'],
        ['Simple coarsening is not enough', 'Even rounding times to five minutes, over 50% of cards were unique after five random events; with location, two events sufficed.'],
        ['Safer release', 'Differential privacy mathematically guarantees that attributes of any individual record are indistinguishable from a release; Transport for NSW used it for 2017 Opal data. The authors argue privacy must take priority over the desire to release data.'],
      ], note: 'Longitudinal, unit-record-level data reveals homes, workplaces, routines and companions, enabling stalking. De-identification is not finished by deleting an ID; consider the auxiliary data an attacker may hold before release.' },
      { id: 'arguments', title: 'Building strong arguments: position, reasoning, evidence, objections', intro: 'Building Strong Arguments · 01:04–03:40; slide “Tips for building an argument”.', headers: ['Step', 'Practice'], rows: [
        ['Strong vs weak arguments', 'Strong arguments rest on reasoned facts and figures that can be proven; weak arguments rest on personal beliefs that may not survive questioning.'],
        ['1 · Clarify your position', 'Be clear about what you are proving or defending, what evidence you have and the pros and cons of the issue.'],
        ['2 · Be clear on your reasoning', 'Explain logically why your position is valid.'],
        ['3 · Support with reputable evidence', 'Facts and statistics connect the position to evidence; reasons and results show cause and effect; examples show how the reasoning works. Revise the position if it does not hold up.'],
        ['4 · Consider key objections', 'What alternative views and evidence exist, and what problems might others see? Respond by countering, or by conceding and explaining how the issue can be overcome. Ignoring objections weakens an argument.'],
        ['5 · Structure your points', 'Receptive audience: supporting evidence first, then rebut objections. Opposed audience: rebut objections first, then present evidence.'],
      ], note: 'The lecturer presents these skills for ethical arguments in professional life and course tasks that require argument. Each assessment’s own AI-use rules still apply; this page summarises general methods only and provides no arguments for any assessment topic.' },
      { id: 'reasoning', title: 'Cognitive biases and logical fallacies: spot and avoid them', intro: 'Building Strong Arguments · 03:40–10:50; names and definitions checked against the slides.', headers: ['Type', 'Definition and example'], rows: [
        ['Anchoring', 'The first thing we hear influences everything that follows: after a $1,200 T-shirt, a $500 one looks cheap.'],
        ['Availability bias', 'Examples that come readily to mind seem more representative than they are; correct first impressions with statistics and facts.'],
        ['Confirmation bias', 'We favour information that confirms existing beliefs; ask how and when the belief was formed.'],
        ['Curse of knowledge', 'Once we understand something we assume it is obvious, explaining too little or omitting critical information.'],
        ['Cherry picking / Anecdotal', 'Showing only data that suits the argument; using personal experience or an isolated example as proof (“my grandfather smoked and lived to 92”).'],
        ['Appeal to emotion / Genetic', 'Using emotion instead of a valid argument; judging a claim by where it came from or who said it.'],
        ['Black or white', 'Presenting two options as the only ones, ignoring a third that combines the best of both.'],
        ['Bandwagon / Appeal to authority', 'Using popularity as proof; citing an “authority” who is not an expert in the field.'],
        ['Straw man', 'Misrepresenting an argument to make it easier to attack (turning “hire someone to redesign the website” into “throw money away and ruin our in-house team”).'],
        ['False cause / Slippery slope', 'Treating correlation or sequence as causation (“every time I wash my car, it rains”); appealing to extreme hypotheticals without evidence—an emotional appeal to fear.'],
      ], note: 'Apply these checks to this week’s readings too: interview-based articles may rely on anecdotes, and “privacy is dead” can slide into a bandwagon claim. Week 10’s digital locksmith “slippery slope” describes escalating misuse of privilege, which needs evidence—unlike the evidence-free slippery slope fallacy.' },
      { id: 'cases', title: 'Practice cases: turn this week’s concepts into justified judgments', intro: 'Original scenarios built on facts from this week’s readings. The analysis is a revision example, not an official answer.', headers: ['Scenario', 'Analysis and action'], rows: [
        ['Adding streaks and red badges to boost retention', 'Stakeholders include teenage users and parents. Examine variable rewards and triggers: does the design exploit negative emotions or undermine autonomy? Compare notifications off by default, usage reminders and wellbeing metrics. “Users like it” is not sufficient (bandwagon).'],
        ['A drug company wants to target “disease awareness” interests', 'Even without medical records, inferred conditions can expose people and exploit vulnerability. Propose excluding sensitive interests, limiting frequency and placement, checking local medicine advertising rules and documenting risks.'],
        ['Government wants to open public transport tap data', 'Removing IDs does not prevent re-identification. Consider granularity, duration, card types and auxiliary data such as social media; use aggregation, differential privacy or controlled access, and test re-identification before release.'],
        ['A team wants to paste customer tickets into an external chatbot', 'Check authorisation, contracts and data-handling terms; tickets may contain personal information and prompts may be retained or used for training. Redact first, use approved or local tools and inform customers.'],
      ], note: 'Answer sequence: facts and unknowns → affected people (especially vulnerable groups) → whether data is collected, inferred or re-identified → consent and context → at least two options → evidence-based choice with responses to objections.' },
    ],
    quiz: [
      ['How does “Should I build it?” differ from “Can I build it?”', 'The first asks only about feasibility; the second asks about consequences, who is affected and how to build to minimise negative impacts—checked during planning and after release.'],
      ['What does the “like” button example show?', 'Well-intentioned design can have unintended consequences: it became a proxy for approval and popularity, linked to young people’s mental health. Responsibility includes anticipating and monitoring side effects.'],
      ['What is profiling, and what are its benefits and costs?', 'Combining data from multiple sources into a file on individuals to assess or predict behaviour or identify groups. Benefits: tailored recommendations and services. Costs: loss of control, breaches, misuse and exploitation of vulnerable users.'],
      ['Why is holding large amounts of personal data also a liability?', 'More data makes an organisation a bigger target; breaches harm customers and bring reputational, financial and legal risk. Minimising collection and retention reduces exposure.'],
      ['Why is pull-to-refresh compared to a slot machine?', 'It uses variable rewards: each pull may bring interesting content, likes or an ad. That uncertainty drives compulsive use.'],
      ['What does “privileges our impulses over our intentions” mean?', 'To capture attention, systems favour sensational, emotional and outraged content, weakening people’s ability to act on their intentions and reason together—the self-governance democracy relies on.'],
      ['Without illness categories, why is targeted drug advertising still a privacy problem?', 'Advertisers use interests such as “cancer awareness” or “oxygen” as proxies to reach patients. Ads on screen may reveal conditions to others and exploit people seeking support.'],
      ['What did Reset Australia’s experiment find?', 'Teens’ data was handled like adults’, allowing targeting by alcohol, gambling, smoking and dating interests. Cigarette ads were rejected, yet e-cigarette ads were approved.'],
      ['What is the main controversy over the national facial recognition database?', 'Procurement proceeded quietly before legislation was redrafted around privacy, transparency and parliamentary oversight, without public announcement—criticised as a departure from democratic transparency.'],
      ['What is the creepy line, and why does it move?', 'Schmidt’s phrase for the boundary of acceptable intrusion. As people grow used to technologies, previously refused collection (home microphones, cameras) becomes normal and the line shifts.'],
      ['Why is “the user consented” not enough?', 'Consent often lacks real choice and few people change settings; public surveillance cannot rely on individual consent; behaviour can be inferred from others’ data. Some privacy may be a right that should not be traded away.'],
      ['What is contextual integrity?', 'Information should flow within the context in which it was produced. Even public information can breach privacy when scraped for a new context such as model training.'],
      ['Myki data only hid card IDs—why could people be re-identified?', 'Trips stayed linked and included exact times, locations, routes and card types. Two known touch events identified the researchers’ cards; co-traveller analysis and tweets identified others.'],
      ['What problem does differential privacy address?', 'It mathematically guarantees that any individual record’s attributes are indistinguishable in a release, reducing re-identification through auxiliary data. Simple time rounding cannot provide this.'],
      ['What are the five steps for building a strong argument?', 'Clarify the position → make reasoning clear → support with reputable evidence (facts and statistics, reasons and results, examples) → consider and answer key objections → structure for the audience.'],
      ['How do straw man and false cause differ?', 'Straw man misrepresents an opponent’s argument to attack it; false cause treats correlation or sequence as causation. One distorts the argument; the other flaws the causal reasoning.'],
    ],
    reviewTitle: 'Self-checks: identify risks and argue with evidence',
    reviewIntro: '16 original revision questions based on the Own-time materials. These are not official Moodle questions or model answers. Expand to see explanations.',
    sourcesTitle: 'Material index and learning scope',
    sourcesIntro: 'All 13 Own-time materials are indexed. The nine articles were read directly; both videos use embedded captions with terms and cases checked against the slides. Private course originals are not uploaded with the site; Moodle and Panopto links require course access, and some news sites may require a subscription.',
    sourceLink: 'View source', sectionLink: 'Related notes',
    audioTitle: 'Audio thread: how algorithms shape choices',
    audioBody: 'The audio frames the week as “a casino in your pocket”, linking variable rewards and red badges, outrage amplification, cross-site tracking and profiling, the Reset Australia and Markup targeting findings and the national facial recognition database, ending with how much of our choice remains our own. Treat it as a revision synthesis and correct details against the readings: in the Guardian, the baker analogy is Nir Eyal’s defence of persuasive design, not a criticism; cookie tracking and jigsaw re-identification are distinct; The Markup shows HIPAA does not apply to the platform, so this is a legal gap rather than “bypassing” health privacy law; the Tesla autopilot crash is not in this week’s readings and is not used as course evidence.',
    boundaryLabel: 'Versions and evidence scope',
    boundary: 'The readings span 2000–2023. destinationCRM (2000) describes the FTC stance, EU Directive 95/46/EC and Safe Harbor as historical context; The Guardian (2017), FT (2019), ABC and The Markup (2021), ACS Information Age (2022) and The Conversation (2023) reflect conditions when published, and platform policies and laws may have changed. This page is not an audit of current Australian legal applicability. Video captions contain recognition errors; key terms were checked against slides. Where the video’s spoken details on the Myki study differ from the reading, the reading is followed. The audio is automatically transcribed. Practice cases and suggestions are original analysis.',
  },
} as const

export default function Week11({ locale }: { locale: Locale }) {
  const c = copy[locale]
  const toc = [
    { id: 'overview', label: locale === 'zh' ? '本周主线' : 'Overview' },
    ...c.sections.map(({ id, title }) => ({ id, label: title.split('：')[0].split(':')[0] })),
    { id: 'review', label: locale === 'zh' ? '自测' : 'Self-checks' },
    { id: 'sources', label: locale === 'zh' ? '材料与来源' : 'Sources' },
  ]
  const reviewIndex = c.sections.length + 2
  return (
    <WeekLayout weekId="11" locale={locale} eyebrow="Week 11 · Chapter 5 · 12–18 October 2026" title="Privacy and Profiling" subtitle={c.subtitle} summary={c.summary} updated="21 Oct 2026" tags={[...c.tags]} toc={toc}>
      <ContentSection id="overview" index="01" title={c.overview}>
        <LeadCard label={locale === 'zh' ? '本周决策主线' : 'Decision thread'}>{c.lead}</LeadCard>
      </ContentSection>
      {c.sections.map((section, i) => (
        <ContentSection key={section.id} id={section.id} index={String(i + 2).padStart(2, '0')} title={section.title} intro={section.intro}>
          <ResponsiveTable headers={[...section.headers]} rows={section.rows.map(row => [...row])} />
          <Callout label={locale === 'zh' ? '应用与辨析' : 'Application and distinctions'}>{section.note}</Callout>
        </ContentSection>
      ))}
      <ContentSection id="review" index={String(reviewIndex).padStart(2, '0')} title={c.reviewTitle} intro={c.reviewIntro}>
        <QuizAccordion items={c.quiz.map(([question, answer]) => ({ question, answer }))} />
      </ContentSection>
      <ContentSection id="sources" index={String(reviewIndex + 1).padStart(2, '0')} title={c.sourcesTitle} intro={c.sourcesIntro}>
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
