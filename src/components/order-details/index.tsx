import styles from './style.module.css'
import done from '../../images/done.svg'
import OrderError from '../order-error'
import { getOrder } from '../../services/reducers/order'
import { useSelector } from 'react-redux'
import { ORDER_TEXTS } from '../../utils/constants'

const Loading = () => {
  return <h2 className={styles.orderDetails__loding}>{ORDER_TEXTS.loading}</h2>
}

function OrderDetails(): JSX.Element {
  const { orderNumber, isLoading, hasError } = useSelector(getOrder)

  return (
    <div className={styles.section}>
      {isLoading ? (
        <Loading />
      ) : hasError ? (
        <OrderError />
      ) : (
        <>
          <h2 className={styles.orderDetails__header}>{orderNumber}</h2>
          <span className={styles.orderDetails__title}>
            {ORDER_TEXTS.orderId}
          </span>
          <img
            className={styles.orderDetails__image}
            src={done}
            alt="Заказ принят"
          />
          <span className={styles.orderDetails__text}>
            {ORDER_TEXTS.isCooking}
          </span>
          <span className={styles.orderDetails__subText}>
            {ORDER_TEXTS.waiting}
          </span>
        </>
      )}
    </div>
  )
}

export default OrderDetails
