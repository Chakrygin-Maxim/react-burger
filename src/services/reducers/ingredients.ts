import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { INGREDIENT_TYPES_FILTER } from '../../utils/constants'
import { request } from '../../utils/common'
import { RootState } from '../../store'
import { IngredientItem, Ingredients } from '../../utils/types'

type InitialState = {
  data: Ingredients
  isLoading: boolean
  hasError: boolean
}

export const initialState: InitialState = {
  data: [],
  isLoading: false,
  hasError: false,
}

const name = 'ingredients'

export const getIngrediensData = createAsyncThunk(
  name + '/getIngrediens',
  async () => {
    try {
      return await request('/ingredients')
    } catch (err) {
      console.log('faild to fetch', err)
      return { success: false }
    }
  }
)

export const ingredientsSlice = createSlice({
  name,
  initialState,
  reducers: {
    updateBunsCount(state, { payload }) {
      state.data.forEach((item: IngredientItem) => {
        if (item.type === INGREDIENT_TYPES_FILTER.bun) {
          item.count = item._id === payload._id ? 2 : 0
        }
      })
    },
    increaseItemCount(state, { payload }) {
      state.data.forEach((item: IngredientItem) => {
        if (item.type !== INGREDIENT_TYPES_FILTER.bun) {
          item.count =
            item._id === payload._id
              ? isNaN(item.count)
                ? 1
                : ++item.count
              : item.count
        }
      })
    },
    decreaseItemCount(state, { payload }) {
      state.data.forEach((item: IngredientItem) => {
        if (item.type !== INGREDIENT_TYPES_FILTER.bun) {
          item.count = item._id === payload._id ? --item.count : item.count
        }
      })
    },
    resetItemsCount(state) {
      state.data.forEach((item: IngredientItem) => (item.count = 0))
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getIngrediensData.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(getIngrediensData.fulfilled, (state, { payload }) => {
      state.isLoading = false
      if (payload.success) {
        state.data = payload.data
      } else {
        state.hasError = true
      }
    })
    builder.addCase(getIngrediensData.rejected, (state) => {
      state.isLoading = false
      state.hasError = true
    })
  },
})

export const {
  updateBunsCount,
  increaseItemCount,
  decreaseItemCount,
  resetItemsCount,
} = ingredientsSlice.actions

export const getIngredients = (state: RootState) => state.ingredients

export default ingredientsSlice.reducer
