import { NavLink, Outlet, useLocation } from 'react-router-dom'
import { useEffect, useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { AnimatePresence, motion } from 'framer-motion'
import { useTheme } from '../contexts/ThemeContext'
import Footer from '../components/Footer'
import ScrollToTop from '../components/ScrollToTop'
import './dashboard.css'

const pageTransition = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] } },
  exit: { opacity: 0, y: -8, transition: { duration: 0.2 } }
}

const navItems = [
  {
    to: '/',
    end: true,
    labelKey: 'nav.home',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    )
  },
  {
    to: '/about',
    labelKey: 'nav.about',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    )
  },
  {
    to: '/projects',
    labelKey: 'nav.projects',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    )
  },
  {
    to: '/contact',
    labelKey: 'nav.contact',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    )
  }
]

export default function DashboardLayout() {
  const [open, setOpen] = useState(false)
  const [collapsed, setCollapsed] = useState(false)
  const [now, setNow] = useState(() => new Date())
  const { theme, toggleTheme } = useTheme()
  const { t, i18n } = useTranslation()
  const location = useLocation()

  useEffect(() => {
    const id = window.setInterval(() => setNow(new Date()), 30_000)
    return () => window.clearInterval(id)
  }, [])

  const timeLabel = useMemo(() => {
    try {
      return new Intl.DateTimeFormat(i18n.language === 'en' ? 'en-US' : 'pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
      }).format(now)
    } catch {
      const hh = String(now.getHours()).padStart(2, '0')
      const mm = String(now.getMinutes()).padStart(2, '0')
      return `${hh}:${mm}`
    }
  }, [now, i18n.language])

  function closeMobile() {
    setOpen(false)
  }

  function toggleLang() {
    const next = i18n.language === 'pt' ? 'en' : 'pt'
    i18n.changeLanguage(next)
    localStorage.setItem('portfolio-lang', next)
  }

  return (
    <div className="layout">
      <button
        className="menu-btn"
        onClick={() => setOpen(v => !v)}
        aria-label={open ? 'Fechar menu' : 'Abrir menu'}
        aria-expanded={open}
        aria-controls="sidebar-nav"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <line x1="3" y1="6" x2="21" y2="6" />
          <line x1="3" y1="12" x2="21" y2="12" />
          <line x1="3" y1="18" x2="21" y2="18" />
        </svg>
      </button>

      <div
        className={`sidebar-backdrop ${open ? 'show' : ''}`}
        onClick={closeMobile}
        aria-hidden={!open}
      />

      <aside className={`sidebar ${open ? 'open' : ''} ${collapsed ? 'collapsed' : ''}`}>
        <div className="sidebar-top">
          <div className="logo-wrapper">
            <div className="logo-icon">L</div>
            <h2 className="logo">Leandro<span>.dev</span></h2>
          </div>
        </div>

        <div className="sidebar-section-label">{!collapsed && 'Menu'}</div>

        <nav id="sidebar-nav" onClick={closeMobile}>
          {navItems.map(item => (
            <NavLink key={item.to} to={item.to} end={item.end}>
              <span className="nav-ico" aria-hidden="true">{item.icon}</span>
              <span className="nav-label">{t(item.labelKey)}</span>
            </NavLink>
          ))}
        </nav>

        <div className="sidebar-bottom">
          <div className="sidebar-status">
            <span className="status-indicator" />
            <span className="nav-label">{t('home.metrics.available')}</span>
          </div>
        </div>
      </aside>

      <main className="content">
        <header className="topbar" role="banner">
          <div className="topbar-left">
            <button
              className="collapse-btn"
              onClick={() => setCollapsed(v => !v)}
              aria-label={collapsed ? 'Expandir menu lateral' : 'Reduzir menu lateral'}
              title={collapsed ? 'Expandir menu lateral' : 'Reduzir menu lateral'}
              type="button"
            >
              <span className={`collapse-ico ${collapsed ? 'is-collapsed' : ''}`} aria-hidden="true">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="15 18 9 12 15 6" />
                </svg>
              </span>
            </button>

            <span className="topbar-title">{t('topbar.portfolio')}</span>
          </div>

          <div className="topbar-right">
            <button
              className="topbar-control lang-toggle"
              onClick={toggleLang}
              aria-label={i18n.language === 'pt' ? 'Switch to English' : 'Mudar para Português'}
              title={i18n.language === 'pt' ? 'English' : 'Português'}
              type="button"
            >
              {i18n.language === 'pt' ? 'EN' : 'PT'}
            </button>

            <button
              className="topbar-control"
              onClick={toggleTheme}
              aria-label={theme === 'dark' ? 'Ativar tema claro' : 'Ativar tema escuro'}
              title={theme === 'dark' ? 'Tema claro' : 'Tema escuro'}
              type="button"
            >
              {theme === 'dark' ? (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="5" />
                  <line x1="12" y1="1" x2="12" y2="3" />
                  <line x1="12" y1="21" x2="12" y2="23" />
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                  <line x1="1" y1="12" x2="3" y2="12" />
                  <line x1="21" y1="12" x2="23" y2="12" />
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                </svg>
              ) : (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                </svg>
              )}
            </button>

            <div className="clock" aria-label={`Horário atual: ${timeLabel}`}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
              <span className="clock-text">{timeLabel}</span>
            </div>
          </div>
        </header>

        <div className="page">
          <AnimatePresence mode="wait">
            <motion.div
              key={location.pathname}
              {...pageTransition}
            >
              <Outlet />
            </motion.div>
          </AnimatePresence>
        </div>

        <Footer />
        <ScrollToTop />
      </main>
    </div>
  )
}
