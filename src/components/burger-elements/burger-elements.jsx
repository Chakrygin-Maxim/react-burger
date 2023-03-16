import burgerElementsStyle from './burger-elements.module.css'
import BurgerElement from '../burger-element/burger-element'
import { INGREDIENT_TYPES_FILTER } from '../../utils/constants'
function BurgerElements({ items, deleteIngredient }) {
  return (
    <div className={burgerElementsStyle.burgerElements__itemsList}>
      {items.map((item) => {
        return (
          item?._id &&
          item.type !== INGREDIENT_TYPES_FILTER.bun && (
            <BurgerElement
              key={item._id}
              ingredient={item}
              onDelete={deleteIngredient}
            />
          )
        )
      })}
    </div>
  )
}

export default BurgerElements
