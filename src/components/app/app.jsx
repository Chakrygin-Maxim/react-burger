import { Routes, Route, useLocation } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { getIngrediensData } from '../../services/reducers/ingredients'
import { APP_ROUTES } from '../../utils/constants'
import { useEffect } from 'react'
import { getUserData } from '../../services/reducers/user'
import Constructor from '../../pages/constructor'
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

function App() {
  let location = useLocation()
  let state = location.state

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getIngrediensData())
    dispatch(getUserData())
  }, [dispatch])

  return (
    <>
      <Routes location={state?.background || location}>
        <Route path={APP_ROUTES.root} element={<Constructor />} />
        <Route path={APP_ROUTES.login} element={<Login />} />

        <Route path={APP_ROUTES.profile} element={<Profile />}>
          <Route index element={<UserProfile />} />
          <Route path={APP_ROUTES.orders} element={<OrderHistory />} />
        </Route>

        <Route path={APP_ROUTES.profileOrdersId} element={<NotFound />} />
        <Route path={APP_ROUTES.register} element={<Register />} />
        <Route path={APP_ROUTES.forgotPassword} element={<ForgotPassword />} />
        <Route path={APP_ROUTES.resetPassword} element={<ResetPassword />} />
        <Route path={APP_ROUTES.ingredientsId} element={<Ingredient />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      {state?.background && (
        <Routes>
          <Route
            path={APP_ROUTES.ingredientsId}
            element={<ModalIngredient />}
          />
        </Routes>
      )}
    </>
  )
}

export default App
