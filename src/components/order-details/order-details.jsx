import orderDetailsStyle from './order-details.module.css'
import donesvg from '../../images/done.svg'
import { ORDER_TEXTS } from '../../utils/constants'
function OrderDetails() {
  return (
    <div className={orderDetailsStyle.orderDetails__container}>
      <h2 className={orderDetailsStyle.orderDetails__header}>034536</h2>
      <span className={orderDetailsStyle.orderDetails__title}>
        {ORDER_TEXTS.orderId}
      </span>
      <img
        className={orderDetailsStyle.orderDetails__image}
        src={donesvg}
        alt="Заказ принят"
      />
      <span className={orderDetailsStyle.orderDetails__text}>
        {ORDER_TEXTS.isCooking}
      </span>
      <span className={orderDetailsStyle.orderDetails__subText}>
        {ORDER_TEXTS.waiting}
      </span>
    </div>
  )
}

export default OrderDetails
