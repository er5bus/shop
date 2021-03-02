import React from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'
import { TopHeader, Navbar, Footer } from './components/layouts'

import { ToastContainer } from 'react-toastify'

import * as allRoutes from './../routes/child-routes'
import { InstagramFeed/*, GoTop */ } from './components/common'
import { AUTO_CLOSE } from '../ui-helpers'

const PageNotFound = React.lazy(() => import('../containers/error-pages/PageNotFound'))

const PublicLayout = () => {
  window.scrollTo({
    top: 0,
    left: 100,
    behavior: 'smooth'
  })

  return (
    <>
      <TopHeader />
      <Navbar />
      <ToastContainer
        position='top-right'
        autoClose={AUTO_CLOSE}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      {/* Same as */}
      <ToastContainer />
      <Switch>
        <Route
          exact
          path='/'
          render={() => <Redirect from='/' to={allRoutes.homeRoute.path} />}
        />
        {Object.keys(allRoutes).map((key) => <Route key={key} {...allRoutes[key]} />)}
        <Route component={PageNotFound} />
      </Switch>
      <InstagramFeed />
      <Footer />
      {/* <GoTop /> */}
    </>
  )
}

export default PublicLayout
