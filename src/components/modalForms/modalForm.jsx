import PropTypes from 'prop-types';
import Modal from 'react-modal';
Modal.setAppElement('#root');

// Componente de ventana modal genérico
export function ModalForm({ isOpen, closeModal, children, contentClassName, modalOverlayClass}){
  const handleCancel = () => {
    closeModal();
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={handleCancel} className={contentClassName} overlayClassName={modalOverlayClass}>
      {children}
      <div>
        <button onClick={closeModal}>Cancelar</button>
      </div>
    </Modal>
  );
}

ModalForm.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    closeModal: PropTypes.func.isRequired,
    children: PropTypes.element.isRequired,
    contentClassName: PropTypes.string,
    modalOverlayClass: PropTypes.string,
  }