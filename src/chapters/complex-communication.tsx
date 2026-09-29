import { useEffect, useState } from 'react'
import { flushSync } from 'react-dom'
import { Link } from '@tanstack/react-router'
import { ChapterLayout } from '@/components/chapter-layout'
import { Callout, ContentSection, LeadCard, ResponsiveTable, SourceList } from '@/components/week-layout'
import { Button } from '@/components/ui/button'
import { courseSources, guideCopy, hdRubric } from '@/content/complex-communication-guide'
import { empathyDimensions, incidentCases, scenarioMarkdown, templateFields } from '@/content/complex-communication-cases'
import type { Locale } from '@/i18n'

const sectionIds = ['specification', 'requirements', 'rubric', 'knowledge', 'template-guide', 'crowdstrike', 'medibank', 'optus', 'final-checks', 'sources']
const allStakeholderIds = incidentCases.flatMap(c => c.stakeholders.map((_, i) => `${c.id}-${i}`))
const linkClass = 'font-semibold text-[var(--week-accent)] underline underline-offset-4 break-words'

export default function ComplexCommunication({ locale }: { locale: Locale }) {
  const c = guideCopy[locale]
  const l = c.labels
  const [openIds, setOpenIds] = useState<string[]>([])

  useEffect(() => {
    const showAllForPrint = () => flushSync(() => setOpenIds(allStakeholderIds))
    window.addEventListener('beforeprint', showAllForPrint)
    return () => window.removeEventListener('beforeprint', showAllForPrint)
  }, [])

  function downloadCase(index: number) {
    const scenario = incidentCases[index]
    const url = URL.createObjectURL(new Blob([scenarioMarkdown(scenario)], { type: 'text/markdown;charset=utf-8' }))
    const anchor = document.createElement('a')
    anchor.href = url
    anchor.download = `complex-communication-${scenario.id}-completed.md`
    anchor.click()
    setTimeout(() => URL.revokeObjectURL(url), 1000)
  }

  function printChapter() {
    flushSync(() => setOpenIds(allStakeholderIds))
    window.print()
  }

  return (
    <ChapterLayout chapterId="complex-communication" locale={locale} eyebrow="Assessment · Week 09 Applied Session" title="Complex Communication" subtitle={c.subtitle} summary={c.summary} updated="2026-09-29" tags={c.tags} toc={sectionIds.map((id, i) => ({ id, label: c.toc[i] }))}>
      <div className="assessment-guide space-y-20">
      <LeadCard label="HD · Evidence to action" note={c.leadNote}>{c.lead}</LeadCard>

      <ContentSection id="specification" index="01" title={c.originalTitle} intro={c.originalIntro}>
        <div className="flex flex-col gap-3">
          <a className={linkClass} href="/complex-communication/specification.pdf" target="_blank" rel="noreferrer">{c.pdf}</a>
          <a className={linkClass} href="/complex-communication/specification.txt" download>{c.text}</a>
        </div>
        <div className="mt-6 space-y-3" data-print-hidden>
          {c.pageNames.map((name, i) => (
            <details key={name} className="rounded-2xl border bg-card p-4">
              <summary className="cursor-pointer font-bold">Page {i + 1} · {name}</summary>
              <a href={`/complex-communication/specification.pdf#page=${i + 1}`} target="_blank" rel="noreferrer" aria-label={`Open original PDF page ${i + 1}`}>
                <img className="mt-4 h-auto w-full rounded-lg" src={`/complex-communication/spec-${i + 1}.png`} width="1133" height="1600" loading="lazy" alt={`FIT5122 Complex Communication specification, page ${i + 1}: ${name}`} />
              </a>
            </details>
          ))}
        </div>
      </ContentSection>

      <ContentSection id="requirements" index="02" title={c.summaryTitle}>
        <ResponsiveTable headers={locale === 'zh' ? ['项目', '规格内容摘要', '解读 / 边界'] : ['Item', 'Requirement summary', 'Interpretation / boundary']} rows={c.summaryRows} />
      </ContentSection>

      <ContentSection id="rubric" index="03" title={c.hdTitle} intro={c.hdIntro}>
        <div className="space-y-5">
          {hdRubric.map(r => (
            <article key={r.criterion} className="rounded-2xl border bg-card p-6">
              <h3 className="text-xl font-black" lang="en">{r.criterion}</h3>
              <blockquote className="mt-4 border-l-2 pl-4 text-sm leading-7 text-muted-foreground" lang="en">{r.original}</blockquote>
              <Callout label={c.hdLabel}>{r[locale]}</Callout>
            </article>
          ))}
        </div>
      </ContentSection>

      <ContentSection id="knowledge" index="04" title={c.knowledgeTitle} intro={c.knowledgeIntro}>
        <ResponsiveTable headers={c.knowledgeHeaders} rows={c.knowledgeRows} />
      </ContentSection>

      <ContentSection id="template-guide" index="05" title={c.methodTitle} intro={c.methodIntro}>
        <ResponsiveTable headers={locale === 'zh' ? ['原字段', '填写要点'] : ['Original field', 'What to write']} rows={c.methodRows} />
        <Callout label="Mock / 模拟">{c.scenarioIntro}</Callout>
        <div className="mt-6 flex flex-wrap gap-3" data-print-hidden>
          <Button variant="outline" className="h-auto whitespace-normal" onClick={() => setOpenIds(allStakeholderIds)}>{l.expandAll}</Button>
          <Button variant="outline" className="h-auto whitespace-normal" onClick={() => setOpenIds([])}>{l.collapseAll}</Button>
          <Button className="h-auto whitespace-normal" onClick={printChapter}>{l.print}</Button>
        </div>
      </ContentSection>

      {incidentCases.map((scenario, caseIndex) => (
        <ContentSection key={scenario.id} id={scenario.id} index={`0${caseIndex + 6}`} title={scenario.title} intro={scenario.focus[locale]}>
          <div className="space-y-7">
            <div className="rounded-2xl border bg-card p-6">
              <h3 className="text-xl font-black">{l.facts}</h3>
              <ul className="mt-3 list-disc space-y-3 pl-5" lang="en">
                {scenario.facts.map(f => <li key={f.text}>{f.text} <a className={linkClass} href={scenario.sources[f.source].url} target="_blank" rel="noreferrer">[{scenario.sources[f.source].title}]</a></li>)}
              </ul>
            </div>
            {([[l.snapshot, scenario.snapshot], [l.unknowns, scenario.unknowns], [l.issues, scenario.issues]]).map(([title, text]) => (
              <div key={title}><h3 className="text-xl font-black">{title}</h3><p className="mt-3 text-muted-foreground" lang="en">{text}</p></div>
            ))}
            <Callout label={l.interpretation}>{scenario.interpretation[locale]}</Callout>
            <div><h3 className="font-black">{l.team}</h3><p className="mt-2 text-sm text-muted-foreground" lang="en">{scenario.team}</p></div>
            <div>
              <h3 className="text-xl font-black">{l.empathy}</h3>
              <p className="mb-5 mt-3 text-sm text-muted-foreground">{c.forecastNote}</p>
              <div className="space-y-4">
                {scenario.stakeholders.map((s, i) => {
                  const id = `${scenario.id}-${i}`
                  return (
                    <details key={id} data-stakeholder={id} className="assessment-stakeholder rounded-2xl border bg-card p-4 sm:p-6" open={openIds.includes(id)} onToggle={event => {
                      const open = event.currentTarget.open
                      setOpenIds(current => current.includes(id) === open ? current : open ? [...current, id] : current.filter(value => value !== id))
                    }}>
                      <summary className="cursor-pointer text-lg font-black" lang="en">{String(i + 1).padStart(2, '0')} · {s.name}</summary>
                      <div className="mt-6 space-y-5">
                        <dl className="space-y-3">
                          <div><dt className="font-bold">{l.relationship}</dt><dd className="mt-1 text-sm text-muted-foreground" lang="en">{s.relationship}</dd></div>
                          <div><dt className="font-bold">{l.motivation}</dt><dd className="mt-1 text-sm text-muted-foreground" lang="en">{s.motivation}</dd></div>
                        </dl>
                        <div className="assessment-forecast" lang="en">
                          <ResponsiveTable headers={[l.dimension, l.before, l.after]} rows={empathyDimensions.map((d, n) => [d, s.before[n], s.after[n]])} />
                        </div>
                        <dl className="space-y-4">
                          {[[l.questions, s.questions], [l.bridge, s.bridge], [l.validation, s.validation]].map(([label, text]) => (
                            <div key={label}><dt className="font-bold">{label}</dt><dd className="mt-1 text-sm leading-7 text-muted-foreground" lang="en">{text}</dd></div>
                          ))}
                        </dl>
                        <h4 className="border-t pt-5 text-lg font-black">{l.template}</h4>
                        <dl data-completed-template className="divide-y rounded-xl border" lang="en">
                          {[s.name, s.aim, s.channel, s.message, s.frequency, s.rationale].map((value, field) => (
                            <div key={templateFields[field]} className="grid gap-2 p-4 sm:grid-cols-[11rem_minmax(0,1fr)] sm:gap-5">
                              <dt className="text-xs font-black uppercase tracking-wide">{templateFields[field]}</dt>
                              <dd className={`min-w-0 text-sm leading-7 ${field === 3 ? 'font-medium text-foreground' : 'text-muted-foreground'}`}>{value}</dd>
                            </div>
                          ))}
                        </dl>
                      </div>
                    </details>
                  )
                })}
              </div>
            </div>
            <div><h3 className="mb-4 text-xl font-black">{l.ethics}</h3><ResponsiveTable headers={locale === 'zh' ? ['取舍', '决策', '可执行控制'] : ['Trade-off', 'Decision', 'Executable control']} rows={scenario.ethics} /></div>
            {[[l.comments, scenario.comments], [l.briefing, scenario.briefing], [l.debrief, scenario.debrief]].map(([title, text]) => <div key={title}><h3 className="text-xl font-black">{title}</h3><p className="mt-3 text-sm leading-7 text-muted-foreground" lang="en">{text}</p></div>)}
            <div><h3 className="font-black">{l.sources}</h3><ul className="mt-3 space-y-3" lang="en">{scenario.sources.map(s => <li key={s.url}><a href={s.url} target="_blank" rel="noreferrer" className={linkClass}>{s.title}</a><p className="mt-1 text-xs text-muted-foreground">{s.use}</p></li>)}</ul></div>
            <Button variant="outline" className="h-auto max-w-full whitespace-normal text-left" data-print-hidden onClick={() => downloadCase(caseIndex)}>{l.download}</Button>
          </div>
        </ContentSection>
      ))}

      <ContentSection id="final-checks" index="09" title={c.checklistTitle} intro={c.checklistIntro}>
        <ol className="list-decimal space-y-4 pl-6">{c.checklist.map(item => <li key={item}>{item}</li>)}</ol>
      </ContentSection>

      <ContentSection id="sources" index="10" title={c.sourceTitle}>
        <SourceList items={courseSources} note={c.sourceNote} />
        <h3 className="mb-3 mt-6 font-black">{c.sourceLinks}</h3>
        <div className="flex flex-wrap gap-5">
          <Link className={linkClass} to="/chapter/$chapterId" params={{ chapterId: '04' }} search={{ lang: locale }}>Chapter 04</Link>
          <Link className={linkClass} to="/week/$weekId" params={{ weekId: '07' }} search={{ lang: locale }}>Week 07</Link>
          <Link className={linkClass} to="/week/$weekId" params={{ weekId: '08' }} search={{ lang: locale }}>Week 08</Link>
        </div>
      </ContentSection>
      </div>
    </ChapterLayout>
  )
}
