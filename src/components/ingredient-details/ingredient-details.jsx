import styles from './ingredient-details.module.css'
import { INGREDIENT_BZHU } from '../../utils/constants'
import { INGREDIENT_TYPE } from '../../utils/propTypes'
import { useLocation } from 'react-router-dom'

function RenderBZHU({ title, text }) {
  return (
    <li className={styles.ingredientDetails__element}>
      <span className={styles.ingredientDetails__title}>{title}</span>
      <span className={styles.ingredientDetails__value}>{text}</span>
    </li>
  )
}

function IngredientDetails({ ingredient }) {
  const location = useLocation()

  return (
    <>
      <h2
        className={`${styles.ingredientDetails__header} ${
          !location?.state?.background &&
          styles.ingredientDetails__header_align_center
        }`}
      >
        Детали ингридиента
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

IngredientDetails.propTypes = {
  ingredient: INGREDIENT_TYPE.isRequired,
}

export default IngredientDetails
