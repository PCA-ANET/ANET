import React from 'react';
import SideBarItems from '../SideBarItems/SideBarItems';

const sideMenu = () => (
  <div className="bcp-left-sidebar">
    <div className="left-sidebar-wrapper">
      <div className="left-sidebar-spacer">
        <div className="left-sidebar-scroll">
          <div className="left-sidebar-content">
            <div className="nav-principal">
              <div className="nav__global">
                <div className="nav__inner">
                  <nav>
                    <SideBarItems />
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default sideMenu;
