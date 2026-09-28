import { FaTimes, FaExternalLinkAlt, FaGithub, FaCheckCircle, FaLayerGroup, FaServer, FaDatabase, FaCloud } from 'react-icons/fa';

export default function ProjectDetailModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="rc-modal-backdrop" onClick={onClose}>
      <div className="rc-modal-content" onClick={(e) => e.stopPropagation()}>
        {/* Modal Header */}
        <div className="p-4 border-bottom border-secondary border-opacity-25 d-flex align-items-start justify-content-between">
          <div>
            <div className="d-flex align-items-center gap-2 mb-2">
              <span className={`badge bg-${project.badgeType || 'primary'} bg-opacity-20 text-${project.badgeType || 'primary'} border border-${project.badgeType || 'primary'} border-opacity-40 px-2 py-1`}>
                {project.badge}
              </span>
              <span className="badge bg-primary bg-opacity-15 text-info border border-primary border-opacity-30">
                {project.categoryLabel}
              </span>
            </div>
            <h3 className="h4 text-white fw-bold mb-1">{project.title}</h3>
            <p className="text-info small mb-0 fw-semibold">{project.subtitle}</p>
          </div>
          <button
            type="button"
            className="btn btn-outline-secondary btn-sm rounded-circle p-2 text-white border-opacity-50"
            onClick={onClose}
            aria-label="Cerrar modal"
          >
            <FaTimes size={16} />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-4">
          {/* Action Links Bar */}
          <div className="d-flex flex-wrap gap-2 mb-4 pb-3 border-bottom border-secondary border-opacity-25">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rc-btn-primary py-2 px-3 small"
              >
                <FaExternalLinkAlt size={12} /> Visitar Aplicación en Vivo ({project.liveUrl.replace('https://', '')})
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rc-btn-secondary py-2 px-3 small"
              >
                <FaGithub size={14} /> Repositorio en GitHub
              </a>
            )}
            <a
              href="#cotizador"
              onClick={onClose}
              className="rc-btn-outline py-2 px-3 small ms-auto"
            >
              Construir algo similar
            </a>
          </div>

          {/* Description */}
          <div className="mb-4">
            <h5 className="text-white fw-semibold mb-2">Descripción del Proyecto</h5>
            <p className="text-light" style={{ fontSize: '0.98rem' }}>{project.description}</p>
          </div>

          {/* Metrics Grid */}
          {project.metrics && project.metrics.length > 0 && (
            <div className="mb-4">
              <h5 className="text-white fw-semibold mb-3">Métricas y Resultados</h5>
              <div className="row g-2">
                {project.metrics.map((metric, idx) => (
                  <div key={idx} className="col-6 col-md-3">
                    <div className="rc-inner-panel p-3 text-center">
                      <div className="fw-bold text-info fs-5">{metric.value}</div>
                      <small className="text-muted" style={{ fontSize: '0.80rem' }}>{metric.label}</small>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Key Features */}
          {project.features && project.features.length > 0 && (
            <div className="mb-4">
              <h5 className="text-white fw-semibold mb-3">Características Principales</h5>
              <div className="row g-2">
                {project.features.map((feature, idx) => (
                  <div key={idx} className="col-12 col-md-6">
                    <div className="rc-inner-panel d-flex align-items-start gap-2 p-2 text-light small">
                      <FaCheckCircle className="text-success mt-1 flex-shrink-0" size={14} />
                      <span>{feature}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Architecture Details */}
          {project.architecture && (
            <div className="mb-4">
              <h5 className="text-white fw-semibold mb-3">Arquitectura Técnica</h5>
              <div className="rc-inner-panel p-3 small font-monospace">
                <div className="mb-2 d-flex align-items-baseline gap-2">
                  <FaLayerGroup className="text-info flex-shrink-0" />
                  <span className="text-white fw-bold">Frontend:</span>
                  <span className="text-light">{project.architecture.frontend}</span>
                </div>
                <div className="mb-2 d-flex align-items-baseline gap-2">
                  <FaServer className="text-success flex-shrink-0" />
                  <span className="text-white fw-bold">Backend:</span>
                  <span className="text-light">{project.architecture.backend}</span>
                </div>
                <div className="mb-2 d-flex align-items-baseline gap-2">
                  <FaDatabase className="text-warning flex-shrink-0" />
                  <span className="text-white fw-bold">Base de Datos:</span>
                  <span className="text-light">{project.architecture.database}</span>
                </div>
                <div className="d-flex align-items-baseline gap-2">
                  <FaCloud className="text-primary flex-shrink-0" />
                  <span className="text-white fw-bold">Despliegue & DevOps:</span>
                  <span className="text-light">{project.architecture.deployment}</span>
                </div>
              </div>
            </div>
          )}

          {/* Tech Stack Pills */}
          <div>
            <h5 className="text-white fw-semibold mb-2">Tecnologías Utilizadas</h5>
            <div className="d-flex flex-wrap gap-2">
              {project.technologies.map((tech, idx) => (
                <span key={idx} className="rc-tech-tag py-1 px-3">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-3 border-top border-secondary border-opacity-25 d-flex justify-content-end">
          <button
            type="button"
            className="btn btn-secondary btn-sm px-4"
            onClick={onClose}
          >
            Cerrar Ficha
          </button>
        </div>
      </div>
    </div>
  );
}
