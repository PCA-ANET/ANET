import React from 'react';

const defaultAlertInfo = props => (
  <div className="panel-body">
    <div className="alert alert-primary alert-dismissible" />
    <button className="close">
      <span className="mdi mdi-close" />
    </button>
    <span className="icon mdi mdi-info-outline" />
    <strong>Info!</strong>
    {props.text}
  </div>
);

export default defaultAlertInfo;
