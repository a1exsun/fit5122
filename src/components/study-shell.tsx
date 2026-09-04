import type { ReactNode } from 'react'
import { BookOpenCheck, Languages, NotebookTabs, Printer, Target } from 'lucide-react'
import { useNavigate } from '@tanstack/react-router'
import { useTranslation } from 'react-i18next'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { CHAPTERS, getChapterForWeek, getSummaryWeekForChapter, isChapterId, type ChapterDefinition } from '@/content/chapters'
import { WEEKS, isWeekId, type WeekDefinition } from '@/content/weeks'
import type { Locale } from '@/i18n'

type StudyContext =
  | { kind: 'week'; item: WeekDefinition }
  | { kind: 'chapter'; item: ChapterDefinition }

interface StudyShellProps {
  context: StudyContext
  locale: Locale
  children: ReactNode
}

export function StudyShell({ context, locale, children }: StudyShellProps) {
  const navigate = useNavigate()
  const { i18n, t } = useTranslation()
  const isOwnTime = context.kind === 'week'

  const changeSelection = (value: string) => {
    if (isOwnTime && isWeekId(value)) {
      void navigate({ to: '/week/$weekId', params: { weekId: value }, search: { lang: locale } })
    } else if (!isOwnTime && isChapterId(value)) {
      void navigate({ to: '/chapter/$chapterId', params: { chapterId: value }, search: { lang: locale } })
    }
  }

  const changeView = (view: 'summary' | 'exam') => {
    if (view === 'exam' && context.kind === 'week') {
      const chapter = getChapterForWeek(context.item.id)
      void navigate({ to: '/chapter/$chapterId', params: { chapterId: chapter.id }, search: { lang: locale } })
    } else if (view === 'summary' && context.kind === 'chapter') {
      const weekId = getSummaryWeekForChapter(context.item.id)
      void navigate({ to: '/week/$weekId', params: { weekId }, search: { lang: locale } })
    }
  }

  const changeLanguage = (next: Locale) => {
    void i18n.changeLanguage(next)
    if (context.kind === 'week') {
      void navigate({ to: '/week/$weekId', params: { weekId: context.item.id }, search: { lang: next }, replace: true })
    } else {
      void navigate({ to: '/chapter/$chapterId', params: { chapterId: context.item.id }, search: { lang: next }, replace: true })
    }
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
            <p className="truncate text-sm font-bold">{t('studyHub')}</p>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-end gap-2">
          <div className="inline-flex rounded-full border bg-card/85 p-1 shadow-sm" role="group" aria-label={t('viewMode')}>
            <Button type="button" size="sm" variant={isOwnTime ? 'default' : 'ghost'} aria-pressed={isOwnTime} onClick={() => changeView('summary')}>
              <NotebookTabs className="size-4" />
              {t('ownTime')}
            </Button>
            <Button type="button" size="sm" variant={isOwnTime ? 'ghost' : 'default'} aria-pressed={!isOwnTime} onClick={() => changeView('exam')}>
              <Target className="size-4" />
              {t('examFocus')}
            </Button>
          </div>

          <Select value={context.item.id} onValueChange={changeSelection}>
            <SelectTrigger aria-label={t(isOwnTime ? 'selectWeek' : 'selectChapter')}>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {(isOwnTime ? WEEKS : CHAPTERS).map((item) => (
                <SelectItem key={item.id} value={item.id}>
                  <span className="flex items-center gap-2">
                    {t(`${isOwnTime ? 'weeks' : 'chapters'}.${item.id}.label`)}
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
