import { createAsyncThunk } from '@reduxjs/toolkit'
import { request } from '../../utils/common'

const name = 'user'

const refreshToken = () => {
  return request('/auth/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify({
      token: localStorage.getItem('refreshToken'),
    }),
  })
}

const loginUser = createAsyncThunk(name + '/postLogin', async (payload) => {
  try {
    return await request('/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify(payload),
    })
  } catch (err) {
    console.log('fail to login', err)
    return { succsess: false }
  }
})

const registerUser = createAsyncThunk(
  name + '/postRegister',
  async (payload) => {
    try {
      return await request('/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify(payload),
      })
    } catch (err) {
      console.log('fail to register', err)
      return { succsess: false }
    }
  }
)

const fetchLogoutWithRefresh = async (url: string, options: RequestInit) => {
  try {
    return await request(url, options)
  } catch (err) {
    if ((err as Error).message === 'jwt expired' || err === 'Ошибка: 403') {
      const refreshData = await refreshToken() //обновляем токен
      if (!refreshData.success) {
        return Promise.reject(refreshData)
      }

      options.body = JSON.stringify({
        token: refreshData.refreshToken,
      })

      return await request(url, options) //повторяем запрос
    } else {
      return Promise.reject(err)
    }
  }
}

const logoutUser = createAsyncThunk(name + '/postLogout', async () => {
  try {
    return await fetchLogoutWithRefresh('/auth/logout', {
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

const fetchUserDataWithRefresh = async (url: string, options: RequestInit) => {
  try {
    return await request(url, options)
  } catch (err) {
    if ((err as Error).message === 'jwt expired' || err === 'Ошибка: 403') {
      const refreshData = await refreshToken() //обновляем токен
      if (!refreshData.success) {
        return Promise.reject(refreshData)
      }
      localStorage.setItem('refreshToken', refreshData.refreshToken)
      localStorage.setItem('accessToken', refreshData.accessToken)
      options.headers = {
        ...options.headers,
        Authorization: refreshData.accessToken,
      }
      return await request(url, options) //повторяем запрос
    } else {
      return Promise.reject(err)
    }
  }
}

const getUserData = createAsyncThunk(name + '/user', async () => {
  try {
    return await fetchUserDataWithRefresh('/auth/user', {
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        Authorization: localStorage.getItem('accessToken'),
      },
    } as RequestInit)
  } catch (err) {
    console.log('fail to get user', err)
    return { succsess: false }
  }
})

const updateUserData = createAsyncThunk(
  name + '/updateUser',
  async (payload) => {
    try {
      return await fetchUserDataWithRefresh('/auth/user', {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
          Authorization: localStorage.getItem('accessToken'),
        },
        body: JSON.stringify(payload),
      } as RequestInit)
    } catch (err) {
      console.log('fail to update user', err)
      return { succsess: false }
    }
  }
)

const forgotPassword = createAsyncThunk(
  name + '/forgotPassword',
  async (payload) => {
    try {
      return await request('/password-reset', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify(payload),
      })
    } catch (err) {
      console.log('failed to send reset password', err)
      return { succsess: false }
    }
  }
)

const resetPassword = createAsyncThunk(
  name + '/resetPassword',
  async (payload) => {
    try {
      return await request('/password-reset/reset', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify(payload),
      })
    } catch (err) {
      console.log('failed to reset password', err)
      return { succsess: false }
    }
  }
)

export {
  resetPassword,
  forgotPassword,
  updateUserData,
  getUserData,
  logoutUser,
  registerUser,
  loginUser,
}
