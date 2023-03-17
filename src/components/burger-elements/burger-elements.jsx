import burgerElementsStyle from './burger-elements.module.css'
import BurgerElement from '../burger-element/burger-element'
import update from 'immutability-helper'
import { updateItems } from '../../services/reducers/constructor'
import { useCallback } from 'react'
import { INGREDIENT_TYPES_FILTER } from '../../utils/constants'
import { useDispatch } from 'react-redux'

function BurgerElements({ items, deleteIngredient }) {
  const dispatch = useDispatch()
  const moveCard = useCallback(
    (dragIndex, hoverIndex) => {
      const newItems = update(items, {
        $splice: [
          [dragIndex, 1],
          [hoverIndex, 0, items[dragIndex]],
        ],
      })
      dispatch(updateItems(newItems))
    },
    [dispatch, items]
  )

  return (
    <div className={burgerElementsStyle.burgerElements__itemsList}>
      {items.map((item, index) => {
        return (
          item?._id &&
          item.type !== INGREDIENT_TYPES_FILTER.bun && (
            <BurgerElement
              key={item.id}
              ingredient={item}
              onDelete={deleteIngredient}
              index={index}
              moveCard={moveCard}
            />
          )
        )
      })}
    </div>
  )
}

export default BurgerElements
