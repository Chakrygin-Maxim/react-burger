import styles from './style.module.css'
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import { PriceProps } from './types'

function Price({ total }: PriceProps) {
  return (
    <div className={styles.price}>
      <span className={styles.price__text}>{total}</span>
      <CurrencyIcon type="primary" />
    </div>
  )
}

export default Price
