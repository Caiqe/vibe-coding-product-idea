import styles from './SectionTitle.module.css'

export function SectionTitle({ eyebrow, title, description, align = 'left' }) {
  return <header className={`${styles.header} ${styles[align]}`}>
    {eyebrow && <p className={styles.eyebrow}>{eyebrow}</p>}
    <h2>{title}</h2>
    {description && <p className={styles.description}>{description}</p>}
  </header>
}
