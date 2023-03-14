import mainStyle from './main.module.css'
import BurgerIngredients from '../burger-ingredients/burger-ingredients'
import BurgerConstructor from '../burger-constructor/burger-constructor'
import { INGREDIENTS_ARRAY_TYPE } from '../../utils/propTypes'

function Main({ ingredients }) {
  return (
    <main className={mainStyle.main}>
      <BurgerIngredients />
      <BurgerConstructor ingredients={ingredients} />
    </main>
  )
}

Main.propTypes = {
  ingredients: INGREDIENTS_ARRAY_TYPE.isRequired,
}

export default Main
