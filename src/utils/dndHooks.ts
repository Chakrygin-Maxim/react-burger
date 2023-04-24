import { useDrop, useDrag, XYCoord, DropTargetMonitor } from 'react-dnd'
import { DND_TYPE, INGREDIENT_TYPES_FILTER } from './constants'
import {
  BurgerConstructorDropProps,
  dragElement,
  dropType,
  useBurgerDropProps,
} from './types'
import { IngredientItem } from './types'

export const useBurgerElementDrop: useBurgerDropProps = (
  ref,
  index,
  moveElement
) => {
  const [{ handlerId }, drop]: dropType = useDrop({
    accept: DND_TYPE.shake,
    collect(monitor) {
      return {
        handlerId: monitor.getHandlerId(),
      }
    },
    hover(item, monitor: DropTargetMonitor) {
      if (!ref.current) {
        return
      }

      if (!(typeof item === 'object' && item !== null && 'id' in item)) {
        return
      }

      const el = item as dragElement
      const dragIndex = el.index
      const hoverIndex = index

      if (dragIndex === hoverIndex) {
        return
      }

      const hoverBoundingRect = ref.current?.getBoundingClientRect()
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2

      const clientOffset = monitor.getClientOffset() as XYCoord
      const hoverClientY = clientOffset.y - hoverBoundingRect.top

      if ((dragIndex as number) < hoverIndex && hoverClientY < hoverMiddleY) {
        return
      }

      if ((dragIndex as number) > hoverIndex && hoverClientY > hoverMiddleY) {
        return
      }

      moveElement(dragIndex as number, hoverIndex)

      el.index = hoverIndex
    },
  })

  return { handlerId, drop }
}

export const useBurgerElementDrag = (id: string, index: number) => {
  const [{ opacity }, drag] = useDrag({
    type: DND_TYPE.shake,
    item: () => {
      const el: dragElement = { id, index }
      return el
    },
    collect: (monitor) => ({
      opacity: monitor.isDragging() ? 0 : 1,
    }),
  })

  return { opacity, drag }
}

export const useIngredientDrag = (ingredient: IngredientItem) => {
  const [{ opacity }, ref] = useDrag({
    type: DND_TYPE.item,
    item: ingredient,
    collect: (monitor) => ({
      opacity: monitor.isDragging() ? 0.5 : 1,
    }),
  })

  return { opacity, ref }
}

export const BurgerConstructorDrop: BurgerConstructorDropProps = (
  updateBuns,
  updateItems
) => {
  const [, dropTarget] = useDrop({
    accept: DND_TYPE.item,
    drop(item: IngredientItem) {
      item.type === INGREDIENT_TYPES_FILTER.bun && updateBuns(item)
      item.type !== INGREDIENT_TYPES_FILTER.bun && updateItems(item)
    },
  })

  return { dropTarget }
}
