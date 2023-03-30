import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { API_URL } from '../../utils/constants'

const initialState = {
  user: { email: '', name: '' },
  isLoading: false,
  hasError: false,
}

const name = 'user'

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

export const userSlice = createSlice({
  name,
  initialState,
  reducers: {
    cleanUser(state) {
      state.user = initialState
    },
  },
  extraReducers: (builder) => {
    builder.addCase(registerUser.pending, (state) => {
      state.hasError = false
      state.isLoading = true
    })
    builder.addCase(registerUser.fulfilled, (state, { payload }) => {
      state.isLoading = false
      if (payload.success) {
        state.user = { ...payload.user }
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
  },
})

export default userSlice.reducer

export const getUser = (state) => state.user

export const { cleanUser } = userSlice.actions
