import Modal from '../../components/modal'
import IngredientDetails from '../../components/ingredient-details'
import styles from './style.module.css'
import { useSelector, useDispatch } from 'react-redux'
import {
  deleteCurrentItem,
  setCurrentItem,
} from '../../services/reducers/currentIngredient'
import { useParams, useNavigate, useLocation } from 'react-router-dom'
import { getIngredients } from '../../services/reducers/ingredients'
import { useMemo, useEffect } from 'react'

const Loading = () => {
  return <h2 className={styles.loadingText}> Загрузка ингредиента...</h2>
}

function ModalIngredient() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const location = useLocation()
  const { data } = useSelector(getIngredients)
  const { id } = useParams()

  const ingredient = useMemo(() => {
    return data?.find((el) => el._id === id)
  }, [data, id])

  useEffect(() => {
    ingredient && dispatch(setCurrentItem(ingredient))
  }, [ingredient, dispatch])

  const closeIngredientDetails = () => {
    location?.state?.background && navigate(location.state.background)
    dispatch(deleteCurrentItem())
  }

  return (
    <Modal onClose={closeIngredientDetails}>
      {ingredient ? <IngredientDetails ingredient={ingredient} /> : <Loading />}
    </Modal>
  )
}

export default ModalIngredient
