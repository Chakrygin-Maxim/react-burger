import { createSlice } from '@reduxjs/toolkit'
import { EMPTY_INGREDIENT } from '../../utils/constants'

const initialState = {
  bun: EMPTY_INGREDIENT,
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
        id: payload.id,
      })
    },
    removeItem(state, { payload }) {
      state.items = state.items.filter((item) => payload !== item.id)
    },
    deleteItems(state) {
      state.bun = EMPTY_INGREDIENT
      state.items = []
    },
    updateItems(state, { payload }) {
      state.items = [...payload]
    },
  },
})

export const { addBun, addItem, removeItem, updateItems, deleteItems } =
  constructorSlice.actions

export const getIngredientsConstructor = (state) => state.ingredientsConstructor

export default constructorSlice.reducer
