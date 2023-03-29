import { useState } from 'react'

export const useForm = (initialState) => {
  const [values, setValues] = useState(initialState)
  const handleOnChange = (e) => {
    const { name, value } = e.target
    setValues({ ...values, [name]: value })
  }
  return [values, handleOnChange]
}
