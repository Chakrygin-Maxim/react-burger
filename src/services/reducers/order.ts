import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { request } from '../../utils/common'
import { NewOrder, Order } from '../../utils/types'
import { RootState } from '../../store'

const initialState = {
  name: '',
  orderNumber: 0,
  isLoading: false,
  hasError: false,
}

const name = 'order'

export const postOrder = createAsyncThunk<
  NewOrder,
  Order,
  { state: RootState }
>(name + '/postOrder', async (order) => {
  try {
    return await request('/orders', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        Authorization: localStorage.getItem('accessToken'),
      },
      body: JSON.stringify(order),
    } as RequestInit)
  } catch (err) {
    console.log('faild to fetch', err)
    return { success: false }
  }
})

export const orderSlice = createSlice({
  name,
  initialState,
  reducers: {
    cleanOrder(state) {
      state.name = ''
      state.orderNumber = 0
      state.isLoading = false
      state.hasError = false
    },
  },
  extraReducers: (builder) => {
    builder.addCase(postOrder.pending, (state) => {
      state.hasError = false
      state.isLoading = true
    })
    builder.addCase(postOrder.fulfilled, (state, { payload }) => {
      state.isLoading = false
      if (payload.success) {
        state.name = payload.name
        state.orderNumber = payload.order.number
      } else {
        state.hasError = true
      }
    })
    builder.addCase(postOrder.rejected, (state) => {
      state.isLoading = false
      state.hasError = true
    })
  },
})

export default orderSlice.reducer

export const getOrder = (state: RootState) => state.order

export const { cleanOrder } = orderSlice.actions
