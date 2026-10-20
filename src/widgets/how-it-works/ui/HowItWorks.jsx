import { Container, Reveal, SectionTitle } from '../../../shared/ui'
import styles from './HowItWorks.module.css'

const steps = [
  ['01', 'Localize uma tomada', 'Escolha uma origem de energia compatível e disponível.'],
  ['02', 'Conecte o Hammer', 'Insira o plugue. A experiência começa nesse momento.'],
  ['03', 'Posicione o prego', 'Defina o ponto de fixação dentro da área de alcance.'],
  ['04', 'Aplique a martelada', 'Utilize o movimento tradicional, agora conectado.'],
]

export function HowItWorks() {
  return <section className={styles.section} id="como-funciona"><Container><Reveal><SectionTitle align="center" eyebrow="Quatro movimentos" title="A simplicidade permanece." description="Nenhuma curva de aprendizado. Apenas uma tomada antes do primeiro gesto." /></Reveal><div className={styles.steps}>{steps.map(([number, title, text]) => <Reveal key={number}><article><span>{number}</span><h3>{title}</h3><p>{text}</p></article></Reveal>)}</div></Container></section>
}
