import './App.css'

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
            <ul className="navbar-nav ms-auto">
              <li className="nav-item"><a className="nav-link" href="#inicio">Inicio</a></li>
              <li className="nav-item"><a className="nav-link" href="#servicios">Servicios</a></li>
              <li className="nav-item"><a className="nav-link" href="#portafolio">Portafolio</a></li>
              <li className="nav-item"><a className="nav-link" href="#contacto">Contacto</a></li>
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
                  <h3 className="h5 card-title text-primary">💻 Desarrollo Web</h3>
                  <p className="card-text">Sitios rápidos y modernos con React, HTML y Bootstrap. Adaptables a cualquier dispositivo.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card h-100 shadow-sm border-0">
                <div className="card-body">
                  <h3 className="h5 card-title text-primary">📱 Apps Móviles</h3>
                  <p className="card-text">Aplicaciones nativas y multiplataforma enfocadas en la experiencia del usuario.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card h-100 shadow-sm border-0">
                <div className="card-body">
                  <h3 className="h5 card-title text-primary">⚙️ Backend & APIs</h3>
                  <p className="card-text">Sistemas robustos y escalables con Node.js, Spring Boot y bases de datos SQL.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- PORTAFOLIO (Tus 3 proyectos futuros) --- */}
      <section id="portafolio" className="py-5 bg-light">
        <div className="container text-center">
          <h2 className="mb-5 fw-bold">Proyectos en Desarrollo</h2>
          <p className="mb-4 text-muted">Estamos construyendo estas soluciones para demostrar el valor que podemos llevar a tu empresa.</p>
          <div className="row">
            <div className="col-md-4 mb-4">
              <div className="card h-100 border-primary">
                <div className="card-body">
                  <span className="badge bg-warning text-dark mb-2">En Progreso</span>
                  <h3 className="h5 card-title">App de Gestión de Citas</h3>
                  <p className="card-text small">React + Node.js + PostgreSQL. Un sistema para que negocios agenden clientes sin conflictos.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card h-100 border-primary">
                <div className="card-body">
                  <span className="badge bg-secondary mb-2">Planificado</span>
                  <h3 className="h5 card-title">API de Inventario</h3>
                  <p className="card-text small">Spring Boot + Java. Una API RESTful segura y rápida para control de stock en tiempo real.</p>
                </div>
              </div>
            </div>
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

      {/* --- CONTACTO --- */}
      <section id="contacto" className="py-5 bg-dark text-white text-center">
        <div className="container">
          <h2 className="mb-4">¿Listo para iniciar tu proyecto?</h2>
          <p className="mb-4">Hablemos sobre cómo RoliCode puede ayudarte.</p>
          <a href="mailto:contacto@rolicode.com.mx" className="btn btn-primary btn-lg">urielr.g.57@gmail.com</a>
          <p className="mt-4 small text-muted">© 2026 RoliCode. Todos los derechos reservados.</p>
        </div>
      </section>
    </div>
  )
}

export default App