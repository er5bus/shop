import { lazy } from 'react'

const ContactUs = lazy(() =>  import('./../../../containers/contact/Contact'))


export const contactUsRoute = {
  path: '/contact-us',
  component: ContactUs
}
