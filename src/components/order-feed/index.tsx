import styles from './style.module.css'
import CardOrder from '../card-order'
import { Link, useLocation } from 'react-router-dom'
import { OrdersFeedProps } from './types'

function OrdersFeed({ orders, showStatus }: OrdersFeedProps): JSX.Element {
  const location = useLocation()
  const { pathname } = location

  return (
    <ul className={styles.orderList}>
      {orders.map((order) => (
        <Link
          key={order._id}
          to={`${pathname}/${order.number}`}
          state={{ background: location }}
          className={styles.link}
        >
          <CardOrder key={order._id} cardItem={order} showStatus={showStatus} />
        </Link>
      ))}
    </ul>
  )
}

export default OrdersFeed
