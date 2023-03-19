import bunStyle from './bun.module.css'
import spiner from '../../images/spinner.svg'
import PropTypes from 'prop-types'
import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components'
import { BURGER_POSITIONS_TEXT } from '../../utils/constants'
import { BURGER_POSITIONS_TYPE, INGREDIENT_TYPE } from '../../utils/propTypes'

function Bun({ position, ingredient, isLocked }) {
  const name = [
    ingredient.name || 'Перенесите булочку',
    BURGER_POSITIONS_TEXT[position],
  ].join(' ')

  return (
    <li className={bunStyle.bunElement}>
      <ConstructorElement
        type={position}
        isLocked={isLocked}
        text={name}
        price={ingredient.price}
        thumbnail={ingredient.image || spiner}
      />
    </li>
  )
}

Bun.propTypes = {
  position: BURGER_POSITIONS_TYPE,
  ingredient: INGREDIENT_TYPE,
  isLocked: PropTypes.bool,
}

export default Bun
