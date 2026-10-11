// Reviewed, static bilingual editorial content. Never populate HTML fields from user input.
export const debate = {
  "motion": "The integration of generative AI tools in the professional development of graduate students not only hinders their critical thinking skills but also their need to be epistemically responsible.",
  "sections": [
    {
      "id": "start",
      "title": {
        "zh": "先看这一页",
        "en": "Start here"
      },
      "blocks": [
        {
          "kind": "html",
          "html": "<blockquote class=\"motion-quote\" lang=\"en\">The integration of generative AI tools in the professional development of graduate students not only hinders their critical thinking skills but also their need to be epistemically responsible.</blockquote><span class=\"citations\"><a href=\"#src-M00\">[M00]</a></span><p class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">题目有两问：AI 会不会妨碍研究生思考？会不会让他们更少觉得自己需要核实并负责？第二问里的 <b>need</b> 要先解释清楚。</span><span class=\"en\" lang=\"en\">Two questions: does AI hinder graduate thinking, and does it weaken their felt need to check and take responsibility? Define <b>need</b> before arguing.</span></p><div class=\"grid two\"><article class=\"card \"><h3 class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">正方主线</span><span class=\"en\" lang=\"en\">Affirmative line</span></h3><p class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">答案来得太早，学生少练了判断；久而久之，也更容易把核实当成可省的步骤。</span><span class=\"en\" lang=\"en\">Answers arrive before judgment gets practised; checking can then become a step students feel they can skip.</span></p></article><article class=\"card \"><h3 class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">反方主线</span><span class=\"en\" lang=\"en\">Negative line</span></h3><p class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">代答和辅导不是一回事。工具能帮忙，但判断和责任仍要由学生承担。</span><span class=\"en\" lang=\"en\">Answer substitution and tutoring differ. A tool can help while students still own the judgment and responsibility.</span></p></article></div><p class=\"bi \"><span class=\"zh\" lang=\"zh-CN\"><b>先记住：</b>作品更好 ≠ 人学得更好；省力 ≠ 技能退化；责任感变弱 ≠ 责任消失。</span><span class=\"en\" lang=\"en\"><b>Keep separate:</b> better output and better learning; lower effort and skill loss; weaker felt duty and no duty.</span></p><p class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">上场用短版，备战看展开项：<a href=\"#rules\">规则</a> → <a href=\"#map\">16 节点图</a> → <a href=\"#cases\">12 张论证卡</a> → <a href=\"#rehearsal\">40 分钟两轮演练</a> → <a href=\"#rhetoric\">一分钟出彩</a>。</span><span class=\"en\" lang=\"en\">Use the short lines on stage and expanded notes in rehearsal: <a href=\"#rules\">rules</a> → <a href=\"#map\">16-node map</a> → <a href=\"#cases\">12 arguments</a> → <a href=\"#rehearsal\">two-round rehearsal</a> → <a href=\"#rhetoric\">one-minute delivery</a>.</span></p>"
        }
      ]
    },
    {
      "id": "spec",
      "title": {
        "zh": "作业要求与 HD",
        "en": "Requirements & HD"
      },
      "blocks": [
        {
          "kind": "html",
          "html": "<p class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">正式比赛 <b>20 分钟</b>；双方都要准备，当天分配立场。每人发言，每段可由 1–2 人承担。</span><span class=\"en\" lang=\"en\">The assessed debate is <b>20 minutes</b>. Prepare both sides; allocation is on the day. Everyone speaks, with one or two speakers per segment.</span></p><div class=\"timeline\"><div class=\"slot aff\"><div class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">正方开场</span><span class=\"en\" lang=\"en\">Affirmative opening</span></div><strong>4:00</strong></div><div class=\"slot neg\"><div class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">反方开场</span><span class=\"en\" lang=\"en\">Negative opening</span></div><strong>4:00</strong></div><div class=\"slot aff\"><div class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">正方反驳</span><span class=\"en\" lang=\"en\">Affirmative rebuttal</span></div><strong>3:00</strong></div><div class=\"slot neg\"><div class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">反方反驳</span><span class=\"en\" lang=\"en\">Negative rebuttal</span></div><strong>3:00</strong></div><div class=\"slot aff\"><div class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">正方结辩</span><span class=\"en\" lang=\"en\">Affirmative closing</span></div><strong>3:00</strong></div><div class=\"slot neg\"><div class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">反方结辩</span><span class=\"en\" lang=\"en\">Negative closing</span></div><strong>3:00</strong></div></div><div class=\"table-wrap\"><table><thead><tr><th><div class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">权重</span><span class=\"en\" lang=\"en\">Weight</span></div></th><th><div class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">评分看什么</span><span class=\"en\" lang=\"en\">What is assessed</span></div></th><th><div class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">怎么做</span><span class=\"en\" lang=\"en\">What to prepare</span></div></th></tr></thead><tbody><tr><td><div class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">40% 研究</span><span class=\"en\" lang=\"en\">40% research</span></div></td><td><div class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">证据、伦理、不同群体、反驳准备、引用。</span><span class=\"en\" lang=\"en\">Evidence, ethics, stakeholders, rebuttal preparation and attribution.</span></div></td><td><div class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">每条主张配来源、理由和一个强反驳。</span><span class=\"en\" lang=\"en\">Give each claim a source, reason and strong objection.</span></div></td></tr><tr><td><div class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">20% 开场</span><span class=\"en\" lang=\"en\">20% opening</span></div></td><td><div class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">定义准确、立场清楚、范围合理、控时。</span><span class=\"en\" lang=\"en\">Clear definitions, position, scope and timing.</span></div></td><td><div class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">先说我方要证明什么，再讲两条主线。</span><span class=\"en\" lang=\"en\">State the burden, then two main arguments.</span></div></td></tr><tr><td><div class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">20% 反驳</span><span class=\"en\" lang=\"en\">20% rebuttal</span></div></td><td><div class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">真正回应对方，抓住假设，能临场调整。</span><span class=\"en\" lang=\"en\">Engage the opponent, test assumptions and adapt.</span></div></td><td><div class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">复述一句 → 指出缺口 → 解释影响。</span><span class=\"en\" lang=\"en\">Restate → identify the gap → explain its impact.</span></div></td></tr><tr><td><div class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">20% 结辩</span><span class=\"en\" lang=\"en\">20% closing</span></div></td><td><div class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">比较关键争议，强化立场，留下清楚结论。</span><span class=\"en\" lang=\"en\">Weigh decisive clashes and leave a clear verdict.</span></div></td><td><div class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">说清哪一步尚未被对方证明。</span><span class=\"en\" lang=\"en\">Identify the decisive step the opponent has not established.</span></div></td></tr></tbody></table></div><span class=\"citations\"><a href=\"#src-S01\">[S01]</a></span><p class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">Week 12 周二 11:55 pm 前交论点与研究文档；比赛在 Week 12 workshop。道具由 tutor 决定。无延期，缺席另行评估。具体日期、文件格式、人数及 AI 使用要求查课程活动页。</span><span class=\"en\" lang=\"en\">Arguments and research documentation are due Tuesday of Week 12 at 11:55 pm; the debate is in the Week 12 workshop. Props are at the tutor’s discretion. No extension; absences receive alternative assessment. Check the activity for dates, format, team size and AI-use rules.</span></p>"
        }
      ]
    },
    {
      "id": "rules",
      "title": {
        "zh": "指定规则：每个位置做什么",
        "en": "Assigned rules: who does what"
      },
      "blocks": [
        {
          "kind": "html",
          "html": "<p class=\"bi \"><span class=\"zh\" lang=\"zh-CN\"><a href=\"https://microsoft.github.io/makecode-csp/unit-4/day-12/debating-rules/\" target=\"_blank\" rel=\"noopener\">Microsoft MakeCode · Debating Rules</a> · 核对日期：2026-10-11。</span><span class=\"en\" lang=\"en\"><a href=\"https://microsoft.github.io/makecode-csp/unit-4/day-12/debating-rules/\" target=\"_blank\" rel=\"noopener\">Microsoft MakeCode · Debating Rules</a> · Checked: 11 October 2026.</span></p><div class=\"table-wrap\"><table><thead><tr><th><div class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">位置</span><span class=\"en\" lang=\"en\">Role</span></div></th><th><div class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">网页要点</span><span class=\"en\" lang=\"en\">Page essentials</span></div></th></tr></thead><tbody><tr><td><div class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">首正</span><span class=\"en\" lang=\"en\">First affirmative</span></div></td><td><div class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">定义、团队立场、分工、前半立论。</span><span class=\"en\" lang=\"en\">Define; team line; roadmap; first half of case.</span></div></td></tr><tr><td><div class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">首反</span><span class=\"en\" lang=\"en\">First negative</span></div></td><td><div class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">接受或质疑定义；沉默视为接受。立场、分工、约 ¼ 反驳、前半立论。</span><span class=\"en\" lang=\"en\">Accept/challenge definitions; silence accepts. Line, roadmap, about ¼ rebuttal, first half.</span></div></td></tr><tr><td><div class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">双方二辩</span><span class=\"en\" lang=\"en\">Both second speakers</span></div></td><td><div class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">重申立场、约 ⅓ 反驳、后半立论。</span><span class=\"en\" lang=\"en\">Reaffirm; about ⅓ rebuttal; second half of case.</span></div></td></tr><tr><td><div class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">双方三辩</span><span class=\"en\" lang=\"en\">Both third speakers</span></div></td><td><div class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">重申立场、约 ⅔–¾ 反驳、总结；不加新主论点。</span><span class=\"en\" lang=\"en\">Reaffirm; about ⅔–¾ rebuttal; summarize; no new substantive case.</span></div></td></tr></tbody></table></div><p class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">团队立场一句话，前后一致。双方等时，主持人介绍，计时员提示。反驳抓重点、讲理由、不攻击人。用提示卡；看观众；声音清楚；少用大词。</span><span class=\"en\" lang=\"en\">Keep one consistent team line. Equal time; announcer and timekeeper. Rebut key arguments with reasons, not personal attacks. Use cue cards, eye contact, clear speech and plain words.</span></p><span class=\"citations\"><a href=\"#src-S02\">[S02]</a></span><h3 class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">怎么用到这份作业</span><span class=\"en\" lang=\"en\">How to apply it here</span></h3><p class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">网页描述传统三辩。作业明确给了六段赛程和 40/20/20/20 评分：<b>本页按作业执行</b>。网页的角色职责可借用，比例是参考；不要把网页“至少三分钟”等时长直接套到个人一分钟练习。规则冲突请 tutor 确认。</span><span class=\"en\" lang=\"en\">The page describes a traditional three-speaker format. <b>Use the assignment’s six segments and 40/20/20/20 rubric.</b> Adapt the roles; treat its proportions as guidance. Its timing, including the three-minute minimum, is not a rule for individual one-minute drills. Ask the tutor about conflicts.</span></p><span class=\"citations\"><a href=\"#src-S01\">[S01]</a></span><div class=\"grid two\"><article class=\"card \"><h3 class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">上场前统一三件事</span><span class=\"en\" lang=\"en\">Agree on three things</span></h3><p class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">need 怎么解释；用什么指标判断“妨碍”；每人补哪一步，避免重复。</span><span class=\"en\" lang=\"en\">Define need; choose the outcome for “hinders”; assign a distinct job to each speaker.</span></p></article><article class=\"card \"><h3 class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">结辩前检查一件事</span><span class=\"en\" lang=\"en\">One closing check</span></h3><p class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">这条主张之前说过吗？没说过，就别放进结辩。可以重新权衡已谈过的内容，不要另起新主论点。</span><span class=\"en\" lang=\"en\">Was this claim introduced earlier? If not, leave it out. Reweigh what has been discussed; do not introduce another substantive argument.</span></p></article></div>"
        }
      ]
    },
    {
      "id": "motion",
      "title": {
        "zh": "题目到底要求证明什么",
        "en": "What must be proved?"
      },
      "blocks": [
        {
          "kind": "html",
          "html": "<div class=\"table-wrap\"><table><thead><tr><th><div class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">词</span><span class=\"en\" lang=\"en\">Term</span></div></th><th><div class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">工作解释</span><span class=\"en\" lang=\"en\">Working meaning</span></div></th></tr></thead><tbody><tr><td><div class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">Graduate students</span><span class=\"en\" lang=\"en\">Graduate students</span></div></td><td><div class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">按硕士、博士理解；授课型与研究型都包括。</span><span class=\"en\" lang=\"en\">Master’s and doctoral students, taught and research degrees.</span></div></td></tr><tr><td><div class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">Professional development</span><span class=\"en\" lang=\"en\">Professional development</span></div></td><td><div class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">培养专业判断：会选方法、评价证据、解释并负责。</span><span class=\"en\" lang=\"en\">Developing professional judgment: choosing methods, evaluating evidence, explaining and taking responsibility.</span></div></td></tr><tr><td><div class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">Integration</span><span class=\"en\" lang=\"en\">Integration</span></div></td><td><div class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">日常工作中使用 AI；既可能代答，也可能给提示、反馈。</span><span class=\"en\" lang=\"en\">AI use within routine work, including answer generation, hints and feedback.</span></div></td></tr><tr><td><div class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">Hinders</span><span class=\"en\" lang=\"en\">Hinders</span></div></td><td><div class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">相对合理对照，妨碍学习或判断的发展。不是只看快慢。</span><span class=\"en\" lang=\"en\">Obstructs learning or judgment relative to a fair comparator—not just speed.</span></div></td></tr><tr><td><div class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">Not only P but also Q</span><span class=\"en\" lang=\"en\">Not only P but also Q</span></div></td><td><div class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">正方要分别说明技能 P 与认识责任 Q。一个成绩数字不能包办两问。</span><span class=\"en\" lang=\"en\">Affirmative must address skill P and responsibility Q separately. One grade statistic cannot settle both.</span></div></td></tr></tbody></table></div><h3 class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">need 有三种读法</span><span class=\"en\" lang=\"en\">Three readings of need</span></h3><div class=\"grid three\"><article class=\"card \"><h3 class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">义务</span><span class=\"en\" lang=\"en\">Duty</span></h3><p class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">客观上还该不该核实？用了 AI 不等于免责。</span><span class=\"en\" lang=\"en\">Should students still verify? AI use does not grant an exemption.</span></p></article><article class=\"card \"><h3 class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">必要感</span><span class=\"en\" lang=\"en\">Felt need</span></h3><p class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">学生会不会觉得“没必要再查”？这是正方较好打的版本。</span><span class=\"en\" lang=\"en\">Do students feel they no longer need to check? This is the stronger affirmative reading.</span></p></article><article class=\"card \"><h3 class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">实际履行</span><span class=\"en\" lang=\"en\">Practice</span></h3><p class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">他们有没有查来源、改错误、解释理由？看行为。</span><span class=\"en\" lang=\"en\">Do they check sources, correct errors and explain reasons? Look at behaviour.</span></p></article></div><p class=\"bi \"><span class=\"zh\" lang=\"zh-CN\"><b>正方开场可说：</b>“这里的 need 指核实和负责的必要感，不是说学生的义务消失。”反方可以接受这一定义，再追问实际证据；不要只靠抠词。</span><span class=\"en\" lang=\"en\"><b>Affirmative clarification:</b> “By need, we mean the felt need to verify and take responsibility, not the removal of duty.” Negative can accept that reading and test its evidence rather than win by wording alone.</span></p><p class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">不要给对方加上“每一个学生、每一次使用都受害”。反例能推翻“必然”，未必能推翻“一般趋势”；失败个案同样不能证明一般趋势。</span><span class=\"en\" lang=\"en\">Do not turn the motion into “every student, every use.” A counterexample defeats inevitability, not necessarily a general tendency. One failure does not establish a general tendency either.</span></p>"
        }
      ]
    },
    {
      "id": "concepts",
      "title": {
        "zh": "别把这几件事混在一起",
        "en": "Keep these measures separate"
      },
      "blocks": [
        {
          "kind": "html",
          "html": "<div class=\"table-wrap\"><table><thead><tr><th><div class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">要判断</span><span class=\"en\" lang=\"en\">Question</span></div></th><th><div class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">看什么</span><span class=\"en\" lang=\"en\">Measure</span></div></th><th><div class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">不能替代它的东西</span><span class=\"en\" lang=\"en\">Not a substitute</span></div></th></tr></thead><tbody><tr><td><div class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">作品表现</span><span class=\"en\" lang=\"en\">Output</span></div></td><td><div class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">有 AI 时的质量、时间、错误。</span><span class=\"en\" lang=\"en\">Quality, time and errors with AI.</span></div></td><td><div class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">不等于人已经学会。</span><span class=\"en\" lang=\"en\">Not proof of learning.</span></div></td></tr><tr><td><div class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">独立能力</span><span class=\"en\" lang=\"en\">Independent skill</span></div></td><td><div class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">不用 AI 做新题、找错误、解释方法。</span><span class=\"en\" lang=\"en\">Novel tasks, error detection and method explanation without AI.</span></div></td><td><div class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">觉得省力或更自信。</span><span class=\"en\" lang=\"en\">Feeling faster or more confident.</span></div></td></tr><tr><td><div class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">长期学习</span><span class=\"en\" lang=\"en\">Durable learning</span></div></td><td><div class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">隔几周、换情境后还能做。</span><span class=\"en\" lang=\"en\">Performance weeks later in a new context.</span></div></td><td><div class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">一次即时测验。</span><span class=\"en\" lang=\"en\">One immediate quiz.</span></div></td></tr><tr><td><div class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">认识责任</span><span class=\"en\" lang=\"en\">Responsible practice</span></div></td><td><div class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">核实、追溯、承认不确定性、纠错。</span><span class=\"en\" lang=\"en\">Verification, traceability, uncertainty and correction.</span></div></td><td><div class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">只勾选 AI 使用声明。</span><span class=\"en\" lang=\"en\">An AI-use declaration alone.</span></div></td></tr></tbody></table></div><p class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">批判性思维：能判断“这句话凭什么成立”。认识责任：对自己相信、采用和传播的说法负责。会查却不查，是履行问题；想查却不会，是能力问题。</span><span class=\"en\" lang=\"en\">Critical thinking asks why a claim holds. Epistemic responsibility concerns the claims one believes, adopts and shares. Knowing how to check but skipping it is a practice problem; wanting to check but lacking the skill is a capacity problem.</span></p><span class=\"citations\"><a href=\"#src-N01\">[N01]</a> <a href=\"#src-N02\">[N02]</a></span><p class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">工具依赖不自动等于不负责。专业人士也依赖书、同事和软件；关键是知道何时可信，何时该重新检查。</span><span class=\"en\" lang=\"en\">Reliance is not automatically irresponsible. Professionals also rely on books, colleagues and software; they must know when trust is warranted and when to check again.</span></p>"
        }
      ]
    },
    {
      "id": "map",
      "title": {
        "zh": "思维导图与八个断点",
        "en": "Mind map & eight weak links"
      },
      "blocks": [
        {
          "kind": "html",
          "html": "<p class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">16 个节点：先对齐两项定义，再选双方各六条路线，最后比较两问。<b>同侧六条是并列理由，不是必然发生的六步因果链。</b>点节点后可直接跳到对方回应。</span><span class=\"en\" lang=\"en\">16 nodes: align two starting questions, explore six routes per side, then weigh both claims. <b>The six routes are parallel arguments, not a six-step causal chain.</b> Each argument links to an opposing reply.</span></p>"
        },
        {
          "kind": "map"
        },
        {
          "kind": "html",
          "html": "<div class=\"table-wrap\"><table><thead><tr><th><div class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">断点</span><span class=\"en\" lang=\"en\">Weak link</span></div></th><th><div class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">现场一句话</span><span class=\"en\" lang=\"en\">One-line challenge</span></div></th></tr></thead><tbody><tr><td><div class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">省力 → 退化</span><span class=\"en\" lang=\"en\">Effort → decline</span></div></td><td><div class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">“你测的是少花力气，还是不会做了？”</span><span class=\"en\" lang=\"en\">“Did you measure lower effort or lost ability?”</span></div></td></tr><tr><td><div class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">成品 → 学会</span><span class=\"en\" lang=\"en\">Output → learning</span></div></td><td><div class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">“把 AI 关掉，他还能解释吗？”</span><span class=\"en\" lang=\"en\">“Can they explain it after the tool is removed?”</span></div></td></tr><tr><td><div class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">模型会错 → 学生轻信</span><span class=\"en\" lang=\"en\">AI error → credulity</span></div></td><td><div class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">“错误存在，怎么证明学生没核查？”</span><span class=\"en\" lang=\"en\">“An error exists. What shows students accepted it?”</span></div></td></tr><tr><td><div class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">责任感 → 义务</span><span class=\"en\" lang=\"en\">Felt need → duty</span></div></td><td><div class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">“不想查，与不必查，是同一件事吗？”</span><span class=\"en\" lang=\"en\">“Is not wanting to check the same as not needing to?”</span></div></td></tr><tr><td><div class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">高中 / 本科 → 研究生</span><span class=\"en\" lang=\"en\">Other students → graduates</span></div></td><td><div class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">“你要迁移的是年龄、任务，还是教学方式？”</span><span class=\"en\" lang=\"en\">“What transfers: age, task or teaching design?”</span></div></td></tr><tr><td><div class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">好特例 → 一般有效</span><span class=\"en\" lang=\"en\">Success case → general benefit</span></div></td><td><div class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">“这套支持在普通课堂能维持吗？”</span><span class=\"en\" lang=\"en\">“Can ordinary classrooms sustain that support?”</span></div></td></tr><tr><td><div class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">坏特例 → 一般有害</span><span class=\"en\" lang=\"en\">Failure case → general harm</span></div></td><td><div class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">“它说明可能发生，还是大多数会发生？”</span><span class=\"en\" lang=\"en\">“Does it show possibility or prevalence?”</span></div></td></tr><tr><td><div class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">应核验 → 会核验</span><span class=\"en\" lang=\"en\">Should check → will check</span></div></td><td><div class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">“责任写在纸上，实际谁做了什么？”</span><span class=\"en\" lang=\"en\">“The duty is written down. What did people actually do?”</span></div></td></tr></tbody></table></div>"
        }
      ]
    },
    {
      "id": "cases",
      "title": {
        "zh": "12 张论证卡：每条备两次回应",
        "en": "12 arguments: prepare two replies each"
      },
      "blocks": [
        {
          "kind": "html",
          "html": "<p class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">第一轮先用 A1–A3、N1–N3；第二轮换边，加入 A4–A6、N4–N6。上场只选最强的两条，不要把十二条都塞进演讲。</span><span class=\"en\" lang=\"en\">Start round one with A1–A3 and N1–N3. Swap sides in round two and add A4–A6 and N4–N6. Use the two strongest lines on stage—not all twelve.</span></p>"
        },
        {
          "kind": "arguments"
        }
      ]
    },
    {
      "id": "clashes",
      "title": {
        "zh": "怎么把反驳接下去",
        "en": "Keep the exchange going"
      },
      "blocks": [
        {
          "kind": "html",
          "html": "<p class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">固定四步：<b>他说什么 → 哪一步没证明 → 我方解释 → 所以该怎样判。</b>能让步就让步，但只让出对方真正证明的部分。</span><span class=\"en\" lang=\"en\">Use four steps: <b>their claim → missing step → our reason → judging implication.</b> Concede only what the evidence establishes.</span></p><div class=\"table-wrap\"><table><thead><tr><th><div class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">对方说</span><span class=\"en\" lang=\"en\">They say</span></div></th><th><div class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">第一回应</span><span class=\"en\" lang=\"en\">First reply</span></div></th><th><div class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">预计追问与第二回应</span><span class=\"en\" lang=\"en\">Follow-up and second reply</span></div></th></tr></thead><tbody><tr><td><div class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">“AI 提高成绩。”</span><span class=\"en\" lang=\"en\">“AI improves scores.”</span></div></td><td><div class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">“有工具的成绩，还是没工具的新题？”</span><span class=\"en\" lang=\"en\">“With-tool scores or new tasks without it?”</span></div></td><td><div class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">追问：考试只是一个指标。回应：同意，请补长期判断，不能只看成品。</span><span class=\"en\" lang=\"en\">Follow-up: exams are only one measure. Reply: agreed; add durable judgment, not output alone.</span></div></td></tr><tr><td><div class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">“AI 让人少思考。”</span><span class=\"en\" lang=\"en\">“AI reduces thinking.”</span></div></td><td><div class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">“哪种思考？检索、核验，还是推理？”</span><span class=\"en\" lang=\"en\">“Which thinking: retrieval, verification or reasoning?”</span></div></td><td><div class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">追问：少花力气总有风险。回应：风险要查，技能下降还要单独测。</span><span class=\"en\" lang=\"en\">Follow-up: less effort is risky. Reply: investigate risk; measure decline separately.</span></div></td></tr><tr><td><div class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">“有护栏就解决了。”</span><span class=\"en\" lang=\"en\">“Guardrails solve it.”</span></div></td><td><div class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">“谁执行，谁检查，绕开怎么办？”</span><span class=\"en\" lang=\"en\">“Who enforces and checks them? What about bypassing?”</span></div></td><td><div class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">追问：总比没有好。回应：可能；需比较收益、成本和实际遵守。</span><span class=\"en\" lang=\"en\">Follow-up: better than nothing. Reply: possibly; compare benefit, cost and adherence.</span></div></td></tr><tr><td><div class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">“义务永远在人。”</span><span class=\"en\" lang=\"en\">“Duty stays with people.”</span></div></td><td><div class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">“我们争的是是否履行，不是是否应当。”</span><span class=\"en\" lang=\"en\">“We are discussing enactment, not only duty.”</span></div></td><td><div class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">追问：那你有行为证据吗？回应：列出证据；没有就承认这一问还弱。</span><span class=\"en\" lang=\"en\">Follow-up: do you have behavioural evidence? Reply: present it; otherwise concede this claim is weak.</span></div></td></tr><tr><td><div class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">“访谈说有帮助。”</span><span class=\"en\" lang=\"en\">“Interviews report benefits.”</span></div></td><td><div class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">“经验值得听，但能否证明独立能力提高？”</span><span class=\"en\" lang=\"en\">“The experience matters; does it establish independent gains?”</span></div></td><td><div class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">追问：负面调查也一样。回应：对，同一把尺。</span><span class=\"en\" lang=\"en\">Follow-up: negative surveys have the same limit. Reply: yes—the same standard.</span></div></td></tr><tr><td><div class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">“研究生更成熟，不会依赖。”</span><span class=\"en\" lang=\"en\">“Graduates are mature enough to avoid dependency.”</span></div></td><td><div class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">“成熟不等于每个新领域都懂。”</span><span class=\"en\" lang=\"en\">“Maturity is not expertise in every new domain.”</span></div></td><td><div class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">追问：至少比高中更会核验。回应：可能；需要测，不能直接假定。</span><span class=\"en\" lang=\"en\">Follow-up: better at checking than school pupils. Reply: possibly; measure it rather than assume it.</span></div></td></tr></tbody></table></div>"
        }
      ]
    },
    {
      "id": "rehearsal",
      "title": {
        "zh": "双倍准备：40 分钟、两轮、12 段",
        "en": "Double preparation: 40 minutes, two rounds, 12 segments"
      },
      "blocks": [
        {
          "kind": "html",
          "html": "<p class=\"bi \"><span class=\"zh\" lang=\"zh-CN\"><b>训练量翻倍，正式规格不变。</b>第一轮 20 分钟，第二轮换边再做 20 分钟。共 12 段；不是把每段也翻倍成 80 分钟。复盘时间另算。</span><span class=\"en\" lang=\"en\"><b>Double the practice, not the assessment.</b> Debate for 20 minutes, swap sides, then repeat for 20. Twelve segments total—not 80 minutes. Debrief time is additional.</span></p><div class=\"table-wrap\"><table><thead><tr><th><div class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">阶段</span><span class=\"en\" lang=\"en\">Phase</span></div></th><th><div class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">第一轮：把理由讲通</span><span class=\"en\" lang=\"en\">Round 1: build the case</span></div></th><th><div class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">第二轮：换边，连续追问</span><span class=\"en\" lang=\"en\">Round 2: swap sides, press further</span></div></th></tr></thead><tbody><tr><td><div class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">正方开场 4m</span><span class=\"en\" lang=\"en\">Affirmative opening 4m</span></div></td><td><div class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">定义 need；A1 练习、A3 必要感。</span><span class=\"en\" lang=\"en\">Define need; A1 practice and A3 felt need.</span></div></td><td><div class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">沿用共同定义；加入 A4 问题选择或 A5 激励。</span><span class=\"en\" lang=\"en\">Keep shared definitions; add A4 framing or A5 incentives.</span></div></td></tr><tr><td><div class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">反方开场 4m</span><span class=\"en\" lang=\"en\">Negative opening 4m</span></div></td><td><div class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">接受或质疑定义；N1 设计、N3 责任。</span><span class=\"en\" lang=\"en\">Accept/challenge definitions; N1 design and N3 duty.</span></div></td><td><div class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">先处理上一轮弱点；用 N4 指标、N5 核查。</span><span class=\"en\" lang=\"en\">Address the earlier weakness; use N4 measurement and N5 checking.</span></div></td></tr><tr><td><div class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">正方反驳 3m</span><span class=\"en\" lang=\"en\">Affirmative rebuttal 3m</span></div></td><td><div class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">问护栏是否真实可行；用 A2。</span><span class=\"en\" lang=\"en\">Test safeguards with A2.</span></div></td><td><div class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">对方回答后继续问：谁核查？怎么知道理解了？</span><span class=\"en\" lang=\"en\">Follow up: who checks, and how is understanding shown?</span></div></td></tr><tr><td><div class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">反方反驳 3m</span><span class=\"en\" lang=\"en\">Negative rebuttal 3m</span></div></td><td><div class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">区分风险、普遍性、义务与行为。</span><span class=\"en\" lang=\"en\">Separate risk, prevalence, duty and behaviour.</span></div></td><td><div class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">接受一项不利证据，再说明它仍没证明哪一步。</span><span class=\"en\" lang=\"en\">Concede one adverse finding; identify the remaining gap.</span></div></td></tr><tr><td><div class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">正方结辩 3m</span><span class=\"en\" lang=\"en\">Affirmative closing 3m</span></div></td><td><div class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">回答技能 P 和责任 Q；不加新论点。</span><span class=\"en\" lang=\"en\">Address P and Q; no new case.</span></div></td><td><div class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">比较剩下的争议，而非把第一轮再念一遍。</span><span class=\"en\" lang=\"en\">Weigh unresolved clashes instead of repeating round one.</span></div></td></tr><tr><td><div class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">反方结辩 3m</span><span class=\"en\" lang=\"en\">Negative closing 3m</span></div></td><td><div class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">说清完整命题哪一问未被证明。</span><span class=\"en\" lang=\"en\">Identify which part of the motion remains unproven.</span></div></td><td><div class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">指出对方第二次回应仍未补上的缺口。</span><span class=\"en\" lang=\"en\">Identify the gap still missing after the second reply.</span></div></td></tr></tbody></table></div><div class=\"grid two\"><article class=\"card \"><h3 class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">每人准备两张一分钟卡</span><span class=\"en\" lang=\"en\">Two one-minute cards per person</span></h3><p class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">一张主张卡，一张反驳卡。每张只有四行：结论、证据、对方会问什么、你的回答。不要写满稿纸。</span><span class=\"en\" lang=\"en\">One claim card and one rebuttal card. Four lines each: conclusion, evidence, likely challenge, reply. Avoid a full script.</span></p></article><article class=\"card \"><h3 class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">两轮之间只改三件事</span><span class=\"en\" lang=\"en\">Change three things between rounds</span></h3><p class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">删一句空话；补一个缺口；换一个更贴题的例子。记录是谁指出问题，下一轮检查是否真的改好了。</span><span class=\"en\" lang=\"en\">Cut one empty sentence, repair one gap and improve one example. Record who found the problem; verify the fix next round.</span></p></article></div><p class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">正式赛程每段 1–2 人；一分钟是可拼接的练习单元，不是自行改成每分钟换一位。最后按实际人数与 tutor 安排组合。</span><span class=\"en\" lang=\"en\">The assignment allows one or two speakers per segment. A minute is a reusable practice unit, not permission to change speakers every minute. Assemble it to fit the team and tutor’s format.</span></p><span class=\"citations\"><a href=\"#src-S01\">[S01]</a></span>"
        }
      ]
    },
    {
      "id": "rhetoric",
      "title": {
        "zh": "一分钟出彩：表达与诡辩",
        "en": "Stand out in a minute: rhetoric & sophistry"
      },
      "blocks": [
        {
          "kind": "html",
          "html": "<p class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">按短时课堂评分来准备：让评审容易听懂、容易记住、容易给分。别押注评审“看不出”。<b>最稳的亮点，是一句清楚的区别，再接一个站得住的理由。</b></span><span class=\"en\" lang=\"en\">Prepare for short classroom judging: make the point easy to follow, remember and credit. Do not rely on a judge missing errors. <b>A clear distinction plus a defensible reason is the strongest highlight.</b></span></p><h3 class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">60 秒怎么分</span><span class=\"en\" lang=\"en\">A 60-second plan</span></h3><div class=\"table-wrap\"><table><thead><tr><th><div class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">时间</span><span class=\"en\" lang=\"en\">Time</span></div></th><th><div class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">任务</span><span class=\"en\" lang=\"en\">Job</span></div></th><th><div class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">直接可用</span><span class=\"en\" lang=\"en\">Usable line</span></div></th></tr></thead><tbody><tr><td>0–6s</td><td><div class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">先给判断</span><span class=\"en\" lang=\"en\">State the judgment</span></div></td><td><div class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">“题做对了，不代表人学会了。”</span><span class=\"en\" lang=\"en\">“A correct answer does not prove the student learned.”</span></div></td></tr><tr><td>6–20s</td><td><div class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">解释一条原因</span><span class=\"en\" lang=\"en\">Give one reason</span></div></td><td><div class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">“如果先拿到解法，就少了一次自己尝试和纠错。”</span><span class=\"en\" lang=\"en\">“Getting the solution first can remove an attempt and a correction.”</span></div></td></tr><tr><td>20–35s</td><td><div class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">一个证据或例子</span><span class=\"en\" lang=\"en\">One source or example</span></div></td><td><div class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">点名研究、对象和指标；不要连报五篇。</span><span class=\"en\" lang=\"en\">Name the study, population and outcome—not five papers in a row.</span></div></td></tr><tr><td>35–50s</td><td><div class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">承认最强反问，再限定</span><span class=\"en\" lang=\"en\">Concede and narrow</span></div></td><td><div class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">“提示式辅导可能不同；所以我们要看实际怎样整合。”</span><span class=\"en\" lang=\"en\">“Hint-based tutoring may differ. We must examine the actual integration.”</span></div></td></tr><tr><td>50–60s</td><td><div class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">一句收尾，回到题目</span><span class=\"en\" lang=\"en\">End on the motion</span></div></td><td><div class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">“请评价学生留下的能力，不只评价交出的答案。”</span><span class=\"en\" lang=\"en\">“Judge the ability students retain, not only the answer they submit.”</span></div></td></tr></tbody></table></div><h3 class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">值得用的六种技巧</span><span class=\"en\" lang=\"en\">Six techniques worth using</span></h3><div class=\"table-wrap\"><table><thead><tr><th><div class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">技巧</span><span class=\"en\" lang=\"en\">Technique</span></div></th><th><div class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">说法</span><span class=\"en\" lang=\"en\">Line</span></div></th><th><div class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">为什么有效 / 限度</span><span class=\"en\" lang=\"en\">Use / limit</span></div></th></tr></thead><tbody><tr><td><div class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">先定一个判断标准</span><span class=\"en\" lang=\"en\">Set a criterion early</span></div></td><td><div class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">“我们比较的是离开工具后能否判断。”</span><span class=\"en\" lang=\"en\">“Our test is judgment without the tool.”</span></div></td><td><div class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">把讨论收窄到可评分的一点；也要承认有工具表现的价值。</span><span class=\"en\" lang=\"en\">Creates a clear criterion; do not pretend assisted performance has no value.</span></div></td></tr><tr><td><div class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">先让一点，再卡关键处</span><span class=\"en\" lang=\"en\">Concede, then isolate the gap</span></div></td><td><div class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">“效率提高，我方承认。独立能力提高，你方还没证明。”</span><span class=\"en\" lang=\"en\">“We accept higher efficiency. Independent improvement remains unproven.”</span></div></td><td><div class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">听起来在回应而非回避；让步必须真实。</span><span class=\"en\" lang=\"en\">Shows engagement; make a genuine concession.</span></div></td></tr><tr><td><div class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">选择最强的一条证据</span><span class=\"en\" lang=\"en\">Use one strong source</span></div></td><td><div class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">“只看这个试验：人群是什么？拿走工具后测了什么？”</span><span class=\"en\" lang=\"en\">“Take this trial: who participated, and what was tested after removal?”</span></div></td><td><div class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">降低听众负担；重要限制不能藏掉。</span><span class=\"en\" lang=\"en\">Reduces listener load; retain material limitations.</span></div></td></tr><tr><td><div class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">反问一个可检验的问题</span><span class=\"en\" lang=\"en\">Ask a testable question</span></div></td><td><div class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">“如果学生已学会，换一道题能解释吗？”</span><span class=\"en\" lang=\"en\">“If they learned it, can they explain a new problem?”</span></div></td><td><div class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">比抽象指责具体；不能把回答不了一次等同于永久退化。</span><span class=\"en\" lang=\"en\">Makes the issue concrete; one failure is not permanent decline.</span></div></td></tr><tr><td><div class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">用相同标准反查</span><span class=\"en\" lang=\"en\">Apply the same standard</span></div></td><td><div class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">“你方不接受负面自报，也不能用正面自报证明能力。”</span><span class=\"en\" lang=\"en\">“If negative self-report is insufficient, positive self-report is insufficient too.”</span></div></td><td><div class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">指出双重标准；别因此把所有访谈说成无价值。</span><span class=\"en\" lang=\"en\">Exposes inconsistency without dismissing all qualitative evidence.</span></div></td></tr><tr><td><div class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">回收全队同一句话</span><span class=\"en\" lang=\"en\">Return to the team line</span></div></td><td><div class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">正：“答案不能代替判断。”反：“帮助可以外包，责任不能。”</span><span class=\"en\" lang=\"en\">Affirmative: “Answers cannot replace judgment.” Negative: “Help can be delegated; responsibility cannot.”</span></div></td><td><div class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">增强记忆和团队一致性；它是总结，不是证据。</span><span class=\"en\" lang=\"en\">Improves recall and coherence; a slogan is not evidence.</span></div></td></tr></tbody></table></div><h3 class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">诡辩为什么显眼，又为什么容易翻车</span><span class=\"en\" lang=\"en\">Why sophistry catches attention—and backfires</span></h3><p class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">下面给的是“识别、借力、反制”表。可以借它的简洁结构，别借错误前提。捏造研究、数字或对方原话，没有值得保留的技巧。</span><span class=\"en\" lang=\"en\">Use the table to recognize, redirect and counter these moves. Borrow brevity, not false premises. Fabricated studies, figures or quotations have no useful version.</span></p><div class=\"table-wrap\"><table><thead><tr><th><div class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">招数与诱人说法</span><span class=\"en\" lang=\"en\">Move and tempting line</span></div></th><th><div class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">短时优势 / 漏洞</span><span class=\"en\" lang=\"en\">Short-term appeal / flaw</span></div></th><th><div class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">改成能守住的版本；对方用了怎么拆</span><span class=\"en\" lang=\"en\">Defensible version; how to counter it</span></div></th></tr></thead><tbody><tr><td><div class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">偷换 need：“AI 越危险越要负责，所以正方输了。”</span><span class=\"en\" lang=\"en\">Equivocation: “AI needs more responsibility, so affirmative loses.”</span></div></td><td><div class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">一句抓住措辞，但可能回避对方谈的必要感。</span><span class=\"en\" lang=\"en\">Sounds decisive, but may evade felt need.</span></div></td><td><div class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">先确认对方指义务还是行为。拆招：“你回答了应该怎样，还没回答实际怎样。”</span><span class=\"en\" lang=\"en\">Clarify duty versus practice. Counter: “You answered what ought to happen, not what does.”</span></div></td></tr><tr><td><div class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">稻草人：“反方想让 AI 替学生思考。”</span><span class=\"en\" lang=\"en\">Straw man: “Negative wants AI to think for students.”</span></div></td><td><div class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">容易制造鲜明对立，却未必是对方立场。</span><span class=\"en\" lang=\"en\">Creates contrast by inventing the opponent’s claim.</span></div></td><td><div class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">改问哪些步骤交给 AI。拆招：“请回应我们提出的提示和核验，而不是代答。”</span><span class=\"en\" lang=\"en\">Ask which steps are delegated. Counter: “Address our hints and verification, not substitution.”</span></div></td></tr><tr><td><div class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">假二选一：“要么禁 AI，要么放弃独立思考。”</span><span class=\"en\" lang=\"en\">False choice: “Ban AI or abandon independent thought.”</span></div></td><td><div class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">简单好记，但删掉了有约束的使用。</span><span class=\"en\" lang=\"en\">Memorable, but excludes guided use.</span></div></td><td><div class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">比较三种流程。拆招：“第三种是先尝试、再提示、最后独立重做。”</span><span class=\"en\" lang=\"en\">Compare three workflows. Counter: “A third option is attempt, hints, independent retry.”</span></div></td></tr><tr><td><div class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">权威压人：“哈佛研究已经证明。”</span><span class=\"en\" lang=\"en\">Authority shortcut: “Harvard has proved it.”</span></div></td><td><div class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">机构名替代方法，适合短时唬人，也很容易被问倒。</span><span class=\"en\" lang=\"en\">A name replaces the method and invites an easy challenge.</span></div></td><td><div class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">说清本科物理、两节课、定制 tutor。拆招：“名气不能补上研究生长期结果。”</span><span class=\"en\" lang=\"en\">Specify undergraduate physics, two lessons and a custom tutor. Counter: “Prestige does not supply graduate long-term outcomes.”</span></div></td></tr><tr><td><div class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">摘数字：“17% 下降，所以 AI 伤害研究生。”</span><span class=\"en\" lang=\"en\">Cherry-picked number: “A 17% drop proves graduate harm.”</span></div></td><td><div class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">数字显得精确，但换了群体，也漏了另一实验组。</span><span class=\"en\" lang=\"en\">Looks precise while changing population and omitting an arm.</span></div></td><td><div class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">保留高中、相对下降、护栏组。拆招：“这支持特定风险，外推那一步呢？”</span><span class=\"en\" lang=\"en\">Keep the population, relative change and guarded arm. Counter: “That supports a bounded risk. What supports transfer?”</span></div></td></tr><tr><td><div class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">证据轰炸：一分钟连报十个研究。</span><span class=\"en\" lang=\"en\">Evidence barrage: ten studies in a minute.</span></div></td><td><div class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">让人来不及逐条核对，却也听不清主张。</span><span class=\"en\" lang=\"en\">Hard to check, but also hard to understand.</span></div></td><td><div class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">一条主证据，其余留备查。拆招：“请选最能证明核心结论的一项。”</span><span class=\"en\" lang=\"en\">Use one main source. Counter: “Choose the study that best establishes your central claim.”</span></div></td></tr></tbody></table></div><div class=\"grid two\"><article class=\"card \"><h3 class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">正方一分钟示范</span><span class=\"en\" lang=\"en\">Affirmative one-minute sample</span></h3><p class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">题做对了，不代表人学会了。如果 AI 在学生尝试前就交出解法，比较、犯错、修正的机会就可能被跳过。Bastani 等人的高中数学试验把两者分开测：有 AI 时的表现，与拿走 AI 后的表现，可以朝不同方向变化。这不能直接代表所有研究生，但足以提醒我们别把成品当成能力。反方会说，提示式辅导不同。我们同意；请说明现实整合如何保住独立尝试与核实。专业发展最终要留下的，是学生自己的判断。</span><span class=\"en\" lang=\"en\">A correct answer does not prove that a student learned. If AI supplies the solution before an attempt, students can skip comparison, mistakes and correction. Bastani and colleagues’ school mathematics trial separated assisted performance from performance after AI was removed. Those outcomes can move in different directions. That does not represent every graduate, but it shows why output is not enough. The negative may say hint-based tutoring differs. We agree. Show how the actual integration preserves independent attempts and verification. Professional development must leave students with judgment of their own.</span></p><span class=\"citations\"><a href=\"#src-E02\">[E02]</a></span></article><article class=\"card \"><h3 class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">反方一分钟示范</span><span class=\"en\" lang=\"en\">Negative one-minute sample</span></h3><p class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">请先区分代答和辅导。把完整解法交给学生，与要求学生先尝试、再给提示，不是同一种整合。研究中的结果会随设计改变；这让“AI 整合就是妨碍思考”不能直接成立。第二，题目还要证明认识责任的需要受妨碍。如果说义务，它仍在人；如果说责任感，就请拿出责任感或行为的证据，不能拿成绩替代。我们承认依赖风险，但风险需要具体证明。请评价学生是否理解和核实，而不是只问他有没有用 AI。</span><span class=\"en\" lang=\"en\">Separate answer substitution from tutoring. Giving a complete solution and asking for an attempt before offering hints are different forms of integration. Outcomes can change with design, so integration alone does not establish harm. The motion also claims a weaker need for epistemic responsibility. If that means duty, the duty remains. If it means motivation, show evidence of motivation or behaviour rather than substituting grades. We accept dependency risks, but risks need specific support. Judge whether students understand and verify, not simply whether they used AI.</span></p></article></div><p class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">这是练习稿，不是固定语速承诺。录一次；超时先删修饰和第二个例子，保留结论、证据范围和回应。开头停半拍，最后一句放慢。</span><span class=\"en\" lang=\"en\">These are practice scripts, not a guaranteed speaking rate. Record them. If over time, cut modifiers and the second example; keep the claim, evidence scope and reply. Pause before the opening and slow the final sentence.</span></p>"
        }
      ]
    },
    {
      "id": "evidence",
      "title": {
        "zh": "证据速查：能证明到哪一步",
        "en": "Evidence: what it establishes"
      },
      "blocks": [
        {
          "kind": "html",
          "html": "<p class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">两条标准分开看：<b>是否更能说明因果；是否研究了研究生。</b>实验和访谈各有用处，不能简单排成一个总分。</span><span class=\"en\" lang=\"en\">Separate two tests: <b>causal identification and relevance to graduates.</b> Experiments and interviews serve different purposes; there is no single ranking.</span></p><div class=\"grid two\"><article class=\"card\" id=\"ev-E01\"><span class=\"eyebrow\">E01</span><h3 class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">319 名知识工作者</span><span class=\"en\" lang=\"en\">319 knowledge workers</span></h3><p class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">较高 AI 信心与较少自报思考相关。</span><span class=\"en\" lang=\"en\">Greater AI confidence was associated with less reported thinking.</span></p><p class=\"bi \"><span class=\"zh\" lang=\"zh-CN\"><b>限制：</b>自报关联；不是研究生长期技能测验。</span><span class=\"en\" lang=\"en\"><b>Limit:</b> Self-report association, not a longitudinal graduate skill test.</span></p><span class=\"citations\"><a href=\"#src-E01\">[E01]</a></span></article><article class=\"card\" id=\"ev-E02\"><span class=\"eyebrow\">E02</span><h3 class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">高中课堂随机试验</span><span class=\"en\" lang=\"en\">High-school classroom RCT</span></h3><p class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">无护栏组撤除 AI 后相对低约 17%；护栏组与对照无显著差异。</span><span class=\"en\" lang=\"en\">After removal, the unguarded group scored about 17% lower relative to control; the guarded group was not significantly different.</span></p><p class=\"bi \"><span class=\"zh\" lang=\"zh-CN\"><b>限制：</b>高中数学；17% 不是 17 个百分点；无显著差异不等于完全相同。</span><span class=\"en\" lang=\"en\"><b>Limit:</b> School mathematics; 17%, not 17 percentage points. Non-significance is not equivalence.</span></p><span class=\"citations\"><a href=\"#src-E02\">[E02]</a></span></article><article class=\"card\" id=\"ev-E03\"><span class=\"eyebrow\">E03</span><h3 class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">194 名本科生、两节物理课</span><span class=\"en\" lang=\"en\">194 undergraduates, two physics lessons</span></h3><p class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">定制 tutor 的即时测验结果较好。</span><span class=\"en\" lang=\"en\">A custom tutor produced better immediate quiz results.</span></p><p class=\"bi \"><span class=\"zh\" lang=\"zh-CN\"><b>限制：</b>教学组合，不是普通聊天；未测长期高阶判断。</span><span class=\"en\" lang=\"en\"><b>Limit:</b> A teaching package, not ordinary chat; no durable higher-order judgment measure.</span></p><span class=\"citations\"><a href=\"#src-E03\">[E03]</a></span></article><article class=\"card\" id=\"ev-E04\"><span class=\"eyebrow\">E04</span><h3 class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">20 名澳洲研究生</span><span class=\"en\" lang=\"en\">20 postgraduate researchers in Australia</span></h3><p class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">访谈报告自主性、研究与思考上的帮助。</span><span class=\"en\" lang=\"en\">Interviews reported help with autonomy, research and thinking.</span></p><p class=\"bi \"><span class=\"zh\" lang=\"zh-CN\"><b>限制：</b>人群贴题；经验报告不等于因果提升。仅核读摘要。</span><span class=\"en\" lang=\"en\"><b>Limit:</b> Relevant population; accounts are not causal gains. Abstract checked only.</span></p><span class=\"citations\"><a href=\"#src-E04\">[E04]</a></span></article><article class=\"card\" id=\"ev-E05\"><span class=\"eyebrow\">E05</span><h3 class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">28 名博士生，含使用记录</span><span class=\"en\" lang=\"en\">28 doctoral students, with artifacts</span></h3><p class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">区分直接替代理解与核验后自己重建。</span><span class=\"en\" lang=\"en\">Distinguishes substituted understanding from checked, reconstructed understanding.</span></p><p class=\"bi \"><span class=\"zh\" lang=\"zh-CN\"><b>限制：</b>适合解释过程，不估计普遍比例。</span><span class=\"en\" lang=\"en\"><b>Limit:</b> Useful for processes, not prevalence estimates.</span></p><span class=\"citations\"><a href=\"#src-E05\">[E05]</a></span></article><article class=\"card\" id=\"ev-E06\"><span class=\"eyebrow\">E06</span><h3 class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">636 条生成参考文献</span><span class=\"en\" lang=\"en\">636 generated references</span></h3><p class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">2023 年特定输出中，GPT-3.5 / GPT-4 的伪造比例为 55% / 18%。</span><span class=\"en\" lang=\"en\">In specified 2023 outputs, fabricated-reference rates were 55% / 18% for GPT-3.5 / GPT-4.</span></p><p class=\"bi \"><span class=\"zh\" lang=\"zh-CN\"><b>限制：</b>旧模型输出审计；没测学生是否相信，更不是当前错误率。</span><span class=\"en\" lang=\"en\"><b>Limit:</b> An older output audit; not student credulity or current error rates.</span></p><span class=\"citations\"><a href=\"#src-E06\">[E06]</a></span></article><article class=\"card\" id=\"ev-E07\"><span class=\"eyebrow\">E07</span><h3 class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">72 名本科与研究生</span><span class=\"en\" lang=\"en\">72 undergraduate and graduate students</span></h3><p class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">90 分钟工作坊后，自报思维量表提高。</span><span class=\"en\" lang=\"en\">Reported thinking scores rose after a 90-minute workshop.</span></p><p class=\"bi \"><span class=\"zh\" lang=\"zh-CN\"><b>限制：</b>非随机分组、自报、即时测量。</span><span class=\"en\" lang=\"en\"><b>Limit:</b> Non-random groups, self-report, immediate measurement.</span></p><span class=\"citations\"><a href=\"#src-E07\">[E07]</a></span></article></div><p class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">正负结果用同一标准：负面自报不能直接证明退化，正面自报也不能直接证明提升。论文标题、机构名和样本大小，都不能替代方法检查。</span><span class=\"en\" lang=\"en\">Use the same standard for both directions. Negative self-report does not directly prove decline; positive self-report does not directly prove improvement. Titles, prestige and sample size cannot replace method checks.</span></p>"
        }
      ]
    },
    {
      "id": "grounds",
      "title": {
        "zh": "伦理：为什么不只关乎分数",
        "en": "Ethics: more than grades"
      },
      "blocks": [
        {
          "kind": "html",
          "html": "<div class=\"table-wrap\"><table><thead><tr><th><div class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">理由</span><span class=\"en\" lang=\"en\">Ground</span></div></th><th><div class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">这场怎么用</span><span class=\"en\" lang=\"en\">Application</span></div></th></tr></thead><tbody><tr><td><div class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">诚实</span><span class=\"en\" lang=\"en\">Honesty</span></div></td><td><div class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">不能让别人误以为你理解或核实了尚未理解、核实的内容。</span><span class=\"en\" lang=\"en\">Do not imply understanding or checking you have not done.</span></div></td></tr><tr><td><div class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">公众利益</span><span class=\"en\" lang=\"en\">Public interest</span></div></td><td><div class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">研究生的专业结论会影响客户、参与者和公众。算入他们承担的错误成本。</span><span class=\"en\" lang=\"en\">Professional claims affect clients, participants and the public. Count the costs they bear.</span></div></td></tr><tr><td><div class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">自主</span><span class=\"en\" lang=\"en\">Agency</span></div></td><td><div class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">学生能不能自己决定问题、拒绝建议并给理由？</span><span class=\"en\" lang=\"en\">Can students choose questions, reject suggestions and give reasons?</span></div></td></tr><tr><td><div class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">公平</span><span class=\"en\" lang=\"en\">Fairness</span></div></td><td><div class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">谁获得帮助，谁更难发现错误？限制工具也可能撤走支持。</span><span class=\"en\" lang=\"en\">Who gains support and who struggles to spot errors? Restrictions may also remove support.</span></div></td></tr><tr><td><div class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">职业责任</span><span class=\"en\" lang=\"en\">Professional duty</span></div></td><td><div class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">工具不替人承担主张；记录、准确引用和纠错仍要做。</span><span class=\"en\" lang=\"en\">Tools do not own claims; records, accurate citation and correction remain necessary.</span></div></td></tr></tbody></table></div><span class=\"citations\"><a href=\"#src-S03\">[S03]</a> <a href=\"#src-S05\">[S05]</a> <a href=\"#src-N02\">[N02]</a></span><p class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">规范说明“应该怎样”，不证明“实际怎样”。学生负责采纳的主张；导师和大学负责给出能执行的训练与评价。</span><span class=\"en\" lang=\"en\">Standards establish duties, not compliance. Students own adopted claims; supervisors and universities must provide workable training and assessment.</span></p>"
        }
      ]
    },
    {
      "id": "scenarios",
      "title": {
        "zh": "三个研究生场景",
        "en": "Three graduate scenarios"
      },
      "blocks": [
        {
          "kind": "html",
          "html": "<p class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">这些是练习情境，不是论文中的真实事件。</span><span class=\"en\" lang=\"en\">These are authored practice scenarios, not reported incidents.</span></p><div class=\"table-wrap\"><table><thead><tr><th><div class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">任务</span><span class=\"en\" lang=\"en\">Task</span></div></th><th><div class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">正方抓什么</span><span class=\"en\" lang=\"en\">Affirmative target</span></div></th><th><div class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">反方怎么守</span><span class=\"en\" lang=\"en\">Negative defence</span></div></th></tr></thead><tbody><tr><td><div class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">文献综述</span><span class=\"en\" lang=\"en\">Literature review</span></div></td><td><div class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">框架很顺，原文没读，解释不了为何排除另一观点。</span><span class=\"en\" lang=\"en\">Coherent framing without original reading or reasons for excluding alternatives.</span></div></td><td><div class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">先列争议，用 AI 找反例，再核原文并独立解释。</span><span class=\"en\" lang=\"en\">Map the dispute first; use AI for counterarguments; check originals and explain independently.</span></div></td></tr><tr><td><div class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">统计与代码</span><span class=\"en\" lang=\"en\">Statistics and code</span></div></td><td><div class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">代码能跑，学生却说不清假设、泄漏或适用范围。</span><span class=\"en\" lang=\"en\">Code runs, but the student cannot explain assumptions, leakage or scope.</span></div></td><td><div class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">先写计划，手工抽查，换数据后说明为何仍适用。</span><span class=\"en\" lang=\"en\">Plan first, spot-check manually, then justify use with changed data.</span></div></td></tr><tr><td><div class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">职业建议</span><span class=\"en\" lang=\"en\">Professional advice</span></div></td><td><div class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">把流畅报告当成已核实结论，出错后归咎于 AI。</span><span class=\"en\" lang=\"en\">Fluent reporting substitutes for verified conclusions; blame is shifted to AI.</span></div></td><td><div class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">保留证据与不确定性，用自己的理由签署建议。</span><span class=\"en\" lang=\"en\">Keep evidence and uncertainty; own the reasons for the recommendation.</span></div></td></tr></tbody></table></div>"
        }
      ]
    },
    {
      "id": "design",
      "title": {
        "zh": "责任分工与可行做法",
        "en": "Responsibilities & practical controls"
      },
      "blocks": [
        {
          "kind": "html",
          "html": "<div class=\"table-wrap\"><table><thead><tr><th><div class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">谁</span><span class=\"en\" lang=\"en\">Who</span></div></th><th><div class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">做什么</span><span class=\"en\" lang=\"en\">What to do</span></div></th><th><div class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">代价 / 检查</span><span class=\"en\" lang=\"en\">Cost / check</span></div></th></tr></thead><tbody><tr><td><div class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">学生</span><span class=\"en\" lang=\"en\">Student</span></div></td><td><div class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">查关键来源，记录接受或拒绝的理由。</span><span class=\"en\" lang=\"en\">Check key sources; record reasons for acceptance/rejection.</span></div></td><td><div class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">是否能不用 AI 重新解释？</span><span class=\"en\" lang=\"en\">Can they explain it without AI?</span></div></td></tr><tr><td><div class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">导师</span><span class=\"en\" lang=\"en\">Supervisor</span></div></td><td><div class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">用新问题抽查理解，不只看成品。</span><span class=\"en\" lang=\"en\">Probe understanding with new questions, not products alone.</span></div></td><td><div class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">时间有限，抽查须有针对性。</span><span class=\"en\" lang=\"en\">Limited time requires targeted sampling.</span></div></td></tr><tr><td><div class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">大学</span><span class=\"en\" lang=\"en\">University</span></div></td><td><div class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">给训练、规则和可及支持。</span><span class=\"en\" lang=\"en\">Provide training, rules and accessible support.</span></div></td><td><div class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">口试别变成只测语言流利度。</span><span class=\"en\" lang=\"en\">Oral checks should not merely test fluency.</span></div></td></tr><tr><td><div class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">工具提供者</span><span class=\"en\" lang=\"en\">Provider</span></div></td><td><div class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">清楚标示来源能力与不确定性。</span><span class=\"en\" lang=\"en\">Communicate provenance limits and uncertainty.</span></div></td><td><div class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">不能把产品责任全推给用户核实。</span><span class=\"en\" lang=\"en\">Do not shift all product responsibility onto users.</span></div></td></tr></tbody></table></div><span class=\"citations\"><a href=\"#src-N02\">[N02]</a> <a href=\"#src-N03\">[N03]</a></span><p class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">可练的流程：<b>先自己尝试 → AI 给提示或反例 → 查原文 → 关工具重做。</b>这是建议组合，尚未证明在所有研究生课程有效。</span><span class=\"en\" lang=\"en\">A workflow to test: <b>attempt → AI hint/counterexample → original-source check → independent retry.</b> This package is a proposal, not proven across all graduate courses.</span></p>"
        }
      ]
    },
    {
      "id": "delivery",
      "title": {
        "zh": "上场分工与交接",
        "en": "Speaking roles & handovers"
      },
      "blocks": [
        {
          "kind": "html",
          "html": "<p class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">每人解决一个问题，别各讲一篇小论文。开场定标准，反驳接对方，结辩比较剩下的争议。</span><span class=\"en\" lang=\"en\">Give each speaker one job, not a separate mini-essay. Open with the criterion, rebut the opponent, close by weighing unresolved issues.</span></p><div class=\"table-wrap\"><table><thead><tr><th><div class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">位置</span><span class=\"en\" lang=\"en\">Slot</span></div></th><th><div class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">正方</span><span class=\"en\" lang=\"en\">Affirmative</span></div></th><th><div class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">反方</span><span class=\"en\" lang=\"en\">Negative</span></div></th></tr></thead><tbody><tr><td><div class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">开场</span><span class=\"en\" lang=\"en\">Opening</span></div></td><td><div class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">解释 need；讲少练判断和少做核实。</span><span class=\"en\" lang=\"en\">Define need; argue displaced practice and checking.</span></div></td><td><div class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">回应定义；区分代答、提示及不同指标。</span><span class=\"en\" lang=\"en\">Address definitions; distinguish substitution, hints and measures.</span></div></td></tr><tr><td><div class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">反驳</span><span class=\"en\" lang=\"en\">Rebuttal</span></div></td><td><div class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">问监督所需知识、执行成本和真实使用。</span><span class=\"en\" lang=\"en\">Test knowledge for oversight, cost and actual use.</span></div></td><td><div class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">问人群外推、因果证据及两分句是否都成立。</span><span class=\"en\" lang=\"en\">Test population transfer, causality and both conjuncts.</span></div></td></tr><tr><td><div class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">结辩</span><span class=\"en\" lang=\"en\">Closing</span></div></td><td><div class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">说哪种判断被取代，为什么对研究生重要。</span><span class=\"en\" lang=\"en\">Identify the displaced judgment and why it matters.</span></div></td><td><div class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">说对方哪一步仍没证明，不必宣称 AI 万能。</span><span class=\"en\" lang=\"en\">Identify the unproven step; no need to claim AI is universally good.</span></div></td></tr></tbody></table></div><div class=\"grid two\"><article class=\"card \"><h3 class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">正方交接</span><span class=\"en\" lang=\"en\">Affirmative handover</span></h3><p class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">“我解释了练习为何会减少。下一位回答：学生有没有足够知识来核实 AI？”</span><span class=\"en\" lang=\"en\">“I explained how practice can be displaced. Our next speaker asks whether students have the knowledge to check AI.”</span></p></article><article class=\"card \"><h3 class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">反方交接</span><span class=\"en\" lang=\"en\">Negative handover</span></h3><p class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">“我区分了代答与辅导。下一位解释：使用工具为什么不等于责任消失。”</span><span class=\"en\" lang=\"en\">“I separated substitution from tutoring. Our next speaker explains why using a tool does not remove responsibility.”</span></p></article></div><span class=\"citations\"><a href=\"#src-S01\">[S01]</a> <a href=\"#src-S02\">[S02]</a></span>"
        },
        {
          "kind": "timer"
        }
      ]
    },
    {
      "id": "workbench",
      "title": {
        "zh": "团队笔记与检查",
        "en": "Team notes & checks"
      },
      "blocks": [
        {
          "kind": "html",
          "html": "<p class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">刷新会清空输入。先下载再离开；切换语言不会丢失笔记。</span><span class=\"en\" lang=\"en\">Reloading clears entries. Download before leaving; language changes preserve notes.</span></p>"
        },
        {
          "kind": "workbench"
        },
        {
          "kind": "checklist"
        },
        {
          "kind": "html",
          "html": "<p class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">提交包：原题与定义、双方论证、来源、分工和排练记录。用这份 AI 辅助材料时，也请自己核读关键来源，能解释才上场。课程 AI 规则以活动页为准。</span><span class=\"en\" lang=\"en\">Submit the motion/definitions, both cases, sources, roles and rehearsal records. This pack is AI-assisted: read key sources yourself and explain them before using them. Assignment AI rules come from the activity page.</span></p><span class=\"citations\"><a href=\"#src-S01\">[S01]</a> <a href=\"#src-N04\">[N04]</a></span>"
        }
      ]
    },
    {
      "id": "glossary",
      "title": {
        "zh": "术语：用得上才说",
        "en": "Terms: use only when useful"
      },
      "blocks": [
        {
          "kind": "html",
          "html": "<div class=\"table-wrap\"><table><thead><tr><th><div class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">English</span><span class=\"en\" lang=\"en\">English</span></div></th><th><div class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">直白解释</span><span class=\"en\" lang=\"en\">Plain meaning</span></div></th></tr></thead><tbody><tr><td>Critical thinking</td><td><div class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">判断理由是否成立。</span><span class=\"en\" lang=\"en\">Judging whether reasons hold.</span></div></td></tr><tr><td>Epistemic responsibility</td><td><div class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">对相信、使用和传播的说法负责。</span><span class=\"en\" lang=\"en\">Responsibility for claims believed, used and shared.</span></div></td></tr><tr><td>Cognitive offloading</td><td><div class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">把部分思考任务交给外部工具。</span><span class=\"en\" lang=\"en\">Delegating cognitive work to external tools.</span></div></td></tr><tr><td>Scaffolding</td><td><div class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">给提示和支持，但让学生逐渐自己做。</span><span class=\"en\" lang=\"en\">Support that leaves progressively more work to the learner.</span></div></td></tr><tr><td>Transfer</td><td><div class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">换一道题、换个情境仍会用。</span><span class=\"en\" lang=\"en\">Applying learning to a new problem or context.</span></div></td></tr><tr><td>Calibration</td><td><div class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">信心与实际正确程度是否匹配。</span><span class=\"en\" lang=\"en\">Whether confidence matches accuracy.</span></div></td></tr><tr><td>Warrant</td><td><div class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">为什么这个证据能支持这句话。</span><span class=\"en\" lang=\"en\">Why this evidence supports the claim.</span></div></td></tr><tr><td>Defeater</td><td><div class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">什么事实出现，你就该改口。</span><span class=\"en\" lang=\"en\">Evidence that should change your claim.</span></div></td></tr><tr><td>Association</td><td><div class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">一起变化，不等于谁造成谁。</span><span class=\"en\" lang=\"en\">Changing together, not necessarily causation.</span></div></td></tr><tr><td>Qualifier</td><td><div class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">说清在哪些条件下成立。</span><span class=\"en\" lang=\"en\">The conditions under which a claim holds.</span></div></td></tr></tbody></table></div><p class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">自报用 reported；关联用 associated；自己的推断用 we argue。不要把 can 说成 always，把没显著差异说成完全一样。</span><span class=\"en\" lang=\"en\">Use reported for self-report, associated for association, and we argue for inference. Do not turn can into always or non-significance into equivalence.</span></p>"
        }
      ]
    },
    {
      "id": "references",
      "title": {
        "zh": "来源与原件",
        "en": "Sources & originals"
      },
      "blocks": [
        {
          "kind": "html",
          "html": "<p class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">核对日期：2026-10-11。这是定向备赛研究，不是穷尽综述。E 是经验研究 / 输出审计；N 是规范或政策；S 是课程基础；M00 是用户提供的原题。</span><span class=\"en\" lang=\"en\">Checked: 11 October 2026. This is a targeted preparation review, not an exhaustive review. E: empirical work/output audits; N: norms/policy; S: course foundations; M00: supplied motion.</span></p><div class=\"source-links\"><a href=\"/social-responsibility-debate/sources.json\" download><div class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">来源台账</span><span class=\"en\" lang=\"en\">Source ledger</span></div></a><a href=\"/social-responsibility-debate/raw/manifest.json\" download><div class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">原件清单与校验值</span><span class=\"en\" lang=\"en\">Originals and hashes</span></div></a></div><article class=\"source card\" id=\"src-M00\"><span class=\"source-id\">M00</span><h3><a href=\"/social-responsibility-debate/raw/assigned-motion.txt\" target=\"_blank\" rel=\"noopener\">Topic of Social Responsibility Debate</a></h3><p class=\"meta\">Moodle manual item, supplied by the user · Received 11 October 2026</p><p class=\"locator\">User-provided verbatim topic</p><p class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">本题原文逐字保存；“need” 的歧义必须公开处理。</span><span class=\"en\" lang=\"en\">The exact supplied motion is preserved; address the ambiguity of “need” explicitly.</span></p><p><a href=\"/social-responsibility-debate/raw/assigned-motion.txt\" target=\"_blank\" rel=\"noopener\"><div class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">打开原件</span><span class=\"en\" lang=\"en\">Open original</span></div></a></p><p class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">用户提供的条目是本版命题依据；未独立登录 Moodle 核验分组或更新。</span><span class=\"en\" lang=\"en\">The user-supplied item is the basis; allocation and subsequent Moodle changes were not independently checked.</span></p></article><article class=\"source card\" id=\"src-E01\"><span class=\"source-id\">E01</span><h3><a href=\"https://doi.org/10.1145/3706598.3713778\" target=\"_blank\" rel=\"noopener\">The Impact of Generative AI on Critical Thinking: Self-Reported Reductions in Cognitive Effort and Confidence Effects From a Survey of Knowledge Workers</a></h3><p class=\"meta\">Lee, H.-P., Sarkar, A., Tankelevitch, L., Drosos, I., Rintel, S., Banks, R., &amp; Wilson, N. · CHI 2025</p><p class=\"locator\">Abstract; §3 Method; §6.2–6.3, PDF p. 15</p><a href=\"#ev-E01\"><div class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">看结果与限制</span><span class=\"en\" lang=\"en\">Result and limit</span></div></a><p><a href=\"/social-responsibility-debate/raw/lee-2025-critical-thinking.pdf\" target=\"_blank\" rel=\"noopener\"><div class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">打开原件</span><span class=\"en\" lang=\"en\">Open original</span></div></a></p></article><article class=\"source card\" id=\"src-E02\"><span class=\"source-id\">E02</span><h3><a href=\"https://doi.org/10.1073/pnas.2422633122\" target=\"_blank\" rel=\"noopener\">Generative AI without guardrails can harm learning: Evidence from high school mathematics</a></h3><p class=\"meta\">Bastani, H., Bastani, O., Sungu, A., Ge, H., Kabakcı, Ö., &amp; Mariman, R. · PNAS 122(26), 2025</p><p class=\"locator\">Author manuscript pp. 1–2, 6–7, 11; unassisted exam results</p><a href=\"#ev-E02\"><div class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">看结果与限制</span><span class=\"en\" lang=\"en\">Result and limit</span></div></a><p><a href=\"/social-responsibility-debate/raw/bastani-2025-learning.pdf\" target=\"_blank\" rel=\"noopener\"><div class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">打开原件</span><span class=\"en\" lang=\"en\">Open original</span></div></a></p></article><article class=\"source card\" id=\"src-E03\"><span class=\"source-id\">E03</span><h3><a href=\"https://doi.org/10.1038/s41598-025-97652-6\" target=\"_blank\" rel=\"noopener\">AI tutoring outperforms in-class active learning: an RCT introducing a novel research-based design in an authentic educational setting</a></h3><p class=\"meta\">Kestin, G., Miller, K., Klales, A., Milbourne, T., &amp; Ponti, G. · Scientific Reports 15, 17458 (2025)</p><p class=\"locator\">PDF pp. 2–3 Results; p. 6 Context/limitations; p. 7 Methods</p><a href=\"#ev-E03\"><div class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">看结果与限制</span><span class=\"en\" lang=\"en\">Result and limit</span></div></a><p><a href=\"/social-responsibility-debate/raw/kestin-2025-ai-tutor.pdf\" target=\"_blank\" rel=\"noopener\"><div class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">打开原件</span><span class=\"en\" lang=\"en\">Open original</span></div></a></p></article><article class=\"source card\" id=\"src-E04\"><span class=\"source-id\">E04</span><h3><a href=\"https://doi.org/10.14742/ajet.8843\" target=\"_blank\" rel=\"noopener\">ChatGPT and its impact on research supervision: Insights from Australian postgraduate research students</a></h3><p class=\"meta\">Dai, Y., Lai, S., Lim, C. P., &amp; Liu, A. · AJET 39(4), 74–88 (2023)</p><p class=\"locator\">Publisher abstract and metadata</p><a href=\"#ev-E04\"><div class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">看结果与限制</span><span class=\"en\" lang=\"en\">Result and limit</span></div></a></article><article class=\"source card\" id=\"src-E05\"><span class=\"source-id\">E05</span><h3><a href=\"https://doi.org/10.3389/fpsyg.2026.1920947\" target=\"_blank\" rel=\"noopener\">Cognitive offloading and metacognitive calibration in generative AI-mediated doctoral learning: a grounded theory study of accountable reconstruction</a></h3><p class=\"meta\">Gao, L., &amp; Zhang, F. · Frontiers in Psychology 17, 1920947 (31 August 2026)</p><p class=\"locator\">§2.2; §3; §4.5–4.7</p><a href=\"#ev-E05\"><div class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">看结果与限制</span><span class=\"en\" lang=\"en\">Result and limit</span></div></a><p><a href=\"/social-responsibility-debate/raw/gao-zhang-2026-doctoral.pdf\" target=\"_blank\" rel=\"noopener\"><div class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">打开原件</span><span class=\"en\" lang=\"en\">Open original</span></div></a></p></article><article class=\"source card\" id=\"src-E06\"><span class=\"source-id\">E06</span><h3><a href=\"https://doi.org/10.1038/s41598-023-41032-5\" target=\"_blank\" rel=\"noopener\">Fabrication and errors in the bibliographic citations generated by ChatGPT</a></h3><p class=\"meta\">Walters, W. H., &amp; Wilder, E. I. · Scientific Reports 13, 14045 (2023)</p><p class=\"locator\">Abstract; Methods: Paper topics and prompts; Results</p><a href=\"#ev-E06\"><div class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">看结果与限制</span><span class=\"en\" lang=\"en\">Result and limit</span></div></a><p><a href=\"/social-responsibility-debate/raw/walters-2023-citations.pdf\" target=\"_blank\" rel=\"noopener\"><div class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">打开原件</span><span class=\"en\" lang=\"en\">Open original</span></div></a></p></article><article class=\"source card\" id=\"src-E07\"><span class=\"source-id\">E07</span><h3><a href=\"https://doi.org/10.58304/ijts.250522\" target=\"_blank\" rel=\"noopener\">Critical Thinking in the Age of Generative AI: Effects of a Short-Term Experiential Learning Intervention on EFL Learners</a></h3><p class=\"meta\">Cong-Lem, N., Nguyen, T. T., &amp; Nguyen, K. N. H. · International Journal of TESOL Studies, online 28 May 2025</p><p class=\"locator\">§3.1–3.3, pp. 6–9; limitations p. 15; Appendix A pp. 16–17</p><a href=\"#ev-E07\"><div class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">看结果与限制</span><span class=\"en\" lang=\"en\">Result and limit</span></div></a></article><article class=\"source card\" id=\"src-N01\"><span class=\"source-id\">N01</span><h3><a href=\"https://doi.org/10.1007/s13347-024-00774-4\" target=\"_blank\" rel=\"noopener\">Should We Discourage AI Extension? Epistemic Responsibility and AI</a></h3><p class=\"meta\">Naeem, H., &amp; Hauser, J. · Philosophy &amp; Technology 37, 91 (2024)</p><p class=\"locator\">§§4–5: Epistemic Integration; Defeaters, Design, and Policy</p><p class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">作者论证：依靠 AI 并不必然不负责任；关键是使用者能对形成信念的过程之可靠性保持敏感。</span><span class=\"en\" lang=\"en\">The authors argue that reliance on AI need not be irresponsible if users remain sensitive to the reliability of their belief-forming process.</span></p><p><a href=\"/social-responsibility-debate/raw/naeem-hauser-2024-epistemic.pdf\" target=\"_blank\" rel=\"noopener\"><div class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">打开原件</span><span class=\"en\" lang=\"en\">Open original</span></div></a></p><p class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">哲学论证说明可能性和条件，不证明普通学生已经具备这些能力；覆盖范围也不限于生成式 AI。</span><span class=\"en\" lang=\"en\">A philosophical account of possibility and conditions, not evidence that typical students meet them; its scope is broader than generative AI.</span></p></article><article class=\"source card\" id=\"src-N02\"><span class=\"source-id\">N02</span><h3><a href=\"https://www.nhmrc.gov.au/about-us/publications/australian-code-responsible-conduct-research-2018\" target=\"_blank\" rel=\"noopener\">Australian Code for the Responsible Conduct of Research 2018</a></h3><p class=\"meta\">NHMRC, Australian Research Council &amp; Universities Australia · 2018; official page lists current</p><p class=\"locator\">Principles P1–P3, P7; researcher responsibilities R22, R23, R27</p><p class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">规范强调诚实、严谨、透明、问责，并要求准确记录、负责传播、及时纠错与准确引用。</span><span class=\"en\" lang=\"en\">The code emphasizes honesty, rigour, transparency and accountability, including accurate records, responsible dissemination, correction and citation.</span></p><p><a href=\"/social-responsibility-debate/raw/australian-research-code-2018.pdf\" target=\"_blank\" rel=\"noopener\"><div class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">打开原件</span><span class=\"en\" lang=\"en\">Open original</span></div></a></p><p class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">规范证明应承担什么责任，不证明 AI 实际改变了责任履行；并非专门针对本次课程作业的 AI 使用许可。</span><span class=\"en\" lang=\"en\">Establishes responsibilities, not the empirical effect of AI on compliance; it is not permission to use AI in this specific assignment.</span></p></article><article class=\"source card\" id=\"src-N03\"><span class=\"source-id\">N03</span><h3><a href=\"https://www.unesco.org/en/articles/guidance-generative-ai-education-and-research\" target=\"_blank\" rel=\"noopener\">Guidance for generative AI in education and research</a></h3><p class=\"meta\">Miao, F., &amp; Holmes, W. / UNESCO · 2023; landing page updated 16 January 2026</p><p class=\"locator\">Human-centred approach; pedagogical design and validation</p><p class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">以人为中心的教育与研究使用指导，强调教学设计、伦理验证和人的能动性。</span><span class=\"en\" lang=\"en\">Human-centred guidance for educational and research use, emphasizing pedagogical design, ethical validation and human agency.</span></p><p class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">指导文件不是干预效果研究；推荐的防护措施是否有效仍需测量。</span><span class=\"en\" lang=\"en\">Guidance is not an intervention evaluation; safeguard effectiveness still needs measurement.</span></p></article><article class=\"source card\" id=\"src-N04\"><span class=\"source-id\">N04</span><h3><a href=\"https://www.monash.edu/ai/tools-training-and-resources/ai-policies-and-guidelines\" target=\"_blank\" rel=\"noopener\">AI Policies and Guidelines</a></h3><p class=\"meta\">Monash University · Current public directory; accessed 11 October 2026</p><p class=\"locator\">Links to academic research guidance and shared responsibility model</p><p class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">公开目录列出研究 GenAI 指导和共享责任模型，详细材料需学生 / 教职员权限。</span><span class=\"en\" lang=\"en\">The public directory points to academic-research guidance and a shared-responsibility model; detailed materials require student/staff access.</span></p><p class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">未读取受限正文，不据此编造 Monash 或本作业的 AI 使用规则。</span><span class=\"en\" lang=\"en\">Restricted documents were not read; no specific Monash or assignment permission is inferred.</span></p></article><article class=\"source card\" id=\"src-S01\"><span class=\"source-id\">S01</span><h3>FIT5122 — Assignment 2: Social Responsibility Debate</h3><p class=\"meta\">Monash University / FIT5122 · 文件未注明发布日 / undated</p><p class=\"locator\">pp. 1–2: instructions; pp. 3–4: rubric</p><p class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">四页作业原件：双方准备、六段赛程、人人发言、提交要求与评分表。</span><span class=\"en\" lang=\"en\">Four-page assignment: both sides, six timed segments, participation, submission and rubric.</span></p><p class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">课程原件留在本地。</span><span class=\"en\" lang=\"en\">Course originals remain local.</span></p><p class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">PDF 没有列出具体命题；本版命题来自用户提供的 Moodle 条目。日期、分组、道具仍应核对。</span><span class=\"en\" lang=\"en\">The PDF omits the motion; this pack uses the Moodle wording supplied by the user. Confirm calendar date, allocation and props.</span></p></article><article class=\"source card\" id=\"src-S02\"><span class=\"source-id\">S02</span><h3><a href=\"https://microsoft.github.io/makecode-csp/unit-4/day-12/debating-rules/\" target=\"_blank\" rel=\"noopener\">Debating Rules</a></h3><p class=\"meta\">Microsoft MakeCode AP CSP · 网页未注明日期 / undated</p><p class=\"locator\">Team Line; Speakers; Importance of Rebuttal; Manner; Judging</p><a href=\"#rules\"><div class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">看指定规则摘要</span><span class=\"en\" lang=\"en\">Assigned-rule summary</span></div></a></article><article class=\"source card\" id=\"src-S03\"><span class=\"source-id\">S03</span><h3>ACS Code of Professional Conduct, v2.1</h3><p class=\"meta\">Australian Computer Society · April 2014</p><p class=\"locator\">§1.2 (p. 5); §§1.2.1–1.2.6 (pp. 6–8)</p><p class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">课程提供版本的六项价值：公众利益、生活质量、诚实、能力、专业发展、专业精神；冲突时公众利益优先。</span><span class=\"en\" lang=\"en\">Course version: public interest, quality of life, honesty, competence, professional development and professionalism; public interest takes precedence in conflicts.</span></p><p class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">课程原件留在本地。</span><span class=\"en\" lang=\"en\">Course originals remain local.</span></p><p class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">这是专业规范，不能单独证明某政策有效；不要称作 2023 职业伦理准则。</span><span class=\"en\" lang=\"en\">A professional standard does not establish policy effectiveness; distinguish it from the 2023 ethics code.</span></p></article><article class=\"source card\" id=\"src-S05\"><span class=\"source-id\">S05</span><h3><a href=\"https://www.scu.edu/ethics/ethics-resources/a-framework-for-ethical-decision-making/\" target=\"_blank\" rel=\"noopener\">A Framework for Ethical Decision Making</a></h3><p class=\"meta\">Markkula Center for Applied Ethics, Santa Clara University · Revised 5 November 2021</p><p class=\"locator\">Six Ethical Lenses; A Framework for Ethical Decision Making</p><p class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">在线框架含权利、公正、效用、共同善、美德和关怀六种视角。课程两页节选为 2009 修订版，列出五种方法。</span><span class=\"en\" lang=\"en\">The online framework has six lenses: rights, justice, utility, common good, virtue and care. The two-page course extract is the 2009 revision with five approaches.</span></p><p class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">课程原件留在本地。</span><span class=\"en\" lang=\"en\">Course originals remain local.</span></p><p class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">框架组织判断，不能自动消除价值冲突或替代实证研究。</span><span class=\"en\" lang=\"en\">The framework structures judgment; it does not resolve every value conflict or replace evidence.</span></p></article><article class=\"source card\" id=\"src-S06\"><span class=\"source-id\">S06</span><h3><a href=\"https://my.cgu.edu/writing-rhetoric/wp-content/uploads/sites/9/2021/11/CGU-CWR-Toulmin-Method-of-Argumentation.pdf\" target=\"_blank\" rel=\"noopener\">Toulmin Method for Argument Development &amp; Revision</a></h3><p class=\"meta\">Claremont Graduate University, Center for Writing &amp; Rhetoric · 文件未注明日期 / undated</p><p class=\"locator\">pp. 1–2: components; pp. 3–4: revision</p><p class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">把主张、根据、推理桥梁、桥梁支撑、限定条件和例外拆开检查。</span><span class=\"en\" lang=\"en\">Separate claim, grounds, warrant, backing, qualifier and rebuttal conditions.</span></p><p class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">这是可被反驳的论证结构，不等于形式逻辑中的必然演绎。</span><span class=\"en\" lang=\"en\">This structures defeasible arguments, not logically necessary deduction.</span></p></article><article class=\"source card\" id=\"src-S15\"><span class=\"source-id\">S15</span><h3>Introduction to Ethics for Information Technology Professionals</h3><p class=\"meta\">FIT5122 course material; adapted from Alexandra; acknowledges Kirsten Ellis &amp; Ann Nicholson · 未注明日期 / undated</p><p class=\"locator\">pp. 1–2: concepts and rule/consequence approaches</p><p class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">课程入门阅读区分规则导向与后果导向，并强调利益相关者的不同影响。</span><span class=\"en\" lang=\"en\">Course introduction contrasts rule-oriented and consequence-oriented approaches and differing stakeholder impacts.</span></p><p class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">课程原件留在本地。</span><span class=\"en\" lang=\"en\">Course originals remain local.</span></p><p class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">入门简化，不应推成所有义务论都没有例外，或后果论完全不需要规则。</span><span class=\"en\" lang=\"en\">An introductory simplification, not proof that all deontology has no exceptions or consequentialism has no use for rules.</span></p></article><p class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">未被这批材料充分证明：研究生长期普遍退化、责任感下降的总体比例，以及本页训练组合的实际效果。中文为本页翻译。</span><span class=\"en\" lang=\"en\">This corpus does not establish general long-term graduate decline, the prevalence of weaker felt duty, or the effect of this page’s training package. Chinese text is this guide’s translation.</span></p>"
        }
      ]
    }
  ],
  "nodes": [
    {
      "id": "facts",
      "group": "shared",
      "code": "S1",
      "label": {
        "zh": "看谁、做什么",
        "en": "Who and what?"
      },
      "html": "<h3 class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">看谁、做什么</span><span class=\"en\" lang=\"en\">Who and what?</span></h3><p class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">研究生、专业任务、使用方式、对照组、时间。五项没对齐，就先别比较结论。</span><span class=\"en\" lang=\"en\">Align population, task, AI use, comparator and time before comparing conclusions.</span></p>",
      "reply": null
    },
    {
      "id": "definitions",
      "group": "shared",
      "code": "S2",
      "label": {
        "zh": "先定 need 和技能",
        "en": "Define need and skill"
      },
      "html": "<h3 class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">先定 need 和技能</span><span class=\"en\" lang=\"en\">Define need and skill</span></h3><p class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">need 分义务、必要感、行为；技能要和成品、信心分开。</span><span class=\"en\" lang=\"en\">Separate duty, felt need and action; distinguish skill from output and confidence.</span></p>",
      "reply": null
    },
    {
      "id": "aff-A1",
      "group": "aff",
      "code": "A1",
      "label": {
        "zh": "少练一次，不能靠成品补回",
        "en": "Output cannot replace practice"
      },
      "html": "<h3 class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">少练一次，不能靠成品补回</span><span class=\"en\" lang=\"en\">Output cannot replace practice</span></h3><p class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">答案先到，自己比较和推理的机会就可能减少。</span><span class=\"en\" lang=\"en\">An answer-first workflow can remove opportunities to compare and reason.</span></p><p class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">专业判断靠尝试、出错、修正来练。成品分数不能代替这些过程。</span><span class=\"en\" lang=\"en\">Judgment develops through attempts, errors and correction—not just product scores.</span></p><span class=\"citations\"><a href=\"#src-E02\">[E02]</a> <a href=\"#src-E05\">[E05]</a></span><p class=\"bi \"><span class=\"zh\" lang=\"zh-CN\"><b>别跳过：</b>还需证明坏用法是否常见。没有这一步，我们只能主张风险，不能宣称普遍受损。</span><span class=\"en\" lang=\"en\"><b>Do not skip:</b> We still need its prevalence. Without it, we establish risk, not general harm.</span></p><p class=\"bi \"><span class=\"zh\" lang=\"zh-CN\"><b>败点：</b>同类研究生接受 AI 训练后，独立新题表现持续提高。</span><span class=\"en\" lang=\"en\"><b>Defeater:</b> Sustained unassisted gains in comparable graduates.</span></p>",
      "reply": "N1"
    },
    {
      "id": "aff-A2",
      "group": "aff",
      "code": "A2",
      "label": {
        "zh": "不会判断，怎么监督 AI？",
        "en": "Who checks the checker?"
      },
      "html": "<h3 class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">不会判断，怎么监督 AI？</span><span class=\"en\" lang=\"en\">Who checks the checker?</span></h3><p class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">把专业基础也外包，新手可能不知道 AI 错在哪里。</span><span class=\"en\" lang=\"en\">Outsourcing foundations may leave novices unable to spot AI errors.</span></p><p class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">监督不是按一个“检查”按钮；它需要领域知识。</span><span class=\"en\" lang=\"en\">Oversight needs domain knowledge, not a check button.</span></p><span class=\"citations\"><a href=\"#src-E01\">[E01]</a> <a href=\"#src-E05\">[E05]</a> <a href=\"#src-N01\">[N01]</a></span><p class=\"bi \"><span class=\"zh\" lang=\"zh-CN\"><b>别跳过：</b>不主张必然失败；我们指出不能把尚未形成的能力当成现成保障。</span><span class=\"en\" lang=\"en\"><b>Do not skip:</b> Not inevitable failure. We challenge treating undeveloped competence as an existing safeguard.</span></p><p class=\"bi \"><span class=\"zh\" lang=\"zh-CN\"><b>败点：</b>学生能稳定发现新错误，并说明原因。</span><span class=\"en\" lang=\"en\"><b>Defeater:</b> Students reliably detect novel errors and explain why.</span></p>",
      "reply": "N5"
    },
    {
      "id": "aff-A3",
      "group": "aff",
      "code": "A3",
      "label": {
        "zh": "觉得不用查，才是第二问",
        "en": "The second claim concerns felt need"
      },
      "html": "<h3 class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">觉得不用查，才是第二问</span><span class=\"en\" lang=\"en\">The second claim concerns felt need</span></h3><p class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">AI 给出顺畅答案后，学生可能觉得核实已无必要。</span><span class=\"en\" lang=\"en\">Fluent answers may make checking feel unnecessary.</span></p><p class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">这里谈必要感与行为，不是说义务消失。</span><span class=\"en\" lang=\"en\">This concerns motivation and action, not the disappearance of duty.</span></p><span class=\"citations\"><a href=\"#src-E01\">[E01]</a> <a href=\"#src-E05\">[E05]</a> <a href=\"#src-N02\">[N02]</a></span><p class=\"bi \"><span class=\"zh\" lang=\"zh-CN\"><b>别跳过：</b>对。必须拿出核验、纠错或责任感的证据，不能用成绩数据替代。</span><span class=\"en\" lang=\"en\"><b>Do not skip:</b> Correct. We need checking, correction or motivation evidence—not grades as a proxy.</span></p><p class=\"bi \"><span class=\"zh\" lang=\"zh-CN\"><b>败点：</b>核验和主动纠错实际增加。</span><span class=\"en\" lang=\"en\"><b>Defeater:</b> Checking and voluntary correction increase.</span></p>",
      "reply": "N3"
    },
    {
      "id": "aff-A4",
      "group": "aff",
      "code": "A4",
      "label": {
        "zh": "题目也可能被 AI 带着走",
        "en": "AI may set the question too"
      },
      "html": "<h3 class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">题目也可能被 AI 带着走</span><span class=\"en\" lang=\"en\">AI may set the question too</span></h3><p class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">接受 AI 的问题框架，会让学生漏掉别的解释。</span><span class=\"en\" lang=\"en\">Accepting AI’s framing may exclude alternative explanations.</span></p><p class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">批判性思维也包括决定问什么，而不只是检查答案。</span><span class=\"en\" lang=\"en\">Critical thinking includes choosing the question, not just checking its answer.</span></p><span class=\"citations\"><a href=\"#src-E05\">[E05]</a> <a href=\"#src-N01\">[N01]</a></span><p class=\"bi \"><span class=\"zh\" lang=\"zh-CN\"><b>别跳过：</b>应比较哪种流程更能保留学生的选择与反对。这是一项推论，现有材料未量化整体效果。</span><span class=\"en\" lang=\"en\"><b>Do not skip:</b> Compare which process preserves student choice and dissent. This is an inference, not a quantified general effect.</span></p><p class=\"bi \"><span class=\"zh\" lang=\"zh-CN\"><b>败点：</b>学生能提出 AI 未给出的解释并检验它。</span><span class=\"en\" lang=\"en\"><b>Defeater:</b> Students propose and test explanations the AI did not supply.</span></p>",
      "reply": "N2"
    },
    {
      "id": "aff-A5",
      "group": "aff",
      "code": "A5",
      "label": {
        "zh": "只收成品，会鼓励省掉核实",
        "en": "Product-only marking rewards shortcuts"
      },
      "html": "<h3 class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">只收成品，会鼓励省掉核实</span><span class=\"en\" lang=\"en\">Product-only marking rewards shortcuts</span></h3><p class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">若只奖励漂亮成品，认真核实的成本就可能没人看见。</span><span class=\"en\" lang=\"en\">If only the product is rewarded, checking costs may go unseen.</span></p><p class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">这是评价方式与 AI 共同作用的风险，不是模型单独造成。</span><span class=\"en\" lang=\"en\">This is an interaction between assessment and AI, not a model-only effect.</span></p><span class=\"citations\"><a href=\"#src-E05\">[E05]</a> <a href=\"#src-N02\">[N02]</a></span><p class=\"bi \"><span class=\"zh\" lang=\"zh-CN\"><b>别跳过：</b>归因要分开：只说 AI 可能放大现有激励问题，不说它创造了所有问题。</span><span class=\"en\" lang=\"en\"><b>Do not skip:</b> Separate causes: AI may amplify an incentive problem; it did not create every problem.</span></p><p class=\"bi \"><span class=\"zh\" lang=\"zh-CN\"><b>败点：</b>过程评价可实施，且确实减少不核实的行为。</span><span class=\"en\" lang=\"en\"><b>Defeater:</b> Feasible process assessment demonstrably reduces unchecked work.</span></p>",
      "reply": "N4"
    },
    {
      "id": "aff-A6",
      "group": "aff",
      "code": "A6",
      "label": {
        "zh": "“都能核验”未必公平",
        "en": "Checking capacity is uneven"
      },
      "html": "<h3 class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">“都能核验”未必公平</span><span class=\"en\" lang=\"en\">Checking capacity is uneven</span></h3><p class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">基础、时间和导师支持不同，同一工具的风险不会自动平均分配。</span><span class=\"en\" lang=\"en\">Differences in knowledge, time and supervision can distribute risks unevenly.</span></p><p class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">平均成绩上升，也可能掩盖最难发现错误的人。</span><span class=\"en\" lang=\"en\">An average gain can hide those least able to detect errors.</span></p><span class=\"citations\"><a href=\"#src-N03\">[N03]</a> <a href=\"#src-E05\">[E05]</a></span><p class=\"bi \"><span class=\"zh\" lang=\"zh-CN\"><b>别跳过：</b>同意；本论点针对笼统推广，需分组数据，不足以单独证明整题。</span><span class=\"en\" lang=\"en\"><b>Do not skip:</b> Agreed. This challenges blanket adoption and needs subgroup data; it cannot establish the whole motion alone.</span></p><p class=\"bi \"><span class=\"zh\" lang=\"zh-CN\"><b>败点：</b>支持可及，薄弱群体的独立判断也改善。</span><span class=\"en\" lang=\"en\"><b>Defeater:</b> Accessible support improves independent judgment in less-prepared groups.</span></p>",
      "reply": "N6"
    },
    {
      "id": "neg-N1",
      "group": "neg",
      "code": "N1",
      "label": {
        "zh": "提示和代答不是一回事",
        "en": "Hints are not answer substitution"
      },
      "html": "<h3 class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">提示和代答不是一回事</span><span class=\"en\" lang=\"en\">Hints are not answer substitution</span></h3><p class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">整合方式不同，学习效果可以不同。</span><span class=\"en\" lang=\"en\">Different integration designs can produce different learning effects.</span></p><p class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">先尝试、再反馈、最后独立重做，能保留练习。</span><span class=\"en\" lang=\"en\">Attempt, receive feedback, then retry independently: practice remains.</span></p><span class=\"citations\"><a href=\"#src-E02\">[E02]</a> <a href=\"#src-E03\">[E03]</a> <a href=\"#src-E07\">[E07]</a></span><p class=\"bi \"><span class=\"zh\" lang=\"zh-CN\"><b>别跳过：</b>请给比例；我方也要说明实施成本。双方都不能用“多数人”代替证据。</span><span class=\"en\" lang=\"en\"><b>Do not skip:</b> Show the proportion; we must show implementation costs. Neither side can assert “most” without evidence.</span></p><p class=\"bi \"><span class=\"zh\" lang=\"zh-CN\"><b>败点：</b>实际使用常绕开支架，独立表现下降。</span><span class=\"en\" lang=\"en\"><b>Defeater:</b> Actual use bypasses scaffolds and independent performance falls.</span></p>",
      "reply": "A1"
    },
    {
      "id": "neg-N2",
      "group": "neg",
      "code": "N2",
      "label": {
        "zh": "省去杂务，可以留下判断",
        "en": "Offload routine work, retain judgment"
      },
      "html": "<h3 class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">省去杂务，可以留下判断</span><span class=\"en\" lang=\"en\">Offload routine work, retain judgment</span></h3><p class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">润色、整理和生成候选，不必代替证据判断。</span><span class=\"en\" lang=\"en\">Editing, organizing and generating options need not replace evidential judgment.</span></p><p class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">看省下的时间去了哪里，而不是把省力直接当成退化。</span><span class=\"en\" lang=\"en\">Track where saved time goes; lower effort alone is not decline.</span></p><span class=\"citations\"><a href=\"#src-E04\">[E04]</a> <a href=\"#src-E05\">[E05]</a></span><p class=\"bi \"><span class=\"zh\" lang=\"zh-CN\"><b>别跳过：</b>研究生材料说明这种做法存在，不证明人人如此；实际比例仍需补证。</span><span class=\"en\" lang=\"en\"><b>Do not skip:</b> Graduate evidence shows such practices exist, not that everyone uses them. Prevalence remains open.</span></p><p class=\"bi \"><span class=\"zh\" lang=\"zh-CN\"><b>败点：</b>没有时间再投入，或离开 AI 就无法解释。</span><span class=\"en\" lang=\"en\"><b>Defeater:</b> No reinvestment of time, or no explanation without AI.</span></p>",
      "reply": "A4"
    },
    {
      "id": "neg-N3",
      "group": "neg",
      "code": "N3",
      "label": {
        "zh": "内容可外包，责任仍在",
        "en": "Duties remain"
      },
      "html": "<h3 class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">内容可外包，责任仍在</span><span class=\"en\" lang=\"en\">Duties remain</span></h3><p class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">生成内容不等于替学生承担专业主张。</span><span class=\"en\" lang=\"en\">Generating content does not transfer responsibility for a professional claim.</span></p><p class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">别人依赖你的结论，你仍要能说明依据。</span><span class=\"en\" lang=\"en\">Others rely on your conclusion; you still owe them reasons.</span></p><span class=\"citations\"><a href=\"#src-N01\">[N01]</a> <a href=\"#src-N02\">[N02]</a> <a href=\"#src-S03\">[S03]</a></span><p class=\"bi \"><span class=\"zh\" lang=\"zh-CN\"><b>别跳过：</b>对，所以本论点只解决规范读法；心理读法要靠行为证据来辩。</span><span class=\"en\" lang=\"en\"><b>Do not skip:</b> Correct. This addresses the normative reading; the psychological claim needs behavioural evidence.</span></p><p class=\"bi \"><span class=\"zh\" lang=\"zh-CN\"><b>败点：</b>对方有直接证据证明责任实践下降。</span><span class=\"en\" lang=\"en\"><b>Defeater:</b> Direct evidence establishes weaker responsible practice.</span></p>",
      "reply": "A3"
    },
    {
      "id": "neg-N4",
      "group": "neg",
      "code": "N4",
      "label": {
        "zh": "测了省力，没测技能退化",
        "en": "Effort is not a skill test"
      },
      "html": "<h3 class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">测了省力，没测技能退化</span><span class=\"en\" lang=\"en\">Effort is not a skill test</span></h3><p class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">自报、成绩与独立思维是不同指标。</span><span class=\"en\" lang=\"en\">Self-reports, grades and independent thinking are different outcomes.</span></p><p class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">不能因为标题写 critical thinking，就忽略问卷实际问了什么。</span><span class=\"en\" lang=\"en\">A title mentioning critical thinking does not settle what the instrument measured.</span></p><span class=\"citations\"><a href=\"#src-E01\">[E01]</a> <a href=\"#src-E03\">[E03]</a> <a href=\"#src-E07\">[E07]</a></span><p class=\"bi \"><span class=\"zh\" lang=\"zh-CN\"><b>别跳过：</b>完全同意。对正负结果使用同一标准。</span><span class=\"en\" lang=\"en\"><b>Do not skip:</b> Yes. Apply the same standard to both directions.</span></p><p class=\"bi \"><span class=\"zh\" lang=\"zh-CN\"><b>败点：</b>研究生长期、独立测验显示明确下降。</span><span class=\"en\" lang=\"en\"><b>Defeater:</b> Longitudinal independent tests in graduates show a clear decline.</span></p>",
      "reply": "A5"
    },
    {
      "id": "neg-N5",
      "group": "neg",
      "code": "N5",
      "label": {
        "zh": "检查要留痕，不能只说负责",
        "en": "Make checking observable"
      },
      "html": "<h3 class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">检查要留痕，不能只说负责</span><span class=\"en\" lang=\"en\">Make checking observable</span></h3><p class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">要求原文定位、拒绝理由和独立重做，可把责任变成可检查的行为。</span><span class=\"en\" lang=\"en\">Source locators, rejection reasons and independent retries make responsibility observable.</span></p><p class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">这让“会用 AI”与“会解释答案”分开接受评价。</span><span class=\"en\" lang=\"en\">Assess tool use separately from the ability to explain an answer.</span></p><span class=\"citations\"><a href=\"#src-E05\">[E05]</a> <a href=\"#src-E07\">[E07]</a> <a href=\"#src-N02\">[N02]</a></span><p class=\"bi \"><span class=\"zh\" lang=\"zh-CN\"><b>别跳过：</b>没有。这是建议；已有研究支持部分做法，不能冒充整套效果已测出。</span><span class=\"en\" lang=\"en\"><b>Do not skip:</b> No. It is a proposal supported in parts, not a tested package.</span></p><p class=\"bi \"><span class=\"zh\" lang=\"zh-CN\"><b>败点：</b>核查只是走形式，错误仍无法被发现。</span><span class=\"en\" lang=\"en\"><b>Defeater:</b> Checks become ceremonial and errors remain undetected.</span></p>",
      "reply": "A2"
    },
    {
      "id": "neg-N6",
      "group": "neg",
      "code": "N6",
      "label": {
        "zh": "禁用也会失去支持",
        "en": "Restrictions can remove useful support"
      },
      "html": "<h3 class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">禁用也会失去支持</span><span class=\"en\" lang=\"en\">Restrictions can remove useful support</span></h3><p class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">语言、反馈和任务入门的帮助，也属于专业发展。</span><span class=\"en\" lang=\"en\">Language, feedback and task-entry support can contribute to development.</span></p><p class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">比较替代方案时，不能只计算 AI 的代价。</span><span class=\"en\" lang=\"en\">A fair comparison counts the costs of the alternative too.</span></p><span class=\"citations\"><a href=\"#src-E04\">[E04]</a> <a href=\"#src-N03\">[N03]</a></span><p class=\"bi \"><span class=\"zh\" lang=\"zh-CN\"><b>别跳过：</b>同意。要比较对独立判断和责任的具体影响，不能拿方便抵消一切。</span><span class=\"en\" lang=\"en\"><b>Do not skip:</b> Agreed. Compare effects on judgment and responsibility; convenience cannot cancel every harm.</span></p><p class=\"bi \"><span class=\"zh\" lang=\"zh-CN\"><b>败点：</b>收益仅是成品更快，独立能力没有改善。</span><span class=\"en\" lang=\"en\"><b>Defeater:</b> The benefit is only faster output, without stronger independent ability.</span></p>",
      "reply": "A6"
    },
    {
      "id": "weigh",
      "group": "decision",
      "code": "W1",
      "label": {
        "zh": "哪一步改变胜负",
        "en": "Which step changes the result?"
      },
      "html": "<h3 class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">哪一步改变胜负</span><span class=\"en\" lang=\"en\">Which step changes the result?</span></h3><p class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">找决定性一步：如果这一步不成立，整条论证是否还成立？别把时间花在不影响结论的小错上。</span><span class=\"en\" lang=\"en\">Test a decisive step: if it fails, does the conclusion survive? Do not spend the round on irrelevant slips.</span></p>",
      "reply": null
    },
    {
      "id": "verdict",
      "group": "decision",
      "code": "W2",
      "label": {
        "zh": "分别回答 P 与 Q",
        "en": "Answer P and Q"
      },
      "html": "<h3 class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">分别回答 P 与 Q</span><span class=\"en\" lang=\"en\">Answer P and Q</span></h3><p class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">正方分别交代技能与责任。反方说清自己推翻哪一问，不必证明 AI 在所有地方都好。</span><span class=\"en\" lang=\"en\">Affirmative must address skill and responsibility separately. Negative identifies which claim fails; it need not show AI is always beneficial.</span></p>",
      "reply": null
    }
  ],
  "arguments": [
    {
      "id": "arg-A1",
      "side": "aff",
      "html": "<span class=\"eyebrow\">A1</span><h3 class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">少练一次，不能靠成品补回</span><span class=\"en\" lang=\"en\">Output cannot replace practice</span></h3><p class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">答案先到，自己比较和推理的机会就可能减少。</span><span class=\"en\" lang=\"en\">An answer-first workflow can remove opportunities to compare and reason.</span></p><details><summary><div class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">展开两轮攻防</span><span class=\"en\" lang=\"en\">Open two exchanges</span></div></summary><h4 class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">为什么</span><span class=\"en\" lang=\"en\">Why</span></h4><p class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">专业判断靠尝试、出错、修正来练。成品分数不能代替这些过程。</span><span class=\"en\" lang=\"en\">Judgment develops through attempts, errors and correction—not just product scores.</span></p><span class=\"citations\"><a href=\"#src-E02\">[E02]</a> <a href=\"#src-E05\">[E05]</a></span><h4 class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">第一问 → 你怎么回</span><span class=\"en\" lang=\"en\">First challenge → reply</span></h4><p class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">AI 也能只给提示。</span><span class=\"en\" lang=\"en\">AI can give hints instead.</span></p><p class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">承认。所以请比较现实使用，而不是只展示最好用法。</span><span class=\"en\" lang=\"en\">Agreed. Compare actual use, not only the best design.</span></p><h4 class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">追问 → 再回应</span><span class=\"en\" lang=\"en\">Follow-up → second reply</span></h4><p class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">那你只是反对坏用法。</span><span class=\"en\" lang=\"en\">Then you only oppose bad use.</span></p><p class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">还需证明坏用法是否常见。没有这一步，我们只能主张风险，不能宣称普遍受损。</span><span class=\"en\" lang=\"en\">We still need its prevalence. Without it, we establish risk, not general harm.</span></p><h4 class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">什么会推翻这条</span><span class=\"en\" lang=\"en\">What would defeat it?</span></h4><p class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">同类研究生接受 AI 训练后，独立新题表现持续提高。</span><span class=\"en\" lang=\"en\">Sustained unassisted gains in comparable graduates.</span></p></details>"
    },
    {
      "id": "arg-A2",
      "side": "aff",
      "html": "<span class=\"eyebrow\">A2</span><h3 class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">不会判断，怎么监督 AI？</span><span class=\"en\" lang=\"en\">Who checks the checker?</span></h3><p class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">把专业基础也外包，新手可能不知道 AI 错在哪里。</span><span class=\"en\" lang=\"en\">Outsourcing foundations may leave novices unable to spot AI errors.</span></p><details><summary><div class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">展开两轮攻防</span><span class=\"en\" lang=\"en\">Open two exchanges</span></div></summary><h4 class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">为什么</span><span class=\"en\" lang=\"en\">Why</span></h4><p class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">监督不是按一个“检查”按钮；它需要领域知识。</span><span class=\"en\" lang=\"en\">Oversight needs domain knowledge, not a check button.</span></p><span class=\"citations\"><a href=\"#src-E01\">[E01]</a> <a href=\"#src-E05\">[E05]</a> <a href=\"#src-N01\">[N01]</a></span><h4 class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">第一问 → 你怎么回</span><span class=\"en\" lang=\"en\">First challenge → reply</span></h4><p class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">导师和原文可以帮助检查。</span><span class=\"en\" lang=\"en\">Supervisors and originals can help.</span></p><p class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">可以。请说明谁提供、花多久，以及学生能否自己解释。</span><span class=\"en\" lang=\"en\">Yes. Who provides that support, how long does it take, and can the student explain the result?</span></p><h4 class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">追问 → 再回应</span><span class=\"en\" lang=\"en\">Follow-up → second reply</span></h4><p class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">你也没有证明监督必然失败。</span><span class=\"en\" lang=\"en\">You have not shown oversight must fail.</span></p><p class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">不主张必然失败；我们指出不能把尚未形成的能力当成现成保障。</span><span class=\"en\" lang=\"en\">Not inevitable failure. We challenge treating undeveloped competence as an existing safeguard.</span></p><h4 class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">什么会推翻这条</span><span class=\"en\" lang=\"en\">What would defeat it?</span></h4><p class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">学生能稳定发现新错误，并说明原因。</span><span class=\"en\" lang=\"en\">Students reliably detect novel errors and explain why.</span></p></details>"
    },
    {
      "id": "arg-A3",
      "side": "aff",
      "html": "<span class=\"eyebrow\">A3</span><h3 class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">觉得不用查，才是第二问</span><span class=\"en\" lang=\"en\">The second claim concerns felt need</span></h3><p class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">AI 给出顺畅答案后，学生可能觉得核实已无必要。</span><span class=\"en\" lang=\"en\">Fluent answers may make checking feel unnecessary.</span></p><details><summary><div class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">展开两轮攻防</span><span class=\"en\" lang=\"en\">Open two exchanges</span></div></summary><h4 class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">为什么</span><span class=\"en\" lang=\"en\">Why</span></h4><p class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">这里谈必要感与行为，不是说义务消失。</span><span class=\"en\" lang=\"en\">This concerns motivation and action, not the disappearance of duty.</span></p><span class=\"citations\"><a href=\"#src-E01\">[E01]</a> <a href=\"#src-E05\">[E05]</a> <a href=\"#src-N02\">[N02]</a></span><h4 class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">第一问 → 你怎么回</span><span class=\"en\" lang=\"en\">First challenge → reply</span></h4><p class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">AI 出错，反而更需要负责。</span><span class=\"en\" lang=\"en\">Errors make responsibility more necessary.</span></p><p class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">应当更负责与实际更少负责，可以同时发生。</span><span class=\"en\" lang=\"en\">A stronger duty can coexist with weaker practice.</span></p><h4 class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">追问 → 再回应</span><span class=\"en\" lang=\"en\">Follow-up → second reply</span></h4><p class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">同时可能发生，不等于真的发生。</span><span class=\"en\" lang=\"en\">Coexistence is possible, not proven.</span></p><p class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">对。必须拿出核验、纠错或责任感的证据，不能用成绩数据替代。</span><span class=\"en\" lang=\"en\">Correct. We need checking, correction or motivation evidence—not grades as a proxy.</span></p><h4 class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">什么会推翻这条</span><span class=\"en\" lang=\"en\">What would defeat it?</span></h4><p class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">核验和主动纠错实际增加。</span><span class=\"en\" lang=\"en\">Checking and voluntary correction increase.</span></p></details>"
    },
    {
      "id": "arg-A4",
      "side": "aff",
      "html": "<span class=\"eyebrow\">A4</span><h3 class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">题目也可能被 AI 带着走</span><span class=\"en\" lang=\"en\">AI may set the question too</span></h3><p class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">接受 AI 的问题框架，会让学生漏掉别的解释。</span><span class=\"en\" lang=\"en\">Accepting AI’s framing may exclude alternative explanations.</span></p><details><summary><div class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">展开两轮攻防</span><span class=\"en\" lang=\"en\">Open two exchanges</span></div></summary><h4 class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">为什么</span><span class=\"en\" lang=\"en\">Why</span></h4><p class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">批判性思维也包括决定问什么，而不只是检查答案。</span><span class=\"en\" lang=\"en\">Critical thinking includes choosing the question, not just checking its answer.</span></p><span class=\"citations\"><a href=\"#src-E05\">[E05]</a> <a href=\"#src-N01\">[N01]</a></span><h4 class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">第一问 → 你怎么回</span><span class=\"en\" lang=\"en\">First challenge → reply</span></h4><p class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">AI 能提供更多观点。</span><span class=\"en\" lang=\"en\">AI can generate more perspectives.</span></p><p class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">列得多不等于比较过；请看学生能否解释为什么排除某个观点。</span><span class=\"en\" lang=\"en\">More options are not evaluated options. Can students justify rejecting one?</span></p><h4 class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">追问 → 再回应</span><span class=\"en\" lang=\"en\">Follow-up → second reply</span></h4><p class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">人类导师也会限定问题。</span><span class=\"en\" lang=\"en\">Human supervisors also frame questions.</span></p><p class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">应比较哪种流程更能保留学生的选择与反对。这是一项推论，现有材料未量化整体效果。</span><span class=\"en\" lang=\"en\">Compare which process preserves student choice and dissent. This is an inference, not a quantified general effect.</span></p><h4 class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">什么会推翻这条</span><span class=\"en\" lang=\"en\">What would defeat it?</span></h4><p class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">学生能提出 AI 未给出的解释并检验它。</span><span class=\"en\" lang=\"en\">Students propose and test explanations the AI did not supply.</span></p></details>"
    },
    {
      "id": "arg-A5",
      "side": "aff",
      "html": "<span class=\"eyebrow\">A5</span><h3 class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">只收成品，会鼓励省掉核实</span><span class=\"en\" lang=\"en\">Product-only marking rewards shortcuts</span></h3><p class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">若只奖励漂亮成品，认真核实的成本就可能没人看见。</span><span class=\"en\" lang=\"en\">If only the product is rewarded, checking costs may go unseen.</span></p><details><summary><div class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">展开两轮攻防</span><span class=\"en\" lang=\"en\">Open two exchanges</span></div></summary><h4 class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">为什么</span><span class=\"en\" lang=\"en\">Why</span></h4><p class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">这是评价方式与 AI 共同作用的风险，不是模型单独造成。</span><span class=\"en\" lang=\"en\">This is an interaction between assessment and AI, not a model-only effect.</span></p><span class=\"citations\"><a href=\"#src-E05\">[E05]</a> <a href=\"#src-N02\">[N02]</a></span><h4 class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">第一问 → 你怎么回</span><span class=\"en\" lang=\"en\">First challenge → reply</span></h4><p class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">改评价就好了。</span><span class=\"en\" lang=\"en\">Change the assessment.</span></p><p class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">方向对，但要说明口试、检查记录和导师时间从哪里来。</span><span class=\"en\" lang=\"en\">That is a solution to test. Who funds oral checks, records and supervision time?</span></p><h4 class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">追问 → 再回应</span><span class=\"en\" lang=\"en\">Follow-up → second reply</span></h4><p class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">你把教学缺陷都算在 AI 头上。</span><span class=\"en\" lang=\"en\">You blame AI for poor teaching.</span></p><p class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">归因要分开：只说 AI 可能放大现有激励问题，不说它创造了所有问题。</span><span class=\"en\" lang=\"en\">Separate causes: AI may amplify an incentive problem; it did not create every problem.</span></p><h4 class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">什么会推翻这条</span><span class=\"en\" lang=\"en\">What would defeat it?</span></h4><p class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">过程评价可实施，且确实减少不核实的行为。</span><span class=\"en\" lang=\"en\">Feasible process assessment demonstrably reduces unchecked work.</span></p></details>"
    },
    {
      "id": "arg-A6",
      "side": "aff",
      "html": "<span class=\"eyebrow\">A6</span><h3 class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">“都能核验”未必公平</span><span class=\"en\" lang=\"en\">Checking capacity is uneven</span></h3><p class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">基础、时间和导师支持不同，同一工具的风险不会自动平均分配。</span><span class=\"en\" lang=\"en\">Differences in knowledge, time and supervision can distribute risks unevenly.</span></p><details><summary><div class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">展开两轮攻防</span><span class=\"en\" lang=\"en\">Open two exchanges</span></div></summary><h4 class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">为什么</span><span class=\"en\" lang=\"en\">Why</span></h4><p class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">平均成绩上升，也可能掩盖最难发现错误的人。</span><span class=\"en\" lang=\"en\">An average gain can hide those least able to detect errors.</span></p><span class=\"citations\"><a href=\"#src-N03\">[N03]</a> <a href=\"#src-E05\">[E05]</a></span><h4 class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">第一问 → 你怎么回</span><span class=\"en\" lang=\"en\">First challenge → reply</span></h4><p class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">不用 AI，弱势学生失去更多支持。</span><span class=\"en\" lang=\"en\">Without AI, disadvantaged students lose support.</span></p><p class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">也要算这笔损失。问题是哪些支持能保留、哪些判断不能直接交出去。</span><span class=\"en\" lang=\"en\">Count that loss too. Which support can be retained, and which judgments need student ownership?</span></p><h4 class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">追问 → 再回应</span><span class=\"en\" lang=\"en\">Follow-up → second reply</span></h4><p class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">所以不能因为不均就否定整合。</span><span class=\"en\" lang=\"en\">Unequal effects do not justify rejecting integration.</span></p><p class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">同意；本论点针对笼统推广，需分组数据，不足以单独证明整题。</span><span class=\"en\" lang=\"en\">Agreed. This challenges blanket adoption and needs subgroup data; it cannot establish the whole motion alone.</span></p><h4 class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">什么会推翻这条</span><span class=\"en\" lang=\"en\">What would defeat it?</span></h4><p class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">支持可及，薄弱群体的独立判断也改善。</span><span class=\"en\" lang=\"en\">Accessible support improves independent judgment in less-prepared groups.</span></p></details>"
    },
    {
      "id": "arg-N1",
      "side": "neg",
      "html": "<span class=\"eyebrow\">N1</span><h3 class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">提示和代答不是一回事</span><span class=\"en\" lang=\"en\">Hints are not answer substitution</span></h3><p class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">整合方式不同，学习效果可以不同。</span><span class=\"en\" lang=\"en\">Different integration designs can produce different learning effects.</span></p><details><summary><div class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">展开两轮攻防</span><span class=\"en\" lang=\"en\">Open two exchanges</span></div></summary><h4 class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">为什么</span><span class=\"en\" lang=\"en\">Why</span></h4><p class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">先尝试、再反馈、最后独立重做，能保留练习。</span><span class=\"en\" lang=\"en\">Attempt, receive feedback, then retry independently: practice remains.</span></p><span class=\"citations\"><a href=\"#src-E02\">[E02]</a> <a href=\"#src-E03\">[E03]</a> <a href=\"#src-E07\">[E07]</a></span><h4 class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">第一问 → 你怎么回</span><span class=\"en\" lang=\"en\">First challenge → reply</span></h4><p class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">这只是精心设计的例外。</span><span class=\"en\" lang=\"en\">That is a carefully designed exception.</span></p><p class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">例外足以反驳“必然”；要反驳“一般趋势”，还得查现实分布。</span><span class=\"en\" lang=\"en\">It defeats inevitability; a general tendency requires evidence about actual use.</span></p><h4 class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">追问 → 再回应</span><span class=\"en\" lang=\"en\">Follow-up → second reply</span></h4><p class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">多数人不会按你的流程做。</span><span class=\"en\" lang=\"en\">Most users will not follow it.</span></p><p class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">请给比例；我方也要说明实施成本。双方都不能用“多数人”代替证据。</span><span class=\"en\" lang=\"en\">Show the proportion; we must show implementation costs. Neither side can assert “most” without evidence.</span></p><h4 class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">什么会推翻这条</span><span class=\"en\" lang=\"en\">What would defeat it?</span></h4><p class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">实际使用常绕开支架，独立表现下降。</span><span class=\"en\" lang=\"en\">Actual use bypasses scaffolds and independent performance falls.</span></p></details>"
    },
    {
      "id": "arg-N2",
      "side": "neg",
      "html": "<span class=\"eyebrow\">N2</span><h3 class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">省去杂务，可以留下判断</span><span class=\"en\" lang=\"en\">Offload routine work, retain judgment</span></h3><p class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">润色、整理和生成候选，不必代替证据判断。</span><span class=\"en\" lang=\"en\">Editing, organizing and generating options need not replace evidential judgment.</span></p><details><summary><div class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">展开两轮攻防</span><span class=\"en\" lang=\"en\">Open two exchanges</span></div></summary><h4 class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">为什么</span><span class=\"en\" lang=\"en\">Why</span></h4><p class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">看省下的时间去了哪里，而不是把省力直接当成退化。</span><span class=\"en\" lang=\"en\">Track where saved time goes; lower effort alone is not decline.</span></p><span class=\"citations\"><a href=\"#src-E04\">[E04]</a> <a href=\"#src-E05\">[E05]</a></span><h4 class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">第一问 → 你怎么回</span><span class=\"en\" lang=\"en\">First challenge → reply</span></h4><p class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">学生可能只做表面修改。</span><span class=\"en\" lang=\"en\">Students may only make cosmetic edits.</span></p><p class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">那就用新反例和口头解释检验，不靠“改过文字”判断理解。</span><span class=\"en\" lang=\"en\">Test with new counterexamples and oral explanations, not edits alone.</span></p><h4 class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">追问 → 再回应</span><span class=\"en\" lang=\"en\">Follow-up → second reply</span></h4><p class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">你只是想象理想学生。</span><span class=\"en\" lang=\"en\">You are imagining ideal students.</span></p><p class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">研究生材料说明这种做法存在，不证明人人如此；实际比例仍需补证。</span><span class=\"en\" lang=\"en\">Graduate evidence shows such practices exist, not that everyone uses them. Prevalence remains open.</span></p><h4 class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">什么会推翻这条</span><span class=\"en\" lang=\"en\">What would defeat it?</span></h4><p class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">没有时间再投入，或离开 AI 就无法解释。</span><span class=\"en\" lang=\"en\">No reinvestment of time, or no explanation without AI.</span></p></details>"
    },
    {
      "id": "arg-N3",
      "side": "neg",
      "html": "<span class=\"eyebrow\">N3</span><h3 class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">内容可外包，责任仍在</span><span class=\"en\" lang=\"en\">Duties remain</span></h3><p class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">生成内容不等于替学生承担专业主张。</span><span class=\"en\" lang=\"en\">Generating content does not transfer responsibility for a professional claim.</span></p><details><summary><div class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">展开两轮攻防</span><span class=\"en\" lang=\"en\">Open two exchanges</span></div></summary><h4 class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">为什么</span><span class=\"en\" lang=\"en\">Why</span></h4><p class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">别人依赖你的结论，你仍要能说明依据。</span><span class=\"en\" lang=\"en\">Others rely on your conclusion; you still owe them reasons.</span></p><span class=\"citations\"><a href=\"#src-N01\">[N01]</a> <a href=\"#src-N02\">[N02]</a> <a href=\"#src-S03\">[S03]</a></span><h4 class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">第一问 → 你怎么回</span><span class=\"en\" lang=\"en\">First challenge → reply</span></h4><p class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">正方说的是责任感，不是义务。</span><span class=\"en\" lang=\"en\">Affirmative means felt responsibility, not duty.</span></p><p class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">接受这一区别，然后问：哪项证据测了责任感下降？</span><span class=\"en\" lang=\"en\">Accept that distinction, then ask which evidence measures declining felt responsibility.</span></p><h4 class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">追问 → 再回应</span><span class=\"en\" lang=\"en\">Follow-up → second reply</span></h4><p class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">规范存在也不能证明人会遵守。</span><span class=\"en\" lang=\"en\">A rule does not prove compliance.</span></p><p class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">对，所以本论点只解决规范读法；心理读法要靠行为证据来辩。</span><span class=\"en\" lang=\"en\">Correct. This addresses the normative reading; the psychological claim needs behavioural evidence.</span></p><h4 class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">什么会推翻这条</span><span class=\"en\" lang=\"en\">What would defeat it?</span></h4><p class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">对方有直接证据证明责任实践下降。</span><span class=\"en\" lang=\"en\">Direct evidence establishes weaker responsible practice.</span></p></details>"
    },
    {
      "id": "arg-N4",
      "side": "neg",
      "html": "<span class=\"eyebrow\">N4</span><h3 class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">测了省力，没测技能退化</span><span class=\"en\" lang=\"en\">Effort is not a skill test</span></h3><p class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">自报、成绩与独立思维是不同指标。</span><span class=\"en\" lang=\"en\">Self-reports, grades and independent thinking are different outcomes.</span></p><details><summary><div class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">展开两轮攻防</span><span class=\"en\" lang=\"en\">Open two exchanges</span></div></summary><h4 class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">为什么</span><span class=\"en\" lang=\"en\">Why</span></h4><p class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">不能因为标题写 critical thinking，就忽略问卷实际问了什么。</span><span class=\"en\" lang=\"en\">A title mentioning critical thinking does not settle what the instrument measured.</span></p><span class=\"citations\"><a href=\"#src-E01\">[E01]</a> <a href=\"#src-E03\">[E03]</a> <a href=\"#src-E07\">[E07]</a></span><h4 class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">第一问 → 你怎么回</span><span class=\"en\" lang=\"en\">First challenge → reply</span></h4><p class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">没有完美实验，不代表风险不存在。</span><span class=\"en\" lang=\"en\">Imperfect evidence does not erase risk.</span></p><p class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">同意风险；不同意把它写成已经证实的长期技能下降。</span><span class=\"en\" lang=\"en\">Accept the risk, not an established long-term decline.</span></p><h4 class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">追问 → 再回应</span><span class=\"en\" lang=\"en\">Follow-up → second reply</span></h4><p class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">你方的正面研究也有这些限制。</span><span class=\"en\" lang=\"en\">Your positive studies have limits too.</span></p><p class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">完全同意。对正负结果使用同一标准。</span><span class=\"en\" lang=\"en\">Yes. Apply the same standard to both directions.</span></p><h4 class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">什么会推翻这条</span><span class=\"en\" lang=\"en\">What would defeat it?</span></h4><p class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">研究生长期、独立测验显示明确下降。</span><span class=\"en\" lang=\"en\">Longitudinal independent tests in graduates show a clear decline.</span></p></details>"
    },
    {
      "id": "arg-N5",
      "side": "neg",
      "html": "<span class=\"eyebrow\">N5</span><h3 class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">检查要留痕，不能只说负责</span><span class=\"en\" lang=\"en\">Make checking observable</span></h3><p class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">要求原文定位、拒绝理由和独立重做，可把责任变成可检查的行为。</span><span class=\"en\" lang=\"en\">Source locators, rejection reasons and independent retries make responsibility observable.</span></p><details><summary><div class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">展开两轮攻防</span><span class=\"en\" lang=\"en\">Open two exchanges</span></div></summary><h4 class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">为什么</span><span class=\"en\" lang=\"en\">Why</span></h4><p class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">这让“会用 AI”与“会解释答案”分开接受评价。</span><span class=\"en\" lang=\"en\">Assess tool use separately from the ability to explain an answer.</span></p><span class=\"citations\"><a href=\"#src-E05\">[E05]</a> <a href=\"#src-E07\">[E07]</a> <a href=\"#src-N02\">[N02]</a></span><h4 class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">第一问 → 你怎么回</span><span class=\"en\" lang=\"en\">First challenge → reply</span></h4><p class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">日志也能伪造，口试成本高。</span><span class=\"en\" lang=\"en\">Logs can be faked; oral checks cost time.</span></p><p class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">用少量新问题抽查，并核算成本；不保证任何流程零风险。</span><span class=\"en\" lang=\"en\">Sample with novel questions and count the cost; no process guarantees zero risk.</span></p><h4 class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">追问 → 再回应</span><span class=\"en\" lang=\"en\">Follow-up → second reply</span></h4><p class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">你有证据证明这套组合有效吗？</span><span class=\"en\" lang=\"en\">Has this exact package been tested?</span></p><p class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">没有。这是建议；已有研究支持部分做法，不能冒充整套效果已测出。</span><span class=\"en\" lang=\"en\">No. It is a proposal supported in parts, not a tested package.</span></p><h4 class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">什么会推翻这条</span><span class=\"en\" lang=\"en\">What would defeat it?</span></h4><p class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">核查只是走形式，错误仍无法被发现。</span><span class=\"en\" lang=\"en\">Checks become ceremonial and errors remain undetected.</span></p></details>"
    },
    {
      "id": "arg-N6",
      "side": "neg",
      "html": "<span class=\"eyebrow\">N6</span><h3 class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">禁用也会失去支持</span><span class=\"en\" lang=\"en\">Restrictions can remove useful support</span></h3><p class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">语言、反馈和任务入门的帮助，也属于专业发展。</span><span class=\"en\" lang=\"en\">Language, feedback and task-entry support can contribute to development.</span></p><details><summary><div class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">展开两轮攻防</span><span class=\"en\" lang=\"en\">Open two exchanges</span></div></summary><h4 class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">为什么</span><span class=\"en\" lang=\"en\">Why</span></h4><p class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">比较替代方案时，不能只计算 AI 的代价。</span><span class=\"en\" lang=\"en\">A fair comparison counts the costs of the alternative too.</span></p><span class=\"citations\"><a href=\"#src-E04\">[E04]</a> <a href=\"#src-N03\">[N03]</a></span><h4 class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">第一问 → 你怎么回</span><span class=\"en\" lang=\"en\">First challenge → reply</span></h4><p class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">题目没要求禁用，你打错靶了。</span><span class=\"en\" lang=\"en\">The motion does not call for a ban.</span></p><p class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">正确。这只能回应限制建议；对原题，只能证明收益也应进入比较。</span><span class=\"en\" lang=\"en\">Correct. It rebuts restriction proposals; for this motion it only puts benefits into the comparison.</span></p><h4 class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">追问 → 再回应</span><span class=\"en\" lang=\"en\">Follow-up → second reply</span></h4><p class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">有收益不代表没有妨碍。</span><span class=\"en\" lang=\"en\">Benefits do not rule out harm.</span></p><p class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">同意。要比较对独立判断和责任的具体影响，不能拿方便抵消一切。</span><span class=\"en\" lang=\"en\">Agreed. Compare effects on judgment and responsibility; convenience cannot cancel every harm.</span></p><h4 class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">什么会推翻这条</span><span class=\"en\" lang=\"en\">What would defeat it?</span></h4><p class=\"bi \"><span class=\"zh\" lang=\"zh-CN\">收益仅是成品更快，独立能力没有改善。</span><span class=\"en\" lang=\"en\">The benefit is only faster output, without stronger independent ability.</span></p></details>"
    }
  ],
  "schedule": [
    {
      "round": 1,
      "label": {
        "zh": "正方开场",
        "en": "Affirmative opening"
      },
      "seconds": 240
    },
    {
      "round": 1,
      "label": {
        "zh": "反方开场",
        "en": "Negative opening"
      },
      "seconds": 240
    },
    {
      "round": 1,
      "label": {
        "zh": "正方反驳",
        "en": "Affirmative rebuttal"
      },
      "seconds": 180
    },
    {
      "round": 1,
      "label": {
        "zh": "反方反驳",
        "en": "Negative rebuttal"
      },
      "seconds": 180
    },
    {
      "round": 1,
      "label": {
        "zh": "正方结辩",
        "en": "Affirmative closing"
      },
      "seconds": 180
    },
    {
      "round": 1,
      "label": {
        "zh": "反方结辩",
        "en": "Negative closing"
      },
      "seconds": 180
    },
    {
      "round": 2,
      "label": {
        "zh": "正方开场",
        "en": "Affirmative opening"
      },
      "seconds": 240
    },
    {
      "round": 2,
      "label": {
        "zh": "反方开场",
        "en": "Negative opening"
      },
      "seconds": 240
    },
    {
      "round": 2,
      "label": {
        "zh": "正方反驳",
        "en": "Affirmative rebuttal"
      },
      "seconds": 180
    },
    {
      "round": 2,
      "label": {
        "zh": "反方反驳",
        "en": "Negative rebuttal"
      },
      "seconds": 180
    },
    {
      "round": 2,
      "label": {
        "zh": "正方结辩",
        "en": "Affirmative closing"
      },
      "seconds": 180
    },
    {
      "round": 2,
      "label": {
        "zh": "反方结辩",
        "en": "Negative closing"
      },
      "seconds": 180
    }
  ],
  "fields": [
    {
      "id": "note-motion",
      "label": {
        "zh": "原题",
        "en": "Motion"
      },
      "rows": 4,
      "value": "The integration of generative AI tools in the professional development of graduate students not only hinders their critical thinking skills but also their need to be epistemically responsible."
    },
    {
      "id": "note-scope",
      "label": {
        "zh": "need 的解释与共同标准",
        "en": "Meaning of need and shared criterion"
      },
      "rows": 3,
      "value": ""
    },
    {
      "id": "note-aff",
      "label": {
        "zh": "正方：两条主线＋来源",
        "en": "Affirmative: two lines and sources"
      },
      "rows": 4,
      "value": ""
    },
    {
      "id": "note-neg",
      "label": {
        "zh": "反方：两条主线＋来源",
        "en": "Negative: two lines and sources"
      },
      "rows": 4,
      "value": ""
    },
    {
      "id": "note-clash",
      "label": {
        "zh": "第一轮：对方问什么，我方怎么回",
        "en": "Round 1: challenge and reply"
      },
      "rows": 4,
      "value": ""
    },
    {
      "id": "note-round2",
      "label": {
        "zh": "第二轮：追问、再回应、仍未解决什么",
        "en": "Round 2: follow-up, second reply and unresolved gap"
      },
      "rows": 4,
      "value": ""
    },
    {
      "id": "note-minute",
      "label": {
        "zh": "我的一分钟：判断、证据、回应、收尾",
        "en": "My minute: judgment, evidence, reply, close"
      },
      "rows": 4,
      "value": ""
    },
    {
      "id": "note-gaps",
      "label": {
        "zh": "还需核实的事实与分工",
        "en": "Facts to check and task owners"
      },
      "rows": 3,
      "value": ""
    }
  ],
  "checks": [
    {
      "zh": "两方用相同的 need 定义。",
      "en": "Both sides use the same meaning of need."
    },
    {
      "zh": "能说清每条研究的人群和指标。",
      "en": "Each study’s population and measure are clear."
    },
    {
      "zh": "没有把自报说成技能测试。",
      "en": "Self-report is not presented as a skill test."
    },
    {
      "zh": "没有把相关、个案说成普遍因果。",
      "en": "Association and cases are not presented as general causation."
    },
    {
      "zh": "每人有一句全队一致的立场。",
      "en": "Each speaker has the same team line."
    },
    {
      "zh": "两轮都做过；能接第二次追问。",
      "en": "Both rounds rehearsed; second challenges answered."
    },
    {
      "zh": "一分钟不超时，结辩不加新论点。",
      "en": "Minute drills stay on time; closing adds no new case."
    },
    {
      "zh": "已查提交格式与 AI 规则，已保存笔记。",
      "en": "Submission format and AI rules checked; notes saved."
    }
  ],
  "updated": "2026-10-11",
  "rulesUrl": "https://microsoft.github.io/makecode-csp/unit-4/day-12/debating-rules/"
} as const
