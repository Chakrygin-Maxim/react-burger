import styles from './style.module.css'
import UserProfile from '../../components/user-profile'
import ProfileNavigation from '../../components/profile-navigation'
import AppHeader from '../../components/app-header/app-header'

function Profile() {
  return (
    <>
      <AppHeader />
      <div className={styles.profile}>
        <ProfileNavigation />
        <UserProfile />
      </div>
    </>
  )
}

export default Profile
