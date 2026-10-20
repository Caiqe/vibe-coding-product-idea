import { useEffect } from 'react'

export function useLockBodyScroll(locked) {
  useEffect(() => {
    if (!locked) return undefined
    document.body.classList.add('modalOpen')
    return () => document.body.classList.remove('modalOpen')
  }, [locked])
}
