import appHeaderStyle from './app-header.module.css'
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
          <Logo />
        </div>
        <a className={appHeaderStyle.appHeader__link}>
          <ProfileIcon type="secondary" />
          <p
            className={`${appHeaderStyle.appHeader__linkText} ${appHeaderStyle.appHeader__linkText_type_secondary}`}
          >
            Личный Кабинет
          </p>
        </a>
      </nav>
    </header>
  )
}

export default AppHeader
