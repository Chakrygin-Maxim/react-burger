import ingredientsReducer from './ingredients'
import constructorReducer from './constructor'
import currentIngredientReducer from './currentIngredient'
import orderReducer from './order'

export const rootReducer = {
  ingredients: ingredientsReducer,
  ingredientsConstructor: constructorReducer,
  currentIngredient: currentIngredientReducer,
  order: orderReducer,
}
