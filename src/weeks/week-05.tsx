import { PlaceholderWeek } from '@/components/placeholder-week'
import { getWeek } from '@/content/weeks'
import type { Locale } from '@/i18n'

export default function Week05({ locale }: { locale: Locale }) {
  return <PlaceholderWeek week={getWeek('05')!} locale={locale} />
}
