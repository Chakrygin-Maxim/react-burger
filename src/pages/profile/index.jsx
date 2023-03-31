import styles from './style.module.css'
import { Outlet } from 'react-router-dom'
import { Navigate, useLocation } from 'react-router-dom'
import { getUser } from '../../services/reducers/user'
import { useSelector } from 'react-redux'
import { APP_ROUTES_MATCH } from '../../utils/constants'
import ProfileNavigation from '../../components/profile-navigation'
import AppHeader from '../../components/app-header'

function Profile() {
  const location = useLocation()
  const { auth } = useSelector(getUser)

  if (!auth) {
    return <Navigate to={APP_ROUTES_MATCH.login} state={{ from: location }} />
  }

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
