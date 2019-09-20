import React from 'react';
import HeaderRight from './HeaderRight/HeaderRight';
import HeaderBrand from './HeaderBrand/HeaderBrand';

const header = () => (
  <header>
    <nav className="navbar navbar-default navbar-fixed-top bcp-top-header">
      <div className="container-fluid">
        <HeaderBrand />
        <HeaderRight />
      </div>
    </nav>
  </header>
);

export default header;
