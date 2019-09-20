import React from 'react';

const defaultAlertSuccess = props => (
  <div className="panel-body">
    <div className="alert alert-danger alert-dismissible">
      <button className="close">
        <span className="mdi mdi-close" />
      </button>
      <span className="icon mdi mdi-close" />
      <strong>Danger!</strong>
      {props.text}
    </div>
  </div>
);

export default defaultAlertSuccess;
