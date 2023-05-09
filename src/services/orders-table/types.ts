type Status = 'created' | 'pending' | 'done'

export enum OrdersDataActionTypes {
  ORDER_TABLE_WS_MESSAGE = 'ORDER_TABLE_WS_MESSAGE',
  ORDER_TABLE_DISCONNECT = 'ORDER_TABLE_DISCONNECT',
  ORDER_TABLE_WS_CONNECTING = 'ORDER_TABLE_WS_CONNECTING',
  ORDER_TABLE_WS_OPEN = 'ORDER_TABLE_WS_OPEN',
  ORDER_TABLE_WS_CLOSE = 'ORDER_TABLE_WS_CLOSE',
  ORDER_TABLE_WS_ERROR = 'ORDER_TABLE_WS_ERROR',
  ORDER_TABLE_CONNECT = 'ORDER_TABLE_CONNECT',
}

export type OrderItem = {
  _id: string
  ingredients: Array<string>
  status: Status
  name: string
  createdAt: string
  updatedAt: string
  number: number
}

export type OrdersData = {
  success: boolean
  orders: Array<OrderItem>
  total: number
  totalToday: number
}
