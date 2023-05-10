import styles from './style.module.css'
import FeedDetails from '../../components/feed-details'
import Stats from '../../components/stats'
import { WS_URL_ALL_ORDERS } from '../../utils/constants'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import {
  connect as wsConnect,
  disconnect as wsDisconnect,
} from '../../services/orders-table/actions'

function Feed() {
  const dispatch = useDispatch()

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
        <FeedDetails />
        <Stats />
      </div>
    </main>
  )
}

export default Feed
