import React from 'react';

const contrastAlertDanger = props => (
  <div className="panel-body">
    <div className="alert alert-contrast alert-danger alert-dismissible ">
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

export default contrastAlertDanger;
