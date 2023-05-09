import { useSelector } from 'react-redux'
import styles from './style.module.css'
import { getOrders } from '../../services/reducers/orders-feed'

function Stats(): JSX.Element {
  const data = useSelector(getOrders)

  return (
    <div className={styles.stats}>
      <div className={styles.statuses}>
        <div className={styles.statusesReady}>
          <p className={styles.header}>Готовы</p>
          <ul className={styles.list}>
            <li className={`${styles.item} ${styles.collorReady}`}>034533</li>
            <li className={`${styles.item} ${styles.collorReady}`}>034532</li>
            <li className={`${styles.item} ${styles.collorReady}`}>034531</li>
            <li className={`${styles.item} ${styles.collorReady}`}>034530</li>
            <li className={`${styles.item} ${styles.collorReady}`}>034529</li>
            <li className={`${styles.item} ${styles.collorReady}`}>034528</li>
            <li className={`${styles.item} ${styles.collorReady}`}>034531</li>
            <li className={`${styles.item} ${styles.collorReady}`}>034530</li>
            <li className={`${styles.item} ${styles.collorReady}`}>034529</li>
            <li className={`${styles.item} ${styles.collorReady}`}>034528</li>
            <li className={`${styles.item} ${styles.collorReady}`}>034529</li>
            <li className={`${styles.item} ${styles.collorReady}`}>034528</li>
          </ul>
        </div>
        <div className={styles.statusesInWork}>
          <p className={styles.header}>В работе</p>
          <ul className={styles.list}>
            <li className={styles.item}>034538</li>
            <li className={styles.item}>034541</li>
            <li className={styles.item}>034542</li>
            <li className={styles.item}>034538</li>
            <li className={styles.item}>034541</li>
            <li className={styles.item}>034542</li>
            <li className={styles.item}>034538</li>
            <li className={styles.item}>034541</li>
            <li className={styles.item}>034542</li>
            <li className={styles.item}>034542</li>
            <li className={styles.item}>034538</li>
            <li className={styles.item}>034541</li>
            <li className={styles.item}>034542</li>
          </ul>
        </div>
      </div>
      <div>
        <p className={styles.header}>Выполнено за все время:</p>
        <p className={styles.total}>{data.total}</p>
      </div>
      <div>
        <p className={styles.header}>Выполнено за сегодня:</p>
        <p className={styles.total}>{data.totalToday}</p>
      </div>
    </div>
  )
}

export default Stats
