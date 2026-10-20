import { cleanup, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { createMemoryHistory, createRouter, RouterProvider } from '@tanstack/react-router'
import { afterEach, describe, expect, it } from 'vitest'
import '@/i18n'
import { routeTree } from '@/routeTree.gen'

afterEach(cleanup)

async function renderRoute(path: string) {
  const history = createMemoryHistory({ initialEntries: [path] })
  const router = createRouter({ routeTree, history, defaultPreload: false })
  render(<RouterProvider router={router} />)
  await router.load()
  return router
}

describe('Week 12 Own-time Summary', () => {
  it.each(['zh', 'en'] as const)('renders complete material coverage and usable self-checks in %s', async locale => {
    const user = userEvent.setup()
    await renderRoute(`/week/12?lang=${locale}`)
    expect(await screen.findByRole('heading', { name: 'Lifelong Learning and Cover Letters', level: 1 })).toBeInTheDocument()
    expect(document.title).not.toContain('weeks.12')
    expect(document.querySelectorAll('#sources h3')).toHaveLength(8)
    expect(document.querySelectorAll('#robot-curve tbody tr')).toHaveLength(7)
    expect(document.querySelectorAll('#research tbody tr')).toHaveLength(8)
    expect(document.getElementById('recipe')).toHaveTextContent('Reece')
    expect(document.getElementById('sources')).toHaveTextContent(locale === 'zh' ? '自动转录' : 'automatically transcribed')
    for (const anchor of document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]')) {
      expect(document.getElementById(anchor.hash.slice(1))).not.toBeNull()
    }
    const questions = document.querySelectorAll<HTMLButtonElement>('#review button')
    expect(questions).toHaveLength(16)
    for (const question of questions) {
      await user.click(question)
      expect(question).toHaveAttribute('aria-expanded', 'true')
      expect(document.getElementById(question.getAttribute('aria-controls')!)?.textContent?.length).toBeGreaterThan(30)
    }
  })

  it('links the Exam Focus view to the reserved Chapter 06 page', async () => {
    const user = userEvent.setup()
    const router = await renderRoute('/week/12?lang=zh')
    await user.click(await screen.findByRole('button', { name: '考点整理' }))
    expect(await screen.findByRole('heading', { name: '考点页已预留' })).toBeInTheDocument()
    expect(router.state.location.pathname).toBe('/chapter/06')
  })
})
