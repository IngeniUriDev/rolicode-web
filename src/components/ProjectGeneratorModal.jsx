import { useState } from 'react';
import { FaTimes, FaPlus, FaCode, FaCheck, FaExclamationTriangle } from 'react-icons/fa';

export default function ProjectGeneratorModal({ onClose, onAddProject }) {
  const [formData, setFormData] = useState({
    title: '',
    subtitle: '',
    category: 'web',
    badge: 'Nuevo ⚡',
    badgeType: 'primary',
    liveUrl: '',
    githubUrl: '',
    summary: '',
    technologies: 'React, Node.js, PostgreSQL'
  });

  const [copied, setCopied] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.title.trim() || !formData.summary.trim()) {
      alert('Por favor completa al menos el título y el resumen del proyecto.');
      return;
    }

    const techArray = formData.technologies
      .split(',')
      .map((t) => t.trim())
      .filter((t) => t.length > 0);

    const categoryLabels = {
      web: 'Desarrollo Web',
      backend: 'Backend & APIs',
      mobile: 'Apps Móviles',
      fullstack: 'Fullstack & SaaS'
    };

    const newProject = {
      id: 'custom-' + Date.now(),
      title: formData.title,
      subtitle: formData.subtitle || 'Proyecto generado dinámicamente',
      category: formData.category,
      categoryLabel: categoryLabels[formData.category] || 'Software',
      badge: formData.badge,
      badgeType: formData.badgeType,
      status: 'live',
      featured: false,
      liveUrl: formData.liveUrl.trim() || null,
      githubUrl: formData.githubUrl.trim() || null,
      summary: formData.summary,
      description: formData.summary,
      technologies: techArray.length > 0 ? techArray : ['React', 'JavaScript'],
      metrics: [
        { label: 'Estado', value: 'Activo' },
        { label: 'Tiempo de Carga', value: '< 1s' }
      ],
      features: [
        'Solución diseñada a la medida',
        'Arquitectura modular y escalable',
        'Integración continua'
      ],
      architecture: {
        frontend: 'Interfaz reactiva y responsiva.',
        backend: 'Lógica desacoplada y endpoints optimizados.',
        database: 'Almacenamiento persistente con validaciones.',
        deployment: 'Preparado para producción.'
      }
    };

    onAddProject(newProject);
    onClose();
  };

  const generateSourceCodeSnippet = () => {
    const techArray = formData.technologies
      .split(',')
      .map((t) => `'${t.trim()}'`)
      .join(', ');

    return `// Copiar y pegar en src/data/projectsData.js:
{
  id: '${formData.title.toLowerCase().replace(/[^a-z0-9]/g, '-') || 'nuevo-proyecto'}',
  title: '${formData.title || 'Título del Proyecto'}',
  subtitle: '${formData.subtitle || 'Subtítulo'}',
  category: '${formData.category}',
  badge: '${formData.badge}',
  badgeType: '${formData.badgeType}',
  liveUrl: ${formData.liveUrl ? `'${formData.liveUrl}'` : 'null'},
  githubUrl: ${formData.githubUrl ? `'${formData.githubUrl}'` : 'null'},
  summary: '${formData.summary || 'Resumen...'}',
  technologies: [${techArray || "'React', 'Node.js'"}]
}`;
  };

  const copyCode = () => {
    navigator.clipboard.writeText(generateSourceCodeSnippet());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="rc-modal-backdrop" onClick={onClose}>
      <div className="rc-modal-content" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="p-4 border-bottom border-secondary border-opacity-25 d-flex align-items-center justify-content-between">
          <div className="d-flex align-items-center gap-2">
            <span className="p-2 rounded-2 bg-primary bg-opacity-20 text-primary">
              <FaPlus size={16} />
            </span>
            <div>
              <h3 className="h5 text-white fw-bold mb-0">Generador de Proyectos en Vivo</h3>
              <small className="text-secondary">Añade o previsualiza un nuevo proyecto en tu portafolio</small>
            </div>
          </div>
          <button
            type="button"
            className="btn btn-outline-secondary btn-sm rounded-circle p-2 text-white border-opacity-50"
            onClick={onClose}
          >
            <FaTimes size={16} />
          </button>
        </div>

        {/* Form Body */}
        <div className="p-4">
          <div className="rc-inner-panel d-flex align-items-center gap-2 small text-light mb-4 border border-warning border-opacity-30">
            <FaExclamationTriangle className="text-warning flex-shrink-0" />
            <span>
              Este generador te permite previsualizar inmediatamente nuevos proyectos en la interfaz (se guardan en tu navegador local). También puedes copiar el fragmento de código para integrarlo permanentemente en el archivo de despliegue.
            </span>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="row g-3">
              <div className="col-md-8">
                <label className="form-label text-white small fw-semibold">Título del Proyecto *</label>
                <input
                  type="text"
                  name="title"
                  className="form-control rc-input"
                  placeholder="Ej. Tienda Online de Ropa / API de Cobros"
                  value={formData.title}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="col-md-4">
                <label className="form-label text-white small fw-semibold">Categoría</label>
                <select
                  name="category"
                  className="form-select rc-input"
                  value={formData.category}
                  onChange={handleChange}
                >
                  <option value="web">Desarrollo Web</option>
                  <option value="backend">Backend & APIs</option>
                  <option value="mobile">Apps Móviles</option>
                  <option value="fullstack">Fullstack & SaaS</option>
                </select>
              </div>

              <div className="col-md-8">
                <label className="form-label text-white small fw-semibold">Subtítulo o Propósito</label>
                <input
                  type="text"
                  name="subtitle"
                  className="form-control rc-input"
                  placeholder="Ej. Plataforma de pagos integrada con Stripe"
                  value={formData.subtitle}
                  onChange={handleChange}
                />
              </div>

              <div className="col-md-4">
                <label className="form-label text-white small fw-semibold">Etiqueta Badge</label>
                <input
                  type="text"
                  name="badge"
                  className="form-control rc-input"
                  placeholder="Ej. En Línea 🚀"
                  value={formData.badge}
                  onChange={handleChange}
                />
              </div>

              <div className="col-md-6">
                <label className="form-label text-white small fw-semibold">URL de Demo en Vivo (Opcional)</label>
                <input
                  type="url"
                  name="liveUrl"
                  className="form-control rc-input"
                  placeholder="https://ejemplo.rolicode.com.mx"
                  value={formData.liveUrl}
                  onChange={handleChange}
                />
              </div>

              <div className="col-md-6">
                <label className="form-label text-white small fw-semibold">URL de GitHub (Opcional)</label>
                <input
                  type="url"
                  name="githubUrl"
                  className="form-control rc-input"
                  placeholder="https://github.com/urielrg/proyecto"
                  value={formData.githubUrl}
                  onChange={handleChange}
                />
              </div>

              <div className="col-12">
                <label className="form-label text-white small fw-semibold">Tecnologías (separadas por comas)</label>
                <input
                  type="text"
                  name="technologies"
                  className="form-control rc-input"
                  placeholder="React 19, Spring Boot, PostgreSQL, Docker"
                  value={formData.technologies}
                  onChange={handleChange}
                />
              </div>

              <div className="col-12">
                <label className="form-label text-white small fw-semibold">Resumen del Proyecto *</label>
                <textarea
                  name="summary"
                  rows="3"
                  className="form-control rc-input"
                  placeholder="Explica qué problema resuelve, cómo funciona y qué valor aporta a la empresa..."
                  value={formData.summary}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
            </div>

            {/* Generated Code Snippet Box */}
            <div className="mt-4 pt-3 border-top border-secondary border-opacity-25">
              <div className="d-flex align-items-center justify-content-between mb-2">
                <span className="small text-secondary fw-semibold font-monospace">
                  <FaCode className="me-1" /> Código para Despliegue en src/data/projectsData.js:
                </span>
                <button
                  type="button"
                  onClick={copyCode}
                  className="btn btn-outline-info btn-sm py-1 px-2 font-monospace"
                  style={{ fontSize: '0.75rem' }}
                >
                  {copied ? <><FaCheck className="text-success" /> Copiado</> : 'Copiar Snippet'}
                </button>
              </div>
              <pre className="rc-inner-panel p-3 text-info font-monospace small mb-0" style={{ fontSize: '0.80rem', maxHeight: '140px', overflowY: 'auto' }}>
                {generateSourceCodeSnippet()}
              </pre>
            </div>

            <div className="d-flex justify-content-end gap-2 mt-4 pt-3 border-top border-secondary border-opacity-25">
              <button
                type="button"
                className="btn btn-secondary btn-sm"
                onClick={onClose}
              >
                Cancelar
              </button>
              <button
                type="submit"
                className="rc-btn-primary btn-sm py-2 px-4"
              >
                <FaPlus size={13} /> Agregar al Portafolio en Vivo
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
