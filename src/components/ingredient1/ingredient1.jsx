import ingredientStyle from './ingredient1.module.css'
import {
  CurrencyIcon,
  Counter,
} from '@ya.praktikum/react-developer-burger-ui-components'

function Ingredient(props) {
  const { ingredient } = props

  return (
    <a className={ingredientStyle.ingredient}>
      <Counter count={1} size="default" extraClass="m-1" />
      <img src={ingredient.image} alt={ingredient.name}></img>
      <div className={ingredientStyle.ingredient__priceContainer}>
        <p className={ingredientStyle.ingredient__price}>{ingredient.price}</p>
        <CurrencyIcon type="primary" />
      </div>

      <p className={ingredientStyle.ingredient__text}>{ingredient.name}</p>
    </a>
  )
}

export default Ingredient
