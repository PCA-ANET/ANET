import React from 'react';

const borderAlertWarning = props => (
  <div className="panel-body">
    <div className="alert alert-icon alert-warning alert-dismissible alert-icon-border ">
      <div className="icon">
        <span className="mdi mdi-warning" />
      </div>
      <div className="message">
        <button className="close">
          <span className="mdi mdi-close" />
        </button>
        <strong>Warning!</strong>
        {props.text}
      </div>
    </div>
  </div>
);

export default borderAlertWarning;
