import {
  useEffect,
  useMemo,
  useState,
  type CSSProperties,
  type ReactNode,
} from 'react'
import { AnimatePresence, motion, useScroll, useSpring } from 'framer-motion'
import {
  ArrowUpRight,
  BadgeCheck,
  BarChart3,
  ChevronRight,
  Code2,
  Database,
  Github,
  Linkedin,
  Mail,
  Menu,
  MessageCircle,
  MonitorSmartphone,
  QrCode,
  Rocket,
  Server,
  ShieldCheck,
  Sparkles,
  Store,
  Workflow,
  X,
} from 'lucide-react'

import './styles/portfolio.css'

import agsHome from '@/assets/projetos/ags/home.png'
import jsTela from '@/assets/projetos/jsproject/tela1.png'
import ecoHome from '@/assets/projetos/ecodoar/home.png'
import construcaoHome from '@/assets/projetos/construcao/home.png'
import firstApiHome from '@/assets/projetos/apifirst/Screenshot_1.png'
import pokemonHome from '@/assets/projetos/listpokemon/Screenshot_1.png'
import contatosHome from '@/assets/projetos/contatomvc/Screenshot_1.png'

import certHashtag from '@/assets/certificates/hashtag.png'
import certCiber from '@/assets/certificates/ciber.png'
import certTetra from '@/assets/certificates/tetra.png'
import certUdemy1 from '@/assets/certificates/udemy1.png'
import certUdemy2 from '@/assets/certificates/udemy2.png'

import lanchoneteFrente from '@/assets/featured/lanchonete-frente.png'
import lanchoneteCardapio from '@/assets/featured/lanchonete-cardapio.png'
import lanchoneteAmbiente from '@/assets/featured/lanchonete-ambiente.jpeg'
import lanchoneteHamburguer from '@/assets/featured/lanchonete-hamburguer.jpeg'
import embaixadoresVisual from '@/assets/featured/embaixadores.svg'

type NavItem = {
  id: string
  label: string
}

type Highlight = {
  icon: typeof Server
  title: string
  description: string
}

type SkillGroup = {
  icon: typeof Server
  title: string
  items: string[]
}

type FeaturedProject = {
  tag: string
  title: string
  summary: string
  description: string
  bullets: string[]
  techs: string[]
  image: string
  secondaryImage?: string
  repo?: string
  repoLabel?: string
  extraLink?: string
  extraLabel?: string
  accent: string
}

type SecondaryProject = {
  title: string
  description: string
  techs: string[]
  category: string
  link: string
  image?: string
  featuredText?: string
}

type Certificate = {
  label: string
  image: string
  issuer: string
  focus: string
}

const NAV_ITEMS: NavItem[] = [
  { id: 'home', label: 'Início' },
  { id: 'about', label: 'Sobre' },
  { id: 'experience', label: 'Experiência' },
  { id: 'projects', label: 'Projetos' },
  { id: 'certificates', label: 'Certificados' },
  { id: 'contact', label: 'Contato' },
]

const HIGHLIGHTS: Highlight[] = [
  {
    icon: Server,
    title: 'Java e Spring Boot',
    description: 'APIs, regras de negócio, autenticação e integrações com foco em robustez.',
  },
  {
    icon: Workflow,
    title: 'n8n e Python',
    description: 'Automação de fluxos, integrações, rotinas operacionais e IA aplicada.',
  },
  {
    icon: ShieldCheck,
    title: 'AWS, JWT e Keycloak',
    description: 'Cloud, segurança, controle de acesso e arquitetura pronta para crescer.',
  },
]

const SKILL_GROUPS: SkillGroup[] = [
  {
    icon: Code2,
    title: 'Back-end',
    items: ['Java', 'Spring Boot', 'Python', 'JWT'],
  },
  {
    icon: Workflow,
    title: 'Automação',
    items: ['n8n', 'integrações', 'APIs REST', 'processos operacionais'],
  },
  {
    icon: Database,
    title: 'Dados e cloud',
    items: ['PostgreSQL', 'AWS', 'modelagem', 'deploy'],
  },
  {
    icon: BarChart3,
    title: 'Segurança e monitoramento',
    items: ['Keycloak', 'Zabbix', 'observabilidade', 'acesso'],
  },
]

