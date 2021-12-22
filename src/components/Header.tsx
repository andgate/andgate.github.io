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
  transition: 'color .5s, border-bottom-width .2s',
  borderBottomStyle: 'solid',
  borderBottomWidth: px(0),
  borderColor: blue1.toHexString()
})

const headerNavLink = style(
  fontOpenSans,
  {
    transition: 'color .5s',
    fontSize: px(18),
    lineHeight: px(24.51),
    color: blue1.toHexString(),
    textDecoration: 'none',
    $nest: {
      '&:hover': {
        color: blue2.toHexString(),
        $nest: {
          [`.${headerNavItem}`]: {
            borderColor: blue2.toHexString(),
            borderBottomWidth: px(5),
          }
        }
      }
    }
  }
)

export function Header() {
  return <div className={headerRoot}>
    <Link to='/' className={headerNavLink}>
      <div className={headerNavItem}>
        Home
      </div>
    </Link>
    <Link to='/projects' className={headerNavLink}>
      <div className={headerNavItem}>
        Projects
      </div>
    </Link>
    <a href='https://andgate.github.io/resume/resume.pdf'
      target='_blank'
      className={headerNavLink}
    >
      <div className={headerNavItem}>
        Resume
      </div>
    </a>
  </div>
}
