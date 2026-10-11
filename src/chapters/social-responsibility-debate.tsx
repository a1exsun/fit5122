import { memo, useEffect, useRef, useState } from 'react'
import { ChapterLayout } from '@/components/chapter-layout'
import { ContentSection } from '@/components/week-layout'
import { Button } from '@/components/ui/button'
import { debate } from '@/content/social-responsibility-debate'
import type { Locale } from '@/i18n'
import './social-responsibility-debate.css'

type Copy = { zh: string; en: string }
const Html = memo(function Html({ html }: { html: string }) {
  // Only checked-in editorial markup reaches this component; notes are rendered as text.
  return <div className="debate-copy" dangerouslySetInnerHTML={{ __html: html }} />
})
function Bilingual({ text }: { text: Copy }) {
  return <span className="bi"><span className="zh" lang="zh-CN">{text.zh}</span><span className="en" lang="en">{text.en}</span></span>
}

function DeductionMap({ locale }: { locale: Locale }) {
  const [selected, setSelected] = useState<string>('facts')
  const node = debate.nodes.find(n => n.id === selected)!
  function nodeButton(id: string) {
    const n = debate.nodes.find(item => item.id === id)!
    return <button key={id} type="button" className={`map-node ${id.startsWith('neg-') ? 'negative' : ''}`} aria-pressed={selected === id} aria-controls="debate-map-detail" onClick={() => setSelected(id)}><small>{n.code}</small><Bilingual text={n.label} /></button>
  }
  return <div className="map-shell">
    <div className="grid two">{debate.nodes.filter(n => n.group === 'shared').map(n => nodeButton(n.id))}</div>
    <div className="grid two">
      <div><h3>{locale === 'zh' ? '正方：六条理由' : 'Affirmative: six routes'}</h3><div className="map-flow">{debate.nodes.filter(n => n.id.startsWith('aff-')).map(n => nodeButton(n.id))}</div></div>
      <div><h3>{locale === 'zh' ? '反方：六条理由' : 'Negative: six routes'}</h3><div className="map-flow">{debate.nodes.filter(n => n.id.startsWith('neg-')).map(n => nodeButton(n.id))}</div></div>
    </div>
    <div className="grid two">{debate.nodes.filter(n => n.group === 'decision').map(n => nodeButton(n.id))}</div>
    <div id="debate-map-detail" className="map-detail" aria-live="polite"><Html html={node.html} />{node.reply && <Button variant="outline" onClick={() => setSelected(debate.nodes.find(n => n.code === node.reply)!.id)}>{locale === 'zh' ? `看 ${node.reply} 怎么回` : `See the ${node.reply} reply`}</Button>}</div>
  </div>
}

function ArgumentCards({ locale }: { locale: Locale }) {
  const [side, setSide] = useState('all')
  return <>
    <div className="mb-5 flex flex-wrap gap-2" data-print-hidden role="group" aria-label={locale === 'zh' ? '论证立场' : 'Argument side'}>
      {([['all', '双方', 'Both sides'], ['aff', '正方', 'Affirmative'], ['neg', '反方', 'Negative']] as const).map(([value, zh, en]) => <Button key={value} variant={side === value ? 'default' : 'outline'} aria-pressed={side === value} onClick={() => setSide(value)}>{locale === 'zh' ? zh : en}</Button>)}
    </div>
    <div className="grid two">{debate.arguments.map(a => <article key={a.id} id={a.id} data-argument-side={a.side} hidden={side !== 'all' && side !== a.side} className={`card argument ${a.side}`}><Html html={a.html} /></article>)}</div>
  </>
}

