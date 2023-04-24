import styles from './style.module.css'
import BurgerIngredients from '../burger-ingredients'
import BurgerConstructor from '../burger-constructor'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { DndProvider } from 'react-dnd'

function Main(): JSX.Element {
  return (
    <main className={styles.main}>
      <DndProvider backend={HTML5Backend}>
        <BurgerIngredients />
        <BurgerConstructor />
      </DndProvider>
    </main>
  )
}

export default Main
