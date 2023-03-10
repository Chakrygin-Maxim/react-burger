import burgerConstructorStyle from './burger-constructor.module.css'
import OrderDetails from '../order-details/order-details'
import Modal from '../modal/modal'
import BurgerElement from '../burger-element/burger-element'
import Price from '../price/price'
import { INGREDIENTS_ARRAY_TYPE } from '../../utils/propTypes'
import {
  INGREDIENT_TYPES_FILTER,
  BURGER_POSITIONS,
} from '../../utils/constants'
import { useState } from 'react'
import { Button } from '@ya.praktikum/react-developer-burger-ui-components'

function BurgerConstructor({ ingredients }) {
  //временно берем булку для верстки, далее будет реализован полноценный конструктор
  const bunIngredient = ingredients[0]
  const total = 610

  const [orderDetailsIsOpen, setRrderDetailsIsOpen] = useState(false)

  const handlerButtonOnClick = () => {
    setRrderDetailsIsOpen(!orderDetailsIsOpen)
  }

  return (
    <>
      <section className={burgerConstructorStyle.burgerConstructor}>
        <ul className={burgerConstructorStyle.burgerConstructor__list}>
          <BurgerElement
            ingredient={bunIngredient}
            position={BURGER_POSITIONS.TOP}
          />
          <div className={burgerConstructorStyle.burgerConstructor__itemsList}>
            {ingredients.map((item) => {
              return (
                item.type !== INGREDIENT_TYPES_FILTER.bun && (
                  <BurgerElement key={item._id} ingredient={item} />
                )
              )
            })}
          </div>
          <BurgerElement
            ingredient={bunIngredient}
            position={BURGER_POSITIONS.BOTTOM}
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

BurgerConstructor.propTypes = {
  ingredients: INGREDIENTS_ARRAY_TYPE.isRequired,
}

export default BurgerConstructor
