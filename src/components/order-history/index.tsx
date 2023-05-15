import OrdersFeed from '../../components/order-feed'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { WS_URL_USER_ORDERS } from '../../utils/constants'
import { getUserOrders } from '../../services/reducers/orders-user-feed'
import {
  connect as wsConnect,
  disconnect as wsDisconnect,
} from '../../services/orders-table/user-orders-table/actions'

function OrderHistory(): JSX.Element {
  const dispatch = useDispatch()

  const { orders } = useSelector(getUserOrders)
  const ordersSortable = orders.slice().reverse()

  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken')

    if (accessToken) {
      const url = `${WS_URL_USER_ORDERS + accessToken.replace(/bearer /i, '')}`
      dispatch(wsConnect(url))
    }

    return () => {
      dispatch(wsDisconnect())
    }
  }, [dispatch])

  return <OrdersFeed orders={ordersSortable} showStatus />
}

export default OrderHistory
