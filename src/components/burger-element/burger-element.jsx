import burgerElementStyle from './burger-element.module.css'
import PropTypes from 'prop-types'
import { useRef } from 'react'
import {
  useBurgerElementDrag,
  useBurgerElementDrop,
} from '../../utils/dndHooks'
import {
  ConstructorElement,
  DragIcon,
} from '@ya.praktikum/react-developer-burger-ui-components'

function BurgerElement({ position, ingredient, onDelete, index, moveElement }) {
  const ref = useRef(null)
  const { handlerId, drop } = useBurgerElementDrop(ref, index, moveElement)
  const { opacity, drag } = useBurgerElementDrag(ingredient._id, index)

  drag(drop(ref))

  return (
    <li
      className={burgerElementStyle.burgerElement}
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

// BurgerElement.propTypes = {
// position: PropTypes.string,
// ingredient: INGREDIENT_TYPE.isRequired,
// }

export default BurgerElement
