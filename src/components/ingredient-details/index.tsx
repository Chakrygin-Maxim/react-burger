import styles from './style.module.css'
import { IngredientDetailsProps, RenderBZHUProps } from './types'
import { INGREDIENT_BZHU } from '../../utils/constants'
import { useLocation } from 'react-router-dom'

function RenderBZHU({ title, text }: RenderBZHUProps) {
  return (
    <li className={styles.ingredientDetails__element}>
      <span className={styles.ingredientDetails__title}>{title}</span>
      <span className={styles.ingredientDetails__value}>{text}</span>
    </li>
  )
}

function IngredientDetails({
  ingredient,
}: IngredientDetailsProps): JSX.Element {
  const location = useLocation()

  return (
    <>
      <h2
        className={`${styles.ingredientDetails__header} ${
          !location?.state?.background &&
          styles.ingredientDetails__header_align_center
        }`}
      >
        Детали ингредиента
      </h2>
      <img src={ingredient.image_large} alt={ingredient.name}></img>
      <h3 className={styles.ingredientDetails__textName}>{ingredient.name}</h3>
      <ul className={styles.ingredientDetails__list}>
        <RenderBZHU
          title={INGREDIENT_BZHU.calories}
          text={ingredient.calories}
        />
        <RenderBZHU
          title={INGREDIENT_BZHU.proteins}
          text={ingredient.proteins}
        />
        <RenderBZHU title={INGREDIENT_BZHU.fat} text={ingredient.fat} />
        <RenderBZHU
          title={INGREDIENT_BZHU.carbohydrates}
          text={ingredient.carbohydrates}
        />
      </ul>
    </>
  )
}

export default IngredientDetails
