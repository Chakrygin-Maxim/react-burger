import styles from './style.module.css'
import FeedDetails from '../../components/feed-details'
import Stats from '../../components/stats'

function Feed() {
  return (
    <div className={styles.feed}>
      <h2 className={styles.feed__header}>Лента заказов</h2>
      <div className={styles.container}>
        <FeedDetails />
        <Stats />
      </div>
    </div>
  )
}

export default Feed
