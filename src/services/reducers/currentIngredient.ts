import { createSlice } from '@reduxjs/toolkit'
import { EMPTY_INGREDIENT } from '../../utils/constants'
import { RootState } from '../../store'

export const initialState = {
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

export const getCurrentIngredient = (state: RootState) =>
  state.currentIngredient.item

export default currentIngredientSlice.reducer
