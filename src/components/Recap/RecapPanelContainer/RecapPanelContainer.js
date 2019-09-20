import React from 'react';

function RecapPanelContainer(props) {
  return (
    <div className="panel-body">
      <div className="wizard-progress_content">
        <div className="wizard-progress_step step-content active">
          <div className="row mx-auto">
            <div className="col-sm-12">
              <div className="panel panel-contrast otp-conf bcp-loading">
                <div className="panel-heading panel-heading-contrast">
                  <span className="panel-subtitle">{props.subtitle}</span>
                </div>

                {props.children}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecapPanelContainer;
