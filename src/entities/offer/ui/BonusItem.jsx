import styles from './BonusItem.module.css'

export function BonusItem({ title, text }) {
  return <li className={styles.item}><span aria-hidden="true">✓</span><div><strong>{title}</strong><p>{text}</p></div></li>
}
