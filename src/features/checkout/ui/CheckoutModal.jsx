import { useEffect, useRef } from 'react'
import { useLockBodyScroll } from '../../../shared/lib/useLockBodyScroll'
import { useCheckout } from '../model/useCheckout'
import { CheckoutForm } from './CheckoutForm'
import { OrderConfirmation } from './OrderConfirmation'
import styles from './CheckoutModal.module.css'

export function CheckoutModal({ isOpen, onClose }) {
  const dialogRef = useRef(null)
  const checkout = useCheckout()
  useLockBodyScroll(isOpen)

  useEffect(() => {
    if (!isOpen) return undefined
    const closeOnEscape = (event) => { if (event.key === 'Escape') onClose() }
    document.addEventListener('keydown', closeOnEscape)
    dialogRef.current?.focus()
    return () => document.removeEventListener('keydown', closeOnEscape)
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
