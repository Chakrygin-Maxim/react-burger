import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { APP_ROUTES } from '../../utils/constants'
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

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={APP_ROUTES.root} element={<Constructor />} />
        <Route path={APP_ROUTES.login} element={<Login />} />

        <Route path={APP_ROUTES.profile} element={<Profile />}>
          <Route index element={<UserProfile />} />
          <Route path={APP_ROUTES.profileOrders} element={<OrderHistory />} />
        </Route>

        <Route path={APP_ROUTES.profileOrdersId} element={<NotFound />} />
        <Route path={APP_ROUTES.register} element={<Register />} />
        <Route path={APP_ROUTES.forgotPassword} element={<ForgotPassword />} />
        <Route path={APP_ROUTES.resetPassword} element={<ResetPassword />} />
        <Route path={APP_ROUTES.ingredientsId} element={<Ingredient />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
