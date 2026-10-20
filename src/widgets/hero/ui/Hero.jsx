import { ProductImage, product } from '../../../entities/product'
import { Button, Container } from '../../../shared/ui'
import styles from './Hero.module.css'

export function Hero({ onBuy }) {
  return <section className={styles.hero} id="inicio"><Container className={styles.grid}><div className={styles.copy}><p className={styles.kicker}>Uma nova categoria de ferramenta</p><h1>Bater um prego nunca esteve tão conectado.</h1><p className={styles.lead}>Apresentamos o Hammer. Um novo padrão em fixação, desenvolvido a partir da tomada.</p><div className={styles.actions}><Button onClick={onBuy}>Conhecer a edição</Button><a href="#como-funciona">Como funciona <span>↓</span></a></div><p className={styles.detail}>Energia contínua. Sempre que estiver ao alcance do cabo.</p></div><div className={styles.visual}><span className={styles.badge}>3 m<br /><small>de presença</small></span><ProductImage src={product.images.hero} alt="Hammer com cabo de energia e plugue sobre fundo claro" label="hero-hammer.png" /></div></Container></section>
}
