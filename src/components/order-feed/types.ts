import { OrderItems } from '../../services/orders-table/types'

export type OrdersFeedProps = {
  orders: OrderItems
  showStatus?: boolean
}
