import burgerIngredientsStyle from './burger-ingredients.module.css'
import IngredientsGroup from '../ingredients-group/ingredients-group'
import Modal from '../modal/modal'
import IngredientDetails from '../ingredient-details/ingredient-details'
import { useSelector, useDispatch } from 'react-redux'
import { useInView } from 'react-intersection-observer'
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components'
import { useState, useEffect, useRef } from 'react'
import {
  setCurrentItem,
  deleteCurrentItem,
} from '../../services/reducers/currentIngredient'

import {
  INGREDIENTS_TYPE,
  INGREDIENT_TYPES_FILTER_TEXT,
  INGREDIENT_TYPES_FILTER,
} from '../../utils/constants'

function BurgerIngredients() {
  const dispatch = useDispatch()
  const ingredients = useSelector((store) => store.ingredients.data)
  const currentIngredient = useSelector((store) => store.currentIngredient.item)

  const [activeFilter, setActiveFilter] = useState(INGREDIENTS_TYPE[0])
  const [showIngrientsDetails, setShowIngrientsDetails] = useState(false)

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

  const openIngredientDetails = (ingredient) => {
    dispatch(setCurrentItem(ingredient))
    setShowIngrientsDetails(true)
  }

  const closeIngredientDetails = () => {
    setShowIngrientsDetails(false)
    // таймаут чтобы картинка не пропада раньше закрытия попапа
    const timerId = setTimeout(() => {
      dispatch(deleteCurrentItem())
    }, 1000)
    clearTimeout(timerId)
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
            const filteredIngredients = ingredients.filter(
              (ingredient) => ingredient.type === ingredientType
            )
            return (
              <IngredientsGroup
                key={index}
                ingredients={filteredIngredients}
                type={ingredientType}
                ingredientOnClick={openIngredientDetails}
                ref={refs}
              />
            )
          })}
        </ul>
      </section>
      <Modal onClose={closeIngredientDetails} isOpen={showIngrientsDetails}>
        <IngredientDetails ingredient={currentIngredient} />
      </Modal>
    </>
  )
}

export default BurgerIngredients
