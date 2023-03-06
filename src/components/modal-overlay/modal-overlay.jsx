import modalOverlayStyle from './modal-overlay.module.css'

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

export default ModalOverlay
