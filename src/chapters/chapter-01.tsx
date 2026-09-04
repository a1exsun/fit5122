import { ChapterLayout } from '@/components/chapter-layout'
import { QuizAccordion } from '@/components/quiz-accordion'
import { Callout, ContentSection, InfoCard, LeadCard, ResponsiveTable, SourceList } from '@/components/week-layout'
import type { Locale } from '@/i18n'

const copy = {
  zh: {
    title: 'Communication & AI',
    subtitle: 'Chapter 01 · 从真实 Quiz 反推答题规则',
    summary: '本页以 Week 01 的 key-points 与 4 道真实题型为基准，把会议、演示和 Gen-AI 责任压缩为可以识别、辨析和应用的考试结论。',
    tags: ['Week 01', '4 个高概率考点', '3 道选择 + 1 道批判题', 'Quiz-reconstructed'],
    toc: ['考试地图', '演示取舍', '会议议程', 'AI 与真相', '签署与责任', '答题模板', '模拟题', '依据'],
    map: {
      title: '四个高概率考点',
      intro: '真实题目偏向“一句行动规则 + 情境应用”，不是平均抽取阅读细节。先记结论，再理解为什么其他选项不成立。',
      lead: 'Coverage 与 comprehension 冲突时，保护 main message；plausibility 与 truth 冲突时，回到 independent evidence。',
      points: [
        ['01 · Presentation under time pressure', '删减非必要内容，确保听众理解 main message；不要为了覆盖全部 slides 而加速。'],
        ['02 · Meeting running overtime', '准备并执行 realistic agenda：objective、priority、time allocation、owner、pre-work。'],
        ['03 · Why LLM claims need checking', 'LLM 预测 plausible text，并不判断事实真假；流畅、自信和引用格式都不是证据。'],
        ['04 · Signing AI-generated work', '签署代表 endorsement；高风险主张必须进行与风险相称的独立核验，或明确保持 provisional。'],
      ],
    },
    presentation: {
      title: '演示：压缩内容，不压缩理解',
      intro: '题目已经说明时间限制不可改变，因此最佳行动必须直接改善有限时间内的理解。',
      keep: ['一句清楚的 main message / takeaway', '最关键的 supporting points', '听众需要采取的 action', '必要的 conclusion 与 signposting'],
      cut: ['重复背景与次要例子', '只为“讲完 slides”而保留的细节', '复杂装饰或与主线无关的 visual', '加速语速造成的额外 processing load'],
      rule: 'When coverage conflicts with comprehension, prioritise comprehension of the main message.',
    },
    agenda: {
      title: '会议：Realistic agenda 必须既准备又执行',
      intro: '“经常超时且关键议题未覆盖”是 planning 与 facilitation 问题。邀请更少的人、写更详细纪要或降低频率都没有直接修复它。',
      headers: ['Agenda 要素', '考试中的作用'],
      rows: [
        ['Objective & expected outcome', '定义会议结束时必须产生的决定或结果'],
        ['Prioritised key topics', '先处理不可遗漏的业务，而非按想到的顺序讨论'],
        ['Realistic time allocation', '暴露过载议程，并给 chair 明确的 timebox'],
        ['Item owner', '让负责介绍或决策的人提前准备'],
        ['Pre-work & materials', '把信息传递移出会议，将同步时间留给判断'],
        ['Follow the agenda', '由 chair 控制离题、节奏与结束条件'],
      ],
    },
    ai: {
      title: 'AI：Plausible text 不是 verified truth',
      intro: 'LLM 的生成机制以语言上的合理延续为目标，不以建立事实为目标。Truth-indifference 也不表示模型有意欺骗。',
      cards: [
        ['Mechanism', '模型生成看起来合理的文字；它可以给出事实性回答，但生成回答不等于建立其真实性。'],
        ['Failure mode', 'Hallucination 可以同时具备流畅、自信、具体日期和看似完整引用。'],
        ['Independent verification', '核实名字、日期、统计、法规、引用与专业建议；不能让同一模型自证。'],
        ['Minimal epistemic responsibility', '当声称相信 p 时，至少必须能够回答：What reasons do you have for believing p?'],
      ],
      distinction: '“信息过时”只是可能的问题之一；即使信息最新，模型也没有因此获得判断 truth 的能力。',
    },
    signing: {
      title: '签署 AI 输出：Endorsement，不是转发',
      intro: 'Emergency response 属于高风险场景。报告“看起来准确”且符合初步判断，只提供有限理由，并不构成独立核验。',
      steps: [
        ['1 · Claim', '识别你将以姓名背书的 material claims 与 recommendations。'],
        ['2 · Risk', '判断错误对 safety、law、resources 与 professional duty 的影响。'],
        ['3 · Evidence', '回到 authoritative protocols、original data、regulations 与 qualified reviewers。'],
        ['4 · Scope', '优先核验高风险主张；记录 assumptions、uncertainty 与尚未核验的范围。'],
        ['5 · Decision', '证据不足时延迟签署、缩小 endorsement，或明确标注 draft / provisional。'],
      ],
      conclusion: '无保留签署通常不负责任。只有 material claims 获得与风险相称的独立复核，或文件清楚披露 provisional status 与未核验内容，签署才可能具有可辩护性。',
    },
    answer: {
      title: '批判题五步模板',
      intro: '不要只写“AI 会错，所以不能签”。高分答案需要权衡支持理由、证据强度、风险门槛与可执行建议。',
      rows: [
        ['1 · Position', '先给有条件的结论：without qualification 通常不应签署。'],
        ['2 · Reasons for', '承认 apparent accuracy 与一致的 initial assessment 提供 some reason。'],
        ['3 · Limits', '说明语言可信度、confirmation bias 与未逐项核验为何削弱这些理由。'],
        ['4 · Standard', '应用 minimal epistemic responsibility 与 risk-proportionate verification。'],
        ['5 · Action', '提出独立核验、披露不确定性、限制 endorsement、保留 audit trail 等措施。'],
      ],
    },
    practiceTitle: '模拟题与答案',
    practiceIntro: '题目来自当前 Week 01 quiz 整理。先作答，再展开答案核对“最直接原则”与辨析理由。',
    quiz: [
      {
        question: '演示时间因不可改变的突发情况被缩短，最佳做法是什么？\nA. 加快讲完全部 slides\nB. 优先关键点并确保听众理解 main message\nC. 要求延长时间\nD. 取消演示\nE. 以上皆非',
        answer: '答案：B。有限时间内应保护理解与 key takeaway，删除非必要内容；加速只会降低 clarity 并增加 processing load。',
      },
      {
        question: '会议经常超时且关键议题未覆盖，哪项准备最直接？\nA. 减少参与者\nB. 准备并遵循 realistic agenda\nC. 记录更详细的 minutes\nD. 降低会议频率\nE. 以上全部',
        answer: '答案：B。问题来自议题优先级、估时和过程控制；realistic agenda 加 chair 的执行最直接解决。',
      },
      {
        question: '为什么需要核验 LLM 生成的事实性主张？\nA. 模型预测 plausible text，而不是判断主张是否为真\nB. 模型被设计来误导用户\nC. 模型只能访问过时信息\nD. 模型不能回答事实问题',
        answer: '答案：A。Plausibility 不等于 truth；这不是 deliberate deception，也不只是 recency 问题。',
      },
      {
        question: '一名 senior clinician 被要求签署 AI 生成的 emergency response report。报告看起来准确，也符合其初步判断，但没有时间独立核验每项建议。请批判性评估签署是否符合 epistemic responsibility。',
        answer: '结论：无保留签署通常不负责任。表面准确与初步判断一致只提供有限理由，且可能放大 confirmation bias。签署代表对整份报告的 endorsement；临床高风险要求对 material claims 做 risk-proportionate independent review。若无法完成，应延迟或缩小签署范围，明确 provisional status、assumptions 与未核验内容，并保留核验记录。',
      },
    ],
    sourcesTitle: '内容依据',
    sourcesNote: '考点排序来自真实 Week 01 quiz 的反向校准；本页保留核心英文术语，便于与课件和题目直接对应。',
  },
  en: {
    title: 'Communication & AI',
    subtitle: 'Chapter 01 · Rules reconstructed from the real quiz',
    summary: 'Using the Week 01 key points and four real question patterns, this page compresses meetings, presentations, and Gen-AI responsibility into exam-ready rules you can identify, distinguish, and apply.',
    tags: ['Week 01', '4 high-probability targets', '3 MCQ + 1 critique', 'Quiz-reconstructed'],
    toc: ['Exam map', 'Presentation', 'Agenda', 'AI and truth', 'Signing', 'Answer method', 'Practice', 'Basis'],
    map: {
      title: 'Four high-probability exam targets',
      intro: 'The real questions favour one-line action rules applied to scenarios, rather than even coverage of every reading. Learn the conclusion and why the distractors fail.',
      lead: 'When coverage conflicts with comprehension, protect the main message; when plausibility conflicts with truth, return to independent evidence.',
      points: [
        ['01 · Presentation under time pressure', 'Remove inessential content and protect the main message; do not rush merely to cover every slide.'],
        ['02 · Meeting running overtime', 'Prepare and follow a realistic agenda: objective, priority, time allocation, owner, and pre-work.'],
        ['03 · Why LLM claims need checking', 'An LLM predicts plausible text rather than truth; fluency, confidence, and citation-shaped output are not evidence.'],
        ['04 · Signing AI-generated work', 'A signature is endorsement; high-risk claims need proportionate independent review or an explicitly provisional status.'],
      ],
    },
    presentation: {
      title: 'Presentation: compress content, not comprehension',
      intro: 'The question says the time limit cannot change, so the best action must improve comprehension within that limit.',
      keep: ['One clear main message / takeaway', 'The most important supporting points', 'The action required from the audience', 'Essential conclusion and signposting'],
      cut: ['Repeated background and secondary examples', 'Detail retained only to finish the slides', 'Decorative visuals unrelated to the argument', 'Extra processing load caused by rushing'],
      rule: 'When coverage conflicts with comprehension, prioritise comprehension of the main message.',
    },
    agenda: {
      title: 'Meetings: a realistic agenda must be prepared and followed',
      intro: 'Regular overruns plus missed key topics indicate a planning and facilitation problem. Fewer invitees, more detailed minutes, or lower frequency do not directly fix it.',
      headers: ['Agenda element', 'Exam function'],
      rows: [
        ['Objective & expected outcome', 'Defines the decision or output required by the close'],
        ['Prioritised key topics', 'Handles indispensable business before lower-value discussion'],
        ['Realistic time allocation', 'Exposes overload and gives the chair a timebox'],
        ['Item owner', 'Lets the presenter or decision owner prepare'],
        ['Pre-work & materials', 'Moves reporting out of the meeting and preserves judgement time'],
        ['Follow the agenda', 'Lets the chair manage tangents, pace, and closure'],
      ],
    },
    ai: {
      title: 'AI: plausible text is not verified truth',
      intro: 'An LLM is optimised for a plausible linguistic continuation, not for establishing facts. Truth-indifference does not mean intentional deception.',
      cards: [
        ['Mechanism', 'A model generates plausible language. It can answer a factual question, but generating an answer does not establish its truth.'],
        ['Failure mode', 'A hallucination may still be fluent, confident, dated, and wrapped in convincing citations.'],
        ['Independent verification', 'Check names, dates, statistics, law, quotations, and advice; asking the same model to verify itself is insufficient.'],
        ['Minimal epistemic responsibility', 'When claiming to believe p, you should at least answer: What reasons do you have for believing p?'],
      ],
      distinction: 'Outdated information is only one possible problem. Even current information does not give the model a truth-determining faculty.',
    },
    signing: {
      title: 'Signing AI output: endorsement, not forwarding',
      intro: 'Emergency response is high stakes. Apparent accuracy and agreement with an initial assessment provide limited reasons, not independent verification.',
      steps: [
        ['1 · Claim', 'Identify the material claims and recommendations your name would endorse.'],
        ['2 · Risk', 'Assess consequences for safety, law, resources, and professional duty.'],
        ['3 · Evidence', 'Return to authoritative protocols, original data, regulations, and qualified reviewers.'],
        ['4 · Scope', 'Prioritise high-risk claims; record assumptions, uncertainty, and unverified scope.'],
        ['5 · Decision', 'If evidence is insufficient, delay, narrow endorsement, or mark the document draft / provisional.'],
      ],
      conclusion: 'Signing without qualification is generally irresponsible. It becomes defensible only after risk-proportionate independent review of material claims, or when provisional status and unverified content are disclosed clearly.',
    },
    answer: {
      title: 'Five-step critical-answer method',
      intro: 'Do not stop at “AI can be wrong, so do not sign.” A strong answer weighs supporting reasons, evidential limits, risk threshold, and practical action.',
      rows: [
        ['1 · Position', 'Give a qualified conclusion first: generally do not sign without qualification.'],
        ['2 · Reasons for', 'Acknowledge apparent accuracy and consistency with the initial assessment as some reason.'],
        ['3 · Limits', 'Explain linguistic credibility, confirmation bias, and incomplete review.'],
        ['4 · Standard', 'Apply minimal epistemic responsibility and risk-proportionate verification.'],
        ['5 · Action', 'Recommend independent checks, uncertainty disclosure, bounded endorsement, and an audit trail.'],
      ],
    },
    practiceTitle: 'Practice questions and answers',
    practiceIntro: 'These are the current Week 01 quiz questions. Answer first, then reveal the rule and distractor logic.',
    quiz: [
      {
        question: 'If presentation time is reduced by an unchangeable event, what is the best response?\nA. Rush through every slide\nB. Prioritise key points and ensure the main message is understood\nC. Ask for more time\nD. Cancel\nE. None of these',
        answer: 'Answer: B. Protect comprehension and the key takeaway, removing inessential material. Rushing reduces clarity and increases processing load.',
      },
      {
        question: 'A meeting regularly overruns and misses key topics. Which preparation step addresses this most directly?\nA. Invite fewer people\nB. Prepare and follow a realistic agenda\nC. Record more detailed minutes\nD. Meet less often\nE. All answers',
        answer: 'Answer: B. Priority, estimation, and process control are the failure. A realistic agenda plus active chairing directly addresses them.',
      },
      {
        question: 'Why should users verify factual claims generated by an LLM?\nA. It predicts plausible text rather than determining truth\nB. It is designed to mislead\nC. It only has outdated information\nD. It cannot answer factual questions',
        answer: 'Answer: A. Plausibility is not truth. The problem is neither deliberate deception nor merely recency.',
      },
      {
        question: 'A senior clinician is asked to sign an AI-generated emergency response report. It appears accurate and matches the initial assessment, but every recommendation has not been independently verified. Critically evaluate whether signing is epistemically responsible.',
        answer: 'Conclusion: signing without qualification is generally irresponsible. Apparent accuracy and agreement provide limited reasons and may reinforce confirmation bias. A signature endorses the whole report, while clinical risk requires proportionate independent review of material claims. If that cannot be completed, delay or narrow endorsement, disclose provisional status, assumptions, and unverified content, and retain an audit trail.',
      },
    ],
    sourcesTitle: 'Content basis',
    sourcesNote: 'Priority is reverse-calibrated from the real Week 01 quiz. Core English terms remain visible so they map directly to slides and questions.',
  },
} as const

