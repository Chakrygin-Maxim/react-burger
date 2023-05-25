import orderReducer from './order'
import { initialState, cleanOrder, postOrder } from './order'

const payload = {
  name: 'Краторный spicy бургер',
  success: true,
  order: {
    number: 5358,
  },
}

describe('test-order-reducer', () => {
  it('initial-state', () => {
    expect(orderReducer(undefined, { type: null })).toEqual(initialState)
  })

  it('clean-order', () => {
    expect(orderReducer(initialState, cleanOrder())).toEqual(initialState)
  })

  it('make-order-pending', () => {
    const action = { type: postOrder.pending.type }
    const result = orderReducer(initialState, action)
    expect(result).toEqual({
      ...initialState,
      hasError: false,
      isLoading: true,
    })
  })

  it('make-order-fulfilled', () => {
    const action = { type: postOrder.fulfilled.type, payload }
    const result = orderReducer(initialState, action)
    expect(result).toEqual({
      name: 'Краторный spicy бургер',
      orderNumber: 5358,
      isLoading: false,
      hasError: false,
    })
  })

  it('make-order-rejected', () => {
    const action = { type: postOrder.rejected.type }
    const result = orderReducer(initialState, action)
    expect(result).toEqual({
      ...initialState,
      hasError: true,
      isLoading: false,
    })
  })
})
