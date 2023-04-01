import styles from './style.module.css'
import IngredientDetails from '../../components/ingredient-details'
import { useSelector, useDispatch } from 'react-redux'
import { setCurrentItem } from '../../services/reducers/currentIngredient'
import { useParams } from 'react-router-dom'
import { getIngredients } from '../../services/reducers/ingredients'
import { useMemo, useEffect } from 'react'

function Ingredient() {
  const dispatch = useDispatch()
  const { data } = useSelector(getIngredients)
  const { id } = useParams()

  const ingredient = useMemo(() => {
    return data?.find((el) => el._id === id)
  }, [data, id])

  useEffect(() => {
    ingredient && dispatch(setCurrentItem(ingredient))
  }, [ingredient, dispatch])

  return (
    <main className={styles.main}>
      {ingredient && <IngredientDetails ingredient={ingredient} />}
    </main>
  )
}

export default Ingredient
