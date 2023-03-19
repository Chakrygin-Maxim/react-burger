import Ingredient from '../ingredient/ingredient'
import ingredientsGroupStyle from './ingredients-group.module.css'
import PropTypes from 'prop-types'
import { forwardRef } from 'react'
import { INGREDIENT_TYPES_FILTER_TEXT } from '../../utils/constants'
import {
  INGREDIENTS_ARRAY_TYPE,
  INGREDIENT_TYPES_TYPE,
} from '../../utils/propTypes'

const IngredientsGroup = forwardRef(
  ({ ingredients, type, ingredientOnClick }, ref) => {
    return (
      <li id={type} ref={ref.current[type].clickRef}>
        <h2 className={ingredientsGroupStyle.ingredientsGroup__header}>
          {INGREDIENT_TYPES_FILTER_TEXT[type]}
        </h2>
        <ul
          className={ingredientsGroupStyle.ingredientsGroup__typeGroup}
          ref={ref.current[type].scrollRef}
        >
          {ingredients.map((ingredient) => (
            <Ingredient
              key={ingredient._id}
              ingredient={ingredient}
              onClick={ingredientOnClick}
            />
          ))}
        </ul>
      </li>
    )
  }
)

IngredientsGroup.propTypes = {
  ingredients: INGREDIENTS_ARRAY_TYPE.isRequired,
  type: INGREDIENT_TYPES_TYPE.isRequired,
  ingredientOnClick: PropTypes.func.isRequired,
}

IngredientsGroup.displayName = 'IngredientsGroup'

export default IngredientsGroup
