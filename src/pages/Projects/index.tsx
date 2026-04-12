import { useEffect, useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import type { Variants } from 'framer-motion'
import { useTranslation } from 'react-i18next'

type ProjectItem = {
  title: string
  description: string
  techs: string[]
  github: string
  images: string[]
  private?: boolean
}

import { projects } from './projects'
import './projects.css'

const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12
    }
  }
}

const card: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1]
    }
  }
}

export default function Projects() {
  const { t } = useTranslation()
  const [filter, setFilter] = useState('all')

  const allTechs = useMemo(() => {
    const set = new Set<string>()
    projects.forEach(p => p.techs.forEach(tech => set.add(tech)))
    return Array.from(set).sort()
  }, [])

  const filtered = filter === 'all'
    ? projects
    : projects.filter(p => p.techs.some(tech => tech === filter))

  return (
    <section className="projects">
      <header className="projects-header">
        <h1>{t('projects.title')}</h1>
        <p>{t('projects.subtitle')}</p>
      </header>

      {/* FILTER */}
      <div className="projects-filters">
        <button
          className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
          onClick={() => setFilter('all')}
        >
          {t('projects.filterAll')}
        </button>
        {allTechs.map(tech => (
          <button
            key={tech}
            className={`filter-btn ${filter === tech ? 'active' : ''}`}
            onClick={() => setFilter(tech)}
          >
            {tech}
          </button>
        ))}
      </div>

      <motion.div
        className="projects-grid"
        variants={container}
        initial="hidden"
        animate="show"
        key={filter}
      >
        {filtered.map(project => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </motion.div>

      {filtered.length === 0 && (
        <p className="projects-empty">Nenhum projeto com essa tecnologia.</p>
      )}
    </section>
  )
}

function ProjectCard({ project }: { project: ProjectItem }) {
  const { t } = useTranslation()
  const [imgIndex, setImgIndex] = useState(0)
  const [open, setOpen] = useState(false)
  const [imgLoaded, setImgLoaded] = useState(false)
  const hasImages = project.images.length > 0

  useEffect(() => {
    if (!open) return

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
      if (hasImages && e.key === 'ArrowRight' && project.images.length > 1) next()
      if (hasImages && e.key === 'ArrowLeft' && project.images.length > 1) prev()
    }

    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKeyDown)

    return () => {
      document.body.style.overflow = prevOverflow
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [open, hasImages, project.images.length])

  useEffect(() => {
    if (project.images.length === 0) {
      setImgIndex(0)
    } else if (imgIndex >= project.images.length) {
      setImgIndex(0)
    }
  }, [project.images, imgIndex])

  function next() {
    if (!hasImages) return
    setImgLoaded(false)
    setImgIndex(i => (i + 1) % project.images.length)
  }

  function prev() {
    if (!hasImages) return
    setImgLoaded(false)
    setImgIndex(i => (i - 1 + project.images.length) % project.images.length)
  }

  return (
    <>
      <motion.article
        className="project-card"
        variants={card}
        whileHover={{ scale: 1.02 }}
      >
        {/* CAROUSEL */}
        <div className="carousel">
          {hasImages ? (
            <>
              {!imgLoaded && <div className="carousel-skeleton skeleton" />}
              <img
                src={project.images[imgIndex]}
                alt={project.title}
                loading="lazy"
                onLoad={() => setImgLoaded(true)}
                style={{ opacity: imgLoaded ? 1 : 0 }}
              />
            </>
          ) : (
            <div className="carousel-placeholder" aria-label={t('projects.noImage')}>
              {t('projects.noImage')}
            </div>
          )}

          {hasImages && project.images.length > 1 && (
            <>
              <button className="arrow left" onClick={e => { e.stopPropagation(); prev() }} aria-label="Imagem anterior">‹</button>
              <button className="arrow right" onClick={e => { e.stopPropagation(); next() }} aria-label="Próxima imagem">›</button>
              <div className="carousel-dots">
                {project.images.map((_, i) => (
                  <span key={i} className={`dot-indicator ${i === imgIndex ? 'active' : ''}`} />
                ))}
              </div>
            </>
          )}

          {hasImages && (
            <button className="view-btn" onClick={() => setOpen(true)} aria-label="Ampliar imagem">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
              </svg>
            </button>
          )}
        </div>

        <div className="card-title-row">
          <h2>{project.title}</h2>
          {project.private && <span className="private-badge">Privado</span>}
        </div>
        <p>{project.description}</p>

        <div className="techs">
          {project.techs.map((tech: string) => (
            <span key={tech}>{tech}</span>
          ))}
        </div>

        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          className="github-link"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
          {project.private ? 'Ver meu GitHub →' : `${t('projects.viewGithub')} →`}
        </a>
      </motion.article>

      {/* MODAL */}
      {open && hasImages && (
        <div className="modal-backdrop" onClick={() => setOpen(false)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <img src={project.images[imgIndex]} alt={project.title} />

            {project.images.length > 1 && (
              <>
                <button className="arrow left" onClick={e => { e.stopPropagation(); prev() }} aria-label="Imagem anterior">‹</button>
                <button className="arrow right" onClick={e => { e.stopPropagation(); next() }} aria-label="Próxima imagem">›</button>
              </>
            )}

            <button className="close-btn" onClick={() => setOpen(false)} aria-label="Fechar">✕</button>
          </div>
        </div>
      )}
    </>
  )
}
