import Header from '../../components/app-header/app-header'
import Main from '../../components/main/main'
import { useEffect } from 'react'
import {
  getIngrediensData,
  getIngredients,
} from '../../services/reducers/ingredients'
import { useDispatch, useSelector } from 'react-redux'

function EmptyBlock() {
  return <></>
}

function Constructor() {
  const dispatch = useDispatch()
  const { data, isLoading, hasError } = useSelector(getIngredients)
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

export default Constructor
