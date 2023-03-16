import { useDrop, useDrag } from 'react-dnd'
import { DND_TYPE, INGREDIENT_TYPES_FILTER } from './constants'

export const useBurgerElementDrop = (ref, index, moveCard) => {
  const [{ handlerId }, drop] = useDrop({
    accept: DND_TYPE.shake,
    collect(monitor) {
      return {
        handlerId: monitor.getHandlerId(),
      }
    },
    hover(item, monitor) {
      if (!ref.current) {
        return
      }
      const dragIndex = item.index
      const hoverIndex = index

      if (dragIndex === hoverIndex) {
        return
      }

      const hoverBoundingRect = ref.current?.getBoundingClientRect()
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2

      const clientOffset = monitor.getClientOffset()
      const hoverClientY = clientOffset.y - hoverBoundingRect.top

      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return
      }

      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return
      }

      moveCard(dragIndex, hoverIndex)

      item.index = hoverIndex
    },
  })

  return { handlerId, drop }
}

export const useBurgerElementDrag = (id, index) => {
  const [{ opacity }, drag] = useDrag({
    type: DND_TYPE.shake,
    item: () => {
      return { id, index }
    },
    collect: (monitor) => ({
      opacity: monitor.isDragging() ? 0 : 1,
    }),
  })

  return { opacity, drag }
}

export const useIngredientDrag = (ingredient) => {
  const [{ opacity }, ref] = useDrag({
    type: DND_TYPE.item,
    item: ingredient,
    collect: (monitor) => ({
      opacity: monitor.isDragging() ? 0.5 : 1,
    }),
  })

  return { opacity, ref }
}

export const BurgerConstructorDrop = (updateBuns, updateItems) => {
  const [, dropTarget] = useDrop({
    accept: DND_TYPE.item,
    drop(item) {
      item.type === INGREDIENT_TYPES_FILTER.bun && updateBuns(item)
      item.type !== INGREDIENT_TYPES_FILTER.bun && updateItems(item)
    },
  })

  return { dropTarget }
}
