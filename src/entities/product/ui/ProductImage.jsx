import { useState } from 'react'
import styles from './ProductImage.module.css'

export function ProductImage({ src, alt, label, className = '' }) {
  const [failed, setFailed] = useState(false)
  if (failed) return <div className={`${styles.fallback} ${className}`} role="img" aria-label={alt}>{label || src}</div>
  return <img className={`${styles.image} ${className}`} src={`${import.meta.env.BASE_URL}${src}`} alt={alt} onError={() => setFailed(true)} />
}
