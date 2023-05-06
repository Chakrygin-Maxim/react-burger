import { API_URL } from './constants'

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
