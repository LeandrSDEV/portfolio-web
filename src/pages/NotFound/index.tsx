import { motion } from 'framer-motion'
import { NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import './notfound.css'

export default function NotFound() {
  const { t } = useTranslation()

  return (
    <motion.section
      className="not-found"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="not-found-content">
        <span className="not-found-code">{t('notFound.title')}</span>
        <h1>{t('notFound.subtitle')}</h1>
        <p>{t('notFound.desc')}</p>

        <NavLink to="/" className="not-found-btn">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="19" y1="12" x2="5" y2="12" />
            <polyline points="12 19 5 12 12 5" />
          </svg>
          {t('notFound.backHome')}
        </NavLink>
      </div>
    </motion.section>
  )
}
