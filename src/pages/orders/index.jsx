import styles from './style.module.css'
import AppHeader from '../../components/app-header'
import ProfileNavigation from '../../components/profile-navigation'
import OrderHistory from '../../components/order-history'

function Orders() {
  return (
    <>
      <AppHeader />
      <div className={styles.profile}>
        <ProfileNavigation />
        <OrderHistory />
      </div>
    </>
  )
}

export default Orders
