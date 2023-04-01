import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { API_URL } from '../../utils/constants'
import { INGREDIENT_TYPES_FILTER } from '../../utils/constants'
import { checkReponse } from '../../utils/common'

const initialState = {
  data: [],
  isLoading: false,
  hasError: false,
}

const name = 'ingredients'

export const getIngrediensData = createAsyncThunk(
  name + '/getIngrediens',
  async () => {
    try {
      const res = await fetch(API_URL + '/ingredients')
      return await checkReponse(res)
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
      state.data.forEach((item) => {
        if (item.type === INGREDIENT_TYPES_FILTER.bun) {
          item.count = item._id === payload._id ? 2 : 0
        }
      })
    },
    increaseItemCount(state, { payload }) {
      state.data.forEach((item) => {
        if (item.type !== INGREDIENT_TYPES_FILTER.bun) {
          item.count = item._id === payload._id ? ++item.count : item.count
        }
      })
    },
    decreaseItemCount(state, { payload }) {
      state.data.forEach((item) => {
        if (item.type !== INGREDIENT_TYPES_FILTER.bun) {
          item.count = item._id === payload._id ? --item.count : item.count
        }
      })
    },
    resetItemsCount(state) {
      state.data.forEach((item) => (item.count = 0))
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getIngrediensData.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(getIngrediensData.fulfilled, (state, { payload }) => {
      state.isLoading = false
      if (payload.success) {
        payload.data.forEach((item) => (item.count = 0))
        state.data = [...payload.data]
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

export const getIngredients = (state) => state.ingredients

export default ingredientsSlice.reducer
