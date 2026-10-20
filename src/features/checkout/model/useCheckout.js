import { useState } from 'react'
import { validateCheckout } from './validation'

const initialValues = { name: '', email: '', quantity: 1, outlet: '', distance: '', payment: '', aware: false }

export function useCheckout() {
  const [values, setValues] = useState(initialValues)
  const [errors, setErrors] = useState({})
  const [order, setOrder] = useState(null)
  const update = ({ target }) => {
    const value = target.type === 'checkbox' ? target.checked : target.value
    setValues((current) => ({ ...current, [target.name]: value }))
    setErrors((current) => ({ ...current, [target.name]: undefined }))
  }
  const submit = (event) => {
    event.preventDefault()
    const nextErrors = validateCheckout(values)
    setErrors(nextErrors)
    const firstError = Object.keys(nextErrors)[0]
    if (firstError) { document.querySelector(`[name="${firstError}"]`)?.focus(); return }
    setOrder({ id: `HAM-${Math.floor(10000 + Math.random() * 90000)}`, ...values })
  }
  const reset = () => { setValues(initialValues); setErrors({}); setOrder(null) }
  return { values, errors, order, update, submit, reset }
}
