import ingredientStyle from './ingredient.module.css'
import PropTypes from 'prop-types'
import { useDrag } from 'react-dnd/dist/hooks'
import { INGREDIENT_TYPE } from '../../utils/propTypes'
import {
  CurrencyIcon,
  Counter,
} from '@ya.praktikum/react-developer-burger-ui-components'

function Ingredient({ ingredient, onClick }) {
  const handlerOnClick = () => {
    onClick(ingredient)
  }

  const [{ opacity }, ref] = useDrag({
    type: 'item',
    item: ingredient,
    collect: (monitor) => ({
      opacity: monitor.isDragging() ? 0.5 : 1,
    }),
  })

  return (
    <li
      className={ingredientStyle.ingredient}
      onClick={handlerOnClick}
      ref={ref}
      style={{ opacity }}
    >
      <Counter count={ingredient.count} size="default" extraClass="m-1" />
      <img src={ingredient.image} alt={ingredient.name}></img>
      <div className={ingredientStyle.ingredient__priceContainer}>
        <p className={ingredientStyle.ingredient__price}>{ingredient.price}</p>
        <CurrencyIcon type="primary" />
      </div>
      <p className={ingredientStyle.ingredient__text}>{ingredient.name}</p>
    </li>
  )
}

Ingredient.propTypes = {
  ingredient: INGREDIENT_TYPE.isRequired,
  onClick: PropTypes.func.isRequired,
}

export default Ingredient