function RehearsalTimer({ locale }: { locale: Locale }) {
  const [duration, setDuration] = useState(60)
  const [phase, setPhase] = useState<number | null>(null)
  const [remaining, setRemaining] = useState(60)
  const [running, setRunning] = useState(false)
  const deadline = useRef(0)
  useEffect(() => {
    if (!running) return
    const interval = window.setInterval(() => {
      const seconds = Math.max(0, Math.ceil((deadline.current - Date.now()) / 1000))
      setRemaining(seconds)
      if (seconds === 0) setRunning(false)
    }, 200)
    return () => window.clearInterval(interval)
  }, [running])
  function reset(seconds = duration) { setRunning(false); setRemaining(seconds) }
  function choosePhase(index: number) {
    setPhase(index)
    const seconds = debate.schedule[index].seconds
    setDuration(seconds); reset(seconds)
  }
  function toggle() {
    if (running) { setRemaining(Math.max(0, Math.ceil((deadline.current - Date.now()) / 1000))); setRunning(false); return }
    const seconds = remaining || duration
    setRemaining(seconds); deadline.current = Date.now() + seconds * 1000; setRunning(true)
  }
  return <div className="timer-panel" data-print-hidden>
    <h3>{locale === 'zh' ? '排练计时器' : 'Rehearsal timer'}</h3>
    <p>{locale === 'zh' ? '正式比赛 20 分钟。训练两轮，共 40 分钟、12 段；换边后重打。' : 'Assessment: 20 minutes. Practice: two rounds, 40 minutes, 12 segments; swap sides.'}</p>
    <div className="flex flex-wrap gap-3"><Button variant="secondary" aria-pressed={phase === null} onClick={() => { setPhase(null); setDuration(60); reset(60) }}>{locale === 'zh' ? '自由练习' : 'Free practice'}</Button><Button variant="secondary" aria-pressed={phase !== null} onClick={() => choosePhase(0)}>{locale === 'zh' ? '进入两轮流程' : 'Set up two rounds'}</Button></div>
    {phase !== null && <div className="space-y-3">
      <label htmlFor="debate-phase">{locale === 'zh' ? '训练进度' : 'Practice segment'}</label>
      <select id="debate-phase" value={phase} onChange={e => choosePhase(Number(e.target.value))}>{debate.schedule.map((step, index) => <option key={index} value={index}>{locale === 'zh' ? `第 ${step.round} 轮` : `Round ${step.round}`} · {step.label[locale]} · {step.seconds / 60}:00</option>)}</select>
      <p>{phase + 1} / 12 · {locale === 'zh' ? '第 2 轮换边。到时暂停，手动进入下一段。' : 'Swap sides for round 2. At zero, advance manually.'}</p>
      <Button variant="secondary" disabled={phase === debate.schedule.length - 1} onClick={() => choosePhase(phase + 1)}>{locale === 'zh' ? '下一段' : 'Next segment'}</Button>
    </div>}
    <label htmlFor="debate-duration">{locale === 'zh' ? '发言时长' : 'Speech duration'}</label>
    <select id="debate-duration" disabled={phase !== null} value={duration} onChange={e => { const value = Number(e.target.value); setDuration(value); reset(value) }}>
      <option value={60}>{locale === 'zh' ? '1:00 · 个人发言' : '1:00 · Individual speech'}</option>
      <option value={240}>{locale === 'zh' ? '4:00 · 开场' : '4:00 · Opening'}</option><option value={180}>{locale === 'zh' ? '3:00 · 反驳 / 结辩' : '3:00 · Rebuttal / closing'}</option>
    </select>
    <output className={remaining <= 30 ? 'warn' : ''} aria-label={locale === 'zh' ? '剩余时间' : 'Time remaining'}>{Math.floor(remaining / 60)}:{String(remaining % 60).padStart(2, '0')}</output>
    <div className="flex gap-3"><Button variant="secondary" onClick={toggle}>{locale === 'zh' ? (running ? '暂停' : '开始') : (running ? 'Pause' : 'Start')}</Button><Button variant="secondary" onClick={() => reset()}>{locale === 'zh' ? '重置' : 'Reset'}</Button></div>
    <p role="status">{remaining === 0 ? (locale === 'zh' ? '时间到，请结束发言。' : 'Time is up. Finish your speech.') : running ? (locale === 'zh' ? '计时中' : 'Running') : (locale === 'zh' ? '准备 / 已暂停' : 'Ready / paused')}</p>
  </div>
}

