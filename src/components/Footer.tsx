import { px } from 'csx'
import { style } from 'typestyle'
import { blue1, white } from '../common/styles/colors'
import { fontOpenSans } from '../common/styles/fonts'
import * as csstips from 'csstips'

const footerLink = style(fontOpenSans, {
  color: white.toHexString(),
  fontSize: px(11),
  lineHeight: px(15),
  textDecoration: 'underline',
  $nest: {
    '&:hover': {
      textDecoration: 'none'
    }
  }
})

const footerRoot = style(
  csstips.centerCenter,
  csstips.height(px(63)),
  fontOpenSans,
  { background: blue1.toHexString() }
)

const footerContent = style(fontOpenSans, {
  color: white.toHexString(),
  fontSize: px(11),
  lineHeight: px(15)
})

export function Footer() {
  return (
    <a
      className={footerLink}
      href="https://friendlyconure.me"
      target="_blank"
      rel="noreferrer">
      <div className={footerRoot}>
        <div className={footerContent}>Design by Raleigh Blakeway</div>
      </div>
    </a>
  )
}
