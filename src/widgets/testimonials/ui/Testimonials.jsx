import { TestimonialCard, testimonials } from '../../../entities/testimonial'
import { Container, Reveal, SectionTitle } from '../../../shared/ui'
import styles from './Testimonials.module.css'

export function Testimonials() {
  return <section className={styles.section}><Container><Reveal><SectionTitle eyebrow="Relatos conectados" title="Uma mudança percebida por quem valoriza o essencial." /></Reveal><div className={styles.grid}>{testimonials.map((item) => <Reveal key={item.name}><TestimonialCard {...item} /></Reveal>)}</div></Container></section>
}
