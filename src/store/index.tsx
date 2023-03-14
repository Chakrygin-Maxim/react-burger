import { configureStore } from '@reduxjs/toolkit'
import ingredientsReducer from '../services/reducers/ingredients'

const store = configureStore({
  reducer: {
    ingredients: ingredientsReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
})

export default store
