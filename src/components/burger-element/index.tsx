import styles from './style.module.css'
import { BurgerElementProps } from './types'
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
  ingredient,
  onDelete,
  index,
  moveElement,
  extraClass,
}: BurgerElementProps) {
  const ref = useRef(null)
  const { handlerId, drop } = useBurgerElementDrop(ref, index, moveElement)
  const { opacity, drag } = useBurgerElementDrag(ingredient._id, index)

  drag(drop(ref))

  return (
    <li
      className={`${styles.burgerElement} ${extraClass}`}
      style={{ opacity }}
      data-handler-id={handlerId}
      ref={ref}
    >
      <DragIcon type="primary" />
      <ConstructorElement
        text={ingredient.name}
        price={ingredient.price}
        thumbnail={ingredient.image}
        handleClose={() => onDelete(ingredient)}
      />
    </li>
  )
}

export default BurgerElement
