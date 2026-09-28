import { useState } from 'react';
import { FaExternalLinkAlt, FaGithub, FaEye, FaPlus, FaUndo, FaSearch } from 'react-icons/fa';

export default function ProjectsSection({
  projects,
  onOpenProjectDetail,
  onOpenGeneratorModal,
  onResetProjects,
  hasCustomProjects
}) {
  const [filter, setFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filterCategories = [
    { id: 'all', label: 'Todos los Proyectos' },
    { id: 'fullstack', label: 'Fullstack & SaaS' },
    { id: 'backend', label: 'Backend & APIs' },
    { id: 'mobile', label: 'Apps Móviles' },
    { id: 'web', label: 'Desarrollo Web' },
  ];

  const filteredProjects = projects.filter((project) => {
    const matchesCategory = filter === 'all' || project.category === filter;
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.technologies.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="proyectos" className="py-5 position-relative">
      <div className="container py-4">
        {/* Section Header */}
        <div className="d-flex flex-column flex-md-row align-items-md-end justify-content-between mb-5 gap-3">
          <div>
            <span className="badge bg-info bg-opacity-15 text-info border border-info border-opacity-30 px-3 py-2 rounded-pill fw-semibold mb-2">
              Portafolio de Soluciones
            </span>
            <h2 className="display-5 fw-bold text-white mb-2">
              Proyectos Reales y Despliegues Activos
            </h2>
            <p className="lead mb-0" style={{ maxWidth: '620px' }}>
              Explora soluciones de software implementadas con arquitecturas robustas y código en producción.
            </p>
          </div>

          {/* Action buttons: Generar Proyecto & Reset */}
          <div className="d-flex align-items-center gap-2">
            {hasCustomProjects && (
              <button
                type="button"
                onClick={onResetProjects}
                className="btn btn-outline-secondary btn-sm py-2 px-3 text-white border-opacity-50 d-flex align-items-center gap-2"
                title="Restaurar proyectos base"
              >
                <FaUndo size={12} /> Restaurar Base
              </button>
            )}
            <button
              type="button"
              onClick={onOpenGeneratorModal}
              className="rc-btn-primary py-2 px-3"
            >
              <FaPlus size={13} /> Generar / Agregar Proyecto
            </button>
          </div>
        </div>

        {/* Filter Bar & Search */}
        <div className="rc-inner-panel d-flex flex-column flex-lg-row align-items-lg-center justify-content-between gap-3 mb-4 p-3 rounded-4">
          <div className="d-flex flex-wrap gap-2">
            {filterCategories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                className={`rc-filter-pill ${filter === cat.id ? 'active' : ''}`}
                onClick={() => setFilter(cat.id)}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="position-relative" style={{ minWidth: '260px' }}>
            <FaSearch className="position-absolute top-50 start-0 translate-middle-y ms-3 text-muted" size={13} />
            <input
              type="text"
              placeholder="Buscar por tecnología o nombre..."
              className="form-control rc-input ps-5 py-2 small"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {/* Projects Grid */}
        <div className="row g-4">
          {filteredProjects.map((project) => (
            <div key={project.id} className="col-lg-6">
              <div className="rc-card rc-card-glow-border h-100 d-flex flex-column justify-content-between">
                <div>
                  {/* Top Bar: Badge & Category */}
                  <div className="d-flex align-items-center justify-content-between mb-3">
                    <span className="badge bg-primary bg-opacity-15 text-info border border-primary border-opacity-30 small font-monospace px-2 py-1">
                      {project.categoryLabel}
                    </span>
                    <span className={`badge bg-${project.badgeType || 'primary'} bg-opacity-20 text-${project.badgeType || 'primary'} border border-${project.badgeType || 'primary'} border-opacity-40 px-2 py-1`}>
                      {project.badge}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="h4 text-white fw-bold mb-1">{project.title}</h3>
                  <p className="text-info small mb-3 fw-semibold">{project.subtitle}</p>

                  {/* Summary */}
                  <p className="text-light small mb-4" style={{ fontSize: '0.94rem' }}>
                    {project.summary}
                  </p>

                  {/* Metrics preview pills */}
                  {project.metrics && (
                    <div className="d-flex flex-wrap gap-2 mb-3">
                      {project.metrics.slice(0, 3).map((m, idx) => (
                        <div key={idx} className="rc-inner-panel py-1 px-2 rounded-2 small d-inline-flex align-items-center gap-1">
                          <span className="text-muted" style={{ fontSize: '0.78rem' }}>{m.label}:</span>
                          <span className="text-info fw-bold" style={{ fontSize: '0.80rem' }}>{m.value}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Tech stack */}
                  <div className="d-flex flex-wrap gap-1 mb-4">
                    {project.technologies.map((tech, idx) => (
                      <span key={idx} className="rc-tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Actions */}
                <div className="pt-3 border-top border-secondary border-opacity-25 d-flex flex-wrap align-items-center justify-content-between gap-2">
                  <button
                    type="button"
                    onClick={() => onOpenProjectDetail(project)}
                    className="rc-btn-secondary py-2 px-3 small"
                  >
                    <FaEye size={13} /> Ver Ficha Técnica
                  </button>

                  <div className="d-flex align-items-center gap-2">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-outline-secondary btn-sm p-2 text-white border-opacity-50"
                        title="Ver en GitHub"
                      >
                        <FaGithub size={15} />
                      </a>
                    )}
                    {project.liveUrl ? (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rc-btn-primary py-2 px-3 small"
                      >
                        <FaExternalLinkAlt size={12} /> Probar Demo en Vivo
                      </a>
                    ) : (
                      <span className="badge bg-dark border border-secondary border-opacity-40 text-light py-2 px-3 font-monospace small">
                        Despliegue Privado
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}

          {filteredProjects.length === 0 && (
            <div className="col-12 text-center py-5">
              <div className="rc-card py-5">
                <p className="lead text-white mb-3">No se encontraron proyectos para este filtro o búsqueda.</p>
                <button
                  type="button"
                  className="rc-btn-primary"
                  onClick={() => { setFilter('all'); setSearchQuery(''); }}
                >
                  Ver todos los proyectos
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
