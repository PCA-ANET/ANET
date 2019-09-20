import React from 'react';
import { Link } from 'react-router-dom';
import { t } from '../../../../../i18n';

class NotificationsMenu extends React.Component {
  render() {
    return (
      <div>
        {this.props.shown ? (
          <ul className="dropdown-menu bcp-notifications">
            <li>
              <div className="title">
                {t('Components:notifications')}
                <span className="badge">3</span>
              </div>
              <div className="list">
                <div className="bcp-scroller ps-container ps-theme-default ps-active-y">
                  <div className="content">
                    <ul>
                      <li className="notification notification-unread">
                        <Link to="#">
                          <div className="notification-info">
                            <div className="text">
                              <span className="user-name">
                                30/06/2019 Nouvel extrait de compte disponible
                              </span>
                              Votre extrait du compte N° 93609390005 du mois de
                              juin 2019 est disponible sur e-documents
                            </div>
                            <span className="date">IL Y A DEUX MINUTES</span>
                          </div>
                        </Link>
                      </li>
                      <li className="notification">
                        <Link to="#">
                          <div className="notification-info">
                            <div className="text">
                              <span className="user-name">
                                30/06/2019 Nouvel extrait de compte disponible
                              </span>
                              Votre extrait du compte N° 93609390005 du mois de
                              juin 2019 est disponible sur e-documents
                            </div>
                            <span className="date">IL Y A DEUX MINUTES</span>
                          </div>
                        </Link>
                      </li>
                      <li className="notification">
                        <Link to="#">
                          <div className="notification-info">
                            <div className="text">
                              <span className="user-name">
                                30/06/2019 Nouvel extrait de compte disponible
                              </span>
                              Votre extrait du compte N° 93609390005 du mois de
                              juin 2019 est disponible sur e-documents
                            </div>
                            <span className="date">IL Y A DEUX MINUTES</span>
                          </div>
                        </Link>
                      </li>
                      <li className="notification">
                        <Link to="#">
                          <div className="notification-info">
                            <div className="text">
                              <span className="user-name">
                                30/06/2019 Nouvel extrait de compte disponible
                              </span>
                              Votre extrait du compte N° 93609390005 du mois de
                              juin 2019 est disponible sur e-documents
                            </div>
                            <span className="date">IL Y A DEUX MINUTES</span>
                          </div>
                        </Link>
                      </li>
                      <li className="notification">
                        <Link to="#">
                          <div className="notification-info">
                            <div className="text">
                              <span className="user-name">
                                30/06/2019 Nouvel extrait de compte disponible
                              </span>
                              Votre extrait du compte N° 93609390005 du mois de
                              juin 2019 est disponible sur e-documents
                            </div>
                            <span className="date">IL Y A DEUX MINUTES</span>
                          </div>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="footer">
                <Link to="#">{t('Components:allNotifs')}</Link>
              </div>
            </li>
          </ul>
        ) : null}
      </div>
    );
  }
}

export default NotificationsMenu;
