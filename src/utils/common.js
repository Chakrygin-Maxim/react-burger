const checkResponse = (res) => {
  if (!res.ok) {
    return Promise.reject(`Ошибка: ${res.status}`)
  }
  return res.json()
}

export const isCurrentRoute = (pathname, route) => {
  return pathname === route
}

export function request(url, options) {
  return fetch(url, options).then(checkResponse)
}
