import React from 'react';

const defaultAlertWarning = props => (
  <div className="panel-body">
    <div className="alert alert-warning alert-dismissible ">
      <button className="close">
        <span className="mdi mdi-close" />
      </button>
      <span className="icon mdi mdi-warning" />
      <strong>Warning!</strong>
      {props.text}
    </div>
  </div>
);

export default defaultAlertWarning;
