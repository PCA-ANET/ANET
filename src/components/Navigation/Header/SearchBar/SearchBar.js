import React from 'react';
import SearchIcon from '../../../../assets/SvgComponents/SearchIcon/SearchIcon';
import { Link } from 'react-router-dom';
import { t } from '../../../../i18n';

const searchBar = () => (
  <ul className="nav navbar-nav navbar-right bcp-icons-nav second-nav">
    <li className="dropdown">
      <Link className="bcp-toggle-right-sidebar" to="/">
        <div>
          <span className="icon">
            <SearchIcon />
          </span>
          <span>{t('Components:search')}</span>
        </div>
      </Link>
    </li>
  </ul>
);

export default searchBar;
