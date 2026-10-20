import { BonusItem, offer } from '../../../entities/offer'
import { ProductImage } from '../../../entities/product'
import { Button, Container, Reveal } from '../../../shared/ui'
import { formatCurrency } from '../../../shared/lib/formatCurrency'
import styles from './Offer.module.css'

export function Offer({ onBuy }) {
  return <section className={styles.section} id="oferta"><Container><Reveal><div className={styles.card}><div className={styles.visual}><ProductImage src="images/nails-box.png" alt="Caixa fosca da Coleção Ferro Nº 1 com pregos comuns" label="nails-box.png" /><span>Bônus incluído</span></div><div className={styles.content}><p className={styles.eyebrow}>Edição de lançamento</p><h2>Compre o Hammer.<br />Leve o essencial.</h2><p className={styles.intro}>Uma composição completa para o primeiro prego conectado.</p><ul>{offer.items.map((item) => <BonusItem key={item.title} {...item} />)}</ul><div className={styles.price}><span>Investimento único</span><strong>{formatCurrency(offer.price)}</strong><small>ou {offer.installments}× de {formatCurrency(offer.price / offer.installments)}</small></div><Button className={styles.button} onClick={onBuy}>Adquirir a Edição Conectada</Button></div></div></Reveal></Container></section>
}
