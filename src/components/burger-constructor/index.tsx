import styles from './style.module.css'
import OrderDetails from '../order-details'
import Modal from '../modal'
import Price from '../price'
import Bun from '../bun'
import BurgerElements from '../burger-elements'
import { AppDispatch } from '../../store'
import { v4 as uuidv4 } from 'uuid'
import { useDispatch, useSelector } from 'react-redux'
import { APP_ROUTES_MATCH, BURGER_POSITIONS } from '../../utils/constants'
import { useState, useMemo, useCallback } from 'react'
import { Button } from '@ya.praktikum/react-developer-burger-ui-components'
import { BurgerConstructorDrop } from '../../utils/dndHooks'
import { getUser } from '../../services/reducers/user'
import { postOrder, cleanOrder } from '../../services/reducers/order'
import { useNavigate, useLocation } from 'react-router-dom'
import { IngredientItem, Order } from '../../utils/types'
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

function BurgerConstructor(): JSX.Element {
  const dispatch: AppDispatch = useDispatch()
  const navigate = useNavigate()
  const location = useLocation()
  const [orderDetailsIsOpen, setOrderDetailsIsOpen] = useState(false)
  const { bun, items } = useSelector(getIngredientsConstructor)
  const { auth } = useSelector(getUser)

  const handlerButtonOnClick = () => {
    if (!auth) {
      navigate(APP_ROUTES_MATCH.login, {
        state: { from: location },
        replace: true,
      })
    } else {
      const order: Order = {
        ingredients: [
          bun._id,
          ...items.map((item: IngredientItem) => item._id),
        ],
      }
      dispatch(postOrder(order))
      setOrderDetailsIsOpen(true)
    }
  }

  const handleCloseModal = () => {
    setOrderDetailsIsOpen(false)
    setTimeout(() => {
      dispatch(cleanOrder())
      dispatch(deleteItems())
      dispatch(resetItemsCount())
    }, 100)
  }

  const updateBuns = (item: IngredientItem) => {
    dispatch(addBun(item))
    dispatch(updateBunsCount(item))
  }

  const addIngredient = (item: IngredientItem) => {
    dispatch(addItem({ item, id: uuidv4() }))
    dispatch(increaseItemCount(item))
  }

  const deleteIngredient = useCallback(
    (item: IngredientItem) => {
      dispatch(removeItem(item.id))
      dispatch(decreaseItemCount(item))
    },
    [dispatch]
  )

  const { dropTarget } = BurgerConstructorDrop(updateBuns, addIngredient)

  const total = useMemo(() => {
    let sum = 0

    sum = (bun?.price && bun.price * 2) || 0
    items.forEach((item: IngredientItem) => (sum = sum + item.price))

    return sum
  }, [bun, items])

  return (
    <>
      <section
        id="dropArea"
        className={styles.burgerConstructor}
        ref={dropTarget}
      >
        <ul className={styles.burgerConstructor__list}>
          <Bun ingredient={bun} position={BURGER_POSITIONS.TOP} isLocked />
          <BurgerElements items={items} deleteIngredient={deleteIngredient} />
          <Bun ingredient={bun} position={BURGER_POSITIONS.BOTTOM} isLocked />
        </ul>
        <div className={styles.burgerConstructor__order}>
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
