import React from 'react'
import { connect } from 'react-redux'
import { FormattedMessage } from 'react-intl'

import { fetchProducts, filterProducts, fetchCategories } from './../../store/actions'
import { getFilteredProducts } from './../../store/selector'

import InfiniteScroll from './../../components/common/InfiniteScroll'
import PageBanner from '../../components/common/PageBanner'
import SingleProduct from './components/SingleProduct';
import QuickViewModal from './components/QuickViewModal';
import ProductLoader from './components/ProductLoader'
import {toAbsoluteUrl} from '../../utils'

class Products extends React.Component {

  state = {
    quickViewModal: false,
    modalProduct: {},
  };

  componentDidMount(){
    window.scrollTo(0, 0)
    this.props.fetchCategories()
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
      quickViewModal: !this.state.quickViewModal
    });
  }

  passDataToModal = (product) => {
    this.setState({
      modalProduct: product
    });
  }

  onFetchProducts = (pageNumber) => {
    this.props.fetchProducts({ pageNumber })
  }

  onFilterProducts = (keyword) => {
    this.props.filterProducts(keyword)
  }

  render() {
    const { products = [], isFetching, categories, searchTerm, hasMore, currentPage, /*totalItems/*, totalPages*/ } = this.props
    return (
      <>
        <PageBanner
          pageTitle={<FormattedMessage id="MENU.OUR_MENU" />}
          activePageText={<FormattedMessage id="MENU.OUR_MENU" />}
        />
        <section className="products-area pt-100 pb-70">
          <div className="container">
            <div className="woocommerce-widget-area pb-5">
              <div className="woocommerce-widget collections-list-widget">
                <h3 className="woocommerce-widget-title"><FormattedMessage id="PRODUCT.CATEGORY" /></h3>

                <ul className="categories">
                  <li className={ searchTerm === "" ? "active" : "" }>
                    <a href="#/" onClick={() => this.onFilterProducts("")}><FormattedMessage id="PRODUCT.CATEGORY.ALL" /></a>
                  </li>
                  { categories && categories.map((category, idx) => (<li key={idx} className={ searchTerm === category.id ? "active" : "" }>
                    <a href="#/" onClick={() => this.onFilterProducts(category.id)}>{ category.categoryName }</a>
                  </li>
                  )) }
                </ul>
              </div>
            </div>
            <div className="products-filter-options">
              <div className="row align-items-center">
                {/*<div className="col-lg-8 col-md-8">
                  <p>
                    <FormattedMessage id="PRODUCTS.SHOW" /> {currentPage } – {totalPages}
                  </p>
                </div>*/}

               {/*  <div className="col-lg-4 col-md-4">
                  <p className="text-left">
                    <FormattedMessage id="PRODUCTS.TOTAL_ITEMS" /> {products.length}
                  </p>
              </div> */}
              </div>
            </div>

            <div id="products-collections-filter" className="row">
              <InfiniteScroll
                loadMore={this.onFetchProducts}
                pageNumber={ currentPage }
                isLoading={isFetching}
                hasMore={ hasMore }
                loader={<ProductLoader />}
              >
                { products && products.map((product, idx) => (
                  <SingleProduct
                    styleCls="col-lg-4 col-md-6 col-sm-6 products-col-item"
                    product={product}
                    key={idx}
                    onhandleModalProduct={this.passDataToModal}
                    ontoggleModal={this.toggleModal}
                  />
                ))}
                { !isFetching && products.length === 0 && <div className="text-center col-12">
                  <img height="400" width="400" src={toAbsoluteUrl("/media/images/no-data.svg")} alt="..." />
                  <p><FormattedMessage id="PRODUCTS.EMPTY" /></p>
                </div> }
              </InfiniteScroll>
            </div>

            {/* Quick View Modal */}
            { (this.state.quickViewModal && this.state.modalProduct) && <QuickViewModal
              onClick={this.toggleModal} active={this.state.quickViewModal ? 'active' : ''}
              product={this.state.modalProduct}
            />
            }
          </div>
        </section>
      </>
    )
  }
}


const mapStateToProps = state => ({ ...state.product, products: getFilteredProducts(state) })

export default connect(mapStateToProps, { fetchProducts, filterProducts, fetchCategories })(Products)
