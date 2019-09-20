import React from 'react';

const Error = ({ touched, message }) => {
  if (!touched && !message) {
    return null;
  }
  if (message) {
    return <div className="error-form">(*) {message}</div>;
  }
  return <div className="valid-form">✓</div>;
};

export default Error;
