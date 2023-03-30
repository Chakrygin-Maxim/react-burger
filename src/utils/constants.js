//типы состава бургера в константы для упрощения рендера
export const INGREDIENTS_TYPE = ['bun', 'sauce', 'main']

export const NAVIGATION_TYPE = ['profile', 'history', 'exit']

export const APP_ROUTES = Object.freeze({
  root: '/',
  profile: '/profile',
  login: '/login',
  register: '/register',
  forgotPassword: '/forgot-password',
  resetPassword: '/reset-password',
  ingredientsId: '/ingredients/:id',
  profileOrders: '/profile/orders',
  orderList: '/order-list',
  orders: 'orders',
  profileOrdersId: ':id',
})

export const NAVIGATION = Object.freeze({
  profile: { name: 'Профиль', linkTo: APP_ROUTES.profile, type: 'profile' },
  history: {
    name: 'История',
    linkTo: APP_ROUTES.profileOrders,
    type: 'history',
  },
  exit: { name: 'Выход', linkTo: '/', type: 'exit' },
})

// хранит текст БЖУ
export const INGREDIENT_BZHU = Object.freeze({
  calories: 'Калории, ккал',
  proteins: 'Белки, г',
  fat: 'Жиры, г',
  carbohydrates: 'Углеводы, г',
})

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
  top: '(верх)',
  bottom: '(низ)',
})

export const ORDER_TEXTS = Object.freeze({
  orderId: 'идентификатор заказа',
  isCooking: 'Ваш заказ начали готовить',
  waiting: 'Дождитесь готовности на орбитальной станции',
})

export const EDIT_PROFILE_PAGE_TEXT =
  'В этом разделе вы можете изменить свои персональные данные'

export const API_URL = 'https://norma.nomoreparties.space/api'

export const EMPTY_INGREDIENT = {
  type: 'main',
  image: '',
  image_large: '',
  image_mobile: '',
  name: '',
  price: 0,
  calories: 0,
  proteins: 0,
  fat: 0,
  carbohydrates: 0,
  count: 0,
  _id: 0,
}

export const DND_TYPE = {
  item: 'item',
  shake: 'shake',
}
