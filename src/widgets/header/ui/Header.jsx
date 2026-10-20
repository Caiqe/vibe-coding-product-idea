import { Button, Container } from '../../../shared/ui'
import { navLinks } from '../../../shared/config/navLinks'
import styles from './Header.module.css'

export function Header({ onBuy }) {
  return <header className={styles.header}><Container className={styles.inner}><a className={styles.logo} href="#inicio" aria-label="Hammer, início">Hammer<span>.</span></a><nav aria-label="Navegação principal">{navLinks.map((link) => <a key={link.href} href={link.href}>{link.label}</a>)}</nav><Button className={styles.buy} onClick={onBuy}>Comprar</Button></Container></header>
}
