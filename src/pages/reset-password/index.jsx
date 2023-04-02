import styles from './style.module.css'
import { Link, Navigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { getUser, resetPassword } from '../../services/reducers/user'
import { useSelector } from 'react-redux'
import { APP_ROUTES_MATCH } from '../../utils/constants'
import { useForm } from '../../utils/formHooks'
import {
  Input,
  PasswordInput,
  Button,
} from '@ya.praktikum/react-developer-burger-ui-components'

function ResetPassword() {
  const dispatch = useDispatch()
  const { isResetPasswordStart, isResetPasswordFinish } = useSelector(getUser)
  const [values, handleOnChange] = useForm({
    token: '',
    password: '',
  })

  const handleOnSubmit = (e) => {
    e.preventDefault()
    dispatch(resetPassword(values))
  }

  if (isResetPasswordFinish) {
    return <Navigate to={APP_ROUTES_MATCH.login} />
  }

  if (!isResetPasswordStart) {
    return <Navigate to={APP_ROUTES_MATCH.forgotPassword} />
  }

  return (
    <div className={styles.container}>
      <form className={styles.resetPassword} onSubmit={handleOnSubmit}>
        <h2 className={styles.resetPassword__header}>Восстановление пароля</h2>
        <PasswordInput
          name="password"
          placeholder="Введите новый пароль"
          value={values.password}
          onChange={handleOnChange}
          icon="ShowIcon"
          extraClass="mt-6"
        />
        <Input
          name="token"
          placeholder="Введите код из письма"
          value={values.token}
          onChange={handleOnChange}
          extraClass="mt-6"
        />
        <Button htmlType="submit" type="primary" size="large" extraClass="mt-6">
          Сохранить
        </Button>
        <p className={`${styles.resetPassword__text} mt-20`}>
          Вспомнили пароль?
          <Link
            to={APP_ROUTES_MATCH.login}
            className={styles.resetPassword__link}
          >
            Войти
          </Link>
        </p>
      </form>
    </div>
  )
}

export default ResetPassword
