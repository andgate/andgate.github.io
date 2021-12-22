import { style } from 'typestyle'
import { pageTitleText } from '../common/styles/text'
import * as csstips from 'csstips'
import { px } from 'csx'
import { PROJECT_LIST } from '../common/constants/projects'
import { ProjectPreview } from './ProjectPreview'

const projectsRoot = style(
  csstips.vertical,
  csstips.verticallySpaced(px(17)),
  {
    paddingTop: px(26),
    marginBottom: px(10)
  }
)

const projectsTitleContainer = style(
  csstips.centerCenter,
)

const projectsTitle = style(pageTitleText)

const projectListContainer = style(
  csstips.horizontal,
  csstips.centerJustified,
  csstips.horizontallySpaced(px(30)),
  csstips.wrap
)

export function Projects() {
  return <div className={projectsRoot}>
    <div className={projectsTitleContainer}>
      <div className={projectsTitle}>Projects</div>
    </div>
    <div className={projectListContainer}>
      {PROJECT_LIST.map((project, i) => <ProjectPreview key={i} project={project} />)}
    </div>
  </div>
}
