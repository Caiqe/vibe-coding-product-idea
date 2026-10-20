import { useState } from 'react'
import { CheckoutModal } from '../../../features/checkout'
import { Benefits } from '../../../widgets/benefits'
import { Faq } from '../../../widgets/faq'
import { FinalCta } from '../../../widgets/final-cta'
import { Footer } from '../../../widgets/footer'
import { Header } from '../../../widgets/header'
import { Hero } from '../../../widgets/hero'
import { HowItWorks } from '../../../widgets/how-it-works'
import { Offer } from '../../../widgets/offer'
import { ProductShowcase } from '../../../widgets/product-showcase'
import { Testimonials } from '../../../widgets/testimonials'
import styles from './HomePage.module.css'

export function HomePage() {
  const [isCheckoutOpen, setCheckoutOpen] = useState(false)
  const openCheckout = () => setCheckoutOpen(true)
  return <div className={styles.page}>
    <Header onBuy={openCheckout} />
    <main><Hero onBuy={openCheckout} /><Benefits /><ProductShowcase /><HowItWorks /><Testimonials /><Offer onBuy={openCheckout} /><Faq /><FinalCta onBuy={openCheckout} /></main>
    <Footer />
    <CheckoutModal isOpen={isCheckoutOpen} onClose={() => setCheckoutOpen(false)} />
  </div>
}
