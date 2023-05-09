import { Middleware } from 'redux'
import { wsClose, wsConnecting } from './actions'
import {
  ActionCreatorWithPayload,
  ActionCreatorWithoutPayload,
} from '@reduxjs/toolkit'

type ActionTypes = {
  wsConnect: ActionCreatorWithPayload<string>
  wsDisconnect: ActionCreatorWithoutPayload
  wsConnecting: ActionCreatorWithoutPayload
  onOpen: ActionCreatorWithoutPayload
  onClose: ActionCreatorWithoutPayload
  onError: ActionCreatorWithPayload<string>
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onMessage: ActionCreatorWithPayload<any>
}

const webSocketMiddleware =
  (wsActions: ActionTypes): Middleware =>
  (store) => {
    let socket: WebSocket | null = null

    return (next) => (action) => {
      const { dispatch } = store

      if (wsActions.wsConnect.match(action)) {
        socket = new WebSocket(action.payload)
        dispatch(wsConnecting())
      }

      if (socket) {
        socket.onopen = () => dispatch(wsActions.onOpen())
        socket.onerror = (err) => {
          console.log(err)
          return dispatch(wsActions.onError('WebSocket error'))
        }
        socket.onmessage = (event: MessageEvent<string>) => {
          const data = JSON.parse(event.data)
          dispatch(wsActions.onMessage(data))
        }

        if (wsActions.wsDisconnect.match(action)) {
          socket.close()
          socket = null
          dispatch(wsClose())
        }
      }

      next(action)
    }
  }

export default webSocketMiddleware
