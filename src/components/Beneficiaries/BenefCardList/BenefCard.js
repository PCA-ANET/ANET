import React from 'react';
import AlertBasicInfo from '../../Ui/Alert/Alert';
import SearchList from './SearchList/SearchList';

const BenefCard = props => {
  const SelectedBenefHandler = childData => {
    props.benef(childData);
  };
  return (
    <div className="col-sm-12 col-md-12 col-lg-6 text-center">
      <div className="panel-tabs hdiviser">
        <h3 className="title-diviser">{props.text[0]}</h3>
        <div className="divider">
          <strong className="divider-title ng-binding">{props.text[1]}</strong>
        </div>
        <button className="btn btn-space btn-default" onClick={props.onclick}>
          <span>{props.text[2]}</span>
        </button>
      </div>
      {props.showAlert ? (
        <AlertBasicInfo
          type="Basic Info"
          text="Vous n’avez pas de bénéficiaire. Pour en ajouter un, cliquez sur « Ajouter un bénéficiaire »."
        />
      ) : null}
      <SearchList benef={SelectedBenefHandler} row={props.row} selected={props.selected} />
    </div>
  );
};
export default BenefCard;
