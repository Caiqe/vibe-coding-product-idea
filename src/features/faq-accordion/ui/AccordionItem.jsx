import styles from './AccordionItem.module.css'

export function AccordionItem({ question, answer, isOpen, onToggle, id }) {
  return <div className={styles.item}>
    <h3><button type="button" onClick={onToggle} aria-expanded={isOpen} aria-controls={`${id}-panel`} id={`${id}-button`}><span>{question}</span><span className={styles.icon} aria-hidden="true">{isOpen ? '−' : '+'}</span></button></h3>
    <div className={`${styles.panel} ${isOpen ? styles.open : ''}`} id={`${id}-panel`} role="region" aria-labelledby={`${id}-button`}><div><p>{answer}</p></div></div>
  </div>
}
