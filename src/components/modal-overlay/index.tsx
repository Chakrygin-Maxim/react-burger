import styles from './style.module.css'
import { ModalOverlayProps } from './types'

function ModalOverlay({ children, onClose }: ModalOverlayProps): JSX.Element {
  const handleClickOnOverlay = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
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

export default ModalOverlay
