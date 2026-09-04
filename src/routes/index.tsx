import { createFileRoute, redirect } from '@tanstack/react-router'
import { LATEST_WEEK_ID } from '@/content/weeks'
import { validateLanguageSearch } from '@/lib/search'

export const Route = createFileRoute('/')({
  validateSearch: validateLanguageSearch,
  beforeLoad: ({ search }) => {
    throw redirect({ to: '/week/$weekId', params: { weekId: LATEST_WEEK_ID }, search })
  },
})
