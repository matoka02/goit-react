import React from 'react';
import { useEffect } from 'react';

const Modal = ({ CloseModal, children }) => {
  // хук useEffect
  useEffect(() => {
    // чтобы не создавать при каждом рендере, а только по запросу
    const handlePressEscape = evt => {
      if (evt.code === 'Escape') {
        CloseModal();
      }
    };
    window.addEventListener('keydown', handlePressEscape);
    return () => {
      window.removeEventListener('keydown', handlePressEscape)
    };
  }, [CloseModal]);

  return (
    <div
      className="modal fade show"
      style={{ display: 'block', backdropFilter: 'blur(5px)' }}
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title"> Modal</h5>
            <button
              type="button"
              className="btn-close"
              aria-label="Close"
              onClick={CloseModal}
            ></button>
          </div>
          <div className="modal-body">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
