import { px } from 'csx'
import { CSSProperties } from 'typestyle/lib/types'
import { black, blue1 } from './colors'
import { fontOpenSans } from './fonts'

export const pageTitleText: CSSProperties = {
  ...fontOpenSans,
  fontSize: px(36),
  lineHeight: px(49.03),
  color: blue1.toHexString()
}

export const pageContentText: CSSProperties = {
  ...fontOpenSans,
  fontSize: px(14),
  lineHeight: px(19),
  color: black.toHexString()
}

export const pageContentTextSmall: CSSProperties = {
  ...fontOpenSans,
  fontSize: px(12),
  lineHeight: px(16.34),
  color: black.toHexString()
}
