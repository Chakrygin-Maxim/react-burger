import {
  ActionCreatorWithPayload,
  ActionCreatorWithoutPayload,
} from '@reduxjs/toolkit'

export type OrderStatus = 'created' | 'pending' | 'done'

export enum OrdersDataActionTypes {
  ORDER_TABLE_WS_MESSAGE = 'ORDER_TABLE_WS_MESSAGE',
  ORDER_TABLE_DISCONNECT = 'ORDER_TABLE_DISCONNECT',
  ORDER_TABLE_WS_CONNECTING = 'ORDER_TABLE_WS_CONNECTING',
  ORDER_TABLE_WS_OPEN = 'ORDER_TABLE_WS_OPEN',
  ORDER_TABLE_WS_CLOSE = 'ORDER_TABLE_WS_CLOSE',
  ORDER_TABLE_WS_ERROR = 'ORDER_TABLE_WS_ERROR',
  ORDER_TABLE_CONNECT = 'ORDER_TABLE_CONNECT',
}

export type ActionTypes = {
  wsConnect: ActionCreatorWithPayload<string>
  wsDisconnect: ActionCreatorWithoutPayload
  wsConnecting: ActionCreatorWithoutPayload
  onOpen: ActionCreatorWithoutPayload
  onClose: ActionCreatorWithoutPayload
  onError: ActionCreatorWithPayload<string>
  onMessage: ActionCreatorWithPayload<OrdersData>
}

export type OrderItem = {
  _id: string
  ingredients: Array<string>
  status: OrderStatus
  name: string
  createdAt: string
  updatedAt: string
  number: number
}

export type OrderItems = Array<OrderItem>

export type OrdersData = {
  success: boolean
  orders: OrderItems
  total: number
  totalToday: number
}

export type OrderNumber = Pick<OrderItem, '_id' | 'number'>

export type OrderNumbers = Array<OrderNumber>
