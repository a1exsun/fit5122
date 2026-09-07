import { ChapterLayout } from '@/components/chapter-layout'
import { QuizAccordion } from '@/components/quiz-accordion'
import { Callout, ContentSection, InfoCard, LeadCard, ResponsiveTable, SourceList } from '@/components/week-layout'
import type { Locale } from '@/i18n'

const sources = [
  'week05/own-time/transcripts/What_is_quality_subtitle.txt',
  'week05/own-time/transcripts/FIT5122_Professional_Practice_Chapter_3_Quality_and_Reliability_subtitle.txt',
  'week05/own-time/Software error caused serious incident for airline.md',
  'week05/own-time/Case Study 2 - The Epic Meltdown of TSB Bank.md',
  'week06/own-time/transcripts/Measuring_and_Managing_quality_subtitle.txt',
  'week06/own-time/transcripts/Code Quality Podcast - transcript.md',
  'week06/own-time/ISO IEC 9126 in Software Engineering.md',
  'week06/own-time/Software Quality Standards - ISO 5055.md',
  'week06/own-time/What Is The Purpose Of The ISO 27001 Standard.md',
  'week06/own-time/Improve Software Testing.md',
  "week06/own-time/Software Quality Management Best Practices - 5 Dos and Don'ts.md",
]

