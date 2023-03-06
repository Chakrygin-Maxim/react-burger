import ingredientDetailsStyle from './ingredient-details.module.css'
import { INGREDIENT_BZHU } from '../../utils/constants'
import PropTypes from 'prop-types'

function RenderBZHU({ title, text }) {
  return (
    <li className={ingredientDetailsStyle.ingredientDetails__element}>
      <span className={ingredientDetailsStyle.ingredientDetails__title}>
        {title}
      </span>
      <span className={ingredientDetailsStyle.ingredientDetails__value}>
        {text}
      </span>
    </li>
  )
}

function IngredientDetails({ ingredient }) {
  return (
    <>
      <h2 className={ingredientDetailsStyle.ingredientDetails__header}>
        Детали ингридиента
      </h2>
      <img src={ingredient.image_large} alt={ingredient.name}></img>
      <h3 className={ingredientDetailsStyle.ingredientDetails__textName}>
        {ingredient.name}
      </h3>
      <ul className={ingredientDetailsStyle.ingredientDetails__list}>
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
  ingredient: PropTypes.object.isRequired,
}

export default IngredientDetails
