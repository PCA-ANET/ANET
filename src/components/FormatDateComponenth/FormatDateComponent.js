import React from 'react';

const FormatDateComponent = props => {
  let formatDate = dateval => {
    if (dateval !== null)
      return `${dateval.substring(
        dateval.length - 20,
        dateval.length - 18,
      )}/${dateval.substring(
        dateval.length - 23,
        dateval.length - 21,
      )}/${dateval.substring(0, 4)}`;
    return null;
  };
  if (props.sign === 'C') {
    return <div className="positif_transaction">{formatDate(props.date)}</div>;
  } else {
    if (props.value) {
     return <div>{formatDate(props.date)}</div>;
    } else {
      return <div className="negative_transaction">{formatDate(props.date)}</div>;
    }
  }
};

  export default FormatDateComponent;
