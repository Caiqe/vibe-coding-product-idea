import { Container } from '../../../shared/ui'
import { navLinks } from '../../../shared/config/navLinks'
import styles from './Footer.module.css'

export function Footer() {
  return <footer className={styles.footer}><Container><div className={styles.top}><a className={styles.logo} href="#inicio">Hammer<span>.</span></a><nav aria-label="Navegação do rodapé">{navLinks.map((link) => <a key={link.href} href={link.href}>{link.label}</a>)}</nav></div><div className={styles.bottom}><span>© 2026 Hammer</span><p>Produto, avaliações e dados fictícios criados para fins acadêmicos.</p></div></Container></footer>
}
