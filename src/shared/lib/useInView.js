import { useEffect, useRef, useState } from 'react'

export function useInView() {
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)
  useEffect(() => {
    const element = ref.current
    if (!element || !('IntersectionObserver' in window)) { setIsVisible(true); return undefined }
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setIsVisible(true); observer.disconnect() }
    }, { threshold: .12 })
    observer.observe(element)
    return () => observer.disconnect()
  }, [])
  return [ref, isVisible]
}
