import ingredientsReducer from './ingredients'
import constructorReducer from './constructor'
import currentIngredientReducer from './currentIngredient'
import orderReducer from './order'
import userReduser from './user'
import orderTableReducer from './orders-feed'
import { combineReducers } from 'redux'

export const rootReducer = combineReducers({
  ingredients: ingredientsReducer,
  ingredientsConstructor: constructorReducer,
  currentIngredient: currentIngredientReducer,
  order: orderReducer,
  user: userReduser,
  orderTable: orderTableReducer,
})
