import bioPicUrl from '../assets/images/bio-pic.jpg'
import bioText from '../assets/text/bio.txt'
import { px } from 'csx'
import { media, style } from 'typestyle'
import { pageContentText, pageTitleText } from '../common/styles/text'
import * as csstips from 'csstips'
import * as csx from 'csx'

const homeRoot = style(
  media(
    { maxWidth: 699 },
    {
      marginTop: px(10)
    }
  ),
  media(
    { minWidth: 700 },
    csstips.horizontal,
    csstips.center,
    csstips.centerJustified,
    csstips.fillParent,
    {
      marginTop: px(10),
      minHeight: px(269),
      paddingBottom: px(10)
    }
  )
)

const homeBioContainer = style(
  media(
    { maxWidth: 699 },
    csstips.vertical,
    csstips.center,
    csstips.verticallySpaced(px(20))
  ),
  media(
    { minWidth: 700 },
    csstips.horizontal,
    csstips.center,
    csstips.horizontallySpaced(px(20))
  )
)

const homeBioPic = style(
  csstips.inlineBlock,
  csstips.width(px(187)),
  csstips.height(px(249)),
  {
    borderRadius: px(24),
    backgroundImage: csx.url(bioPicUrl),
    backgroundRepeat: 'no-repeat'
  }
)

const homeBioRight = style(csstips.vertical, csstips.start, {
  maxWidth: px(397),
  minWidth: px(249),
  paddingLeft: px(5),
  paddingRight: px(5)
})

const homeBioTitle = style(pageTitleText, csstips.fillParent, {
  textAlign: 'center'
})

export function Home() {
  return (
    <div className={homeRoot}>
      <div className={homeBioContainer}>
        <div className={homeBioPic} />
        <div className={homeBioRight}>
          <div className={homeBioTitle}>Gabriel Anderson</div>
          <div className={style(pageContentText)}>{bioText}</div>
        </div>
      </div>
    </div>
  )
}
