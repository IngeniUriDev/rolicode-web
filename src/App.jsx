import './App.css'
import { FaLaptopCode, FaMobileAlt, FaServer, FaCalendarCheck, FaBoxOpen, FaChartLine, FaExternalLinkAlt } from 'react-icons/fa';

function App() {
  return (
    <div className="App">
      {/* --- NAVBAR --- */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
        <div className="container">
          <a className="navbar-brand fw-bold" href="#">RoliCode</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto align-items-center">
              <li className="nav-item"><a className="nav-link" href="#inicio">Inicio</a></li>
              <li className="nav-item"><a className="nav-link" href="#servicios">Servicios</a></li>
              <li className="nav-item"><a className="nav-link" href="#portafolio">Portafolio</a></li>
              <li className="nav-item"><a className="nav-link" href="#contacto">Contacto</a></li>
              {/* BOTÓN DESTACADO EN EL MENÚ */}
              
            </ul>
          </div>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <header id="inicio" className="bg-primary text-white text-center py-5">
        <div className="container py-5">
          <h1 className="display-4 fw-bold">Transformamos ideas en software</h1>
          <p className="lead mb-4">Desarrollo web, móvil y APIs robustas para hacer crecer tu negocio.</p>
          <a href="#contacto" className="btn btn-light btn-lg fw-bold text-primary">Solicitar Cotización</a>
        </div>
      </header>

      {/* --- SERVICIOS --- */}
      <section id="servicios" className="py-5">
        <div className="container text-center">
          <h2 className="mb-5 fw-bold">Nuestros Servicios</h2>
          <div className="row">
            <div className="col-md-4 mb-4">
              <div className="card h-100 shadow-sm border-0">
                <div className="card-body">
                  <h3 className="h5 card-title text-primary"><FaLaptopCode size={30} className="text-primary mb-3" /> Desarrollo Web</h3>
                  <p className="card-text">Sitios rápidos y modernos con React, HTML y Bootstrap. Adaptables a cualquier dispositivo.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card h-100 shadow-sm border-0">
                <div className="card-body">
                  <h3 className="h5 card-title text-primary"><FaMobileAlt size={30} className="text-primary mb-3" /> Apps Móviles</h3>
                  <p className="card-text">Aplicaciones nativas y multiplataforma enfocadas en la experiencia del usuario.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card h-100 shadow-sm border-0">
                <div className="card-body">
                  <h3 className="h5 card-title text-primary"><FaServer size={30} className="text-primary mb-3" /> Backend & APIs</h3>
                  <p className="card-text">Sistemas robustos y escalables con Node.js, Spring Boot y bases de datos SQL.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- PORTAFOLIO --- */}
      <section id="portafolio" className="py-5 bg-light">
        <div className="container text-center">
          <h2 className="mb-5 fw-bold">Nuestros Proyectos</h2>
          <p className="mb-4 text-muted">Soluciones reales desarrolladas para demostrar el valor que podemos llevar a tu empresa.</p>
          <div className="row">
            
            {/* PROYECTO 1: ¡AHORA ESTÁ EN LÍNEA! */}
            <div className="col-md-4 mb-4">
              <div className="card h-100 border-success shadow-sm">
                <div className="card-body">
                  <span className="badge bg-success mb-2">✅ En Línea</span>
                  <h3 className="h5 card-title">App de Gestión de Citas</h3>
                  <p className="card-text small">React + Node.js + PostgreSQL. Sistema completo con modo oscuro, CRUD y panel administrativo para negocios.</p>
                  <a 
                    href="https://citas.rolicode.com.mx" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn btn-outline-success btn-sm w-100 mt-2 d-flex align-items-center justify-content-center gap-2"
                  >
                    Probar Demo en Vivo <FaExternalLinkAlt size={12} />
                  </a>
                </div>
              </div>
            </div>

            {/* PROYECTO 2 */}
            <div className="col-md-4 mb-4">
              <div className="card h-100 border-primary">
                <div className="card-body">
                  <span className="badge bg-secondary mb-2">Planificado</span>
                  <h3 className="h5 card-title">API de Inventario</h3>
                  <p className="card-text small">Spring Boot + Java. Una API RESTful segura y rápida para control de stock en tiempo real.</p>
                </div>
              </div>
            </div>

            {/* PROYECTO 3 */}
            <div className="col-md-4 mb-4">
              <div className="card h-100 border-primary">
                <div className="card-body">
                  <span className="badge bg-secondary mb-2">Planificado</span>
                  <h3 className="h5 card-title">Tracker de Hábitos</h3>
                  <p className="card-text small">Kotlin + Firebase. App móvil nativa para ayudar a los usuarios a construir rutinas diarias.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- POR QUÉ ELEGIRNOS --- */}
      <section className="py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <h2 className="fw-bold mb-4">¿Por qué elegir RoliCode?</h2>
              <ul className="list-unstyled">
                <li className="mb-3">
                  <span className="text-primary me-2 fw-bold">✓</span> 
                  <strong>Soluciones a medida:</strong> Personalizadas que se adaptan a tus necesidades.
                </li>
                <li className="mb-3">
                  <span className="text-primary me-2 fw-bold">✓</span> 
                  <strong>Tecnología moderna:</strong> React, Node.js, PostgreSQL, Java, Kotlin.
                </li>
                <li className="mb-3">
                  <span className="text-primary me-2 fw-bold">✓</span> 
                  <strong>Soporte continuo:</strong> Te acompañamos después del lanzamiento.
                </li>
                <li className="mb-3">
                  <span className="text-primary me-2 fw-bold">✓</span> 
                  <strong>Precios competitivos:</strong> Calidad profesional sin costos excesivos.
                </li>
              </ul>
            </div>
            <div className="col-md-6 text-center">
              <div className="bg-light p-5 rounded shadow-sm">
                <h3 className="text-primary fw-bold">+20</h3>
                <p className="text-muted">Proyectos completados</p>
                <h3 className="text-primary fw-bold">100%</h3>
                <p className="text-muted">Clientes satisfechos</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- CONTACTO --- */}
      <section id="contacto" className="py-5 bg-dark text-white text-center">
        <div className="container">
          <h2 className="mb-4">¿Listo para iniciar tu proyecto?</h2>
          <p className="mb-4">Hablemos sobre cómo RoliCode puede ayudarte.</p>
          <a href="mailto:urielr.g.57@gmail.com" className="btn btn-primary btn-lg">urielr.g.57@gmail.com</a>
          <p className="mt-4 small text-muted">© 2026 RoliCode. Todos los derechos reservados.</p>
        </div>
      </section>
    </div>
  );
}

export default App;