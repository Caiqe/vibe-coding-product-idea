export function validateCheckout(values) {
  const errors = {}
  if (!values.name.trim()) errors.name = 'Informe seu nome completo.'
  if (!values.email.trim()) errors.email = 'Informe seu e-mail.'
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) errors.email = 'Informe um e-mail válido.'
  if (values.quantity < 1 || values.quantity > 3) errors.quantity = 'Escolha entre 1 e 3 unidades.'
  if (!values.outlet) errors.outlet = 'Selecione uma opção.'
  if (values.distance === '' || Number(values.distance) < 0) errors.distance = 'Informe uma distância igual ou maior que zero.'
  if (!values.payment) errors.payment = 'Selecione a forma de pagamento.'
  if (!values.aware) errors.aware = 'Confirme que compreende a necessidade de conexão.'
  return errors
}
