import { describe, expect, it } from 'vitest'
import { CHAPTERS, getChapterForWeek, getSummaryWeekForChapter, isChapterId } from '@/content/chapters'
import { LATEST_WEEK_ID, WEEKS, getWeek, isWeekId } from '@/content/weeks'
import { validateLanguageSearch } from '@/lib/search'

describe('week registry', () => {
  it('selects Week 11 as the latest published guide', () => {
    expect(LATEST_WEEK_ID).toBe('11')
    expect(getWeek(LATEST_WEEK_ID)?.status).toBe('published')
  })

  it('publishes all eleven week guides', () => {
    expect(WEEKS.filter((week) => week.status === 'published').map((week) => week.id)).toEqual(['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11'])
    expect(WEEKS.filter((week) => week.status === 'placeholder')).toEqual([])
  })

  it('validates week ids and language search values', () => {
    expect(isWeekId('04')).toBe(true)
    expect(isWeekId('07')).toBe(true)
    expect(isWeekId('08')).toBe(true)
    expect(isWeekId('09')).toBe(true)
    expect(isWeekId('10')).toBe(true)
    expect(isWeekId('11')).toBe(true)
    expect(validateLanguageSearch({ lang: 'en' })).toEqual({ lang: 'en' })
    expect(validateLanguageSearch({ lang: 'fr' })).toEqual({})
  })

  it('maps published week guides into chapters with complete material coverage', () => {
    expect(CHAPTERS.map((chapter) => ({ id: chapter.id, weeks: chapter.weeks, status: chapter.status }))).toEqual([
      { id: '01', weeks: ['01'], status: 'published' },
      { id: '02', weeks: ['02', '03', '04'], status: 'published' },
      { id: '03', weeks: ['05', '06'], status: 'published' },
      { id: '04', weeks: ['07', '08'], status: 'published' },
      { id: '05', weeks: ['09', '10', '11'], status: 'placeholder' },
      { id: 'complex-communication', weeks: ['07', '08'], status: 'published' },
      { id: 'social-responsibility-debate', weeks: ['09', '10'], status: 'published' },
    ])
    expect(getChapterForWeek('03').id).toBe('02')
    expect(getSummaryWeekForChapter('02')).toBe('04')
    expect(isChapterId('03')).toBe(true)
    expect(isChapterId('04')).toBe(true)
    expect(isChapterId('05')).toBe(true)
    expect(getChapterForWeek('09').id).toBe('05')
    expect(getSummaryWeekForChapter('05')).toBe('11')
    expect(getChapterForWeek('10').id).toBe('05')
    expect(getChapterForWeek('11').id).toBe('05')
    expect(getChapterForWeek('07').id).toBe('04')
    expect(getSummaryWeekForChapter('04')).toBe('08')
    expect(isChapterId('social-responsibility-debate')).toBe(true)
    expect(getSummaryWeekForChapter('social-responsibility-debate')).toBe('10')
    expect(isChapterId('complex-communication')).toBe(true)
    expect(getSummaryWeekForChapter('complex-communication')).toBe('08')
    for (const week of WEEKS) expect(getChapterForWeek(week.id)).toBeDefined()
  })
})
