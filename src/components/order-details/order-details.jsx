import orderDetailsStyle from './order-details.module.css'
import done from '../../images/done.svg'
import PropTypes from 'prop-types'
import { ORDER_TEXTS } from '../../utils/constants'

function OrderDetails({ orderId }) {
  return (
    <>
      <h2 className={orderDetailsStyle.orderDetails__header}>{orderId}</h2>
      <span className={orderDetailsStyle.orderDetails__title}>
        {ORDER_TEXTS.orderId}
      </span>
      <img
        className={orderDetailsStyle.orderDetails__image}
        src={done}
        alt="Заказ принят"
      />
      <span className={orderDetailsStyle.orderDetails__text}>
        {ORDER_TEXTS.isCooking}
      </span>
      <span className={orderDetailsStyle.orderDetails__subText}>
        {ORDER_TEXTS.waiting}
      </span>
    </>
  )
}

OrderDetails.propTypes = {
  orderId: PropTypes.string.isRequired,
}

export default OrderDetails
