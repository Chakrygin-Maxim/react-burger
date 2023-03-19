import modalStyle from './modal.module.css'
import ModalOverlay from '../modal-overlay/modal-overlay'
import PropTypes from 'prop-types'
import { useEffect } from 'react'
import { createPortal } from 'react-dom'
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components'

const modal = document.getElementById('modal')

function Modal({ children, onClose, isOpen }) {
  useEffect(() => {
    if (!isOpen) return

    const handleKeyDown = (e) => {
      if (isOpen && e.key === 'Escape') {
        onClose()
      }
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [onClose, isOpen])

  return createPortal(
    <ModalOverlay onClose={onClose} isOpen={isOpen}>
      <div className={modalStyle.modal}>
        <div className={modalStyle.modal__closeContainer}>
          <CloseIcon type="primary" onClick={onClose} />
        </div>
        {children}
      </div>
    </ModalOverlay>,
    modal
  )
}

Modal.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.array]),
  onClose: PropTypes.func.isRequired,
  isOpen: PropTypes.bool,
}

export default Modal
