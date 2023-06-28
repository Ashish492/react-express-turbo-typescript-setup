import { Footer, Navbar } from 'component'
import { FC } from 'react'
import { Outlet } from 'react-router-dom'
type Props = {}
const Layout: FC<Props> = props => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}
export default Layout
