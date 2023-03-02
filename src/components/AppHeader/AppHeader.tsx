import appHeaderStyle from './AppHeader.module.css'
import {
  BurgerIcon,
  Logo,
  ProfileIcon,
} from '@ya.praktikum/react-developer-burger-ui-components'

function AppHeader() {
  return (
    <header className={appHeaderStyle.appHeader}>
      <nav className={appHeaderStyle.appHeader__navbar}>
        <ul className={appHeaderStyle.appHeader__list}>
          <li>
            <a className={appHeaderStyle.appHeader__link}>
              <BurgerIcon type="primary" />
              <p className={appHeaderStyle.appHeader__linkText}>Конструктор</p>
            </a>
          </li>
          <li>
            <a className={appHeaderStyle.appHeader__link}>Лента Заказов</a>
          </li>
        </ul>
        <div className={appHeaderStyle.appHeader__mainLogo}>
          <Logo />
        </div>
        <a className={appHeaderStyle.appHeader__link}>
          <ProfileIcon type="secondary" />
          <p className={appHeaderStyle.appHeader__linkText}>Личный Кабинет</p>
        </a>
      </nav>
    </header>
  )
}

export default AppHeader
