import { motion } from 'framer-motion'
import { NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import './about.css'

const skillCategories = [
  {
    titleKey: 'about.cat.backend',
    skills: ['Java', 'Spring Boot', 'C# / .NET', 'Python', 'REST APIs', 'JWT']
  },
  {
    titleKey: 'about.cat.frontend',
    skills: ['React', 'TypeScript', 'HTML5 / CSS3', 'Framer Motion']
  },
  {
    titleKey: 'about.cat.database',
    skills: ['PostgreSQL', 'SQL Server', 'MySQL', 'Entity Framework']
  },
  {
    titleKey: 'about.cat.tools',
    skills: ['Docker', 'Git & GitHub', 'n8n / Webhooks', 'Swagger / OpenAPI']
  }
]

export default function About() {
  const { t } = useTranslation()

  return (
    <section className="about">
      {/* HERO */}
      <motion.header
        className="about-hero"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1>{t('about.title')}</h1>
        <span>{t('about.subtitle')}</span>
      </motion.header>

      {/* BIO */}
      <motion.section
        className="about-section"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2>{t('about.whoTitle')}</h2>
        <p dangerouslySetInnerHTML={{ __html: t('about.whoP1') }} />
        <p dangerouslySetInnerHTML={{ __html: t('about.whoP2') }} />
        <p dangerouslySetInnerHTML={{ __html: t('about.whoP3') }} />
      </motion.section>

      {/* SKILLS POR CATEGORIA */}
      <motion.section
        className="about-section"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <h2>{t('about.skillsTitle')}</h2>

        <div className="skills-categories">
          {skillCategories.map(cat => (
            <div key={cat.titleKey} className="skill-category">
              <h3>{t(cat.titleKey)}</h3>
              <div className="skills-grid">
                {cat.skills.map(skill => (
                  <motion.span
                    key={skill}
                    className="skill"
                    whileHover={{ scale: 1.06 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.section>

      {/* TIMELINE */}
      <motion.section
        className="about-section"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2>{t('about.expTitle')}</h2>

        <div className="timeline">
          <div className="timeline-item">
            <span className="dot" />
            <div>
              <h3>{t('about.exp1Title')}</h3>
              <p>{t('about.exp1Desc')}</p>
            </div>
          </div>

          <div className="timeline-item">
            <span className="dot" />
            <div>
              <h3>{t('about.exp2Title')}</h3>
              <p>{t('about.exp2Desc')}</p>
            </div>
          </div>

          <div className="timeline-item">
            <span className="dot" />
            <div>
              <h3>{t('about.exp3Title')}</h3>
              <p>{t('about.exp3Desc')}</p>
            </div>
          </div>

          <div className="timeline-item">
            <span className="dot" />
            <div>
              <h3>{t('about.exp4Title')}</h3>
              <p>{t('about.exp4Desc')}</p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* APPROACH */}
      <motion.section
        className="about-section"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2>{t('about.approachTitle')}</h2>
        <div className="approach-grid">
          <div className="approach-card">
            <div className="approach-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
            </div>
            <h3>{t('about.approach1Title')}</h3>
            <p>{t('about.approach1Desc')}</p>
          </div>
          <div className="approach-card">
            <div className="approach-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
            </div>
            <h3>{t('about.approach2Title')}</h3>
            <p>{t('about.approach2Desc')}</p>
          </div>
          <div className="approach-card">
            <div className="approach-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
            </div>
            <h3>{t('about.approach3Title')}</h3>
            <p>{t('about.approach3Desc')}</p>
          </div>
        </div>
      </motion.section>

      {/* CTA */}
      <motion.section
        className="about-cta"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
      >
        <h2>{t('about.ctaTitle')}</h2>
        <span>{t('about.ctaDesc')}</span>
        <br />
        <NavLink to="/contact" className="cta-btn">
          {t('about.ctaBtn')} →
        </NavLink>
      </motion.section>
    </section>
  )
}
