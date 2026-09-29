import { FaLaptopCode, FaServer, FaMobileAlt, FaCloudUploadAlt, FaCheck, FaArrowRight } from 'react-icons/fa';
import { SERVICES_DATA } from '../data/projectsData';

export default function Services({ onSelectServiceForQuote }) {
  const getServiceIcon = (id) => {
    switch (id) {
      case 'web-dev':
        return <FaLaptopCode size={28} className="text-info" />;
      case 'backend-dev':
        return <FaServer size={28} className="text-success" />;
      case 'mobile-dev':
        return <FaMobileAlt size={28} className="text-warning" />;
      case 'devops-cloud':
        return <FaCloudUploadAlt size={28} className="text-primary" />;
      default:
        return <FaLaptopCode size={28} className="text-info" />;
    }
  };

  return (
    <section id="servicios" className="py-5 position-relative">
      <div className="container py-4">
        {/* Section Header */}
        <div className="text-center max-w-700 mx-auto mb-5">
          <span className="rc-section-badge rc-section-badge-primary">
            Servicios Especializados
          </span>
          <h2 className="display-5 fw-bold text-white mb-3">
            Soluciones de Ingeniería para tu Producto
          </h2>
          <p className="lead mx-auto" style={{ maxWidth: '680px' }}>
            Desarrollo de software de extremo a extremo, diseñado con altos estándares de arquitectura, seguridad y rendimiento comprobado.
          </p>
        </div>

        {/* Services Grid */}
        <div className="row g-4">
          {SERVICES_DATA.map((service) => (
            <div key={service.id} className="col-lg-6">
              <div className="rc-card rc-card-glow-border h-100 d-flex flex-column justify-content-between">
                <div>
                  {/* Card Header with Icon */}
                  <div className="d-flex align-items-center justify-content-between mb-4">
                    <div className="rc-inner-panel p-3 d-inline-flex align-items-center justify-content-center">
                      {getServiceIcon(service.id)}
                    </div>
                    <span className="text-muted small font-monospace">
                      #{service.id}
                    </span>
                  </div>

                  <h3 className="h4 text-white fw-bold mb-2">{service.title}</h3>
                  <p className="text-light mb-3" style={{ fontSize: '0.98rem' }}>{service.description}</p>

                  {/* Highlights Bullet points */}
                  <div className="mb-4">
                    <p className="text-white small fw-bold mb-2">Capacidades técnicas:</p>
                    <ul className="list-unstyled mb-0">
                      {service.highlights.map((highlight, idx) => (
                        <li key={idx} className="d-flex align-items-start gap-2 mb-2 text-light small">
                          <FaCheck className="text-info mt-1 flex-shrink-0" size={13} />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech stack badges */}
                  <div className="mb-4">
                    <div className="d-flex flex-wrap gap-1">
                      {service.techs.map((tech, idx) => (
                        <span key={idx} className="rc-tech-tag">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer Action */}
                <div className="pt-3 border-top border-secondary border-opacity-25 d-flex align-items-center justify-content-between">
                  <a
                    href="#cotizador"
                    onClick={() => onSelectServiceForQuote && onSelectServiceForQuote(service.id)}
                    className="btn btn-link text-decoration-none text-info p-0 d-inline-flex align-items-center gap-2 fw-semibold"
                  >
                    Cotizar este servicio <FaArrowRight size={13} />
                  </a>
                  <a href="#contacto" className="text-muted small text-decoration-none hover-light">
                    Consultar requerimiento
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
