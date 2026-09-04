import { PlaceholderWeek } from '@/components/placeholder-week'
import { getWeek } from '@/content/weeks'
import type { Locale } from '@/i18n'

export default function Week02({ locale }: { locale: Locale }) {
  return <PlaceholderWeek week={getWeek('02')!} locale={locale} />
}
