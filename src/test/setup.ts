import '@testing-library/jest-dom/vitest'

Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: (query: string) => ({
    matches: query.includes('prefers-reduced-motion'),
    media: query,
    onchange: null,
    addListener: () => undefined,
    removeListener: () => undefined,
    addEventListener: () => undefined,
    removeEventListener: () => undefined,
    dispatchEvent: () => false,
  }),
})

window.scrollTo = () => undefined

// JSDOM has no pointer capture or layout scrolling; Radix Select uses both.
Element.prototype.hasPointerCapture = () => false
Element.prototype.scrollIntoView = () => undefined
