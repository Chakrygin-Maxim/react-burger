import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  bun: {},
  items: [],
}

const name = 'constructor'

export const constructorSlice = createSlice({
  name,
  initialState,
  reducers: {
    addBun(state, { payload }) {
      state.bun = payload
    },
    addItem(state, { payload }) {
      state.items.push({
        ...payload.item,
        _id: payload.id,
        apiId: payload.apiId,
      })
    },
    removeItem(state, { payload }) {
      state.items = state.items.filter((item) => payload !== item._id)
    },
  },
})

export const { addBun, addItem, removeItem } = constructorSlice.actions

export default constructorSlice.reducer
