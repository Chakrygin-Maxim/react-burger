import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { API_URL } from '../../utils/constants'

const initialState = {
  name: '',
  orderNumber: 0,
  isLoading: false,
  hasError: false,
}

const name = 'order'

export const postOrder = createAsyncThunk(
  name + '/postOrders',
  async (order) => {
    try {
      const res = await fetch(API_URL + '/orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify(order),
      })
      const result = await res.json()
      return result.data
    } catch (err) {
      console.log('faild to fetch', err)
    }
  }
)

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
      state.isLoading = true
    })
    builder.addCase(postOrder.fulfilled, (state, { payload }) => {
      state.isLoading = false
      state.name = payload.name
      state.orderNumber = payload.order.number
    })
    builder.addCase(postOrder.rejected, (state) => {
      state.isLoading = false
      state.hasError = true
    })
  },
})

export default orderSlice.reducer

export const { cleanOrder } = orderSlice.actions
