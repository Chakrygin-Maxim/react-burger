import styles from './style.module.css'

function OrderError() {
  return (
    <>
      <h2 className={styles.orderError__header}>Ошибка</h2>
      <span className={styles.orderError__title}>
        Попробуйте повторить заказ
      </span>
    </>
  )
}

export default OrderError
