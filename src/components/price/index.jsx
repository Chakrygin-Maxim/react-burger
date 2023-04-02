import styles from './style.module.css'
import PropTypes from 'prop-types'
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'

function Price({ total }) {
  return (
    <div className={styles.price}>
      <span className={styles.price__text}>{total}</span>
      <CurrencyIcon type="primary" />
    </div>
  )
}

Price.propTypes = {
  total: PropTypes.number.isRequired,
}

export default Price
