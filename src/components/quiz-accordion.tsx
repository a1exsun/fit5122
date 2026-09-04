import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

export interface QuizItem {
  question: string
  answer: string
}

export function QuizAccordion({ items }: { items: QuizItem[] }) {
  return (
    <Accordion type="multiple" className="overflow-hidden rounded-2xl border bg-card px-5 sm:px-7">
      {items.map((item, index) => (
        <AccordionItem key={item.question} value={`question-${index + 1}`}>
          <AccordionTrigger>
            <span className="flex items-start gap-4">
              <span className="mt-0.5 text-xs font-black tracking-wider text-[var(--week-accent)]">{String(index + 1).padStart(2, '0')}</span>
              <span>{item.question}</span>
            </span>
          </AccordionTrigger>
          <AccordionContent>{item.answer}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}
