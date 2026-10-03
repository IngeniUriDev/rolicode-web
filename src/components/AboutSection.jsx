import {
  FaLightbulb,
  FaCogs,
  FaCheckDouble,
  FaRocket,
  FaGithub,
  FaEnvelope
} from 'react-icons/fa';
import logoImg from '../assets/Logo.png';

export default function AboutSection() {
  const steps = [
    {
      num: '01',
      title: 'Diagnóstico & Enfoque de Negocio',
      desc: 'Entendemos el problema real a resolver, quién lo usará y cómo generará valor inmediato para tu negocio, servicio o comunidad.',
      icon: <FaLightbulb className="text-warning" size={20} />
    },
    {
      num: '02',
      title: 'Arquitectura Segura & Prototipado',
      desc: 'Diseñamos bases de datos relacionales en Supabase/PostgreSQL con políticas RLS, contratos REST claros y flujos sin fricción.',
      icon: <FaCogs className="text-info" size={20} />
    },
    {
      num: '03',
      title: 'Desarrollo Ágil & Entregas en Vivo',
      desc: 'Construcción iterativa en React 19, TypeScript y microservicios, permitiéndote probar avances en tiempo real antes del lanzamiento.',
      icon: <FaCheckDouble className="text-success" size={20} />
    },
    {
      num: '04',
      title: 'Despliegue Cloud & Acompañamiento',
      desc: 'Puesta en marcha con dominio personalizado, certificados SSL, optimización de velocidad y soporte técnico directo pos-lanzamiento.',
      icon: <FaRocket className="text-primary" size={20} />
    }
  ];

  const skillGauges = [
    { name: 'Frontend Moderno (React 19, TypeScript, Vite, Tailwind)', level: '96%' },
    { name: 'Bases de Datos & Cloud (Supabase, PostgreSQL, RLS, SQL)', level: '94%' },
    { name: 'Backend & APIs (Java 21, Spring Boot, Node.js, REST)', level: '92%' },
    { name: 'Infraestructura & Despliegues (Linux VPS, Nginx, Docker, SSL)', level: '90%' },
    { name: 'Desarrollo Móvil Nativo (Kotlin, Android Jetpack Compose)', level: '86%' }
  ];

  return (
    <section id="sobre-mi" className="py-5 position-relative">
      <div className="container py-4">
        {/* Section Header */}
        <div className="text-center max-w-700 mx-auto mb-5">
          <span className="rc-section-badge rc-section-badge-info">
            Visión, Trayectoria & Filosofía
          </span>
          <h2 className="display-5 fw-bold text-white mb-3">
            Detrás de RoliCode
          </h2>
          <p className="lead mx-auto" style={{ maxWidth: '720px' }}>
            Ingeniería de software pragmática, orientada a construir productos reales en producción que impulsan la economía local, automatizan operaciones y resuelven problemas del mundo real.
          </p>
        </div>

        <div className="row g-4 align-items-center mb-5">
          {/* Bio Column */}
          <div className="col-lg-6">
            <div className="rc-card rc-card-glow-border p-4">
              <div className="d-flex flex-column flex-sm-row align-items-sm-center gap-3 mb-4">
                <div className="p-2 rounded-4 bg-dark border border-secondary border-opacity-40 d-inline-flex align-items-center justify-content-center shadow-lg" style={{ minWidth: '90px', minHeight: '90px' }}>
                  <img
                    src={logoImg}
                    alt="RoliCode Logo"
                    style={{ height: '85px', width: 'auto', maxWidth: '140px', objectFit: 'contain' }}
                  />
                </div>
                <div>
                  <span className="badge bg-primary bg-opacity-20 text-info border border-primary border-opacity-30 mb-1">
                    Fundador & Lead Software Engineer
                  </span>
                  <h3 className="h4 text-white fw-bold mb-1">Ing. Uriel Rojas</h3>
                  <span className="text-secondary small fw-medium">Desarrollo Fullstack, Soluciones Cloud & Arquitectura de Software</span>
                </div>
              </div>

              <p className="text-light mb-3" style={{ fontSize: '0.98rem', lineHeight: '1.7' }}>
                Mi enfoque no es escribir código en el vacío ni crear prototipos que se quedan en un repositorio; mi compromiso es <strong>materializar ideas en plataformas digitales activas, funcionales y en producción</strong>.
              </p>

              <p className="text-light mb-3" style={{ fontSize: '0.98rem', lineHeight: '1.7' }}>
                A través de RoliCode he desarrollado proyectos de alto impacto como <strong>ProfZone</strong> (directorio regional geolocalizado para conectar profesionistas y comercios locales), <strong>Kartódromo Sabaneta</strong> (portal integral deportivo con reservas y gestión de pista), <strong>Sistemas SaaS de Citas</strong> y microservicios empresariales de alta concurrencia.
              </p>

              <p className="text-light mb-4" style={{ fontSize: '0.98rem', lineHeight: '1.7' }}>
                Combino la velocidad del ecosistema moderno (<span className="text-info fw-semibold">React 19, TypeScript, Supabase</span>) con la robustez del software empresarial (<span className="text-warning fw-semibold">Java 21, Spring Boot, PostgreSQL</span>), garantizando siempre seguridad de datos mediante <strong>Row Level Security (RLS)</strong>, interfaces intuitivas y despliegues con dominios propios.
              </p>

              {/* Social links */}
              <div className="d-flex flex-wrap gap-2 pt-3 border-top border-secondary border-opacity-25">
                <a
                  href="https://github.com/IngeniUriDev"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-outline-secondary btn-sm text-white border-opacity-50 d-flex align-items-center gap-2"
                >
                  <FaGithub size={15} /> GitHub (@IngeniUriDev)
                </a>
                <a
                  href="mailto:urielr.g.57@gmail.com"
                  className="btn btn-outline-secondary btn-sm text-white border-opacity-50 d-flex align-items-center gap-2"
                >
                  <FaEnvelope size={15} /> urielr.g.57@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Technical Skills Gauge Column */}
          <div className="col-lg-6">
            <div className="rc-card p-4">
              <h4 className="h5 text-white fw-bold mb-4">Especialización & Dominio Técnico</h4>
              <div className="d-flex flex-column gap-3">
                {skillGauges.map((skill, idx) => (
                  <div key={idx}>
                    <div className="d-flex justify-content-between text-white small mb-1 fw-semibold">
                      <span>{skill.name}</span>
                      <span className="text-info fw-bold">{skill.level}</span>
                    </div>
                    <div className="progress bg-dark" style={{ height: '8px', borderRadius: '4px' }}>
                      <div
                        className="progress-bar bg-primary"
                        role="progressbar"
                        style={{
                          width: skill.level,
                          background: 'linear-gradient(90deg, #6366f1, #06b6d4)'
                        }}
                        aria-valuenow={parseInt(skill.level)}
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Guarantees Box */}
              <div className="mt-4 pt-3 border-top border-secondary border-opacity-20">
                <div className="row g-2 text-center">
                  <div className="col-4">
                    <div className="p-2 rounded-3 bg-dark bg-opacity-60 border border-secondary border-opacity-20">
                      <div className="text-success fw-bold font-monospace fs-5">100%</div>
                      <small className="text-muted" style={{ fontSize: '0.72rem' }}>En Producción</small>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="p-2 rounded-3 bg-dark bg-opacity-60 border border-secondary border-opacity-20">
                      <div className="text-info fw-bold font-monospace fs-5">RLS</div>
                      <small className="text-muted" style={{ fontSize: '0.72rem' }}>Seguridad de Datos</small>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="p-2 rounded-3 bg-dark bg-opacity-60 border border-secondary border-opacity-20">
                      <div className="text-warning fw-bold font-monospace fs-5">Directo</div>
                      <small className="text-muted" style={{ fontSize: '0.72rem' }}>Trato de Ingeniero</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Workflow 4 Steps */}
        <div className="mt-5">
          <h3 className="h4 text-white fw-bold text-center mb-4">
            ¿Cómo trabajamos tu proyecto paso a paso?
          </h3>
          <div className="row g-3">
            {steps.map((st) => (
              <div key={st.num} className="col-md-6 col-lg-3">
                <div className="rc-inner-panel h-100 p-3">
                  <div className="d-flex align-items-center justify-content-between mb-3">
                    <span className="p-2 rounded-2 bg-dark border border-secondary border-opacity-40">
                      {st.icon}
                    </span>
                    <span className="text-info fw-bold font-monospace fs-5">
                      {st.num}
                    </span>
                  </div>
                  <h4 className="h6 text-white fw-bold mb-2">{st.title}</h4>
                  <p className="text-light small mb-0" style={{ fontSize: '0.86rem' }}>
                    {st.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
