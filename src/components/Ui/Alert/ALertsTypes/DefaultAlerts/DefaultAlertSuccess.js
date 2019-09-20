import React from 'react';

const defaultAlertSuccess = props => (
  <div className="panel-body">
    <div className="alert alert-success alert-dismissible">
      <button className="close">
        <span className="mdi mdi-close" />
      </button>
      <span className="icon mdi mdi-check" />
      <strong>Good!</strong>
      {props.text}
    </div>
  </div>
);

export default defaultAlertSuccess;
