import styles from './style.module.css'
import OrdersFeed from '../../components/order-feed'
import Stats from '../../components/stats'
import { WS_URL_ALL_ORDERS } from '../../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import {
  connect as wsConnect,
  disconnect as wsDisconnect,
} from '../../services/orders-table/actions'
import { getOrders } from '../../services/reducers/orders-feed'

function Feed() {
  const dispatch = useDispatch()
  const { orders } = useSelector(getOrders)

  useEffect(() => {
    dispatch(wsConnect(WS_URL_ALL_ORDERS))

    return () => {
      dispatch(wsDisconnect())
    }
  }, [dispatch])

  return (
    <main className={styles.feed}>
      <h2 className={styles.feed__header}>Лента заказов</h2>
      <div className={styles.container}>
        <OrdersFeed orders={orders} />
        <Stats />
      </div>
    </main>
  )
}

export default Feed
