import styles from './style.module.css'
import Price from '../price'

function FeedDetails(orderItem) {
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
