import reducer, { initialState, cleanOrder, postOrder } from './order'

const payload = {
  name: 'Краторный spicy бургер',
  success: true,
  order: {
    number: 5358,
  },
}

describe('test-order-reducer', () => {
  it('initial-state', () => {
    expect(reducer(undefined, { type: null })).toEqual(initialState)
  })

  it('clean-order', () => {
    expect(reducer(initialState, cleanOrder())).toEqual(initialState)
  })

  it('make-order-pending', () => {
    const action = { type: postOrder.pending.type }
    const result = reducer(initialState, action)
    expect(result).toEqual({
      ...initialState,
      hasError: false,
      isLoading: true,
    })
  })

  it('make-order-fulfilled', () => {
    const action = { type: postOrder.fulfilled.type, payload }
    const result = reducer(initialState, action)
    expect(result).toEqual({
      name: 'Краторный spicy бургер',
      orderNumber: 5358,
      isLoading: false,
      hasError: false,
    })
  })

  it('make-order-rejected', () => {
    const action = { type: postOrder.rejected.type }
    const result = reducer(initialState, action)
    expect(result).toEqual({
      ...initialState,
      hasError: true,
      isLoading: false,
    })
  })
})
