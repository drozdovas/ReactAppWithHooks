import React from 'react';
import ReactDOM from 'react-dom';
import './LoadingModal.css';

const LoadingModal = ({ isShowing }) => (isShowing ? ReactDOM.createPortal(
  <>
    <div className="loading-modal-wrapper" aria-modal aria-hidden tabIndex={-1} role="dialog">
      <div className="modal">
        <div className="loader" />
        Data is loading
      </div>
    </div>
  </>, document.body
) : null);

export default LoadingModal;
