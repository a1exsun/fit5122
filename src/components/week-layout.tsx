import { useRef, type CSSProperties, type ReactNode } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useTranslation } from 'react-i18next'
import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { getWeek, type WeekId } from '@/content/weeks'
import type { Locale } from '@/i18n'
import { cn } from '@/lib/utils'

gsap.registerPlugin(useGSAP)

export interface TocItem {
  id: string
  label: string
}

interface WeekLayoutProps {
  weekId: WeekId
  locale: Locale
  eyebrow: string
  title: string
  subtitle: string
  summary: string
  updated: string
  tags: string[]
  toc: TocItem[]
  children: ReactNode
}

export function WeekLayout({ weekId, locale, eyebrow, title, subtitle, summary, updated, tags, toc, children }: WeekLayoutProps) {
  const { t } = useTranslation()
  const week = getWeek(weekId)!

  return (
    <GuideLayout
      animationKey={`week-${weekId}`}
      locale={locale}
      palette={week}
      eyebrow={eyebrow}
      title={title}
      subtitle={subtitle}
      summary={summary}
      updated={updated}
      tags={tags}
      toc={toc}
      footerPrimary={`FIT5122 · Week ${weekId} · Own-time`}
      footerSecondary={locale === 'zh' ? '双语学习页 · React / TanStack Router' : 'Bilingual study guide · React / TanStack Router'}
      contentsLabel={t('contents')}
    >
      {children}
    </GuideLayout>
  )
}

interface GuideLayoutProps {
  animationKey: string
  locale: Locale
  palette: { accent: string; softAccent: string; heroAccent: string }
  eyebrow: string
  title: string
  subtitle: string
  summary: string
  updated: string
  tags: string[]
  toc: TocItem[]
  footerPrimary: string
  footerSecondary: string
  contentsLabel: string
  children: ReactNode
}

export function GuideLayout({ animationKey, locale, palette, eyebrow, title, subtitle, summary, updated, tags, toc, footerPrimary, footerSecondary, contentsLabel, children }: GuideLayoutProps) {
  const root = useRef<HTMLDivElement>(null)
  const { t } = useTranslation()

  useGSAP(() => {
    const mm = gsap.matchMedia()
    mm.add(
      { reduceMotion: '(prefers-reduced-motion: reduce)', mobile: '(max-width: 767px)' },
      (context) => {
        if (context.conditions?.reduceMotion) {
          gsap.set('[data-animate]', { clearProps: 'all' })
          return
        }
        gsap.from('[data-animate="hero"]', {
          y: context.conditions?.mobile ? 18 : 30,
          autoAlpha: 0,
          duration: 0.72,
          ease: 'power2.out',
          clearProps: 'transform,opacity,visibility',
        })
        gsap.from('[data-animate="content"]', {
          y: 22,
          autoAlpha: 0,
          duration: 0.58,
          stagger: 0.055,
          delay: 0.12,
          ease: 'power2.out',
          clearProps: 'transform,opacity,visibility',
        })
      },
      root.current ?? undefined,
    )
    return () => mm.revert()
  }, { scope: root, dependencies: [animationKey, locale], revertOnUpdate: true })

  const style = {
    '--week-accent': palette.accent,
    '--week-accent-soft': palette.softAccent,
    '--week-hero-accent': palette.heroAccent,
  } as CSSProperties

  return (
    <div ref={root} style={style}>
      <section data-animate="hero" className="relative mt-5 overflow-hidden rounded-[2rem] bg-primary px-6 py-12 text-primary-foreground shadow-[0_28px_80px_rgb(22_37_34/0.14)] sm:px-10 sm:py-16 lg:px-16 lg:py-20">
        <div className="pointer-events-none absolute -right-20 -top-40 size-[25rem] rounded-full border-[5rem] border-[var(--week-hero-accent)] opacity-75" />
        <div className="pointer-events-none absolute -bottom-52 right-[24%] size-96 rotate-12 rounded-[44%_56%_64%_36%] bg-[#e2674a]/70" />
        <div className="relative z-10 max-w-4xl">
          <p className="mb-6 flex items-center gap-3 text-xs font-black uppercase tracking-[0.2em] text-white/70 before:h-0.5 before:w-7 before:bg-[var(--week-hero-accent)] before:content-['']">{eyebrow}</p>
          <h1 className="text-[clamp(2rem,10vw,3rem)] font-black leading-[0.94] tracking-[-0.06em] sm:text-7xl lg:text-8xl">{title}</h1>
          <p className="mt-5 text-2xl font-black tracking-tight text-[var(--week-hero-accent)] sm:text-3xl">{subtitle}</p>
          <p className="mt-7 max-w-3xl text-base leading-8 text-white/80 sm:text-lg">{summary}</p>
          <div className="mt-8 flex flex-wrap gap-2">
            {tags.map((tag) => <Badge key={tag} variant="outline" className="border-white/20 bg-white/5 px-3 py-1.5 text-white">{tag}</Badge>)}
            <Badge variant="outline" className="border-white/20 bg-white/5 px-3 py-1.5 text-white">{t('updated')}: {updated}</Badge>
          </div>
        </div>
      </section>

      <div className="mt-10 grid gap-10 lg:grid-cols-[13rem_minmax(0,1fr)] lg:gap-14">
        <nav data-print-hidden data-animate="content" aria-label={contentsLabel} className="h-fit overflow-x-auto rounded-2xl border bg-card/80 p-3 shadow-sm backdrop-blur lg:sticky lg:top-24 lg:overflow-visible lg:p-4">
          <p className="hidden px-2 pb-2 text-[11px] font-black uppercase tracking-[0.16em] text-muted-foreground lg:block">{contentsLabel}</p>
          <div className="flex min-w-max gap-1 lg:min-w-0 lg:flex-col">
            {toc.map((item, index) => (
              <a key={item.id} href={`#${item.id}`} className="rounded-xl px-3 py-2 text-sm font-semibold transition-colors hover:bg-[var(--week-accent-soft)] hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                <span className="mr-2 text-xs font-black text-[var(--week-accent)]">{String(index + 1).padStart(2, '0')}</span>{item.label}
              </a>
            ))}
          </div>
        </nav>
        <main className="min-w-0 space-y-20">{children}</main>
      </div>

      <footer className="mt-20 flex flex-col justify-between gap-2 border-t pt-6 text-xs text-muted-foreground sm:flex-row">
        <span className="font-bold text-foreground">{footerPrimary}</span>
        <span>{footerSecondary}</span>
      </footer>
    </div>
  )
}

