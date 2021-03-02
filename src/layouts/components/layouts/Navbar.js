import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import SearchModal from '../modals/SearchModal'
import ShoppingCartModal from '../modals/ShoppingCartModal'
import SidebarModal from '../modals/SidebarModal'
import {toAbsoluteUrl} from '../../../utils'
import { FormattedMessage } from 'react-intl'
import {homeRoute, aboutUsRoute, productsRoute, contactUsRoute} from '../../../routes/child-routes'
import {connect} from 'react-redux'


class Navbar extends Component {
  // Navbar
  _isMounted = false
  state = {
    display: false,
    collapsed: true
  }
  toggleNavbar = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    })
  }
  componentDidMount() {
    let elementId = document.getElementById("navbar")
    document.addEventListener("scroll", () => {
      if (window.scrollY > 170) {
        elementId.classList.add("is-sticky")
      } else {
        elementId.classList.remove("is-sticky")
      }
    })
    window.scrollTo(0, 0)
  }
  componentWillUnmount() {
    this._isMounted = false
  }

  // Search Modal
  toggleModalSearch = () => {
    this.setState({
      SearchModal: !this.state.SearchModal
    })
  }

  // Shopping Cart Modal
  toggleModalCart = () => {
    this.setState({
      ShoppingCartModal: !this.state.ShoppingCartModal
    })
  }

  // Sidebar Modal
  toggleModalSidebar = () => {
    this.setState({
      SidebarModal: !this.state.SidebarModal
    })
  }

  render() {

    const { products } = this.props
    const { collapsed } = this.state
    const classNameOne = collapsed ? 'collapse navbar-collapse' : 'collapse navbar-collapse show'
    const classNameTwo = collapsed ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right'

    return (
      <React.Fragment>
        <div id="navbar" className="navbar-area">
          <div className="main-nav">
            <div className="container">
              <nav className="navbar navbar-expand-md navbar-light">
                <Link to={homeRoute.path} className="navbar-brand">
                  <img height="53" width="120" src={toAbsoluteUrl("/media/images/logo.png")} alt="logo" />
                </Link>

                <button
                  onClick={this.toggleNavbar}
                  className={classNameTwo}
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="icon-bar top-bar"></span>
                  <span className="icon-bar middle-bar"></span>
                  <span className="icon-bar bottom-bar"></span>
                </button>

                <div className={classNameOne} id="navbarSupportedContent">
                  <ul className="navbar-nav">

                    <li className="nav-item">
                      <Link to={homeRoute.path} className="nav-link">
                        <FormattedMessage id="MENU.HOME" />
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link to={aboutUsRoute.path} className="nav-link">
                        <FormattedMessage id="MENU.ABOUT_US" />
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link to={productsRoute.path} className="nav-link">
                        <FormattedMessage id="MENU.OUR_MENU" />
                      </Link>
                    </li>


                    {/*<li className="nav-item">
                      <Link to={eventRoute.path} className="nav-link">
                        <FormattedMessage id="MENU.EVENT" />
                      </Link>
                    </li>*/}
                    <li className="nav-item">
                      <Link to={contactUsRoute.path} className="nav-link">
                        <FormattedMessage id="MENU.CONTACT_US" />
                      </Link>
                    </li>
                  </ul>


                  <div className="others-option">
                    <div className="option-item">
                      <div className="search-btn-box" onClick={this.toggleModalSearch}>
                        <i className="search-btn bx bx-search-alt"></i>
                      </div>
                    </div>

                    <div className="option-item">
                      <div className="cart-btn">
                          <a href="/#" onClick={ e => {
                            e.preventDefault()
                            this.toggleModalCart()
                          }}>
                            <i className='bx bx-shopping-bag'></i>
                            <span>{products.length}</span>
                          </a>
                      </div>
                    </div>

                    <div className="option-item">
                      <div className="burger-menu" onClick={this.toggleModalSidebar}>
                        <span className="top-bar"></span>
                        <span className="middle-bar"></span>
                        <span className="bottom-bar"></span>
                      </div>
                    </div>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>

        {/* Search Modal */}
        <SearchModal
          onClick={this.toggleModalSearch}
          active={this.state.SearchModal ? 'active' : ''}
        />

        {/* Shopping Cart Modal */}
        <ShoppingCartModal
          onClick={this.toggleModalCart}
          active={this.state.ShoppingCartModal ? 'active' : ''}
        />

        {/* Sidebar Modal */}
        <SidebarModal
          onClick={this.toggleModalSidebar}
          active={this.state.SidebarModal ? 'active' : ''}
        />
      </React.Fragment>
    )
  }
}

const mapStateToProps = (state) => state.cart

export default connect(mapStateToProps, null)(Navbar)
