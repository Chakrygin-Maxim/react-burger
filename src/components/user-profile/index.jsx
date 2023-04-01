import styles from './style.module.css'
import { useForm } from '../../utils/formHooks'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  getUser,
  updateUserData,
  getUserData,
} from '../../services/reducers/user'
import {
  Input,
  PasswordInput,
  Button,
} from '@ya.praktikum/react-developer-burger-ui-components'

function UserProfile() {
  const dispatch = useDispatch()
  const { user } = useSelector(getUser)

  const [values, handleOnChange, updateValues] = useForm({ ...user })

  const isModify =
    user.name !== values.name ||
    user.email !== values.email ||
    user.password !== values.password

  const heandleUpdateUser = (e) => {
    e.preventDefault()
    const { name, email } = values
    dispatch(updateUserData({ name, email }))
  }

  const heandleCancel = () => {
    dispatch(getUserData())
    updateValues(user)
  }

  useEffect(() => {
    updateValues(user)
  }, [user, updateValues])

  return (
    <div className={styles.container}>
      <form className={styles.profile} onSubmit={heandleUpdateUser}>
        <section className={styles.profile__inputs}>
          <Input
            name="name"
            placeholder="Имя"
            value={values.name}
            onChange={handleOnChange}
            icon="EditIcon"
          />
          <Input
            name="email"
            placeholder="Логин"
            value={values.email}
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
        {isModify && (
          <div className={styles.buttons}>
            <p to="/login" className={styles.link} onClick={heandleCancel}>
              Отмена
            </p>
            <Button
              htmlType="submit"
              type="primary"
              size="large"
              extraClass="mt-6"
            >
              Сохранить
            </Button>
          </div>
        )}
      </form>
    </div>
  )
}

export default UserProfile
