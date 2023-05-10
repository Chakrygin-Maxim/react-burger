import styles from './style.module.css'
import CardOrder from '../card-order'
import { useSelector } from 'react-redux'
import { getOrders } from '../../services/reducers/orders-feed'
import { Link, useLocation } from 'react-router-dom'
import { APP_ROUTES_MATCH } from '../../utils/constants'

function FeedDetails(): JSX.Element {
  const { orders } = useSelector(getOrders)
  const location = useLocation()

  return (
    <ul className={styles.orderList}>
      {orders.map((order) => (
        <Link
          key={order._id}
          to={`${APP_ROUTES_MATCH.feed}/${order.number}`}
          state={{ background: location }}
          className={styles.link}
        >
          <CardOrder key={order._id} cardItem={order} />
        </Link>
      ))}
    </ul>
  )
}

export default FeedDetails
