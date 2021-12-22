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
  { marginBottom: px(10) }
)

const projectPreviewImage = (imgUrl: string) => style(
  csstips.width(px(175)),
  csstips.height(px(175)),
  { backgroundImage: csx.url(imgUrl) }
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

const projectPreviewLink = style(
  {
    color: blue1.toHexString(),
    textDecoration: 'none',
    $nest: {
      '&:hover': {
        $nest: {
          [`.${projectNameText}`]: {
            textDecoration: 'underline'
          }
        }
      }
    }
  }
)

const projectPreviewDescText = style(
  csstips.inlineBlock,
  pageContentTextSmall,
  csstips.width(px(169)),
  {
    minWidth: px(169),
    textAlign: 'center',
    textDecoration: 'none',
    $nest: {
      '&:hover': {
        textDecoration: 'none !important'
      }
    }
  }
)

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