const copy = {
  zh: {
    subtitle: 'Chapter 03 · 从失败机制到质量证据',
    summary: '串联 Week 05 的质量、可靠性与失败案例，以及 Week 06 的缺陷度量、标准与全生命周期管理。复习重点不是堆砌测试名称，而是解释风险、选择控制，并用证据支持发布决定。',
    tags: ['Week 05–06', '20 个复习考点', '20 道材料衍生题', 'MCQ + Short answer'],
    toc: ['考试地图', 'Week 05', 'Week 06', '标准辨析', '案例应用', '测试证据', '易错辨析', '答题模板', 'W05 模拟题', 'W06 模拟题', '依据与边界'],
    mapTitle: '两周，一条质量决策链',
    mapIntro: '按课程主题组织复习，不代表已确认的考试权重。先判断需求与失败后果，再选择度量、预防和上线条件。',
    lead: 'Requirements → failure consequences → prevention & measurement → release evidence → learning.',
    map: [
      ['Week 05 · Why quality matters', '定义质量与可靠性，识别人、流程、技术如何共同造成事故，再把 TUI / TSB 的失败机制转为控制要求。'],
      ['Week 06 · How to manage it', '区分缺陷影响和处理紧迫性，选择合适标准与测试层级，用持续反馈和可核查证据管理质量。'],
    ],
    week05Title: 'Week 05 · 质量、可靠性与专业责任',
    week05Intro: '答题时连接定义、场景和后果；“有 bug”不是完整根因分析。',
    week05: [
      ['01 · Quality', 'Conformance to requirements：满足已说明要求以及用户或客户的需要与期望。功能齐全不代表解决了正确问题。'],
      ['02 · Reliability', '在规定时间与环境中持续正确运行；课程将它概括为质量随时间和条件的保持。一次 demo 成功不能证明可靠。'],
      ['03 · Criticality', 'Safety-critical 关乎生命与严重损害；mission-critical 关乎组织使命或生存；business-critical 关乎高额业务损失。按后果判断，类别可重叠。'],
      ['04 · Whole-system responsibility', '系统包含 people、processes、technology；分析人员、设计者、开发者、维护者和采用组织都可能承担责任，不能只归咎最后操作的人。'],
      ['05 · Failure causes', '沟通不足、复杂设计理解不足、缺乏 graceful failure、测试不足、配置安装错误及专业能力不足；每一项都应配对应控制。'],
      ['06 · Data and trust', '错误数据、泄露与停机可跨系统传播；业务恢复不等于信任恢复，也不能只用 uptime 代表可靠性。'],
      ['07 · TUI contextual assumption', '把 Miss 推断为儿童，导致成年旅客采用儿童重量。核心是错误业务假设进入安全计算，而不是简单的拼写错误。'],
      ['08 · Incomplete workaround', '人工改称谓及局部自动修复未覆盖全部值机时间窗。临时缓解必须跟踪，根因修复需要全渠道回归证据。'],
      ['09 · TSB migration', '复杂依赖与源系统知识不足叠加进度压力；功能或 UAT 成功不能证明真实规模性能、账户隔离及数据完整性。'],
      ['10 · Evidence-based go-live', '试迁移、功能/UAT/性能测试、对账、演练、go/no-go 和 rollback 条件应预先明确。分批迁移降低影响范围，但增加并行系统与一致性成本。'],
    ],
    week06Title: 'Week 06 · 度量、标准与质量管理',
    week06Intro: '度量必须服务一个决定；测试结果必须能对应具体需求和风险。',
    week06: [
      ['01 · Contextual defect', 'Defect 是行为不符合需求。同样的移动端显示问题是否是缺陷，取决于目标用户和使用环境，不能借狭窄规格忽略真实需要。'],
      ['02 · Severity vs priority', 'Severity 是影响，priority 是修复紧迫性；结合用户暴露、业务时间窗与风险决定顺序，不把两者视作同义词。'],
      ['03 · SQA / SQC / Testing', 'SQA 改善过程和预防；SQC 评价产品符合性；testing 发现并评估问题。测试通过不是正确需求或零缺陷的证明。'],
      ['04 · Three measurement views', 'Internal 看代码结构；external 看运行行为；quality in use 看真实用户的有效性、生产力、安全与满意度。'],
      ['05 · ISO 9126', '六项产品特征：functionality、reliability、usability、efficiency、maintainability、portability；不只是外观或用户界面。'],
      ['06 · ISO 5055 / 27001', '5055 衡量源代码危险结构弱点；27001 关注组织的 ISMS 与 CIA。代码扫描与安全管理体系互补，不能互相替代。'],
      ['07 · Prevention and shift-left', '尽早审查需求、设计和测试条件，让 QA 参与讨论并持续反馈。早期需求错误若晚发现，通常牵连更多设计与实现返工。'],
      ['08 · TDD and testing layers', 'Red → Green → Refactor；单元测试打底，集成测试覆盖接口，关键 E2E 覆盖完整流程，另用 UAT、负载与探索测试回答不同问题。'],
      ['09 · Planning and collaboration', 'Policy 定原则；quality plan 定目标与责任；strategy 定测试方法；test plan 定 what/when/how/who。缺陷报告需复现、环境、预期/实际结果和证据。'],
      ['10 · Debt, flow and AI', '复杂度与结构弱点使变更更慢、更易回归。自动化重复检查，让人工探索未知风险；AI 生成速度不能替代审查、需求验证或责任。'],
    ],
    standardsTitle: '三套标准：先看评价对象',
    standardsIntro: '这里复习课程所用版本与框架，不把历史教材模型当作现行标准的全部内容。',
    standardsHeaders: ['框架', '关注对象与内容', '情境中的用途'],
    standards: [
      ['ISO/IEC 9126', '产品质量模型；含内部、外部和使用质量视角，产品模型有六项特征。', '把“好用且可靠”拆成可评估维度；如 recoverability 属于 reliability，testability 属于 maintainability。'],
      ['ISO/IEC 5055:2021', '源代码结构：security、reliability、performance efficiency、maintainability。', '用静态分析识别跨组件危险弱点；弱点计数/密度可支持供应商验收、发布门槛和改进目标。'],
      ['ISO/IEC 27001', '组织信息安全管理体系（ISMS）；confidentiality、integrity、availability。', '明确范围、风险处理、控制、审计与持续改进；不是单个软件产品无漏洞的保证。'],
    ],
    standardsNote: '9126 不是“仅外部”、5055 不是“所有质量”、27001 不是“只安装安全工具”。不要把三者混成同一张产品检查表。',
    casesTitle: '案例：原因 → 后果 → 控制 → 证据',
    casesIntro: '以下控制和验证建议是课程原则的应用，不声称事故组织实际执行过这些措施。',
    casesHeaders: ['案例信号', '机制与后果', '建议控制与所需证据'],
    cases: [
      ['TUI · Miss 被识别为儿童', '文化/领域假设污染重量数据，并影响起飞计算；称谓不能可靠代表年龄。', '澄清年龄分类规则；针对成人/儿童、所有称谓、渠道和时间窗测试；独立核对安全计算输入。'],
      ['TUI · 修复遗漏 24 小时内在线值机', '局部修复与人工交接留下未覆盖路径，人员变化使缓解失效。', '记录已知缺陷与负责人；建立渠道 × 时间窗回归矩阵，验证人工流程撤除后仍安全。'],
      ['TSB · 登录失败、余额异常、他人账户可见', '可用性、完整性、保密性同时受损，不能只诊断成性能问题。', '分别提供峰值负载/恢复、迁移对账、授权隔离测试证据；明确上线门槛与恢复条件。'],
      ['TSB · 延期成本成为上线压力', '时间与成本压力不能证明风险可接受。阅读指出性能测试不足；已发现问题是否被接受需区分证据与推测。', '独立评估未达标项；未满足门槛则 no-go。评估分批迁移，演练回退并确认数据一致性。'],
    ],
    testingTitle: '测试不是同一种证据',
    testingIntro: '对着题干问：这一项通过，究竟能证明什么，又不能证明什么？',
    testingHeaders: ['活动', '主要回答', '不能替代'],
    testing: [
      ['Requirements review / prototype', '是否理解真实用户、目标、例外与验收条件？', '真实负载与生产运行证据'],
      ['Unit / TDD', '局部逻辑是否符合已写下的预期？', '跨服务集成或需求本身正确性'],
      ['Integration / E2E', '组件交互或关键完整流程是否可用？', '所有边界、负载与安全风险'],
      ['UAT', '用户/领域专家是否能完成需要的任务？', '大规模并发能力与结构安全分析'],
      ['Load / recovery / reconciliation', '规模下的表现、故障后恢复与迁移数据是否符合条件？', '用户需求有效性与所有授权检查'],
      ['Static analysis / exploratory testing', '结构弱点 / 脚本之外的异常与未知风险在哪里？', '彼此，也不能单独证明没有缺陷'],
    ],
    trapsTitle: '六组易错辨析',
    traps: [
      ['Quality ≠ reliability ≠ availability', '符合需求、持续正确运行、可访问是相关但不同的问题；系统在线仍可能损坏数据。'],
      ['Severity ≠ priority', '严重度描述影响；优先级决定何时处理。营销页面错字可能急修，但不因此比数据丢失更严重。'],
      ['Zero reported defects ≠ zero defects', '未报告也可能是测试不足；Six Sigma 的 3.4 DPMO 是质量目标表达，不是每百万行代码缺陷数或安全保证。'],
      ['Shift-left ≠ cancel late testing', '早期预防补充集成、验收和运行反馈，不取消它们。TDD 也不能修复错误的业务假设。'],
      ['Automation ≠ replacement for people', '自动化适合重复回归；探索、领域判断和风险决策仍需要人。工具选择必须考虑团队与维护成本。'],
      ['Shared responsibility ≠ no owner', '质量需要跨职能参与，同时每项风险、测试和发布决定都有明确负责人。'],
    ],
    methodTitle: '情境简答题：五步写出可执行结论',
    methodHeaders: ['步骤', '写作任务'],
    method: [
      ['1 · Define', '指出需求、质量维度与系统关键性，不只说“系统不好”。'],
      ['2 · Diagnose', '引用题干事实，区分直接故障、数据/设计假设及组织流程根因。'],
      ['3 · Control', '把每个原因匹配预防、检测、缓解或恢复措施。'],
      ['4 · Evidence', '说明测试情境、数据规模、验收条件及负责人，避免“加强测试”这种空泛建议。'],
      ['5 · Decide + qualify', '给出 go/no-go、整改与回退建议，说明剩余风险及证据不足处。'],
    ],
    model: '示例：银行少量 UAT 通过，但峰值性能不达标。应 no-go：UAT 说明部分业务适用性，却不能证明并发可靠性。补足真实规模负载、数据核验和恢复演练，按预先约定门槛复评；延期成本不能替代证据。',
    practiceIntro: '下列题目由本地 Week 05–06 材料编写；不是 Moodle 真题，也没有独立 quiz/week05–06 文件作为依据。先作答，再展开答案与评分要点。',
    practiceTitles: ['Week 05 · 10 道模拟题', 'Week 06 · 10 道模拟题'],
    quiz05: [
      ['系统今天功能全部通过，但连续运行后结果错误，最直接涉及什么？\nA. 只涉及界面\nB. 可靠性随时间与条件的保持\nC. 只涉及可移植性\nD. 不算质量问题', '答案：B。一次功能验证不能证明持续正确运行。可靠性是质量相关维度，不代表该问题与质量无关。'],
      ['客户要求复杂功能，目标用户只需简单流程，团队首先应做什么？\nA. 按功能数量评价质量\nB. 只服从付费者\nC. 澄清用户目的和双方需求并建立验收标准\nD. 上线后再问', '答案：C。质量依赖真实需要与期望；数量、付款身份和上线压力都不能替代需求验证。'],
      ['航空安全计算失效可能危及生命，它最直接属于？\nA. Safety-critical\nB. 仅 usability\nC. 非关键系统\nD. 仅 business-critical', '答案：A。分类依据是失败后果。它也可能造成业务损失，但题干最直接指向生命安全。'],
      ['银行网站能登录但显示别人的账户，如何评价？\nA. uptime 高所以可靠\nB. 只是界面问题\nC. 不是缺陷\nD. 保密性/授权控制失败，在线不等于可信', '答案：D。可用性不是全部；应验证身份与账户隔离，不能仅做更多负载测试。'],
      ['TUI 把 Miss 对应为儿童，最直接的预防是什么？\nA. 增加服务器\nB. 改变字体\nC. 与领域人员验证年龄分类规则并测试边界\nD. 要求旅客统一使用 Ms', '答案：C。根因是称谓到年龄的错误假设；增加容量或转嫁给用户没有修复语义规则。'],
      ['TUI 自动修复遗漏临近起飞的在线值机，说明什么？\nA. 自动化永远无效\nB. 应覆盖渠道、时间窗与人工交接\nC. 已修一条路径就可关闭缺陷\nD. 只需培训一位员工', '答案：B。局部补丁不能证明端到端可靠；已知例外必须进入回归测试和责任跟踪。'],
      ['TSB 类迁移中，少量 UAT 通过但性能门槛未过，最佳决定是？\nA. 按原定日期上线\nB. 忽略性能结果\nC. 先迁移再写回退方案\nD. 暂缓，补足证据后按门槛复评', '答案：D。UAT 不证明真实并发性能；时间与沉没成本不能推翻风险标准。'],
      ['简答：比较分批迁移和一次性迁移。', '评分要点：分批减小单次影响并允许学习；代价是时间/成本、并行系统和跨批一致性复杂度。应按依赖、恢复能力与风险决定，不能声称分批必然无风险。'],
      ['简答：一个配置错误导致备份长期无效，之后操作失误造成数据丢失。如何避免只责怪操作者？', '评分要点：同时分析权限/环境区分、变更流程、备份监控与恢复验证。建议独立核对危险操作、备份失败告警、定期恢复演练及明确负责人；存在备份任务不代表能够恢复。此题为全系统原则的衍生情境。'],
      ['简答：用 TUI 与 TSB 说明质量为什么是专业责任，而不只是代码问题。', '评分要点：TUI 涉及领域/文化假设和不完整修复；TSB 涉及复杂依赖、验证和上线治理。两者都应建立需求、测试和发布责任，分析用户伤害与信任，给出具体证据而非只说“多测试”。'],
    ],
    quiz06: [
      ['同一个移动端排版问题在两款产品中可能有不同缺陷判断，因为？\nA. 缺陷完全主观\nB. 取决于需求和真实使用情境\nC. 移动端从不重要\nD. 客户不能定义要求', '答案：B。必须核实目标用户与环境；不能为了宣布“无缺陷”而忽略真实使用需要。'],
      ['宣传页错字必须在发布会前修复，但技术影响较小，说明？\nA. priority 与 severity 可以不同\nB. 所有急修都导致系统崩溃\nC. 不应记录缺陷\nD. 两个词完全同义', '答案：A。紧迫性来自业务时机，严重度来自影响；仍需与更高风险事项一起评估。'],
      ['哪项最直接属于 SQA 的预防活动？\nA. 仅记录生产缺陷\nB. 宣布所有测试通过\nC. 建立需求评审与跨职能质量流程\nD. 推迟 QA 到最后一周', '答案：C。SQA 关注过程与预防；测试和产品检查提供其他层面的证据，不应与 SQA 混同。'],
      ['“源码存在绕过认证的路径”最直接适合哪类框架？\nA. 仅界面满意度调查\nB. 只看 uptime\nC. 只统计发布次数\nD. ISO/IEC 5055 结构弱点分析', '答案：D。5055 面向危险结构弱点；27001 管组织 ISMS，不能代替对具体代码路径的检查。'],
      ['按课程 ISO 9126 模型，testability 与 recoverability 分别对应？\nA. Portability / usability\nB. Maintainability / reliability\nC. Efficiency / functionality\nD. 两者都属于外观', '答案：B。易测试支持维护与修改；恢复能力支持持续可靠运行。'],
      ['某组织建立信息安全风险处理、控制、内审与改进流程，应对应？\nA. ISO/IEC 27001\nB. TDD 的 Green 阶段\nC. 只做 E2E 测试\nD. ISO 5055 的单一弱点计数', '答案：A。对象是组织级 ISMS，保护 CIA；这不是每个软件产品都无漏洞的证明。'],
      ['哪项体现 shift-left？\nA. 删除验收测试\nB. 把 QA 留到上线前\nC. 需求阶段让 QA 提问并提前设计测试\nD. 只加快末期测试', '答案：C。提前反馈会影响需求和设计，不是简单压缩末期工作；后期验证和运行监控仍需要。'],
      ['简答：说明 TDD 顺序，以及为什么不只运行 E2E 测试。', '评分要点：Red 写失败测试 → Green 最小实现 → Refactor 保持测试通过。单元测试反馈快且易定位，集成覆盖交互，少量关键 E2E 覆盖完整流程；分层不应成为遗漏跨层风险的理由。'],
      ['简答：缺陷数量下降但交付更慢，能宣布质量提高吗？', '评分要点：不能仅凭计数。核实测试强度和需求覆盖，并结合严重度、生产表现、结构弱点、复杂度与交付 flow。技术债可能拖慢修改；选择能支持改进行动的指标，而非追求漂亮数字。'],
      ['简答：AI 很快生成代码，团队想取消人工探索测试并接受更多缺陷。如何回应？', '评分要点：生成速度不能改变安全与业务风险要求。自动化重复回归和结构检查，保留领域核验、探索与人工风险判断；明确负责人和发布证据。Zero Defects 是预防目标，不是测试能证明的绝对保证。'],
    ],
    sourcesTitle: '依据与材料边界',
    sourcesNote: '以上列出本章实际使用的本地课程转录、案例和阅读材料。复习顺序与模拟题是材料归纳，不是考试预测。Week 06 原文已被替换的 What Determines Software Quality? 未采用；尚无转录的音视频未被假定已完成内容核验。',
  },
  en: {
    subtitle: 'Chapter 03 · From failure mechanisms to quality evidence',
    summary: 'Connect Week 05 definitions, responsibility, and failures with Week 06 defect measurement, standards, and lifecycle management. Explain risk, select a control, and support a release decision with evidence—not just a list of tests.',
    tags: ['Weeks 05–06', '20 revision targets', '20 source-derived questions', 'MCQ + Short answer'],
    toc: ['Exam map', 'Week 05', 'Week 06', 'Standards', 'Case application', 'Testing evidence', 'Distinctions', 'Answer method', 'W05 practice', 'W06 practice', 'Basis & limits'],
    mapTitle: 'Two weeks, one quality decision chain',
    mapIntro: 'A revision structure based on course themes, not confirmed examination weighting. Identify requirements and failure consequences before selecting measures, prevention, and release criteria.',
    lead: 'Requirements → failure consequences → prevention & measurement → release evidence → learning.',
    map: [
      ['Week 05 · Why quality matters', 'Define quality and reliability, explain how people, processes, and technology combine in failures, and turn TUI / TSB mechanisms into control requirements.'],
      ['Week 06 · How to manage it', 'Distinguish defect impact from urgency, select standards and testing layers, and manage quality through continuous feedback and reviewable evidence.'],
    ],
    week05Title: 'Week 05 · Quality, reliability, and professional responsibility',
    week05Intro: 'Connect definitions, scenario facts, and consequences. “There was a bug” is not a complete root-cause analysis.',
    week05: [
      ['01 · Quality', 'Conformance to requirements: meeting specified requirements and user or client needs and expectations. Feature completeness does not establish that the right problem was solved.'],
      ['02 · Reliability', 'Continued correct operation over a specified time and environment; the course describes it as maintaining quality over changing conditions. One successful demo is insufficient.'],
      ['03 · Criticality', 'Safety-critical concerns life or severe harm; mission-critical concerns organisational mission or survival; business-critical concerns high business cost. Classify by consequences; categories may overlap.'],
      ['04 · Whole-system responsibility', 'Systems include people, processes, and technology. Analysts, designers, developers, maintainers, and adopting organisations may share responsibility; do not blame only the last operator.'],
      ['05 · Failure causes', 'Poor communication, misunderstood complexity, missing graceful failure, inadequate testing, configuration/installation mistakes, and insufficient professional competence each need matching controls.'],
      ['06 · Data and trust', 'Bad data, disclosure, and outages can propagate across systems. Restoring operations does not automatically restore trust; uptime alone does not establish reliability.'],
      ['07 · TUI contextual assumption', 'Interpreting Miss as a child assigned child weights to adults. A false business assumption entered a safety calculation; this was not merely a spelling error.'],
      ['08 · Incomplete workaround', 'Manual title changes and a partial automated repair missed check-in time windows. Track temporary mitigations and verify root-cause repairs across every channel.'],
      ['09 · TSB migration', 'Complex dependencies and limited source-system knowledge combined with schedule pressure. Functional or UAT success does not establish realistic-scale performance, account isolation, or data integrity.'],
      ['10 · Evidence-based go-live', 'Define trial migration, functional/UAT/performance tests, reconciliation, rehearsal, go/no-go, and rollback conditions. Phasing limits impact but adds coexistence and consistency costs.'],
    ],
    week06Title: 'Week 06 · Measurement, standards, and quality management',
    week06Intro: 'A measure should inform a decision; a test result should correspond to a requirement and risk.',
    week06: [
      ['01 · Contextual defect', 'A defect violates requirements. Whether mobile rendering is defective depends on users and context; do not hide real needs behind a conveniently narrow specification.'],
      ['02 · Severity vs priority', 'Severity describes impact; priority describes repair urgency. Consider exposure, business timing, and risk rather than treating them as synonyms.'],
      ['03 · SQA / SQC / Testing', 'SQA improves processes and prevention; SQC evaluates product conformity; testing detects and evaluates problems. Passing tests proves neither correct requirements nor zero defects.'],
      ['04 · Three measurement views', 'Internal quality concerns code structure; external quality concerns runtime behaviour; quality in use concerns user effectiveness, productivity, safety, and satisfaction.'],
      ['05 · ISO 9126', 'Six product characteristics: functionality, reliability, usability, efficiency, maintainability, and portability. The model is not limited to appearance or UI.'],
      ['06 · ISO 5055 / 27001', '5055 measures dangerous source-code structural weaknesses; 27001 concerns organisational ISMS and CIA. Code scanning and security governance complement, not replace, one another.'],
      ['07 · Prevention and shift-left', 'Review requirements, designs, and test conditions early, involving QA in continuous feedback. Early requirements errors discovered late typically cause wider design and implementation rework.'],
      ['08 · TDD and testing layers', 'Red → Green → Refactor. Unit tests form a base, integration tests cover interfaces, and critical E2E tests cover whole flows; UAT, load, and exploration answer additional questions.'],
      ['09 · Planning and collaboration', 'Policy sets principles; quality plans set objectives and roles; strategy sets the approach; test plans set what/when/how/who. Bug reports need reproduction, environment, expected/actual results, and evidence.'],
      ['10 · Debt, flow and AI', 'Complexity and structural weaknesses slow change and increase regression risk. Automate repetition and use people to explore unknowns; fast AI generation cannot replace review, requirements validation, or accountability.'],
    ],
    standardsTitle: 'Three standards: identify the evaluation object',
    standardsIntro: 'Revise the frameworks and editions used in the course; do not present a historical teaching model as the complete current standard.',
    standardsHeaders: ['Framework', 'Object and content', 'Scenario use'],
    standards: [
      ['ISO/IEC 9126', 'Product-quality model with internal, external, and quality-in-use views; six product characteristics.', 'Turn “usable and reliable” into evaluable dimensions: recoverability relates to reliability, testability to maintainability.'],
      ['ISO/IEC 5055:2021', 'Source structure: security, reliability, performance efficiency, and maintainability.', 'Static analysis of dangerous cross-component weaknesses; counts/density can inform supplier acceptance, release gates, and improvement targets.'],
      ['ISO/IEC 27001', 'Organisational information security management system (ISMS); confidentiality, integrity, availability.', 'Scope, risk treatment, controls, audits, and continual improvement—not a guarantee that each product is vulnerability-free.'],
    ],
    standardsNote: '9126 is not external-only, 5055 does not cover all quality, and 27001 is not just installing security tools. These are not interchangeable product checklists.',
    casesTitle: 'Cases: cause → consequence → control → evidence',
    casesIntro: 'Controls and verification below apply course principles; they are recommendations, not claims about what the organisations actually implemented.',
    casesHeaders: ['Case signal', 'Mechanism and consequence', 'Recommended control and evidence'],
    cases: [
      ['TUI · Miss interpreted as child', 'A cultural/domain assumption corrupts weight data and affects take-off calculations; title is not a reliable age indicator.', 'Validate age-classification rules with domain experts; test adult/child, title, channel, and time boundaries; independently check safety inputs.'],
      ['TUI · Repair misses online check-in within 24 hours', 'A partial repair and manual handover leave an uncovered path; staffing changes expose the weakness.', 'Track the known defect and owner; use a channel × time-window regression matrix and verify safety after removing the workaround.'],
      ['TSB · Login failure, wrong balances, other accounts visible', 'Availability, integrity, and confidentiality fail together; performance alone is an incomplete diagnosis.', 'Require peak-load/recovery, migration reconciliation, and authorisation-isolation evidence, with explicit release and recovery criteria.'],
      ['TSB · Delay cost pressures go-live', 'Schedule and cost do not establish acceptable risk. The reading identifies insufficient performance testing; distinguish evidence from speculation about knowingly accepted issues.', 'Independently assess failed gates and choose no-go when unmet. Evaluate phasing and rehearse rollback with data consistency checks.'],
    ],
    testingTitle: 'Tests provide different kinds of evidence',
    testingIntro: 'Ask what a passing result supports—and what remains unproven.',
    testingHeaders: ['Activity', 'Main question', 'Does not replace'],
    testing: [
      ['Requirements review / prototype', 'Do we understand users, goals, exceptions, and acceptance conditions?', 'Real load and production evidence'],
      ['Unit / TDD', 'Does local logic meet the stated expectation?', 'Cross-service integration or correctness of requirements'],
      ['Integration / E2E', 'Do components interact or critical complete flows work?', 'All boundaries, load, and security risks'],
      ['UAT', 'Can users/domain experts complete the tasks they need?', 'Large-scale concurrency or structural security analysis'],
      ['Load / recovery / reconciliation', 'Do scale, recovery, and migrated data meet requirements?', 'User-need validation or all authorisation checks'],
      ['Static analysis / exploratory testing', 'Where are structural weaknesses / unexpected risks beyond scripts?', 'Each other; neither proves the absence of defects'],
    ],
    trapsTitle: 'Six distinctions to get right',
    traps: [
      ['Quality ≠ reliability ≠ availability', 'Conformance, sustained correct operation, and accessibility are related but distinct. An online system can still corrupt data.'],
      ['Severity ≠ priority', 'Severity is impact; priority determines when to act. An urgent marketing typo does not thereby become more severe than data loss.'],
      ['Zero reported defects ≠ zero defects', 'Few reports may reflect weak testing. Six Sigma’s 3.4 DPMO expresses a quality target, not defects per million lines or a safety guarantee.'],
      ['Shift-left ≠ cancel late testing', 'Early prevention complements integration, acceptance, and operational feedback. TDD cannot repair a false business assumption by itself.'],
      ['Automation ≠ replacement for people', 'Automate repeated regression; retain exploration, domain judgement, and risk decisions. Select tools for team fit and maintenance cost.'],
      ['Shared responsibility ≠ no owner', 'Cross-functional participation still requires a named owner for each risk, test, and release decision.'],
    ],
    methodTitle: 'Scenario answers: five steps to an actionable conclusion',
    methodHeaders: ['Step', 'Writing task'],
    method: [
      ['1 · Define', 'Identify requirements, quality dimensions, and criticality—not just “a bad system”.'],
      ['2 · Diagnose', 'Use scenario facts to distinguish symptoms, data/design assumptions, and organisational causes.'],
      ['3 · Control', 'Match each cause to prevention, detection, mitigation, or recovery.'],
      ['4 · Evidence', 'Specify scenarios, data scale, acceptance conditions, and owners; avoid simply recommending “more testing”.'],
      ['5 · Decide + qualify', 'Recommend go/no-go, remediation, and rollback; disclose residual risk and missing evidence.'],
    ],
    model: 'Example: a bank passes small-scale UAT but fails peak-load criteria. Recommend no-go: UAT supports some business suitability, not concurrency reliability. Obtain realistic load, data-validation, and recovery evidence, then reassess against agreed gates. Delay cost is not a substitute for evidence.',
    practiceIntro: 'These questions were written from local Week 05–06 materials. They are not Moodle exam questions, and no independent quiz/week05–06 files are available. Answer first, then reveal the rationale and marking points.',
    practiceTitles: ['Week 05 · 10 practice questions', 'Week 06 · 10 practice questions'],
    quiz05: [
      ['All functions pass today, but results become wrong after sustained operation. What is most directly involved?\nA. UI only\nB. Reliability over time and conditions\nC. Portability only\nD. No quality issue', 'Answer: B. A single functional check does not establish sustained correct operation. Reliability is quality-related, so the issue is not unrelated to quality.'],
      ['A client wants complex features but users need a simple flow. What should happen first?\nA. Judge quality by feature count\nB. Follow only the payer\nC. Clarify user goals and both sets of needs, then agree acceptance criteria\nD. Ask after release', 'Answer: C. Quality depends on real needs and expectations. Feature count, payment, and deadlines cannot replace requirements validation.'],
      ['An aviation calculation failure can threaten lives. Its most direct classification is?\nA. Safety-critical\nB. Usability only\nC. Non-critical\nD. Business-critical only', 'Answer: A. Classify by failure consequences. Business loss may also occur, but the explicit signal is life safety.'],
      ['A bank site is accessible but displays another person’s account. How should this be judged?\nA. High uptime proves reliability\nB. UI issue only\nC. Not a defect\nD. Confidentiality/authorisation failure; online is not trustworthy', 'Answer: D. Availability is not the whole picture. Verify identity and account isolation rather than only adding load tests.'],
      ['TUI maps Miss to child. Which prevention is most direct?\nA. More servers\nB. Change the font\nC. Validate age-classification rules with domain experts and test boundaries\nD. Require all passengers to use Ms', 'Answer: C. The root issue is a false title-to-age assumption. Capacity or shifting the burden to users does not repair the semantic rule.'],
      ['TUI’s automated repair misses late online check-in. What does this show?\nA. Automation never works\nB. Cover channels, time windows, and human handover\nC. One repaired path closes the defect\nD. Train only one employee', 'Answer: B. A local patch does not prove end-to-end reliability. Known exceptions must enter regression coverage and ownership tracking.'],
      ['In a TSB-like migration, small-scale UAT passes but performance gates fail. Best decision?\nA. Keep the original launch date\nB. Ignore performance\nC. Migrate before planning rollback\nD. Defer and reassess against gates after obtaining evidence', 'Answer: D. UAT does not establish realistic concurrency performance. Schedule and sunk cost cannot override risk criteria.'],
      ['Short answer: compare phased and one-off migration.', 'Marking points: phasing reduces single-event impact and allows learning, but increases duration/cost, coexistence, and cross-phase consistency complexity. Decide using dependencies, recovery capability, and risk; phasing is not risk-free.'],
      ['Short answer: misconfigured backups fail silently, then an operator error loses data. How do you avoid blaming only the operator?', 'Marking points: investigate permissions/environment separation, change procedures, backup monitoring, and restoration checks. Recommend independent checks for dangerous actions, backup-failure alerts, restore rehearsals, and named owners. A scheduled backup does not establish recoverability. This is a derived whole-system scenario.'],
      ['Short answer: use TUI and TSB to explain why quality is a professional responsibility, not just a coding issue.', 'Marking points: TUI involves domain/cultural assumptions and incomplete repair; TSB involves dependencies, validation, and release governance. Establish requirements, testing, and decision ownership; explain user harm and trust, and propose concrete evidence rather than just “more testing”.'],
    ],
    quiz06: [
      ['The same mobile rendering issue may receive different defect judgements in two products because?\nA. Defects are entirely subjective\nB. Requirements and actual use differ\nC. Mobile never matters\nD. Clients cannot define requirements', 'Answer: B. Verify users and environments. Do not ignore real needs merely to declare the product defect-free.'],
      ['A marketing typo must be fixed before a launch event despite small technical impact. This shows?\nA. Priority and severity can differ\nB. Every urgent fix crashes the system\nC. Do not log the defect\nD. The terms are identical', 'Answer: A. Business timing creates urgency; consequences determine severity. Still assess it alongside higher-risk issues.'],
      ['Which most directly represents preventive SQA?\nA. Only record production defects\nB. Announce passing tests\nC. Establish requirements review and cross-functional quality processes\nD. Leave QA until the last week', 'Answer: C. SQA concerns process and prevention. Testing and product checks provide other evidence and should not be conflated with SQA.'],
      ['A source-code path bypasses authentication. Which approach most directly addresses it?\nA. UI satisfaction survey only\nB. Uptime only\nC. Release counts only\nD. ISO/IEC 5055 structural weakness analysis', 'Answer: D. 5055 addresses dangerous structural weaknesses. Organisational ISMS under 27001 does not replace inspecting the actual code path.'],
      ['In the course’s ISO 9126 model, testability and recoverability belong respectively to?\nA. Portability / usability\nB. Maintainability / reliability\nC. Efficiency / functionality\nD. Appearance', 'Answer: B. Testability supports maintenance and change; recoverability supports reliable operation.'],
      ['An organisation establishes security risk treatment, controls, internal audits, and improvement. Which framework fits?\nA. ISO/IEC 27001\nB. TDD Green phase\nC. E2E testing only\nD. A single ISO 5055 weakness count', 'Answer: A. The object is an organisational ISMS protecting CIA. It does not prove every software product is vulnerability-free.'],
      ['Which demonstrates shift-left?\nA. Delete acceptance tests\nB. Keep QA until release\nC. Involve QA in requirements questions and early test design\nD. Speed up only final testing', 'Answer: C. Earlier feedback influences requirements and design rather than merely compressing final work. Later validation and operational monitoring remain necessary.'],
      ['Short answer: explain TDD order and why a team should not run only E2E tests.', 'Marking points: Red—write a failing test; Green—minimum implementation; Refactor—keep tests passing. Unit tests offer fast local feedback, integration covers interactions, and selected E2E tests cover complete flows. Layering must not excuse missing cross-layer risks.'],
      ['Short answer: defect counts fall but delivery slows. Can the team declare quality improved?', 'Marking points: not from counts alone. Check testing intensity and requirements coverage alongside severity, production behaviour, structural weaknesses, complexity, and flow. Debt can slow changes; choose measures that guide action, not attractive numbers.'],
      ['Short answer: AI generates code rapidly, so the team wants to remove human exploration and accept more defects. Respond.', 'Marking points: generation speed does not change safety or business risk requirements. Automate regression and structural checks while retaining domain validation, exploration, and human risk judgement. Name owners and require release evidence. Zero Defects is a prevention goal, not an absolute guarantee established by tests.'],
    ],
    sourcesTitle: 'Content basis and material limits',
    sourcesNote: 'Listed here are the local transcripts, cases, and readings actually used. Revision order and practice questions are a synthesis, not an exam prediction. The replaced Week 06 source What Determines Software Quality? is excluded. Untranscribed media is not assumed to have been content-verified.',
  },
} as const

