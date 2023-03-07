import Header from '../app-header/app-header'
import Main from '../main/main'
import { API_URL } from '../../utils/constants'
import { useState, useEffect } from 'react'

function EmptyBlock() {
  // можно добавить спинер в момент загрузки,
  // и страницу ошибки если сервер вернул данные с ошибкой
  // но пока оставим заглушку
  return <></>
}

function App() {
  const [isLoading, setIsLoding] = useState(true)
  const [hasError, setHasError] = useState(false)
  const [ingredients, setIngredients] = useState([])

  useEffect(() => {
    const getIngredients = async () => {
      try {
        const res = await fetch(API_URL)
        const result = await res.json()
        setIngredients(result.data)
      } catch (err) {
        setHasError(true)
        console.log('faild to fetch', err)
      }

      setIsLoding(false)
    }
    getIngredients()
  }, [])

  return (
    <>
      <Header />
      {isLoading ? (
        <EmptyBlock />
      ) : ingredients.length && !hasError ? (
        <Main ingredients={ingredients} />
      ) : (
        <EmptyBlock />
      )}
    </>
  )
}

export default App
