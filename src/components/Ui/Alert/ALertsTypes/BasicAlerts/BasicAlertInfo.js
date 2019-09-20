import React from 'react';

const basicAlertInfo = props => (
  <div className="panel-body">
    <div className="alert alert-primary alert-dismissible alert-simple ">
      <button className="close">
        <span className="mdi mdi-close" />
      </button>
      <span className="icon mdi mdi-info-outline" />
      <strong>Info!</strong>
      {props.text}
    </div>
  </div>
);

export default basicAlertInfo;
