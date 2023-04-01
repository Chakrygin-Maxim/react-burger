import styles from './style.module.css'
import { Outlet } from 'react-router-dom'
import ProfileNavigation from '../../components/profile-navigation'

function Profile() {
  return (
    <div className={styles.profile}>
      <ProfileNavigation />
      <Outlet />
    </div>
  )
}

export default Profile
