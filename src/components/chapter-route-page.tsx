import { useEffect } from 'react'
import { useNavigate, useParams, useSearch } from '@tanstack/react-router'
import { useTranslation } from 'react-i18next'
import { ChapterContent } from '@/components/chapter-content'
import { StudyShell } from '@/components/study-shell'
import { getChapter } from '@/content/chapters'
import { asLocale } from '@/i18n'

export function ChapterRoutePage() {
  const { chapterId } = useParams({ from: '/chapter/$chapterId' })
  const search = useSearch({ from: '/chapter/$chapterId' })
  const navigate = useNavigate({ from: '/chapter/$chapterId' })
  const { i18n, t } = useTranslation()
  const chapter = getChapter(chapterId)!
  const locale = search.lang ?? asLocale(i18n.resolvedLanguage)

  useEffect(() => {
    if (i18n.resolvedLanguage !== locale) void i18n.changeLanguage(locale)
    document.documentElement.lang = locale === 'zh' ? 'zh-CN' : 'en'
    document.title = `${t(`chapters.${chapterId}.label`)} · ${t(`chapters.${chapterId}.title`)} | FIT5122`
  }, [chapterId, i18n, locale, t])

  useEffect(() => {
    if (!search.lang) void navigate({ search: { lang: locale }, replace: true })
  }, [locale, navigate, search.lang])

  return (
    <StudyShell context={{ kind: 'chapter', item: chapter }} locale={locale}>
      <ChapterContent chapter={chapter} locale={locale} />
    </StudyShell>
  )
}
