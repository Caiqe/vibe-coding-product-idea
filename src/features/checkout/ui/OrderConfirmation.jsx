import { Button } from '../../../shared/ui'
import { offer } from '../../../entities/offer'
import { formatCurrency } from '../../../shared/lib/formatCurrency'
import styles from './OrderConfirmation.module.css'

export function OrderConfirmation({ order, onClose }) {
  return <div className={styles.confirmation}><span className={styles.check}>✓</span><p className={styles.eyebrow}>Pedido confirmado</p><h2>{order.id}</h2><p>Seu Hammer está a caminho. Mantenha a tomada livre.</p><div className={styles.summary}><span>{order.quantity}× Hammer · {offer.name}</span><strong>{formatCurrency(offer.price * Number(order.quantity))}</strong></div><Button onClick={onClose}>Voltar ao site</Button></div>
}
