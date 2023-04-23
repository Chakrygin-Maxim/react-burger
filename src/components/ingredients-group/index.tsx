import Ingredient from '../ingredient'
import styles from './style.module.css'
import { Link, useLocation } from 'react-router-dom'
import { forwardRef } from 'react'
import {
  INGREDIENT_TYPES_FILTER_TEXT,
  IngredientFilterText,
} from '../../utils/constants'
import { IngredientsGroupProps } from './types'

const IngredientsGroup = forwardRef(
  ({ ingredients, type }: IngredientsGroupProps, ref) => {
    const location = useLocation()

    return (
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      <li id={type} ref={ref.current[type].clickRef}>
        <h2 className={styles.ingredientsGroup__header}>
          {INGREDIENT_TYPES_FILTER_TEXT[type as keyof IngredientFilterText]}
        </h2>
        <ul
          className={styles.ingredientsGroup__typeGroup}
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
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
  }
)

IngredientsGroup.displayName = 'IngredientsGroup'

export default IngredientsGroup
