import { RouteObject } from 'react-router-dom'
import { Error, Home } from 'pages'
import Layout from './Layout'

const children: RouteObject[] = [
  {
    element: <Home />,
    index: true,
  },
]
const route: RouteObject = {
  path: '/',
  element: <Layout />,
  children,
  errorElement: <Error />,
}

export default route
