import { FaLaptopCode, FaRocket, FaTerminal, FaCheckCircle, FaExternalLinkAlt } from 'react-icons/fa';
import {
  SiReact,
  SiNodedotjs,
  SiSpringboot,
  SiPostgresql,
  SiDocker,
  SiKotlin,
  SiTypescript,
  SiVite
} from 'react-icons/si';

export default function Hero() {
  const techStack = [
    { name: 'React 19', icon: <SiReact className="text-info" /> },
    { name: 'Node.js', icon: <SiNodedotjs className="text-success" /> },
    { name: 'Spring Boot', icon: <SiSpringboot className="text-success" /> },
    { name: 'PostgreSQL', icon: <SiPostgresql className="text-primary" /> },
    { name: 'Kotlin', icon: <SiKotlin className="text-warning" /> },
    { name: 'TypeScript', icon: <SiTypescript className="text-info" /> },
    { name: 'Docker', icon: <SiDocker className="text-primary" /> },
    { name: 'Vite', icon: <SiVite className="text-warning" /> },
  ];

  return (
    <header id="inicio" className="rc-hero-section position-relative">
      <div className="rc-ambient-glow rc-glow-top-right"></div>
      <div className="rc-ambient-glow rc-glow-mid-left"></div>

      <div className="container position-relative" style={{ zIndex: 1, marginTop: '2.5rem' }}>
        <div className="row align-items-center g-5">
          <div className="col-lg-7 text-center text-lg-start">
            {/* Status Pill */}
            <div className="d-inline-flex mb-3">
              <span className="rc-status-pill">
                <span className="rc-pulse-dot"></span>
                Disponible para proyectos de desarrollo & consultoría
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="rc-hero-title mb-4">
              Desarrollo de Software{' '}
              <span className="rc-gradient-text">a Medida</span> y de Alto Rendimiento.
            </h1>

            {/* Subheading */}
            <p className="lead mb-4" style={{ fontSize: '1.2rem', maxWidth: '640px' }}>
              Transformo ideas y requerimientos empresariales en aplicaciones web y móviles escalables.
              Especializado en interfaces modernas con <strong>React</strong>, microservicios en <strong>Java Spring Boot & Node.js</strong> y bases de datos relacionales <strong>PostgreSQL</strong>.
            </p>

            {/* CTA Buttons */}
            <div className="d-flex flex-wrap gap-3 justify-content-center justify-content-lg-start mb-5">
              <a href="#proyectos" className="rc-btn-primary">
                <FaLaptopCode /> Explorar Proyectos
              </a>
              <a href="#demos" className="rc-btn-secondary">
                <FaTerminal className="text-warning" /> Probar Demos en Vivo
              </a>
              <a href="#cotizador" className="rc-btn-outline">
                <FaRocket /> Calcular Cotización
              </a>
            </div>

            {/* Value Guarantees with High Contrast */}
            <div className="d-flex flex-wrap gap-4 justify-content-center justify-content-lg-start small">
              <span className="d-flex align-items-center gap-2 text-white">
                <FaCheckCircle className="text-success" /> Arquitectura Limpia y Mantenible
              </span>
              <span className="d-flex align-items-center gap-2 text-white">
                <FaCheckCircle className="text-success" /> Despliegue en Producción con SSL
              </span>
              <span className="d-flex align-items-center gap-2 text-white">
                <FaCheckCircle className="text-success" /> Código Probado y Documentado
              </span>
            </div>
          </div>

          {/* Right Column: Authentic Developer Code Window */}
          <div className="col-lg-5">
            <div className="rc-code-window">
              {/* Window Bar */}
              <div className="rc-code-window-header">
                <div className="d-flex align-items-center gap-2">
                  <div className="rc-code-window-dots">
                    <span className="rc-code-window-dot bg-danger"></span>
                    <span className="rc-code-window-dot bg-warning"></span>
                    <span className="rc-code-window-dot bg-success"></span>
                  </div>
                  <span className="text-white small font-monospace ms-2 fw-semibold">
                    RoliCode.config.ts
                  </span>
                </div>
                <span className="badge bg-success bg-opacity-25 text-success border border-success border-opacity-50 small font-monospace">
                  PRODUCTION
                </span>
              </div>

              {/* Code Content */}
              <div className="rc-code-window-body">
                <div className="text-muted mb-1">// Configuración de Producción Activa</div>
                <div>
                  <span className="text-info">export const</span>{' '}
                  <span className="text-warning">rolicodePlatform</span> = {'{'}
                </div>
                <div className="ps-3">
                  <span className="text-light">domain:</span>{' '}
                  <span className="text-success">"rolicode.com.mx"</span>,
                </div>
                <div className="ps-3">
                  <span className="text-light">liveDemo:</span>{' '}
                  <a
                    href="https://citas.rolicode.com.mx"
                    target="_blank"
                    rel="noreferrer"
                    className="text-info text-decoration-underline"
                  >
                    "https://citas.rolicode.com.mx"
                  </a>
                  ,
                </div>
                <div className="ps-3">
                  <span className="text-light">stack:</span> {'{'}
                </div>
                <div className="ps-4">
                  <span className="text-light">frontend:</span>{' '}
                  <span className="text-success">"React 19 + TypeScript"</span>,
                </div>
                <div className="ps-4">
                  <span className="text-light">backend:</span>{' '}
                  <span className="text-success">"Java Spring Boot & Node.js"</span>,
                </div>
                <div className="ps-4">
                  <span className="text-light">database:</span>{' '}
                  <span className="text-success">"PostgreSQL 16"</span>
                </div>
                <div className="ps-3">{'}'},</div>
                <div className="ps-3">
                  <span className="text-light">security:</span>{' '}
                  <span className="text-success">"JWT + HTTPS / SSL"</span>,
                </div>
                <div className="ps-3">
                  <span className="text-light">status:</span>{' '}
                  <span className="text-warning">"ONLINE_READY"</span>
                </div>
                <div>{'};'}</div>
              </div>

              {/* Live Status Footer inside the Window */}
              <div className="p-3 bg-dark bg-opacity-80 border-top border-secondary border-opacity-25">
                <div className="d-flex align-items-center justify-content-between mb-3">
                  <span className="small text-white fw-semibold">
                    <span className="rc-pulse-dot me-2"></span>
                    Sistema en Línea:
                  </span>
                  <a
                    href="https://citas.rolicode.com.mx"
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-outline-info btn-sm py-1 px-2 d-inline-flex align-items-center gap-1 font-monospace"
                    style={{ fontSize: '0.78rem' }}
                  >
                    Probar citas.rolicode.com.mx <FaExternalLinkAlt size={10} />
                  </a>
                </div>

                <div className="d-flex flex-wrap gap-1">
                  {techStack.map((tech) => (
                    <span key={tech.name} className="rc-tech-tag">
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
