import React, { Component } from 'react';
import { connect } from 'react-redux';
import SingleProduct from './SingleProduct';
import { addToCart } from '../../../store/actions';
import QuickViewModal from './QuickViewModal';
import { FormattedMessage } from 'react-intl'
//import Pagination from '../../../components/common/Pagination';

class ProductsNoSidebar extends Component {
  state = {
    QuickViewModal: false,
    modalProduct: {},
  };

  componentDidMount(){
    this.setState({
      products: this.props.products
    })
  }

  onChangePage = (pageNumber) => {
    // update state with new page of items
    this.props.onChangePage(pageNumber)
    window.scrollTo({
      top: 0,
      left: 100,
      behavior: 'smooth'
    })
  }

  toggleModal = () => {
    this.setState({
      QuickViewModal: !this.state.QuickViewModal
    });
  }

  passDataToModal = (product) => {
    this.setState({
      modalProduct: product
    });
  }
  render() {
    let {currentPage, totalPages, products, totalItems} = this.props
    return (
      <div className="container">
        <div className="products-filter-options">
          <div className="row align-items-center">
            <div className="col-lg-8 col-md-8">
              <p>
                <FormattedMessage id="PRODUCTS.SHOW" /> {currentPage } – {totalPages}
              </p>
            </div>

            <div className="col-lg-4 col-md-4">
              <p className="text-right">
                <FormattedMessage id="PRODUCTS.TOTAL_ITEMS" /> {totalItems}
              </p>
            </div>
          </div>
        </div>

        <div id="products-collections-filter" className="row">
          { products.map((product, idx) => (
            <SingleProduct
              styleCls="col-lg-4 col-md-6 col-sm-6 products-col-item"
              product={product}
              key={idx}
              onHandleAddToCart={this.handleAddToCart}
              onhandleModalProduct={this.passDataToModal}
              ontoggleModal={this.toggleModal}
            />
          ))}
        </div>

        {/* Quick View Modal */}
        <QuickViewModal
          onClick={this.toggleModal} active={this.state.QuickViewModal ? 'active' : ''}
          product={this.state.modalProduct}
        />

        {/* Pagination
                <Pagination
                    pageSize={9}
                    items={this.state.products}
                    onChangePage={this.onChangePage}
                />
                */}
      </div>
    );
  }
}

export default connect(
  null,
  { addToCart }
)(ProductsNoSidebar);
