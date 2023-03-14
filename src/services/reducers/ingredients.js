import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { API_URL } from '../../utils/constants'

const initialState = {
  data: [],
  isLoading: false,
  hasError: false,
}

const name = 'ingredients'

export const getIngrediensData = createAsyncThunk(
  name + '/getIngrediensData',
  async () => {
    try {
      const res = await fetch(API_URL)
      const result = await res.json()
      return result.data
    } catch (err) {
      console.log('faild to fetch', err)
    }
  }
)

export const ingredientsSlice = createSlice({
  name,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getIngrediensData.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(getIngrediensData.fulfilled, (state, { payload }) => {
      state.isLoading = false
      state.data = [...payload]
    })
    builder.addCase(getIngrediensData.rejected, (state) => {
      state.isLoading = false
      state.hasError = true
    })
  },
})

export default ingredientsSlice.reducer
