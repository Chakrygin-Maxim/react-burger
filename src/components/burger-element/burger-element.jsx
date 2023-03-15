import burgerElementStyle from './burger-element.module.css'
import PropTypes from 'prop-types'
import { INGREDIENT_TYPE } from '../../utils/propTypes'
import { useDrag } from 'react-dnd'

import {
  ConstructorElement,
  DragIcon,
} from '@ya.praktikum/react-developer-burger-ui-components'

function BurgerElement({ position, ingredient, onDelete }) {
  const [{ opacity }, burgerElementRef] = useDrag({
    type: 'burgerElement',
    item: ingredient,
    collect: (monitor) => ({
      opacity: monitor.isDragging() ? 0 : 1,
    }),
  })

  return (
    <li
      style={{ opacity }}
      ref={burgerElementRef}
      className={burgerElementStyle.burgerElement}
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
