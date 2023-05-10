import styles from './style.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { getOrderData, getOrders } from '../../services/reducers/orders-feed'
import { useParams } from 'react-router-dom'
import { getOrderByNumber } from '../../utils/common'
import { useEffect } from 'react'
import FeedOrderDetails from '../../components/feed-details-order'
import { AppDispatch } from '../../store'

function Order(): JSX.Element {
  const dispatch: AppDispatch = useDispatch()
  const { id } = useParams()

  useEffect(() => {
    dispatch(getOrderData(id))
  }, [dispatch, id])

  const { orders } = useSelector(getOrders)
  const order = getOrderByNumber(orders, id)

  return (
    <main className={styles.main}>
      {order && <FeedOrderDetails order={order} />}
    </main>
  )
}

export default Order
