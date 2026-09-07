import { CalendarClock } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { ChapterLayout } from '@/components/chapter-layout'
import { ContentSection } from '@/components/week-layout'
import type { ChapterDefinition } from '@/content/chapters'
import type { Locale } from '@/i18n'

export function PlaceholderChapter({ chapter, locale }: { chapter: ChapterDefinition; locale: Locale }) {
  const { t } = useTranslation()
  const title = t(`chapters.${chapter.id}.title`)
  const weeks = t(`chapters.${chapter.id}.weeks`)
  const body = locale === 'zh'
    ? `${weeks} 的 key-points 与模拟题尚未整理完成。素材完成后，这里会生成同样结构的重点、易错辨析与练习题。`
    : `The key points and practice questions for ${weeks} are not ready yet. This route will use the same exam priorities, misconception checks, and question bank once the material is available.`

  return (
    <ChapterLayout
      chapterId={chapter.id}
      locale={locale}
      eyebrow={`Chapter ${chapter.id} · ${weeks}`}
      title={title}
      subtitle={t('comingSoon')}
      summary={body}
      updated="07 Sep 2026"
      tags={[weeks, t('comingSoon')]}
      toc={[{ id: 'placeholder', label: t('comingSoon') }]}
    >
      <ContentSection id="placeholder" index="01" title={locale === 'zh' ? '考点页已预留' : 'Exam page reserved'}>
        <Card className="border-dashed bg-card/65 py-16 text-center shadow-none">
          <CardContent className="mx-auto max-w-xl px-7">
            <span className="mx-auto grid size-16 place-items-center rounded-3xl bg-[var(--week-accent-soft)] text-[var(--week-accent)]">
              <CalendarClock className="size-7" />
            </span>
            <Badge variant="outline" className="mt-6">Chapter {chapter.id} · {weeks}</Badge>
            <p className="mt-5 text-muted-foreground">{body}</p>
          </CardContent>
        </Card>
      </ContentSection>
    </ChapterLayout>
  )
}
