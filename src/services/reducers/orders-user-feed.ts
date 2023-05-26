import { createReducer } from '@reduxjs/toolkit'
import { OrderItems } from '../orders-table/types'
import { RootState } from '../../store'
import {
  wsOpen,
  wsClose,
  wsMessage,
  wsError,
  wsConnecting,
} from '../orders-table/user-orders-table/actions'

type InitialState = {
  isConnected: boolean
  total: number
  totalToday: number
  orders: OrderItems
  error?: string
}

export const initialState: InitialState = {
  isConnected: false,
  total: 0,
  totalToday: 0,
  orders: [],
}

export const userOrderTableReducer = createReducer(initialState, (builder) => {
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

export const getUserOrders = (state: RootState) => state.userOrderTable

export default userOrderTableReducer
