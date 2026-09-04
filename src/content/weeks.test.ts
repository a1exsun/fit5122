import { describe, expect, it } from 'vitest'
import { LATEST_WEEK_ID, WEEKS, getWeek, isWeekId } from '@/content/weeks'
import { validateLanguageSearch } from '@/lib/search'

describe('week registry', () => {
  it('selects Week 06 as the latest published guide', () => {
    expect(LATEST_WEEK_ID).toBe('06')
    expect(getWeek(LATEST_WEEK_ID)?.status).toBe('published')
  })

  it('publishes Weeks 02, 04, 05, and 06 and reserves the remaining routes', () => {
    expect(WEEKS.filter((week) => week.status === 'published').map((week) => week.id)).toEqual(['02', '04', '05', '06'])
    expect(WEEKS.filter((week) => week.status === 'placeholder').map((week) => week.id)).toEqual(['01', '03'])
  })

  it('validates week ids and language search values', () => {
    expect(isWeekId('04')).toBe(true)
    expect(isWeekId('07')).toBe(false)
    expect(validateLanguageSearch({ lang: 'en' })).toEqual({ lang: 'en' })
    expect(validateLanguageSearch({ lang: 'fr' })).toEqual({})
  })
})
