import { lazy, Suspense } from 'react'
import { PlaceholderChapter } from '@/components/placeholder-chapter'
import type { ChapterDefinition } from '@/content/chapters'
import type { Locale } from '@/i18n'

const Chapter01 = lazy(() => import('@/chapters/chapter-01'))
const Chapter02 = lazy(() => import('@/chapters/chapter-02'))
const Chapter03 = lazy(() => import('@/chapters/chapter-03'))
const chapterComponents = { '01': Chapter01, '02': Chapter02, '03': Chapter03 }

export function ChapterContent({ chapter, locale }: { chapter: ChapterDefinition; locale: Locale }) {
  if (chapter.status === 'placeholder') return <PlaceholderChapter chapter={chapter} locale={locale} />

  const Component = chapterComponents[chapter.id]
  return (
    <Suspense fallback={<div className="min-h-[60vh]" aria-busy="true" />}>
      <Component locale={locale} />
    </Suspense>
  )
}
