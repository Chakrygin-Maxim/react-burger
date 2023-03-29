import styles from './style.module.css'
import { Outlet } from 'react-router-dom'
import ProfileNavigation from '../../components/profile-navigation'
import AppHeader from '../../components/app-header/app-header'

function Profile() {
  return (
    <>
      <AppHeader />
      <div className={styles.profile}>
        <ProfileNavigation />
        <Outlet />
      </div>
    </>
  )
}

export default Profile
