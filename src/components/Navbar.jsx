import { useState, useEffect } from 'react';
import { FaBars, FaTimes, FaRocket } from 'react-icons/fa';
import logoImg from '../assets/Logo.png';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className={`navbar navbar-expand-lg fixed-top rc-navbar ${scrolled ? 'py-2 shadow-lg' : 'py-3'}`}>
      <div className="container px-3 px-md-4">
        {/* Brand */}
        <a className="rc-brand-logo" href="#inicio" onClick={closeMenu}>
          <img
            src={logoImg}
            alt="RoliCode Logo"
            className="rounded-2 shadow-sm"
            style={{ height: '58px', width: 'auto', objectFit: 'contain' }}
          />
          <span>Roli<span className="rc-brand-code">Code</span></span>
        </a>

        {/* Mobile Toggle Button */}
        <button
          className="btn btn-outline-light d-lg-none border-secondary border-opacity-50 p-2 rounded-3"
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Abrir menú"
        >
          {isOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
        </button>

        {/* Nav Links */}
        <div className={`collapse navbar-collapse rc-navbar-collapse-container ${isOpen ? 'show' : ''}`} id="rcNavbarContent">
          <ul className="navbar-nav mx-auto align-items-lg-center gap-1 gap-lg-2">
            <li className="nav-item">
              <a className="rc-nav-link" href="#inicio" onClick={closeMenu}>Inicio</a>
            </li>
            <li className="nav-item">
              <a className="rc-nav-link" href="#servicios" onClick={closeMenu}>Servicios</a>
            </li>
            <li className="nav-item">
              <a className="rc-nav-link" href="#proyectos" onClick={closeMenu}>Proyectos</a>
            </li>
            <li className="nav-item">
              <a className="rc-nav-link d-inline-flex align-items-center gap-2 text-warning" href="#demos" onClick={closeMenu}>
                <span className="badge bg-warning text-dark fw-bold px-2 py-1" style={{ fontSize: '0.78rem' }}>Demos</span>
                <span>En Vivo</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="rc-nav-link" href="#cotizador" onClick={closeMenu}>Cotizador</a>
            </li>
            <li className="nav-item">
              <a className="rc-nav-link" href="#sobre-mi" onClick={closeMenu}>Sobre Mí</a>
            </li>
            <li className="nav-item">
              <a className="rc-nav-link" href="#contacto" onClick={closeMenu}>Contacto</a>
            </li>
          </ul>

          <div className="d-flex align-items-center gap-3 mt-3 mt-lg-0">
            <a
              href="#cotizador"
              className="rc-btn-primary w-100 w-lg-auto"
              style={{ fontSize: '1rem', fontWeight: '700' }}
              onClick={closeMenu}
            >
              <FaRocket size={15} /> Cotizar Proyecto
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
