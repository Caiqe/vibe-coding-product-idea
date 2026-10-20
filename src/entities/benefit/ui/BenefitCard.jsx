import styles from './BenefitCard.module.css'

export function BenefitCard({ number, title, text }) {
  return <article className={styles.card}><span>{number}</span><h3>{title}</h3><p>{text}</p></article>
}
