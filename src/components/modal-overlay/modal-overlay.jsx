import styles from './modal-overlay.module.css'
import PropTypes from 'prop-types'

function ModalOverlay({ children, onClose }) {
  const handleClickOnOverlay = (e) => {
    if (e.currentTarget === e.target) {
      onClose()
    }
  }

  return (
    <div className={styles.modalOverlay} onClick={handleClickOnOverlay}>
      {children}
    </div>
  )
}

ModalOverlay.propTypes = {
  children: PropTypes.element.isRequired,
  onClose: PropTypes.func.isRequired,
}

export default ModalOverlay
