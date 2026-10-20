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

describe('Week 11 Own-time Summary', () => {
  it.each(['zh', 'en'] as const)('renders complete material coverage and usable self-checks in %s', async locale => {
    const user = userEvent.setup()
    await renderRoute(`/week/11?lang=${locale}`)
    expect(await screen.findByRole('heading', { name: 'Privacy and Profiling', level: 1 })).toBeInTheDocument()
    expect(document.title).not.toContain('weeks.11')
    expect(document.querySelectorAll('#sources h3')).toHaveLength(13)
    expect(document.querySelectorAll('#technologies tbody tr')).toHaveLength(5)
    expect(document.querySelectorAll('#reasoning tbody tr')).toHaveLength(10)
    expect(document.getElementById('reidentification')).toHaveTextContent('Myki')
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

  it('selects Week 11 from the week picker and switches language', async () => {
    const user = userEvent.setup()
    const router = await renderRoute('/week/10?lang=en')
    await user.click(await screen.findByRole('combobox', { name: 'Select week' }))
    await user.click(screen.getByRole('option', { name: /Week 11/ }))
    expect(await screen.findByText('From “can we build it?” to “should we, and how?”')).toBeInTheDocument()
    await user.click(screen.getByRole('button', { name: '中文' }))
    expect(await screen.findByText('从“能不能建”到“该不该建、怎样建”')).toBeInTheDocument()
    expect(router.state.location.pathname).toBe('/week/11')
  })
})
