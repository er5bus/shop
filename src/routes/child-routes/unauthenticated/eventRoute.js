import { lazy } from 'react'

const Event = lazy(() =>  import('./../../../containers/event/Event'))


export const eventRoute = {
  path: '/event',
  component: Event
}
