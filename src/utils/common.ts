import {
  OrderItem,
  OrderItems,
  OrderStatus,
} from '../services/orders-table/types'
import { API_URL } from './constants'
import { Ingredients } from './types'

const checkResponse = (res: Response) => {
  if (!res.ok) {
    return Promise.reject(`Ошибка: ${res.status}`)
  }
  return res.json()
}

export const isCurrentRoute = (pathname: string, route: string) => {
  return pathname === route
}

export function request(url: string, options?: RequestInit) {
  return fetch(API_URL + url, options).then(checkResponse)
}

export const getIngredientsById = (orderItems: string[], data: Ingredients) => {
  let totalPrice = 0
  const ingredients: Ingredients = []

  orderItems.forEach((item) => {
    const result = data.find((ingredient) => ingredient._id === item)
    if (result) {
      totalPrice += result.price * (result.type === 'bun' ? 2 : 1)

      ingredients.push(result)
    }
  })

  return { totalPrice, ingredients }
}

export const getOrderByNumber = (
  orders: OrderItems,
  number: string | undefined
): OrderItem | undefined => {
  return orders?.find((el: OrderItem) => String(el.number) === number)
}

export const statusText = (status: OrderStatus): string => {
  switch (status) {
    case 'done':
      return 'Выполнен'

    case 'pending':
      return 'В процессе'

    case 'created':
      return 'Создан'
  }
}
