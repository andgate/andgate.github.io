import { px } from 'csx'
import { style } from 'typestyle'
import { blue1, white } from '~src/styles/colors'
import { fontOpenSans } from '~src/styles/fonts'
import * as csstips from 'csstips'

const footerRoot = style(
  csstips.centerCenter,
  csstips.height(px(63)),
  fontOpenSans,
  { background: blue1.toHexString() }
)

const footerContent = style(fontOpenSans, {
  color: white.toHexString(),
  fontSize: px(11),
  lineHeight: px(15),
})

const footerLink = style(fontOpenSans, {
  color: white.toHexString(),
  fontSize: px(11),
  lineHeight: px(15),
  textDecoration: 'none'
})

export function Footer() {
  return <div className={footerRoot}>
    <div className={footerContent}>
      Designed by <a href='https://friendlyconure.me' className={footerLink}>Raleigh Blakeway</a>
    </div>
  </div>
}
