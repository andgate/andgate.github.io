import { Link } from 'react-router-dom'
import { style } from 'typestyle'
import * as csstips from 'csstips'
import { blue1, blue2 } from '../common/styles/colors'
import { px } from 'csx'
import { fontOpenSans } from '../common/styles/fonts'

const headerRoot = style(
  csstips.horizontal,
  csstips.end,
  csstips.horizontallySpaced(px(27)),
  csstips.height(px(50)),
  { paddingLeft: px(37) }
)

const headerNavItem = style({
  borderBottomWidth: px(5),
  borderColor: blue2.toHexString(),
  $nest: {
    '&:hover': {
      borderBottomStyle: 'solid',
    }
  }
})

const headerNavLink = style(
  fontOpenSans,
  {
    fontSize: px(18),
    lineHeight: px(24.51),
    color: blue1.toHexString(),
    textDecoration: 'none',
    $nest: {
      '&:hover': {
        color: blue2.toHexString(),
      }
    }
  }
)

export function Header() {
  return <div className={headerRoot}>
    <div className={headerNavItem}>
      <Link to='/' className={headerNavLink}>Home</Link>
    </div>
    <div className={headerNavItem}>
      <Link to='/projects' className={headerNavLink}>Projects</Link>
    </div>
    <div className={headerNavItem}>
      <a href='https://andgate.github.io/resume/resume.pdf'
        target='_blank'
        className={headerNavLink}
      >
        Resume
      </a>
    </div>
  </div>
}
