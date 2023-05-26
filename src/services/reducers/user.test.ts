import reducer, { initialState, cleanUser } from './user'
import {
  loginUser,
  registerUser,
  logoutUser,
  getUserData,
  updateUserData,
  forgotPassword,
  resetPassword,
} from './userApi'

const payload = {
  success: true,
  user: { email: 'test@test.ru', name: 'test-name', password: 'test-password' },
  accessToken: 'test-access-token',
  refreshToken: 'test-refresh-token',
}

describe('test-user-reducer', () => {
  it('initial-state', () => {
    expect(reducer(undefined, { type: null })).toEqual(initialState)
  })

  it('clean-user', () => {
    expect(reducer(initialState, cleanUser())).toEqual(initialState)
  })

  it('login-user-pending', () => {
    const action = { type: loginUser.pending.type }
    const result = reducer(initialState, action)
    expect(result).toEqual({
      ...initialState,
      hasError: false,
      isLoading: true,
    })
  })

  it('login-user-fulfilled', () => {
    const action = { type: loginUser.fulfilled.type, payload }
    const result = reducer(initialState, action)
    expect(result).toEqual({
      ...initialState,
      hasError: false,
      isLoading: false,
      user: payload.user,
      auth: true,
    })
  })

  it('login-user-rejected', () => {
    const action = { type: loginUser.rejected.type }
    const result = reducer(initialState, action)
    expect(result).toEqual({
      ...initialState,
      hasError: true,
      isLoading: false,
    })
  })

  it('register-user-pending', () => {
    const action = { type: registerUser.pending.type }
    const result = reducer(initialState, action)
    expect(result).toEqual({
      ...initialState,
      hasError: false,
      isLoading: true,
    })
  })

  it('register-user-fulfilled', () => {
    const action = { type: registerUser.fulfilled.type, payload }
    const result = reducer(initialState, action)
    expect(result).toEqual({
      ...initialState,
      hasError: false,
      isLoading: false,
      user: { ...initialState.user, ...payload.user },
      auth: true,
    })
  })

  it('register-user-rejected', () => {
    const action = { type: registerUser.rejected.type }
    const result = reducer(initialState, action)
    expect(result).toEqual({
      ...initialState,
      hasError: true,
      isLoading: false,
    })
  })

  it('logout-user-pending', () => {
    const action = { type: logoutUser.pending.type }
    const result = reducer(initialState, action)
    expect(result).toEqual({
      ...initialState,
      hasError: false,
      isLoading: true,
    })
  })

  it('logout-user-fulfilled', () => {
    const action = { type: logoutUser.fulfilled.type, payload }
    const result = reducer(initialState, action)
    expect(result).toEqual({
      ...initialState,
      hasError: false,
      isLoading: false,
      auth: false,
    })
  })

  it('logout-user-rejected', () => {
    const action = { type: logoutUser.rejected.type }
    const result = reducer(initialState, action)
    expect(result).toEqual({
      ...initialState,
      hasError: true,
      isLoading: false,
    })
  })

  it('data-user-pending', () => {
    const action = { type: getUserData.pending.type }
    const result = reducer(initialState, action)
    expect(result).toEqual({
      ...initialState,
      hasError: false,
      isLoading: true,
    })
  })

  it('data-user-fulfilled', () => {
    const action = { type: getUserData.fulfilled.type, payload }
    const result = reducer(initialState, action)
    expect(result).toEqual({
      ...initialState,
      user: { ...initialState.user, ...payload.user },
      hasError: false,
      isLoading: false,
      auth: true,
    })
  })

  it('data-user-rejected', () => {
    const action = { type: getUserData.rejected.type }
    const result = reducer(initialState, action)
    expect(result).toEqual({
      ...initialState,
      hasError: true,
      isLoading: false,
    })
  })

  it('update-user-pending', () => {
    const action = { type: updateUserData.pending.type }
    const result = reducer(initialState, action)
    expect(result).toEqual({
      ...initialState,
      hasError: false,
      isLoading: true,
    })
  })

  it('update-user-fulfilled', () => {
    const action = { type: updateUserData.fulfilled.type, payload }
    const result = reducer(initialState, action)
    expect(result).toEqual({
      ...initialState,
      user: { ...initialState.user, ...payload.user },
      hasError: false,
      isLoading: false,
      auth: true,
    })
  })

  it('update-user-rejected', () => {
    const action = { type: updateUserData.rejected.type }
    const result = reducer(initialState, action)
    expect(result).toEqual({
      ...initialState,
      hasError: true,
      isLoading: false,
    })
  })

  it('forgot-password-pending', () => {
    const action = { type: forgotPassword.pending.type }
    const result = reducer(initialState, action)
    expect(result).toEqual({
      ...initialState,
      hasError: false,
      isLoading: true,
    })
  })

  it('forgot-password-fulfilled', () => {
    const action = { type: forgotPassword.fulfilled.type, payload }
    const result = reducer(initialState, action)
    expect(result).toEqual({
      ...initialState,
      isResetPasswordStart: true,
      isResetPasswordFinish: false,
      hasError: false,
      isLoading: false,
    })
  })

  it('forgot-password-rejected', () => {
    const action = { type: forgotPassword.rejected.type }
    const result = reducer(initialState, action)
    expect(result).toEqual({
      ...initialState,
      hasError: true,
      isLoading: false,
    })
  })

  it('reset-password-pending', () => {
    const action = { type: resetPassword.pending.type }
    const result = reducer(initialState, action)
    expect(result).toEqual({
      ...initialState,
      hasError: false,
      isLoading: true,
    })
  })

  it('reset-password-fulfilled', () => {
    const action = { type: resetPassword.fulfilled.type, payload }
    const result = reducer(initialState, action)
    expect(result).toEqual({
      ...initialState,
      isResetPasswordStart: false,
      isResetPasswordFinish: true,
      hasError: false,
      isLoading: false,
    })
  })

  it('reset-password-rejected', () => {
    const action = { type: resetPassword.rejected.type }
    const result = reducer(initialState, action)
    expect(result).toEqual({
      ...initialState,
      hasError: true,
      isLoading: false,
    })
  })
})
