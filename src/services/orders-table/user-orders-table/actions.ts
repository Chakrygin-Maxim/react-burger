import { createAction } from '@reduxjs/toolkit'
import { OrdersData } from '../types'
import { UserOrdersDataActionTypes } from './types'

const connect = createAction<
  string,
  UserOrdersDataActionTypes.USER_ORDER_TABLE_CONNECT
>(UserOrdersDataActionTypes.USER_ORDER_TABLE_CONNECT)
const disconnect = createAction(
  UserOrdersDataActionTypes.USER_ORDER_TABLE_DISCONNECT
)
const wsConnecting = createAction(
  UserOrdersDataActionTypes.USER_ORDER_TABLE_WS_CONNECTING
)
const wsOpen = createAction(UserOrdersDataActionTypes.USER_ORDER_TABLE_WS_OPEN)
const wsClose = createAction(
  UserOrdersDataActionTypes.USER_ORDER_TABLE_WS_CLOSE
)
const wsMessage = createAction<
  OrdersData,
  UserOrdersDataActionTypes.USER_ORDER_TABLE_WS_MESSAGE
>(UserOrdersDataActionTypes.USER_ORDER_TABLE_WS_MESSAGE)
const wsError = createAction<
  string,
  UserOrdersDataActionTypes.USER_ORDER_TABLE_WS_ERROR
>(UserOrdersDataActionTypes.USER_ORDER_TABLE_WS_ERROR)

export {
  connect,
  disconnect,
  wsConnecting,
  wsOpen,
  wsClose,
  wsMessage,
  wsError,
}
