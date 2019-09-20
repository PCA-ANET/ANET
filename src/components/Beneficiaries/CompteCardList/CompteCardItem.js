import React from 'react';
import { t } from '../../../i18n';
import { StyledListItem } from '../BenefCardList/SearchList/SearchList.style';

const BeneficiaireCardItem = props => {
  console.log(props);
  return (
    <StyledListItem
      key={props.index}
      onClick={props.onclick}
      className={`row compte mx-auto`}
      active={props.active}
    >
      <div className="col text-left">
        <strong className="ttr-account">{props.accountName}</strong>
        <br />
        <span className="libelle-account">
          <i className="icon icon-man"></i> N° {props.accountNum}
        </span>
      </div>
      <div className="col text-right">
        <span className="account-montant">{props.acocuntSolde} XOF</span>
        <br />
        <span className="libelle-account">
          {t('Components:Avenir')}
          <span className="avenir">{props.accountPrev} XOF</span>
        </span>
      </div>
    </StyledListItem>
  );
};

export default BeneficiaireCardItem;