export default function Chapter03({ locale }: { locale: Locale }) {
  const c = copy[locale]
  const ids = ['map', 'week05', 'week06', 'standards', 'cases', 'testing', 'traps', 'method', 'practice05', 'practice06', 'sources']
  const toc = ids.map((id, index) => ({ id, label: c.toc[index] }))

  return (
    <ChapterLayout chapterId="03" locale={locale} eyebrow="Chapter 03 · Weeks 05–06" title="Quality & Reliability" subtitle={c.subtitle} summary={c.summary} updated="07 Sep 2026" tags={[...c.tags]} toc={toc}>
      <ContentSection id="map" index="01" title={c.mapTitle} intro={c.mapIntro}>
        <LeadCard label={locale === 'zh' ? '判断主线' : 'Decision spine'}>{c.lead}</LeadCard>
        <div className="mt-4 grid gap-3 md:grid-cols-2">{c.map.map(([title, body]) => <InfoCard key={title} title={title} tone="accent">{body}</InfoCard>)}</div>
      </ContentSection>
      <ContentSection id="week05" index="02" title={c.week05Title} intro={c.week05Intro}>
        <div className="grid gap-3 md:grid-cols-2">{c.week05.map(([title, body]) => <InfoCard key={title} title={title} tone="accent">{body}</InfoCard>)}</div>
      </ContentSection>
      <ContentSection id="week06" index="03" title={c.week06Title} intro={c.week06Intro}>
        <div className="grid gap-3 md:grid-cols-2">{c.week06.map(([title, body]) => <InfoCard key={title} title={title} tone="blue">{body}</InfoCard>)}</div>
      </ContentSection>
      <ContentSection id="standards" index="04" title={c.standardsTitle} intro={c.standardsIntro}>
        <ResponsiveTable headers={[...c.standardsHeaders]} rows={c.standards.map((row) => [...row])} />
        <Callout label={locale === 'zh' ? '边界' : 'Boundary'}>{c.standardsNote}</Callout>
      </ContentSection>
      <ContentSection id="cases" index="05" title={c.casesTitle} intro={c.casesIntro}>
        <ResponsiveTable headers={[...c.casesHeaders]} rows={c.cases.map((row) => [...row])} />
      </ContentSection>
      <ContentSection id="testing" index="06" title={c.testingTitle} intro={c.testingIntro}>
        <ResponsiveTable headers={[...c.testingHeaders]} rows={c.testing.map((row) => [...row])} />
      </ContentSection>
      <ContentSection id="traps" index="07" title={c.trapsTitle}>
        <div className="grid gap-3 md:grid-cols-2">{c.traps.map(([title, body]) => <InfoCard key={title} title={title} tone="coral">{body}</InfoCard>)}</div>
      </ContentSection>
      <ContentSection id="method" index="08" title={c.methodTitle}>
        <ResponsiveTable headers={[...c.methodHeaders]} rows={c.method.map((row) => [...row])} />
        <Callout label={locale === 'zh' ? '示范结论' : 'Model conclusion'}>{c.model}</Callout>
      </ContentSection>
      <ContentSection id="practice05" index="09" title={c.practiceTitles[0]} intro={c.practiceIntro}>
        <QuizAccordion items={c.quiz05.map(([question, answer]) => ({ question, answer }))} />
      </ContentSection>
      <ContentSection id="practice06" index="10" title={c.practiceTitles[1]} intro={c.practiceIntro}>
        <QuizAccordion items={c.quiz06.map(([question, answer]) => ({ question, answer }))} />
      </ContentSection>
      <ContentSection id="sources" index="11" title={c.sourcesTitle}>
        <SourceList items={sources} note={c.sourcesNote} />
      </ContentSection>
    </ChapterLayout>
  )
}
