import Ingredient from '../ingredient/ingredient'
import styles from './ingredients-group.module.css'
import { Link, useLocation } from 'react-router-dom'
import { forwardRef } from 'react'
import { INGREDIENT_TYPES_FILTER_TEXT } from '../../utils/constants'
import {
  INGREDIENTS_ARRAY_TYPE,
  INGREDIENT_TYPES_TYPE,
} from '../../utils/propTypes'

const IngredientsGroup = forwardRef(({ ingredients, type }, ref) => {
  const location = useLocation()

  return (
    <li id={type} ref={ref.current[type].clickRef}>
      <h2 className={styles.ingredientsGroup__header}>
        {INGREDIENT_TYPES_FILTER_TEXT[type]}
      </h2>
      <ul
        className={styles.ingredientsGroup__typeGroup}
        ref={ref.current[type].scrollRef}
      >
        {ingredients.map((ingredient) => (
          <Link
            key={ingredient._id}
            to={`/ingredients/${ingredient._id}`}
            state={{ background: location }}
            className={styles.ingredient__link}
          >
            <Ingredient key={ingredient._id} ingredient={ingredient} />
          </Link>
        ))}
      </ul>
    </li>
  )
})

IngredientsGroup.propTypes = {
  ingredients: INGREDIENTS_ARRAY_TYPE.isRequired,
  type: INGREDIENT_TYPES_TYPE.isRequired,
}

IngredientsGroup.displayName = 'IngredientsGroup'

export default IngredientsGroup
