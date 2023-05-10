import Price from '../price'
import styles from './style.module.css'
import { FormattedDate } from '@ya.praktikum/react-developer-burger-ui-components'
import { CardOrderProps, ImagesData } from './types'
import { useSelector } from 'react-redux'
import { getIngredients } from '../../services/reducers/ingredients'
import { Ingredients } from '../../utils/types'

const imagesRender = (images: ImagesData[]) => {
  const maxLength = 5

  return (
    <ul className={styles.ingredients}>
      {images
        .slice()
        .reverse()
        .map((item, index) => {
          if (index > maxLength) return null

          const isExtraImages = images.length > 6 && index === 0

          return (
            <li key={item._id} className={styles.ingredientsItem}>
              <img
                className={`${styles.image} ${
                  isExtraImages && styles.extraImage
                }`}
                src={item.image}
                alt={item.name}
              />
              {isExtraImages && (
                <p className={styles.text}>{`+ ${images.length - 6}`}</p>
              )}
            </li>
          )
        })}
    </ul>
  )
}

const detailedOrderData = (orderItems: string[], data: Ingredients) => {
  let total = 0
  const images: ImagesData[] = []

  orderItems.forEach((item) => {
    const result = data.find((ingredient) => ingredient._id === item)
    if (result) {
      total += result.price * (result.type === 'bun' ? 2 : 1)

      const { image, name, _id } = result
      images.push({ image, name, _id })
    }
  })

  return { total, images }
}

function CardOrder({ cardItem }: CardOrderProps) {
  const { data } = useSelector(getIngredients)
  const { total, images } = detailedOrderData(cardItem.ingredients, data)

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
        <div className={styles.imagesContainer}> {imagesRender(images)}</div>
        <Price total={total} />
      </div>
    </li>
  )
}

export default CardOrder
