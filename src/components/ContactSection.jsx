import { useState } from 'react';
import {
  FaEnvelope,
  FaWhatsapp,
  FaPaperPlane,
  FaCheck,
  FaCopy,
  FaClock,
  FaShieldAlt
} from 'react-icons/fa';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    serviceType: 'Desarrollo Web & SaaS',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('urielr.g.57@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const mailtoUrl = `mailto:urielr.g.57@gmail.com?subject=Nuevo Proyecto: ${encodeURIComponent(formData.serviceType)}&body=${encodeURIComponent(
    `Hola Uriel,\n\nSoy ${formData.name} (${formData.email}).\nMe gustaría hablar sobre el siguiente proyecto:\n\n${formData.message}`
  )}`;

  const whatsappMessage = `Hola RoliCode! Soy ${formData.name}. Me interesa consultar sobre: ${formData.serviceType}. Detalle: ${formData.message}`;
  const whatsappUrl = `https://wa.me/527141087330?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <section id="contacto" className="py-5 position-relative">
      <div className="container py-4">
        {/* Section Header */}
        <div className="text-center max-w-700 mx-auto mb-5">
          <span className="rc-section-badge rc-section-badge-primary">
            Canales de Contacto
          </span>
          <h2 className="display-5 fw-bold text-white mb-3">
            Hablemos sobre tu próximo proyecto
          </h2>
          <p className="lead mx-auto" style={{ maxWidth: '650px' }}>
            ¿Tienes una idea en mente o necesitas optimizar un sistema existente? Escríbeme y evaluamos la mejor estrategia técnica.
          </p>
        </div>

        <div className="row g-4 justify-content-center">
          {/* Direct channels card */}
          <div className="col-lg-5">
            <div className="rc-card rc-card-glow-border h-100 p-4 d-flex flex-column justify-content-between">
              <div>
                <h4 className="h5 text-white fw-bold mb-3">Canales Directos</h4>
                <p className="text-light small mb-4" style={{ fontSize: '0.94rem' }}>
                  Respuesta en menos de 24 horas. Evaluamos requerimientos técnicos y alcance de forma transparente.
                </p>

                {/* Email Box */}
                <div className="rc-inner-panel mb-3">
                  <div className="d-flex align-items-center justify-content-between">
                    <div className="d-flex align-items-center gap-2">
                      <FaEnvelope className="text-primary" size={18} />
                      <div>
                        <span className="text-muted small d-block">Correo Electrónico:</span>
                        <a
                          href="mailto:urielr.g.57@gmail.com"
                          className="text-white text-decoration-none fw-bold font-monospace small"
                        >
                          urielr.g.57@gmail.com
                        </a>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={handleCopyEmail}
                      className="btn btn-outline-secondary btn-sm p-2 text-white border-opacity-50"
                      title="Copiar correo al portapapeles"
                    >
                      {copiedEmail ? <FaCheck className="text-success" /> : <FaCopy size={13} />}
                    </button>
                  </div>
                </div>

                {/* WhatsApp Box */}
                <div className="rc-inner-panel mb-4">
                  <div className="d-flex align-items-center gap-2">
                    <FaWhatsapp className="text-success" size={20} />
                    <div>
                      <span className="text-muted small d-block">WhatsApp & Mensajería Directa:</span>
                      <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="text-success text-decoration-none fw-bold font-monospace small"
                      >
                        +52 714 108 7330 (Chatear en WhatsApp ↗)
                      </a>
                    </div>
                  </div>
                </div>

                {/* Commitments */}
                <div className="small d-flex flex-column gap-2 text-light">
                  <div className="d-flex align-items-center gap-2">
                    <FaClock className="text-info" />
                    <span>Disponibilidad: Lunes a Sábado</span>
                  </div>
                  <div className="d-flex align-items-center gap-2">
                    <FaShieldAlt className="text-success" />
                    <span>Acuerdo de Confidencialidad (NDA) disponible</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-top border-secondary border-opacity-25">
                <span className="text-info small font-monospace">
                  Dominio principal: rolicode.com.mx
                </span>
              </div>
            </div>
          </div>

          {/* Form Column */}
          <div className="col-lg-7">
            <div className="rc-card p-4">
              {!submitted ? (
                <form onSubmit={handleSubmit}>
                  <h4 className="h5 text-white fw-bold mb-3">Envía un Mensaje Detallado</h4>

                  <div className="row g-3">
                    <div className="col-md-6">
                      <label className="form-label text-white small fw-bold">Tu Nombre o Empresa *</label>
                      <input
                        type="text"
                        name="name"
                        className="form-control rc-input"
                        placeholder="Ej. Carlos Mendoza / Empresa"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="col-md-6">
                      <label className="form-label text-white small fw-bold">Correo Electrónico *</label>
                      <input
                        type="email"
                        name="email"
                        className="form-control rc-input"
                        placeholder="carlos@empresa.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="col-12">
                      <label className="form-label text-white small fw-bold">Servicio de Interés</label>
                      <select
                        name="serviceType"
                        className="form-select rc-input"
                        value={formData.serviceType}
                        onChange={handleChange}
                      >
                        <option value="Desarrollo Web & SaaS">Desarrollo Web & Plataformas SaaS</option>
                        <option value="APIs & Backend Empresarial">APIs RESTful & Backend (Spring Boot / Node)</option>
                        <option value="App Móvil Nativa">Aplicaciones Móviles (Android / Kotlin)</option>
                        <option value="Despliegue & Consultoría Cloud">Despliegue, Servidores & Certificados SSL</option>
                        <option value="Otro">Otro requerimiento específico</option>
                      </select>
                    </div>

                    <div className="col-12">
                      <label className="form-label text-white small fw-bold">Detalles del Proyecto *</label>
                      <textarea
                        name="message"
                        rows="4"
                        className="form-control rc-input"
                        placeholder="Cuéntame sobre la idea, requerimientos o tecnologías preferidas..."
                        value={formData.message}
                        onChange={handleChange}
                        required
                      ></textarea>
                    </div>

                    <div className="col-12 pt-2">
                      <button type="submit" className="rc-btn-primary w-100 py-3">
                        <FaPaperPlane /> Preparar y Enviar Solicitud
                      </button>
                    </div>
                  </div>
                </form>
              ) : (
                <div className="text-center py-4">
                  <div className="d-inline-flex p-3 rounded-circle bg-success bg-opacity-20 text-success mb-3">
                    <FaCheck size={36} />
                  </div>
                  <h4 className="text-white fw-bold mb-2">¡Mensaje Preparado!</h4>
                  <p className="text-light small mb-4">
                    Haz clic a continuación para enviarlo por tu canal de preferencia con la información ya lista:
                  </p>

                  <div className="d-flex flex-wrap gap-2 justify-content-center">
                    <a
                      href={mailtoUrl}
                      className="rc-btn-primary py-2 px-4"
                    >
                      <FaEnvelope /> Abrir en tu Correo (Enviar a Uriel)
                    </a>
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-outline-success text-white py-2 px-3 d-flex align-items-center gap-2"
                    >
                      <FaWhatsapp size={16} /> Enviar por WhatsApp
                    </a>
                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="btn btn-secondary btn-sm py-2 px-3"
                    >
                      Modificar datos
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
