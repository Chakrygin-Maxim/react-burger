import styles from './style.module.css'
import { Link } from 'react-router-dom'
import { useForm } from '../../utils/formHooks'
import {
  Input,
  PasswordInput,
  Button,
} from '@ya.praktikum/react-developer-burger-ui-components'
import { registerUser } from '../../services/reducers/user'
import { useDispatch } from 'react-redux'

function Register() {
  const dispatch = useDispatch()
  const [values, handleOnChange] = useForm({
    name: '',
    password: '',
    email: '',
  })

  const handleOnSubmit = (e) => {
    e.preventDefault()
    dispatch(registerUser(values))
  }

  return (
    <div className={styles.container}>
      <form className={styles.register} onSubmit={handleOnSubmit}>
        <h2 className={styles.register__header}>Регистрация</h2>
        <Input
          name="name"
          placeholder="Имя"
          value={values.name}
          onChange={handleOnChange}
          extraClass="mt-6"
        />
        <Input
          name="email"
          type="email"
          placeholder="E-mail"
          value={values.email}
          onChange={handleOnChange}
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
          Зарегистрироваться
        </Button>
        <p className={`${styles.register__text} mt-20`}>
          Уже зарегистрированы?
          <Link to="/login" className={styles.register__link}>
            Войти
          </Link>
        </p>
      </form>
    </div>
  )
}

export default Register