interface SectionProps {
  id: string
  index: string
  title: string
  intro?: string
  children: ReactNode
  className?: string
}

export function ContentSection({ id, index, title, intro, children, className }: SectionProps) {
  return (
    <section id={id} data-animate="content" className={cn('scroll-mt-64 sm:scroll-mt-40 lg:scroll-mt-28', className)}>
      <div className="mb-7 grid gap-2 sm:grid-cols-[4.25rem_minmax(0,1fr)] sm:gap-5">
        <span className="pt-2 text-xs font-black uppercase tracking-[0.15em] text-[var(--week-accent)]">{index}</span>
        <div>
          <h2 className="text-3xl font-black leading-tight tracking-[-0.04em] sm:text-5xl">{title}</h2>
          {intro ? <p className="mt-3 max-w-3xl text-muted-foreground">{intro}</p> : null}
        </div>
      </div>
      {children}
    </section>
  )
}

export function LeadCard({ label, children, note }: { label: string; children: ReactNode; note?: string }) {
  return (
    <Card data-print-break-inside className="overflow-hidden border-0 bg-primary p-7 text-primary-foreground shadow-lg sm:p-10">
      <p className="mb-4 text-[11px] font-black uppercase tracking-[0.17em] text-white/60">{label}</p>
      <div className="text-2xl font-black leading-snug tracking-[-0.03em] sm:text-4xl">{children}</div>
      {note ? <p className="mt-5 max-w-3xl text-sm leading-7 text-white/70 sm:text-base">{note}</p> : null}
    </Card>
  )
}

export function InfoCard({ title, children, tone = 'plain', className }: { title: string; children: ReactNode; tone?: 'plain' | 'accent' | 'warm' | 'coral' | 'blue'; className?: string }) {
  const tones = {
    plain: 'bg-card',
    accent: 'bg-[var(--week-accent-soft)]',
    warm: 'bg-[#faead0]',
    coral: 'bg-[#f8ddd5]',
    blue: 'bg-[#dfeaf1]',
  }
  return (
    <Card data-print-break-inside className={cn('p-6 shadow-none', tones[tone], className)}>
      <h3 className="text-lg font-black leading-tight tracking-tight">{title}</h3>
      <div className="mt-3 text-sm leading-7 text-muted-foreground">{children}</div>
    </Card>
  )
}

export function Callout({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div data-print-break-inside className="mt-4 grid gap-3 rounded-r-2xl border-l-4 border-[var(--week-accent)] bg-[var(--week-accent-soft)] p-5 sm:grid-cols-[auto_1fr]">
      <Badge variant="outline" className="h-fit w-fit border-black/10 bg-white/55 uppercase tracking-wider">{label}</Badge>
      <div className="text-sm leading-7 text-foreground/75">{children}</div>
    </div>
  )
}

export function ResponsiveTable({ headers, rows }: { headers: string[]; rows: ReactNode[][] }) {
  return (
    <div data-print-break-inside className="overflow-x-auto rounded-2xl border bg-card">
      <table className="w-full min-w-[680px] border-collapse text-left text-sm">
        <thead className="bg-muted">
          <tr>{headers.map((header) => <th key={header} className="border-b px-5 py-4 text-xs font-black uppercase tracking-wider">{header}</th>)}</tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr key={rowIndex} className="last:[&>td]:border-b-0">
              {row.map((cell, cellIndex) => <td key={cellIndex} className="border-b px-5 py-4 align-top leading-6 text-muted-foreground first:font-bold first:text-foreground">{cell}</td>)}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export function SectionRule() {
  return <Separator className="my-6" />
}

export function SourceList({ items, note }: { items: string[]; note: string }) {
  return (
    <div>
      <div className="grid gap-2 sm:grid-cols-2">
        {items.map((item) => (
          <div key={item} className="rounded-xl border bg-card px-4 py-3 text-sm font-semibold">{item}</div>
        ))}
      </div>
      <p className="mt-4 rounded-xl bg-muted px-4 py-3 text-xs leading-6 text-muted-foreground">{note}</p>
    </div>
  )
}
