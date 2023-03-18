import burgerConstructorStyle from './burger-constructor.module.css'
import OrderDetails from '../order-details/order-details'
import OrderError from '../order-error/order-error'
import Modal from '../modal/modal'
import Price from '../price/price'
import Bun from '../bun/bun'
import BurgerElements from '../burger-elements/burger-elements'
import { v4 as uuidv4 } from 'uuid'
import { useDispatch, useSelector } from 'react-redux'
import { BURGER_POSITIONS } from '../../utils/constants'
import { useState, useMemo, useCallback } from 'react'
import { Button } from '@ya.praktikum/react-developer-burger-ui-components'
import { BurgerConstructorDrop } from '../../utils/dndHooks'
import { postOrder, cleanOrder } from '../../services/reducers/order'
import {
  addBun,
  addItem,
  removeItem,
  deleteItems,
} from '../../services/reducers/constructor'
import {
  updateBunsCount,
  increaseItemCount,
  decreaseItemCount,
  resetItemsCount,
} from '../../services/reducers/ingredients'

function BurgerConstructor() {
  const dispatch = useDispatch()
  const [orderDetailsIsOpen, setOrderDetailsIsOpen] = useState(false)
  const { bun, items } = useSelector((store) => store.ingredientsConstructor)
  const { orderNumber, isLoading, hasError } = useSelector(
    (store) => store.order
  )

  const handlerButtonOnClick = () => {
    const order = { ingredients: [bun._id, ...items.map((item) => item._id)] }
    dispatch(postOrder(order))
    setOrderDetailsIsOpen(true)
  }

  const handleCloseModal = () => {
    setOrderDetailsIsOpen(false)
    dispatch(cleanOrder())
    dispatch(deleteItems())
    dispatch(resetItemsCount())
  }

  const updateBuns = (item) => {
    dispatch(addBun(item))
    dispatch(updateBunsCount(item))
  }

  const addIngredient = (item) => {
    dispatch(addItem({ item, id: uuidv4() }))
    dispatch(increaseItemCount(item))
  }

  const deleteIngredient = useCallback(
    (item) => {
      dispatch(removeItem(item.id))
      dispatch(decreaseItemCount(item))
    },
    [dispatch]
  )

  const { dropTarget } = BurgerConstructorDrop(updateBuns, addIngredient)

  const total = useMemo(() => {
    let sum = 0

    sum = (bun?.price && bun.price * 2) || 0
    items.forEach((item) => (sum = sum + item.price))

    return sum
  }, [bun, items])

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

      <Modal onClose={handleCloseModal} isOpen={orderDetailsIsOpen}>
        {hasError && <OrderError />}
        {!isLoading && !hasError && <OrderDetails orderNumber={orderNumber} />}
      </Modal>
    </>
  )
}

export default BurgerConstructor
