import priceStyle from './Price.module.css'
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'

function Price({ total }) {
  return (
    <div className={priceStyle.price}>
      <span className={priceStyle.price__text}>{total}</span>
      <CurrencyIcon type="primary" />
    </div>
  )
}

export default Price
