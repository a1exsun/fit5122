import type { WeekId } from '@/content/weeks'

export const CHAPTER_IDS = ['01', '02', '03'] as const
export type ChapterId = (typeof CHAPTER_IDS)[number]
export type ChapterStatus = 'published' | 'placeholder'

export interface ChapterDefinition {
  id: ChapterId
  status: ChapterStatus
  weeks: readonly WeekId[]
  accent: string
  softAccent: string
  heroAccent: string
}

export const CHAPTERS: readonly ChapterDefinition[] = [
  { id: '01', status: 'published', weeks: ['01'], accent: '#7858a6', softAccent: '#ebe3f6', heroAccent: '#d9c7ee' },
  { id: '02', status: 'published', weeks: ['02', '03', '04'], accent: '#356c78', softAccent: '#dcecef', heroAccent: '#a9d5dd' },
  { id: '03', status: 'published', weeks: ['05', '06'], accent: '#b96b25', softAccent: '#f7e5d1', heroAccent: '#f3c78f' },
]

export function isChapterId(value: string): value is ChapterId {
  return CHAPTER_IDS.includes(value as ChapterId)
}

export function getChapter(value: string) {
  return CHAPTERS.find((chapter) => chapter.id === value)
}

export function getChapterForWeek(weekId: WeekId) {
  return CHAPTERS.find((chapter) => chapter.weeks.includes(weekId))!
}

export function getSummaryWeekForChapter(chapterId: ChapterId) {
  return getChapter(chapterId)!.weeks.at(-1)!
}
