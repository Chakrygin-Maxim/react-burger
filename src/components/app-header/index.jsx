import styles from './style.module.css'
import { Link, useLocation } from 'react-router-dom'
import { useCallback } from 'react'
import { APP_ROUTES } from '../../utils/constants'
import {
  BurgerIcon,
  Logo,
  ProfileIcon,
  ListIcon,
} from '@ya.praktikum/react-developer-burger-ui-components'

function AppHeader() {
  const { pathname } = useLocation()

  const isCurrentRoute = useCallback(
    (route) => {
      return pathname === route
    },
    [pathname]
  )

  return (
    <header className={styles.appHeader}>
      <nav className={styles.appHeader__navbar}>
        <ul className={styles.appHeader__list}>
          <li className={styles.appHeader__listItem}>
            <BurgerIcon
              type={isCurrentRoute(APP_ROUTES.root) ? 'primary' : 'secondary'}
            />
            <Link
              to={APP_ROUTES.root}
              className={`${styles.appHeader__linkText} ${
                isCurrentRoute(APP_ROUTES.root)
                  ? styles.appHeader__linkText_type_primary
                  : styles.appHeader__linkText_type_secondary
              }`}
            >
              Конструктор
            </Link>
          </li>
          <li className={styles.appHeader__listItem}>
            <ListIcon
              type={
                isCurrentRoute(APP_ROUTES.orderList) ? 'primary' : 'secondary'
              }
            />
            <p
              className={`${styles.appHeader__linkText} ${
                isCurrentRoute(APP_ROUTES.orderList)
                  ? styles.appHeader__linkText_type_primary
                  : styles.appHeader__linkText_type_secondary
              }`}
            >
              Лента Заказов
            </p>
          </li>
        </ul>
        <div className={styles.appHeader__mainLogo}>
          <Link to="/">
            <Logo />
          </Link>
        </div>
        <div className={styles.appHeader__listItem}>
          <ProfileIcon
            type={
              isCurrentRoute(APP_ROUTES.profile) ||
              isCurrentRoute(APP_ROUTES.profileOrders)
                ? 'primary'
                : 'secondary'
            }
          />
          <Link
            to="/profile"
            className={`${styles.appHeader__linkText} ${
              isCurrentRoute(APP_ROUTES.profile) ||
              isCurrentRoute(APP_ROUTES.profileOrders)
                ? styles.appHeader__linkText_type_primary
                : styles.appHeader__linkText_type_secondary
            }`}
          >
            Личный Кабинет
          </Link>
        </div>
      </nav>
    </header>
  )
}

export default AppHeader
