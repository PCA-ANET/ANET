import React from 'react';
import Logo from '../Logo/Logo';

const loginWrapper = props => (
  <div className="bcp-wrapper bcp-login">
    <div className="bcp-content">
      <div className="main-content container-fluid">
        <div className="splash-container">
          <div className="panel panel-default panel-border-color-primary">
            <div className="panel-heading">
              <Logo />
              <h1 className="splash-description">{props.text}</h1>
            </div>
            <div className="panel-body">{props.children}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default loginWrapper;
