import styles from './style.module.css'
import Price from '../price'
import { useSelector } from 'react-redux'
import { getOrders } from '../../services/reducers/orders-feed'

function FeedDetails(): JSX.Element {
  const data = useSelector(getOrders)

  return (
    <div className={styles.test}>
      <div className={styles.feedDetail}>
        <div className={styles.headerContainer}>
          <p className={styles.orderNumber}>#034535</p>
          <p className={styles.orderDate}>Сегодня, 16:20</p>
        </div>
        <h2 className={styles.mainText}>Death Star Starship Main бургер</h2>
        <div className={styles.detailContainer}>
          <div className={styles.ingredients}>123</div>
          <Price total={480} />
        </div>
      </div>
      <div className={styles.feedDetail}>
        <div className={styles.headerContainer}>
          <p className={styles.orderNumber}>#034535</p>
          <p className={styles.orderDate}>Сегодня, 16:20</p>
        </div>
        <h2 className={styles.mainText}>Death Star Starship Main бургер</h2>
        <div className={styles.detailContainer}>
          <div className={styles.ingredients}>123</div>
          <Price total={480} />
        </div>
      </div>
    </div>
  )
}

export default FeedDetails
