import { createFileRoute, notFound } from '@tanstack/react-router'
import { WeekRoutePage } from '@/components/week-route-page'
import { isWeekId } from '@/content/weeks'
import { validateLanguageSearch } from '@/lib/search'

export const Route = createFileRoute('/week/$weekId')({
  validateSearch: validateLanguageSearch,
  beforeLoad: ({ params }) => {
    if (!isWeekId(params.weekId)) throw notFound()
  },
  component: WeekRoutePage,
})
