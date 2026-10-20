import { Button, Container, Reveal } from '../../../shared/ui'
import styles from './FinalCta.module.css'

export function FinalCta({ onBuy }) {
  return <section className={styles.section}><Container><Reveal><div className={styles.card}><p>Hammer Nº 1</p><h2>O próximo prego começa na tomada.</h2><span>Uma ferramenta conhecida. Uma condição inteiramente nova.</span><Button variant="light" onClick={onBuy}>Conectar-se ao Hammer</Button></div></Reveal></Container></section>
}
