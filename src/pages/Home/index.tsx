import { useState } from 'react'
import { motion } from 'framer-motion'
import type { Variants } from 'framer-motion'
import { NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import TypingAnimation from '@/components/TypingAnimation'
import hashtag from '@/assets/certificates/hashtag.png'
import ciber from '@/assets/certificates/ciber.png'
import tetra from '@/assets/certificates/tetra.png'
import udemy1 from '@/assets/certificates/udemy1.png'
import udemy2 from '@/assets/certificates/udemy2.png'
import seguranca from '@/assets/certificates/seguranca.png'
import javaCert from '@/assets/certificates/java_certificado.png'
import restaurantFrente from '@/assets/projetos/gestao/dashboard.png'
import restaurantCardapio from '@/assets/projetos/gestao/cardapio-cliente.png'
import restaurantAmbiente from '@/assets/projetos/gestao/delivery.png'
import restaurantProduto from '@/assets/projetos/gestao/areas.png'
import './home.css'

const section: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number]
    }
  }
}

const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } }
}

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } }
}

const certificates = [
  { src: seguranca, alt: 'Certificado Segurança da Informação e Privacidade de Dados - ISO 27001/27701 - BMI' },
  { src: javaCert, alt: 'Certificado Java' },
  { src: hashtag, alt: 'Certificado Hashtag - Python' },
  { src: ciber, alt: 'Certificado Ciber Segurança' },
  { src: tetra, alt: 'Certificado Tetra' },
  { src: udemy1, alt: 'Certificado Udemy - Desenvolvimento Web' },
  { src: udemy2, alt: 'Certificado Udemy - Back-end' }
]

