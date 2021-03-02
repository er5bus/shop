import React, { Component } from 'react';
import { injectIntl } from 'react-intl'

class SearchModal extends Component {

  state = {
    modal: false
  };

  closeModal = () => {
    this.props.onClick(this.state.modal);
  }

  render() {

    const { intl } = this.props

    return (
      <div className={`search-overlay ${this.props.active}`}>
        <div className="d-table">
          <div className="d-table-cell">
            <div className="search-overlay-layer"></div>
            <div className="search-overlay-layer"></div>
            <div className="search-overlay-layer"></div>

            <div className="search-overlay-close" onClick={this.closeModal}>
              <span className="search-overlay-close-line"></span>
              <span className="search-overlay-close-line"></span>
            </div>

            <div className="search-overlay-form">
              <form>
                <input type="text" className="input-search" placeholder={intl.formatMessage({ id: "FIELD.SEARCH" }) } />
                <button type="submit">
                  <i className='bx bx-search-alt'></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default injectIntl(SearchModal);