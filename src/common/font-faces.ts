import { fontFace } from 'typestyle'

// Open Sans Regular
import eotOpenSansRegular from '../assets/fonts/open-sans/open-sans-v27-latin-regular.eot'
import svgOpenSansRegular from '../assets/fonts/open-sans/open-sans-v27-latin-regular.svg'
import ttfOpenSansRegular from '../assets/fonts/open-sans/open-sans-v27-latin-regular.ttf'
import woffOpenSansRegular from '../assets/fonts/open-sans/open-sans-v27-latin-regular.woff'
import woff2OpenSansRegular from '../assets/fonts/open-sans/open-sans-v27-latin-regular.woff2'

// Open Sans Bold
import eotOpenSansBold from '../assets/fonts/open-sans/open-sans-v27-latin-700.eot'
import svgOpenSansBold from '../assets/fonts/open-sans/open-sans-v27-latin-700.svg'
import ttfOpenSansBold from '../assets/fonts/open-sans/open-sans-v27-latin-700.ttf'
import woffOpenSansBold from '../assets/fonts/open-sans/open-sans-v27-latin-700.woff'
import woff2OpenSansBold from '../assets/fonts/open-sans/open-sans-v27-latin-700.woff2'

// Helpers

type FontSource = {
  url: string,
  format: string
}

const serializeFontSource = (src: FontSource): string => {
  return `url("${src.url}") format("${src.format}")`
}

const serializeFontSourceList = (srcList: FontSource[]): string => {
  return srcList.map(serializeFontSource).join(',')
}


// Font source lists

const openSansRegularList: FontSource[] = [
  {
    url: `${eotOpenSansRegular}?#iefix`,
    format: 'embedded-opentype'
  },
  {
    url: woff2OpenSansRegular,
    format: 'woff2'
  },
  {
    url: woffOpenSansRegular,
    format: 'woff'
  },
  {
    url: ttfOpenSansRegular,
    format: 'truetype'
  },
  {
    url: svgOpenSansRegular,
    format: 'svg'
  }
]

const openSansBoldList: FontSource[] = [
  {
    url: `${eotOpenSansBold}?#iefix`,
    format: 'embedded-opentype'
  },
  {
    url: woff2OpenSansBold,
    format: 'woff2'
  },
  {
    url: woffOpenSansBold,
    format: 'woff'
  },
  {
    url: ttfOpenSansBold,
    format: 'truetype'
  },
  {
    url: svgOpenSansBold,
    format: 'svg'
  },
]

export function loadFontFaces() {
  fontFace({
    fontFamily: 'Open Sans',
    fontStyle: 'normal',
    fontWeight: 400,
    src: serializeFontSourceList(openSansRegularList),
  })

  fontFace({
    fontFamily: 'Open Sans Bold',
    fontStyle: 'normal',
    fontWeight: 700,
    src: serializeFontSourceList(openSansBoldList),
  })
}