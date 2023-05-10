import styles from './style.module.css'
import CardOrder from '../card-order'
import { useSelector } from 'react-redux'
import { getOrders } from '../../services/reducers/orders-feed'

function FeedDetails(): JSX.Element {
  const { orders } = useSelector(getOrders)

  return (
    <ul className={styles.orderList}>
      {orders.map((order) => {
        return <CardOrder key={order._id} cardItem={order} />
      })}
    </ul>
  )
}

export default FeedDetails
