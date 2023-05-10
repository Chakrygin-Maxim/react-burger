import styles from './style.module.css'
import {
  CurrencyIcon,
  FormattedDate,
} from '@ya.praktikum/react-developer-burger-ui-components'
import { FeedOrderDetailsIngredient, FeedOrderDetailsProps } from './types'
import { useSelector } from 'react-redux'
import { getIngredients } from '../../services/reducers/ingredients'
import { getIngredientsById } from '../../utils/common'
import { OrderStatus } from '../../services/orders-table/types'

const statusText = (status: OrderStatus): string => {
  switch (status) {
    case 'done':
      return 'Выполнен'

    case 'pending':
      return 'В процессе'

    case 'created':
      return 'Создан'
  }
}

const ingredientDetailsRender = (ingredients: FeedOrderDetailsIngredient[]) => {
  return (
    <ul className={styles.list}>
      {ingredients.map((el) => {
        const text =
          el.count === 1 ? `${el.price}` : `${el.count} x ${el.price}`

        return (
          <li key={el._id} className={styles.item}>
            <div className={styles.textContainer}>
              <img src={el.image} alt={el.name} className={styles.image} />
              <p>{el.name}</p>
            </div>

            {priceRender<string>(text)}
          </li>
        )
      })}
    </ul>
  )
}

function priceRender<T extends string | number>(price: T) {
  return (
    <div className={styles.totalContent}>
      <p className={styles.price}>{price}</p>
      <CurrencyIcon type="primary" />
    </div>
  )
}

function FeedOrderDetails({ order }: FeedOrderDetailsProps): JSX.Element {
  const { data } = useSelector(getIngredients)

  const { totalPrice, ingredients } = getIngredientsById(
    order.ingredients,
    data
  )

  const wrappedIngredients: FeedOrderDetailsIngredient[] = []

  ingredients.forEach((item) => {
    const index = wrappedIngredients.findIndex((el) => el._id === item._id)

    if (index !== -1) {
      wrappedIngredients[index].count++
    } else {
      wrappedIngredients.push({ ...item, count: 1 })
    }
  })

  return (
    <section className={styles.orderDetails}>
      <h2 className={styles.orderNumber}>{`#${order.number}`}</h2>
      <h1 className={`mt-10 ${styles.mainText}`}>{order.name}</h1>
      <p className={styles.status}>{statusText(order.status)}</p>
      <p className={`mt-15 ${styles.mainText}`}>Состав</p>
      {ingredientDetailsRender(wrappedIngredients)}
      <div className={`mt-10 ${styles.bottomContent}`}>
        <FormattedDate
          className={styles.createdTime}
          date={new Date(order.createdAt)}
        />
        {priceRender<number>(totalPrice)}
      </div>
    </section>
  )
}

export default FeedOrderDetails
