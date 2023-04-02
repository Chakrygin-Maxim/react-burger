import styles from './style.module.css'
import { INGREDIENT_TYPE } from '../../utils/propTypes'
import { useIngredientDrag } from '../../utils/dndHooks'
import {
  CurrencyIcon,
  Counter,
} from '@ya.praktikum/react-developer-burger-ui-components'

function Ingredient({ ingredient }) {
  const { opacity, ref } = useIngredientDrag(ingredient)

  return (
    <li className={styles.ingredient} ref={ref} style={{ opacity }}>
      <Counter count={ingredient.count} size="default" extraClass="m-1" />
      <img src={ingredient.image} alt={ingredient.name}></img>
      <div className={styles.ingredient__priceContainer}>
        <p className={styles.ingredient__price}>{ingredient.price}</p>
        <CurrencyIcon type="primary" />
      </div>
      <p className={styles.ingredient__text}>{ingredient.name}</p>
    </li>
  )
}

Ingredient.propTypes = {
  ingredient: INGREDIENT_TYPE.isRequired,
}

export default Ingredient
