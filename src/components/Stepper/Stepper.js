/* eslint-disable */
/*@Ayoub : fix the issues related to eslint */
import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepConnector from '@material-ui/core/StepConnector';
import Modal from '../Ui/ModalStepper/Modal';
import ModalError from '../Ui/ModalStepper/ModalError';
import { t } from '../../i18n';
import Loader from '../Ui/Loader/Loader';

//line style
const CustomConnector = withStyles({
  alternativeLabel: {
    top: 22,
  },
  active: {
    '& $line': {
      backgroundImage: 'linear-gradient( 95deg,#622800 0%,#622800 100%)',
    },
  },
  completed: {
    '& $line': {
      backgroundImage: 'linear-gradient( 95deg,#622800 0%,#622800 100%)',
    },
  },
  line: {
    height: 3,
    border: 1,
    backgroundColor: '#ccc',
    borderRadius: 1,
  },
})(StepConnector);

//circle style
const useCustomStepIconComponentStyles = makeStyles({
  root: {
    backgroundColor: '#ccc',
    zIndex: 1,
    color: '#fff',
    width: 50,
    height: 50,
    display: 'flex',
    borderRadius: '50%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  active: {
    backgroundImage: 'linear-gradient( 95deg,#622800 0%,#622800 100%)',
    boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
  },
  completed: {
    backgroundImage: 'linear-gradient( 95deg,#622800 0%,#622800 100%)',
  },
});

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
}));

export default function AbiStepper(props) {
  let stepsTitles = props.elements.map(data => data.stepTitle);

  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);

  const CustomStepIconComponent = props => {
    const classes = useCustomStepIconComponentStyles();
    const { active, completed } = props;
    return (
      <div
        className={clsx(classes.root, {
          [classes.active]: active,
          [classes.completed]: completed,
        })}
      >
        {_getStepIcon(props.icon)}
      </div>
    );
  };

  function _getCurrentStep(stepNumber) {
    return props.elements.filter(
      step => String(step.stepNumber) === String(stepNumber),
    )[0];
  }

  function _getStepIcon(iconNumber) {
    let currentStep = _getCurrentStep(iconNumber - 1);
    return currentStep.stepIcon;
  }

  function _getStepRender(stepNumber) {
    let currentStep = _getCurrentStep(stepNumber);
    return currentStep.stepRender;
  }

  function handleNext() {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  }

  function handleBack() {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  }

  function handleReset() {
    setActiveStep(0);
  }

  return (
    <div className={classes.root}>
      <Stepper
        alternativeLabel
        activeStep={activeStep}
        connector={<CustomConnector />}
      >
        {stepsTitles.map(label => (
          <Step key={label}>
            <StepLabel StepIconComponent={CustomStepIconComponent}>
              {label}
            </StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        {activeStep === stepsTitles.length - 1 ? (
          <div>
            {props.ModalBackComp}
            {props.isLoading?(
              <Loader show={true} />
            ):(props.success ? (
            <Modal
              text={t('Components:CONFIRMATION')}
              show={true}
              submitForm={e => {
                handleReset(e);
                props.resetStats();
              }}
              modalClosed={handleReset}
            >
              <p>{_getStepRender(activeStep)}</p>
            </Modal>):(
            <ModalError
              text={t('Components:Error')}
              show={true}
              submitForm={e => {
                handleReset(e);
                props.resetStats();
              }}
              modalClosed={handleReset}
            >
              <p>Erreur survenue !!!</p>
            </ModalError>))
              
            }
          </div>
        ) : (
            <div>
              <div>{_getStepRender(activeStep)}</div>
              <div className="panel-footer">
                <div className="form-cta sm-pt-15 sm-pb-15 sm-mt-30">
                  <div className="text-right sm-pr-30">
                    {activeStep === stepsTitles.length - 2 ? (
                      <button
                        className="btn btn-space btn-rounded btn-secondary"
                        disabled={activeStep === 0}
                        onClick={handleReset}
                      >
                        {t('Components:Annuler')}{' '}
                      </button>
                    ) : (
                        <button
                          className="btn btn-space btn-rounded btn-secondary"
                          disabled={activeStep === 0}
                          onClick={handleBack}
                        >
                          {' '}
                          {t('Components:Retour')}{' '}
                        </button>
                      )}
                    {activeStep === 0 ? (
                      <button
                        className="btn btn-space btn-rounded btn-secondary"
                        disabled={props.dis1}
                        onClick={handleNext}
                      >
                        {t('Components:Suivant')}
                      </button>
                    ) : activeStep === stepsTitles.length - 2 ? (
                      <button
                        className="btn btn-space btn-rounded btn-secondary"
                        disabled={props.dis3}
                        onClick={e => {
                          handleNext(e);
                          props.ValidateAction();
                        }}
                      >
                        {t('Components:Valider')}
                      </button>
                    ) : (
                          <button
                            className="btn btn-space btn-rounded btn-secondary"
                            disabled={props.dis2}
                            onClick={e => {
                              handleNext(e);
                              props.action2();
                            }}
                          >
                            Suivant
                    </button>
                        )}
                  </div>
                </div>
              </div>
            </div>
          )}
      </div>
    </div>
  );
}
