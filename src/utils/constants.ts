import {
  IngredientFilterText,
  IngredientItem,
  Navigation,
  PositionsType,
} from './types'

//типы состава бургера в константы для упрощения рендера
export const INGREDIENTS_TYPE: string[] = ['bun', 'sauce', 'main']

export const APP_ROUTES: { [key in string]: string } = Object.freeze({
  root: '/',
  profile: '/profile',
  login: '/login',
  register: '/register',
  forgotPassword: '/forgot-password',
  resetPassword: '/reset-password',
  ingredientsId: '/ingredients/:id',
  orderList: '/order-list',
  orders: 'orders',
  profileOrdersId: ':id',
})

export const APP_ROUTES_MATCH: { [key in string]: string } = Object.freeze({
  root: '/',
  profile: '/profile',
  profileOrders: '/profile/orders',
  profileOrdersId: '/profile/orders/:id',
  login: '/login',
  register: '/register',
  forgotPassword: '/forgot-password',
  resetPassword: '/reset-password',
  ingredientsId: '/ingredients/:id',
  orderList: '/order-list',
})

export const NAVIGATION: Navigation = Object.freeze({
  profile: { name: 'Профиль', linkTo: APP_ROUTES.profile },
  history: {
    name: 'История',
    linkTo: APP_ROUTES_MATCH.profileOrders,
  },
  exit: { name: 'Выход', linkTo: '/' },
})

// хранит текст БЖУ
export const INGREDIENT_BZHU: { [key in string]: string } = Object.freeze({
  calories: 'Калории, ккал',
  proteins: 'Белки, г',
  fat: 'Жиры, г',
  carbohydrates: 'Углеводы, г',
})

export const INGREDIENT_TYPES_FILTER_TEXT: IngredientFilterText = Object.freeze(
  {
    bun: 'Булки',
    sauce: 'Соусы',
    main: 'Начинки',
  }
)

// для отбора булок в конструкторе бургера
export const INGREDIENT_TYPES_FILTER: { [key in string]: string } =
  Object.freeze({
    bun: 'bun',
    sauce: 'sauce',
    main: 'main',
  })

// для определения позции булок
export const BURGER_POSITIONS: PositionsType = Object.freeze({
  TOP: 'top',
  BOTTOM: 'bottom',
})

// для хранения соответствия текста позиции булки
export const BURGER_POSITIONS_TEXT: { [key in string]: string } = Object.freeze(
  {
    top: '(верх)',
    bottom: '(низ)',
  }
)

export const ORDER_TEXTS: { [key in string]: string } = Object.freeze({
  orderId: 'идентификатор заказа',
  isCooking: 'Ваш заказ начали готовить',
  waiting: 'Дождитесь готовности на орбитальной станции',
  loading: 'Загрузка, ждите...',
})

export const EDIT_PROFILE_PAGE_TEXT =
  'В этом разделе вы можете изменить свои персональные данные'

export const API_URL = 'https://norma.nomoreparties.space/api'

export const EMPTY_INGREDIENT: IngredientItem = {
  id: '0',
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
  _id: '0',
}

export const DND_TYPE: { [key in string]: string } = {
  item: 'item',
  shake: 'shake',
}