const EXPERIENCE_PILLARS = [
  {
    icon: Server,
    title: 'APIs e serviços',
    text: 'Construção de back-end com Java, Spring Boot e contratos claros para integração.',
  },
  {
    icon: Workflow,
    title: 'Automação real',
    text: 'Fluxos com n8n e Python para reduzir trabalho manual e acelerar operação.',
  },
  {
    icon: Database,
    title: 'Persistência e cloud',
    text: 'PostgreSQL, estrutura de dados e apoio em deploy, ambiente e escalabilidade.',
  },
  {
    icon: ShieldCheck,
    title: 'Segurança e visibilidade',
    text: 'JWT, Keycloak e Zabbix para autenticação, controle e monitoramento.',
  },
]

const FEATURED_PROJECTS: FeaturedProject[] = [
  {
    tag: 'Projeto principal',
    title: 'DECODE Lanchonete',
    summary: 'Sistema completo para operação, cardápio, delivery e gestão.',
    description:
      'Meu projeto mais forte. Ele mostra visão de produto, operação real, backend estruturado e interface pronta para uso diário.',
    bullets: [
      'Cardápio público, pedidos por mesa e delivery em um fluxo único',
      'Cálculo de taxa, acompanhamento de status e gestão operacional',
      'Painéis administrativos, usuários, áreas de entrega e cardápio',
      'Projeto pensado para uso real, não apenas para vitrine técnica',
    ],
    techs: ['Java', 'Spring Boot', 'PostgreSQL', 'React', 'TypeScript', 'JWT'],
    image: lanchoneteCardapio,
    secondaryImage: lanchoneteFrente,
    repo: 'https://github.com/LeandrSDEV/RestaurantFrontend',
    repoLabel: 'Ver front-end',
    extraLink: 'https://github.com/LeandrSDEV/RestaurantController',
    extraLabel: 'Ver back-end',
    accent: '#38bdf8',
  },
  {
    tag: 'Projeto de apoio comercial',
    title: 'Embaixadores / Vitrine de Parceiros',
    summary: 'Landing pensada para apresentação, conversão e posicionamento.',
    description:
      'Projeto criado para valorizar o ecossistema da plataforma principal, reforçando narrativa visual, proposta comercial e credibilidade.',
    bullets: [
      'Página única com navegação suave e seções bem definidas',
      'Apresentação dos módulos, benefícios e proposta de parceria',
      'Estrutura visual focada em clareza e conversão',
      'Complementa e fortalece a leitura do projeto principal',
    ],
    techs: ['React', 'TypeScript', 'UX', 'landing page', 'storytelling visual'],
    image: embaixadoresVisual,
    secondaryImage: lanchoneteAmbiente,
    repo: 'https://github.com/LeandrSDEV/RestaurantFrontend',
    repoLabel: 'Ver base visual',
    extraLink: 'https://github.com/LeandrSDEV/portfolio-api',
    extraLabel: 'Ver stack base',
    accent: '#f59e0b',
  },
]

