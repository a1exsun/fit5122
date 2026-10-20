import { lazy, Suspense } from 'react'
import { PlaceholderChapter } from '@/components/placeholder-chapter'
import type { ChapterDefinition } from '@/content/chapters'
import type { Locale } from '@/i18n'

const Chapter01 = lazy(() => import('@/chapters/chapter-01'))
const Chapter02 = lazy(() => import('@/chapters/chapter-02'))
const Chapter03 = lazy(() => import('@/chapters/chapter-03'))
const Chapter04 = lazy(() => import('@/chapters/chapter-04'))
const Chapter05 = lazy(() => import('@/chapters/chapter-05'))
const ComplexCommunication = lazy(() => import('@/chapters/complex-communication'))
const SocialResponsibilityDebate = lazy(() => import('@/chapters/social-responsibility-debate'))
const chapterComponents = { '01': Chapter01, '02': Chapter02, '03': Chapter03, '04': Chapter04, '05': Chapter05, 'complex-communication': ComplexCommunication, 'social-responsibility-debate': SocialResponsibilityDebate }

export function ChapterContent({ chapter, locale }: { chapter: ChapterDefinition; locale: Locale }) {
  if (chapter.status !== 'published') return <PlaceholderChapter chapter={chapter} locale={locale} />

  const Component = chapterComponents[chapter.id]
  return (
    <Suspense fallback={<div className="min-h-[60vh]" aria-busy="true" />}>
      <Component locale={locale} />
    </Suspense>
  )
}
