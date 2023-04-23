import styles from './style.module.css'
import IngredientsGroup from '../ingredients-group'
import { useSelector } from 'react-redux'
import { useInView } from 'react-intersection-observer'
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components'
import { useState, useEffect, useRef } from 'react'
import { getIngredients } from '../../services/reducers/ingredients'
import {
  INGREDIENTS_TYPE,
  INGREDIENT_TYPES_FILTER_TEXT,
  INGREDIENT_TYPES_FILTER,
  IngredientFilterText,
} from '../../utils/constants'
import { IngredientItem, Ingredients } from '../../utils/types'
import { ScrollRefs } from './types'

function BurgerIngredients() {
  const { data } = useSelector(getIngredients)
  const [activeFilter, setActiveFilter] = useState<string>(INGREDIENTS_TYPE[0])
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

  const refs = useRef<ScrollRefs>({
    bun: { clickRef: useRef(null), scrollRef: bunsRef },
    sauce: { clickRef: useRef(null), scrollRef: saucesRef },
    main: { clickRef: useRef(null), scrollRef: mainRef },
  })

  const hendleFilterClick = (value: string) => {
    setActiveFilter(value)

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    refs.current[value].clickRef.current?.scrollIntoView()
  }

  return (
    <>
      <section className={styles.burgerIngredients}>
        <h1 className={styles.burgerIngredients__mainText}>Соберите бургер</h1>
        <nav className={styles.burgerIngredients__filter}>
          {INGREDIENTS_TYPE.map((ingredientType: string, index) => {
            return (
              <Tab
                key={index}
                value={ingredientType}
                active={ingredientType === activeFilter}
                onClick={hendleFilterClick}
              >
                {
                  INGREDIENT_TYPES_FILTER_TEXT[
                    ingredientType as keyof IngredientFilterText
                  ]
                }
              </Tab>
            )
          })}
        </nav>
        <ul className={styles.burgerIngredients__list}>
          {INGREDIENTS_TYPE.map((ingredientType, index) => {
            const filteredIngredients: Ingredients = data.filter(
              (ingredient: IngredientItem) => ingredient.type === ingredientType
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