const SECONDARY_PROJECTS: SecondaryProject[] = [
  {
    title: 'Portfolio Blazor + C# API',
    description: 'Base técnica anterior do meu portfólio, organizada em API e interface própria.',
    techs: ['Blazor', 'C#', 'ASP.NET Core', 'API REST'],
    category: 'Base técnica',
    link: 'https://github.com/LeandrSDEV/portfolio-api',
    featuredText: 'Projeto usado para estruturar minha apresentação técnica inicial.',
  },
  {
    title: 'AGS Website',
    description: 'Website institucional com foco em apresentação profissional e navegação clara.',
    techs: ['ASP.NET Core MVC', 'Razor', 'JavaScript'],
    category: 'Institucional',
    link: 'https://github.com/LeandrSDEV/AGSWebsite',
    image: agsHome,
  },
  {
    title: 'JSProject Automação',
    description: 'Projeto voltado a processamento de dados, comparação de arquivos e produtividade.',
    techs: ['.NET', 'Blazor Server', 'Web API', 'SQL Server'],
    category: 'Automação',
    link: 'https://github.com/LeandrSDEV/JS_Services',
    image: jsTela,
  },
  {
    title: 'EcoDoar',
    description: 'Projeto social com foco em doações e usabilidade simples.',
    techs: ['HTML', 'CSS', 'JavaScript'],
    category: 'Projeto social',
    link: 'https://github.com/LeandrSDEV/Ecodoar',
    image: ecoHome,
  },
  {
    title: 'JSService Website',
    description: 'Website para negócio local com catálogo, presença digital e estrutura comercial.',
    techs: ['ASP.NET Core MVC', 'MySQL', 'Entity Framework'],
    category: 'Negócio local',
    link: 'https://github.com/LeandrSDEV/construcao',
    image: construcaoHome,
  },
  {
    title: 'First API — Buscar por CEP',
    description: 'Projeto para prática de endpoints, documentação e persistência.',
    techs: ['ASP.NET Core Web API', 'Swagger', 'SQL Server'],
    category: 'API',
    link: 'https://github.com/LeandrSDEV/First_API',
    image: firstApiHome,
  },
  {
    title: 'Lista Pokémon',
    description: 'Front-end leve e interativo com foco em experiência e responsividade.',
    techs: ['HTML', 'CSS', 'JavaScript'],
    category: 'Front-end',
    link: 'https://github.com/LeandrSDEV/projeto-listagem-pokemon',
    image: pokemonHome,
  },
  {
    title: 'Contatos MVC',
    description: 'CRUD para consolidar estrutura, persistência e fluxo clássico de aplicação.',
    techs: ['ASP.NET Core MVC', 'SQL Server', 'Entity Framework'],
    category: 'CRUD',
    link: 'https://github.com/LeandrSDEV/ListaContatosMVC',
    image: contatosHome,
  },
]

const CERTIFICATES: Certificate[] = [
  { label: 'Hashtag', image: certHashtag, issuer: 'Hashtag', focus: 'Desenvolvimento e prática aplicada' },
  { label: 'Ciber', image: certCiber, issuer: 'Ciber', focus: 'Formação complementar' },
  { label: 'Tetra', image: certTetra, issuer: 'Tetra', focus: 'Capacitação técnica' },
  { label: 'Udemy 01', image: certUdemy1, issuer: 'Udemy', focus: 'Estudo contínuo' },
  { label: 'Udemy 02', image: certUdemy2, issuer: 'Udemy', focus: 'Aprofundamento prático' },
]

const CONTACTS = {
  github: 'https://github.com/LeandrSDEV',
  linkedin: 'https://www.linkedin.com/in/leandro-de-jesus-santos-128478391/',
  email: 'mailto:leandro22.js@gmail.com',
  whatsapp: 'https://wa.me/5579988012359',
}

const transitionEase: [number, number, number, number] = [0.22, 1, 0.36, 1]

function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

function RevealWords({
  text,
  className,
}: {
  text: string
  className?: string
}) {
  const words = useMemo(() => text.split(' '), [text])

  return (
    <span className={['reveal-words', className].filter(Boolean).join(' ')}>
      {words.map((word, index) => (
        <span className="reveal-mask" key={`${word}-${index}`}>
          <motion.span
            className="reveal-word"
            initial={{ y: '115%', opacity: 0 }}
            whileInView={{ y: '0%', opacity: 1 }}
            viewport={{ once: false, amount: 0.8 }}
            transition={{ duration: 0.72, delay: index * 0.05, ease: transitionEase }}
          >
            {word}
            {index < words.length - 1 ? '\u00A0' : ''}
          </motion.span>
        </span>
      ))}
    </span>
  )
}

function FadeIn({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode
  delay?: number
  className?: string
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.22 }}
      transition={{ duration: 0.72, delay, ease: transitionEase }}
    >
      {children}
    </motion.div>
  )
}

