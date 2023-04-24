import { useState, useCallback, ChangeEvent } from 'react'

type UpdateValues<T> = (values: T, data: T) => void

export const useForm = <T>(initialState: T) => {
  const [values, setValues] = useState(initialState)

  // type UpdateValues = <T>(values: T, data: T) => void

  const updateValues = useCallback<UpdateValues<T>>((values, data) => {
    setValues({ ...values, ...data })
  }, [])

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setValues({ ...values, [name]: value })
  }

  return [values, handleOnChange, updateValues] as const
}
