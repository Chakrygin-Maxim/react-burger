import { useState } from 'react'
import burgerIngredientsStyle from './BurgerIngredients.module.css'
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components'
import IngredientsGroup from '../IngredientsGroup/IngredientsGroup'
import {
  INGREDIENTS_TYPE,
  INGREDIENT_TYPES_FILTER,
} from '../../utils/constants'

function BurgerIngredients({ ingredients }) {
  const [activeFilter, setActiveFilter] = useState(INGREDIENTS_TYPE[0])

  const onClick = (value) => {
    setActiveFilter(value)
  }

  return (
    <section className={burgerIngredientsStyle.burgerIngredients}>
      <h1 className={burgerIngredientsStyle.burgerIngredients__mainText}>
        Соберите бургер
      </h1>
      <nav className={burgerIngredientsStyle.burgerIngredients__filter}>
        {INGREDIENTS_TYPE.map((ingredientType, index) => {
          const isActive = ingredientType === activeFilter
          return (
            <Tab
              key={index}
              value={ingredientType}
              active={isActive}
              onClick={onClick}
            >
              {INGREDIENT_TYPES_FILTER[ingredientType]}
            </Tab>
          )
        })}
      </nav>
      <ul className={burgerIngredientsStyle.burgerIngredients__list}>
        {INGREDIENTS_TYPE.map((ingredientType) => {
          const filteredIngredients = ingredients.filter(
            (ingredient) => ingredient.type === ingredientType
          )
          return (
            <IngredientsGroup
              key={ingredientType}
              ingredients={filteredIngredients}
              type={ingredientType}
            />
          )
        })}
      </ul>
    </section>
  )
}

export default BurgerIngredients
