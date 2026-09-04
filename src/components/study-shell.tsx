import type { ReactNode } from 'react'
import { BookOpenCheck, Languages, Printer } from 'lucide-react'
import { useNavigate } from '@tanstack/react-router'
import { useTranslation } from 'react-i18next'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { WEEKS, isWeekId, type WeekDefinition } from '@/content/weeks'
import type { Locale } from '@/i18n'

interface StudyShellProps {
  week: WeekDefinition
  locale: Locale
  children: ReactNode
}

export function StudyShell({ week, locale, children }: StudyShellProps) {
  const navigate = useNavigate({ from: '/week/$weekId' })
  const { i18n, t } = useTranslation()

  const changeWeek = (value: string) => {
    if (!isWeekId(value)) return
    void navigate({ to: '/week/$weekId', params: { weekId: value }, search: { lang: locale } })
  }

  const changeLanguage = (next: Locale) => {
    void i18n.changeLanguage(next)
    void navigate({ search: { lang: next }, replace: true })
  }

  return (
    <div className="mx-auto min-h-screen w-full max-w-[1440px] px-3 pb-16 sm:px-6 lg:px-10">
      <header data-print-hidden className="sticky top-0 z-40 flex flex-wrap items-center justify-between gap-3 border-b bg-background/88 py-3 backdrop-blur-xl">
        <div className="flex min-w-0 items-center gap-3">
          <span className="grid size-10 shrink-0 place-items-center rounded-2xl bg-primary text-primary-foreground shadow-sm">
            <BookOpenCheck className="size-5" />
          </span>
          <div className="min-w-0">
            <p className="truncate text-xs font-black uppercase tracking-[0.13em] text-muted-foreground">{t('course')}</p>
            <p className="truncate text-sm font-bold">{t('ownTime')}</p>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-end gap-2">
          <Select value={week.id} onValueChange={changeWeek}>
            <SelectTrigger aria-label={t('selectWeek')}>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {WEEKS.map((item) => (
                <SelectItem key={item.id} value={item.id}>
                  <span className="flex items-center gap-2">
                    {t(`weeks.${item.id}.label`)}
                    <Badge variant={item.status === 'published' ? 'secondary' : 'outline'} className="px-1.5 py-0 text-[10px]">
                      {t(item.status === 'published' ? 'published' : 'comingSoon')}
                    </Badge>
                  </span>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <div className="inline-flex rounded-full border bg-card/85 p-1 shadow-sm" aria-label={t('language')}>
            <Languages className="ml-2 mr-1 size-4 self-center text-muted-foreground" aria-hidden="true" />
            {(['zh', 'en'] as const).map((language) => (
              <Button
                key={language}
                type="button"
                size="sm"
                variant={locale === language ? 'default' : 'ghost'}
                aria-pressed={locale === language}
                onClick={() => changeLanguage(language)}
              >
                {language === 'zh' ? '中文' : 'EN'}
              </Button>
            ))}
          </div>

          <Button type="button" variant="outline" size="icon" aria-label={t('print')} onClick={() => window.print()}>
            <Printer className="size-4" />
          </Button>
        </div>
      </header>
      {children}
    </div>
  )
}
