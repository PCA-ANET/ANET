import React from 'react';
import BackDrop from '../BackDrop/BackDrop';
import { t } from '../../../i18n';

const modal = props => {
  let modalClass = `modal_content modal-container colored-header colored-header-primary modal-effect-10 ${
    props.show ? 'modal-show' : ''
  }`;
  return (
    <>
      <BackDrop show={props.show} clicked={props.modalClosed} />
      <div
        className="modal_container popin-choice"
        style={{ fontSize: '20px' }}
      >
        <div className="modal-dialog">
          <div
            className={modalClass}
            style={{
              perspective: props.show ? 'none' : '1300px',
              height: '424px',
            }}
          >
            <div className="modal-content">
              <div className="modal-header">
                <button
                  className="modal-close close"
                  data-dismiss="modal"
                  onClick={props.modalClosed}
                >
                  ×
                </button>
                <h4>{props.text}</h4>
              </div>
              <div className="modal-body">{props.children}</div>
              <div className="modal-footer">
                <p className="align_center" />
                <button
                  className="modal-close btn-primary btn"
                  data-text="valider"
                  onClick={props.submitForm}
                >
                  <span>{t('Components:validate')}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default modal;
