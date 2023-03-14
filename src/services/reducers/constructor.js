import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  bun: '',
  items: [],
}

const name = 'constructor'

export const constructorSlice = createSlice({
  name,
  initialState,
  reducers: {
    addBun(state, action) {
      state.bun = action.payload
    },
    addItem(state, action) {
      state.items.push(action.payload)
    },
    removeItem(state, action) {
      state.items = state.items.filter(
        (item) => action.payload._id !== item._id
      )
    },
  },
})

export default constructorSlice.reducer
