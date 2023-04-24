import styles from './style.module.css'
import ModalOverlay from '../modal-overlay'

import { useEffect } from 'react'
import { createPortal } from 'react-dom'
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import { ModalProps } from './types'

function Modal({ children, onClose }: ModalProps): JSX.Element {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [onClose])

  return createPortal(
    <ModalOverlay onClose={onClose}>
      <div className={styles.modal}>
        <div className={styles.modal__closeContainer}>
          <CloseIcon type="primary" onClick={onClose} />
        </div>
        {children}
      </div>
    </ModalOverlay>,
    document.getElementById('modal') as Element
  )
}

export default Modal
