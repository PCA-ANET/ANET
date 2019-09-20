import React from 'react';
import DefaultAlertSuccess from './ALertsTypes/DefaultAlerts/DefaultAlertSuccess';
import DefaultAlertInfo from './ALertsTypes/DefaultAlerts/DefaultAlertInfo';
import DefaultAlertWarning from './ALertsTypes/DefaultAlerts/DefaultAlertWarning';
import DefaultAlertDanger from './ALertsTypes/DefaultAlerts/DefaultAlertDanger';
import ContrastAlertSuccess from './ALertsTypes/ContrastAlerts/ContrastAlertSuccess';
import ContrastAlertInfo from './ALertsTypes/ContrastAlerts/ContrastAlertInfo';
import ContrastAlertWarning from './ALertsTypes/ContrastAlerts/ContrastAlertWarning';
import ContrastAlertDanger from './ALertsTypes/ContrastAlerts/ContrastAlertDanger';
import IconAlertSuccess from './ALertsTypes/IconAlerts/IconAlertSuccess';
import IconAlertInfo from './ALertsTypes/IconAlerts/IconAlertInfo';
import IconAlertWarning from './ALertsTypes/IconAlerts/IconAlertWarning';
import IconAlertDanger from './ALertsTypes/IconAlerts/IconAlertDanger';
import BorderAlertSuccess from './ALertsTypes/BorderALerts/BorderAlertSuccess';
import BorderAlertInfo from './ALertsTypes/BorderALerts/BorderAlertInfo';
import BorderAlertWarning from './ALertsTypes/BorderALerts/BorderAlertWarning';
import BorderAlertDanger from './ALertsTypes/BorderALerts/BorderAlertDanger';
import ColoredAlertSuccess from './ALertsTypes/ColoredAlerts/ColoredAlertSuccess';
import ColoredAlertInfo from './ALertsTypes/ColoredAlerts/ColoredAlertInfo';
import ColoredAlertWarning from './ALertsTypes/ColoredAlerts/ColoredAlertWarning';
import ColoredAlertDanger from './ALertsTypes/ColoredAlerts/ColoredAlertDanger';
import BasicAlertSuccess from './ALertsTypes/BasicAlerts/BasicAlertSuccess';
import BasicAlertInfo from './ALertsTypes/BasicAlerts/BasicAlertInfo';
import BasicAlertWarning from './ALertsTypes/BasicAlerts/BasicAlertWarning';
import BasicAlertDanger from './ALertsTypes/BasicAlerts/BasicAlertDanger';

const alert = props => {
  switch (props.type) {
    case 'Default Success':
      return <DefaultAlertSuccess text={props.text} />;
    case 'Default Info':
      return <DefaultAlertInfo text={props.text} />;
    case 'Default Warning':
      return <DefaultAlertWarning text={props.text} />;
    case 'Default Danger':
      return <DefaultAlertDanger text={props.text} />;
    case 'Contrast Success':
      return <ContrastAlertSuccess text={props.text} />;
    case 'Contrast Info':
      return <ContrastAlertInfo text={props.text} />;
    case 'Contrast Warning':
      return <ContrastAlertWarning text={props.text} />;
    case 'Contrast Danger':
      return <ContrastAlertDanger text={props.text} />;
    case 'Icon Success':
      return <IconAlertSuccess text={props.text} />;
    case 'Icon Info':
      return <IconAlertInfo text={props.text} />;
    case 'Icon Warning':
      return <IconAlertWarning text={props.text} />;
    case 'Icon Danger':
      return <IconAlertDanger text={props.text} />;
    case 'Border Success':
      return <BorderAlertSuccess text={props.text} />;
    case 'Border Info':
      return <BorderAlertInfo text={props.text} />;
    case 'Border Warning':
      return <BorderAlertWarning text={props.text} />;
    case 'Border Danger':
      return <BorderAlertDanger text={props.text} />;
    case 'Colored Success':
      return <ColoredAlertSuccess text={props.text} />;
    case 'Colored Info':
      return <ColoredAlertInfo text={props.text} />;
    case 'Colored Warning':
      return <ColoredAlertWarning text={props.text} />;
    case 'Colored Danger':
      return <ColoredAlertDanger text={props.text} />;
    case 'Basic Success':
      return <BasicAlertSuccess text={props.text} />;
    case 'Basic Info':
      return <BasicAlertInfo text={props.text} />;
    case 'Basic Warning':
      return <BasicAlertWarning text={props.text} />;
    case 'Basic Danger':
      return <BasicAlertDanger text={props.text} />;
    default:
      return null;
  }
};

export default alert;
