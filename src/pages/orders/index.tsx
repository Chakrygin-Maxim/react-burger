import styles from './style.module.css'
import ProfileNavigation from '../../components/profile-navigation'
import OrderHistory from '../../components/order-history'

function Orders(): JSX.Element {
  return (
    <div className={styles.profile}>
      <ProfileNavigation />
      <OrderHistory />
    </div>
  )
}

export default Orders
