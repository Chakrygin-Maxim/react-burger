import ingredientStyle from './Ingredient.module.css'
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'

function Ingredient(props) {
  const { ingredient } = props

  return (
    <a className={ingredientStyle.ingredient}>
      <div className={ingredientStyle.counterContainer}>
        <p className={ingredientStyle.counter}>1</p>
      </div>
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
