import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl'
import {PHONE, EMAIL, FB_LINK, TWITTER_LINK, INSTAGRAM_LINK, VERSION} from '../../../ui-helpers';
import {aboutUsRoute, contactUsRoute, productsRoute} from '../../../routes/child-routes';


class Footer extends Component {
  render() {
    let currentYear = new Date().getFullYear();
    return (
      <footer className="footer-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-6">
              <div className="single-footer-widget">
                <h3><FormattedMessage id="MENU.ABOUT_US" /></h3>

                <div className="about-the-store">
                  <ul className="footer-contact-info">
                    <li>
                      <i className='bx bx-map'></i>
                      <FormattedMessage id="ADDRESS" />
                    </li>
                    <li>
                      <i className='bx bx-phone-call'></i>
                      { PHONE }
                    </li>
                    <li>
                      <i className='bx bx-envelope'></i>
                      { EMAIL }
                    </li>
                  </ul>
                </div>

                <ul className="social-link">
                  <li>
                    <a rel="noopener noreferrer" href={FB_LINK} className="d-block" target="_blank">
                      <i className='bx bxl-facebook'></i>
                    </a>
                  </li>
                  <li>
                    <a rel="noopener noreferrer" href={TWITTER_LINK} className="d-block" target="_blank">
                      <i className='bx bxl-twitter'></i>
                    </a>
                  </li>
                  <li>
                    <a rel="noopener noreferrer" href={INSTAGRAM_LINK} className="d-block" target="_blank">
                      <i className='bx bxl-instagram'></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-6 col-md-6 col-sm-6">
              <div className="single-footer-widget pl-4">
                <h3><FormattedMessage id="FOOTER.LINK" /></h3>

                <ul className="quick-links">
                  <li>
                    <Link to={aboutUsRoute.path}>
                      <FormattedMessage id="MENU.ABOUT_US" />
                    </Link>
                  </li>
                  <li>
                    <Link to={contactUsRoute.path}>
                      <FormattedMessage id="MENU.CONTACT_US" />
                    </Link>
                  </li>
                  <li>
                    <Link to={productsRoute.path}>
                      <FormattedMessage id="MENU.OUR_MENU" />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="footer-bottom-area">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-6">
                <p>
                  <FormattedMessage id="FOOTER.COPY_RIGHT" />
                  <i className='bx bx-copyright'></i>{currentYear} { " " }
                  <a href="https://www.infinitymanagement.fr/" rel="noopener noreferrer" target="_blank"> Infinity Management</a> -
                  <FormattedMessage id="FOOTER.ALL_RIGHT_RESERVED" />
                </p>
              </div>
              <div className="col-lg-6 col-md-6">
                <p className="text-right">
                  { VERSION }
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="lines">
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </footer>
    );
  }
}

export default Footer;
