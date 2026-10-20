import { offer } from '../../../entities/offer'
import { Button } from '../../../shared/ui'
import { formatCurrency } from '../../../shared/lib/formatCurrency'
import styles from './CheckoutForm.module.css'

function FieldError({ children }) { return children ? <span className={styles.error}>{children}</span> : null }

export function CheckoutForm({ values, errors, onChange, onSubmit }) {
  const total = offer.price * Number(values.quantity)
  return <form onSubmit={onSubmit} noValidate>
    <div className={styles.summary}><div><span>Seu pedido</span><strong>Hammer · {offer.name}</strong><small>Inclui Coleção Ferro Nº 1 e Cabo Signature</small></div><strong>{formatCurrency(total)}</strong></div>
    <div className={styles.grid}>
      <label className={styles.full}>Nome completo<input name="name" value={values.name} onChange={onChange} autoComplete="name" aria-invalid={Boolean(errors.name)} /><FieldError>{errors.name}</FieldError></label>
      <label className={styles.full}>E-mail<input name="email" type="email" value={values.email} onChange={onChange} autoComplete="email" aria-invalid={Boolean(errors.email)} /><FieldError>{errors.email}</FieldError></label>
      <label>Quantidade<select name="quantity" value={values.quantity} onChange={onChange}><option value="1">1 unidade</option><option value="2">2 unidades</option><option value="3">3 unidades</option></select><FieldError>{errors.quantity}</FieldError></label>
      <label>Forma de pagamento<select name="payment" value={values.payment} onChange={onChange} aria-invalid={Boolean(errors.payment)}><option value="">Selecione</option><option value="card">Cartão (fictício)</option><option value="pix">Pix (fictício)</option></select><FieldError>{errors.payment}</FieldError></label>
      <fieldset className={styles.full}><legend>Você possui uma tomada disponível?</legend><div className={styles.options}>
        {[['sim', 'Sim'], ['extensao', 'Tenho uma extensão'], ['nao', 'Ainda não']].map(([value, label]) => <label key={value}><input type="radio" name="outlet" value={value} checked={values.outlet === value} onChange={onChange} />{label}</label>)}
      </div><FieldError>{errors.outlet}</FieldError>{values.outlet === 'nao' && <p className={styles.note}>Recomendamos providenciar uma tomada. O Hammer cuida do resto.</p>}</fieldset>
      <label className={styles.full}>Distância até a tomada mais próxima (em metros)<input name="distance" type="number" min="0" step=".1" value={values.distance} onChange={onChange} aria-invalid={Boolean(errors.distance)} /><FieldError>{errors.distance}</FieldError>{Number(values.distance) > 3 && <span className={styles.note}>Sugerimos considerar uma extensão. O Hammer valoriza o alcance.</span>}</label>
      <label className={`${styles.check} ${styles.full}`}><input name="aware" type="checkbox" checked={values.aware} onChange={onChange} />Estou ciente de que o Hammer precisa estar conectado à tomada para funcionar.<FieldError>{errors.aware}</FieldError></label>
    </div>
    <Button className={styles.submit} type="submit">Confirmar compra fictícia · {formatCurrency(total)}</Button>
    <p className={styles.disclaimer}>Nenhum dado é enviado ou armazenado. Esta é uma compra fictícia.</p>
  </form>
}
