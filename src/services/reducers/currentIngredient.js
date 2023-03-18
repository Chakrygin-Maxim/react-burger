import { createSlice } from '@reduxjs/toolkit'
import { EMPTY_INGREDIENT } from '../../utils/constants'

const initialState = {
  item: EMPTY_INGREDIENT,
}

const name = 'currentIngredient'

export const currentIngredientSlice = createSlice({
  name,
  initialState,
  reducers: {
    setCurrentItem(state, action) {
      state.item = action.payload
    },
    deleteCurrentItem(state) {
      state.item = EMPTY_INGREDIENT
    },
  },
})

export const { setCurrentItem, deleteCurrentItem } =
  currentIngredientSlice.actions

export default currentIngredientSlice.reducer
