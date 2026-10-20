import { Stars } from '../../../shared/ui'
import styles from './TestimonialCard.module.css'

export function TestimonialCard({ initials, name, role, rating, text }) {
  return <article className={styles.card}><Stars rating={rating} /><blockquote>“{text}”</blockquote><footer><span className={styles.avatar}>{initials}</span><span><strong>{name}</strong><small>{role}</small></span></footer></article>
}
