import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { FormattedMessage } from "react-intl";
import { toast } from "react-toastify";
import { AUTO_CLOSE } from "./../../../ui-helpers";
import { addToCart } from "../../../store/actions";
import { productRoute, checkoutRoute } from "../../../routes/child-routes";

class QuickViewModal extends Component {
  state = {
    modal: false,
    qty: 1,
    max: 10,
    min: 1,
  };

  closeModal = () => {
    this.props.onClick(this.state.modal);
    this.setState({
      qty: 1,
    });
  };

  handleAddToCartFromView = () => {
    toast(<FormattedMessage id="NOTIFICATION.CART_UPDATED" />, {
      autoClose: AUTO_CLOSE,
    });
    this.props.addToCart({
      product: this.props.product,
      quantity: this.state.qty,
    });
  };

  IncrementItem = () => {
    this.setState((prevState) => {
      if (prevState.qty < 10) {
        return {
          qty: prevState.qty + 1,
        };
      } else {
        return null;
      }
    });
  };

  DecreaseItem = () => {
    this.setState((prevState) => {
      if (prevState.qty > 1) {
        return {
          qty: prevState.qty - 1,
        };
      } else {
        return null;
      }
    });
  };

  render() {
    const { product } = this.props;
    return (
      <div className={`modal fade productsQuickView ${this.props.active}`}>
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <button type="button" className="close" onClick={this.closeModal}>
              <span aria-hidden="true">
                <i className="bx bx-x"></i>
              </span>
            </button>

            <div className="row align-items-center">
              <div className="col-lg-6 col-md-6">
                <div className="products-image">
                  <img
                    className="prodcut-show"
                    src={product.productImage}
                    alt="..."
                  />
                </div>
              </div>

              <div className="col-lg-6 col-md-6">
                <div className="products-content">
                  <h3>{product.title}</h3>
                  <span className="new-price">{product.category.categoryName}</span>
                  <div className="price">
                    <span className="new-price">
                      {product.price} <FormattedMessage id="CURRENCY" />
                    </span>
                  </div>

                  <div className="products-review">
                    <div className="rating">
                      <i className="bx bxs-star"></i>
                      <i className="bx bxs-star"></i>
                      <i className="bx bxs-star"></i>
                      <i className="bx bxs-star"></i>
                      <i className="bx bxs-star"></i>
                    </div>
                  </div>

                  <ul className="products-info pb-4">
                    <li>{product.description}</li>
                  </ul>

                  <div className="products-add-to-cart">
                    <div className="input-counter">
                      <span className="minus-btn" onClick={this.DecreaseItem}>
                        <i className="bx bx-minus"></i>
                      </span>

                      <input
                        type="text"
                        value={this.state.qty}
                        min={this.state.min}
                        max={this.state.max}
                        onChange={(e) => this.setState({ qty: e.target.value })}
                      />

                      <span className="plus-btn" onClick={this.IncrementItem}>
                        <i className="bx bx-plus"></i>
                      </span>
                    </div>

                    <button
                      type="submit"
                      className="default-btn"
                      onClick={this.handleAddToCartFromView}
                    >
                      <FormattedMessage id="PRODUCT.ADD_TO_CART" />
                    </button>
                  </div>
                  <div className="mui--text-nowrap mt-5">
                    <Link
                      to={productRoute.path.replace(":param", product.id)}
                      className="view-full-info float-left"
                    >
                      <FormattedMessage id="PRODUCT.SHOW_FULL" />
                    </Link>
                    <Link
                      to={checkoutRoute.path}
                      className="view-full-info float-right"
                    >
                      <FormattedMessage id="CART.GO_TO_CHECKOUT" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(null, { addToCart })(QuickViewModal);
