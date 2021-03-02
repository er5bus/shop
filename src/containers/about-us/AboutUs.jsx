import React from 'react'
import {toAbsoluteUrl} from '../../utils'
import { FormattedMessage } from 'react-intl'
import PageBanner from '../../components/common/PageBanner'


const AboutUs = () => (
  <>
    <PageBanner
      pageTitle={<FormattedMessage id="MENU.ABOUT_US" />}
      activePageText={<FormattedMessage id="MENU.ABOUT_US" />}
    />

    <section className="about-area ptb-100">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-12">
            <div className="about-image">
              <img src={toAbsoluteUrl("/media/images/about/about1.jpg")} className="shadow" alt="..." />
              <img src={toAbsoluteUrl("/media/images/about/about2.jpg")} className="shadow" alt="..." />
            </div>
          </div>

          <div className="col-lg-6 col-md-12">
            <div className="about-content">
              <span className="sub-title"><FormattedMessage id="ABOUT_US.TITLE" /></span>
              <p><FormattedMessage id="ABOUT_US.DESC_FIRST" /></p>
              <p><FormattedMessage id="ABOUT_US.DESC_SECOND" /></p>
              <p><FormattedMessage id="ABOUT_US.DESC_THIRD" /></p>
            </div>
          </div>
        </div>

        <div className="about-inner-area">
          <div className="row">
            <div className="col-lg-4 col-sm-6">
              <div className="about-text">
                <h3><FormattedMessage id="ABOUT_US.OUR_STORY.TITLE" /></h3>
                <p><FormattedMessage id="ABOUT_US.OUR_STORY.DESC" /></p>

                <ul className="features-list">
                  <li><i className='bx bx-check'></i> <FormattedMessage id="ABOUT_US.OUR_STORY.FIRST" /></li>
                  <li><i className='bx bx-check'></i> <FormattedMessage id="ABOUT_US.OUR_STORY.SECOND" /></li>
                  <li><i className='bx bx-check'></i> <FormattedMessage id="ABOUT_US.OUR_STORY.THIRD" /></li>
                </ul>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="about-text">
                <h3><FormattedMessage id="ABOUT_US.OUR_VALUES.TITLE" /></h3>
                <p><FormattedMessage id="ABOUT_US.OUR_VALUES.DESC" /></p>

                <ul className="features-list">
                  <li><i className='bx bx-check'></i> <FormattedMessage id="ABOUT_US.OUR_VALUES.FIRST" /></li>
                  <li><i className='bx bx-check'></i> <FormattedMessage id="ABOUT_US.OUR_VALUES.SECOND" /></li>
                  <li><i className='bx bx-check'></i> <FormattedMessage id="ABOUT_US.OUR_VALUES.THIRD" /></li>
                </ul>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6 offset-sm-3 offset-lg-0">
              <div className="about-text">
                <h3><FormattedMessage id="ABOUT_US.OUR_PROMISE.TITLE" /></h3>
                <p><FormattedMessage id="ABOUT_US.OUR_PROMISE.DESC" /></p>

                <ul className="features-list">
                  <li><i className='bx bx-check'></i> <FormattedMessage id="ABOUT_US.OUR_PROMISE.FIRST" /></li>
                  <li><i className='bx bx-check'></i> <FormattedMessage id="ABOUT_US.OUR_PROMISE.SECOND" /></li>
                  <li><i className='bx bx-check'></i> <FormattedMessage id="ABOUT_US.OUR_PROMISE.THIRD" /></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
)


export default AboutUs