export default function App() {
  const [activeSection, setActiveSection] = useState('home')
  const [menuOpen, setMenuOpen] = useState(false)
  const [selectedCertificate, setSelectedCertificate] = useState<Certificate | null>(null)

  const { scrollYProgress } = useScroll()
  const progressScale = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 26,
    mass: 0.35,
  })

  useEffect(() => {
    const sections = NAV_ITEMS.map(item => document.getElementById(item.id)).filter(
      Boolean,
    ) as HTMLElement[]

    if (!sections.length) return

    const observer = new IntersectionObserver(
      entries => {
        const visible = entries
          .filter(entry => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]

        if (visible?.target?.id) {
          setActiveSection(visible.target.id)
        }
      },
      {
        threshold: [0.2, 0.35, 0.55],
        rootMargin: '-18% 0px -52% 0px',
      },
    )

    sections.forEach(section => observer.observe(section))

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 960) setMenuOpen(false)
    }

    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  useEffect(() => {
    if (!selectedCertificate) return

    const previousOverflow = document.body.style.overflow
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setSelectedCertificate(null)
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [selectedCertificate])

  return (
    <div className="portfolio-page">
      <motion.div className="scroll-progress" style={{ scaleX: progressScale }} />
      <div className="noise-layer" aria-hidden="true" />
      <div className="aurora aurora-one" aria-hidden="true" />
      <div className="aurora aurora-two" aria-hidden="true" />

      <header className="topbar">
        <div className="container topbar-inner">
          <button className="brand" onClick={() => scrollToSection('home')}>
            <span className="brand-mark">LS</span>
            <span className="brand-copy">
              <strong>Leandro Santos</strong>
              <small>Portfólio • back-end, automação e produto</small>
            </span>
          </button>

          <nav className={`topbar-nav ${menuOpen ? 'is-open' : ''}`}>
            {NAV_ITEMS.map(item => (
              <button
                key={item.id}
                className={`topbar-link ${activeSection === item.id ? 'is-active' : ''}`}
                onClick={() => {
                  scrollToSection(item.id)
                  setMenuOpen(false)
                }}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="topbar-actions">
            <a className="ghost-button desktop-only" href={CONTACTS.github} target="_blank" rel="noreferrer">
              GitHub
              <ArrowUpRight size={16} />
            </a>
            <button className="menu-button mobile-only" onClick={() => setMenuOpen(v => !v)}>
              {menuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </header>

      <main>
        <section id="home" className="hero-section section">
          <div className="container hero-grid">
            <div className="hero-copy">
              <FadeIn>
                <div className="eyebrow">
                  <Sparkles size={16} />
                  Portfólio direto, moderno e focado em valor real
                </div>
              </FadeIn>

              <h1 className="hero-title">
                <RevealWords text="Java, Spring Boot" />
                <RevealWords text="n8n e Python" className="muted-line" />
                <RevealWords text="para produtos reais." className="accent-line" />
              </h1>

              <FadeIn delay={0.08}>
                <p className="hero-description">
                  Desenvolvedor focado em APIs, automação e operação. Trabalho com <strong>Java</strong>,{' '}
                  <strong>Spring Boot</strong>, <strong>n8n</strong>, <strong>Python</strong>,{' '}
                  <strong>PostgreSQL</strong>, <strong>AWS</strong>, <strong>JWT</strong>,{' '}
                  <strong>Keycloak</strong> e <strong>Zabbix</strong> para construir soluções robustas e claras.
                </p>
              </FadeIn>

              <FadeIn delay={0.14}>
                <div className="hero-tags" aria-label="Tecnologias principais">
                  {[
                    'Java',
                    'Spring Boot',
                    'n8n',
                    'Python',
                    'PostgreSQL',
                    'AWS',
                    'JWT',
                    'Keycloak',
                    'Zabbix',
                  ].map(tag => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </FadeIn>

              <FadeIn delay={0.18}>
                <div className="hero-actions">
                  <button className="primary-button" onClick={() => scrollToSection('projects')}>
                    Ver projetos-chave
                    <ChevronRight size={18} />
                  </button>
                  <button className="ghost-button" onClick={() => scrollToSection('certificates')}>
                    Ver certificados
                    <ChevronRight size={16} />
                  </button>
                </div>
              </FadeIn>

              <FadeIn delay={0.22}>
                <div className="hero-metrics">
                  <article>
                    <strong>Foco</strong>
                    <span>Back-end, automação, segurança e observabilidade.</span>
                  </article>
                  <article>
                    <strong>Destaque</strong>
                    <span>DECODE Lanchonete como principal prova de produto e execução.</span>
                  </article>
                  <article>
                    <strong>Perfil</strong>
                    <span>Direto, técnico e orientado a resultado real de operação.</span>
                  </article>
                </div>
              </FadeIn>
            </div>

            <FadeIn delay={0.12} className="hero-visual-wrap">
              <div className="hero-visual">
                <div className="hero-card hero-card-main">
                  <div className="hero-card-label">Projeto principal</div>
                  <img src={lanchoneteCardapio} alt="Interface do projeto DECODE Lanchonete" />
                </div>

                <div className="hero-card hero-card-side hero-card-side-top">
                  <img src={embaixadoresVisual} alt="Visual da vitrine de parceiros e embaixadores" />
                </div>

                <div className="hero-card hero-card-side hero-card-side-bottom">
                  <img src={lanchoneteHamburguer} alt="Visual gastronômico do projeto de lanchonete" />
                </div>

                <div className="floating-chip floating-chip-one">
                  <Store size={16} />
                  Produto real
                </div>
                <div className="floating-chip floating-chip-two">
                  <QrCode size={16} />
                  Operação • delivery • gestão
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        <section id="about" className="section">
          <div className="container section-stack">
            <FadeIn>
              <div className="section-heading">
                <span className="section-kicker">Sobre mim</span>
                <h2>Construo soluções enxutas, visíveis e fáceis de entender.</h2>
                <p>
                  Meu trabalho é unir back-end sólido, automação e uma apresentação clara do produto.
                  Gosto de projetos que precisam funcionar de verdade, com regra de negócio, segurança e boa leitura visual.
                </p>
              </div>
            </FadeIn>

            <div className="about-grid">
              <FadeIn delay={0.06}>
                <article className="glass-card narrative-card">
                  <div className="card-badge">Resumo profissional</div>
                  <p>
                    Tenho perfil voltado a <strong>APIs</strong>, <strong>integrações</strong>,
                    <strong> automação</strong> e <strong>estruturação de produto</strong>. Busco sempre clareza técnica,
                    escalabilidade e experiência consistente para quem usa a solução.
                  </p>
                </article>
              </FadeIn>

              <FadeIn delay={0.12}>
                <article className="glass-card narrative-card accent-card">
                  <div className="card-badge">O que fica claro neste portfólio</div>
                  <ul className="check-list">
                    <li>
                      <BadgeCheck size={16} />
                      Conhecimento explícito em Java, Spring Boot, n8n, Python e PostgreSQL.
                    </li>
                    <li>
                      <BadgeCheck size={16} />
                      Segurança com JWT e Keycloak, além de apoio em AWS e Zabbix.
                    </li>
                    <li>
                      <BadgeCheck size={16} />
                      Projetos com contexto real, especialmente lanchonete e embaixadores.
                    </li>
                  </ul>
                </article>
              </FadeIn>
            </div>

            <div className="skills-grid">
              {SKILL_GROUPS.map((group, index) => {
                const Icon = group.icon
                return (
                  <FadeIn key={group.title} delay={0.05 * index}>
                    <article className="skill-card">
                      <div className="highlight-icon">
                        <Icon size={20} />
                      </div>
                      <h3>{group.title}</h3>
                      <div className="skill-list">
                        {group.items.map(item => (
                          <span key={item}>{item}</span>
                        ))}
                      </div>
                    </article>
                  </FadeIn>
                )
              })}
            </div>

            <div className="highlight-grid">
              {HIGHLIGHTS.map((item, index) => {
                const Icon = item.icon
                return (
                  <FadeIn key={item.title} delay={0.06 * index}>
                    <article className="highlight-card">
                      <div className="highlight-icon">
                        <Icon size={20} />
                      </div>
                      <h3>{item.title}</h3>
                      <p>{item.description}</p>
                    </article>
                  </FadeIn>
                )
              })}
            </div>
          </div>
        </section>

        <section id="experience" className="section">
          <div className="container section-stack">
            <FadeIn>
              <div className="section-heading compact-heading">
                <span className="section-kicker">Experiência e foco</span>
                <h2>Minha experiência se concentra em quatro frentes.</h2>
              </div>
            </FadeIn>

            <div className="pillars-grid">
              {EXPERIENCE_PILLARS.map((item, index) => {
                const Icon = item.icon
                return (
                  <FadeIn key={item.title} delay={index * 0.05}>
                    <article className="pillar-card">
                      <div className="pillar-icon">
                        <Icon size={18} />
                      </div>
                      <h3>{item.title}</h3>
                      <p>{item.text}</p>
                    </article>
                  </FadeIn>
                )
              })}
            </div>

            <div className="journey-grid">
              <FadeIn>
                <article className="glass-card journey-card">
                  <span className="card-badge">Como eu agrego</span>
                  <div className="journey-list">
                    <div>
                      <strong>01</strong>
                      <p>Estruturo backend e integrações com foco em uso real.</p>
                    </div>
                    <div>
                      <strong>02</strong>
                      <p>Automatizo processos com n8n e Python para ganhar eficiência.</p>
                    </div>
                    <div>
                      <strong>03</strong>
                      <p>Reforço segurança, visibilidade e apresentação final do produto.</p>
                    </div>
                  </div>
                </article>
              </FadeIn>

              <FadeIn delay={0.08}>
                <article className="glass-card journey-card spotlight-card">
                  <span className="card-badge">Posicionamento</span>
                  <h3>Perfil técnico com boa leitura de produto.</h3>
                  <p>
                    Meu diferencial está em transformar stack, processo e interface em algo claro para operação,
                    negócio e recrutamento.
                  </p>
                </article>
              </FadeIn>
            </div>
          </div>
        </section>

        <section id="projects" className="section">
          <div className="container section-stack">
            <FadeIn>
              <div className="section-heading">
                <span className="section-kicker">Projetos</span>
                <h2>Os projetos principais aparecem primeiro e com mais contexto.</h2>
                <p>
                  O foco está no que mais importa: impacto, clareza técnica e valor entregue.
                </p>
              </div>
            </FadeIn>

            <div className="featured-stack">
              {FEATURED_PROJECTS.map((project, index) => (
                <FadeIn key={project.title} delay={index * 0.08}>
                  <article
                    className="featured-project"
                    style={{ '--project-accent': project.accent } as CSSProperties}
                  >
                    <div className="featured-copy">
                      <span className="project-tag">{project.tag}</span>
                      <h3>{project.title}</h3>
                      <strong className="featured-summary">{project.summary}</strong>
                      <p>{project.description}</p>

                      <ul className="featured-list">
                        {project.bullets.map(item => (
                          <li key={item}>
                            <ChevronRight size={16} />
                            {item}
                          </li>
                        ))}
                      </ul>

                      <div className="project-techs">
                        {project.techs.map(tech => (
                          <span key={tech}>{tech}</span>
                        ))}
                      </div>

                      <div className="featured-actions">
                        {project.repo && (
                          <a href={project.repo} target="_blank" rel="noreferrer" className="primary-button button-link">
                            {project.repoLabel || 'Ver repositório'}
                            <ArrowUpRight size={16} />
                          </a>
                        )}
                        {project.extraLink && (
                          <a href={project.extraLink} target="_blank" rel="noreferrer" className="ghost-button button-link">
                            {project.extraLabel || 'Abrir referência'}
                            <ArrowUpRight size={16} />
                          </a>
                        )}
                      </div>
                    </div>

                    <div className="featured-visual">
                      <div className="featured-frame featured-frame-main">
                        <img src={project.image} alt={project.title} />
                      </div>
                      {project.secondaryImage && (
                        <div className="featured-frame featured-frame-secondary">
                          <img src={project.secondaryImage} alt={`${project.title} visual complementar`} />
                        </div>
                      )}
                    </div>
                  </article>
                </FadeIn>
              ))}
            </div>

            <FadeIn>
              <div className="section-heading compact-heading secondary-heading">
                <span className="section-kicker">Outros projetos</span>
                <h2>Projetos que ampliam repertório e reforçam consistência.</h2>
              </div>
            </FadeIn>

            <div className="projects-grid">
              {SECONDARY_PROJECTS.map((project, index) => (
                <FadeIn key={project.title} delay={index * 0.03}>
                  <article className="project-card-modern">
                    <div className="project-visual-shell">
                      <span className="project-category">{project.category}</span>
                      {project.image ? (
                        <img src={project.image} alt={project.title} className="project-cover" />
                      ) : (
                        <div className="project-placeholder">
                          <Code2 size={28} />
                          <strong>{project.title}</strong>
                          <span>{project.featuredText}</span>
                        </div>
                      )}
                    </div>

                    <div className="project-content">
                      <h3>{project.title}</h3>
                      <p>{project.description}</p>

                      <div className="project-techs compact-techs">
                        {project.techs.map(tech => (
                          <span key={tech}>{tech}</span>
                        ))}
                      </div>

                      <a href={project.link} target="_blank" rel="noreferrer" className="project-link">
                        Abrir no GitHub
                        <ArrowUpRight size={15} />
                      </a>
                    </div>
                  </article>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        <section id="certificates" className="section">
          <div className="container section-stack">
            <FadeIn>
              <div className="section-heading compact-heading">
                <span className="section-kicker">Certificados</span>
                <h2>Certificados visíveis, clicáveis e fáceis de validar.</h2>
                <p>Clique em qualquer certificado para ampliar.</p>
              </div>
            </FadeIn>

            <div className="certificates-grid">
              {CERTIFICATES.map((certificate, index) => (
                <FadeIn key={certificate.label} delay={index * 0.04}>
                  <button
                    type="button"
                    className="certificate-card-modern certificate-button"
                    onClick={() => setSelectedCertificate(certificate)}
                    aria-label={`Abrir certificado ${certificate.label}`}
                  >
                    <div className="certificate-head">
                      <span>{certificate.label}</span>
                      <Rocket size={16} />
                    </div>
                    <div className="certificate-meta">
                      <strong>{certificate.issuer}</strong>
                      <small>{certificate.focus}</small>
                    </div>
                    <img src={certificate.image} alt={`Certificado ${certificate.label}`} />
                    <div className="certificate-cta">
                      <span>clique para ampliar</span>
                      <ArrowUpRight size={14} />
                    </div>
                  </button>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="section contact-section">
          <div className="container contact-grid">
            <FadeIn>
              <div className="contact-copy">
                <span className="section-kicker">Contato</span>
                <h2>Aberto a oportunidades, freelas e projetos com responsabilidade real.</h2>
                <p>
                  Se você procura alguém com base técnica em back-end, automação e operação, vamos conversar.
                </p>

                <div className="hero-actions contact-actions">
                  <a className="primary-button button-link" href={CONTACTS.whatsapp} target="_blank" rel="noreferrer">
                    WhatsApp
                    <MessageCircle size={18} />
                  </a>
                  <a className="ghost-button button-link" href={CONTACTS.linkedin} target="_blank" rel="noreferrer">
                    LinkedIn
                    <Linkedin size={16} />
                  </a>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.08}>
              <aside className="contact-panel">
                <div className="contact-panel-head">
                  <span>Conexões</span>
                  <Sparkles size={16} />
                </div>

                <a href={CONTACTS.github} target="_blank" rel="noreferrer" className="contact-item">
                  <div>
                    <strong>GitHub</strong>
                    <span>Projetos, código e evolução técnica</span>
                  </div>
                  <Github size={18} />
                </a>

                <a href={CONTACTS.linkedin} target="_blank" rel="noreferrer" className="contact-item">
                  <div>
                    <strong>LinkedIn</strong>
                    <span>Trajetória profissional e networking</span>
                  </div>
                  <Linkedin size={18} />
                </a>

                <a href={CONTACTS.email} className="contact-item">
                  <div>
                    <strong>E-mail</strong>
                    <span>leandro22.js@gmail.com</span>
                  </div>
                  <Mail size={18} />
                </a>
              </aside>
            </FadeIn>
          </div>
        </section>
      </main>

      <AnimatePresence>
        {selectedCertificate && (
          <motion.div
            className="certificate-modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCertificate(null)}
          >
            <motion.div
              className="certificate-modal"
              initial={{ opacity: 0, y: 20, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 16, scale: 0.96 }}
              transition={{ duration: 0.24, ease: transitionEase }}
              onClick={event => event.stopPropagation()}
              role="dialog"
              aria-modal="true"
              aria-label={`Certificado ${selectedCertificate.label}`}
            >
              <div className="certificate-modal-head">
                <div>
                  <span className="section-kicker">{selectedCertificate.issuer}</span>
                  <h3>{selectedCertificate.label}</h3>
                  <p>{selectedCertificate.focus}</p>
                </div>
                <button
                  type="button"
                  className="certificate-close"
                  onClick={() => setSelectedCertificate(null)}
                  aria-label="Fechar certificado"
                >
                  <X size={18} />
                </button>
              </div>

              <div className="certificate-modal-media">
                <img src={selectedCertificate.image} alt={`Certificado ${selectedCertificate.label}`} />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
