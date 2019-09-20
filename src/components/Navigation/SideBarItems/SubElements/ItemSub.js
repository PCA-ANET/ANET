import React from 'react';
import { Link } from 'react-router-dom';

const itemSub = props => (
  <li>
    <Link
      to={{ pathname: props.link, state: { activeTab: props.activeTab } }}
      onClick={props.onClick}
    >
      {props.text}
    </Link>
  </li>
);

export default itemSub;
