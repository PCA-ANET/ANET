import React from 'react';
import Header from '../Navigation/Header/Header';
import SideMenu from '../Navigation/SideMenu/SideMenu';

const layout = props => (
  <>
    <div className="page-header">
      <Header />
      <SideMenu />
    </div>
    <main className="bcp-content">{props.children}</main>
    <div className="page-footer" />
  </>
);

export default layout;
