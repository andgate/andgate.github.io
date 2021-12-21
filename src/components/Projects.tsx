import { style } from 'typestyle'
import { pageTitleText } from '../styles/text'
import * as csstips from 'csstips'
import { px } from 'csx'
import { PROJECT_LIST } from '../constants/projects'
import { ProjectPreview } from './ProjectPreview'

const projectsRoot = style(
  csstips.vertical,
  csstips.verticallySpaced(px(34)),
  { paddingTop: px(26) }
)

const projectsTitleContainer = style(
  csstips.centerCenter,
)

const projectsTitle = style(pageTitleText)

const projectListContainer = style(
  csstips.horizontal,
  csstips.centerJustified,
  csstips.horizontallySpaced(px(30))
)

export function Projects() {
  return <div className={projectsRoot}>
    <div className={projectsTitleContainer}>
      <div className={projectsTitle}>Projects</div>
    </div>
    <div className={projectListContainer}>
      {PROJECT_LIST.map((project) => <ProjectPreview project={project} />)}
    </div>
  </div>
}