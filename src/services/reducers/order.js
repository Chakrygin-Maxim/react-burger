import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  name: '',
  number: 0,
}

const name = 'order'

export const orderSlice = createSlice({
  name,
  initialState,
  reducers: {
    setOrder(state, action) {
      state.name = action.payload.name
      state.number = action.payload.number
    },
    removeOrder(state) {
      state.name = ''
      state.number = 0
    },
  },
})

export default orderSlice.reducer
