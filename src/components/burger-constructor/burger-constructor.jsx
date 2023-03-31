import burgerConstructorStyle from './burger-constructor.module.css'
import OrderDetails from '../order-details/order-details'
import Modal from '../modal/modal'
import Price from '../price/price'
import Bun from '../bun/bun'
import BurgerElements from '../burger-elements/burger-elements'
import { v4 as uuidv4 } from 'uuid'
import { useDispatch, useSelector } from 'react-redux'
import { APP_ROUTES_MATCH, BURGER_POSITIONS } from '../../utils/constants'
import { useState, useMemo, useCallback } from 'react'
import { Button } from '@ya.praktikum/react-developer-burger-ui-components'
import { BurgerConstructorDrop } from '../../utils/dndHooks'
import { getUser } from '../../services/reducers/user'
import { postOrder, cleanOrder, getOrder } from '../../services/reducers/order'
import { useNavigate } from 'react-router-dom'
import {
  addBun,
  addItem,
  removeItem,
  deleteItems,
  getIngredientsConstructor,
} from '../../services/reducers/constructor'
import {
  updateBunsCount,
  increaseItemCount,
  decreaseItemCount,
  resetItemsCount,
} from '../../services/reducers/ingredients'

function BurgerConstructor() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [orderDetailsIsOpen, setOrderDetailsIsOpen] = useState(false)
  const { bun, items } = useSelector(getIngredientsConstructor)
  const { auth } = useSelector(getUser)

  const handlerButtonOnClick = () => {
    if (!auth) {
      navigate(APP_ROUTES_MATCH.login)
    }
    const order = { ingredients: [bun._id, ...items.map((item) => item._id)] }
    dispatch(postOrder(order))
    setOrderDetailsIsOpen(true)
  }

  const handleCloseModal = () => {
    setOrderDetailsIsOpen(false)
    setTimeout(() => {
      dispatch(cleanOrder())
      dispatch(deleteItems())
      dispatch(resetItemsCount())
    }, 100)
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

      {orderDetailsIsOpen && (
        <Modal onClose={handleCloseModal}>
          <OrderDetails />
        </Modal>
      )}
    </>
  )
}

export default BurgerConstructor
