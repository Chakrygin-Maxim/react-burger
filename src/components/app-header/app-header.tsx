import appHeaderStyle from './app-header.module.css'
import { Link } from 'react-router-dom'
import {
  BurgerIcon,
  Logo,
  ProfileIcon,
  ListIcon,
} from '@ya.praktikum/react-developer-burger-ui-components'

function AppHeader() {
  return (
    <header className={appHeaderStyle.appHeader}>
      <nav className={appHeaderStyle.appHeader__navbar}>
        <ul className={appHeaderStyle.appHeader__list}>
          <li>
            <a className={appHeaderStyle.appHeader__link}>
              <BurgerIcon type="primary" />
              <p
                className={`${appHeaderStyle.appHeader__linkText} ${appHeaderStyle.appHeader__linkText_type_primary}`}
              >
                Конструктор
              </p>
            </a>
          </li>
          <li>
            <a className={appHeaderStyle.appHeader__link}>
              <ListIcon type="primary" />
              <p
                className={`${appHeaderStyle.appHeader__linkText} ${appHeaderStyle.appHeader__linkText_type_secondary}`}
              >
                Лента Заказов
              </p>
            </a>
          </li>
        </ul>
        <div className={appHeaderStyle.appHeader__mainLogo}>
          <Link to="/">
            <Logo />
          </Link>
        </div>
        <>
          <ProfileIcon type="secondary" />
          <Link
            to="/profile"
            className={`${appHeaderStyle.appHeader__linkText} ${appHeaderStyle.appHeader__linkText_type_secondary}`}
          >
            Личный Кабинет
          </Link>
        </>
      </nav>
    </header>
  )
}

export default AppHeader
