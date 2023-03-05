import { INGREDIENT_TYPES_FILTER_TEXT } from '../../utils/constants'
import Ingredient from '../Ingredient/Ingredient'
import ingredientsGroupStyle from './IngredientsGroup.module.css'

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
