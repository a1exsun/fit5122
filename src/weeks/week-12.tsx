import { ExternalLink } from 'lucide-react'
import { QuizAccordion } from '@/components/quiz-accordion'
import { Callout, ContentSection, InfoCard, LeadCard, ResponsiveTable, WeekLayout } from '@/components/week-layout'
import type { Locale } from '@/i18n'

const sources = [
  ['The Robot Curve and Life Long Learning in the Age of AI', 'https://learning.monash.edu/course/view.php?id=46900&section=52', 'robot-curve', 'Course infographic · NotebookLM · visual review'],
  ['How Curiosity Beats the Robot Curve', 'https://learning.monash.edu/course/view.php?id=46900&section=52', 'learning', 'Audio · 5:59 · local automatic transcription'],
  ['The Robot Curve', 'https://martyneumeier.substack.com/p/the-robot-curve', 'robot-curve', 'Reading · Marty Neumeier'],
  ['Life long learning in an age of AI', 'https://www.forbes.com/councils/forbestechcouncil/2024/03/26/why-lifelong-learning-is-even-more-important-in-the-ai-era/', 'learning', 'Reading · Claire Rutkowski · Forbes Technology Council · 26 March 2024'],
  ['Monash Malaysia Career Connect — How to write a resume and cover letter', 'https://learning.monash.edu/mod/resource/view.php?id=6110456', 'resume', 'PDF · 23 pp. · resume pp. 1–14; cover letter pp. 15–23'],
  ['How to write a cover letter', 'https://learning.monash.edu/mod/scorm/view.php?id=3068016', 'recipe', 'SCORM module · 11 screens · 0:31 animation; 1:04 Four Questions soundbite'],
  ['Cover Letter handout', 'https://learning.monash.edu/mod/folder/view.php?id=1094560', 'cover-letter', 'PDF · 6 pp. · original entry hidden; saved from the samples folder'],
  ['Sample cover letters', 'https://learning.monash.edu/mod/folder/view.php?id=1094561', 'samples', 'Folder · 13 sample letters + handout'],
] as const

