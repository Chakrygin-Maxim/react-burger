export const isCurrentRoute = (pathname, route) => {
  return pathname === route
}

export const checkReponse = (res) => {
  if (!res.ok) {
    return Promise.reject(`Ошибка: ${res.status}`)
  }
  return res.json()
}
