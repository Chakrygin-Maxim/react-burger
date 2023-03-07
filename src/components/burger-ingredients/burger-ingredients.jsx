import burgerIngredientsStyle from './burger-ingredients.module.css'
import IngredientsGroup from '../ingredients-group/ingredients-group'
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components'
import { useState } from 'react'
import { INGREDIENTS_ARRAY_TYPE } from '../../utils/propTypes'
import {
  INGREDIENTS_TYPE,
  INGREDIENT_TYPES_FILTER_TEXT,
} from '../../utils/constants'

function BurgerIngredients({ ingredients }) {
  const [activeFilter, setActiveFilter] = useState(INGREDIENTS_TYPE[0])

  const hendleFilterClick = (value) => {
    setActiveFilter(value)
  }

  return (
    <section className={burgerIngredientsStyle.burgerIngredients}>
      <h1 className={burgerIngredientsStyle.burgerIngredients__mainText}>
        Соберите бургер
      </h1>
      <nav className={burgerIngredientsStyle.burgerIngredients__filter}>
        {INGREDIENTS_TYPE.map((ingredientType, index) => {
          return (
            <Tab
              key={index}
              value={ingredientType}
              active={ingredientType === activeFilter}
              onClick={hendleFilterClick}
            >
              {INGREDIENT_TYPES_FILTER_TEXT[ingredientType]}
            </Tab>
          )
        })}
      </nav>
      <ul className={burgerIngredientsStyle.burgerIngredients__list}>
        {INGREDIENTS_TYPE.map((ingredientType, index) => {
          const filteredIngredients = ingredients.filter(
            (ingredient) => ingredient.type === ingredientType
          )
          return (
            <IngredientsGroup
              key={index}
              ingredients={filteredIngredients}
              type={ingredientType}
            />
          )
        })}
      </ul>
    </section>
  )
}

BurgerIngredients.propTypes = {
  ingredients: INGREDIENTS_ARRAY_TYPE.isRequired,
}

export default BurgerIngredients
