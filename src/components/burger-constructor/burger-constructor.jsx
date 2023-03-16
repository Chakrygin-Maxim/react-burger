import burgerConstructorStyle from './burger-constructor.module.css'
import OrderDetails from '../order-details/order-details'
import Modal from '../modal/modal'
import Price from '../price/price'
import Bun from '../bun/bun'
import BurgerElements from '../burger-elements/burger-elements'
import { v4 as uuidv4 } from 'uuid'
import { useDispatch, useSelector } from 'react-redux'
import {
  INGREDIENT_TYPES_FILTER,
  BURGER_POSITIONS,
} from '../../utils/constants'
import { useState, useMemo, useCallback } from 'react'
import { Button } from '@ya.praktikum/react-developer-burger-ui-components'
import { useDrop, useDrag } from 'react-dnd/dist/hooks/useDrop'
import {
  addBun,
  addItem,
  removeItem,
} from '../../services/reducers/constructor'
import {
  updateBunsCount,
  increaseItemCount,
  decreaseItemCount,
} from '../../services/reducers/ingredients'

function BurgerConstructor() {
  const dispatch = useDispatch()
  const [orderDetailsIsOpen, setOrderDetailsIsOpen] = useState(false)
  const { bun, items } = useSelector((store) => store.ingredientsConstructor)

  const handlerButtonOnClick = () => {
    setOrderDetailsIsOpen(!orderDetailsIsOpen)
  }

  const total = useMemo(() => {
    let sum = 0

    sum = (bun?.price && bun.price * 2) || 0
    items.forEach((item) => (sum = sum + item.price))

    return sum
  }, [bun, items])

  const updateBuns = (item) => {
    dispatch(addBun(item))
    dispatch(updateBunsCount(item))
  }

  const updateItems = (item) => {
    dispatch(addItem({ item, id: uuidv4(), apiId: item._id }))
    dispatch(increaseItemCount(item))
  }

  const deleteIngredient = useCallback(
    (item) => {
      dispatch(removeItem(item._id))
      dispatch(decreaseItemCount(item))
    },
    [dispatch]
  )

  const [, dropTarget] = useDrop({
    accept: 'item',
    drop(item) {
      item.type === INGREDIENT_TYPES_FILTER.bun && updateBuns(item)
      item.type !== INGREDIENT_TYPES_FILTER.bun && updateItems(item)
    },
  })

  return (
    <>
      <section
        className={burgerConstructorStyle.burgerConstructor}
        ref={dropTarget}
      >
        <ul className={burgerConstructorStyle.burgerConstructor__list}>
          <Bun ingredient={bun} position={BURGER_POSITIONS.TOP} isLocked />
          <BurgerElements items={items} deleteIngredient={deleteIngredient} />
          <Bun ingredient={bun} position={BURGER_POSITIONS.BOTTOM} isLocked />
        </ul>
        <div className={burgerConstructorStyle.burgerConstructor__order}>
          <Price total={total || 0} />
          <Button
            htmlType="button"
            type="primary"
            size="large"
            onClick={handlerButtonOnClick}
          >
            Оформить заказ
          </Button>
        </div>
      </section>
      <Modal onClose={handlerButtonOnClick} isOpen={orderDetailsIsOpen}>
        <OrderDetails orderId={'034536'} />
      </Modal>
    </>
  )
}

export default BurgerConstructor
