import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../../../components/PageHeader/PageHeader';
import PageHeaderNav from '../../../components/PageHeadNav/PageHeadNav';
import { t } from '../../../i18n';
import Transfer from './Transfer';
import CashTransferHistory from './CashTransferHistory';
import CashTransfer from './CashTransfer';
import Favorites from './Favorites';
import { TRANSFERS_NAMESPACE, TABS } from '../constants';
import TransferHistory from './TransferHistory';

class Feature extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: TABS[0],
    };
  }
  activateTab = tab => {
    this.setState({
      activeTab: tab,
    });
  };
  componentDidUpdate(prevProps, prevState, snapshot) {
    if (
      this.props.location.state !== undefined &&
      prevState.activeTab !== this.props.location.state.activeTab
    ) {
      this.setState({ activeTab: this.props.location.state.activeTab });
    }
  }
  componentDidMount() {
    if (this.props.location.state !== undefined) {
      this.setState({
        activeTab: this.props.location.state.activeTab,
      });
    }
  }
  renderActiveTab = () => {
    switch (this.state.activeTab.id) {
      case 'transfer':
        return (
          <>
            <Transfer />
            <div className="sm-mt-40 sm-mb-40" />
            <TransferHistory />
          </>
        );
      case 'favorites':
        return <Favorites />;
      case 'cashTransfer':
        return (
          <>
            <CashTransfer />
            <div className="sm-mt-40 sm-mb-40"></div>
            <CashTransferHistory />
          </>
        );
      case 'history':
        return (
          <>
            <TransferHistory />
            <div className="sm-mt-40 sm-mb-40"></div>
            <CashTransferHistory />
          </>
        );
      default:
        return (
          <>
            <Transfer />
            <div className="sm-mt-40 sm-mb-40"></div>
            <TransferHistory />
          </>
        );
    }
  };
  render() {
    return (
      <div className="page-content">
        <div className="page-content_side">
          <PageHeader text={t(this.state.activeTab.title)}>
            <li key="1">
              <Link to="/compte">
                {t(`${TRANSFERS_NAMESPACE}breadCrumbFirstLink`)}
              </Link>
            </li>
            <li key="2">
              <Link to="/compte">
                {t(`${TRANSFERS_NAMESPACE}breadCrumbSecondLink`)}
              </Link>
            </li>
            <li className="active" key="3">
              {t(this.state.activeTab.title)}
            </li>
          </PageHeader>
          <div className="page-content_inner">
            <PageHeaderNav>
              {TABS.map(tab => (
                <li key={tab.id}>
                  <Link
                    className={
                      tab.id === this.state.activeTab.id ? 'active' : ''
                    }
                    title={t(tab.title)}
                    to="#"
                    onClick={() => this.activateTab(tab)}
                  >
                    {t(tab.title)}
                  </Link>
                </li>
              ))}
            </PageHeaderNav>
            <div className="main-content container-fluid">
              {this.renderActiveTab()}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Feature;
