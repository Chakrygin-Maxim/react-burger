import burgerElementStyle from './BurgerElement.module.css'
import {
  ConstructorElement,
  DragIcon,
} from '@ya.praktikum/react-developer-burger-ui-components'
import { BURGER_POSITIONS_TEXT } from '../../utils/constants'
import { INGREDIENT_TYPES_FILTER } from '../../utils/constants'

function BurgerElement({ position, ingredient }) {
  let name = ingredient.name

  if (position) {
    name = [name, BURGER_POSITIONS_TEXT[position]].join(' ')
  }

  return (
    <li
      className={`${burgerElementStyle.burgerElement} ${
        position ? burgerElementStyle.burgerElement__isBun : ''
      }`}
    >
      {ingredient.type !== INGREDIENT_TYPES_FILTER.bun && (
        <DragIcon type="primary" />
      )}
      <ConstructorElement
        type={position}
        isLocked={ingredient.type === INGREDIENT_TYPES_FILTER.bun}
        text={name}
        price={ingredient.price}
        thumbnail={ingredient.image}
      />
    </li>
  )
}
export default BurgerElement
