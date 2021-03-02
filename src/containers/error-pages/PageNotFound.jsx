import React from 'react'
import { Link } from 'react-router-dom'
import { FormattedMessage } from 'react-intl'

import { homeRoute } from './../../routes/child-routes'
import {toAbsoluteUrl} from '../../utils'
import PageBanner from '../../components/common/PageBanner'

const PageNotFound = () => {

  return (
    <>
      <PageBanner
        pageTitle={<FormattedMessage id="PAGE_NOT_FOUND.TITLE" />}
        activePageText={<FormattedMessage id="PAGE_NOT_FOUND.TITLE" />}
      />
      <section className="error-area ptb-100">
        <div className="container">
          <div className="error-content">
            <img src={toAbsoluteUrl("/media/images/errors/404.svg")} alt="error" />
            <h3><FormattedMessage id="PAGE_NOT_FOUND.TITLE" /></h3>
            <p><FormattedMessage id="PAGE_NOT_FOUND.DESC" /></p>
            <Link to={homeRoute.path} className="default-btn">
              <FormattedMessage id="GO_HOME" />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}


export default PageNotFound
