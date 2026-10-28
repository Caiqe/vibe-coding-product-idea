import { useEffect, useState } from 'react'
import { Button, Container } from '../../../shared/ui'
import { navLinks } from '../../../shared/config/navLinks'
import styles from './Header.module.css'

export function Header({ onBuy }) {
  const [isMenuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    if (!isMenuOpen) return undefined
    const closeOnEscape = (event) => { if (event.key === 'Escape') setMenuOpen(false) }
    document.addEventListener('keydown', closeOnEscape)
    return () => document.removeEventListener('keydown', closeOnEscape)
  }, [isMenuOpen])

  const closeMenu = () => setMenuOpen(false)
  const buy = () => { closeMenu(); onBuy() }

  return <header className={styles.header}><Container className={styles.inner}>
    <a className={styles.logo} href="#inicio" aria-label="Hammer, início" onClick={closeMenu}>Hammer<span>.</span></a>
    <nav id="main-navigation" className={isMenuOpen ? styles.open : ''} aria-label="Navegação principal">{navLinks.map((link) => <a key={link.href} href={link.href} onClick={closeMenu}>{link.label}</a>)}</nav>
    <div className={styles.actions}>
      <button className={styles.menu} type="button" aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'} aria-expanded={isMenuOpen} aria-controls="main-navigation" onClick={() => setMenuOpen((current) => !current)}><span aria-hidden="true">{isMenuOpen ? '×' : '☰'}</span></button>
      <Button className={styles.buy} onClick={buy}>Comprar</Button>
    </div>
  </Container></header>
}
