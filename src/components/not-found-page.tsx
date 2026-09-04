import { Link } from '@tanstack/react-router'
import { useTranslation } from 'react-i18next'
import { Button } from '@/components/ui/button'
import { LATEST_WEEK_ID } from '@/content/weeks'

export function NotFoundPage() {
  const { t } = useTranslation()
  return (
    <main className="grid min-h-screen place-items-center px-6">
      <div className="max-w-lg text-center">
        <p className="mb-4 text-xs font-black uppercase tracking-[0.2em] text-primary">404 · FIT5122</p>
        <h1 className="text-4xl font-black tracking-tight sm:text-6xl">{t('notFoundTitle')}</h1>
        <p className="mx-auto mt-5 max-w-md text-muted-foreground">{t('notFoundBody')}</p>
        <Button asChild className="mt-8">
          <Link to="/week/$weekId" params={{ weekId: LATEST_WEEK_ID }}>{t('backLatest')}</Link>
        </Button>
      </div>
    </main>
  )
}
