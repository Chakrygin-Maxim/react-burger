import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { rootReducer } from '../services/reducers'

const customizedMiddleware = getDefaultMiddleware({
  serializableCheck: false,
})

const store = configureStore({
  middleware: customizedMiddleware,
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== 'production',
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch