import { type Project } from '../../types/project'
import './styles.css'

interface Props {
  project: Project
}

export function ProjectCard({ project }: Props) {
  return (
    <article className="project-card">
      <h3>{project.title}</h3>
      <p>{project.description}</p>

      <ul>
        {project.techs.map(tech => (
          <li key={tech}>{tech}</li>
        ))}
      </ul>

      <a href={project.githubUrl} target="_blank" rel="noreferrer noopener">
        Ver no GitHub →
      </a>
    </article>
  )
}
