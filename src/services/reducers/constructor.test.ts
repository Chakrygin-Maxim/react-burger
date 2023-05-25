import constructorReducer from './constructor'
import { Ingredients } from '../../utils/types'
import {
  initialState,
  addBun,
  addItem,
  removeItem,
  updateItems,
  deleteItems,
} from './constructor'

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

const state = {
  ...initialState,
  items: data,
}

describe('test-constructor-reducer', () => {
  it('initial-state', () => {
    expect(constructorReducer(undefined, { type: null })).toEqual(initialState)
  })

  it('add-bun', () => {
    expect(constructorReducer(initialState, addBun(data[0]))).toEqual({
      ...initialState,
      bun: data[0],
    })
  })

  it('add-item', () => {
    expect(
      constructorReducer(
        initialState,
        addItem({ item: data[1], id: data[1].id })
      )
    ).toEqual({
      ...initialState,
      items: [data[1]],
    })
  })

  it('remove-item', () => {
    expect(constructorReducer(state, removeItem(data[2].id))).toEqual({
      ...initialState,
      items: [data[0], data[1]],
    })
  })

  it('delete-items', () => {
    expect(constructorReducer(initialState, deleteItems())).toEqual(
      initialState
    )
  })

  it('update-items', () => {
    expect(constructorReducer(initialState, updateItems(data))).toEqual({
      ...initialState,
      items: data,
    })
  })
})
