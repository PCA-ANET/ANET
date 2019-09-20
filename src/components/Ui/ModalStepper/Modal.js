import React from 'react';
import BackDrop from '../BackDrop/BackDrop';
import { t } from '../../../i18n';

const modal = props => {
  let modalClass = `modal_content modal-container modal-effect-10 ${
    props.show ? 'modal-show' : ''
  }`;
  return (
    <>
      <BackDrop show={props.show} clicked={props.modalClosed} />

      <div
        className={modalClass}
        style={{
          perspective: props.show ? 'none' : '1300px',
          height: '424px',
        }}
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <button
                className="modal-close close"
                data-dismiss="modal"
                onClick={props.modalClosed}
              >
                ×
              </button>
            </div>

            <div className="modal-body">
              <div className="text-center">
                <div className="text-success">
                  <span className="modal-main-icon mdi mdi-check"></span>
                </div>
                <h3>{props.text}</h3>
                {props.children}
                <div className="xs-mt-50">
                  <button
                    className="modal-close btn-success btn-space btn"
                    data-text="valider"
                    onClick={props.submitForm}
                  >
                    <span>{t('Components:validate')}</span>
                  </button>
                </div>
              </div>

              <div className="modal-footer"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default modal;
