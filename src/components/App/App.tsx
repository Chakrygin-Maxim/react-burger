import Header from '../AppHeader/AppHeader'
import Ingredient from '../Ingredient/Ingredient'
import data from '../../utils/data.json'

function App() {
  return (
    <>
      <Header />
      {data.map((ingredient, index) => (
        <Ingredient key={index} ingredient={ingredient} />
      ))}
    </>
  )
}

export default App
