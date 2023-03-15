import burgerElementStyle from './burger-element.module.css'
import PropTypes from 'prop-types'
import { INGREDIENT_TYPE } from '../../utils/propTypes'
import spiner from '../../images/spinner.svg'

import {
  ConstructorElement,
  DragIcon,
} from '@ya.praktikum/react-developer-burger-ui-components'
import { BURGER_POSITIONS_TEXT } from '../../utils/constants'

function BurgerElement({ position, ingredient, isLocked, onDelete }) {
  let name = ingredient.name

  if (position) {
    name = [
      ingredient.name || 'Перенесите булочку',
      BURGER_POSITIONS_TEXT[position],
    ].join(' ')
  }

  return (
    <li
      className={`${burgerElementStyle.burgerElement} ${
        position ? burgerElementStyle.burgerElement__isBun : ''
      }`}
    >
      {!isLocked && <DragIcon type="primary" />}
      <ConstructorElement
        type={position}
        isLocked={isLocked}
        text={name}
        price={ingredient.price}
        thumbnail={ingredient.image || spiner}
        handleClose={() => onDelete(ingredient)}
      />
    </li>
  )
}

// BurgerElement.propTypes = {
// position: PropTypes.string,
// ingredient: INGREDIENT_TYPE.isRequired,
// }

export default BurgerElement
