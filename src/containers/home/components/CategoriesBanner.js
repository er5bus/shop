import React from 'react';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl'
import {CATEGORIES} from '../../../ui-helpers';


const CategoriesBanner = () => {
  return (
    <section className="categories-banner-area pt-100 pb-70">
      <div className="container-fluid">
        <div className="row">
          { CATEGORIES.map((categorie, idx) =>
          <div key={idx} className="col-lg-4 col-md-6 col-sm-6">
            <div className="single-categories-box">
              <img src={categorie.image} alt="..." />

              <div className="content text-white">
                <span><FormattedMessage id={ categorie.desc } /></span>
                <h3><FormattedMessage id={ categorie.text } /></h3>

                <Link to={categorie.path} className="default-btn">
                  <FormattedMessage id={categorie.button} />
                </Link>
              </div>
            </div>
          </div>
          ) }
        </div>
      </div>
    </section>
  );
}

export default CategoriesBanner;
