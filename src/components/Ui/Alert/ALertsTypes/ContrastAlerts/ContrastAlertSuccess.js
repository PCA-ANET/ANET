import React from 'react';

const contrastAlertSuccess = props => (
  <div className="panel-body">
    <div className="alert alert-contrast alert-success alert-dismissible ">
      <div className="icon">
        <span className="mdi mdi-check" />
      </div>
      <div className="message">
        <button className="close">
          <span className="mdi mdi-close" />
        </button>
        <strong>Good!</strong>
        {props.text}
      </div>
    </div>
  </div>
);

export default contrastAlertSuccess;
