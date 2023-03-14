import Header from '../app-header/app-header'
import Main from '../main/main'

import { useState, useEffect } from 'react'
import { getIngrediensData } from '../../services/reducers/ingredients'
import { useDispatch, useSelector } from 'react-redux'

function EmptyBlock() {
  // можно добавить спинер в момент загрузки,
  // и страницу ошибки если сервер вернул данные с ошибкой
  // но пока оставим заглушку
  return <></>
}

function App() {
  const dispatch = useDispatch()
  const { data, isLoading, hasError } = useSelector(
    (store) => store.ingredients
  )

  useEffect(() => {
    dispatch(getIngrediensData())
  }, [dispatch])

  return (
    <>
      <Header />
      {isLoading ? (
        <EmptyBlock />
      ) : data.length && !hasError ? (
        <Main ingredients={data} />
      ) : (
        <EmptyBlock />
      )}
    </>
  )
}

export default App
