import burgerConstructorStyle from './burger-constructor.module.css'
import OrderDetails from '../order-details/order-details'
import Modal from '../modal/modal'
import BurgerElement from '../burger-element/burger-element'
import Price from '../price/price'
import { useDispatch, useSelector } from 'react-redux'
import {
  INGREDIENT_TYPES_FILTER,
  BURGER_POSITIONS,
} from '../../utils/constants'
import { useState } from 'react'
import { Button } from '@ya.praktikum/react-developer-burger-ui-components'
import { useDrop } from 'react-dnd/dist/hooks/useDrop'
import { addBun } from '../../services/reducers/constructor'
import { updateBunsCount } from '../../services/reducers/ingredients'

function BurgerConstructor() {
  let total = 0
  const dispatch = useDispatch()
  const [orderDetailsIsOpen, setRrderDetailsIsOpen] = useState(false)
  const { bun, items } = useSelector((store) => store.ingredientsConstructor)

  const handlerButtonOnClick = () => {
    setRrderDetailsIsOpen(!orderDetailsIsOpen)
  }

  const updateBuns = (item) => {
    dispatch(addBun(item))
    dispatch(updateBunsCount(item))
  }

  const [, dropTarget] = useDrop({
    accept: 'item',
    drop(item) {
      item.type === INGREDIENT_TYPES_FILTER.bun && updateBuns(item)
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
                  <BurgerElement key={item._id} ingredient={item} />
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
          <Price total={total} />
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
