import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  item: {},
}

const name = 'currentIngredient'

export const currentIngredientSlice = createSlice({
  name,
  initialState,
  reducers: {
    setCurrentItem(state, action) {
      state.item = action.payload
    },
    removeCurrentItem(state) {
      state.item = {}
    },
  },
})

export default currentIngredientSlice.reducer
