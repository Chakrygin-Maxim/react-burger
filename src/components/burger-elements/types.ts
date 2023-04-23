import { DeleteIngredient } from '../burger-element/types'
import { Ingredients } from '../../utils/types'

export type BurgerElementsProps = {
  items: Ingredients
  deleteIngredient: DeleteIngredient
}
