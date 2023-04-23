type IngredientType = 'bun' | 'sauce' | 'main'

export type IngredientItem = {
  id: string
  type: IngredientType
  image: string
  image_large: string
  name: string
  price: number
  calories: number
  proteins: number
  fat: number
  carbohydrates: number
  count: number
  _id?: string
}

export type Ingredients = IngredientItem[]

export type Order = { ingredients: string[] }
