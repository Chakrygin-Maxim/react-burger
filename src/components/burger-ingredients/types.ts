import { RefObject } from 'react'

type ScrollRef = {
  scrollRef: (node?: Element | null) => void
  clickRef: RefObject<HTMLDivElement>
}

export type ScrollRefs = {
  bun: ScrollRef
  sauce: ScrollRef
  main: ScrollRef
}
