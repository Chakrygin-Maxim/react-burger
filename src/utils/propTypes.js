import PropTypes from 'prop-types'
import { INGREDIENTS_TYPE } from './constants'

export const INGREDIENT_TYPES_TYPE = PropTypes.oneOf(INGREDIENTS_TYPE)

export const INGREDIENT_TYPE = PropTypes.shape({
  type: INGREDIENT_TYPES_TYPE.isRequired,
  image: PropTypes.string.isRequired,
  image_large: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  calories: PropTypes.number.isRequired,
  proteins: PropTypes.number.isRequired,
  fat: PropTypes.number.isRequired,
  carbohydrates: PropTypes.number.isRequired,
})

export const INGREDIENTS_ARRAY_TYPE = PropTypes.arrayOf(INGREDIENT_TYPE)
