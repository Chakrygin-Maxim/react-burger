import styles from './style.module.css'
import spiner from '../../images/spinner.svg'
import { BunProps } from './types'
import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components'
import { BURGER_POSITIONS_TEXT } from '../../utils/constants'

function Bun({ position, ingredient, isLocked }: BunProps): JSX.Element {
  const name: string = [
    ingredient.name || 'Перенесите булочку',
    BURGER_POSITIONS_TEXT[position],
  ].join(' ')

  return (
    <li className={styles.bunElement}>
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
