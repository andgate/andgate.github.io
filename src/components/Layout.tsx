import { Outlet } from 'react-router-dom'
import { Header } from './Header'
import { Footer } from './Footer'
import { style } from 'typestyle'
import * as csstips from 'csstips'

const layoutRoot = style(csstips.fillParent, csstips.vertical)
const layoutHeader = style(csstips.content)
const layoutContent = style(csstips.flex)
const layoutFooter = style(csstips.content)

export function Layout() {
  return <div className={layoutRoot}>
    <div className={layoutHeader}>
      <Header />
    </div>
    <div className={layoutContent}>
      <Outlet />
    </div>
    <div className={layoutFooter}>
      <Footer />
    </div>
  </div>
}
