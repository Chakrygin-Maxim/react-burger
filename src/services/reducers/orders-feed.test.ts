import orderTableReducer, { initialState, getOrderData } from './orders-feed'
import {
  wsOpen,
  wsClose,
  wsMessage,
  wsError,
  wsConnecting,
} from '../orders-table/actions'
import { OrderItem, OrdersData } from '../orders-table/types'

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

describe('test-ingredients-reducer', () => {
  it('initial-state', () => {
    expect(orderTableReducer(undefined, { type: null })).toEqual(initialState)
  })

  it('wsConnecting', () => {
    expect(orderTableReducer(initialState, wsConnecting())).toEqual({
      ...initialState,
      isConnected: true,
    })
  })

  it('wsOpen', () => {
    expect(orderTableReducer(initialState, wsOpen())).toEqual({
      ...initialState,
      isConnected: true,
    })
  })

  it('wsClose', () => {
    expect(orderTableReducer(initialState, wsClose())).toEqual({
      ...initialState,
      isConnected: false,
    })
  })

  it('wsError', () => {
    expect(orderTableReducer(initialState, wsError('error'))).toEqual({
      ...initialState,
      isConnected: false,
      error: 'error',
    })
  })

  it('wsMessage', () => {
    expect(orderTableReducer(initialState, wsMessage(payload))).toEqual({
      ...initialState,
      total: payload.total,
      totalToday: payload.totalToday,
      orders: payload.orders,
    })
  })
})
