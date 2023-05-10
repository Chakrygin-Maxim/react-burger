import styles from './style.module.css'
import Modal from '../../components/modal'
import FeedOrderDetails from '../../components/feed-details-order'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { getOrders } from '../../services/reducers/orders-feed'
import { useMemo } from 'react'
import { OrderItem } from '../../services/orders-table/types'

const Loading = () => {
  return <h2 className={styles.loadingText}> Загрузка заказа...</h2>
}

function ModalOrder(): JSX.Element {
  const navigate = useNavigate()
  const location = useLocation()

  const { orders } = useSelector(getOrders)
  const { id } = useParams()

  const order = useMemo(() => {
    return orders?.find((el: OrderItem) => el._id === id)
  }, [orders, id])

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
