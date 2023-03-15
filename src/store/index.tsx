import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import ingredientsReducer from '../services/reducers/ingredients'
import constructorReducer from '../services/reducers/constructor'
import currentIngredientReducer from '../services/reducers/currentIngredient'
import orderReducer from '../services/reducers/order'

const customizedMiddleware = getDefaultMiddleware({
  serializableCheck: false,
})

const store = configureStore({
  middleware: customizedMiddleware,
  reducer: {
    ingredients: ingredientsReducer,
    ingredientsConstructor: constructorReducer,
    currentIngredient: currentIngredientReducer,
    order: orderReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
})

export default store
