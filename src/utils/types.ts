import { ConnectDropTarget } from 'react-dnd'
import { BunPosition } from '../components/bun/types'
import { RefObject } from 'react'
import { Identifier } from 'dnd-core'

type IngredientType = 'bun' | 'sauce' | 'main'

export type IngredientItem = {
  id: string
  type: IngredientType
  image: string
  image_large: string
  image_mobile: string
  name: string
  price: number
  calories: number
  proteins: number
  fat: number
  carbohydrates: number
  count: number
  _id?: string
  index?: number
}

export type Ingredients = IngredientItem[]

export type Order = { ingredients: string[] }

type NavigationData = {
  name: string
  linkTo: string
}

export type Navigation = {
  profile: NavigationData
  history: NavigationData
  exit: NavigationData
}
// для рендера тексты фильтров составов бургера
export type IngredientFilterText = {
  bun: 'Булки'
  sauce: 'Соусы'
  main: 'Начинки'
}

export type PositionsType = { TOP: BunPosition; BOTTOM: BunPosition }
export type updateBuns = (item: IngredientItem) => void
export type updateItems = (item: IngredientItem) => void

export type BurgerConstructorDropProps = (
  updateBuns: updateBuns,
  updateItems: updateItems
) => { dropTarget: ConnectDropTarget }

type MoveElement = (dragIndex: number, hoverIndex: number) => void

export type useBurgerDropProps = (
  ref: RefObject<HTMLLIElement | null>,
  index: number,
  moveElement: MoveElement
) => { handlerId: Identifier | null; drop: ConnectDropTarget }

type handler = { handlerId: Identifier | null }
export type dropType = [handlerId: handler, drop: ConnectDropTarget]
export type dragElement = { id: string; index: number }
export type UpdateValues<T> = (values: T) => void

export type IBZHUIngredient = {
  calories: 'Калории, ккал'
  proteins: 'Белки, г'
  fat: 'Жиры, г'
  carbohydrates: 'Углеводы, г'
}

export type BurgerPositionsText = {
  top: '(верх)'
  bottom: '(низ)'
}

export type IngredientTypesFilter = {
  bun: 'bun'
  sauce: 'sauce'
  main: 'main'
}

export type OrderTexts = {
  orderId: 'идентификатор заказа'
  isCooking: 'Ваш заказ начали готовить'
  waiting: 'Дождитесь готовности на орбитальной станции'
  loading: 'Загрузка, ждите...'
}

export type DndType = {
  item: 'item'
  shake: 'shake'
}

type OrderOwner = {
  name: string
  email: string
  createdAt: string
  updatedAt: string
}

type CreatedOrder = {
  _id: string
  createdAt: string
  name: string
  number: number
  price: number
  status: string
  updatedAt: string
  ingredients: Ingredients
  owner: OrderOwner
}

export type NewOrder = {
  name: string
  order: CreatedOrder
  success: boolean
}
