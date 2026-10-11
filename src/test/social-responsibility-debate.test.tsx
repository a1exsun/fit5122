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
  expect(document.querySelectorAll('.debate-guide > section')).toHaveLength(15)
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
  await user.click(screen.getByRole('button', { name: /N3.*Responsibility retained/ }))
  expect(document.getElementById('debate-map-detail')).toHaveTextContent('new uncertainty')
  await user.click(screen.getByRole('button', { name: '反方' }))
  expect(document.querySelectorAll('[data-argument-side]:not([hidden])')).toHaveLength(3)
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
