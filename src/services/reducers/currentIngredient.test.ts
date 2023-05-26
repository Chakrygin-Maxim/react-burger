import { IngredientItem } from '../../utils/types'
import reducer, {
  initialState,
  setCurrentItem,
  deleteCurrentItem,
} from './currentIngredient'

const data: IngredientItem = {
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
}

describe('test-current-ingredient-reducer', () => {
  it('initial-state', () => {
    expect(reducer(undefined, { type: null })).toEqual(initialState)
  })

  it('set-current-item', () => {
    expect(reducer(initialState, setCurrentItem(data))).toEqual({
      item: data,
    })
  })

  it('delete-current-item', () => {
    expect(reducer(initialState, deleteCurrentItem())).toEqual(initialState)
  })
})
