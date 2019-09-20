import React from 'react';

const basicAlertWarning = props => (
  <div className="panel-body">
    <div className="alert alert-warning alert-dismissible alert-simple">
      <button className="close">
        <span className="mdi mdi-close" />
      </button>
      <span className="icon mdi mdi-warning" />
      <strong>Warning!</strong>
      {props.text}
    </div>
  </div>
);

export default basicAlertWarning;
