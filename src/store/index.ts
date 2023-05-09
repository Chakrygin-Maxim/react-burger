import webSocketMiddleware from '../services/orders-table/socket-middleware'
import { configureStore } from '@reduxjs/toolkit'
import { rootReducer } from '../services/reducers'
import {
  connect as OrderTableConnect,
  disconnect as OrderTableDisconnect,
  wsOpen as OrderTableWsOpen,
  wsClose as OrderTableWsClose,
  wsMessage as OrderTableWsMessage,
  wsError as OrderTableWsError,
  wsConnecting as OrderTableWsConnecting,
} from '../services/orders-table/actions'

const liveOrderTablemiddleware = webSocketMiddleware({
  wsConnect: OrderTableConnect,
  wsDisconnect: OrderTableDisconnect,
  wsConnecting: OrderTableWsConnecting,
  onOpen: OrderTableWsOpen,
  onClose: OrderTableWsClose,
  onError: OrderTableWsError,
  onMessage: OrderTableWsMessage,
})

const store = configureStore({
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(liveOrderTablemiddleware)
  },
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== 'production',
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
