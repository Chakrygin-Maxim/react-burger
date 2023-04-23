import { getUser } from '../../services/reducers/user'
import { useSelector } from 'react-redux'
import { APP_ROUTES_MATCH } from '../../utils/constants'
import { Navigate, useLocation } from 'react-router-dom'
import { ProtectedRouteElementProps, OnlyUnAuthProps } from './types'
import { FC } from 'react'

function ProtectedRouteElement({
  checkAuth = false,
  element,
}: ProtectedRouteElementProps) {
  const location = useLocation()
  const { auth } = useSelector(getUser)

  if (!checkAuth && !auth) {
    return <Navigate to={APP_ROUTES_MATCH.login} state={{ from: location }} />
  }

  if (checkAuth && auth) {
    return (
      <Navigate to={location.state?.from.pathname || APP_ROUTES_MATCH.root} />
    )
  }

  return element
}

export const OnlyAuth = ProtectedRouteElement

export const OnlyUnAuth: FC<OnlyUnAuthProps> = ({ element }) => {
  return <ProtectedRouteElement checkAuth element={element} />
}
