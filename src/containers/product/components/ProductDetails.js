import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toast } from 'react-toastify'
import { addToCart } from '../../../store/actions';
import {getProductURL} from '../../../utils';
import { FormattedMessage } from 'react-intl'
import OwlCarousel from 'react-owl-carousel3'
import {AUTO_CLOSE} from '../../../ui-helpers';

const options = {
  loop: true,
  nav: true,
  dots: false,
  autoplayHoverPause: true,
  autoplay: true,
  navText: [
    "<i class='flaticon-left'></i>",
    "<i class='flaticon-right-arrow'></i>"
  ],
  responsive: {
    0: {
      items: 1,
    },
    576: {
      items: 1,
    },
    768: {
      items: 1,
    },
    1200: {
      items: 1,
    }
  }
}


class ProductDetails extends Component {
  state = {
    qty: 1,
    max: 10,
    min: 1
  };

  handleAddToCart = () => {
    let { qty } = this.state;
    toast(<FormattedMessage id="NOTIFICATION.CART_UPDATED" />, {autoClose: AUTO_CLOSE})
    this.props.addToCart({ product: this.props.product, quantity: qty })
  }

  incrementItem = () => {
    this.setState(prevState => {
      if(prevState.qty < 10) {
        return {
          qty: prevState.qty + 1
        }
      } else {
        return null;
      }
    });
  }

  decreaseItem = () => {
    this.setState(prevState => {
      if(prevState.qty > 1) {
        return {
          qty: prevState.qty - 1
        }
      } else {
        return null;
      }
    });
  }

  render() {
    const { productName, images = [], category, description, price } = this.props.product;

    return (
      <section className="product-details-area pt-100 pb-70">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-md-12">
              <OwlCarousel
                className="instagram-slides owl-carousel owl-theme"
                {...options}
              >
                { images.map((image, idx) => (
                  <div key={idx} className="item">
                    <img className="prodcut-show" height="300" src={getProductURL(image.url)} alt="..." />
                  </div>
                )) }
              </OwlCarousel>
            </div>

            <div className="col-lg-7 col-md-12">
              <div className="products-details-desc">
                <h3>{productName}</h3>

                <h5 className="pt-3 pb-3">{category.categoryName}</h5>

                <div className="price">
                  <span className="new-price">{price} <FormattedMessage id="CURRENCY" /></span>
                </div>

                <div className="products-review">
                  <div className="rating">
                    <i className='bx bx-star'></i>
                    <i className='bx bx-star'></i>
                    <i className='bx bx-star'></i>
                    <i className='bx bx-star'></i>
                    <i className='bx bx-star'></i>
                  </div>
                </div>

                <div className="products-size-wrapper">
                  {description}
                </div>

                <div className="products-add-to-cart">
                  <div className="input-counter">
                    <span
                      className="minus-btn"
                      onClick={this.decreaseItem}
                    >
                      <i className='bx bx-minus'></i>
                    </span>

                    <input
                      type="text"
                      value={this.state.qty}
                      min={this.state.min}
                      max={this.state.max}
                      onChange={e => this.setState({ qty: e.target.value })}
                    />

                    <span
                      className="plus-btn"
                      onClick={this.incrementItem}
                    >
                      <i className='bx bx-plus'></i>
                    </span>
                  </div>

                  <button
                    className="default-btn"
                    onClick={this.handleAddToCart}
                  >
                    <i className="fas fa-cart-plus"></i>
                    <FormattedMessage id="PRODUCT.ADD_TO_CART" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default connect(
  null,
  { addToCart }
)(ProductDetails);
