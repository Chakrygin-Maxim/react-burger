import ingredientsReducer from './ingredients'
import constructorReducer from './constructor'
import currentIngredientReducer from './currentIngredient'
import orderReducer from './order'
import userReduser from './user'

export const rootReducer = {
  ingredients: ingredientsReducer,
  ingredientsConstructor: constructorReducer,
  currentIngredient: currentIngredientReducer,
  order: orderReducer,
  user: userReduser,
}
