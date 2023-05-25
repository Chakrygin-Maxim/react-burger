import { createSlice } from '@reduxjs/toolkit'
import { EMPTY_INGREDIENT } from '../../utils/constants'
import { RootState } from '../../store'
import { IngredientItem, Ingredients } from '../../utils/types'

type InitialState = {
  bun: IngredientItem
  items: Ingredients
}

export const initialState: InitialState = {
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
      console.log('>>>>>>>>>', payload)

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

export const getIngredientsConstructor = (state: RootState) =>
  state.ingredientsConstructor

export default constructorSlice.reducer
