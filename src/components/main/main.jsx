import mainStyle from './main.module.css'
import PropTypes from 'prop-types'
import BurgerIngredients from '../burger-ingredients/burger-ingredients'
import BurgerConstructor from '../burger-constructor/burger-constructor'

function Main({ ingredients }) {
  return (
    <main className={mainStyle.main}>
      <BurgerIngredients ingredients={ingredients} />
      <BurgerConstructor ingredients={ingredients} />
    </main>
  )
}

Main.propTypes = {
  ingredients: PropTypes.array.isRequired,
}

export default Main
