import { lazy, Suspense } from 'react'
import { PlaceholderWeek } from '@/components/placeholder-week'
import type { WeekDefinition } from '@/content/weeks'
import type { Locale } from '@/i18n'

const Week02 = lazy(() => import('@/weeks/week-02'))
const Week04 = lazy(() => import('@/weeks/week-04'))
const Week05 = lazy(() => import('@/weeks/week-05'))
const Week06 = lazy(() => import('@/weeks/week-06'))

interface WeekContentProps {
  week: WeekDefinition
  locale: Locale
}

export function WeekContent({ week, locale }: WeekContentProps) {
  if (week.status === 'placeholder') return <PlaceholderWeek week={week} locale={locale} />

  const Component = week.id === '02' ? Week02 : week.id === '04' ? Week04 : week.id === '05' ? Week05 : Week06
  return (
    <Suspense fallback={<div className="min-h-[60vh]" aria-busy="true" />}>
      <Component locale={locale} />
    </Suspense>
  )
}
