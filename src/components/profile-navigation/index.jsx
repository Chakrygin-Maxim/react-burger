import styles from './style.module.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  EDIT_PROFILE_PAGE_TEXT,
  NAVIGATION,
  NAVIGATION_TYPE,
} from '../../utils/constants'

function ProfileNavigation() {
  const [currentLink, setCurrentLink] = useState(NAVIGATION.profile.type)

  return (
    <nav className={styles.profileNavigation__nav}>
      <ul className={styles.profileNavigation__list}>
        {NAVIGATION_TYPE.map((item, index) => {
          return (
            <li key={index} className={styles.profileNavigation__listItem}>
              <Link
                to={NAVIGATION[item].linkTo}
                onClick={() => setCurrentLink(NAVIGATION[item].type)}
                className={`${styles.profileNavigation__mainText} ${
                  currentLink === NAVIGATION[item].type &&
                  styles.profileNavigation__mainText_link_current
                }`}
              >
                {NAVIGATION[item].name}
              </Link>
            </li>
          )
        })}
      </ul>
      <p className={styles.profileNavigation__text}>{EDIT_PROFILE_PAGE_TEXT}</p>
    </nav>
  )
}

export default ProfileNavigation
