import { lazy, Suspense } from 'react'
import { PlaceholderWeek } from '@/components/placeholder-week'
import type { WeekDefinition } from '@/content/weeks'
import type { Locale } from '@/i18n'

const Week01 = lazy(() => import('@/weeks/week-01'))
const Week02 = lazy(() => import('@/weeks/week-02'))
const Week03 = lazy(() => import('@/weeks/week-03'))
const Week04 = lazy(() => import('@/weeks/week-04'))
const Week05 = lazy(() => import('@/weeks/week-05'))
const Week06 = lazy(() => import('@/weeks/week-06'))
const Week07 = lazy(() => import('@/weeks/week-07'))
const weekComponents = { '01': Week01, '02': Week02, '03': Week03, '04': Week04, '05': Week05, '06': Week06, '07': Week07 }

interface WeekContentProps {
  week: WeekDefinition
  locale: Locale
}

export function WeekContent({ week, locale }: WeekContentProps) {
  if (week.status === 'placeholder') return <PlaceholderWeek week={week} locale={locale} />

  const Component = weekComponents[week.id]
  return (
    <Suspense fallback={<div className="min-h-[60vh]" aria-busy="true" />}>
      <Component locale={locale} />
    </Suspense>
  )
}
