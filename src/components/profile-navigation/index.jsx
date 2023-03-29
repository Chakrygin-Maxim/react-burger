import styles from './style.module.css'
import { useLocation, Link } from 'react-router-dom'
import {
  EDIT_PROFILE_PAGE_TEXT,
  NAVIGATION,
  APP_ROUTES,
} from '../../utils/constants'

function ProfileNavigation() {
  const { pathname } = useLocation()

  return (
    <nav className={styles.profileNavigation__nav}>
      <ul className={styles.profileNavigation__list}>
        <li className={styles.profileNavigation__listItem}>
          <Link
            to={APP_ROUTES.profile}
            className={`${styles.profileNavigation__mainText} ${
              pathname === APP_ROUTES.profile &&
              styles.profileNavigation__mainText_link_current
            }`}
          >
            {NAVIGATION.profile}
          </Link>
        </li>
        <li className={styles.profileNavigation__listItem}>
          <Link
            to={APP_ROUTES.profileOrders}
            className={`${styles.profileNavigation__mainText} ${
              pathname === APP_ROUTES.profileOrders &&
              styles.profileNavigation__mainText_link_current
            }`}
          >
            {NAVIGATION.history}
          </Link>
        </li>
        <li className={styles.profileNavigation__listItem}>
          <Link
            to={APP_ROUTES.root}
            className={styles.profileNavigation__mainText}
          >
            {NAVIGATION.exit}
          </Link>
        </li>
      </ul>
      <p className={styles.profileNavigation__text}>{EDIT_PROFILE_PAGE_TEXT}</p>
    </nav>
  )
}

export default ProfileNavigation
