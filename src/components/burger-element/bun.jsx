import bunStyle from './bun.module.css'
import spiner from '../../images/spinner.svg'
import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components'
import { BURGER_POSITIONS_TEXT } from '../../utils/constants'

function Bun({ position, ingredient, isLocked }) {
  let name = ingredient.name

  name = [
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

export default Bun
