import { createFileRoute, notFound } from '@tanstack/react-router'
import { ChapterRoutePage } from '@/components/chapter-route-page'
import { isChapterId } from '@/content/chapters'
import { validateLanguageSearch } from '@/lib/search'

export const Route = createFileRoute('/chapter/$chapterId')({
  validateSearch: validateLanguageSearch,
  beforeLoad: ({ params }) => {
    if (!isChapterId(params.chapterId)) throw notFound()
  },
  component: ChapterRoutePage,
})
