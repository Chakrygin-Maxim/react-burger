import burgerConstructorStyle from './BurgerConstructor.module.css'
import BurgerElement from '../BurgerElement/BurgerElement'
import Price from '../Price/Price'
import { BURGER_POSITIONS } from '../../utils/constants'
import { INGREDIENT_TYPES_FILTER } from '../../utils/constants'
import { Button } from '@ya.praktikum/react-developer-burger-ui-components'

function BurgerConstructor({ ingredients }) {
  //временно берем булку для верстки, далее будет реализован полноценный конструктор
  const bunIngredient = ingredients[0]
  const total = 610

  return (
    <section className={burgerConstructorStyle.burgerConstructor}>
      <ul className={burgerConstructorStyle.burgerConstructor__list}>
        <BurgerElement
          ingredient={bunIngredient}
          position={BURGER_POSITIONS.TOP}
        />
        <div className={burgerConstructorStyle.burgerConstructor__itemsList}>
          {ingredients.map((item, index) => {
            return (
              item.type !== INGREDIENT_TYPES_FILTER.bun && (
                <BurgerElement key={index} ingredient={item} />
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
        <Button htmlType="button" type="primary" size="large">
          Оформить заказ
        </Button>
      </div>
    </section>
  )
}

export default BurgerConstructor
