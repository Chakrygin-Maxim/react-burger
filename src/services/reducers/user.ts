import { createSlice } from '@reduxjs/toolkit'
import {
  loginUser,
  registerUser,
  logoutUser,
  getUserData,
  updateUserData,
  forgotPassword,
  resetPassword,
} from './userApi'
import { RootState } from '../../store'

const name = 'user'

export const initialState = {
  user: { email: '', name: '', password: '' },
  isLoading: false,
  hasError: false,
  auth: false,
  isResetPasswordStart: false,
  isResetPasswordFinish: false,
}

export const userSlice = createSlice({
  name,
  initialState,
  reducers: {
    cleanUser(state) {
      state.auth = false
      state.isLoading = false
      state.hasError = false
    },
  },
  extraReducers: (builder) => {
    // регистрация пользователя
    builder.addCase(registerUser.pending, (state) => {
      state.hasError = false
      state.isLoading = true
    })
    builder.addCase(registerUser.fulfilled, (state, { payload }) => {
      state.isLoading = false
      if (payload.success) {
        state.user = { ...initialState.user, ...payload.user }
        state.auth = true
        localStorage.setItem('accessToken', payload.accessToken)
        localStorage.setItem('refreshToken', payload.refreshToken)
      } else {
        state.hasError = true
      }
    })
    builder.addCase(registerUser.rejected, (state) => {
      state.isLoading = false
      state.hasError = true
    })
    // выход пользователя
    builder.addCase(logoutUser.pending, (state) => {
      state.hasError = false
      state.isLoading = true
    })
    builder.addCase(logoutUser.fulfilled, (state, { payload }) => {
      state.isLoading = false
      if (payload.success) {
        state.user = { ...initialState.user }
        state.auth = false
        localStorage.removeItem('accessToken')
        localStorage.removeItem('refreshToken')
      } else {
        state.hasError = true
      }
    })
    builder.addCase(logoutUser.rejected, (state) => {
      state.isLoading = false
      state.hasError = true
    })
    // логин
    builder.addCase(loginUser.pending, (state) => {
      state.hasError = false
      state.isLoading = true
    })
    builder.addCase(loginUser.fulfilled, (state, { payload }) => {
      state.isLoading = false
      if (payload.success) {
        state.user = { ...initialState.user, ...payload.user }
        state.auth = true
        state.isResetPasswordStart = false
        state.isResetPasswordFinish = false
        localStorage.setItem('accessToken', payload.accessToken)
        localStorage.setItem('refreshToken', payload.refreshToken)
      } else {
        state.hasError = true
      }
    })
    builder.addCase(loginUser.rejected, (state) => {
      state.isLoading = false
      state.hasError = true
    })
    // получение данных пользователя
    builder.addCase(getUserData.pending, (state) => {
      state.hasError = false
      state.isLoading = true
    })
    builder.addCase(getUserData.fulfilled, (state, { payload }) => {
      state.isLoading = false
      if (payload.success) {
        state.user = { ...initialState.user, ...payload.user }
        state.auth = true
      } else {
        state.hasError = true
      }
    })
    builder.addCase(getUserData.rejected, (state) => {
      state.isLoading = false
      state.hasError = true
    })
    // обновление пользователя
    builder.addCase(updateUserData.pending, (state) => {
      state.hasError = false
      state.isLoading = true
    })
    builder.addCase(updateUserData.fulfilled, (state, { payload }) => {
      state.isLoading = false
      if (payload.success) {
        state.user = { ...initialState.user, ...payload.user }
        state.auth = true
      } else {
        state.hasError = true
      }
    })
    builder.addCase(updateUserData.rejected, (state) => {
      state.isLoading = false
      state.hasError = true
    })
    // получение кода для сброса пароля
    builder.addCase(forgotPassword.pending, (state) => {
      state.hasError = false
      state.isLoading = true
    })
    builder.addCase(forgotPassword.fulfilled, (state, { payload }) => {
      state.isLoading = false
      if (payload.success) {
        state.isResetPasswordStart = true
        state.isResetPasswordFinish = false
      } else {
        state.hasError = true
      }
    })
    builder.addCase(forgotPassword.rejected, (state) => {
      state.isLoading = false
      state.hasError = true
    })
    // сброс пароля
    builder.addCase(resetPassword.pending, (state) => {
      state.hasError = false
      state.isLoading = true
    })
    builder.addCase(resetPassword.fulfilled, (state, { payload }) => {
      state.isLoading = false
      if (payload.success) {
        state.isResetPasswordStart = false
        state.isResetPasswordFinish = true
      } else {
        state.hasError = true
      }
    })
    builder.addCase(resetPassword.rejected, (state) => {
      state.isLoading = false
      state.hasError = true
    })
  },
})

export default userSlice.reducer

export const getUser = (state: RootState) => state.user

export const { cleanUser } = userSlice.actions

export {
  loginUser,
  registerUser,
  logoutUser,
  getUserData,
  updateUserData,
  forgotPassword,
  resetPassword,
}
