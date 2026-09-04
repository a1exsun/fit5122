import { useEffect } from 'react'
import { useNavigate, useParams, useSearch } from '@tanstack/react-router'
import { useTranslation } from 'react-i18next'
import { StudyShell } from '@/components/study-shell'
import { WeekContent } from '@/components/week-content'
import { getWeek } from '@/content/weeks'
import { asLocale } from '@/i18n'

export function WeekRoutePage() {
  const { weekId } = useParams({ from: '/week/$weekId' })
  const search = useSearch({ from: '/week/$weekId' })
  const navigate = useNavigate({ from: '/week/$weekId' })
  const { i18n, t } = useTranslation()
  const week = getWeek(weekId)!
  const locale = search.lang ?? asLocale(i18n.resolvedLanguage)

  useEffect(() => {
    if (i18n.resolvedLanguage !== locale) void i18n.changeLanguage(locale)
    document.documentElement.lang = locale === 'zh' ? 'zh-CN' : 'en'
    document.title = `${t(`weeks.${weekId}.label`)} · ${t(`weeks.${weekId}.title`)} | FIT5122`
  }, [i18n, locale, t, weekId])

  useEffect(() => {
    if (!search.lang) void navigate({ search: { lang: locale }, replace: true })
  }, [locale, navigate, search.lang])

  return (
    <StudyShell week={week} locale={locale}>
      <WeekContent week={week} locale={locale} />
    </StudyShell>
  )
}
