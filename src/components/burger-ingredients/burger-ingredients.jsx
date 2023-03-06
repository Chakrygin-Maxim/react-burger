import { Tab } from '@ya.praktikum/react-developer-burger-ui-components'
import PropTypes from 'prop-types'
import { useState } from 'react'
import burgerIngredientsStyle from './burger-ingredients.module.css'
import IngredientsGroup from '../ingredients-group/ingredients-group'
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
  ingredients: PropTypes.array.isRequired,
}

export default BurgerIngredients
