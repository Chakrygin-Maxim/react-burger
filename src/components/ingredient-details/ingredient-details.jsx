import ingredientDetailsStyle from './ingredient-details.module.css'

function IngredientDetails({ ingredient }) {
  return (
    <>
      <h2>Детали ингридиента</h2>
      <img src={ingredient.image_large} alt={ingredient.name}></img>
      <h3>{ingredient.name}</h3>
      <ul>
        <li>
          <div>
            <span>Калории, ккал</span>
            <span>{ingredient.calories}</span>
          </div>
        </li>
        <li>
          <div>
            <span>Белки, г</span>
            <span>{ingredient.proteins}</span>
          </div>
        </li>
        <li>
          <div>
            <span>Жиры, г</span>
            <span>{ingredient.fat}</span>
          </div>
        </li>
        <li>
          <div>
            <span>Углеводы, г</span>
            <span>{ingredient.carbohydrates}</span>
          </div>
        </li>
      </ul>
    </>
  )
}

export default IngredientDetails
