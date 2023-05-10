import { Routes, Route, useLocation } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { getIngrediensData } from '../../services/reducers/ingredients'
import { APP_ROUTES } from '../../utils/constants'
import { useEffect } from 'react'
import { getUserData } from '../../services/reducers/user'
import { OnlyAuth, OnlyUnAuth } from '../protected-route'
import { AppDispatch } from '../../store'
import AppHeader from '../app-header'
import MainPage from '../../pages/main-page'
import Feed from '../../pages/feed'
import Login from '../../pages/login'
import Profile from '../../pages/profile'
import UserProfile from '../user-profile'
import Register from '../../pages/register'
import ForgotPassword from '../../pages/forgot-password'
import ResetPassword from '../../pages/reset-password'
import Ingredient from '../../pages/ingredient'
import NotFound from '../../pages/not-found'
import OrderHistory from '../order-history'
import ModalIngredient from '../../pages/modal-ingredient'
import ModalOrder from '../../pages/modal-order'
import Order from '../../pages/order'

function App(): JSX.Element {
  const location = useLocation()
  const state = location.state

  const dispatch: AppDispatch = useDispatch()

  useEffect(() => {
    dispatch(getIngrediensData())
    dispatch(getUserData())
  }, [dispatch])

  return (
    <>
      <AppHeader />
      <Routes location={state?.background || location}>
        <Route path={APP_ROUTES.root} element={<MainPage />} />
        <Route path={APP_ROUTES.feed} element={<Feed />} />

        <Route
          path={APP_ROUTES.login}
          element={<OnlyUnAuth element={<Login />} />}
        />

        <Route
          path={APP_ROUTES.profile}
          element={<OnlyAuth element={<Profile />} />}
        >
          <Route index element={<UserProfile />} />
          <Route path={APP_ROUTES.orders} element={<OrderHistory />} />
        </Route>

        <Route path={APP_ROUTES.profileOrdersId} element={<NotFound />} />

        <Route
          path={APP_ROUTES.register}
          element={<OnlyUnAuth element={<Register />} />}
        />

        <Route
          path={APP_ROUTES.resetPassword}
          element={<OnlyUnAuth element={<ResetPassword />} />}
        />
        <Route
          path={APP_ROUTES.forgotPassword}
          element={<OnlyUnAuth element={<ForgotPassword />} />}
        />
        <Route path={APP_ROUTES.ingredientsId} element={<Ingredient />} />
        <Route path={APP_ROUTES.feedId} element={<Order />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
      {state?.background && (
        <Routes>
          <Route
            path={APP_ROUTES.ingredientsId}
            element={<ModalIngredient />}
          />
          <Route path={APP_ROUTES.feedId} element={<ModalOrder />} />
        </Routes>
      )}
    </>
  )
}

export default App
