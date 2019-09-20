import React from 'react';
import { Link } from 'react-router-dom';
import { t } from '../../../../../i18n';

class ProfileMenu extends React.Component {
  render() {
    return (
      <div>
        {this.props.shown ? (
          <ul className="dropdown-menu">
            <li>
              <div className="user-info">
                <div className="user-name">Mr Abdous Moustapha</div>
                <div className="user-position online">
                  {t('Components:online')}
                </div>
              </div>
            </li>
            <li>
              <Link to="#">
                <span className="icon mdi mdi-face" />
                {t('Components:infos')}
              </Link>
            </li>
            <li>
              <Link to="#">
                <span className="icon mdi mdi-settings" />
                {t('Components:passwordModification')}
              </Link>
            </li>
            <li>
              <Link to="#">
                <span className="icon mdi mdi-power" />
                {t('Components:logout')}
              </Link>
            </li>
          </ul>
        ) : null}
      </div>
    );
  }
}

export default ProfileMenu;
