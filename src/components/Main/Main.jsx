import mainStyle from './main.module.css'
import ingredients from '../../utils/data.json'
import BurgerIngredients from '../burger-ingredients/burger-ingredients'
import BurgerConstructor from '../burger-constructor/burger-constructor'

function Main() {
  return (
    <main className={mainStyle.main}>
      <BurgerIngredients ingredients={ingredients} />
      <BurgerConstructor ingredients={ingredients} />
    </main>
  )
}

export default Main
