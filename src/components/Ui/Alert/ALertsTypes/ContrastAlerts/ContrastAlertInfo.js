import React from 'react';

const contrastAlertInfo = props => (
  <div className="panel-body">
    <div className="alert alert-contrast alert-primary alert-dismissible ">
      <div className="icon">
        <span className="mdi mdi-info-outline" />
      </div>
      <div className="message">
        <button className="close">
          <span className="mdi mdi-close" />
        </button>
        <strong>Info!</strong>
        {props.text}
      </div>
    </div>
  </div>
);

export default contrastAlertInfo;
