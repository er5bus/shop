import React from "react"
import ContentLoader from "react-content-loader"

const ProductLoader = () => (
  <div className="col-lg-4 col-md-6 col-sm-6 products-col-item">
    <div className="single-products-box">
      <ContentLoader
        speed={2}
        width={350}
        height={325}
        viewBox="0 0 350 325"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
      >
        <rect x="0" y="0" rx="3" ry="3" width="350" height="250" />
        <rect x="0" y="290" rx="3" ry="3" width="350" height="35" />
      </ContentLoader>
    </div>
  </div>
)

export default ProductLoader
