/* eslint-disable */
/*@Ayoub : fix the issues related to jsx-a11y/label-has-associated-control */
import React from 'react';
import PanelContainer from './RecapPanelContainer/RecapPanelContainer';
import RecapForm from './RecapForm/RecapForm';
import { t } from '../../i18n';

function Recap(props) {
  return (
    <PanelContainer
      title={t('Components:ConfirmerletransfertcashversGAB')}
      subtitle={t('Components:Vous avez demandé un Virement')}
    >
      <div className="panel-body">
        <ul>
          <li>
            {t('Components:Nombénéficiaire')}
            <span>{props.name}</span>
          </li>
          <li>
            {t('Components:NMobilebénéficiaire')}
            <span>{props.number}</span>
          </li>
          <li>
            {t('Components:Montantdutransfert')}
            <span>
              {props.amount}
              <strong className="currency"> XOF</strong>
            </span>
          </li>
          <li>
            {t('Components:Coderetrait')}
            <span>{props.code}</span>
          </li>
        </ul>
        <RecapForm
          ownNumber={props.ownNumber}
          onclickbutton={props.onclickbutton}
          onCodeChange={props.onCodeChange}
          codeValue={props.codeValue}
          onPinChange={props.onPinChange}
          pinValue={props.pinValue}
          pin={props.pin}
        />
      </div>
    </PanelContainer>
  );
}

export default Recap;
