import React, { Component } from 'react';
import OwlCarousel from 'react-owl-carousel3';
import { FormattedMessage } from 'react-intl'
import {PARTNERS} from '../../../ui-helpers';


const options = {
  loop: true,
  nav: false,
  dots: false,
  autoplayHoverPause: true,
  autoplay: true,
  navText: [
    "<i class='flaticon-left'></i>",
    "<i class='flaticon-right-arrow'></i>"
  ],
  responsive: {
    0: {
      items: 2,
    },
    576: {
      items: 4,
    },
    768: {
      items: 4,
    },
    1200: {
      items: 7,
    }
  }
}

class Partner extends Component {

  _isMounted = false;
  state = {
    display: false,
  }
  componentDidMount(){
    this._isMounted = true;
    this.setState({ display: true })
  }
  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    return (
      <div className="partner-area ptb-70">
        <div className="container">
          <div className="section-title">
            <h2><FormattedMessage id="OUR_PARTNER" /></h2>
          </div>

          {this.state.display && <OwlCarousel
            className="partner-slides owl-carousel owl-theme"
            {...options}
          >
            {
              PARTNERS.map((partner, i) => (
                <div key={i} className="partner-item">
                  <a href={partner.url}>
                    <img src={partner.logo} alt={partner.url} />
                  </a>
                </div>
              ))
            }
          </OwlCarousel>}
        </div>
      </div>
    );
  }
}

export default Partner;
