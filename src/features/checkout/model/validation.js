export function validateCheckout(values) {
  const errors = {}
  if (!values.name.trim()) errors.name = 'Informe seu nome completo.'
  if (!values.email.trim()) errors.email = 'Informe seu e-mail.'
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) errors.email = 'Informe um e-mail válido.'
  const phoneDigits = values.phone.replace(/\D/g, '')
  if (!phoneDigits) errors.phone = 'Informe seu telefone.'
  else if (!/^\d{10,11}$/.test(phoneDigits)) errors.phone = 'Informe um telefone com 10 ou 11 dígitos.'
  const quantity = Number(values.quantity)
  if (!Number.isInteger(quantity) || quantity < 1 || quantity > 100) errors.quantity = 'Informe uma quantidade inteira entre 1 e 100.'
  if (!values.message.trim()) errors.message = 'Informe uma mensagem.'
  else if (values.message.length > 300) errors.message = 'A mensagem deve ter no máximo 300 caracteres.'
  if (!values.outlet) errors.outlet = 'Selecione uma opção.'
  if (values.distance === '' || Number(values.distance) < 0) errors.distance = 'Informe uma distância igual ou maior que zero.'
  if (!values.payment) errors.payment = 'Selecione a forma de pagamento.'
  if (!values.aware) errors.aware = 'Confirme que compreende a necessidade de conexão.'
  return errors
}
