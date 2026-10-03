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
    <nav className={`navbar navbar-expand-lg fixed-top rc-navbar ${scrolled ? 'py-2 shadow-lg' : 'py-2 py-lg-3'}`}>
      <div className="container-xl px-3 px-lg-4">
        {/* Brand */}
        <a className="rc-brand-logo" href="#inicio" onClick={closeMenu}>
          <img
            src={logoImg}
            alt="RoliCode Logo"
            className="rounded-2 shadow-sm"
            style={{ height: '46px', width: 'auto', objectFit: 'contain' }}
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
          {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
        </button>

        {/* Nav Links */}
        <div className={`collapse navbar-collapse rc-navbar-collapse-container ${isOpen ? 'show' : ''}`} id="rcNavbarContent">
          <ul className="navbar-nav mx-auto align-items-lg-center gap-1 gap-lg-1 gap-xl-2 my-2 my-lg-0">
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
              <a className="rc-nav-link" href="#demos" onClick={closeMenu}>Demos</a>
            </li>
            <li className="nav-item">
              <a className="rc-nav-link" href="#sobre-mi" onClick={closeMenu}>Sobre Mí</a>
            </li>
            <li className="nav-item">
              <a className="rc-nav-link" href="#contacto" onClick={closeMenu}>Contacto</a>
            </li>
          </ul>

          <div className="d-flex align-items-center mt-3 mt-lg-0">
            <a
              href="#cotizador"
              className="rc-btn-primary rc-btn-nav w-100 w-lg-auto"
              onClick={closeMenu}
            >
              <FaRocket size={13} /> Cotizar Proyecto
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
