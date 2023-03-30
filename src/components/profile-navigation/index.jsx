import styles from './style.module.css'
import { useDispatch } from 'react-redux'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { logoutUser } from '../../services/reducers/user'
import {
  APP_ROUTES,
  EDIT_PROFILE_PAGE_TEXT,
  NAVIGATION,
} from '../../utils/constants'

function ProfileNavigation() {
  const dispatch = useDispatch()
  const [currentLink, setCurrentLink] = useState(NAVIGATION.profile.type)

  const hendleLogOut = () => {
    dispatch(logoutUser())
  }

  return (
    <nav className={styles.profileNavigation__nav}>
      <ul className={styles.profileNavigation__list}>
        <li className={styles.profileNavigation__listItem}>
          <Link
            to={NAVIGATION.profile.linkTo}
            onClick={() => setCurrentLink(NAVIGATION.profile.type)}
            className={`${styles.profileNavigation__mainText} ${
              currentLink === NAVIGATION.profile.type &&
              styles.profileNavigation__mainText_link_current
            }`}
          >
            {NAVIGATION.profile.name}
          </Link>
        </li>
        <li className={styles.profileNavigation__listItem}>
          <Link
            to={NAVIGATION.history.linkTo}
            onClick={() => setCurrentLink(NAVIGATION.history.type)}
            className={`${styles.profileNavigation__mainText} ${
              currentLink === NAVIGATION.history.type &&
              styles.profileNavigation__mainText_link_current
            }`}
          >
            {NAVIGATION.history.name}
          </Link>
        </li>
        <li className={styles.profileNavigation__listItem}>
          <Link
            to={APP_ROUTES.root}
            onClick={hendleLogOut}
            className={`${styles.profileNavigation__mainText} ${
              currentLink === NAVIGATION.exit.type &&
              styles.profileNavigation__mainText_link_current
            }`}
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
