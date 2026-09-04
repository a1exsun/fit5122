export const WEEK_IDS = ['01', '02', '03', '04', '05', '06'] as const
export type WeekId = (typeof WEEK_IDS)[number]
export type WeekStatus = 'published' | 'placeholder'

export interface WeekDefinition {
  id: WeekId
  status: WeekStatus
  accent: string
  softAccent: string
  heroAccent: string
}

export const WEEKS: readonly WeekDefinition[] = [
  { id: '01', status: 'placeholder', accent: '#7858a6', softAccent: '#ebe3f6', heroAccent: '#d9c7ee' },
  { id: '02', status: 'published', accent: '#2f6f68', softAccent: '#d9eee9', heroAccent: '#bde6dc' },
  { id: '03', status: 'placeholder', accent: '#c75f45', softAccent: '#f7ddd5', heroAccent: '#ffd0c7' },
  { id: '04', status: 'published', accent: '#3e6f9e', softAccent: '#dfeaf3', heroAccent: '#c8def1' },
  { id: '05', status: 'published', accent: '#c88724', softAccent: '#f8e9ca', heroAccent: '#f2c65e' },
  { id: '06', status: 'published', accent: '#0b766b', softAccent: '#d9eee9', heroAccent: '#d7e76a' },
]

export const LATEST_WEEK_ID = WEEKS.filter((week) => week.status === 'published').at(-1)!.id

export function isWeekId(value: string): value is WeekId {
  return WEEK_IDS.includes(value as WeekId)
}

export function getWeek(value: string) {
  return WEEKS.find((week) => week.id === value)
}
