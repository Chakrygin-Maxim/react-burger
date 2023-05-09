import { createReducer } from '@reduxjs/toolkit'
import { OrderItem } from '../orders-table/types'
import {
  wsOpen,
  wsClose,
  wsMessage,
  wsError,
  wsConnecting,
} from '../orders-table/actions'
import { RootState } from '../../store'

type InitialState = {
  isConnected: boolean
  total: number
  totalToday: number
  orders: OrderItem[]
  error?: string
}

const initialState: InitialState = {
  isConnected: false,
  total: 0,
  totalToday: 0,
  orders: [],
}

export const orderTableReducer = createReducer(initialState, (builder) => {
  builder.addCase(wsConnecting, (state) => {
    state.isConnected = true
  })
  builder.addCase(wsOpen, (state) => {
    state.isConnected = true
  })
  builder.addCase(wsClose, (state) => {
    state.isConnected = false
  })
  builder.addCase(wsError, (state, action) => {
    state.isConnected = false
    state.error = action.payload
  })
  builder.addCase(wsMessage, (state, action) => {
    state.total = action.payload.total
    state.totalToday = action.payload.totalToday
    state.orders = action.payload.orders
  })
})

export const getOrders = (state: RootState) => state.orderTable

export default orderTableReducer
