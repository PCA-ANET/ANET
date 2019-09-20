import React from 'react';
import HeaderItem from './HeaderItem/HeaderItem';
import ContactsIcon from '../../../assets/SvgComponents/ContactsIcon/ContactsIcon';
import MessageIcon from '../../../assets/SvgComponents/MessageIcon/MessageIcon';
import NotificationIcon from '../../../assets/SvgComponents/NotificationIcon/NotificationIcon';
import ProfileIcon from '../../../assets/SvgComponents/ProfileIcon/ProfileIcon';
import LogoutIcon from '../../../assets/SvgComponents/LogoutIcon/LogoutIcon';

const headerItems = () => (
  <ul className="nav navbar-nav navbar-right bcp-icons-nav">
    <HeaderItem link="#" type="Contacts">
      <ContactsIcon />
    </HeaderItem>
    <HeaderItem link="#" type="Messagerie">
      <MessageIcon />
    </HeaderItem>
    <HeaderItem link="#" type="Notifications">
      <NotificationIcon />
      <span className="label label-notify danger">6</span>
    </HeaderItem>
    <HeaderItem link="#" type="Profile">
      <ProfileIcon />
    </HeaderItem>
    <HeaderItem link="#" type="Logout">
      <LogoutIcon />
    </HeaderItem>
  </ul>
);
export default headerItems;
