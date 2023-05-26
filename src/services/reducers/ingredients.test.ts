import { Ingredients } from '../../utils/types'
import ingredients, {
  initialState,
  updateBunsCount,
  increaseItemCount,
  decreaseItemCount,
  resetItemsCount,
  getIngrediensData,
} from './ingredients'

const data: Ingredients = [
  {
    id: '643d69a5c3f7b9001cfa093c',
    _id: '60d3b41abdacab0026a733c6',
    name: 'Краторная булка N-200i',
    type: 'bun',
    proteins: 80,
    fat: 24,
    carbohydrates: 53,
    calories: 420,
    price: 1255,
    image: 'https://code.s3.yandex.net/react/code/bun-02.png',
    image_mobile: 'https://code.s3.yandex.net/react/code/bun-02-mobile.png',
    image_large: 'https://code.s3.yandex.net/react/code/bun-02-large.png',
    count: 0,
  },
  {
    id: '643d69a5c3f7b9001cfa093e',
    _id: '60d3b41abdacab0026a733c8',
    name: 'Филе Люминесцентного тетраодонтимформа',
    type: 'main',
    proteins: 44,
    fat: 26,
    carbohydrates: 85,
    calories: 643,
    price: 988,
    image: 'https://code.s3.yandex.net/react/code/meat-03.png',
    image_mobile: 'https://code.s3.yandex.net/react/code/meat-03-mobile.png',
    image_large: 'https://code.s3.yandex.net/react/code/meat-03-large.png',
    count: 0,
  },
  {
    id: '643d69a5c3f7b9001cfa0942',
    _id: '60d3b41abdacab0026a733cc',
    name: 'Соус Spicy-X',
    type: 'sauce',
    proteins: 30,
    fat: 20,
    carbohydrates: 40,
    calories: 30,
    price: 90,
    image: 'https://code.s3.yandex.net/react/code/sauce-02.png',
    image_mobile: 'https://code.s3.yandex.net/react/code/sauce-02-mobile.png',
    image_large: 'https://code.s3.yandex.net/react/code/sauce-02-large.png',
    count: 0,
  },
]

const state = { ...initialState, data }

const payload = {
  success: true,
  data: [...data],
}

describe('test-ingredients-reducer', () => {
  it('initial-state', () => {
    expect(ingredients(undefined, { type: null })).toEqual(initialState)
  })

  it('update-buns-count', () => {
    expect(ingredients(state, updateBunsCount(data[0]))).toEqual({
      ...state,
      data: [{ ...data[0], count: 2 }, data[1], data[2]],
    })
  })

  it('increase-item-count', () => {
    expect(ingredients(state, increaseItemCount(data[1]))).toEqual({
      ...state,
      data: [data[0], { ...data[1], count: 1 }, data[2]],
    })
  })

  it('decrease-item-count', () => {
    expect(ingredients(state, decreaseItemCount(data[1]))).toEqual({
      ...state,
      data: [data[0], { ...data[1], count: -1 }, data[2]],
    })
  })

  it('reset-items-count', () => {
    expect(ingredients(state, resetItemsCount())).toEqual(state)
  })

  it('get-ingrediens-pending', () => {
    const action = { type: getIngrediensData.pending.type }
    const result = ingredients(initialState, action)
    expect(result).toEqual({
      ...initialState,
      isLoading: true,
    })
  })

  it('get-ingrediens-fulfilled', () => {
    const action = { type: getIngrediensData.fulfilled.type, payload }
    const result = ingredients(initialState, action)
    expect(result).toEqual({
      ...initialState,
      isLoading: false,
      data,
    })
  })

  it('get-ingrediens-rejected', () => {
    const action = { type: getIngrediensData.rejected.type }
    const result = ingredients(initialState, action)
    expect(result).toEqual({
      ...initialState,
      isLoading: false,
      hasError: true,
    })
  })
})
