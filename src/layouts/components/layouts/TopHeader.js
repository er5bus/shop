import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../../../store/actions';
//import {toAbsoluteUrl} from '../../../utils';
import { FormattedMessage } from 'react-intl'
import {myAccountRoute, loginRoute, homeRoute, myOrderRoute/*, myCartRoute*/} from '../../../routes/child-routes';
import {toAbsoluteUrl} from '../../../utils';


class TopHeader extends Component {

  handleLogout = () => {
    this.props.logout();
    this.props.history.push(homeRoute.path);
  }

  render() {
    const { isAuthenticated } = this.props;
    return (
      <React.Fragment>
        <div className="top-header">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-12">
                <ul className="header-contact-info">
                  <li><FormattedMessage id="WELECOM.TITLE" /></li>

                  <li>
                    <div className="dropdown language-switcher d-inline-block">
                      <button className="dropdown-toggle" type="button">
                        <img src={toAbsoluteUrl("/media/images/france-flag.jpg")} alt="..." />
                        <span><FormattedMessage id="LANG.FR" /> <i className='bx bx-chevron-down'></i></span>
                      </button>

                      <div className="dropdown-menu">
                        <a href="/#" className="dropdown-item d-flex align-items-center">
                          <img src={toAbsoluteUrl("/media/images/france-flag.jpg")} className="shadow-sm" alt="flag" />
                          <span><FormattedMessage id="LANG.FR" /></span>
                        </a>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="col-lg-6 col-md-12">
                <ul className="header-top-menu">
                  {/*<li>
                    <Link to={myCartRoute.path}>
                      <i className='bx bx-shopping-bag'></i> <FormattedMessage id="CART.TITLE" />
                    </Link>
                  </li>*/}
                  { isAuthenticated &&
                    <>
                      <li>
                        <Link to={myAccountRoute.path}>
                          <i className='bx bxs-user'></i> <FormattedMessage id="MENU.MY_ACCOUNT" />
                        </Link>
                      </li>
                      <li>
                        <Link to={myOrderRoute.path}>
                          <i className='bx bxs-cart'></i> <FormattedMessage id="MENU.MY_ORDERS" />
                        </Link>
                      </li>
                    </>
                  }
                  <li>
                    {isAuthenticated ? (
                      <a href="/#" onClick={e => {e.preventDefault(); this.handleLogout();}}>
                        <i className='bx bx-log-in'></i> <FormattedMessage id="MENU.LOGOUT" />
                      </a>
                    ) : (
                      <Link to={loginRoute.path}>
                        <i className='bx bx-log-in'></i> <FormattedMessage id="MENU.LOGIN" />
                      </Link>
                    )}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

      </React.Fragment>
    );
  }
}

const mapStateToProps = (state)=>  state.authentication

export default connect(mapStateToProps, { logout })(withRouter(TopHeader));
