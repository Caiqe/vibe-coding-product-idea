import { useState } from 'react'

export function useAccordion() {
  const [openIndex, setOpenIndex] = useState(0)
  const toggle = (index) => setOpenIndex((current) => current === index ? -1 : index)
  return { openIndex, toggle }
}
