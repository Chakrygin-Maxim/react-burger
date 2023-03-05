import burgerConstructorStyle from './BurgerConstructor.module.css'
import BurgerElement from '../BurgerElement/BurgerElement'
import { BURGER_POSITIONS } from '../../utils/constants'
import { INGREDIENT_TYPES_FILTER } from '../../utils/constants'

function BurgerConstructor({ ingredients }) {
  //временно берем булку для верстки, далее будет реализован полноценный конструктор
  const bunIngredient = ingredients[0]

  return (
    <section className={burgerConstructorStyle.burgerConstructor}>
      <ul className={burgerConstructorStyle.burgerConstructor__list}>
        <BurgerElement
          ingredient={bunIngredient}
          position={BURGER_POSITIONS.TOP}
        />
        <div className={burgerConstructorStyle.burgerConstructor__Itemslist}>
          {ingredients.map((item, index) => {
            if (item.type === INGREDIENT_TYPES_FILTER.bun) {
              return null
            }
            return <BurgerElement key={index} ingredient={item} />
          })}
        </div>
        <BurgerElement
          ingredient={bunIngredient}
          position={BURGER_POSITIONS.BOTTOM}
        />
      </ul>
    </section>
  )
}

export default BurgerConstructor
