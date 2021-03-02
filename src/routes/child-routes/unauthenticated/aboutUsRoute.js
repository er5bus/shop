import { lazy } from 'react'

const AboutUsLayout = lazy(() =>  import('./../../../containers/about-us/AboutUs'))


export const aboutUsRoute = {
  path: '/about-us',
  component: AboutUsLayout
}
