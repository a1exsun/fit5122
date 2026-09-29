import type { ReactNode } from 'react'
import { useTranslation } from 'react-i18next'
import { GuideLayout, type TocItem } from '@/components/week-layout'
import { getChapter, type ChapterId } from '@/content/chapters'
import type { Locale } from '@/i18n'

interface ChapterLayoutProps {
  chapterId: ChapterId
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

export function ChapterLayout({ chapterId, locale, eyebrow, title, subtitle, summary, updated, tags, toc, children }: ChapterLayoutProps) {
  const { t } = useTranslation()
  const chapter = getChapter(chapterId)!

  return (
    <GuideLayout
      animationKey={`chapter-${chapterId}`}
      locale={locale}
      palette={chapter}
      eyebrow={eyebrow}
      title={title}
      subtitle={subtitle}
      summary={summary}
      updated={updated}
      tags={tags}
      toc={toc}
      footerPrimary={`FIT5122 · ${t(`chapters.${chapterId}.label`)} · Exam Focus`}
      footerSecondary={chapterId === 'complex-communication'
        ? (locale === 'zh' ? '规格原文 · 课程知识 · 真实案例模拟' : 'Assessment brief · Course concepts · Real incident simulations')
        : (locale === 'zh' ? '基于 key-points 与模拟题 · 双语复习页' : 'Based on key points and practice questions · Bilingual review')}
      contentsLabel={t('contents')}
    >
      {children}
    </GuideLayout>
  )
}
