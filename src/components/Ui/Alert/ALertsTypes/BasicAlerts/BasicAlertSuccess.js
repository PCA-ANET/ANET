import React from 'react';

const basicAlertSuccess = props => (
  <div className="panel-body">
    <div className="alert alert-success alert-simple alert-dismissible ">
      <button className="close">
        <span className="mdi mdi-close" />
      </button>
      <span className="icon mdi mdi-check" />
      <strong>Good!</strong>
      {props.text}
    </div>
  </div>
);

export default basicAlertSuccess;
