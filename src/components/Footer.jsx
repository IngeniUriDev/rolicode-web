import { FaCode, FaGithub, FaEnvelope, FaHeart, FaWhatsapp } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-5 bg-black border-top border-secondary border-opacity-25 text-secondary">
      <div className="container">
        <div className="row g-4 align-items-center justify-content-between">
          <div className="col-md-6 text-center text-md-start">
            <a className="rc-brand-logo mb-2 d-inline-flex" href="#inicio">
              <span className="p-2 rounded-3 bg-dark border border-secondary border-opacity-25 d-inline-flex align-items-center justify-content-center text-primary">
                <FaCode size={18} />
              </span>
              <span>Roli<span className="rc-brand-code">Code</span></span>
            </a>
            <p className="small text-muted mb-0" style={{ maxWidth: '420px' }}>
              Servicios profesionales de ingeniería y desarrollo de software a medida. Soluciones modernas en la nube, backend escalable y aplicaciones interactivas.
            </p>
          </div>

          <div className="col-md-6 text-center text-md-end">
            <div className="d-flex flex-wrap gap-3 justify-content-center justify-content-md-end mb-3">
              <a href="#servicios" className="text-secondary text-decoration-none small hover-light">Servicios</a>
              <a href="#proyectos" className="text-secondary text-decoration-none small hover-light">Proyectos</a>
              <a href="#demos" className="text-warning text-decoration-none small hover-light">Demos en Vivo</a>
              <a href="#cotizador" className="text-secondary text-decoration-none small hover-light">Cotizador</a>
              <a href="#contacto" className="text-secondary text-decoration-none small hover-light">Contacto</a>
            </div>

            <div className="d-flex align-items-center justify-content-center justify-content-md-end gap-3 text-secondary">
              <a
                href="https://github.com/urielrg"
                target="_blank"
                rel="noreferrer"
                className="text-secondary hover-light"
                title="GitHub"
              >
                <FaGithub size={18} />
              </a>
              <a
                href="https://wa.me/527141087330"
                target="_blank"
                rel="noreferrer"
                className="text-secondary hover-light"
                title="WhatsApp (+52 714 108 7330)"
              >
                <FaWhatsapp size={18} />
              </a>
              <a
                href="mailto:urielr.g.57@gmail.com"
                className="text-secondary hover-light"
                title="Email"
              >
                <FaEnvelope size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-4 pt-3 border-top border-secondary border-opacity-10 d-flex flex-column flex-md-row align-items-center justify-content-between small text-muted">
          <div>
            © {currentYear} RoliCode (<a href="https://rolicode.com.mx" className="text-muted text-decoration-none">rolicode.com.mx</a>). Todos los derechos reservados.
          </div>
          <div className="mt-2 mt-md-0 d-flex align-items-center gap-1">
            <span>Construido con</span>
            <FaHeart className="text-danger" size={12} />
            <span>usando React 19 & Vite</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
