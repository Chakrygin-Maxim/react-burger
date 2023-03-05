import mainStyle from './Main.module.css'
import data from '../../utils/data.json'
import BurgerIngredients from '../BurgerIngredients/BurgerIngredients'
import BurgerConstructor from '../BurgerConstructor/BurgerConstructor'

function Main() {
  return (
    <main className={mainStyle.main}>
      <BurgerIngredients ingredients={data} />
      <BurgerConstructor ingredients={data} />
    </main>
  )
}

export default Main
