import { px } from 'csx'
import { style } from 'typestyle'
import { black, blue1 } from './colors'
import { fontOpenSans } from './fonts'

export const pageTitleText = {
  ...fontOpenSans,
  fontSize: px(36),
  lineHeight: px(49),
  color: blue1.toHexString()
}

export const pageContentText = style(
  fontOpenSans,
  {
    fontSize: px(14),
    lineHeight: px(19),
    color: black.toHexString()
  }
)
