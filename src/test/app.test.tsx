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

  it('renders the complete Week 01 communication and AI guide', async () => {
    await renderRoute('/week/01?lang=en')
    expect(await screen.findByText('Choose the communication form first')).toBeInTheDocument()
    expect(screen.getByText('Gen-AI: use the output, not an accountability escape hatch')).toBeInTheDocument()
    expect(screen.getByText(/Self-verification is not independent verification/)).toBeInTheDocument()
    expect(screen.getAllByRole('button', { name: /^(0[1-9]|1[0-2])/ })).toHaveLength(12)
    expect(screen.getByText('Mata v. Avianca: why asking the model to verify itself failed')).toBeInTheDocument()
  })

  it('renders Chapter 01 from the Week 01 key points and quiz', async () => {
    await renderRoute('/chapter/01?lang=en')
    expect(await screen.findByText('Four high-probability exam targets')).toBeInTheDocument()
    expect(screen.getByText('Signing AI output: endorsement, not forwarding')).toBeInTheDocument()
    expect(document.querySelectorAll('#practice button')).toHaveLength(4)
    expect(screen.getByText('quiz/week01.md')).toBeInTheDocument()
  })

  it('renders Chapter 02 with all Week 02–04 priorities and practice questions', async () => {
    await renderRoute('/chapter/02?lang=en')
    expect(await screen.findByText('Three weeks, one examination logic')).toBeInTheDocument()
    expect(screen.getByText('Week 02 · Team systems and communication tools')).toBeInTheDocument()
    expect(screen.getByText('Week 03 · Conflict, leadership, and human judgement')).toBeInTheDocument()
    expect(screen.getByText('Week 04 · Cross-cultural evidence and shared protocols')).toBeInTheDocument()
    expect(document.querySelectorAll('#practice02 button, #practice03 button, #practice04 button')).toHaveLength(30)
  })

  it('renders Chapter 03 with both weeks, sources, and 20 working practice answers', async () => {
    const user = userEvent.setup()
    await renderRoute('/chapter/03?lang=en')
    expect(await screen.findByRole('heading', { name: 'Quality & Reliability' })).toBeInTheDocument()
    expect(screen.getByText('Week 05 · Quality, reliability, and professional responsibility')).toBeInTheDocument()
    expect(screen.getByText('Week 06 · Measurement, standards, and quality management')).toBeInTheDocument()
    expect(screen.getByText('Three standards: identify the evaluation object')).toBeInTheDocument()
    expect(screen.queryByText('Exam page reserved')).not.toBeInTheDocument()
    expect(screen.getAllByText(/They are not Moodle exam questions/)).toHaveLength(2)
    expect(screen.getByText('week06/own-time/transcripts/Code Quality Podcast - transcript.md')).toBeInTheDocument()
    const questions = document.querySelectorAll<HTMLButtonElement>('#practice05 button, #practice06 button')
    expect(questions).toHaveLength(20)
    for (const question of questions) {
      await user.click(question)
      expect(question).toHaveAttribute('aria-expanded', 'true')
      expect(document.getElementById(question.getAttribute('aria-controls')!)?.textContent).toMatch(/Answer:|Marking points:/)
    }
    for (const anchor of document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]')) {
      expect(document.getElementById(anchor.hash.slice(1))).not.toBeNull()
    }
  })

  it('switches Chapter 03 content and practice from Chinese to English', async () => {
    const user = userEvent.setup()
    const router = await renderRoute('/chapter/03?lang=zh')
    expect(await screen.findByText('两周，一条质量决策链')).toBeInTheDocument()
    expect(screen.getByText('Week 05 · 10 道模拟题')).toBeInTheDocument()
    expect(document.querySelectorAll('#practice05 button, #practice06 button')).toHaveLength(20)
    await user.click(screen.getByRole('button', { name: 'EN' }))
    expect(await screen.findByText('Two weeks, one quality decision chain')).toBeInTheDocument()
    expect(screen.getByText('Week 06 · 10 practice questions')).toBeInTheDocument()
    expect(screen.queryByText('两周，一条质量决策链')).not.toBeInTheDocument()
    expect(router.state.location.search.lang).toBe('en')
  })

  it('maps Week 05 and Week 06 into the published Chapter 03 and back to Week 06', async () => {
    const user = userEvent.setup()
    const router = await renderRoute('/week/05?lang=en')
    await user.click(await screen.findByRole('button', { name: 'Exam Focus' }))
    expect(await screen.findByText('Two weeks, one quality decision chain')).toBeInTheDocument()
    expect(router.state.location.pathname).toBe('/chapter/03')
    await user.click(screen.getByRole('button', { name: 'Own-time Summary' }))
    expect(await screen.findByRole('heading', { name: 'Software Quality' })).toBeInTheDocument()
    expect(router.state.location.pathname).toBe('/week/06')
    await user.click(screen.getByRole('button', { name: 'Exam Focus' }))
    expect(await screen.findByText('Two weeks, one quality decision chain')).toBeInTheDocument()
    expect(router.state.location.pathname).toBe('/chapter/03')
  })

  it('switches between the summary and exam dimensions with chapter-aware mapping', async () => {
    const user = userEvent.setup()
    const router = await renderRoute('/week/04?lang=en')
    await user.click(screen.getByRole('button', { name: 'Exam Focus' }))
    expect(await screen.findByText('Three weeks, one examination logic')).toBeInTheDocument()
    expect(router.state.location.pathname).toBe('/chapter/02')
    await user.click(screen.getByRole('button', { name: 'Own-time Summary' }))
    expect(await screen.findByText('Four-country evidence: culture matters, but not as a simple binary')).toBeInTheDocument()
    expect(router.state.location.pathname).toBe('/week/04')
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

  it('shows the shared not-found page for an invalid chapter', async () => {
    await renderRoute('/chapter/04?lang=en')
    expect(await screen.findByRole('heading', { name: 'Page not found' })).toBeInTheDocument()
  })
})
