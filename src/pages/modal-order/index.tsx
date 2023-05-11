import styles from './style.module.css'
import Modal from '../../components/modal'
import FeedOrderDetails from '../../components/feed-details-order'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { getOrders } from '../../services/reducers/orders-feed'
import { useMemo } from 'react'
import { getOrderByNumber } from '../../utils/common'
import { getUserOrders } from '../../services/reducers/orders-user-feed'
import { APP_ROUTES_MATCH } from '../../utils/constants'

const Loading = () => {
  return (
    <div className={styles.loading}>
      <h2 className={styles.loadingText}> Загрузка заказа...</h2>
    </div>
  )
}

function ModalOrder(): JSX.Element {
  const navigate = useNavigate()
  const location = useLocation()
  const { pathname } = location

  const regExp = new RegExp(APP_ROUTES_MATCH.profileOrders)
  const selector = pathname.match(regExp) ? getUserOrders : getOrders

  const { orders } = useSelector(selector)
  const { id } = useParams()
  const order = useMemo(() => getOrderByNumber(orders, id), [orders, id])

  const closeOrderDetails = () => {
    location?.state?.background && navigate(location.state.background)
  }

  return (
    <Modal onClose={closeOrderDetails}>
      {order ? <FeedOrderDetails order={order} /> : <Loading />}
    </Modal>
  )
}

export default ModalOrder
