import React from 'react';
import { t } from '../../../i18n';

function RecapForm(props) {
  return (
    <div className="otp-form">
      <div className="opt-form_prez">
        <h5 className="d-inline sm-pr-10">
          {t('Components:NousvenonsdevousenvoyerunSMSau')}
          <span>{props.ownNumber}</span>{' '}
          {t('Components:contenantuncodeSaissisezlepourvalidervotretransfert')}
        </h5>
        <button
          className="btn btn-space btn-default btn-sm sm-mt-5"
          onClick={props.onclickbutton}
        >
          <span>{t('Components:Recevoirànouveaulecode')}</span>
          <i className="c-fmlnet__add"></i>
        </button>
      </div>
      <div className="align-items-center row">
        <label className="col-sm-3 control-label text-right">
          {t('Components:Saisissezlecode')}
        </label>
        <div className="col-sm-9">
          <input
            className="form-control"
            type="text"
            onChange={props.onCodeChange}
            value={props.codeValue}
          />
        </div>
      </div>
      {props.pin ? (
        <div className="align-items-center row">
          <label className="col-sm-3 control-label text-right">
            {t('Components:SaisissezlePin')}
          </label>
          <div className="col-sm-9">
            <input
              className="form-control"
              type="text"
              onChange={props.onPinChange}
              value={props.pinValue}
            />
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default RecapForm;
