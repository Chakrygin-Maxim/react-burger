import { useState, useCallback, ChangeEvent } from 'react'
import { UpdateValues } from './types'

export const useForm = <T>(initialState: T) => {
  const [values, setValues] = useState(initialState)

  const updateValues = useCallback<UpdateValues<T>>((values) => {
    setValues({ ...values })
  }, [])

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setValues({ ...values, [name]: value })
  }

  return [values, handleOnChange, updateValues] as const
}
