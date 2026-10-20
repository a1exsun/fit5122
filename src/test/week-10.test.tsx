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

describe('Week 10 Own-time Summary', () => {
  it.each(['zh', 'en'] as const)('renders complete material coverage and usable self-checks in %s', async locale => {
    const user = userEvent.setup()
    await renderRoute(`/week/10?lang=${locale}`)
    expect(await screen.findByRole('heading', { name: 'Professional Responsibility', level: 1 })).toBeInTheDocument()
    expect(document.documentElement.lang).toBe(locale === 'zh' ? 'zh-CN' : 'en')
    expect(document.title).not.toContain('weeks.10')
    expect(document.querySelectorAll('#sources h3')).toHaveLength(18)
    expect(document.querySelectorAll('#privacy tbody tr')).toHaveLength(13)
    expect(document.querySelectorAll('#acs tbody tr')).toHaveLength(6)
    expect(document.querySelectorAll('#ai tbody tr')).toHaveLength(8)
    expect(document.getElementById('cases')).toHaveTextContent('PunkSpider')
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

  it('selects Week 10, changes language and opens its chapter latest summary', async () => {
    const user = userEvent.setup()
    const router = await renderRoute('/week/08?lang=en')
    await user.click(await screen.findByRole('combobox', { name: 'Select week' }))
    await user.click(screen.getByRole('option', { name: /Week 10/ }))
    expect(await screen.findByText('Move from what we can do to what we ought to do')).toBeInTheDocument()
    await user.click(screen.getByRole('button', { name: '中文' }))
    expect(await screen.findByText('从“能做什么”走向“应该怎样做”')).toBeInTheDocument()
    expect(router.state.location.pathname).toBe('/week/10')
    expect(router.state.location.search.lang).toBe('zh')
    await user.click(screen.getByRole('button', { name: '考点整理' }))
    expect(await screen.findByRole('heading', { name: '考点页已预留' })).toBeInTheDocument()
    expect(router.state.location.pathname).toBe('/chapter/05')
    await user.click(screen.getByRole('button', { name: 'Own-time 摘要' }))
    expect(await screen.findByRole('heading', { name: 'Privacy and Profiling', level: 1 })).toBeInTheDocument()
    expect(router.state.location.pathname).toBe('/week/11')
    expect(router.state.location.search.lang).toBe('zh')
  })
})
