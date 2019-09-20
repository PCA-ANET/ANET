import React from 'react';

const borderAlertDanger = props => (
  <div className="panel-body">
    <div className="alert alert-icon alert-danger alert-dismissible alert-icon-border">
      <div className="icon">
        <span className="mdi mdi-close" />
      </div>
      <div className="message">
        <button className="close">
          <span className="mdi mdi-close" />
        </button>
        <strong>Danger!</strong>
        {props.text}
      </div>
    </div>
  </div>
);

export default borderAlertDanger;
