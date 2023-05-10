import { createAsyncThunk, createReducer } from '@reduxjs/toolkit'
import { OrderItems } from '../orders-table/types'
import { RootState } from '../../store'
import { request } from '../../utils/common'
import {
  wsOpen,
  wsClose,
  wsMessage,
  wsError,
  wsConnecting,
} from '../orders-table/actions'

type InitialState = {
  isConnected: boolean
  total: number
  totalToday: number
  orders: OrderItems
  error?: string
  isLoading: boolean
  hasError: boolean
}

type OrderItemAnswer = {
  success: boolean
  orders: OrderItems
}

const initialState: InitialState = {
  isConnected: false,
  total: 0,
  totalToday: 0,
  orders: [],
  isLoading: false,
  hasError: false,
}
const name = 'ordersFeed'

export const getOrderData = createAsyncThunk<
  OrderItemAnswer,
  string | undefined,
  { state: RootState }
>(name + '/orders', async (payload) => {
  try {
    return await request('/orders/' + payload)
  } catch (err) {
    console.log('faild to fetch', err)
    return { success: false }
  }
})

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
  builder.addCase(getOrderData.pending, (state) => {
    state.hasError = false
    state.isLoading = true
  })
  builder.addCase(getOrderData.fulfilled, (state, { payload }) => {
    state.isLoading = false
    if (payload.success) {
      state.orders = payload.orders
    } else {
      state.hasError = true
    }
  })
  builder.addCase(getOrderData.rejected, (state) => {
    state.isLoading = false
    state.hasError = true
  })
})

export const getOrders = (state: RootState) => state.orderTable

export default orderTableReducer
