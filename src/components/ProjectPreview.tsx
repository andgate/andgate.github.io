import * as csstips from 'csstips'
import { px } from 'csx'
import * as csx from 'csx'
import { style } from 'typestyle'
import { Project } from '../common/constants/projects'
import { pageContentTextSmall, pageTitleTextSmall } from '../common/styles/text'
import { blue1 } from '../common/styles/colors'

const projectPreviewRoot = style(
  csstips.vertical,
  csstips.verticallySpaced(px(13)),
  {
    transition: 'box-shadow .2s',
    marginBottom: px(10),
    boxShadow: `0px 0px 0px ${blue1.toHexString()}`,
    borderRadius: px(24),
  }
)

const projectPreviewImage = (imgUrl: string) => style(
  csstips.width(px(175)),
  csstips.height(px(175)),
  { 
    borderRadius: px(24),
    backgroundImage: csx.url(imgUrl)
  }
)

const projectPreviewTextContainer = style(
  csstips.vertical,
  csstips.verticallySpaced(px(5))
)

const projectNameText = style(
  pageTitleTextSmall,
  {
    textAlign: 'center'
  }
)

const projectPreviewDescText = style(
  csstips.inlineBlock,
  pageContentTextSmall,
  csstips.width(px(169)),
  {
    minWidth: px(169),
    textAlign: 'center',
  }
)

const projectPreviewLink = style({
  color: blue1.toHexString(),
  textDecoration: 'none',
  $nest: {
    '&:hover': {
      $nest: {
        [`.${projectNameText}`]: {
          textDecoration: 'underline'
        },
        [`.${projectPreviewRoot}`]: {
          boxShadow: `0px 0px 10px ${blue1.toHexString()}`
        }
      }
    }
  }
})

interface ProjectPreviewProps {
  project: Project
}

export function ProjectPreview(props: ProjectPreviewProps) {
  const project = props.project
  return <a className={projectPreviewLink} href={project.url} >
    <div className={projectPreviewRoot}>
      <div className={projectPreviewImage(project.bannerImage)} />
      <div className={projectPreviewTextContainer}>
        <div className={projectNameText}>
          {project.name}
        </div>
        <div className={projectPreviewDescText}>
          {project.desc}
        </div>
      </div>
    </div>
  </a>
}
