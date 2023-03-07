import modalOverlayStyle from './modal-overlay.module.css'
import PropTypes from 'prop-types'

function ModalOverlay({ children, onClose, isOpen }) {
  const handleClickOnOverlay = (e) => {
    if (e.currentTarget === e.target) {
      onClose()
    }
  }

  return (
    <div
      className={`${modalOverlayStyle.modalOverlay} ${
        isOpen ? modalOverlayStyle.modalOverlay__status_open : ''
      }`}
      onClick={handleClickOnOverlay}
    >
      {children}
    </div>
  )
}

ModalOverlay.propTypes = {
  children: PropTypes.element.isRequired,
  onClose: PropTypes.func.isRequired,
  isOpen: PropTypes.bool,
}

export default ModalOverlay
