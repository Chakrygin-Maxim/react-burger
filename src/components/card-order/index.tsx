import Price from '../price'
import styles from './style.module.css'
import { FormattedDate } from '@ya.praktikum/react-developer-burger-ui-components'
import { CardOrderProps } from './types'
import { useSelector } from 'react-redux'
import { getIngredients } from '../../services/reducers/ingredients'
import { getIngredientsById } from '../../utils/common'
import { Ingredients } from '../../utils/types'

const imagesRender = (ingredients: Ingredients) => {
  const maxLength = 5

  return (
    <ul className={styles.ingredients}>
      {ingredients
        .slice()
        .reverse()
        .map((item, index) => {
          if (index > maxLength) return null

          const isExtraImages = ingredients.length > 6 && index === 0

          return (
            <li key={index} className={styles.ingredientsItem}>
              <img
                className={`${styles.image} ${
                  isExtraImages && styles.extraImage
                }`}
                src={item.image}
                alt={item.name}
              />
              {isExtraImages && (
                <p className={styles.text}>{`+ ${ingredients.length - 6}`}</p>
              )}
            </li>
          )
        })}
    </ul>
  )
}

function CardOrder({ cardItem }: CardOrderProps) {
  const { data } = useSelector(getIngredients)
  const { totalPrice, ingredients } = getIngredientsById(
    cardItem.ingredients,
    data
  )

  return (
    <li className={styles.feedDetail}>
      <div className={styles.headerContainer}>
        <p className={styles.orderNumber}>#{cardItem.number}</p>
        <p className={styles.orderDate}>
          <FormattedDate date={new Date(cardItem.createdAt)} />
        </p>
      </div>
      <h2 className={styles.mainText}>{cardItem.name}</h2>
      <div className={styles.detailContainer}>
        <div className={styles.imagesContainer}>
          {imagesRender(ingredients)}
        </div>
        <Price total={totalPrice} />
      </div>
    </li>
  )
}

export default CardOrder
