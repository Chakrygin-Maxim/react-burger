import styles from './style.module.css'
import { useForm } from '../../utils/formHooks'
import {
  Input,
  PasswordInput,
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
  )
}

export default UserProfile
