import { lazy } from 'react'

const BaseLayout = lazy(() =>  import('./../layouts/PublicLayout'))


export const client = {
  path: '/',
  component: BaseLayout
}
