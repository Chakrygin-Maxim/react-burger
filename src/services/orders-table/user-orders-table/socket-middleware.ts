import { Middleware } from 'redux'
import { wsClose, wsConnecting } from './actions'
import { ActionTypes } from '../types'

const webSocketUserFeerMiddleware =
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
          return dispatch(wsActions.onError('WebSocket for user feed error'))
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

export default webSocketUserFeerMiddleware
