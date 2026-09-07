import { describe, expect, it } from 'vitest'
import { CHAPTERS, getChapterForWeek, getSummaryWeekForChapter, isChapterId } from '@/content/chapters'
import { LATEST_WEEK_ID, WEEKS, getWeek, isWeekId } from '@/content/weeks'
import { validateLanguageSearch } from '@/lib/search'

describe('week registry', () => {
  it('selects Week 07 as the latest published guide', () => {
    expect(LATEST_WEEK_ID).toBe('07')
    expect(getWeek(LATEST_WEEK_ID)?.status).toBe('published')
  })

  it('publishes all seven week guides', () => {
    expect(WEEKS.filter((week) => week.status === 'published').map((week) => week.id)).toEqual(['01', '02', '03', '04', '05', '06', '07'])
    expect(WEEKS.filter((week) => week.status === 'placeholder')).toEqual([])
  })

  it('validates week ids and language search values', () => {
    expect(isWeekId('04')).toBe(true)
    expect(isWeekId('07')).toBe(true)
    expect(isWeekId('08')).toBe(false)
    expect(validateLanguageSearch({ lang: 'en' })).toEqual({ lang: 'en' })
    expect(validateLanguageSearch({ lang: 'fr' })).toEqual({})
  })

  it('maps every week into a published chapter or the Chapter 04 placeholder', () => {
    expect(CHAPTERS.map((chapter) => ({ id: chapter.id, weeks: chapter.weeks, status: chapter.status }))).toEqual([
      { id: '01', weeks: ['01'], status: 'published' },
      { id: '02', weeks: ['02', '03', '04'], status: 'published' },
      { id: '03', weeks: ['05', '06'], status: 'published' },
      { id: '04', weeks: ['07'], status: 'placeholder' },
    ])
    expect(getChapterForWeek('03').id).toBe('02')
    expect(getSummaryWeekForChapter('02')).toBe('04')
    expect(isChapterId('03')).toBe(true)
    expect(isChapterId('04')).toBe(true)
    expect(isChapterId('05')).toBe(false)
    expect(getChapterForWeek('07').id).toBe('04')
    expect(getSummaryWeekForChapter('04')).toBe('07')
    for (const week of WEEKS) expect(getChapterForWeek(week.id)).toBeDefined()
  })
})
