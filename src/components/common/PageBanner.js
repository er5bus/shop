import React from 'react';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl'
import {homeRoute} from '../../routes/child-routes';


const PageBanner = (props) => {

  let { pageTitle, activePageText } = props;
  return (
    <div className="page-title-area">
      <div className="container">
        <div className="page-title-content">
          <h2>{pageTitle}</h2>
          <ul>
            <li>
              <Link to={homeRoute.path}>
                <FormattedMessage id="MENU.HOME" />
              </Link>
            </li>
            <li>{activePageText}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}


export default PageBanner;
