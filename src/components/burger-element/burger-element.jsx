import burgerElementStyle from './burger-element.module.css'
import PropTypes from 'prop-types'
import { BURGER_POSITIONS_TYPE, INGREDIENT_TYPE } from '../../utils/propTypes'
import { useRef } from 'react'
import {
  useBurgerElementDrag,
  useBurgerElementDrop,
} from '../../utils/dndHooks'
import {
  ConstructorElement,
  DragIcon,
} from '@ya.praktikum/react-developer-burger-ui-components'

function BurgerElement({
  position,
  ingredient,
  onDelete,
  index,
  moveElement,
  extraClass,
}) {
  const ref = useRef(null)
  const { handlerId, drop } = useBurgerElementDrop(ref, index, moveElement)
  const { opacity, drag } = useBurgerElementDrag(ingredient._id, index)

  drag(drop(ref))

  return (
    <li
      className={`${burgerElementStyle.burgerElement} ${extraClass}`}
      style={{ opacity }}
      data-handler-id={handlerId}
      ref={ref}
    >
      <DragIcon type="primary" />
      <ConstructorElement
        type={position}
        text={ingredient.name}
        price={ingredient.price}
        thumbnail={ingredient.image}
        handleClose={() => onDelete(ingredient)}
      />
    </li>
  )
}

BurgerElement.propTypes = {
  position: BURGER_POSITIONS_TYPE,
  ingredient: INGREDIENT_TYPE.isRequired,
  onDelete: PropTypes.func,
  index: PropTypes.number,
  moveElement: PropTypes.func,
  extraClass: PropTypes.string,
}

export default BurgerElement
