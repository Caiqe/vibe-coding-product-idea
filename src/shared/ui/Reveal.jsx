import { useInView } from '../lib/useInView'
import styles from './Reveal.module.css'

export function Reveal({ children, className = '' }) {
  const [ref, isVisible] = useInView()
  return <div ref={ref} className={`${styles.reveal} ${isVisible ? styles.visible : ''} ${className}`}>{children}</div>
}
