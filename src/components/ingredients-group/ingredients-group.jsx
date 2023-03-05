import { INGREDIENT_TYPES_FILTER_TEXT } from '../../utils/constants'
import Ingredient from '../ingredient1/ingredient1'
import ingredientsGroupStyle from './ingredients-group.module.css'

function IngredientsGroup({ ingredients, type }) {
  return (
    <li>
      <h2 className={ingredientsGroupStyle.ingredientsGroup__header}>
        {INGREDIENT_TYPES_FILTER_TEXT[type]}
      </h2>
      <ul className={ingredientsGroupStyle.ingredientsGroup__typeGroup}>
        {ingredients.map((ingredient, index) => (
          <Ingredient key={index} ingredient={ingredient} />
        ))}
      </ul>
    </li>
  )
}

export default IngredientsGroup
