import orderErrorStyle from './order-error.module.css'

function OrderError() {
  return (
    <>
      <h2 className={orderErrorStyle.orderError__header}>Ошибка</h2>
      <span className={orderErrorStyle.orderError__title}>
        Попробуйте повторить заказ
      </span>
    </>
  )
}

export default OrderError
