import {
  FaUserTie,
  FaLightbulb,
  FaCogs,
  FaCheckDouble,
  FaRocket,
  FaGithub,
  FaEnvelope
} from 'react-icons/fa';

export default function AboutSection() {
  const steps = [
    {
      num: '01',
      title: 'Descubrimiento & Planificación',
      desc: 'Analizamos a fondo los objetivos de tu negocio, definimos los requerimientos funcionales y trazamos la arquitectura ideal.',
      icon: <FaLightbulb className="text-warning" size={20} />
    },
    {
      num: '02',
      title: 'Diseño de Arquitectura & Prototipo',
      desc: 'Modelamos la base de datos relacional (PostgreSQL), los contratos de las APIs REST y los componentes de la interfaz de usuario.',
      icon: <FaCogs className="text-info" size={20} />
    },
    {
      num: '03',
      title: 'Desarrollo Ágil & Pruebas',
      desc: 'Construcción iterativa con entregas continuas, asegurando que puedas probar los avances en un entorno seguro antes del lanzamiento.',
      icon: <FaCheckDouble className="text-success" size={20} />
    },
    {
      num: '04',
      title: 'Despliegue & Puesta en Producción',
      desc: 'Configuración de servidores, certificados SSL HTTPS, optimización de velocidad y soporte técnico pos-lanzamiento.',
      icon: <FaRocket className="text-primary" size={20} />
    }
  ];

  const skillGauges = [
    { name: 'Frontend (React 19, JavaScript, HTML5/CSS3, Vite)', level: '95%' },
    { name: 'Backend & APIs (Node.js, Spring Boot Java, REST)', level: '92%' },
    { name: 'Bases de Datos & Modelado (PostgreSQL, JPA, SQL)', level: '90%' },
    { name: 'Desarrollo Móvil (Kotlin, Android Jetpack Compose)', level: '85%' },
    { name: 'DevOps & Despliegues (Docker, Linux VPS, Vercel, SSL)', level: '88%' }
  ];

  return (
    <section id="sobre-mi" className="py-5 position-relative">
      <div className="container py-4">
        {/* Section Header */}
        <div className="text-center max-w-700 mx-auto mb-5">
          <span className="badge bg-secondary bg-opacity-20 text-light border border-secondary border-opacity-40 px-3 py-2 rounded-pill fw-semibold mb-2">
            Metodología & Filosofía
          </span>
          <h2 className="display-5 fw-bold text-white mb-3">
            Detrás de RoliCode
          </h2>
          <p className="lead mx-auto" style={{ maxWidth: '680px' }}>
            Desarrollador enfocado en entregar software funcional, limpio y preparado para escalar sin sobrecostos de mantenimiento.
          </p>
        </div>

        <div className="row g-4 align-items-center mb-5">
          {/* Bio Column */}
          <div className="col-lg-6">
            <div className="rc-card rc-card-glow-border p-4">
              <div className="d-flex align-items-center gap-3 mb-4">
                <div className="p-3 rounded-circle bg-primary bg-opacity-20 text-primary border border-primary border-opacity-40">
                  <FaUserTie size={28} />
                </div>
                <div>
                  <h3 className="h4 text-white fw-bold mb-0">Uriel Ruiz (RoliCode)</h3>
                  <span className="text-info small fw-semibold">Desarrollador de Software Fullstack</span>
                </div>
              </div>

              <p className="text-light mb-3" style={{ fontSize: '0.98rem' }}>
                Creo firmemente que el software no solo debe verse moderno, sino también estar sólidamente construido desde sus cimientos: consultas a base de datos eficientes, control estricto de concurrencia y una experiencia de usuario sin fricciones.
              </p>

              <p className="text-light mb-4" style={{ fontSize: '0.98rem' }}>
                Mi experiencia abarca desde el diseño y despliegue de plataformas completas como el <strong>Sistema de Gestión de Citas</strong> (en producción en rolicode.com.mx), hasta la construcción de APIs empresariales y aplicaciones nativas.
              </p>

              {/* Social links */}
              <div className="d-flex flex-wrap gap-2 pt-3 border-top border-secondary border-opacity-25">
                <a
                  href="https://github.com/urielrg"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-outline-secondary btn-sm text-white border-opacity-50 d-flex align-items-center gap-2"
                >
                  <FaGithub size={15} /> GitHub (@urielrg)
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
