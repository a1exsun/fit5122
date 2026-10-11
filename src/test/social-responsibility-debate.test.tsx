/// <reference types="node" />
import { act, cleanup, fireEvent, render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { createMemoryHistory, createRouter, RouterProvider } from '@tanstack/react-router'
import { afterEach, expect, it, vi } from 'vitest'
import { existsSync } from 'node:fs'
import { routeTree } from '@/routeTree.gen'
import { debate } from '@/content/social-responsibility-debate'

afterEach(() => { cleanup(); vi.useRealTimers() })
async function renderDebate() {
  const router = createRouter({ routeTree, history: createMemoryHistory({ initialEntries: ['/chapter/social-responsibility-debate?lang=en'] }), defaultPreload: false })
  render(<RouterProvider router={router} />)
  await router.load()
  await screen.findByRole('heading', { name: 'Social Responsibility Debate' })
  return router
}

it('integrates the complete chapter, valid assets and map while retaining notes across hub language changes', async () => {
  const user = userEvent.setup()
  const router = await renderDebate()
  expect(document.querySelector('.motion-quote')?.textContent).toBe(debate.motion)
  expect(document.querySelectorAll('.debate-guide > section')).toHaveLength(18)
  expect(document.querySelector('iframe')).toBeNull()
  for (const anchor of document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]')) expect(document.getElementById(anchor.hash.slice(1))).not.toBeNull()
  for (const anchor of document.querySelectorAll<HTMLAnchorElement>('a[href^="/social-responsibility-debate/"]')) expect(existsSync(`public${anchor.pathname}`)).toBe(true)
  expect(document.querySelector('a[href*="assignment-spec.pdf"]')).toBeNull()
  const field = document.getElementById('note-aff') as HTMLTextAreaElement
  await user.type(field, 'We must test independent transfer.')
  await user.click(screen.getByRole('button', { name: '中文' }))
  await waitFor(() => expect(router.state.location.search.lang).toBe('zh'))
  expect(field).toHaveValue('We must test independent transfer.')
  await user.click(screen.getByRole('button', { name: '中英对照' }))
  expect(document.querySelector('.debate-guide')).toHaveAttribute('data-locale', 'both')
  await user.click(screen.getByRole('button', { name: /N3.*Duties remain/ }))
  expect(document.getElementById('debate-map-detail')).toHaveTextContent('Generating content does not transfer responsibility')
  await user.click(screen.getByRole('button', { name: '反方' }))
  expect(document.querySelectorAll('[data-argument-side]:not([hidden])')).toHaveLength(6)
  expect(document.querySelector('#arg-A1')).toHaveAttribute('hidden')
})

it('stops the rehearsal timer at zero and resets to the selected duration', async () => {
  await renderDebate()
  fireEvent.change(screen.getByLabelText('Speech duration'), { target: { value: '180' } })
  vi.useFakeTimers()
  fireEvent.click(screen.getByRole('button', { name: 'Start' }))
  act(() => vi.advanceTimersByTime(181000))
  expect(screen.getByLabelText('Time remaining')).toHaveTextContent('0:00')
  expect(screen.getByText('Time is up. Finish your speech.')).toBeInTheDocument()
  fireEvent.click(screen.getByRole('button', { name: 'Reset' }))
  expect(screen.getByLabelText('Time remaining')).toHaveTextContent('3:00')
})

it('offers a 40-minute, 12-segment rehearsal without changing the assessed timings', async () => {
  await renderDebate()
  expect(debate.schedule).toHaveLength(12)
  expect(debate.schedule.reduce((total, step) => total + step.seconds, 0)).toBe(2400)
  expect(debate.nodes).toHaveLength(16)
  expect(debate.arguments).toHaveLength(12)
  expect(screen.getByLabelText('Time remaining')).toHaveTextContent('1:00')
  fireEvent.click(screen.getByRole('button', { name: 'Set up two rounds' }))
  expect(screen.getByLabelText('Speech duration')).toBeDisabled()
  expect(screen.getByLabelText('Time remaining')).toHaveTextContent('4:00')
  fireEvent.change(screen.getByLabelText('Practice segment'), { target: { value: '6' } })
  expect(screen.getByLabelText('Practice segment')).toHaveValue('6')
  expect(screen.getByLabelText('Time remaining')).toHaveTextContent('4:00')
  fireEvent.click(screen.getByRole('button', { name: 'Next segment' }))
  expect(screen.getByLabelText('Practice segment')).toHaveValue('7')
  fireEvent.change(screen.getByLabelText('Practice segment'), { target: { value: '11' } })
  expect(screen.getByRole('button', { name: 'Next segment' })).toBeDisabled()
  expect(screen.getByLabelText('Time remaining')).toHaveTextContent('3:00')
  fireEvent.click(screen.getByRole('button', { name: 'Free practice' }))
  expect(screen.getByLabelText('Speech duration')).not.toBeDisabled()
  expect(screen.getByLabelText('Time remaining')).toHaveTextContent('1:00')
})
