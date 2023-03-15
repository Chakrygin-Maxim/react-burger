import burgerElementStyle from './burger-element.module.css'
import PropTypes from 'prop-types'
import { INGREDIENT_TYPE } from '../../utils/propTypes'
import {
  ConstructorElement,
  DragIcon,
} from '@ya.praktikum/react-developer-burger-ui-components'
import {
  BURGER_POSITIONS_TEXT,
  INGREDIENT_TYPES_FILTER,
} from '../../utils/constants'

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

// BurgerElement.propTypes = {
// position: PropTypes.string,
// ingredient: INGREDIENT_TYPE.isRequired,
// }

export default BurgerElement
