import { useState, useCallback } from 'react'

export const useForm = (initialState) => {
  const [values, setValues] = useState(initialState)

  const updateValues = useCallback((values, data) => {
    setValues({ ...values, ...data })
  }, [])

  const handleOnChange = (e) => {
    const { name, value } = e.target
    setValues({ ...values, [name]: value })
  }

  return [values, handleOnChange, updateValues]
}
