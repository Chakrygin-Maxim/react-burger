import { OrderItem } from '../../services/orders-table/types'
import { IngredientItem } from '../../utils/types'

export type CardOrderProps = {
  cardItem: OrderItem
}

export type ImagesData = Pick<IngredientItem, 'name' | 'image' | '_id'>
