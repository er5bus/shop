/**
 * app.js
 *
 * This is the entry file for the application, only setup and boilerplate
 * code.
 */

// Import all the third party stuff
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

// persist
import { PersistGate } from "redux-persist/integration/react"

// load translation
import {AppI18nProvider, I18nProvider } from "./i18n"

// load style
import './assets/main.scss'
import 'react-toastify/dist/ReactToastify.css';

// store
import { store, persistor } from "./store"

// Import routes
import * as rootRoutes from './routes'

// loader
import Loader from './components/loaders/SplashScreen'

const MOUNT_NODE = document.getElementById('root');

const ELEM = (<AppI18nProvider>
  {/* Provide Redux store */}
  <Provider store={store}>
    {/* Asynchronously persist redux stores and show `SplashScreen` while it's loading. */}
    <PersistGate persistor={persistor} loading={<Loader />}>
      <BrowserRouter>
        {/* Provide `react-intl` context synchronized with Redux state.  */}
        <I18nProvider>
          <Loader />
          <React.Suspense fallback={<Loader />}>
            <Switch>
              { Object.keys(rootRoutes).map((key) => <Route key={key} { ...rootRoutes[key] } /> ) }
            </Switch>
          </React.Suspense>
        </I18nProvider>
      </BrowserRouter>
    </PersistGate>
  </Provider>
</AppI18nProvider>)

ReactDOM.render(
  ELEM,
  MOUNT_NODE
)

if (process.env.NODE_ENV !== 'production' && module.hot) {
  // Hot reloadable React components and translation json files
  // modules.hot.accept does not accept dynamic dependencies,
  // have to be constants at compile-time
  module.hot.accept(['./routes'], () => {
    ReactDOM.unmountComponentAtNode(MOUNT_NODE).render(ELEM, MOUNT_NODE)
  })
}
