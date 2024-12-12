import React from 'react';

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div style={modalStyles}>
      <div style={modalContentStyles}>
        <button onClick={onClose} style={closeButtonStyles}>Close</button>
        <div>{children}</div>
      </div>
    </div>
  );
};

const modalStyles = {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const modalContentStyles = {
  backgroundColor: 'white',
  padding: '20px',
  borderRadius: '5px',
  maxWidth: '600px',
  width: '100%',
};

const closeButtonStyles = {
  background: 'red',
  color: 'white',
  border: 'none',
  padding: '10px',
  cursor: 'pointer',
  position: 'absolute',
  top: '10px',
  right: '10px',
};



export default Modal;
