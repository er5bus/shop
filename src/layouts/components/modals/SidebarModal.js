import React, { Component } from 'react'
import { FormattedMessage } from 'react-intl'
import { PHONE, EMAIL, FB_LINK, TWITTER_LINK, INSTAGRAM_LINK} from '../../../ui-helpers';


class SidebarModal extends Component {

  state = {
    modal: false
  };

  closeModal = () => {
    this.props.onClick(this.state.modal);
  }

  render() {
    return (
      <React.Fragment>
        <div className={`sidebarModal right ${this.props.active}`}>
          <div className="modal-innter-content">
            <button type="button" className="close" onClick={this.closeModal}>
              <span aria-hidden="true">
                <i className='bx bx-x'></i>
              </span>
            </button>

            <div className="modal-body">
              <div className="sidebar-about-content">
                <h3><FormattedMessage id="MENU.ABOUT_US" /></h3>

                <div className="about-the-store">
                  <ul className="sidebar-contact-info">
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
                    <a href={FB_LINK} rel="noopener noreferrer" className="d-block" target="_blank">
                      <i className='bx bxl-facebook'></i>
                    </a>
                  </li>
                  <li>
                    <a href={TWITTER_LINK} rel="noopener noreferrer" className="d-block" target="_blank">
                      <i className='bx bxl-twitter'></i>
                    </a>
                  </li>
                  <li>
                    <a href={INSTAGRAM_LINK} rel="noopener noreferrer" className="d-block" target="_blank">
                      <i className='bx bxl-instagram'></i>
                    </a>
                  </li>
                </ul>
              </div>

              <div className="sidebar-new-in-store">
                <h3><FormattedMessage id="WELECOM.TITLE" /></h3>
                <p><FormattedMessage id="ABOUT_US" /></p>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default SidebarModal;
