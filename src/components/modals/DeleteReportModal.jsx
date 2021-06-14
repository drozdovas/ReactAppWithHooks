import React from 'react';
import ReactDOM from 'react-dom';
import './DeleteReportModal.css';

const DeleteReportModal = ({ isShowing, hide }) => {
  const [deleteField, setDeleteField] = React.useState('');
  const [isDisabled, setIsDisabled] = React.useState(true);
  const ableToDelete = (event) => {
    setDeleteField(event.target.value);
    setIsDisabled(event.target.value !== 'Delete');
  };

  return (isShowing ? ReactDOM.createPortal(
    <>
      <div className="delete-report-modal-wrapper" aria-modal aria-hidden tabIndex={-1} role="dialog">
        <div className="modal">
          <div className="modal-header">
            <img
              alt="exclamation_red_triangle"
              src="icons/exclamation_red_triangle.png"
              id="img-exclamation_red_triangle"
            />
            <b>Are you sure you want to delete this report and all of its history?</b>
          </div>
          <p>
            If you delete the
            <b> Executive metrics </b>
            report, you will also delete the associated history:
          </p>
          <textarea readOnly rows="5" value="January 2020&#13;&#10;February 2020&#13;&#10;March 2020&#13;&#10;April 2020&#13;&#10;May 2020&#13;&#10;June 2020" />
          <p>
            Please type the word &apos;Delete&apos; to remove the
            <b> Executive metrics </b>
            report and its associated history:
          </p>
          <input type="text" value={deleteField} onChange={ableToDelete} />
          <div className="modal-buttons">
            <button type="submit" className="modal-yes-button" disabled={isDisabled} data-dismiss="modal" aria-label="Delete-all" onClick={hide}>
              <span aria-hidden="true">Delete All</span>
            </button>
            <button type="button" className="modal-no-button" data-dismiss="modal" aria-label="Cancel" onClick={hide}>
              <span aria-hidden="true">Cancel</span>
            </button>
          </div>
        </div>
      </div>
    </>, document.body
  ) : null);
};

export default DeleteReportModal;
