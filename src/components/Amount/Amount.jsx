import Numeral from 'numeral';
import React from 'react';

const Amount = props => {
  const currency = props.currency ? props.currency : '';
  let sign = '';
  if (props.positive) {
    sign = '+ ';
  } else if (props.negative) {
    sign = '- ';
  }
  return (
    <>
      {sign}
      {Numeral(props.amount)
        .format('0,0')
        .replace(',', ' ')
        .concat(` ${currency}`)}
    </>
  );
};

export default Amount;
