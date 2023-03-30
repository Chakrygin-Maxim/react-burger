import styles from './style.module.css'
import { Link } from 'react-router-dom'
import { useForm } from '../../utils/formHooks'
import {
  Input,
  PasswordInput,
  Button,
} from '@ya.praktikum/react-developer-burger-ui-components'

function UserProfile() {
  const [values, handleOnChange] = useForm({
    name: '',
    password: '',
    login: '',
  })

  const onSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <div className={styles.container}>
      <form className={styles.profile} onSubmit={onSubmit}>
        <section className={styles.profile__inputs}>
          <Input
            name="name"
            placeholder="Имя"
            value={values.name}
            onChange={handleOnChange}
            icon="EditIcon"
          />
          <Input
            name="login"
            placeholder="Логин"
            value={values.login}
            onChange={handleOnChange}
            icon="EditIcon"
          />
          <PasswordInput
            name="password"
            placeholder="Пароль"
            value={values.password}
            onChange={handleOnChange}
            icon="ShowIcon"
          />
        </section>
      </form>
      <div className={styles.buttons}>
        <Link to="/login" className={styles.link}>
          Отмена
        </Link>
        <Button htmlType="submit" type="primary" size="large" extraClass="mt-6">
          Сохранить
        </Button>
      </div>
    </div>
  )
}

export default UserProfile
