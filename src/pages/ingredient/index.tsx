import styles from './style.module.css'
import IngredientDetails from '../../components/ingredient-details'
import { useSelector, useDispatch } from 'react-redux'
import { setCurrentItem } from '../../services/reducers/currentIngredient'
import { useParams } from 'react-router-dom'
import { getIngredients } from '../../services/reducers/ingredients'
import { useMemo, useEffect } from 'react'
import { IngredientItem } from '../../utils/types'

function Ingredient(): JSX.Element {
  const dispatch = useDispatch()
  const { data } = useSelector(getIngredients)
  const { id } = useParams()

  const ingredient = useMemo(() => {
    return data?.find((el: IngredientItem) => el._id === id)
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
