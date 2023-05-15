import { OrderItem } from '../../services/orders-table/types'
import { IngredientItem } from '../../utils/types'

export type FeedOrderDetailsProps = {
  order: OrderItem
}

export type FeedOrderDetailsIngredient = Pick<
  IngredientItem,
  '_id' | 'image' | 'name' | 'price'
> & { count: number }
