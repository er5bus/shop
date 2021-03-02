import React from 'react';
import { FormattedMessage } from 'react-intl'
import { Link } from 'react-router-dom';
import {HOME_ABOUT_US} from '../../../ui-helpers';

const AboutUs = () => (
  <section className="offer-area ptb-100 jarallax" style={{ backgroundImage: `url(${HOME_ABOUT_US.image})` }}>
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-5 col-md-6">
          <div className="offer-content">
            <span className="sub-title"><FormattedMessage id={HOME_ABOUT_US.text} /></span>
            <p><FormattedMessage id={HOME_ABOUT_US.desc} /></p>

            <Link to={HOME_ABOUT_US.path} className="default-btn">
              <FormattedMessage id={HOME_ABOUT_US.button} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default AboutUs
