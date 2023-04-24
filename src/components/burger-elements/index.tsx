import React from 'react'
import styles from './style.module.css'
import BurgerElement from '../burger-element'
import update from 'immutability-helper'
import { BurgerElementsProps } from './types'
import { updateItems } from '../../services/reducers/constructor'
import { useCallback } from 'react'
import { INGREDIENT_TYPES_FILTER } from '../../utils/constants'
import { useDispatch } from 'react-redux'

function BurgerElements({
  items,
  deleteIngredient,
}: BurgerElementsProps): JSX.Element {
  const dispatch = useDispatch()
  const moveElement = useCallback(
    (dragIndex: number, hoverIndex: number) => {
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

  const extraClass = items.length > 5 ? 'pr-2' : 'pr-4'

  return (
    <div className={styles.burgerElements__itemsList}>
      {items.map((item, index) => {
        return (
          item?._id &&
          item.type !== INGREDIENT_TYPES_FILTER.bun && (
            <BurgerElement
              key={item.id}
              ingredient={item}
              onDelete={deleteIngredient}
              index={index}
              moveElement={moveElement}
              extraClass={extraClass}
            />
          )
        )
      })}
    </div>
  )
}

export default React.memo(BurgerElements)
