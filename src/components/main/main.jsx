import mainStyle from './main.module.css'
import { useState, useEffect } from 'react'
import BurgerIngredients from '../burger-ingredients/burger-ingredients'
import BurgerConstructor from '../burger-constructor/burger-constructor'
import { API_URL } from '../../utils/constants'

function EmptyBlock() {
  // можно добавить спинер в момент загрузки,
  // и страницу ошибки если сервер вернул данные с ошибкой
  // но пока оставим заглушку
  return <></>
}

function Main() {
  const [isLoading, setIsLoding] = useState(true)
  const [isError, setIsError] = useState(false)
  const [ingredients, setIngredients] = useState([])

  useEffect(() => {
    const getIngredients = async () => {
      try {
        const res = await fetch(API_URL)
        const result = await res.json()
        setIngredients(result.data)
      } catch (err) {
        setIsError(true)
        console.log('faild to fetch', err)
      }

      setIsLoding(false)
    }
    getIngredients()
  }, [])

  return (
    <main className={mainStyle.main}>
      {isLoading ? (
        <EmptyBlock />
      ) : ingredients.length && !isError ? (
        <>
          <BurgerIngredients ingredients={ingredients} />
          <BurgerConstructor ingredients={ingredients} />
        </>
      ) : (
        <EmptyBlock />
      )}
    </main>
  )
}

export default Main
