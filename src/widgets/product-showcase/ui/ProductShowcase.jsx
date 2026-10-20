import { ProductImage, product } from '../../../entities/product'
import { Container, Reveal, SectionTitle } from '../../../shared/ui'
import styles from './ProductShowcase.module.css'

const details = [
  { src: product.images.plug, alt: 'Detalhe do plugue e cabo de energia do Hammer', label: 'Conexão', text: 'Um plugue familiar. Uma presença indispensável.' },
  { src: product.images.head, alt: 'Detalhe da cabeça em aço do Hammer', label: 'Forma', text: 'A geometria clássica, preservada sem distrações.' },
  { src: product.images.lifestyle, alt: 'Hammer conectado a uma tomada em ambiente minimalista', label: 'Contexto', text: 'Projetado para ambientes com uma tomada disponível.' },
]

export function ProductShowcase() {
  return <section className={styles.section}><Container><Reveal><SectionTitle eyebrow="Objeto e origem" title="Cada ângulo confirma a conexão." /></Reveal><div className={styles.grid}>{details.map((item, index) => <Reveal key={item.label} className={index === 2 ? styles.wide : ''}><figure><div className={styles.image}><ProductImage src={item.src} alt={item.alt} label={item.src} /></div><figcaption><span>{item.label}</span><p>{item.text}</p></figcaption></figure></Reveal>)}</div></Container></section>
}
