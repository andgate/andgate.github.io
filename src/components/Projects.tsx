import { style } from 'typestyle'
import { pageTitleText } from '../common/styles/text'
import * as csstips from 'csstips'
import { px } from 'csx'
import { PROJECT_LIST } from '../common/constants/projects'
import { ProjectPreview } from './ProjectPreview'

const projectsRoot = style(csstips.vertical, csstips.verticallySpaced(px(17)), {
  paddingTop: px(26),
  marginBottom: px(10),
  marginLeft: px(30),
  marginRight: px(30)
})

const projectPreviewWrapper = style(csstips.selfStretch, {
  marginLeft: px(15),
  marginRight: px(15),
  marginBottom: px(13)
})

const projectsTitleContainer = style(csstips.centerCenter)

const projectsTitle = style(pageTitleText)

const projectListContainer = style(
  csstips.horizontal,
  csstips.start,
  csstips.centerJustified,
  csstips.wrap
)

export function Projects() {
  return (
    <div className={projectsRoot}>
      <div className={projectsTitleContainer}>
        <div className={projectsTitle}>Projects</div>
      </div>
      <div className={projectListContainer}>
        {PROJECT_LIST.map((project, i) => (
          // NOTE: project list is static, so its fine to use index as key
          <div key={i} className={projectPreviewWrapper}>
            <ProjectPreview project={project} />
          </div>
        ))}
      </div>
    </div>
  )
}
