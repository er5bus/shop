import { createSelector } from "reselect"

const getProducts = (state) => state.product.products || []
const getSearchTerm = state => state.product.searchTerm || 0


export const getFilteredProducts = createSelector(
  [getProducts, getSearchTerm],
  (products, searchTerm) => products.filter(product =>
    (
      searchTerm === 0 || product.category.id === searchTerm
    )
  )
)
