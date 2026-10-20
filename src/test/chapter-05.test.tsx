import { cleanup, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it } from 'vitest'
import '@/i18n'
import Chapter05 from '@/chapters/chapter-05'

afterEach(cleanup)

describe('Chapter 05 exam focus', () => {
  it.each(['zh', 'en'] as const)('renders sections, practice groups and working anchors in %s', locale => {
    render(<Chapter05 locale={locale} />)
    expect(screen.getByRole('heading', { name: 'The Law, Ethics & Privacy', level: 1 })).toBeInTheDocument()
    for (const id of ['map', 'ip', 'copyright', 'licences', 'data', 'law', 'rca', 'ethics', 'acs', 'privacy', 'rawls', 'practice-data', 'readings', 'coi', 'tutorials', 'traps', 'method']) {
      expect(document.getElementById(id)?.textContent?.length).toBeGreaterThan(200)
    }
    for (const id of ['practice09', 'practice10', 'practice11']) expect(document.querySelectorAll(`#${id} button`)).toHaveLength(12)
    expect(document.querySelectorAll('#critical button')).toHaveLength(6)
    for (const anchor of document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]')) {
      expect(document.getElementById(anchor.hash.slice(1))).not.toBeNull()
    }
  })
})
