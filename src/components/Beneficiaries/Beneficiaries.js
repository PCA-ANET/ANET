import React from 'react';
import CompteBenef from './CompteCardList/CompteCard';
import BenefList from './BenefCardList/BenefCard';
import { t } from '../../i18n';

const Beneficiaries = ({
  onAccountChange,
  onBeneficiaryChange,
  accountsList,
  beneficiariesList,
  showAlertEnabled,
  selectedBeneficiary,
  selectedAccount,
}) => {
  const selectedAccountHandler = childData => {
    onAccountChange(childData);
  };
  const selectedBenefHandler = childData => {
    onBeneficiaryChange(childData);
  };
  return (
    <div className="panel-body">
      <div className="wizard-progress_content">
        <div className="wizard-progress_step step-content active">
          <div className="row mx-auto">
            <CompteBenef
              BenefCardTitle={t('Components:Choisirmoncompteàdébiter')}
              listCompte={accountsList}
              account={selectedAccountHandler}
              selected={selectedAccount}
            />
            <BenefList
              onclick={() => {
                console.log('clicked'); //eslint-disable-line
              }}
              showAlert={showAlertEnabled}
              text={[
                t('Components:Sélectionner un Bénéficiaire'),
                t('Components:OU'),
                t('Components:Ajouterunbénéficiaire'),
              ]}
              benef={selectedBenefHandler}
              row={beneficiariesList}
              selected={selectedBeneficiary}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Beneficiaries;
