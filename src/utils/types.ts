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
  bun: string
  sauce: string
  main: string
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
