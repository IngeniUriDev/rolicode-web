import { useState } from 'react';
import {
  FaCalculator,
  FaCheck,
  FaWhatsapp,
  FaEnvelope,
  FaClock,
  FaShieldAlt,
  FaRocket
} from 'react-icons/fa';

export default function QuoteEstimator({ selectedServiceCategory }) {
  const projectTypes = [
    {
      id: 'landing',
      name: 'Landing Page o Sitio Web Comercial',
      desc: 'Diseño moderno, rápido y optimizado para ventas y posicionamiento SEO.',
      basePrice: 4000,
      baseWeeks: 1
    },
    {
      id: 'webapp',
      name: 'Aplicación Web Completa (SaaS / Portal)',
      desc: 'Frontend reactivo con React, base de datos y panel interactivo.',
      basePrice: 9500,
      baseWeeks: 3
    },
    {
      id: 'backend',
      name: 'API RESTful & Backend Empresarial',
      desc: 'Microservicio robusto con Java Spring Boot o Node.js y PostgreSQL.',
      basePrice: 8000,
      baseWeeks: 2
    },
    {
      id: 'mobile',
      name: 'Aplicación Móvil (Android Nativa)',
      desc: 'App nativa en Kotlin con Jetpack Compose y sincronización en la nube.',
      basePrice: 12000,
      baseWeeks: 4
    }
  ];

  const initialTypeId = () => {
    if (selectedServiceCategory === 'backend-dev') return 'backend';
    if (selectedServiceCategory === 'mobile-dev') return 'mobile';
    return 'webapp';
  };

  const [selectedType, setSelectedType] = useState(initialTypeId());
  const [selectedFeatures, setSelectedFeatures] = useState([
    'auth',
    'database'
  ]);
  const [timelineUrgency, setTimelineUrgency] = useState('standard');

  const addonFeatures = [
    {
      id: 'auth',
      name: 'Autenticación & Roles de Usuario',
      desc: 'Login seguro con JWT, sesiones, recuperación de contraseña.',
      price: 2000,
      weeks: 0.5
    },
    {
      id: 'database',
      name: 'Base de Datos Relacional Optimizada',
      desc: 'PostgreSQL con modelado relacional y respaldos automáticos.',
      price: 2000,
      weeks: 0.5
    },
    {
      id: 'payments',
      name: 'Pasarela de Pagos (Stripe / Mercado Pago)',
      desc: 'Cobros recurrentes, suscripciones o pagos únicos seguros.',
      price: 2500,
      weeks: 0.5
    },
    {
      id: 'dashboard',
      name: 'Panel de Administración & Métricas',
      desc: 'Dashboard para monitoreo de operaciones, clientes y reportes.',
      price: 3000,
      weeks: 1
    },
    {
      id: 'cloud_ssl',
      name: 'Despliegue Cloud + Dominio SSL',
      desc: 'Configuración de servidor VPS/Vercel con HTTPS y dominio rolicode.',
      price: 1500,
      weeks: 0.5
    },
    {
      id: 'notifications',
      name: 'Notificaciones Push / Alertas Email',
      desc: 'Envío de correos transaccionales o notificaciones en tiempo real.',
      price: 1800,
      weeks: 0.5
    }
  ];

  const toggleFeature = (id) => {
    setSelectedFeatures((prev) =>
      prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]
    );
  };

  const currentProject = projectTypes.find((p) => p.id === selectedType) || projectTypes[0];

  const addonsTotal = addonFeatures
    .filter((f) => selectedFeatures.includes(f.id))
    .reduce((sum, f) => sum + f.price, 0);

  const addonsWeeks = addonFeatures
    .filter((f) => selectedFeatures.includes(f.id))
    .reduce((sum, f) => sum + f.weeks, 0);

  let rawTotal = currentProject.basePrice + addonsTotal;
  let rawWeeks = currentProject.baseWeeks + addonsWeeks;

  if (timelineUrgency === 'express') {
    rawTotal *= 1.25;
    rawWeeks = Math.max(1, Math.round(rawWeeks * 0.7));
  }

  const formattedPrice = new Intl.NumberFormat('es-MX', {
    style: 'currency',
    currency: 'MXN',
    maximumFractionDigits: 0
  }).format(rawTotal);

  const generateSummaryText = () => {
    const featureNames = addonFeatures
      .filter((f) => selectedFeatures.includes(f.id))
      .map((f) => f.name)
      .join(', ');

    return `Hola Uriel! Estuve usando el cotizador de RoliCode:
- Tipo: ${currentProject.name}
- Funcionalidades: ${featureNames || 'Básicas'}
- Modalidad: ${timelineUrgency === 'express' ? 'Entrega Acelerada' : 'Entrega Estándar'}
- Estimado calculado: ${formattedPrice} (${Math.round(rawWeeks)} semanas aprox.)
Me gustaría afinar detalles de mi proyecto.`;
  };

  const whatsappUrl = `https://wa.me/527141087330?text=${encodeURIComponent(generateSummaryText())}`;
  const mailtoUrl = `mailto:urielr.g.57@gmail.com?subject=Cotización de Proyecto en RoliCode&body=${encodeURIComponent(generateSummaryText())}`;

  return (
    <section id="cotizador" className="py-5 position-relative">
      <div className="container py-4">
        {/* Section Header */}
        <div className="text-center max-w-700 mx-auto mb-5">
          <span className="badge bg-success bg-opacity-15 text-success border border-success border-opacity-30 px-3 py-2 rounded-pill fw-semibold mb-2">
            Presupuestos Transparentes
          </span>
          <h2 className="display-5 fw-bold text-white mb-3">
            Calculadora Interactiva de Proyectos
          </h2>
          <p className="lead mx-auto" style={{ maxWidth: '680px' }}>
            Selecciona el tipo de solución y las funcionalidades que necesitas para obtener una estimación clara de inversión y plazos de entrega.
          </p>
        </div>

        <div className="row g-4 align-items-start">
          {/* Options Column */}
          <div className="col-lg-7">
            {/* Step 1: Project Type */}
            <div className="mb-4">
              <h4 className="h5 text-white fw-bold mb-3 d-flex align-items-center gap-2">
                <span className="badge bg-primary rounded-circle">1</span>
                Tipo de Proyecto:
              </h4>
              <div className="row g-2">
                {projectTypes.map((type) => (
                  <div key={type.id} className="col-md-6">
                    <div
                      className={`rc-option-card h-100 ${
                        selectedType === type.id ? 'selected' : ''
                      }`}
                      onClick={() => setSelectedType(type.id)}
                    >
                      <div className="d-flex align-items-center justify-content-between mb-1">
                        <strong className="text-white small">{type.name}</strong>
                        {selectedType === type.id && (
                          <FaCheck className="text-primary flex-shrink-0" />
                        )}
                      </div>
                      <p className="text-light mb-0" style={{ fontSize: '0.84rem' }}>
                        {type.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Step 2: Features / Addons */}
            <div className="mb-4">
              <h4 className="h5 text-white fw-bold mb-3 d-flex align-items-center gap-2">
                <span className="badge bg-primary rounded-circle">2</span>
                Funcionalidades Requeridas:
              </h4>
              <div className="row g-2">
                {addonFeatures.map((feat) => {
                  const isChecked = selectedFeatures.includes(feat.id);
                  return (
                    <div key={feat.id} className="col-md-6">
                      <div
                        className={`rc-option-card h-100 ${isChecked ? 'selected' : ''}`}
                        onClick={() => toggleFeature(feat.id)}
                      >
                        <div className="d-flex align-items-start justify-content-between gap-2">
                          <div>
                            <span className="text-white fw-semibold small d-block">
                              {feat.name}
                            </span>
                            <span className="text-light" style={{ fontSize: '0.82rem' }}>
                              {feat.desc}
                            </span>
                          </div>
                          <span
                            className={`badge ${
                              isChecked
                                ? 'bg-primary text-white'
                                : 'bg-dark text-muted border border-secondary border-opacity-40'
                            } p-1 rounded`}
                          >
                            <FaCheck size={10} />
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Step 3: Priority */}
            <div>
              <h4 className="h5 text-white fw-bold mb-3 d-flex align-items-center gap-2">
                <span className="badge bg-primary rounded-circle">3</span>
                Tiempo de Entrega & Prioridad:
              </h4>
              <div className="d-flex flex-wrap gap-2">
                <button
                  type="button"
                  className={`btn btn-sm px-3 rounded-3 ${
                    timelineUrgency === 'standard'
                      ? 'btn-info text-dark fw-bold'
                      : 'rc-btn-secondary text-white border-opacity-50'
                  }`}
                  onClick={() => setTimelineUrgency('standard')}
                >
                  Estándar (Desarrollo por sprints regulares)
                </button>
                <button
                  type="button"
                  className={`btn btn-sm px-3 rounded-3 ${
                    timelineUrgency === 'express'
                      ? 'btn-warning text-dark fw-bold'
                      : 'rc-btn-secondary text-white border-opacity-50'
                  }`}
                  onClick={() => setTimelineUrgency('express')}
                >
                  Acelerado / Express (Dedicación prioritaria)
                </button>
              </div>
            </div>
          </div>

          {/* Real-time Summary Card Column */}
          <div className="col-lg-5">
            <div className="rc-card rc-card-glow-border sticky-top" style={{ top: '90px' }}>
              <div className="d-flex align-items-center justify-content-between pb-3 mb-3 border-bottom border-secondary border-opacity-25">
                <div className="d-flex align-items-center gap-2">
                  <span className="p-2 rounded-2 bg-success bg-opacity-20 text-success">
                    <FaCalculator size={18} />
                  </span>
                  <div>
                    <h5 className="text-white fw-bold mb-0">Resumen de Inversión</h5>
                    <small className="text-info font-monospace">Estimado transparente</small>
                  </div>
                </div>
                <span className="badge bg-primary bg-opacity-25 text-info border border-primary border-opacity-40">
                  Moneda: MXN
                </span>
              </div>

              {/* Price Display */}
              <div className="rc-inner-panel p-4 text-center mb-3 border border-primary border-opacity-30">
                <span className="text-muted small text-uppercase font-monospace d-block mb-1">
                  Inversión Aproximada
                </span>
                <div className="display-6 fw-bold text-white mb-1">{formattedPrice}</div>
                <div className="text-info small d-flex align-items-center justify-content-center gap-2">
                  <FaClock size={13} />
                  <span>Plazo estimado: <strong className="text-white">~{Math.round(rawWeeks)} semanas</strong></span>
                </div>
              </div>

              {/* Breakdown details */}
              <div className="small font-monospace mb-4 pb-3 border-bottom border-secondary border-opacity-25">
                <div className="d-flex justify-content-between mb-2">
                  <span className="text-muted">Base ({currentProject.name.slice(0, 22)}...):</span>
                  <span className="text-white fw-semibold">${currentProject.basePrice} MXN</span>
                </div>
                <div className="d-flex justify-content-between mb-2">
                  <span className="text-muted">Módulos adicionales ({selectedFeatures.length}):</span>
                  <span className="text-white fw-semibold">+${addonsTotal} MXN</span>
                </div>
                {timelineUrgency === 'express' && (
                  <div className="d-flex justify-content-between text-warning mb-2">
                    <span>Recargo Prioridad Express:</span>
                    <span className="fw-bold">+25%</span>
                  </div>
                )}
                <div className="d-flex justify-content-between pt-2 border-top border-secondary border-opacity-25 fw-bold">
                  <span className="text-light">Garantía y Acompañamiento:</span>
                  <span className="text-success">Incluido</span>
                </div>
              </div>

              {/* Benefits list */}
              <div className="mb-4 small">
                <div className="d-flex align-items-center gap-2 mb-2 text-light">
                  <FaShieldAlt className="text-success" />
                  <span>Alcance y entregables definidos por escrito.</span>
                </div>
                <div className="d-flex align-items-center gap-2 text-light">
                  <FaRocket className="text-info" />
                  <span>Despliegue guiado y soporte tras entrega.</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="d-grid gap-2">
                <a
                  href={mailtoUrl}
                  className="rc-btn-primary text-center py-2"
                >
                  <FaEnvelope /> Solicitar Propuesta por Correo
                </a>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-outline-success text-white py-2 d-flex align-items-center justify-content-center gap-2"
                >
                  <FaWhatsapp size={16} /> Enviar Cotización por WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
