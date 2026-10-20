import styles from './Stars.module.css'

export function Stars({ rating = 5 }) {
  return <span className={styles.stars} aria-label={`${rating} de 5 estrelas`}>{'★'.repeat(rating)}{'☆'.repeat(5 - rating)}</span>
}
