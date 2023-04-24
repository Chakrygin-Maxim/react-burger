import { IngredientItem } from '../../utils/types'

export type DeleteIngredient = (item: IngredientItem) => void
export type MoveIngredient = (dragIndex: number, hoverIndex: number) => void

export type BurgerElementProps = {
  ingredient: IngredientItem
  onDelete: DeleteIngredient
  index: number
  moveElement: MoveIngredient
  extraClass: string
}
