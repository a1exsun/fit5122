import { act, render, screen, waitFor } from '@testing-library/react'
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
    expect(await screen.findByRole('heading', { name: 'Lifelong Learning and Cover Letters' })).toBeInTheDocument()
    expect(router.state.location.pathname).toBe('/week/12')
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
    await renderRoute('/chapter/99?lang=en')
    expect(await screen.findByRole('heading', { name: 'Page not found' })).toBeInTheDocument()
  })

  it('renders Week 07 with complete learning coverage and twelve working self-checks', async () => {
    const user = userEvent.setup()
    await renderRoute('/week/07?lang=en')
    expect(await screen.findByText('Three models, three diagnostic lenses')).toBeInTheDocument()
    expect(screen.getByText('Empathy Forecast: Before → After → Bridge')).toBeInTheDocument()
    expect(screen.getByText('Eleven barriers to listening')).toBeInTheDocument()
    expect(screen.getByText('False dilemma')).toBeInTheDocument()
    expect(screen.getByText('Audio summary transcription pending')).toBeInTheDocument()
    expect(screen.getByText(/not Moodle quiz questions or exam predictions/)).toBeInTheDocument()
    expect(document.querySelectorAll('#sources h3')).toHaveLength(12)
    expect(document.querySelectorAll('#listening tbody tr')).toHaveLength(14)
    const questions = document.querySelectorAll<HTMLButtonElement>('#review button')
    expect(questions).toHaveLength(12)
    for (const question of questions) {
      await user.click(question)
      expect(question).toHaveAttribute('aria-expanded', 'true')
      expect(document.getElementById(question.getAttribute('aria-controls')!)?.textContent?.length).toBeGreaterThan(30)
    }
    for (const anchor of document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]')) {
      expect(document.getElementById(anchor.hash.slice(1))).not.toBeNull()
    }
  })

  it('switches Week 07 language, visits Chapter 04 and returns to the published weekly guide', async () => {
    const user = userEvent.setup()
    const router = await renderRoute('/week/07?lang=zh')
    expect(await screen.findByText('理解受众，再设计信息')).toBeInTheDocument()
    await user.click(screen.getByRole('button', { name: 'EN' }))
    expect(await screen.findByText('Understand the audience before designing the message')).toBeInTheDocument()
    expect(screen.queryByText('理解受众，再设计信息')).not.toBeInTheDocument()
    expect(router.state.location.search.lang).toBe('en')
    await user.click(screen.getByRole('button', { name: 'Exam Focus' }))
    expect(await screen.findByRole('heading', { name: 'Complex Communication' })).toBeInTheDocument()
    expect(router.state.location.pathname).toBe('/chapter/04')
    expect(document.querySelectorAll('#practice07 button, #practice08 button, #critical button')).toHaveLength(42)
    await user.click(screen.getByRole('button', { name: '中文' }))
    expect(await screen.findByRole('heading', { name: '复习地图：借鉴 official 的考法' })).toBeInTheDocument()
    await user.click(screen.getByRole('button', { name: 'Own-time 摘要' }))
    expect(await screen.findByText('先确定希望受众做什么')).toBeInTheDocument()
    expect(router.state.location.pathname).toBe('/week/08')
    expect(router.state.location.search.lang).toBe('zh')
  })

  it.each(['zh', 'en'] as const)('renders complete Chapter 04 content and working answers in %s', async (locale) => {
    const user = userEvent.setup()
    await renderRoute(`/chapter/04?lang=${locale}`)
    expect(await screen.findByRole('heading', { name: 'Complex Communication' })).toBeInTheDocument()
    expect(screen.getByText('Chapter 04 · Weeks 07–08')).toBeInTheDocument()
    expect(document.querySelectorAll('main section')).not.toHaveLength(0)
    for (const id of ['models', 'listening', 'questions', 'empathy', 'structures', 'video', 'planning', 'pitch', 'reports', 'email', 'visuals', 'evidence', 'tutorials', 'workshop', 'traps', 'method', 'sources']) {
      expect(document.getElementById(id)).not.toBeNull()
    }
    const questions = document.querySelectorAll<HTMLButtonElement>('#practice07 button, #practice08 button, #critical button')
    expect(questions).toHaveLength(42)
    expect(document.querySelectorAll('#practice07 button')).toHaveLength(18)
    expect(document.querySelectorAll('#practice08 button')).toHaveLength(18)
    expect(document.querySelectorAll('#critical button')).toHaveLength(6)
    const workshop = document.getElementById('workshop')!
    expect(workshop).toHaveTextContent(locale === 'zh' ? '60 秒以内' : '60 seconds or less')
    for (const product of ['Single-Sock GPS Tracker', 'Solar-Powered Night Light', 'Bluetooth-Enabled Banana', '5G-Connected Emotional Support Pet Rock', 'Mute Button for Real Life']) {
      expect(workshop).toHaveTextContent(product)
    }
    const tutorials = document.getElementById('tutorials')!
    for (const week of ['W07', 'W08']) {
      for (let question = 1; question <= 4; question++) expect(tutorials).toHaveTextContent(`${week} Q${question}`)
    }
    expect(tutorials).toHaveTextContent('W07 PDF Q4')
    expect(document.getElementById('visuals')).toHaveTextContent('histogram')
    const multipleSelections = Array.from(questions).filter(question => /^(多选|Select all that apply)/.test(question.textContent!.replace(/^\d+/, '')))
    expect(multipleSelections).toHaveLength(8)
    for (const question of questions) {
      await user.click(question)
      expect(question).toHaveAttribute('aria-expanded', 'true')
      const answer = document.getElementById(question.getAttribute('aria-controls')!)?.textContent
      expect(answer).toMatch(locale === 'zh' ? /^(答案：|参考答案：)/ : /^(Answer:|Worked answer:)/)
      expect(answer!.length).toBeGreaterThan(30)
    }
    for (const anchor of document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]')) {
      expect(document.getElementById(anchor.hash.slice(1))).not.toBeNull()
    }
    expect(screen.getByText(/quiz\/chapter01-official.md/)).toBeInTheDocument()
    expect(screen.getByText(/quiz\/chapter03-official.md/)).toBeInTheDocument()
    expect(screen.getByText(/week08\/real-time\/Week 8 Real-time Activities.md/)).toBeInTheDocument()
    expect(document.getElementById('method')).toHaveTextContent('40%')
    expect(document.getElementById('sources')).not.toHaveTextContent(locale === 'zh' ? '本地只有 own-time' : 'Only Week08 own-time material')
    expect(screen.getAllByText(locale === 'zh' ? /不是 Moodle 官方题/ : /not Moodle official questions/)).toHaveLength(3)
  })

  it('offers Week 07 in the week menu and Chapter 04 in the chapter menu', async () => {
    const user = userEvent.setup()
    const router = await renderRoute('/week/06?lang=en')
    await user.click(await screen.findByRole('combobox', { name: 'Select week' }))
    await user.click(screen.getByRole('option', { name: /Week 07/ }))
    expect(await screen.findByRole('heading', { name: 'Effective Communication' })).toBeInTheDocument()
    expect(router.state.location.pathname).toBe('/week/07')
    await user.click(screen.getByRole('button', { name: 'Exam Focus' }))
    expect(await screen.findByRole('heading', { name: 'Complex Communication' })).toBeInTheDocument()
    await user.click(screen.getByRole('combobox', { name: 'Select chapter' }))
    expect(screen.getByRole('option', { name: /Chapter 04.*Published/ })).toBeInTheDocument()
  })

  it.each(['zh', 'en'] as const)('renders Week 08 sources, anchors and working self-checks in %s', async (locale) => {
    const user = userEvent.setup()
    await renderRoute(`/week/08?lang=${locale}`)
    expect(await screen.findByRole('heading', { name: 'Business Communication' })).toBeInTheDocument()
    for (const id of ['planning', 'channels', 'reports', 'pitch', 'email', 'visuals', 'charts', 'data', 'etiquette']) {
      expect(document.getElementById(id)?.textContent?.length).toBeGreaterThan(100)
    }
    expect(document.querySelectorAll('#sources h3')).toHaveLength(13)
    expect(screen.getByText(locale === 'zh' ? '音频摘要待转录' : 'Audio summary transcription pending')).toBeInTheDocument()
    const questions = document.querySelectorAll<HTMLButtonElement>('#review button')
    expect(questions).toHaveLength(12)
    for (const question of questions) {
      await user.click(question)
      expect(question).toHaveAttribute('aria-expanded', 'true')
      expect(document.getElementById(question.getAttribute('aria-controls')!)?.textContent?.length).toBeGreaterThan(30)
    }
    for (const anchor of document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]')) {
      expect(document.getElementById(anchor.hash.slice(1))).not.toBeNull()
    }
  })

  it('selects Week 08 and switches its language while preserving the route', async () => {
    const user = userEvent.setup()
    const router = await renderRoute('/week/07?lang=en')
    await user.click(await screen.findByRole('combobox', { name: 'Select week' }))
    await user.click(screen.getByRole('option', { name: /Week 08/ }))
    expect(await screen.findByText('Start with the action your audience needs to take')).toBeInTheDocument()
    await user.click(screen.getByRole('button', { name: '中文' }))
    expect(await screen.findByText('先确定希望受众做什么')).toBeInTheDocument()
    expect(screen.queryByText('Start with the action your audience needs to take')).not.toBeInTheDocument()
    expect(router.state.location.pathname).toBe('/week/08')
    expect(router.state.location.search.lang).toBe('zh')
  })

  it('opens the standalone assessment from the chapter menu without replacing Chapter 04', async () => {
    const user = userEvent.setup()
    const router = await renderRoute('/chapter/04?lang=zh')
    await user.click(await screen.findByRole('combobox', { name: '选择章节' }))
    await user.click(screen.getByRole('option', { name: /Complex Communication/ }))
    expect(await screen.findByRole('heading', { name: '规格原文 · 五页完整保留' })).toBeInTheDocument()
    expect(router.state.location.pathname).toBe('/chapter/complex-communication')
    await user.click(screen.getByRole('button', { name: 'EN' }))
    expect(await screen.findByRole('heading', { name: 'Original specification · all five pages' })).toBeInTheDocument()
    expect(router.state.location.pathname).toBe('/chapter/complex-communication')
    expect(router.state.location.search.lang).toBe('en')
    await user.click(screen.getByRole('button', { name: 'Own-time Summary' }))
    expect(await screen.findByRole('heading', { name: 'Business Communication' })).toBeInTheDocument()
    expect(router.state.location.pathname).toBe('/week/08')
  })

  it.each(['zh', 'en'] as const)('makes all filled assessment templates accessible and printable in %s', async locale => {
    const user = userEvent.setup()
    await renderRoute(`/chapter/complex-communication?lang=${locale}`)
    expect(await screen.findByRole('heading', { name: 'Complex Communication', level: 1 })).toBeInTheDocument()
    const details = () => [...document.querySelectorAll<HTMLDetailsElement>('[data-stakeholder]')]
    expect(details()).toHaveLength(18)
    expect(document.querySelectorAll('#specification img')).toHaveLength(5)
    expect(screen.getByRole('link', { name: /完整规格 PDF|complete specification PDF/ })).toHaveAttribute('href', '/complex-communication/specification.pdf')
    await user.click(screen.getByRole('button', { name: /展开全部 18|Expand all 18/ }))
    await waitFor(() => expect(details().every(d => d.open)).toBe(true))
    for (const detail of details()) {
      expect(detail.querySelectorAll('[data-completed-template] dt')).toHaveLength(6)
      expect(detail.querySelectorAll('tbody tr')).toHaveLength(6)
    }
    await user.click(screen.getByRole('button', { name: /收起全部模板|Collapse all templates/ }))
    await waitFor(() => expect(details().every(d => !d.open)).toBe(true))
    await user.click(details()[0].querySelector('summary')!)
    await waitFor(() => expect(details()[0].open).toBe(true))
    act(() => window.dispatchEvent(new Event('beforeprint')))
    await waitFor(() => expect(details().every(d => d.open)).toBe(true))
    for (const anchor of document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]')) {
      expect(document.getElementById(anchor.hash.slice(1))).not.toBeNull()
    }
  })

  it.each(['zh', 'en'] as const)('renders Week 09 with sources, anchors and working answers in %s', async locale => {
    const user = userEvent.setup()
    await renderRoute(`/week/09?lang=${locale}`)
    expect(await screen.findByRole('heading', { name: 'IP, Open Data & RCA' })).toBeInTheDocument()
    for (const id of ['ip', 'copyright', 'fair-dealing', 'licences', 'privacy-ai', 'open-data', 'law', 'rca', 'rca-tools']) {
      expect(document.getElementById(id)?.textContent?.length).toBeGreaterThan(100)
    }
    expect(document.querySelectorAll('#sources .grid h3')).toHaveLength(11)
    expect(screen.getByText(locale === 'zh' ? '短音频待转录' : 'Short audio transcription pending')).toBeInTheDocument()
    const questions = document.querySelectorAll<HTMLButtonElement>('#review button')
    expect(questions).toHaveLength(12)
    for (const question of questions) {
      await user.click(question)
      expect(question).toHaveAttribute('aria-expanded', 'true')
      expect(document.getElementById(question.getAttribute('aria-controls')!)?.textContent?.length).toBeGreaterThan(30)
    }
    for (const anchor of document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]')) {
      expect(document.getElementById(anchor.hash.slice(1))).not.toBeNull()
    }
  })

  it('selects Week 09, switches language and opens its chapter’s latest summary', async () => {
    const user = userEvent.setup()
    const router = await renderRoute('/week/08?lang=en')
    await user.click(await screen.findByRole('combobox', { name: 'Select week' }))
    await user.click(screen.getByRole('option', { name: /Week 09/ }))
    expect(await screen.findByText('This week: permission, trust and accountability')).toBeInTheDocument()
    await user.click(screen.getByRole('button', { name: '中文' }))
    expect(await screen.findByText('本周主线：有权使用、值得信赖、能够负责')).toBeInTheDocument()
    expect(router.state.location.pathname).toBe('/week/09')
    expect(router.state.location.search.lang).toBe('zh')
    await user.click(screen.getByRole('button', { name: '考点整理' }))
    expect(await screen.findByRole('heading', { name: 'Week09 · 知识产权：区分保护对象' })).toBeInTheDocument()
    expect(router.state.location.pathname).toBe('/chapter/05')
    await user.click(screen.getByRole('button', { name: 'Own-time 摘要' }))
    expect(await screen.findByRole('heading', { name: 'Privacy and Profiling' })).toBeInTheDocument()
    expect(router.state.location.pathname).toBe('/week/11')
    expect(router.state.location.search.lang).toBe('zh')
  })

})
