import styles from './style.module.css'
import { Link } from 'react-router-dom'
import { useForm } from '../../utils/formHooks'
import {
  Input,
  PasswordInput,
  Button,
} from '@ya.praktikum/react-developer-burger-ui-components'

function Login() {
  const [values, handleOnChange] = useForm({ password: '', email: '' })

  const handleOnSubmit = (e) => {
    e.preventDefault()
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
