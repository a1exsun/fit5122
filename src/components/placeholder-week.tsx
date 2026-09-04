import { CalendarClock } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { WeekLayout, ContentSection } from '@/components/week-layout'
import type { WeekDefinition } from '@/content/weeks'
import type { Locale } from '@/i18n'

export function PlaceholderWeek({ week, locale }: { week: WeekDefinition; locale: Locale }) {
  const { t } = useTranslation()
  const title = t(`weeks.${week.id}.title`)
  return (
    <WeekLayout
      weekId={week.id}
      locale={locale}
      eyebrow={`Week ${week.id} · Own-time`}
      title={title}
      subtitle={t('comingSoon')}
      summary={t('placeholderBody')}
      updated="04 Sep 2026"
      tags={[t('comingSoon')]}
      toc={[{ id: 'placeholder', label: t('comingSoon') }]}
    >
      <ContentSection id="placeholder" index="01" title={t('placeholderTitle')}>
        <Card className="border-dashed bg-card/65 py-16 text-center shadow-none">
          <CardContent className="mx-auto max-w-xl px-7">
            <span className="mx-auto grid size-16 place-items-center rounded-3xl bg-[var(--week-accent-soft)] text-[var(--week-accent)]">
              <CalendarClock className="size-7" />
            </span>
            <Badge variant="outline" className="mt-6">Week {week.id}</Badge>
            <p className="mt-5 text-muted-foreground">{t('placeholderBody')}</p>
          </CardContent>
        </Card>
      </ContentSection>
    </WeekLayout>
  )
}
