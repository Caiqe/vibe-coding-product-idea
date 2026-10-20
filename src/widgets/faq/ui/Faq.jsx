import { faqItems } from '../../../entities/faq'
import { AccordionItem, useAccordion } from '../../../features/faq-accordion'
import { Container, Reveal, SectionTitle } from '../../../shared/ui'
import styles from './Faq.module.css'

export function Faq() {
  const { openIndex, toggle } = useAccordion()
  return <section className={styles.section} id="faq"><Container className={styles.grid}><Reveal><SectionTitle eyebrow="Perguntas essenciais" title="Tudo o que precisa estar claro antes de conectar." description="O Hammer preserva a familiaridade. Algumas decisões, no entanto, merecem uma resposta." /></Reveal><Reveal><div>{faqItems.map((item, index) => <AccordionItem key={item.question} {...item} id={`faq-${index}`} isOpen={openIndex === index} onToggle={() => toggle(index)} />)}</div></Reveal></Container></section>
}
