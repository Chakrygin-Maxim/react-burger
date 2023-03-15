import burgerConstructorStyle from './burger-constructor.module.css'
import OrderDetails from '../order-details/order-details'
import Modal from '../modal/modal'
import BurgerElement from '../burger-element/burger-element'
import Price from '../price/price'
import { v4 as uuidv4 } from 'uuid'
import { useDispatch, useSelector } from 'react-redux'
import {
  INGREDIENT_TYPES_FILTER,
  BURGER_POSITIONS,
} from '../../utils/constants'
import { useState, useMemo } from 'react'
import { Button } from '@ya.praktikum/react-developer-burger-ui-components'
import { useDrop } from 'react-dnd/dist/hooks/useDrop'
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
  const [orderDetailsIsOpen, setRrderDetailsIsOpen] = useState(false)
  // const [total, setTotal] = useState(0)
  const { bun, items } = useSelector((store) => store.ingredientsConstructor)

  const handlerButtonOnClick = () => {
    setRrderDetailsIsOpen(!orderDetailsIsOpen)
  }

  const total = useMemo(() => {
    let sum = 0

    sum = bun?.price && bun.price * 2
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

  const deleteIngredient = (item) => {
    dispatch(removeItem(item._id))
    dispatch(decreaseItemCount(item))
  }

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
          <BurgerElement
            ingredient={bun}
            position={BURGER_POSITIONS.TOP}
            isLocked
          />
          <div className={burgerConstructorStyle.burgerConstructor__itemsList}>
            {items.map((item) => {
              return (
                item?._id &&
                item.type !== INGREDIENT_TYPES_FILTER.bun && (
                  <BurgerElement
                    key={item._id}
                    ingredient={item}
                    onDelete={deleteIngredient}
                  />
                )
              )
            })}
          </div>
          <BurgerElement
            ingredient={bun}
            position={BURGER_POSITIONS.BOTTOM}
            isLocked
          />
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
