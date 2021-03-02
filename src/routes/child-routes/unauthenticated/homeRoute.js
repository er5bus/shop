import { lazy } from 'react'

const HomeLayout = lazy(() =>  import('./../../../containers/home/Home'))


export const homeRoute = {
  path: '/home',
  component: HomeLayout
}
