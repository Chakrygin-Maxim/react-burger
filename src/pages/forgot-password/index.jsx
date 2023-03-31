import styles from './style.module.css'
import { Link, Navigate, useLocation } from 'react-router-dom'
import { getUser } from '../../services/reducers/user'
import { useSelector } from 'react-redux'
import { APP_ROUTES } from '../../utils/constants'
import { useForm } from '../../utils/formHooks'
import {
  Input,
  Button,
} from '@ya.praktikum/react-developer-burger-ui-components'

function ForgotPassword() {
  const location = useLocation()
  const { auth } = useSelector(getUser)
  const [values, handleOnChange] = useForm({
    name: '',
    password: '',
    email: '',
  })

  const handleOnSubmit = (e) => {
    e.preventDefault()
  }

  if (auth) {
    return <Navigate to={APP_ROUTES.root} state={{ from: location }} />
  }

  return (
    <div className={styles.container}>
      <form className={styles.forgotPassword} onSubmit={handleOnSubmit}>
        <h2 className={styles.forgotPassword__header}>Восстановление пароля</h2>
        <Input
          name="email"
          type="email"
          placeholder="Укажите e-mail"
          value={values.email}
          onChange={handleOnChange}
          extraClass="mt-6"
        />
        <Button htmlType="submit" type="primary" size="large" extraClass="mt-6">
          Восстановить
        </Button>
        <p className={`${styles.forgotPassword__text} mt-20`}>
          Вспомнили пароль?
          <Link to="/login" className={styles.forgotPassword__link}>
            Войти
          </Link>
        </p>
      </form>
    </div>
  )
}

export default ForgotPassword
