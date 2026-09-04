import type { Locale } from '@/i18n'

export interface LanguageSearch {
  lang?: Locale
}

export function validateLanguageSearch(search: Record<string, unknown>): LanguageSearch {
  return search.lang === 'zh' || search.lang === 'en' ? { lang: search.lang } : {}
}
