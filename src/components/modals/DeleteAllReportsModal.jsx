import React from 'react';
import ReactDOM from 'react-dom';
import './DeleteAllReportsModal.css';

const DeleteAllReportsModal = ({ isShowing, hide }) => (isShowing ? ReactDOM.createPortal(
  <>
    <div className="delete-all-reports-modal-wrapper" aria-modal aria-hidden tabIndex={-1} role="dialog">
      <div className="modal">
        <div className="modal-header">
          <img
            alt="exclamation_red_triangle"
            src="icons/exclamation_red_triangle.png"
            id="img-exclamation_red_triangle"
          />
          <b>Are you sure you want to delete all of your files?</b>
        </div>
        <p>
          This action cannot be undone.
        </p>
        <div className="modal-buttons">
          <button type="submit" className="modal-yes-button" data-dismiss="modal" aria-label="Yes" onClick={hide}>
            <span aria-hidden="true">Yes</span>
          </button>
          <button type="button" className="modal-no-button" data-dismiss="modal" aria-label="No" onClick={hide}>
            <span aria-hidden="true">No</span>
          </button>
        </div>
      </div>
    </div>
  </>, document.body
) : null);

export default DeleteAllReportsModal;
