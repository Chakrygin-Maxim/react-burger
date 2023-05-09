import styles from './style.module.css'
import { getOrders } from '../../services/reducers/orders-feed'
import { useSelector } from 'react-redux'
import { useMemo } from 'react'
import {
  OrderItems,
  OrderNumber,
  OrderNumbers,
} from '../../services/orders-table/types'

const ordersListRender = (
  list: OrderNumbers,
  title: string,
  isReady = false
): JSX.Element => {
  return (
    <>
      <p className={styles.header}>{title}</p>
      <ul className={styles.list}>
        {list.map(({ _id, number }: OrderNumber) => {
          return (
            <li
              key={_id}
              className={`${styles.item} ${isReady && styles.collorReady}`}
            >
              {number}
            </li>
          )
        })}
      </ul>
    </>
  )
}

const ordersListRenderIsReady = (
  list: OrderNumbers,
  title: string
): JSX.Element => {
  return ordersListRender(list, title, true)
}

const getOrdersByStatus = (orders: OrderItems) => {
  const ordersReady: OrderNumbers = []
  const ordersInWork: OrderNumbers = []

  orders.forEach(({ _id, number, status }) => {
    if (status === 'done' && ordersReady.length < 20) {
      ordersReady.push({ _id, number })
    }
    if (status !== 'done' && ordersReady.length < 20) {
      ordersInWork.push({ _id, number })
    }
  })

  return { ordersReady, ordersInWork }
}

function Stats(): JSX.Element {
  const { orders, total, totalToday } = useSelector(getOrders)
  const { ordersReady, ordersInWork } = useMemo(
    () => getOrdersByStatus(orders),
    [orders]
  )

  return (
    <div className={styles.stats}>
      <div className={styles.statuses}>
        <div className={styles.statusesReady}>
          {ordersListRenderIsReady(ordersReady, 'Готовы')}
        </div>
        <div className={styles.statusesInWork}>
          {ordersListRender(ordersInWork, 'В Работе')}
        </div>
      </div>
      <div>
        <p className={styles.header}>Выполнено за все время:</p>
        <p className={styles.total}>{total}</p>
      </div>
      <div>
        <p className={styles.header}>Выполнено за сегодня:</p>
        <p className={styles.total}>{totalToday}</p>
      </div>
    </div>
  )
}

export default Stats
