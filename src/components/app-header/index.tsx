import styles from './style.module.css'
import { isCurrentRoute } from '../../utils/common'
import { Link, useLocation } from 'react-router-dom'
import { APP_ROUTES_MATCH } from '../../utils/constants'
import {
  BurgerIcon,
  Logo,
  ProfileIcon,
  ListIcon,
} from '@ya.praktikum/react-developer-burger-ui-components'

function AppHeader(): JSX.Element {
  const { pathname } = useLocation()

  return (
    <header className={styles.appHeader}>
      <nav className={styles.appHeader__navbar}>
        <ul className={styles.appHeader__list}>
          <li className={styles.appHeader__listItem}>
            <BurgerIcon
              type={
                isCurrentRoute(pathname, APP_ROUTES_MATCH.root)
                  ? 'primary'
                  : 'secondary'
              }
            />
            <Link
              to={APP_ROUTES_MATCH.root}
              className={`${styles.appHeader__linkText} ${
                isCurrentRoute(pathname, APP_ROUTES_MATCH.root)
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
                isCurrentRoute(pathname, APP_ROUTES_MATCH.orderList)
                  ? 'primary'
                  : 'secondary'
              }
            />
            <p
              className={`${styles.appHeader__linkText} ${
                isCurrentRoute(pathname, APP_ROUTES_MATCH.orderList)
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
              isCurrentRoute(pathname, APP_ROUTES_MATCH.profile) ||
              isCurrentRoute(pathname, APP_ROUTES_MATCH.profileOrders)
                ? 'primary'
                : 'secondary'
            }
          />
          <Link
            to="/profile"
            className={`${styles.appHeader__linkText} ${
              isCurrentRoute(pathname, APP_ROUTES_MATCH.profile) ||
              isCurrentRoute(pathname, APP_ROUTES_MATCH.profileOrders)
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
