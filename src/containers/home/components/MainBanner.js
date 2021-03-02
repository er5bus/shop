import React, { Component } from 'react';
import VisibilitySensor from "react-visibility-sensor";
import OwlCarousel from 'react-owl-carousel3';
import { FormattedMessage } from 'react-intl'
import { HOME_BANNERS } from './../../../ui-helpers'

const options = {
  loop: true,
  nav: true,
  dots: true,
  autoplayHoverPause: true,
  autoplay: true,
  smartSpeed: 500,
  items: 1,
  navText: [
    "<i class='flaticon-left'></i>",
    "<i class='flaticon-right-arrow'></i>"
  ],
}

class MainBanner extends Component {
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
      <React.Fragment>
        {this.state.display && <OwlCarousel
          className="home-slides owl-carousel owl-theme"
          {...options}
        >
          { HOME_BANNERS.map( (banner, i) => (
            <div key={i} className="main-banner" style={{ backgroundImage: `url(${banner.image})` }}>
              <div className="d-table">
                <div className="d-table-cell">
                  <div className="container">
                    <VisibilitySensor>
                      {({ isVisible }) => (
                        <div className="main-banner-content text-center text-white">
                          <span
                            className={
                              isVisible ? "sub-title animated fadeInUp opacityOne" : 'opacityZero'
                            }
                          >
                            <FormattedMessage id={banner.desc} />
                          </span>
                          <h1
                            className={
                              isVisible ? "animated fadeInUp opacityOne" : 'opacityZero'
                            }
                          >
                            <FormattedMessage id={banner.title} />
                          </h1>
                        </div>
                      )}
                    </VisibilitySensor>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </OwlCarousel> }
      </React.Fragment>
    );
  }
}

export default MainBanner;
