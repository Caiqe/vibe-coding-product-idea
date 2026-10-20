import { BenefitCard, benefits } from '../../../entities/benefit'
import { Container, Reveal, SectionTitle } from '../../../shared/ui'
import styles from './Benefits.module.css'

export function Benefits() {
  return <section className={styles.section} id="diferenciais"><Container><Reveal><SectionTitle eyebrow="Conexão como princípio" title="Convencional em tudo. Essencialmente ligado." description="Cada detalhe existe para transformar uma ação conhecida em uma experiência de presença contínua." /></Reveal><div className={styles.grid}>{benefits.map((benefit) => <Reveal key={benefit.number}><BenefitCard {...benefit} /></Reveal>)}</div></Container></section>
}
