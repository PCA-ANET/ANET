import React from 'react';

const iconAlertSuccess = props => (
  <div className="panel-body">
    <div className="alert alert-icon alert-success alert-dismissible ">
      <div className="icon">
        <span className="mdi mdi-check"></span>
      </div>
      <div className="message">
        <button className="close">
          <span className="mdi mdi-close"></span>
        </button>
        <strong>Good!</strong>
        {props.text}
      </div>
    </div>
  </div>
);

export default iconAlertSuccess;
