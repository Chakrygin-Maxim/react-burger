import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { API_URL } from '../../utils/constants'

const name = 'user'

const initialState = {
  user: { email: '', name: '', password: '' },
  isLoading: false,
  hasError: false,
}

const checkReponse = (res) => {
  if (!res.ok) {
    return Promise.reject(`Ошибка: ${res.status}`)
  }
  return res.json()
}

const refreshToken = () => {
  return fetch(`${API_URL}/auth/token`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify({
      token: localStorage.getItem('refreshToken'),
    }),
  }).then(checkReponse)
}

export const loginUser = createAsyncThunk(
  name + '/postLogin',
  async (payload) => {
    try {
      const res = await fetch(`${API_URL}/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify(payload),
      })
      const result = await res.json()
      return result
    } catch (err) {
      console.log('fail to login', err)
      return { succsess: false }
    }
  }
)

export const registerUser = createAsyncThunk(
  name + '/postRegister',
  async (payload) => {
    try {
      const res = await fetch(`${API_URL}/auth/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify(payload),
      })
      const result = await res.json()
      return result
    } catch (err) {
      console.log('fail to register', err)
      return { succsess: false }
    }
  }
)

const fetchLogoutWithRefresh = async (url, options) => {
  try {
    const res = await fetch(url, options)
    return await checkReponse(res)
  } catch (err) {
    if (err.message === 'jwt expired' || err === 'Ошибка: 403') {
      const refreshData = await refreshToken() //обновляем токен
      if (!refreshData.success) {
        return Promise.reject(refreshData)
      }
      options.body.token = refreshData.refreshToken
      const res = await fetch(url, options) //повторяем запрос
      return await checkReponse(res)
    } else {
      return Promise.reject(err)
    }
  }
}

export const logoutUser = createAsyncThunk(name + '/postLogout', async () => {
  try {
    return await fetchLogoutWithRefresh(`${API_URL}/auth/logout`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify({
        token: localStorage.getItem('refreshToken'),
      }),
    })
  } catch (err) {
    console.log('fail to logout', err)
    return { succsess: false }
  }
})

const fetchUserDataWithRefresh = async (url, options) => {
  try {
    const res = await fetch(url, options)
    return await checkReponse(res)
  } catch (err) {
    if (err.message === 'jwt expired' || err === 'Ошибка: 403') {
      const refreshData = await refreshToken() //обновляем токен
      if (!refreshData.success) {
        return Promise.reject(refreshData)
      }
      localStorage.setItem('refreshToken', refreshData.refreshToken)
      localStorage.setItem('accessToken', refreshData.accessToken)
      options.headers.Authorization = refreshData.accessToken
      const res = await fetch(url, options) //повторяем запрос
      return await checkReponse(res)
    } else {
      return Promise.reject(err)
    }
  }
}

export const getUserData = createAsyncThunk(name + '/user', async () => {
  try {
    return await fetchUserDataWithRefresh(`${API_URL}/auth/user`, {
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        Authorization: localStorage.getItem('accessToken'),
      },
    })
  } catch (err) {
    console.log('fail to get user', err)
    return { succsess: false }
  }
})

export const updateUserData = createAsyncThunk(
  name + '/updateUser',
  async (payload) => {
    try {
      return await fetchUserDataWithRefresh(`${API_URL}/auth/user`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
          Authorization: localStorage.getItem('accessToken'),
        },
        body: JSON.stringify(payload),
      })
    } catch (err) {
      console.log('fail to update user', err)
      return { succsess: false }
    }
  }
)

export const userSlice = createSlice({
  name,
  initialState,
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
      } else {
        state.hasError = true
      }
    })
    builder.addCase(updateUserData.rejected, (state) => {
      state.isLoading = false
      state.hasError = true
    })
  },
})

export default userSlice.reducer

export const getUser = (state) => state.user
