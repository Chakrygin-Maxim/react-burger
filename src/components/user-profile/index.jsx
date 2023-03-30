import styles from './style.module.css'
import { useForm } from '../../utils/formHooks'
import { useEffect, useMemo } from 'react'
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
  const inititialState = useMemo((user) => {
    return { ...user, password: '' }
  }, [])

  const [values, handleOnChange, updateValues] = useForm(inititialState)

  const heandleUpdateUser = () => {
    const { name, email } = values
    dispatch(updateUserData({ name, email }))
  }

  const heandleCancel = () => {
    dispatch(getUserData())
    updateValues(inititialState, user)
  }

  useEffect(() => {
    updateValues(inititialState, user)
  }, [user, inititialState, updateValues])

  return (
    <div className={styles.container}>
      <form className={styles.profile}>
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
      </form>
      <div className={styles.buttons}>
        <p to="/login" className={styles.link} onClick={heandleCancel}>
          Отмена
        </p>
        <Button
          htmlType="submit"
          type="primary"
          size="large"
          extraClass="mt-6"
          onClick={heandleUpdateUser}
        >
          Сохранить
        </Button>
      </div>
    </div>
  )
}

export default UserProfile
