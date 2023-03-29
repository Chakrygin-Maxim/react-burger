import burgerIngredientsStyle from './burger-ingredients.module.css'
import IngredientsGroup from '../ingredients-group/ingredients-group'
import { useSelector } from 'react-redux'
import { useInView } from 'react-intersection-observer'
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components'
import { useState, useEffect, useRef } from 'react'
import { getIngredients } from '../../services/reducers/ingredients'
import {
  INGREDIENTS_TYPE,
  INGREDIENT_TYPES_FILTER_TEXT,
  INGREDIENT_TYPES_FILTER,
} from '../../utils/constants'

function BurgerIngredients() {
  const { data } = useSelector(getIngredients)
  const [activeFilter, setActiveFilter] = useState(INGREDIENTS_TYPE[0])
  const inViewOption = {
    threshold: 0.5,
  }

  const [bunsRef, bunsInView] = useInView(inViewOption)
  const [saucesRef, sauceInView] = useInView(inViewOption)
  const [mainRef, mainInView] = useInView(inViewOption)

  useEffect(() => {
    if (bunsInView) {
      setActiveFilter(INGREDIENT_TYPES_FILTER.bun)
    } else if (sauceInView) {
      setActiveFilter(INGREDIENT_TYPES_FILTER.sauce)
    } else if (mainInView) {
      setActiveFilter(INGREDIENT_TYPES_FILTER.main)
    }
  }, [bunsInView, sauceInView, mainInView])

  const refs = useRef({
    bun: { clickRef: useRef(null), scrollRef: bunsRef },
    sauce: { clickRef: useRef(null), scrollRef: saucesRef },
    main: { clickRef: useRef(null), scrollRef: mainRef },
  })

  const hendleFilterClick = (value) => {
    setActiveFilter(value)
    refs.current[value].clickRef.current?.scrollIntoView()
  }

  return (
    <>
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
            const filteredIngredients = data.filter(
              (ingredient) => ingredient.type === ingredientType
            )
            return (
              <IngredientsGroup
                key={index}
                ingredients={filteredIngredients}
                type={ingredientType}
                ref={refs}
              />
            )
          })}
        </ul>
      </section>
    </>
  )
}

export default BurgerIngredients
