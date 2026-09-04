import { PlaceholderWeek } from '@/components/placeholder-week'
import { getWeek } from '@/content/weeks'
import type { Locale } from '@/i18n'

export default function Week06({ locale }: { locale: Locale }) {
  return <PlaceholderWeek week={getWeek('06')!} locale={locale} />
}
