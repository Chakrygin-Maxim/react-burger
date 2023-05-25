import { initialState } from './user'
import {
  loginUser,
  registerUser,
  logoutUser,
  getUserData,
  updateUserData,
  forgotPassword,
  resetPassword,
} from './userApi'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const user = { email: '', name: '', password: '' }
