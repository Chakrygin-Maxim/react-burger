import priceStyle from './price.module.css'
import PropTypes from 'prop-types'
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'

function Price({ total }) {
  return (
    <div className={priceStyle.price}>
      <span className={priceStyle.price__text}>{total}</span>
      <CurrencyIcon type="primary" />
    </div>
  )
}

Price.propTypes = {
  total: PropTypes.number.isRequired,
}

export default Price
