import React, { useEffect, useRef } from 'react';


const PdfModal = ({ show, handleClose, pdfUrl, title }) => {


  return (
    <div>
      {show && (
        <div className="modal fade show" style={{ display: 'block' }} tabIndex="-1" role="dialog">
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">{title}</h5>
                <button type="button" className="btn-close" onClick={handleClose} aria-label="Close"></button>
              </div>
              <div className="modal-body" style={{ height: '100%', overflow: 'hidden' }}>
                <iframe
                  src={pdfUrl}
                  width="100%"
                  height="50%"
                  style={{ aspectRatio: '1.5 / 1', objectFit: 'contain'}}
                  title="PDF Preview"
                ></iframe>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-sm btn-secondary" onClick={handleClose}>
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {show && <div className="modal-backdrop fade show"></div>}
    </div>
  );
};


export default PdfModal