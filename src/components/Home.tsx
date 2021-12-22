import bioPicUrl from '../assets/images/bio-pic.png'
import bioText from '../assets/text/bio.txt'
import { px } from 'csx'
import { style } from 'typestyle'
import { pageContentText, pageTitleText } from '../common/styles/text'
import * as csstips from 'csstips'
import * as csx from 'csx'

const homeRoot = style(
  csstips.horizontal,
  csstips.center,
  csstips.centerJustified,
  csstips.fillParent,
  {
    minHeight: px(269),
    paddingBottom: px(10)
  }
)

const homeBioContainer = style(
  csstips.horizontal,
  csstips.center,
  csstips.horizontallySpaced(px(20)),
)

const homeBioPic = style(
  csstips.inlineBlock,
  csstips.width(px(249)),
  csstips.height(px(249)),
  {
    borderRadius: px(24),
    backgroundImage: csx.url(bioPicUrl)
  }
)

const homeBioRight = style(
  csstips.vertical,
  csstips.start,
  csstips.width(px(397))
)

const homeBioTitle = style(
  pageTitleText,
  csstips.fillParent,
  { textAlign: 'center' }
)

export function Home() {
  return <div className={homeRoot}>
    <div className={homeBioContainer}>
      <div className={homeBioPic} />
      <div className={homeBioRight}>
        <div className={homeBioTitle}>Gabriel Anderson</div>
        <div className={style(pageContentText)}>{bioText}</div>
      </div>
    </div>
  </div>
}
