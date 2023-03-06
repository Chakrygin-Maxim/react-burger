import ingredientStyle from './ingredient.module.css'
import { useState } from 'react'
import Modal from '../modal/modal'
import {
  CurrencyIcon,
  Counter,
} from '@ya.praktikum/react-developer-burger-ui-components'
import IngredientDetails from '../ingredient-details/ingredient-details'

function Ingredient({ ingredient }) {
  const [showIngrientsDetails, setShowIngrientsDetails] = useState(false)

  const hendleIngredientOnClick = () => {
    setShowIngrientsDetails(!showIngrientsDetails)
  }

  return (
    <>
      <li
        className={ingredientStyle.ingredient}
        onClick={hendleIngredientOnClick}
      >
        <Counter count={1} size="default" extraClass="m-1" />
        <img src={ingredient.image} alt={ingredient.name}></img>
        <div className={ingredientStyle.ingredient__priceContainer}>
          <p className={ingredientStyle.ingredient__price}>
            {ingredient.price}
          </p>
          <CurrencyIcon type="primary" />
        </div>
        <p className={ingredientStyle.ingredient__text}>{ingredient.name}</p>
      </li>

      <Modal onClose={hendleIngredientOnClick} isOpen={showIngrientsDetails}>
        <IngredientDetails ingredient={ingredient} />
      </Modal>
    </>
  )
}

export default Ingredient
