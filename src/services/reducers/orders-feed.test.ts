import reducer, { initialState, getOrderData } from './orders-feed'
import { OrderItem, OrdersData } from '../orders-table/types'
import {
  wsOpen,
  wsClose,
  wsMessage,
  wsError,
  wsConnecting,
} from '../orders-table/actions'

const orderItem: OrderItem = {
  _id: '123',
  ingredients: ['60d3b41abdacab0026a733c8'],
  status: 'done',
  name: 'Space антарианский метеоритный флюоресцентный бургер',
  createdAt: '2023-05-24T13:25:00.325Z',
  updatedAt: '2023-05-24T13:25:00.457Z',
  number: 666,
}

const payload: OrdersData = {
  success: true,
  orders: [orderItem],
  total: 1,
  totalToday: 2,
}

describe('test-orders-feed-reducer', () => {
  it('initial-state', () => {
    expect(reducer(undefined, { type: null })).toEqual(initialState)
  })

  it('wsConnecting', () => {
    expect(reducer(initialState, wsConnecting())).toEqual({
      ...initialState,
      isConnected: true,
    })
  })

  it('wsOpen', () => {
    expect(reducer(initialState, wsOpen())).toEqual({
      ...initialState,
      isConnected: true,
    })
  })

  it('wsClose', () => {
    expect(reducer(initialState, wsClose())).toEqual({
      ...initialState,
      isConnected: false,
    })
  })

  it('wsError', () => {
    expect(reducer(initialState, wsError('error'))).toEqual({
      ...initialState,
      isConnected: false,
      error: 'error',
    })
  })

  it('wsMessage', () => {
    expect(reducer(initialState, wsMessage(payload))).toEqual({
      ...initialState,
      total: payload.total,
      totalToday: payload.totalToday,
      orders: payload.orders,
    })
  })

  it('order-data-pending', () => {
    const action = { type: getOrderData.pending.type }
    const result = reducer(initialState, action)
    expect(result).toEqual({
      ...initialState,
      hasError: false,
      isLoading: true,
    })
  })

  it('order-data-fulfilled', () => {
    const action = { type: getOrderData.fulfilled.type, payload }
    const result = reducer(initialState, action)
    expect(result).toEqual({
      ...initialState,
      hasError: false,
      isLoading: false,
      orders: payload.orders,
    })
  })

  it('order-data-rejected', () => {
    const action = { type: getOrderData.rejected.type }
    const result = reducer(initialState, action)
    expect(result).toEqual({
      ...initialState,
      hasError: true,
      isLoading: false,
    })
  })
})
