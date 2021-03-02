import React from 'react'
import {useLang} from './I18n'
import {IntlProvider} from 'react-intl'

import frMessages from './locales/fr/translation.json'

import '@formatjs/intl-relativetimeformat/polyfill'
import '@formatjs/intl-relativetimeformat/dist/locale-data/en'
import '@formatjs/intl-relativetimeformat/dist/locale-data/fr'
import '@formatjs/intl-relativetimeformat/dist/locale-data/ar'


const allMessages = {
  fr: frMessages
}

export const I18nProvider = ({ children }) => {
  const locale = useLang()
  const messages = allMessages[locale]

  return (
    <IntlProvider locale={locale} messages={messages}>
      {children}
    </IntlProvider>
  )
}
