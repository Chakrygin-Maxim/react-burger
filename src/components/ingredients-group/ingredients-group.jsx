import { INGREDIENT_TYPES_FILTER_TEXT } from '../../utils/constants'
import PropTypes from 'prop-types'
import Ingredient from '../ingredient/ingredient'
import ingredientsGroupStyle from './ingredients-group.module.css'

function IngredientsGroup({ ingredients, type }) {
  return (
    <li>
      <h2 className={ingredientsGroupStyle.ingredientsGroup__header}>
        {INGREDIENT_TYPES_FILTER_TEXT[type]}
      </h2>
      <ul className={ingredientsGroupStyle.ingredientsGroup__typeGroup}>
        {ingredients.map((ingredient) => (
          <Ingredient key={ingredient._id} ingredient={ingredient} />
        ))}
      </ul>
    </li>
  )
}

IngredientsGroup.propTypes = {
  ingredients: PropTypes.array.isRequired,
  type: PropTypes.string.isRequired,
}

export default IngredientsGroup
