import * as csstips from 'csstips'
import { px } from 'csx'
import * as csx from 'csx'
import { style } from 'typestyle'
import { Project } from '../constants/projects'
import { pageContentTextSmall } from '../styles/text'

const projectPreviewRoot = style(
  csstips.vertical,
  csstips.verticallySpaced(px(13))
)

const projectPreviewImage = (imgUrl: string) => style(
  csstips.width(px(175)),
  csstips.height(px(175)),
  { backgroundImage: csx.url(imgUrl) }
)

const projectPreviewDesc = style(
  pageContentTextSmall,
  csstips.width(px(169)),
  csstips.height(px(128)),
  {
    minWidth: px(169),
    minHeight: px(128),
    textAlign: 'center'
  }
)

interface ProjectPreviewProps {
  project: Project
}

export function ProjectPreview(props: ProjectPreviewProps) {
  const project = props.project
  return <div className={projectPreviewRoot}>
    <a href={project.url} >
      <div className={projectPreviewImage(project.img)} />
    </a>
    <div className={projectPreviewDesc}>
      {project.desc}
    </div>
  </div>
}
