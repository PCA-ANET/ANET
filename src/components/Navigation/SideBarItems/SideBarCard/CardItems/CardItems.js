import React from 'react';

const CardItems = props => (
  <li>
    <a className={props.class} href={props.link} onClick={props.onClick}>
      {props.subtitle}
    </a>
    <div className="submenu-accordion_content">
      <ul>{props.children}</ul>
    </div>
  </li>
);
export default CardItems;
