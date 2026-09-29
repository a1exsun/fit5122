import { describe, expect, it } from 'vitest'
import { incidentCases, scenarioMarkdown, templateFields } from './complex-communication-cases'

describe('completed scenario downloads', () => {
  it.each(incidentCases)('exports all worksheet fields, forecasts, approval comments and evidence for $id', scenario => {
    const markdown = scenarioMarkdown(scenario)
    for (const stakeholder of scenario.stakeholders) {
      expect(markdown).toContain(`### ${stakeholder.name}`)
      expect(markdown).toContain(stakeholder.message)
      expect(markdown).toContain(stakeholder.questions)
      expect(markdown).toContain(stakeholder.validation)
    }
    for (const field of templateFields) expect(markdown.split(`**${field}**`)).toHaveLength(7)
    expect(markdown.match(/\| Thinking \|/g)).toHaveLength(6)
    expect(markdown.match(/\| Doing \|/g)).toHaveLength(6)
    expect(markdown).toContain(scenario.comments)
    expect(markdown).toContain(scenario.unknowns)
    expect(markdown).toContain(scenario.debrief)
    for (const fact of scenario.facts) expect(markdown).toContain(scenario.sources[fact.source].url)
  })
})
