import ttfOpenSansRegular from '../../assets/fonts/open-sans/OpenSans-Regular.ttf'
import ttfOpenSansBold from '../../assets/fonts/open-sans/OpenSans-Bold.ttf'
import { fontFace } from 'typestyle'
import { CSSProperties } from 'typestyle/lib/types'

fontFace({
  fontFamily: 'Open Sans',
  fontStyle: 'normal',
  fontWeight: 400,
  src: `url("${ttfOpenSansRegular}")`,
})

fontFace({
  fontFamily: 'Open Sans Bold',
  fontStyle: 'normal',
  fontWeight: 400,
  src: `url("${ttfOpenSansBold}")`,
})

export const fontOpenSans: CSSProperties = {
  fontFamily: 'Open Sans',
}

export const fontOpenSansBold: CSSProperties = {
  fontFamily: 'Open Sans Bold',
}
