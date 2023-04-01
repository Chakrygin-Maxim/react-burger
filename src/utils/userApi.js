import { createAsyncThunk } from '@reduxjs/toolkit'
import { API_URL } from './constants'

const name = 'user'

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

const loginUser = createAsyncThunk(name + '/postLogin', async (payload) => {
  try {
    const res = await fetch(`${API_URL}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify(payload),
    })
    return await checkReponse(res)
  } catch (err) {
    console.log('fail to login', err)
    return { succsess: false }
  }
})

const registerUser = createAsyncThunk(
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
      return await checkReponse(res)
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

const logoutUser = createAsyncThunk(name + '/postLogout', async () => {
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

const getUserData = createAsyncThunk(name + '/user', async () => {
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

const updateUserData = createAsyncThunk(
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

const forgotPassword = createAsyncThunk(
  name + '/forgotPassword',
  async (payload) => {
    try {
      const res = await fetch(`${API_URL}/password-reset`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify(payload),
      })
      return await checkReponse(res)
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
      const res = await fetch(`${API_URL}/password-reset/reset`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify(payload),
      })
      return await checkReponse(res)
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
