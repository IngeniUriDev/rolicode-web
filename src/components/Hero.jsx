import { useState } from 'react';
import {
  FaLaptopCode,
  FaTerminal,
  FaRocket,
  FaCheckCircle,
  FaExternalLinkAlt,
  FaServer,
  FaDatabase,
  FaBolt,
  FaShieldAlt,
  FaCodeBranch
} from 'react-icons/fa';
import {
  SiReact,
  SiSpringboot,
  SiPostgresql,
  SiNodedotjs,
  SiKotlin,
  SiTypescript,
  SiDocker,
  SiSupabase
} from 'react-icons/si';

export default function Hero() {
  const [activeTelemetryTab, setActiveTelemetryTab] = useState('systems'); // 'systems' | 'telemetry'

  const activeSystems = [
    {
      name: 'Kartódromo La Sabaneta',
      domain: 'kartodromo.rolicode.com.mx',
      url: 'https://kartodromo.rolicode.com.mx',
      type: 'Motorsport SaaS & Reservas',
      stack: 'React 19 + Supabase RLS',
      status: 'ONLINE',
      statusColor: 'text-success',
      badge: 'PRODUCCIÓN 🏎️',
      latency: '38ms'
    },
    {
      name: 'Sistema de Citas & Agenda',
      domain: 'citas.rolicode.com.mx',
      url: 'https://citas.rolicode.com.mx',
      type: 'Plataforma SaaS Multi-negocio',
      stack: 'React 19 + Node.js + JWT',
      status: 'ONLINE',
      statusColor: 'text-success',
      badge: 'PRODUCCIÓN 🚀',
      latency: '42ms'
    },
    {
      name: 'Inventario & Logística API',
      domain: 'inventario-api (Spring Boot 4.1)',
      url: 'http://localhost:8080/swagger-ui.html',
      type: 'Microservicio Transaccional',
      stack: 'Java 21 + Supabase Pooler',
      status: 'ACTIVO',
      statusColor: 'text-info',
      badge: 'MICROSERVICIO 📦',
      latency: '24ms'
    }
  ];

  const techStack = [
    { name: 'Java 21', icon: <SiSpringboot className="text-success" /> },
    { name: 'Spring Boot 4', icon: <SiSpringboot className="text-success" /> },
    { name: 'Supabase DB', icon: <SiSupabase className="text-success" /> },
    { name: 'React 19', icon: <SiReact className="text-info" /> },
    { name: 'TypeScript', icon: <SiTypescript className="text-info" /> },
    { name: 'PostgreSQL 17', icon: <SiPostgresql className="text-primary" /> },
    { name: 'Node.js', icon: <SiNodedotjs className="text-success" /> },
    { name: 'Kotlin Native', icon: <SiKotlin className="text-warning" /> },
    { name: 'Docker Containers', icon: <SiDocker className="text-primary" /> }
  ];

  return (
    <header id="inicio" className="rc-hero-section position-relative overflow-hidden">
      {/* Dynamic Cyber Ambient Glows */}
      <div className="rc-ambient-glow rc-glow-top-right"></div>
      <div className="rc-ambient-glow rc-glow-mid-left"></div>
      <div className="rc-tech-grid-bg position-absolute top-0 start-0 w-100 h-100 pointer-events-none" style={{ opacity: 0.65 }}></div>

      <div className="container position-relative" style={{ zIndex: 1, marginTop: '2.5rem' }}>
        <div className="row align-items-center g-5">
          {/* Left Column: Value Proposition */}
          <div className="col-lg-7 text-center text-lg-start">
            {/* Live Engineering Status Pill */}
            <div className="d-inline-flex mb-3">
              <span className="rc-status-pill border border-info border-opacity-30 shadow-sm">
                <span className="rc-pulse-dot"></span>
                <span className="text-info fw-semibold font-monospace me-1">ROLICODE LABS:</span>
                Ingeniería Fullstack & Despliegues Cloud Activos
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="rc-hero-title mb-4">
              Software de <span className="rc-gradient-text">Misión Crítica</span>, Plataformas Web y APIs Escalables.
            </h1>

            {/* Subheading */}
            <p className="lead mb-4 text-light" style={{ fontSize: '1.18rem', maxWidth: '640px', lineHeight: 1.7 }}>
              Diseñamos e implementamos arquitecturas reales en producción: desde sistemas de alta concurrencia con <strong>Supabase & PostgreSQL</strong>, hasta microservicios en <strong>Java Spring Boot 4</strong> y aplicaciones interactivas en <strong>React 19</strong>.
            </p>

            {/* Action Buttons */}
            <div className="d-flex flex-wrap gap-3 justify-content-center justify-content-lg-start mb-5">
              <a href="#demos" className="rc-btn-primary px-4 py-3 shadow-lg">
                <FaBolt className="text-warning" /> Probar Demos en Vivo
              </a>
              <a href="#proyectos" className="rc-btn-secondary px-4 py-3">
                <FaLaptopCode /> Casos de Éxito
              </a>
              <a href="#cotizador" className="rc-btn-outline px-4 py-3">
                <FaRocket /> Cotizar Desarrollo
              </a>
            </div>

            {/* Engineering Guarantees */}
            <div className="d-flex flex-wrap gap-4 justify-content-center justify-content-lg-start small font-monospace">
              <span className="d-flex align-items-center gap-2 text-white">
                <FaShieldAlt className="text-success" /> Seguridad SSL & Row Level Security
              </span>
              <span className="d-flex align-items-center gap-2 text-white">
                <FaServer className="text-info" /> Microservicios RESTful & Swagger 3
              </span>
              <span className="d-flex align-items-center gap-2 text-white">
                <FaCodeBranch className="text-warning" /> Código Limpio y Probado
              </span>
            </div>
          </div>

          {/* Right Column: Live Operations Status Deck */}
          <div className="col-lg-5">
            <div className="rc-code-window shadow-2xl border border-secondary border-opacity-30">
              {/* Header */}
              <div className="rc-code-window-header d-flex align-items-center justify-content-between p-3 border-bottom border-secondary border-opacity-25 bg-black bg-opacity-60">
                <div className="d-flex align-items-center gap-2">
                  <div className="rc-code-window-dots">
                    <span className="rc-code-window-dot bg-danger"></span>
                    <span className="rc-code-window-dot bg-warning"></span>
                    <span className="rc-code-window-dot bg-success"></span>
                  </div>
                  <span className="text-white small font-monospace ms-2 fw-bold">
                    RoliCode Operations Deck
                  </span>
                </div>

                <div className="d-flex align-items-center gap-2">
                  <span className="badge bg-success bg-opacity-20 text-success border border-success border-opacity-40 small font-monospace d-flex align-items-center gap-1">
                    <span className="rc-pulse-dot" style={{ width: 7, height: 7 }}></span>
                    ONLINE 200 OK
                  </span>
                </div>
              </div>

              {/* Operations Deck Nav Tabs */}
              <div className="d-flex p-1 bg-dark bg-opacity-90 border-bottom border-secondary border-opacity-20 font-monospace small">
                <button
                  type="button"
                  onClick={() => setActiveTelemetryTab('systems')}
                  className={`btn btn-sm flex-grow-1 rounded-2 py-2 fw-semibold ${
                    activeTelemetryTab === 'systems'
                      ? 'btn-dark text-info border border-secondary border-opacity-30'
                      : 'text-muted border-0 bg-transparent'
                  }`}
                >
                  <FaServer className="me-1" /> Despliegues en Vivo
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTelemetryTab('telemetry')}
                  className={`btn btn-sm flex-grow-1 rounded-2 py-2 fw-semibold ${
                    activeTelemetryTab === 'telemetry'
                      ? 'btn-dark text-warning border border-secondary border-opacity-30'
                      : 'text-muted border-0 bg-transparent'
                  }`}
                >
                  <FaTerminal className="me-1" /> Arquitectura Cloud
                </button>
              </div>

              {/* Tab 1: Live Deployments */}
              {activeTelemetryTab === 'systems' && (
                <div className="p-3 bg-black bg-opacity-50">
                  <div className="text-secondary small font-monospace mb-2 d-flex justify-content-between">
                    <span>SERVICIOS EN PRODUCCIÓN:</span>
                    <span className="text-success">3 NODOS ACTIVOS</span>
                  </div>

                  <div className="d-flex flex-column gap-2 mb-3">
                    {activeSystems.map((sys, idx) => (
                      <div
                        key={idx}
                        className="p-3 rounded-3 bg-dark bg-opacity-60 border border-secondary border-opacity-20 hover-border-info transition-smooth"
                      >
                        <div className="d-flex align-items-center justify-content-between mb-1">
                          <span className="text-white fw-bold font-monospace small d-flex align-items-center gap-2">
                            {sys.name}
                          </span>
                          <span className="badge bg-secondary bg-opacity-30 text-white font-monospace" style={{ fontSize: '0.68rem' }}>
                            {sys.badge}
                          </span>
                        </div>

                        <div className="text-muted small font-monospace mb-2" style={{ fontSize: '0.78rem' }}>
                          {sys.type} &bull; <span className="text-info">{sys.stack}</span>
                        </div>

                        <div className="d-flex align-items-center justify-content-between pt-2 border-top border-secondary border-opacity-15 font-monospace" style={{ fontSize: '0.75rem' }}>
                          <span className="text-secondary d-flex align-items-center gap-1">
                            <span className="rc-pulse-dot" style={{ width: 6, height: 6 }}></span>
                            Latencia: <strong className="text-success">{sys.latency}</strong>
                          </span>
                          <a
                            href={sys.url}
                            target="_blank"
                            rel="noreferrer"
                            className="text-info text-decoration-none d-flex align-items-center gap-1 hover-light"
                          >
                            Visitar <FaExternalLinkAlt size={9} />
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Tab 2: Cloud Architecture & Config */}
              {activeTelemetryTab === 'telemetry' && (
                <div className="p-3 bg-black bg-opacity-70 font-monospace small" style={{ minHeight: '260px' }}>
                  <div className="text-secondary mb-2">// Contrato de Configuración RoliCode Cloud</div>
                  <div className="text-muted">
                    <span className="text-info">const</span> <span className="text-warning">clusterConfig</span> = {'{'}
                  </div>
                  <div className="ps-3 text-light">
                    organization: <span className="text-success">"RoliCode Software Studio"</span>,
                  </div>
                  <div className="ps-3 text-light">
                    primaryRegion: <span className="text-success">"aws-0-us-east-2 (Supabase Pooler)"</span>,
                  </div>
                  <div className="ps-3 text-light">
                    databaseEngine: <span className="text-success">"PostgreSQL 17.6 + Hibernate 7"</span>,
                  </div>
                  <div className="ps-3 text-light">
                    backendRuntimes: [<span className="text-warning">"Java 21 Virtual Threads"</span>, <span className="text-warning">"Node.js 22 LTS"</span>],
                  </div>
                  <div className="ps-3 text-light">
                    frontendEdge: <span className="text-success">"React 19 + Vite HMR + Vercel Edge"</span>,
                  </div>
                  <div className="ps-3 text-light">
                    compliance: [<span className="text-info">"SSL/TLS 1.3"</span>, <span className="text-info">"CORS Strict"</span>, <span className="text-info">"OpenAPI 3"</span>]
                  </div>
                  <div className="text-muted">{'};'}</div>
                  <div className="mt-3 p-2 rounded-2 bg-dark border border-secondary border-opacity-25 text-info small">
                    <FaCheckCircle className="text-success me-1" /> Arquitectura validada y probada para alta disponibilidad.
                  </div>
                </div>
              )}

              {/* Tech Badges Footer */}
              <div className="p-3 bg-dark bg-opacity-95 border-top border-secondary border-opacity-25">
                <div className="d-flex align-items-center justify-content-between mb-2">
                  <span className="small text-secondary font-monospace" style={{ fontSize: '0.75rem' }}>
                    TECNOLOGÍAS PRINCIPALES:
                  </span>
                  <span className="badge bg-primary bg-opacity-20 text-info font-monospace" style={{ fontSize: '0.68rem' }}>
                    100% PRODUCCIÓN
                  </span>
                </div>

                <div className="d-flex flex-wrap gap-1">
                  {techStack.map((tech) => (
                    <span key={tech.name} className="rc-tech-tag font-monospace" style={{ fontSize: '0.72rem' }}>
                      {tech.icon}
                      <span>{tech.name}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
