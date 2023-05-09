import { createAction } from '@reduxjs/toolkit'
import { OrdersData, OrdersDataActionTypes } from './types'

const connect = createAction<string, OrdersDataActionTypes.ORDER_TABLE_CONNECT>(
  OrdersDataActionTypes.ORDER_TABLE_CONNECT
)
const disconnect = createAction(OrdersDataActionTypes.ORDER_TABLE_DISCONNECT)
const wsConnecting = createAction(
  OrdersDataActionTypes.ORDER_TABLE_WS_CONNECTING
)
const wsOpen = createAction(OrdersDataActionTypes.ORDER_TABLE_WS_OPEN)
const wsClose = createAction(OrdersDataActionTypes.ORDER_TABLE_WS_CLOSE)
const wsMessage = createAction<
  OrdersData,
  OrdersDataActionTypes.ORDER_TABLE_WS_MESSAGE
>(OrdersDataActionTypes.ORDER_TABLE_WS_MESSAGE)
const wsError = createAction<
  string,
  OrdersDataActionTypes.ORDER_TABLE_WS_ERROR
>(OrdersDataActionTypes.ORDER_TABLE_WS_ERROR)

export {
  connect,
  disconnect,
  wsConnecting,
  wsOpen,
  wsClose,
  wsMessage,
  wsError,
}
