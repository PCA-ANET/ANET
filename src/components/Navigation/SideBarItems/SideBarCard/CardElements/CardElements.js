import React from 'react';

const cardElements = props => (
  <ul className="submenu">
    <li>
      <div className="submenu-title">
        <span>{props.subtitle}</span>
      </div>
      <div>
        <ul className="submenu-accordion">{props.children}</ul>
      </div>
    </li>
  </ul>
);

export default cardElements;
