import React from 'react';
import Logo from '../../../Logo/Logo';
import { Link } from 'react-router-dom';

const headerBrand = () => (
  <div className="navbar-header">
    <Link className="navbar-brand" to="/">
      <Logo />
    </Link>
    <div className="c-header-icon js-hamburger">
      <div className="hamburger-toggle">
        <span className="bar-top" />
        <span className="bar-mid" />
        <span className="bar-bot" />
      </div>
    </div>
  </div>
);

export default headerBrand;
