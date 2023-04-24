import styles from './style.module.css'
import { Link, Navigate, useLocation } from 'react-router-dom'
import { loginUser } from '../../services/reducers/user'
import { useDispatch, useSelector } from 'react-redux'
import { getUser } from '../../services/reducers/user'
import { useForm } from '../../utils/formHooks'
import {
  Input,
  PasswordInput,
  Button,
} from '@ya.praktikum/react-developer-burger-ui-components'
import { APP_ROUTES_MATCH } from '../../utils/constants'
import { AppDispatch } from '../../store'

function Login(): JSX.Element {
  const dispatch: AppDispatch = useDispatch()
  const location = useLocation()
  const { auth } = useSelector(getUser)
  const [values, handleOnChange] = useForm({ password: '', email: '' })

  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    dispatch(loginUser(values))
  }

  if (auth) {
    return (
      <Navigate
        to={location.state?.from.pathname || APP_ROUTES_MATCH.root}
        state={{ from: location }}
      />
    )
  }

  return (
    <div className={styles.container}>
      <form className={styles.login} onSubmit={handleOnSubmit}>
        <h2 className={styles.login__header}>Вход</h2>
        <Input
          name="email"
          type="email"
          placeholder="E-mail"
          value={values.email}
          onChange={handleOnChange}
          icon="EditIcon"
          extraClass="mt-6"
        />
        <PasswordInput
          name="password"
          placeholder="Пароль"
          value={values.password}
          onChange={handleOnChange}
          icon="ShowIcon"
          extraClass="mt-6"
        />
        <Button htmlType="submit" type="primary" size="large" extraClass="mt-6">
          Войти
        </Button>
        <p className={`${styles.login__text} mt-20`}>
          Вы - новый пользователь?
          <Link to="/register" className={styles.login__link}>
            Зарегистрироваться
          </Link>
        </p>
        <p className={styles.login__text}>
          Забыли пароль?
          <Link to="/forgot-password" className={styles.login__link}>
            Восстановить пароль
          </Link>
        </p>
      </form>
    </div>
  )
}

export default Login
