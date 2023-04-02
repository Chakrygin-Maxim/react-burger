import styles from './style.module.css'
import { Link, Navigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getUser, forgotPassword } from '../../services/reducers/user'
import { useForm } from '../../utils/formHooks'
import {
  Input,
  Button,
} from '@ya.praktikum/react-developer-burger-ui-components'

function ForgotPassword() {
  const dispatch = useDispatch()
  const { isResetPasswordStart } = useSelector(getUser)
  const [values, handleOnChange] = useForm({
    email: '',
  })

  const handleOnSubmit = (e) => {
    e.preventDefault()
    dispatch(forgotPassword(values))
  }

  if (isResetPasswordStart) {
    return <Navigate to={'/reset-password'} />
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