export default function Home() {
  const { t } = useTranslation()
  const roles = t('home.roles', { returnObjects: true }) as string[]
  const testimonials = t('testimonials.items', { returnObjects: true }) as Array<{
    name: string
    role: string
    text: string
  }>

  const [certOpen, setCertOpen] = useState<number | null>(null)

  return (
    <motion.main
      className="home"
      initial="hidden"
      animate="show"
      variants={section}
    >
      {/* HERO */}
      <section className="home-hero">
        <div className="hero-badge">
          <span className="status-dot" />
          {t('home.metrics.available')}
        </div>

        <h1>
          {t('home.heroTitle1')}
          <span className="gradient-text">{t('home.heroTitle2')}</span>
        </h1>

        <div className="hero-typing">
          <TypingAnimation strings={roles} speed={70} pause={2500} />
        </div>

        <p className="hero-desc">{t('home.heroDesc')}</p>

        <div className="hero-metrics">
          <div className="metric">
            <strong>{t('home.metrics.projects')}</strong>
            <span>Entregues</span>
          </div>
          <div className="metric-divider" />
          <div className="metric">
            <strong>{t('home.metrics.stack')}</strong>
            <span>Stack principal</span>
          </div>
          <div className="metric-divider" />
          <div className="metric">
            <strong>Clean Arch</strong>
            <span>Padrão adotado</span>
          </div>
        </div>

        <div className="hero-actions">
          <NavLink to="/projects" className="hero-btn primary">
            {t('home.viewProjects')} →
          </NavLink>
          <NavLink to="/contact" className="hero-btn secondary">
            {t('contact.title')} →
          </NavLink>
        </div>
      </section>

      {/* FEATURED PROJECT - RESTAURANT */}
      <motion.section
        className="home-section"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={stagger}
      >
        <motion.h2 variants={fadeUp}>{t('home.featuredTitle')}</motion.h2>

        <motion.div className="featured-card" variants={fadeUp}>
          <div className="featured-gallery">
            <div className="featured-image-main">
              <img src={restaurantFrente} alt="Dashboard operacional" loading="lazy" />
              <div className="featured-badge">Destaque</div>
            </div>
            <div className="featured-thumbs">
              <img src={restaurantCardapio} alt="Cardápio digital" loading="lazy" />
              <img src={restaurantAmbiente} alt="Painel de delivery" loading="lazy" />
              <img src={restaurantProduto} alt="Áreas de entrega" loading="lazy" />
            </div>
          </div>
          <div className="featured-info">
            <h3>{t('home.featured.title')}</h3>
            <p>{t('home.featured.desc')}</p>
            <div className="featured-techs">
              {['Java 17', 'Spring Boot', 'React', 'TypeScript', 'PostgreSQL', 'Baileys', 'Gemini AI', 'WebSocket'].map(tech => (
                <span key={tech}>{tech}</span>
              ))}
            </div>
            <div className="featured-results">
              <div className="result-item">
                <strong>IA</strong>
                <span>{t('home.featured.result1')}</span>
              </div>
              <div className="result-item">
                <strong>PIX</strong>
                <span>{t('home.featured.result2')}</span>
              </div>
              <div className="result-item">
                <strong>Real-time</strong>
                <span>{t('home.featured.result3')}</span>
              </div>
            </div>
            <div className="featured-links">
              <NavLink to="/projects" className="featured-link">
                {t('home.viewProjects')} →
              </NavLink>
            </div>
          </div>
        </motion.div>
      </motion.section>

      {/* CERTIFICATES */}
      <motion.section
        className="home-section"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={stagger}
      >
        <motion.h2 variants={fadeUp}>{t('home.certificates')}</motion.h2>

        <div className="certificates">
          {certificates.map((cert, i) => (
            <motion.div
              key={cert.alt}
              className="certificate-card"
              variants={fadeUp}
              onClick={() => setCertOpen(i)}
              role="button"
              tabIndex={0}
              onKeyDown={e => e.key === 'Enter' && setCertOpen(i)}
              aria-label={`Expandir ${cert.alt}`}
            >
              <img src={cert.src} alt={cert.alt} loading="lazy" />
              <div className="cert-expand-hint">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
                </svg>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* CERTIFICATE MODAL */}
      {certOpen !== null && (
        <div className="cert-modal-backdrop" onClick={() => setCertOpen(null)}>
          <div className="cert-modal-content" onClick={e => e.stopPropagation()}>
            <img src={certificates[certOpen].src} alt={certificates[certOpen].alt} />

            {certificates.length > 1 && (
              <>
                <button
                  className="cert-modal-arrow left"
                  onClick={() => setCertOpen((certOpen - 1 + certificates.length) % certificates.length)}
                  aria-label="Certificado anterior"
                >‹</button>
                <button
                  className="cert-modal-arrow right"
                  onClick={() => setCertOpen((certOpen + 1) % certificates.length)}
                  aria-label="Próximo certificado"
                >›</button>
              </>
            )}

            <button className="cert-modal-close" onClick={() => setCertOpen(null)} aria-label="Fechar">✕</button>

            <div className="cert-modal-counter">
              {certOpen + 1} / {certificates.length}
            </div>
          </div>
        </div>
      )}

      {/* SKILLS */}
      <motion.section
        className="home-section"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={stagger}
      >
        <motion.h2 variants={fadeUp}>{t('home.skills')}</motion.h2>

        <div className="skills">
          {[
            { name: 'Java', icon: '☕' },
            { name: 'Spring Boot', icon: '🍃' },
            { name: 'React', icon: '⚛️' },
            { name: 'TypeScript', icon: '📘' },
            { name: 'Python', icon: '🐍' },
            { name: 'PostgreSQL', icon: '🐘' },
            { name: 'REST APIs', icon: '🔗' },
            { name: 'n8n / Webhooks', icon: '⚡' },
            { name: 'Docker', icon: '🐳' },
            { name: 'Git', icon: '📦' },
            { name: '.NET / C#', icon: '⚙️' },
            { name: 'SQL Server', icon: '🗄️' }
          ].map(skill => (
            <motion.span key={skill.name} className="skill" variants={fadeUp} whileHover={{ scale: 1.05, y: -2 }}>
              <span className="skill-icon">{skill.icon}</span>
              {skill.name}
            </motion.span>
          ))}
        </div>
      </motion.section>

      {/* TESTIMONIALS */}
      <motion.section
        className="home-section"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={stagger}
      >
        <motion.h2 variants={fadeUp}>{t('testimonials.title')}</motion.h2>

        <div className="testimonials">
          {testimonials.map((item, i) => (
            <motion.div key={i} className="testimonial-card" variants={fadeUp}>
              <div className="testimonial-quote">"</div>
              <p>{item.text}</p>
              <div className="testimonial-author">
                <div className="testimonial-avatar">
                  {item.name.charAt(0)}
                </div>
                <div>
                  <strong>{item.name}</strong>
                  <span>{item.role}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* CTA */}
      <motion.section
        className="home-cta"
        initial={{ opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
      >
        <h2>{t('home.ctaTitle')}</h2>
        <span>{t('home.ctaDesc')}</span>
        <br />
        <NavLink to="/projects" className="cta-btn">
          {t('home.ctaBtn')} →
        </NavLink>
      </motion.section>
    </motion.main>
  )
}
