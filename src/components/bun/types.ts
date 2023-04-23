import { IngredientItem } from '../../utils/types'

type BunPosition = 'top' | 'bottom'

export type BunProps = {
  position: BunPosition
  ingredient: IngredientItem
  isLocked: boolean
}