export default function Chapter01({ locale }: { locale: Locale }) {
  const c = copy[locale]
  const ids = ['map', 'presentation', 'agenda', 'ai', 'signing', 'answer', 'practice', 'sources']
  const toc = ids.map((id, index) => ({ id, label: c.toc[index] }))

  return (
    <ChapterLayout chapterId="01" locale={locale} eyebrow="Chapter 01 · Week 01" title={c.title} subtitle={c.subtitle} summary={c.summary} updated="04 Sep 2026" tags={[...c.tags]} toc={toc}>
      <ContentSection id="map" index="01" title={c.map.title} intro={c.map.intro}>
        <LeadCard label={locale === 'zh' ? '总判断线' : 'Decision spine'}>{c.map.lead}</LeadCard>
        <div className="mt-4 grid gap-3 md:grid-cols-2">{c.map.points.map(([title, body], index) => <InfoCard key={title} title={title} tone={index < 2 ? 'accent' : 'coral'}>{body}</InfoCard>)}</div>
      </ContentSection>

      <ContentSection id="presentation" index="02" title={c.presentation.title} intro={c.presentation.intro}>
        <div className="grid gap-4 md:grid-cols-2">
          <InfoCard title={locale === 'zh' ? '必须保留' : 'Protect'} tone="accent"><ul className="list-disc space-y-2 pl-5">{c.presentation.keep.map((item) => <li key={item}>{item}</li>)}</ul></InfoCard>
          <InfoCard title={locale === 'zh' ? '优先删除' : 'Remove first'} tone="coral"><ul className="list-disc space-y-2 pl-5">{c.presentation.cut.map((item) => <li key={item}>{item}</li>)}</ul></InfoCard>
        </div>
        <Callout label="Exam rule">{c.presentation.rule}</Callout>
      </ContentSection>

      <ContentSection id="agenda" index="03" title={c.agenda.title} intro={c.agenda.intro}>
        <ResponsiveTable headers={[...c.agenda.headers]} rows={c.agenda.rows.map((row) => [...row])} />
      </ContentSection>

      <ContentSection id="ai" index="04" title={c.ai.title} intro={c.ai.intro}>
        <div className="grid gap-3 md:grid-cols-2">{c.ai.cards.map(([title, body]) => <InfoCard key={title} title={title} tone="warm">{body}</InfoCard>)}</div>
        <Callout label={locale === 'zh' ? '易错辨析' : 'Distractor check'}>{c.ai.distinction}</Callout>
      </ContentSection>

      <ContentSection id="signing" index="05" title={c.signing.title} intro={c.signing.intro}>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">{c.signing.steps.map(([title, body]) => <InfoCard key={title} title={title} tone="blue">{body}</InfoCard>)}</div>
        <Callout label={locale === 'zh' ? '模型结论' : 'Model conclusion'}>{c.signing.conclusion}</Callout>
      </ContentSection>

      <ContentSection id="answer" index="06" title={c.answer.title} intro={c.answer.intro}>
        <ResponsiveTable headers={[locale === 'zh' ? '步骤' : 'Step', locale === 'zh' ? '写作任务' : 'Writing task']} rows={c.answer.rows.map((row) => [...row])} />
      </ContentSection>

      <ContentSection id="practice" index="07" title={c.practiceTitle} intro={c.practiceIntro}>
        <QuizAccordion items={c.quiz.map((item) => ({ ...item }))} />
      </ContentSection>

      <ContentSection id="sources" index="08" title={c.sourcesTitle}>
        <SourceList items={['week01/key-points.md', 'quiz/week01.md']} note={c.sourcesNote} />
      </ContentSection>
    </ChapterLayout>
  )
}
