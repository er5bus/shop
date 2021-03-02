import React, { Component } from 'react'
import OwlCarousel from 'react-owl-carousel3'
import {INSTAGRAM_PIC, INSTAGRAM_LINK, INSTAGRAM_LINK_TEXT} from '../../../ui-helpers';

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
      items: 3,
    },
    768: {
      items: 4,
    },
    1200: {
      items: 6,
    }
  }
}

class InstagramFeed extends Component {

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
      <div className="instagram-area pt-5">
        <div className="container-fluid">
          <div className="instagram-title">
            <a rel="noopener noreferrer" href={INSTAGRAM_LINK} target="_blank">
              <i className='bx bxl-instagram'></i> { INSTAGRAM_LINK_TEXT }
            </a>
          </div>

          {this.state.display && <OwlCarousel
            className="instagram-slides owl-carousel owl-theme"
            {...options}
          >
            {
              INSTAGRAM_PIC.map((pic, i) => (
                <div key={i} className="single-instagram-post">
                  <img width="300" height="300" src={pic.image} alt="..." />
                  <a rel="noopener noreferrer" href={pic.url} target="_blank" className="link-btn"><i className='bx bxl-instagram'></i></a>
                </div>
              ))
            }
          </OwlCarousel>}
        </div>
      </div>
    );
  }
}

export default InstagramFeed;
