import React from 'react';
import { Link } from 'react-router-dom';
import ProfileMenu from './ItemsMenus/ProfileMenu';
import NotificationsMenu from './ItemsMenus/NotificationsMenu';
import { connect } from 'react-redux';
import { logout } from '../../../../redux/auth/auth.actions';

class HeaderItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayMenu: false,
      dropdownStyle: 'dropdown',
    };
  }

  showDropdownMenu = event => {
    event.preventDefault();
    this.setState({ displayMenu: true, dropdownStyle: 'dropdown open' }, () => {
      document.addEventListener('click', this.hideDropdownMenu);
    });
  };

  hideDropdownMenu = () => {
    this.setState({ displayMenu: false, dropdownStyle: 'dropdown' }, () => {
      document.removeEventListener('click', this.hideDropdownMenu);
    });
  };

  _logout = () => {
    this.props.dispatch(logout());
  };

  handleClick = e => {
    if (this.props.type === 'Logout') {
      return this._logout();
    } else {
      return this.showDropdownMenu(e);
    }
  };

  renderMenu = type => {
    switch (type) {
      case 'Profile':
        return <ProfileMenu shown={this.state.displayMenu} />;
      case 'Notifications':
        return <NotificationsMenu shown={this.state.displayMenu} />;
      default:
        return null;
    }
  };

  render() {
    return (
      <li className={this.state.dropdownStyle} onClick={this.handleClick}>
        <Link className="bcp-toggle-right-sidebar" to={this.props.link}>
          <div>
            <span
              className={`icon${
                this.props.type === 'Logout' ? ' icon-logout' : null
              }`}
            >
              {this.props.children}
            </span>
            <span>{this.props.type !== 'Logout' ? this.props.type : null}</span>
          </div>
        </Link>
        {this.renderMenu(this.props.type)}
      </li>
    );
  }
}

export default connect()(HeaderItem);