export default function SocialResponsibilityDebate({ locale }: { locale: Locale }) {
  const [comparison, setComparison] = useState(false)
  const [query, setQuery] = useState('')
  const [matches, setMatches] = useState<(typeof debate.sections)[number][]>([])
  const [notes, setNotes] = useState<Record<string, string>>(() => Object.fromEntries(debate.fields.map(f => [f.id, f.value])))
  const [checked, setChecked] = useState<boolean[]>(() => debate.checks.map(() => false))
  const root = useRef<HTMLDivElement>(null)
  useEffect(() => {
    let states: [HTMLDetailsElement, boolean][] = []
    const before = () => { states = [...root.current!.querySelectorAll('details')].map(d => [d, d.open]); states.forEach(([d]) => { d.open = true }) }
    const after = () => states.forEach(([d, open]) => { d.open = open })
    window.addEventListener('beforeprint', before); window.addEventListener('afterprint', after)
    return () => { window.removeEventListener('beforeprint', before); window.removeEventListener('afterprint', after) }
  }, [])
  function downloadNotes() {
    let text = `# FIT5122 · Social Responsibility Debate\n\n`
    debate.fields.forEach(f => { text += `## ${f.label.zh} / ${f.label.en}\n\n${notes[f.id] || '[Not completed / 未填写]'}\n\n` })
    text += '## Checklist / 核对清单\n\n'
    debate.checks.forEach((c, i) => { text += `- [${checked[i] ? 'x' : ' '}] ${c.zh} / ${c.en}\n` })
    const url = URL.createObjectURL(new Blob([text], { type: 'text/markdown;charset=utf-8' }))
    const anchor = document.createElement('a'); anchor.href = url; anchor.download = 'FIT5122-debate-team-notes.md'
    document.body.append(anchor); anchor.click(); anchor.remove(); setTimeout(() => URL.revokeObjectURL(url), 1000)
  }
  function searchGuide(value: string) {
    setQuery(value)
    const term = value.trim().toLocaleLowerCase()
    setMatches(term ? debate.sections.filter(s => root.current?.querySelector(`#${s.id}`)?.textContent?.toLocaleLowerCase().includes(term)) : [])
  }
  return <ChapterLayout chapterId="social-responsibility-debate" locale={locale} eyebrow="Assessment · Week 12 Debate" title="Social Responsibility Debate" subtitle={locale === 'zh' ? '生成式 AI、批判性思维与认识责任' : 'GenAI, critical thinking & epistemic responsibility'} summary={locale === 'zh' ? '先把题目讲清，再练两轮攻防。附指定规则、证据速查和一分钟发言技巧。' : 'Get the motion straight, then practise two exchanges. Includes assigned rules, evidence checks and one-minute delivery.'} updated="2026-10-11" tags={locale === 'zh' ? ['正式 20 分钟', '训练 40 分钟 / 两轮', '12 张论证卡', '16 个思维节点'] : ['20-minute assessment', '40-minute / two-round practice', '12 argument cards', '16 thinking nodes']} toc={debate.sections.map(s => ({ id: s.id, label: s.title[locale] }))}>
    <div ref={root} className="debate-guide space-y-20" data-locale={comparison ? 'both' : locale}>
      <div className="space-y-4" data-print-hidden>
        <div className="flex flex-wrap items-end gap-4"><label className="flex min-w-0 flex-1 flex-col gap-2 font-bold" htmlFor="debate-search">{locale === 'zh' ? '搜索本专题' : 'Search this guide'}<input id="debate-search" type="search" value={query} onChange={e => searchGuide(e.target.value)} /></label><Button variant={comparison ? 'default' : 'outline'} aria-pressed={comparison} onClick={() => setComparison(!comparison)}>{locale === 'zh' ? '中英对照' : 'Bilingual comparison'}</Button></div>
        {query.trim() && <div role="region" aria-label={locale === 'zh' ? '搜索结果' : 'Search results'} className="flex flex-wrap gap-3">{matches.length ? matches.map(s => <a key={s.id} href={`#${s.id}`} onClick={() => setQuery('')}>{s.title[locale]}</a>) : <p>{locale === 'zh' ? '没有匹配章节。' : 'No matching sections.'}</p>}</div>}
      </div>
      {debate.sections.map((section, index) => <ContentSection key={section.id} id={section.id} index={String(index + 1).padStart(2, '0')} title={section.title[locale]}>
        {section.blocks.map((block, i) => {
          switch (block.kind) {
            case 'html': return <Html key={i} html={block.html} />
            case 'map': return <DeductionMap key={i} locale={locale} />
            case 'arguments': return <ArgumentCards key={i} locale={locale} />
            case 'timer': return <RehearsalTimer key={i} locale={locale} />
            case 'workbench': return <div key={i} className="workbench">{debate.fields.map(f => <label key={f.id} htmlFor={f.id}><Bilingual text={f.label} /><textarea id={f.id} rows={f.rows} value={notes[f.id]} onChange={e => setNotes(current => ({ ...current, [f.id]: e.target.value }))} /></label>)}<Button onClick={downloadNotes} data-print-hidden>{locale === 'zh' ? '下载团队笔记 .md' : 'Download team notes .md'}</Button></div>
            case 'checklist': return <div key={i}>{debate.checks.map((c, j) => <label key={c.en} className="check"><input type="checkbox" checked={checked[j]} onChange={e => setChecked(current => current.map((value, n) => n === j ? e.target.checked : value))} /><Bilingual text={c} /></label>)}<p aria-live="polite">{checked.filter(Boolean).length} / {checked.length} {locale === 'zh' ? '项已核对' : 'checks complete'}</p></div>
          }
        })}
      </ContentSection>)}
    </div>
  </ChapterLayout>
}