const copy = {
  zh: {
    subtitle: '看清工作如何沿 Robot Curve 下滑，用持续学习留在上游，再把能力写成有证据的求职材料。',
    summary: 'Chapter 6 · My Career: Strategically Managing Lifelong Professional Development。结合 Week 12 Own-time 的两篇阅读、课程信息图与音频、Career Connect 简历与求职信 PDF、求职信模块和 13 份样本，梳理终身学习策略与一封针对岗位的求职信怎样写。',
    tags: ['Robot Curve', '终身学习', 'AI 与批判性思维', '简历', '求职信', 'KSC', 'Engage · Align · Confirm'],
    overview: '从“会被自动化的技能”走向“能被证明的价值”',
    lead: '判断自己的工作在 Robot Curve 哪一层 → 用小步、持续的学习保持领先，并批判地使用 AI → 研究自己、岗位、雇主与行业 → 用 Why them / Why apply / Why you / What do you bring 组织材料 → 按 Engage → Align → Confirm 写出对准 KSC、有实例的求职信 → 校对、取得反馈并为每个岗位重新调整。',
    sections: [
      { id: 'tasks', title: '本周任务：时间安排', intro: 'Moodle Week 12 任务表 · 课程日期 19–25 October 2026；按页面原文整理，未另行修订日期。', headers: ['任务', '时间 / 预计用时'], rows: [
        ['Assessment 1 · Pre-reading, Tutorial, and Workshop Materials', 'Workshop 之前 · 约 2 小时。'],
        ['Assessment 2 · Social Responsibility Debate', 'Week 12 周三 Applied Session 期间 · 约 2 小时（团队）。'],
        ['Assessment 3 · Business Report', 'Week 12 周五 11:55 PM。'],
        ['Assessment 3 · Resolution of a challenging professional problem — Interview', '面对面，如未提前完成，由 tutor 在 Week 14 安排 · 每位学生约 15 分钟。'],
      ], note: '本页只整理 Own-time 学习材料，不包含辩论备赛内容；具体提交要求与 AI 使用规定以 Moodle 各项考核说明为准。' },
      { id: 'robot-curve', title: 'Robot Curve：工作价值的瀑布', intro: 'Marty Neumeier · The Robot Curve；课程信息图 “Climbing the Robot Curve”。', headers: ['层级 / 观点', '含义与例子'], rows: [
        ['持续向下的压力', '竞争使创造性流程逐步例行化：Creative → Skilled → Rote → Robotic。每下一层，价值与价格都下降，但价值始终高于价格。'],
        ['Creative · 创造性工作', '少例行、多实验，原创甚至独特，成本与价值都高（前提是回应重要需求）：科学发现、技术突破、新商业构想、产品发明、组织领导与艺术创作。'],
        ['Skilled · 熟练 / 专业工作', '曾经原创的技术成为最佳实践，专业知识由同行共享；雇主可在一定程度上替换人选，但仍按才能分高下（如心脏外科医生）。'],
        ['Rote · 例行工作', '标准化后可交给成本更低的人执行：为话务员编写决策树需要熟练者，但执行脚本不再需要同等经验，可规模化、可外包。'],
        ['Robotic · 自动化工作', '机器做得更便宜或更一致时迅速自动化：决策树变成语音软件，机械臂焊接，$4,000、两天的商业摄影变成 $25 的在线图库租用。'],
        ['破坏与创造并存', '自动化让人失业，也在曲线顶端为发明与管理这些系统的人打开机会（汽车淘汰钉马掌工人、创造汽车工人；图库摄影带来新的市场）。把能力推下曲线的每一步都可能产生利润。'],
        ['“Brittle” 技能陷阱', '越低层越缺少自主权、收入越低、越难适应新技能要求。雇主不需要像机器的员工——他们已有机器——而需要能独立思考、有想象力、善沟通、能团队协作并持续适应变化的人。'],
      ], note: '文章提醒的危险不是“机器像人一样思考”，而是“人已开始像机器一样思考”。与机器比事实存储和重复速度（Ken Jennings 与 Watson）注定失败。信息图把四层标成最高 / 中等 / 最低市场价值，是简化回顾；原文强调每层都在释放新价值。' },
      { id: 'learning', title: 'AI 时代的终身学习：从必选项理解', intro: 'Claire Rutkowski · Forbes · 26 March 2024；音频 How Curiosity Beats the Robot Curve。', headers: ['观点', '复习要点'], rows: [
        ['The passion of the explorer', '文章引用 2021 年 HBR 研究：只有 14% 的美国员工在本领域表现出终身学习热情——长期投入、对意外挑战感到兴奋、持续与他人连接以解决问题；领导者也难以培养这种热情。'],
        ['“能查到就不必学”的错觉', '数字资源与生成式 AI 让“为学习本身而学”看似过时；文章认为持续使用技术会影响决策、记忆、关系建立与批判性思维，自满既是症状也是问题。'],
        ['GenAI 是双刃剑', '擅长检索、摘要与综合，但看似周全的回答被当作 “final word”，削弱进一步探究。它给出的是已被合并压缩的结果，而不是多元观点；可能不完整、出现幻觉或带有偏见。'],
        ['负责任使用 AI 需要持续学习', '理解提示怎样影响答案质量，了解所用工具的安全与隐私影响，尤其是提示中可能无意输入的信息——这些都需要专门训练，AI 应与学习结合，而非替代学习。'],
        ['小步更新 vs 陡峭山坡', '像手机系统更新一样持续、增量地学习；若停滞到裁员（RIF）时才补课，差距会变成一座需要短时间翻越的陡坡。组织停滞时与竞争者的差距也会越来越快地形成。'],
        ['技能不限于技术', 'Upskilling / reskilling 有利于企业竞争与员工保留；职业发展还需要软技能：混合办公环境中的协作、领导力等，这些都需要时间培养。“带你到这里的知识不会带你去下一个位置。”'],
        ['学习与身心健康', '文章引用研究：持续学习可提升自信与自我效能、幸福感与整体生活满意度。音频把这解释为通过掌握新事物获得掌控感，以对抗倦怠与焦虑。'],
      ], note: '把两篇阅读连起来：Robot Curve 说明为何要向上游移动；Rutkowski 说明阻力来自何处——把 AI 的流畅答案当成完整理解。实践上，用 AI 作为起点，再核对来源、比较观点、说明限制，并记录自己学到了什么。' },
      { id: 'resume', title: '简历：相关性是首要原则', intro: 'Career Connect PDF · pp. 1–14；包括样本岗位广告（Reece）与三份样本简历。', headers: ['要点', '做法'], rows: [
        ['Relevance', '简历用于决定是否邀请面试，常与大量申请一起被浏览；只放与岗位相关、回应岗位要求、简洁且结构清晰的信息，体现综合、排序与表达能力。'],
        ['版面与长度', '招聘者约 60% 注意力在第一页，关键信息放首页；常规字体（Helvetica、Arial、Calibri），10–12 号，最多两种字体；分区、要点、留白，格式前后一致。清单建议 2–3 页或按雇主要求。'],
        ['语言与关键词', '用 built、developed、created 等强动词，避免 assisted with；纯商务英语，不用 SMS 语言、缩写、行话与俚语；把目标岗位反复出现的关键词和 KSC 写进简历。'],
        ['真实与无误', '内容必须 100% 真实，夸大技术能力容易被识破；多次检查拼写语法并请他人校对；文件按 “resume – 姓名 – 职位” 命名，不要只叫 resume.pdf。'],
        ['简历类型', 'Reverse chronological 最常见，适合应届生，可把相关经历放在 “Professional Experience”、其他兼职放在 “General Experience”；Academic 突出研究、发表与教学，通常更长；Creative 附作品集链接，可与 GitHub、LinkedIn 互链。'],
        ['内容模块', '个人信息（专业邮箱、定制 LinkedIn URL）、3–5 句 Professional Summary、教育、奖项、工作经历（倒序，职位、机构简介、时间、职责）、志愿与社区经历、相关兴趣、专业协会、推荐人与专业发展。'],
        ['不写 / 可选', '不写可能导致歧视的信息：出生日期、照片、婚姻状况、是否为父母或照护者；家庭住址一般不写（除非地点是优势）；兴趣只在与岗位相关时写；推荐人信息通常在后期才提供，事先征得同意并给他们 KSC。'],
        ['适应 ATS 的格式', 'PDF p. 7：使用要点、粗体与制表符、无衬线字体、直白标题、日期放在经历之后、合适文件格式并沿用招聘广告的措辞；避免表格、分栏、边框、剪贴画、照片、图表、信息图、页眉页脚与缩写。'],
        ['获取反馈', 'Career Gateway → Dashboard → Resume Feedback：即时的 Resume Check，或提交 Career Connect 并在 2 个工作日内获得反馈。'],
      ], note: '同一份 PDF 内部有张力：ATS 面板建议 11–14 号与“不用页眉页脚”，清单却写 10–12 号并建议用页眉 / 页脚放页码和姓名。应先遵循雇主要求，再判断投递方式是否经过 ATS；不要把任一条当作绝对规则。' },
      { id: 'cover-letter', title: '求职信是什么，招聘者看什么', intro: 'Career Connect PDF · pp. 15–16（与 6 页 Cover Letter handout 内容相同）；模块 “What is a Cover Letter?” 与 0:31 动画。', headers: ['问题', '要点'], rows: [
        ['定义', '一页、结构清楚的信，反映个人专业品牌，简述专业背景并说明为何胜任；它是你的 marketing pitch，介绍并突出简历重点，通常是与雇主的第一份书面沟通。'],
        ['为什么即使没要求也可以写', '多数招聘流程要求求职信；即使广告没要求，附上一封也可能给招聘经理留下好印象、增加面试机会。求职信可以成就也可以毁掉一份申请。'],
        ['目的', '介绍自己、突出相关技能、知识与经历以获得面试；雇主用它快速判断是否满足最低选拔标准，并决定是否继续读简历。'],
        ['Speculative letter', '主动询问现在或将来的机会时，要说明具体想做的工作而不是“任何职位”，突出主要卖点，并写明下一步行动，例如何时跟进联系。'],
        ['不到 60 秒', '招聘者看求职信不到 60 秒，第一段结束前就要抓住注意力，并显示你与岗位明确匹配、与其他候选人有区别。'],
        ['招聘者寻找的四点', '说明为何对岗位与组织感兴趣的有力文字；学习领域、课外活动与职业兴趣（模块版加入相关工作经历）；KSC 与能力的对应；让你脱颖而出的个人差异点。'],
        ['写作提示', '遵循申请说明；简洁；一页、留白、10–12 号常规字体；尽力找到招聘经理的姓名与职衔，否则用 Dear Hiring Manager；明确引用 KSC 以便 ATS 检索；与简历一致；仔细校对；说明 Why them。'],
      ], note: '求职信展示书面沟通能力本身，所以错误代价很高。“为每个岗位重写”不等于每次从零开始：可以沿用结构和格式，但公司名称、地址、动机、KSC 与实例都要重新对准。' },
      { id: 'research', title: '研究与四个问题：先找材料，再讲故事', intro: 'PDF p. 17；模块 “Standing Out From the Crowd” 与 1:04 Four Questions soundbite（本地自动转录）。', headers: ['步骤', '应做什么'], rows: [
        ['Research yourself', '反思优势与待发展领域、技能、知识、经验、特质与动机；找出技能差距，说明正在或计划怎样弥补。'],
        ['Research the role', '完全掌握 KSC 与职责；了解实际工作内容、团队结构与文化、岗位是否符合你的能力与志向，并研究预期薪资。不相关或含糊的信息会暴露缺乏真实兴趣。'],
        ['Research the employer', '先了解公司做什么、岗位需要哪些技能。来源：LinkedIn（追踪员工职业路径）、Seek 公司评价、官网 Careers 页面、Glassdoor、年报与商业新闻；也问竞争对手、合作组织与近期新闻。'],
        ['Research the industry', '跟进经济、政治等当前事件及行业变化对目标组织的影响；在合适时引用，展示主动性与领域知识。'],
        ['Why them?', '理解组织独特的使命与文化，看清岗位实际做什么；它的愿景是否真正与你契合。'],
        ['Why apply?', '不要随机投递；说清为什么想要这个具体岗位，它怎样推进你的职业发展。'],
        ['Why you?', '找出你与其他学生不同的技能与经历组合，为什么他们应该雇用你。'],
        ['What do you bring?', '把技能映射到岗位要求：不必 100% 匹配，但关键技能应高度对应；说明你能解决什么挑战、带来什么独特价值。'],
      ], note: '四个问题是求职信及 elevator pitch 的骨架，也为之后的面试自我介绍做准备。把研究结论写成具体理由，例如引用组织的项目或价值观，但不要照抄官网句子。' },
      { id: 'recipe', title: '结构与 “Secret Recipe”：Engage → Align → Confirm', intro: 'PDF pp. 18–22；模块 “Formatting your Cover Letter” 与 “The Secret Recipe”，以 Reece Graduate Program 的 John Petakis 样信为例。', headers: ['部分', '写法'], rows: [
        ['Header & address', '你的姓名、电话、邮箱；日期；收件人姓名、职衔、组织与地址；Re: 职位名称及参考编号。每个岗位新建一封，复用时务必更新公司名称与地址。'],
        ['称呼', '尽量写具体收件人，并核对拼写与职衔；找不到姓名时 “Dear Hiring Manager” 完全可以接受。'],
        ['KSC', 'Key Selection Criteria 是胜任工作所需的知识、技能、经验与特质，列在招聘广告或职位说明中，例如沟通、分析能力、Excel、在压力下按时完成。Reece 广告中包括沟通、分析与解决问题、统计方法、学历与工作经历。'],
        ['1 · Engage（开头段）', '简要介绍自己和已完成或即将完成的学位；说明为何对岗位与组织感兴趣、为何应雇用你，并提及与组织的联系或推荐人（样例：朋友 Aiko 推荐）。说明如何得知职位。'],
        ['2 · Align（中间段）', '挑选最关键的 KSC，而不必逐条回应；用实例证明技能，不只列出。John 用客服代表和团队作业中处理分歧的经历证明沟通与团队能力，用 Kaizen、Toyota Way、SPSS 回归和 Excel 宏证明学习与分析能力。'],
        ['3 · Confirm（结尾段）', '确认对岗位的兴趣、希望获得面试，说明何时如何联系，感谢对方。'],
        ['Sign-off', 'PDF 版式页：称呼姓名用 “Yours sincerely”，称呼职衔用 “Yours faithfully”；模块指出 “Cheers” 不专业。'],
        ['不要写', '只列技能而无证据；照抄组织网站的句子；以 “My name is …” 开头（姓名已在信末）；过多以 “I” 开头的句子。'],
      ], note: '模块的知识检查要求按顺序排列：Header → 介绍与学历 → 兴趣 → KSC 对应 → 经历与证据 → 再次确认兴趣 → Sign off。Align 段的关键是“技能 + 情境 + 行动 + 结果”，而不是形容词堆叠。' },
      { id: 'samples', title: '13 份样本：观察共同模式与差异', intro: 'Sample cover letters 文件夹 · Arts、Biomedical、Business、Education、Engineering、Nursing、Nutrition、OT、Pharmaceutical ×2、Pharmacy、Radiography、Science。以下观察为本摘要的原创整理。', headers: ['观察', '学习要点'], rows: [
        ['Re: 行明确定位', 'Nursing 写出项目与参考编号 21587；Science 列出项目和具体 Position 1；OT 和 Pharmacy 在 Re: 或首段标出参考编号。'],
        ['首段先给身份与动机', '多数以“即将毕业 / 刚毕业于 Monash 某学位”开头，并立即连接岗位与组织价值，例如 Nutrition 引用雇主价值观、Education 提到参加学校活动后的判断。'],
        ['用量化或具体结果作证据', 'Engineering：材料测试带来 8% 材料成本节省；OT：文档流程效率提升 35%；Arts：在 Grattan Institute 做退休收入性别差距研究并向 CEO 汇报。'],
        ['联系行业的持续学习', 'Engineering 提到 Engineers Australia 会员资格；Pharmacy 提到学生会员与自主学习；Nutrition 写出 “life-long learning” 和额外专业发展。'],
        ['结尾用语并不统一', '13 份中 7 份使用 “Kind regards”，6 份使用 “Yours sincerely”；Arts 称呼 Dear Hiring Manager 却未用 “Yours faithfully”。清单只要求“专业的结尾，例如 Yours sincerely”。'],
        ['“一页”是原则，不是样本的统一形式', 'Business、Engineering 为 2 页，Education 为 3 页；OT 和 Pharmacy 样本没有日期行。按雇主要求和讲义清单检查自己的版本。'],
        ['复用必须重新对准', 'Pharmaceutical Science 两份样本正文几乎相同，只换了姓名、日期和收件人。可复用结构，但真实申请中每封都应重写动机、研究和证据。'],
      ], note: '把样本当作结构参照，而不是可替换名字的模板。若把一份样本的句子直接改成自己的版本，既可能不真实，也正好落入“通用、无针对性”的问题。' },
      { id: 'ai', title: '用 AI 辅助求职信：润色可以，代写不行', intro: '模块 “Using AI” 与 Knowledge Check Q6；连接 Rutkowski 对 AI 自满和隐私风险的提醒。', headers: ['用法', '判断'], rows: [
        ['适合的用途', '在自己写好的内容上调整语气以传达热情、扩展特定技能的说明、校对语法与拼写。'],
        ['不适合的用途', '只依据简历让 AI 生成整封信或“总结并转换简历”：结果通常笼统、缺乏针对性，雇主往往能看出。'],
        ['True / False', '“雇主一般很难察觉 AI 生成的求职信”——错误。模块解释：AI 生成的求职信通常不具体，这正是暴露点。'],
        ['真实性与隐私', '所有经历都必须真实，AI 扩写的“成就”需逐句核对；向工具输入简历、联系方式和推荐人信息前，先了解其数据与隐私影响。'],
        ['与终身学习的关系', 'AI 输出不是 final word：先用自己的研究和四个问题形成内容，再把 AI 用作编辑工具，并检查它是否改变了事实或口吻。'],
      ], note: '模块把 AI 定位为“不必要但可能有用”的辅助。适用的申请与课程考核可能各有 AI 使用规定，以官方说明为准。' },
    ],
    quiz: [
      ['Robot Curve 的四个层级是什么？', 'Creative → Skilled → Rote → Robotic。竞争使原创流程逐步成为最佳实践、例行程序和自动化操作；每层价值与价格都下降，但价值仍高于价格。'],
      ['为什么 Robot Curve 同时代表威胁和机会？', '自动化让部分工作消失，但每一次把能力推下曲线都会释放新价值，并在顶端为发明、管理系统的人创造机会，如汽车工人与图库摄影市场。'],
      ['什么是 “brittle” 技能？', '曲线低层的技能：自主权少、收入低、在市场要求新技能时难以适应，也最先被算法替代。'],
      ['Ken Jennings 与 Watson 的例子说明什么？', '与机器比拼事实存储和检索注定失败。人应发展想象力、独立思考、沟通、团队协作与适应变化的能力。'],
      ['“The passion of the explorer” 指什么，比例是多少？', '长期致力于在领域中产生影响、对意外挑战感到兴奋并持续与他人合作解决问题。文章引用的 HBR 研究为 14% 的美国员工。'],
      ['Rutkowski 为什么认为 GenAI 会助长学习自满？', '它把合并压缩的信息包装成看似完整的 “final word”，减少进一步探究；而答案可能不完整、虚构或带偏见。'],
      ['为什么用好 AI 本身也需要持续学习？', '要理解提示怎样影响答案质量，以及工具的安全和隐私影响，尤其是提示中输入的信息。AI 应与学习结合，而不能替代学习。'],
      ['“小步更新 vs 陡坡”比喻在说什么？', '持续、增量地学习，差距会很小；停滞多年后突然遇到裁员或新系统，就要在短时间翻越陡峭的学习坡。'],
      ['简历的指导原则是什么？首页为什么重要？', '相关性。招聘者约 60% 注意力在第一页，所以关键信息要放在首页，并只保留与岗位相关的内容。'],
      ['为什么建议简历不放照片、出生日期和婚姻状况？', '这些信息可能成为歧视依据，且与胜任岗位无关。家庭住址在申请阶段通常也不需要。'],
      ['招聘者看求职信多久？这对开头段意味着什么？', '不到 60 秒。第一段结束前必须抓住注意力：说明身份、学位、职位、动机与匹配度。'],
      ['研究后的四个问题是什么？', 'Why them?、Why apply?、Why you?、What do you bring? 它们把研究转化为求职信和 elevator pitch 的叙事。'],
      ['什么是 KSC，应怎样在求职信中回应？', '胜任岗位所需的知识、技能、经验与特质。挑选关键项，用具体经历和结果证明，并明确使用广告中的关键词以便 ATS 检索。'],
      ['Secret Recipe 的三个部分分别做什么？', 'Engage：介绍自己与学位、说明兴趣和联系；Align：用证据对准 KSC；Confirm：确认兴趣、希望面试并专业结尾。'],
      ['找不到收件人姓名时如何称呼，结尾怎样选择？', '可用 “Dear Hiring Manager”。PDF 版式规则：称呼姓名用 Yours sincerely，称呼职衔用 Yours faithfully；不要用 “Cheers”。'],
      ['写求职信时 AI 适合做什么？', '润色语言、扩展自己的内容、校对语法拼写；不适合仅凭简历生成整封信，因为结果通常笼统，雇主容易察觉。'],
    ],
    reviewTitle: '自测：从学习策略到求职信结构',
    reviewIntro: '16 道原创复习题，依据 Own-time 材料整理；不是 Moodle 官方测验或标准答案。展开查看解释。',
    sourcesTitle: '材料索引与学习范围',
    sourcesIntro: '8 项 Own-time 材料逐项列出。两篇网页阅读与两份 PDF 按原文整理；SCORM 模块按 11 个屏幕的正文、选项和反馈整理，模块音视频与周音频为本地自动转录；13 份样本信均已逐份检查。课程私有原文件不随网站上传，Moodle 链接需要课程访问权限。',
    sourceLink: '查看来源', sectionLink: '对应笔记',
    audioTitle: '音频串联：好奇心与 GPS 比喻',
    audioBody: '音频用 GPS 比喻说明：工具高效带路，久了却让人失去自己认路的能力。它把 Robot Curve 与 Rutkowski 连起来，提出“持续好奇”是 AI 难以复制的特质，并把直接接受 AI 答案比作“吃预先嚼好的食物”。注意几处概括：14% 在原文是 HBR 研究中的美国员工；$25 的照片在原文是在线租用的图库照片，而非即时生成；“学习会重塑大脑以更好应对压力”和“学一项非数字技能是终极反叛”属于音频自己的引申，原文只说持续学习可提升自信、自我效能与幸福感。',
    boundaryLabel: '版本与证据范围',
    boundary: '这里总结 2026-10-21 归档的课程版本：Neumeier 原文、Forbes 2024 文章、Career Connect PDF（23 页）、求职信模块与样本文件夹。课程信息图由 NotebookLM 生成，作快速回顾。Cover Letter handout 原入口已隐藏，使用样本文件夹中的同名 6 页讲义，与主 PDF pp. 15–20 内容一致。模块 Summary 的 “Reflect” 卡片混入了面试建议文字，这里未当作求职信要求。音频为自动转录，独有表述不当作经人工逐字核验的事实；样本观察与实践建议为原创分析。',
  },
  en: {
    subtitle: 'See how work slides down the Robot Curve, keep learning to stay upstream, then turn capabilities into evidence-based applications.',
    summary: 'Chapter 6 · My Career: Strategically Managing Lifelong Professional Development. Connect the Week 12 Own-time readings, course infographic and audio, the Career Connect resume and cover letter PDF, the cover letter module and 13 sample letters into a lifelong learning strategy and a method for writing a targeted cover letter.',
    tags: ['Robot Curve', 'Lifelong learning', 'AI & critical thinking', 'Resume', 'Cover letter', 'KSC', 'Engage · Align · Confirm'],
    overview: 'Move from automatable skills to value you can demonstrate',
    lead: 'Locate your work on the Robot Curve → stay ahead through small, continuous learning and critical use of AI → research yourself, the role, the employer and the industry → organise your material with Why them / Why apply / Why you / What do you bring → write a cover letter that follows Engage → Align → Confirm and evidences the KSC → proofread, get feedback and retarget it for every role.',
    sections: [
      { id: 'tasks', title: 'This week’s tasks: schedule', intro: 'Moodle Week 12 task table · course dates 19–25 October 2026; recorded as shown on the page without revising dates.', headers: ['Task', 'Due / time expected'], rows: [
        ['Assessment 1 · Pre-reading, Tutorial, and Workshop Materials', 'Before the workshop · about 2 hours.'],
        ['Assessment 2 · Social Responsibility Debate', 'Week 12 Wednesday during the Applied Session · about 2 hours (teamwork).'],
        ['Assessment 3 · Business Report', 'Week 12 Friday 11:55 PM.'],
        ['Assessment 3 · Resolution of a challenging professional problem — Interview', 'Face to face, arranged by the tutor during Week 14 if not done earlier · about 15 minutes per student.'],
      ], note: 'This page covers the Own-time learning materials only and contains no debate preparation. Check each assessment brief on Moodle for submission requirements and AI-use rules.' },
      { id: 'robot-curve', title: 'The Robot Curve: a waterfall of work value', intro: 'Marty Neumeier · The Robot Curve; course infographic “Climbing the Robot Curve”.', headers: ['Level / idea', 'Meaning and examples'], rows: [
        ['Constant downward pressure', 'Competition routinises creative processes: Creative → Skilled → Rote → Robotic. At each step value and price fall, with value staying higher than price.'],
        ['Creative work', 'Little routine and much experimentation; original or unique work with high cost and value, provided it meets a significant need: scientific discoveries, breakthroughs, new business ideas, inventions, leadership and the arts.'],
        ['Skilled work', 'Once-original techniques become best practices shared across a profession. Employers gain some interchangeability, on a sliding scale of talent (the heart surgeon example).'],
        ['Rote work', 'Standardised work can be done by lower-cost producers. Writing a phone operator’s decision tree needs a skilled worker; following it does not, so it scales and can be outsourced.'],
        ['Robotic work', 'Work that machines do more cheaply or consistently is automated: the decision tree becomes voice software, robotic arms weld, and a $4,000, two-day photograph becomes a $25 online rental.'],
        ['Destruction and creation', 'Automation removes jobs but opens opportunities at the top for people who invent and manage the systems (cars replaced horseshoers but created autoworkers; stock photography opened a new market). Each push down the curve is a chance for profit.'],
        ['The “brittle” skill trap', 'Lower on the curve means less autonomy, less pay and less adaptability when new skills are needed. Employers do not want robot-like employees—they have robots—but people who think independently, imagine, communicate, work in teams and adapt continuously.'],
      ], note: 'The reading’s warning is not that machines will think like humans but that humans have started thinking like machines. Competing with machines on fact storage and repetition (Ken Jennings versus Watson) is a losing strategy. The infographic labels levels as highest, medium and lowest market value; that is a simplification, as the article stresses that each step also unlocks new value.' },
      { id: 'learning', title: 'Lifelong learning in the AI era: a necessity, not a hobby', intro: 'Claire Rutkowski · Forbes · 26 March 2024; audio How Curiosity Beats the Robot Curve.', headers: ['Idea', 'Revision point'], rows: [
        ['The passion of the explorer', 'The article cites a 2021 HBR study: only 14% of U.S. workers showed a passion for lifelong learning in their field—long-term commitment, excitement about unexpected challenges and a desire to connect with others to solve problems. Leaders struggled to foster it.'],
        ['“Why learn what I can look up?”', 'Digital sources and GenAI make learning for its own sake seem obsolete. The article argues constant technology use affects decision-making, memory, relationship building and critical thinking; complacency is a symptom and a problem.'],
        ['GenAI as a double-edged sword', 'It sources, summarises and synthesises well, but polished answers are treated as the “final word” and discourage further inquiry. Users see an amalgamated summary rather than varied perspectives, which may be incomplete, hallucinated or biased.'],
        ['Responsible AI use requires learning', 'Understand how prompts shape answer quality and the security and privacy implications of tools, especially information fed in through prompts. This needs discrete training: AI should accompany learning, not replace it.'],
        ['Small updates vs steep hills', 'Learn constantly and incrementally, like routine phone updates. Waiting until a layoff (RIF) turns gaps into a steep hill to climb quickly. Organisations at a standstill also fall behind competitors faster than ever.'],
        ['Skills beyond technology', 'Upskilling and reskilling support company competitiveness and retention. Progression also needs soft skills such as working well in hybrid environments and leadership, which take time to develop. What got you here will not take you to the next place.'],
        ['Learning and wellbeing', 'The article cites studies linking continual learning to self-confidence, self-efficacy, wellbeing and life satisfaction. The audio frames this as gaining mastery and agency against burnout and anxiety.'],
      ], note: 'Connect the readings: the Robot Curve explains why to move upstream; Rutkowski explains the obstacle—treating a fluent AI answer as complete understanding. In practice, use AI as a starting point, then check sources, compare perspectives, state limitations and record what you learned.' },
      { id: 'resume', title: 'Resume: relevance is the guiding principle', intro: 'Career Connect PDF · pp. 1–14, including a sample Reece job ad and three sample resumes.', headers: ['Point', 'Practice'], rows: [
        ['Relevance', 'Employers use the resume to decide on interviews, often among many applicants. Include only relevant information that addresses the job, concisely and clearly structured, showing you can synthesise and prioritise.'],
        ['Layout and length', 'Recruiters give roughly 60% of attention to page one, so put key information there. Use a conventional font (Helvetica, Arial, Calibri) at 10–12, at most two fonts, clear sections, bullets, white space and consistent formatting. The checklist suggests 2–3 pages or the employer’s requested length.'],
        ['Language and keywords', 'Use strong verbs such as built, developed and created instead of assisted with. Write plain business English without SMS language, abbreviations, jargon or slang. Incorporate recurring keywords and KSC from target job descriptions.'],
        ['Truthful and error free', 'Everything must be 100% true; inflated technical claims are easy to expose. Check spelling and grammar repeatedly and ask someone else to proofread. Name the file “resume – Full Name – Job Title”, not just resume.pdf.'],
        ['Resume styles', 'Reverse chronological is most common and suits graduates; split “Professional Experience” from “General Experience”. Academic resumes highlight research, publications and teaching and are usually longer. Creative resumes link to a portfolio, which can connect with GitHub and LinkedIn.'],
        ['Content sections', 'Personal details (professional email, customised LinkedIn URL), a 3–5 sentence professional summary, education, awards, employment history in reverse order (title, organisation description, dates, responsibilities), volunteering, relevant interests, professional associations, referees and professional development.'],
        ['Omit or optional', 'Omit information that could ground discrimination: date of birth, photos, marital status, parenting or caring status. Home address is usually unnecessary unless location is an asset. Include hobbies only when relevant. Referee details usually come later; seek approval and send referees the KSC.'],
        ['ATS-friendly formatting', 'PDF p. 7: use bullets, bold and tabs, sans-serif fonts, straightforward headings, dates after experiences, an appropriate file format and wording from the job ad. Avoid tables, columns, borders, clipart, photos, charts, infographics, headers/footers and abbreviations.'],
        ['Get feedback', 'Career Gateway → Dashboard → Resume Feedback: instant Resume Check, or submit to Career Connect for feedback within 2 business days.'],
      ], note: 'The PDF contains tensions: the ATS panel suggests sizes 11–14 and no headers/footers, while the checklist says 10–12 and recommends headers or footers with page numbers and your name. Follow the employer’s instructions first and consider whether the application passes through an ATS; treat neither rule as absolute.' },
      { id: 'cover-letter', title: 'What a cover letter is and what recruiters look for', intro: 'Career Connect PDF · pp. 15–16 (same content as the six-page Cover Letter handout); module “What is a Cover Letter?” and 0:31 animation.', headers: ['Question', 'Key points'], rows: [
        ['Definition', 'A one-page, logically structured letter that reflects your professional brand, briefly describes your background and explains why you are qualified. It is your marketing pitch, introducing your resume’s highlights and often your first written communication with an employer.'],
        ['Why write one even if not required', 'Most recruitment processes require one. Even when an ad does not, including one can impress the hiring manager and improve interview chances. A cover letter can make or break an application.'],
        ['Purpose', 'Introduce yourself and highlight relevant skills, knowledge and experience to secure an interview. Employers use it to judge quickly whether you meet minimum selection criteria and whether to read your resume.'],
        ['Speculative letters', 'When enquiring about current or future openings, specify the kind of work you want rather than any position, emphasise key selling points and state your next action, such as when you will follow up.'],
        ['Under 60 seconds', 'Recruiters spend less than 60 seconds on a cover letter. Capture attention by the end of the first paragraph and show a clear, differentiated match for the role.'],
        ['Four things recruiters look for', 'A compelling letter showing interest in the role and organisation; study area, co-curricular activity and career interests (the module adds aligned work experience); alignment between KSC and capabilities; personal differentiators.'],
        ['Writing tips', 'Follow instructions; be concise; one page with white space and a 10–12 point standard font; find the hiring manager’s name and title, otherwise use Dear Hiring Manager; reference KSC explicitly for ATS keyword searches; stay consistent with your resume; proofread; explain why them.'],
      ], note: 'A cover letter demonstrates written communication itself, so errors are costly. Writing a new letter for each role does not mean starting from scratch: keep the structure and formatting, but retarget the company details, motivation, KSC and examples.' },
      { id: 'research', title: 'Research and four questions: gather material before telling the story', intro: 'PDF p. 17; module “Standing Out From the Crowd” and the 1:04 Four Questions soundbite (local automatic transcription).', headers: ['Step', 'Action'], rows: [
        ['Research yourself', 'Reflect on strengths, development areas, skills, knowledge, experiences, attributes and motivators. Identify skills gaps and what you are doing or planning to do to bridge them.'],
        ['Research the role', 'Master the KSC and responsibilities; explore what you would actually do, team structures and culture, fit with your capabilities and aspirations, and expected salary. Irrelevant or unclear content signals a lack of genuine interest.'],
        ['Research the employer', 'Understand what the company does and which skills the role needs. Sources: LinkedIn (track employees’ career progression), Seek company reviews, the Careers page, Glassdoor, annual reports and business news. Ask about competitors, partners and recent news.'],
        ['Research the industry', 'Follow current events such as the economy or politics and how industry change may affect the organisation. Refer to them when appropriate to show initiative and knowledge.'],
        ['Why them?', 'Understand the organisation’s unique mission and culture and what the role entails. Does its vision genuinely resonate with you?'],
        ['Why apply?', 'Move beyond random applications. Explain why this specific role excites you and advances your professional journey.'],
        ['Why you?', 'Identify the combination of skills and experiences that sets you apart from other students and explains why they should hire you.'],
        ['What do you bring?', 'Map your skills to requirements. They need not match 100%, but critical skills should align closely; show which challenges you can solve and what distinctive value you add.'],
      ], note: 'The four questions underpin the cover letter and an elevator pitch, and prepare you to introduce yourself in interviews. Turn research into specific reasons, such as an organisation’s projects or values, without copying sentences from its website.' },
      { id: 'recipe', title: 'Structure and the “secret recipe”: Engage → Align → Confirm', intro: 'PDF pp. 18–22; module “Formatting your Cover Letter” and “The Secret Recipe”, using John Petakis’s letter for the Reece Graduate Program.', headers: ['Part', 'How to write it'], rows: [
        ['Header and address', 'Your name, phone and email; the date; the recipient’s name, title, organisation and address; a Re: line with the position title and reference number. Create a new letter for each role and update company names and addresses when reusing a base.'],
        ['Salutation', 'Address a specific person where possible, checking spelling and title. If no name can be found, “Dear Hiring Manager” is perfectly acceptable.'],
        ['KSC', 'Key Selection Criteria are the knowledge, skills, experience and attributes needed for a job, listed in the ad or position description—e.g. communication, analytical skills, Excel, working under pressure to deadlines. The Reece ad includes communication, analytical and problem-solving skills, statistical methods, tertiary qualifications and work experience.'],
        ['1 · Engage (opening)', 'Briefly introduce yourself and the degree you have completed or will complete; explain your interest in the role and organisation and why they should hire you; mention connections or referrals (e.g. a friend, Aiko, recommended contact). State how you learned about the role.'],
        ['2 · Align (middle)', 'Select the most important KSC rather than every criterion and evidence them instead of listing skills. John evidences teamwork and communication through managing disagreement as a Customer Representative and in team assignments, and learning and analysis through Kaizen, the Toyota Way, SPSS regression and Excel macros.'],
        ['3 · Confirm (closing)', 'Confirm interest in the role, request an interview, explain how and when you can be contacted and thank the reader.'],
        ['Sign-off', 'The PDF layout page: “Yours sincerely” when addressing someone by name, “Yours faithfully” when addressing a title. The module notes that “Cheers” is not professional.'],
        ['Do not include', 'A list of skills without evidence; sentences copied from the organisation’s website; an opening such as “My name is …” (your name appears at the end); overuse of “I” to start sentences.'],
      ], note: 'The module’s knowledge check orders the parts: header → introduction and qualifications → interest → KSC alignment → experience and evidence → confirmation of interest → sign-off. A strong Align paragraph connects skill, context, action and result rather than stacking adjectives.' },
      { id: 'samples', title: 'Thirteen samples: common patterns and differences', intro: 'Sample cover letters folder · Arts, Biomedical, Business, Education, Engineering, Nursing, Nutrition, OT, Pharmaceutical ×2, Pharmacy, Radiography and Science. These observations are original analysis.', headers: ['Observation', 'Lesson'], rows: [
        ['A precise Re: line', 'Nursing names the program and reference number 21587; Science lists the program and a specific Position 1; OT and Pharmacy give reference numbers in the Re: line or opening.'],
        ['Identity and motivation first', 'Most open with a recent or upcoming Monash degree and immediately connect the role to the organisation’s values—Nutrition quotes the employer’s values; Education draws on attending school events.'],
        ['Quantified or concrete evidence', 'Engineering: material testing yielded 8% savings in material costs. OT: documentation efficiency rose by 35%. Arts: Grattan Institute research on the retirement income gender gap, presented to the CEO.'],
        ['Lifelong learning tied to the field', 'Engineering cites Engineers Australia membership; Pharmacy cites student membership and self-directed learning; Nutrition names a passion for life-long learning and further professional development.'],
        ['Closings vary', 'Seven of 13 use “Kind regards” and six use “Yours sincerely”. Arts addresses “Dear Hiring Manager” but does not close with “Yours faithfully”. The checklist only requires a professional closing such as “Yours sincerely”.'],
        ['One page is a principle, not uniform practice', 'Business and Engineering run to two pages and Education to three; the OT and Pharmacy samples lack a date line. Check your own letter against employer instructions and the handout checklist.'],
        ['Reuse must be retargeted', 'The two Pharmaceutical Science samples share almost identical body text, changing only name, date and recipient. Reuse the structure, but rewrite motivation, research and evidence for each real application.'],
      ], note: 'Use the samples as structural references, not templates with swappable names. Adapting another sample’s sentences risks being untrue and produces exactly the generic, untargeted letter recruiters reject.' },
      { id: 'ai', title: 'AI and cover letters: refine, do not outsource', intro: 'Module “Using AI” and Knowledge Check Q6, connected with Rutkowski’s warnings about AI complacency and privacy.', headers: ['Use', 'Judgment'], rows: [
        ['Suitable uses', 'Adjust language to convey enthusiasm, expand on specific skills in content you wrote, and proofread grammar and spelling.'],
        ['Unsuitable uses', 'Generating a whole letter from your resume, or “summarising and converting a resume”: results tend to be generic and lack impact, and employers often notice.'],
        ['True / False', '“It is generally difficult for employers to detect AI-generated cover letters” is false. The module explains that AI-generated letters are usually non-specific and general, which gives them away.'],
        ['Truthfulness and privacy', 'Every claim must be true, so verify any achievement AI expands. Understand a tool’s data and privacy implications before entering your resume, contact details or referee information.'],
        ['Link to lifelong learning', 'AI output is not the final word. Build content from your own research and the four questions first, then use AI as an editor and check whether it changed facts or voice.'],
      ], note: 'The module positions AI as “not crucial” but potentially helpful. Applications and course assessments may set their own AI-use rules; follow the official instructions.' },
    ],
    quiz: [
      ['What are the four levels of the Robot Curve?', 'Creative → Skilled → Rote → Robotic. Competition turns original processes into best practice, rote procedures and automated operations; value and price fall at each step, with value staying above price.'],
      ['Why is the Robot Curve both a threat and an opportunity?', 'Automation eliminates some work, but each push down the curve unlocks new value and creates opportunities at the top for people who invent and manage systems, as with autoworkers and stock photography.'],
      ['What are “brittle” skills?', 'Skills low on the curve: little autonomy, lower pay, poor adaptability when markets demand new skills, and the first to be replaced by algorithms.'],
      ['What does Ken Jennings versus Watson illustrate?', 'Competing with machines on fact storage and recall is a losing strategy. People should develop imagination, independent thinking, communication, teamwork and adaptability.'],
      ['What is “the passion of the explorer”, and how common is it?', 'Long-term commitment to impact, excitement about unexpected challenges and a desire to connect with others to solve problems. The cited HBR study found it in 14% of U.S. workers.'],
      ['Why does Rutkowski think GenAI encourages complacency?', 'It packages amalgamated, compressed information as a seemingly complete “final word”, discouraging inquiry, while answers may be incomplete, hallucinated or biased.'],
      ['Why does using AI well itself require continuous learning?', 'Users must understand how prompts shape answer quality and the security and privacy implications of tools, especially what they enter in prompts. AI accompanies learning; it does not replace it.'],
      ['What does “small updates versus steep hills” mean?', 'Learning constantly and incrementally keeps gaps small. Stagnating for years means facing a steep hill under time pressure after a layoff or major change.'],
      ['What is the guiding principle for a resume, and why does page one matter?', 'Relevance. Recruiters give around 60% of their attention to page one, so place key information there and keep only content relevant to the job.'],
      ['Why omit photos, date of birth and marital status from a resume?', 'They can ground discrimination and are irrelevant to the ability to do the role. A home address is usually unnecessary at application stage too.'],
      ['How long do recruiters spend on a cover letter, and what follows for the opening?', 'Under 60 seconds. Capture attention by the end of the first paragraph by stating your degree, the role, your motivation and your fit.'],
      ['What are the four questions to ask after research?', 'Why them? Why apply? Why you? What do you bring? They turn research into the narrative of a cover letter and an elevator pitch.'],
      ['What are KSC, and how should a cover letter address them?', 'The knowledge, skills, experience and attributes needed for a job. Select key criteria, evidence them with specific experiences and outcomes, and use the ad’s keywords explicitly for ATS searches.'],
      ['What do the three parts of the secret recipe do?', 'Engage: introduce yourself and your degree, interest and connections. Align: evidence the KSC. Confirm: confirm interest, request an interview and sign off professionally.'],
      ['How do you address and close a letter when no name is available?', 'Use “Dear Hiring Manager”. Under the PDF layout rule, close with “Yours sincerely” for a named person and “Yours faithfully” for a title; never “Cheers”.'],
      ['What is AI suitable for when writing a cover letter?', 'Refining language, expanding your own content and proofreading. It is unsuitable for generating the whole letter from your resume, because results are usually generic and easy to spot.'],
    ],
    reviewTitle: 'Self-checks: from learning strategy to cover letter structure',
    reviewIntro: '16 original revision questions based on the Own-time materials. These are not official Moodle questions or model answers. Expand to see explanations.',
    sourcesTitle: 'Material index and learning scope',
    sourcesIntro: 'All 8 Own-time materials are indexed. Both web readings and both PDFs were read directly; the SCORM module was reviewed screen by screen across 11 screens including options and feedback; the module media and weekly audio were automatically transcribed locally; all 13 sample letters were checked individually. Private course originals are not uploaded with the site; Moodle links require course access.',
    sourceLink: 'View source', sectionLink: 'Related notes',
    audioTitle: 'Audio thread: curiosity and the GPS analogy',
    audioBody: 'The audio compares AI to a GPS that efficiently guides you while eroding your own sense of direction. It connects the Robot Curve with Rutkowski, presents relentless curiosity as the trait AI cannot replicate, and likens accepting AI answers to eating pre-chewed food. Note several generalisations: the 14% figure refers to U.S. workers in the HBR study; the $25 photograph is an online stock rental in the original, not an instantly generated image; “learning rewires the brain to handle stress” and “learning a non-digital skill as the ultimate rebellion” are the audio’s own extensions. The article only links continual learning to confidence, self-efficacy and wellbeing.',
    boundaryLabel: 'Versions and evidence scope',
    boundary: 'This guide summarises course versions archived on 21 October 2026: Neumeier’s article, the 2024 Forbes article, the 23-page Career Connect PDF, the cover letter module and the samples folder. The course infographic was generated with NotebookLM and serves as a quick recap. The original Cover Letter handout entry is hidden; the six-page handout of the same name from the samples folder matches main PDF pp. 15–20. The module summary’s “Reflect” card contains stray interview advice, which is not treated as a cover letter requirement here. The audio is automatically transcribed; unique wording is not treated as manually verified fact. Sample observations and practical suggestions are original analysis.',
  },
} as const

export default function Week12({ locale }: { locale: Locale }) {
  const c = copy[locale]
  const toc = [
    { id: 'overview', label: locale === 'zh' ? '本周主线' : 'Overview' },
    ...c.sections.map(({ id, title }) => ({ id, label: title.split('：')[0].split(':')[0] })),
    { id: 'review', label: locale === 'zh' ? '自测' : 'Self-checks' },
    { id: 'sources', label: locale === 'zh' ? '材料与来源' : 'Sources' },
  ]
  const reviewIndex = c.sections.length + 2
  return (
    <WeekLayout weekId="12" locale={locale} eyebrow="Week 12 · Chapter 6 · 19–25 October 2026" title="Lifelong Learning and Cover Letters" subtitle={c.subtitle} summary={c.summary} updated="21 Oct 2026" tags={[...c.tags]} toc={toc}>
      <ContentSection id="overview" index="01" title={c.overview}>
        <LeadCard label={locale === 'zh' ? '本周行动主线' : 'Action thread'}>{c.lead}</LeadCard>
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
