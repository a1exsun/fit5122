import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { createMemoryHistory, createRouter, RouterProvider } from '@tanstack/react-router'
import { afterEach, describe, expect, it } from 'vitest'
import { cleanup } from '@testing-library/react'
import i18n from '@/i18n'
import { routeTree } from '@/routeTree.gen'

afterEach(() => {
  cleanup()
})

async function renderRoute(path: string) {
  const history = createMemoryHistory({ initialEntries: [path] })
  const router = createRouter({ routeTree, history, defaultPreload: false })
  render(<RouterProvider router={router} />)
  await router.load()
  return router
}

describe('study hub routes', () => {
  it('redirects the root route to the latest published week', async () => {
    const router = await renderRoute('/?lang=zh')
    expect(await screen.findByRole('heading', { name: 'Software Quality' })).toBeInTheDocument()
    expect(router.state.location.pathname).toBe('/week/06')
  })

  it('renders a bilingual placeholder for an unpublished week', async () => {
    await renderRoute('/week/01?lang=en')
    expect(await screen.findByRole('heading', { name: 'Meetings, Presentations & Responsible AI' })).toBeInTheDocument()
    expect(screen.getByText('This week’s study guide is on the way')).toBeInTheDocument()
  })

  it('switches a published guide from Chinese to English', async () => {
    const user = userEvent.setup()
    const router = await renderRoute('/week/05?lang=zh')
    expect(await screen.findByText('先记住这一条主线')).toBeInTheDocument()
    await user.click(screen.getByRole('button', { name: 'EN' }))
    expect(await screen.findByText('Remember this one storyline')).toBeInTheDocument()
    expect(router.state.location.search.lang).toBe('en')
    expect(i18n.resolvedLanguage).toBe('en')
  })

  it('preserves migrated Week 02 quiz coverage', async () => {
    await renderRoute('/week/02?lang=en')
    expect(await screen.findByText('Quiz Ready: likely question patterns')).toBeInTheDocument()
    expect(screen.getAllByRole('button', { name: /^(0[1-9]|1[0-3])/ })).toHaveLength(13)
  })

  it('renders the complete Week 03 leadership and conflict guide', async () => {
    await renderRoute('/week/03?lang=en')
    expect(await screen.findByText('Thomas-Kilmann: two axes, five modes')).toBeInTheDocument()
    expect(screen.getByText('Culture and time: one deadline, different mental models')).toBeInTheDocument()
    expect(screen.getByText(/enforce a security freeze/)).toBeInTheDocument()
    expect(screen.getAllByRole('button', { name: /^(0[1-9]|10)/ })).toHaveLength(10)
    expect(screen.getByRole('img', { name: 'IT leadership and conflict mastery blueprint' })).toBeInTheDocument()
  })

  it('renders the complete Week 04 evidence and self-checks', async () => {
    await renderRoute('/week/04?lang=en')
    expect(await screen.findByText('Four-country evidence: culture matters, but not as a simple binary')).toBeInTheDocument()
    expect(screen.getByText('Total sample N = 1,792')).toBeInTheDocument()
    expect(screen.getByText(/India first, Ireland second, Thailand third/)).toBeInTheDocument()
    expect(screen.getAllByRole('button', { name: /^(0[1-9]|10)/ })).toHaveLength(10)
    expect(screen.getByRole('img', { name: 'Roadmap for multicultural success in global IT teams' })).toBeInTheDocument()
  })

  it('includes the newly available Week 06 podcast content', async () => {
    await renderRoute('/week/06?lang=en')
    expect(await screen.findByText('Podcast · Protect the flow')).toBeInTheDocument()
    expect(screen.getByText(/Cyclomatic complexity and structural analysis/)).toBeInTheDocument()
    expect(screen.getAllByRole('button', { name: /^(0[1-8])/ })).toHaveLength(8)
  })

  it('shows the shared not-found page for an invalid week', async () => {
    await renderRoute('/week/99?lang=en')
    expect(await screen.findByRole('heading', { name: 'Page not found' })).toBeInTheDocument()
  })
})
