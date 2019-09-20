import React from 'react';
import { Link } from 'react-router-dom';

const cardTitle = props => (
  <Link to={props.link}>
    <i className="icon">{props.children}</i>
    <span>{props.title}</span>
  </Link>
);
export default cardTitle;
