//типы состава бургера в константы для упрощения рендера
export const INGREDIENTS_TYPE = ['bun', 'sauce', 'main']

// для рендера тексты фильтров составов бургера
export const INGREDIENT_TYPES_FILTER_TEXT = Object.freeze({
  bun: 'Булки',
  sauce: 'Соусы',
  main: 'Начинки',
})

// для отбора булок в конструкторе бургера
export const INGREDIENT_TYPES_FILTER = Object.freeze({
  bun: 'bun',
  sauce: 'sauce',
  main: 'main',
})

// для определения позции булок
export const BURGER_POSITIONS = Object.freeze({
  TOP: 'top',
  BOTTOM: 'bottom',
})

// для хранения соответствия текста позиции булки
export const BURGER_POSITIONS_TEXT = Object.freeze({
  TOP: '(верх)',
  BOTTOM: '(низ)',
})
