import { useEffect, useRef } from 'react'
import { useLockBodyScroll } from '../../../shared/lib/useLockBodyScroll'
import { useCheckout } from '../model/useCheckout'
import { CheckoutForm } from './CheckoutForm'
import { OrderConfirmation } from './OrderConfirmation'
import styles from './CheckoutModal.module.css'

export function CheckoutModal({ isOpen, onClose }) {
  const dialogRef = useRef(null)
  const previousFocusRef = useRef(null)
  const checkout = useCheckout()
  useLockBodyScroll(isOpen)

  useEffect(() => {
    if (!isOpen) return undefined
    previousFocusRef.current = document.activeElement
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') onClose()
      if (event.key !== 'Tab') return
      const focusable = [...dialogRef.current.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])')].filter((element) => !element.disabled && element.getAttribute('aria-hidden') !== 'true')
      if (!focusable.length) return
      const first = focusable[0]
      const last = focusable.at(-1)
      if (document.activeElement === dialogRef.current || !dialogRef.current.contains(document.activeElement)) { event.preventDefault(); (event.shiftKey ? last : first).focus() }
      else if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus() }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus() }
    }
    document.addEventListener('keydown', handleKeyDown)
    dialogRef.current?.focus()
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      previousFocusRef.current?.focus()
    }
  }, [isOpen, onClose])

  if (!isOpen) return null
  const close = () => { checkout.reset(); onClose() }
  return <div className={styles.backdrop} onMouseDown={(event) => { if (event.target === event.currentTarget) close() }}>
    <section className={styles.dialog} role="dialog" aria-modal="true" aria-labelledby="checkout-title" tabIndex="-1" ref={dialogRef}>
      <button className={styles.close} type="button" aria-label="Fechar checkout" onClick={close}>×</button>
      {checkout.order ? <OrderConfirmation order={checkout.order} onClose={close} /> : <><header className={styles.header}><p>Checkout privado</p><h2 id="checkout-title">Reserve seu Hammer.</h2><span>Uma compra inteiramente fictícia. Uma conexão conceitualmente permanente.</span></header><CheckoutForm values={checkout.values} errors={checkout.errors} onChange={checkout.update} onSubmit={checkout.submit} /></>}
    </section>
  </div>
}
