import { Link } from 'react-router-dom'
import { style } from 'typestyle'
import * as csstips from 'csstips'
import { blue1 } from '../styles/colors'
import { px } from 'csx'
import { fontOpenSans } from '../styles/fonts'

const headerRoot = style(
  csstips.horizontal,
  csstips.end,
  csstips.horizontallySpaced(px(27)),
  csstips.height(px(50)),
  { paddingLeft: px(37) }
)

const headerNavLink = style(
  fontOpenSans,
  {
    fontSize: px(18),
    lineHeight: px(24.51),
    color: blue1.toHexString(),
    textDecoration: 'none'
  }
)

export function Header() {
  return <div className={headerRoot}>
    <Link to='/' className={headerNavLink}>Home</Link>
    <Link to='/projects' className={headerNavLink}>Projects</Link>
    <a href='https://andgate.github.io/resume/resume.pdf'
      target='_blank'
      className={headerNavLink}
    >
      Resume
    </a>
  </div>
}
