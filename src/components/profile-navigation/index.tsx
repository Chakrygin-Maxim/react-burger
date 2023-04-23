import styles from './style.module.css'
import { useDispatch } from 'react-redux'
import { isCurrentRoute } from '../../utils/common'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { logoutUser, cleanUser } from '../../services/reducers/user'
import {
  APP_ROUTES_MATCH,
  EDIT_PROFILE_PAGE_TEXT,
  NAVIGATION,
} from '../../utils/constants'
import { AppDispatch } from '../../store'

function ProfileNavigation() {
  const dispatch: AppDispatch = useDispatch()
  const navigate = useNavigate()
  const location = useLocation()
  const { pathname } = location

  const hendleLogOut = () => {
    dispatch(cleanUser())
    dispatch(logoutUser())
    navigate(APP_ROUTES_MATCH.login, { state: { from: location } })
  }

  return (
    <nav className={styles.profileNavigation__nav}>
      <ul className={styles.profileNavigation__list}>
        <li className={styles.profileNavigation__listItem}>
          <Link
            to={NAVIGATION.profile.linkTo}
            className={`${styles.profileNavigation__mainText} ${
              isCurrentRoute(pathname, APP_ROUTES_MATCH.profile) &&
              styles.profileNavigation__mainText_link_current
            }`}
          >
            {NAVIGATION.profile.name}
          </Link>
        </li>
        <li className={styles.profileNavigation__listItem}>
          <Link
            to={NAVIGATION.history.linkTo}
            className={`${styles.profileNavigation__mainText} ${
              isCurrentRoute(pathname, APP_ROUTES_MATCH.profileOrders) &&
              styles.profileNavigation__mainText_link_current
            }`}
          >
            {NAVIGATION.history.name}
          </Link>
        </li>
        <li className={styles.profileNavigation__listItem}>
          <Link
            to={APP_ROUTES_MATCH.login}
            onClick={hendleLogOut}
            className={`${styles.profileNavigation__mainText}`}
          >
            {NAVIGATION.exit.name}
          </Link>
        </li>
      </ul>
      <p className={styles.profileNavigation__text}>{EDIT_PROFILE_PAGE_TEXT}</p>
    </nav>
  )
}

export default ProfileNavigation
