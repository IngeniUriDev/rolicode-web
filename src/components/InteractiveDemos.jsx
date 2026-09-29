import { useState } from 'react';
import InventoryDemo from './InventoryDemo';
import {
  FaBoxes,
  FaCalendarCheck,
  FaTerminal,
  FaPlay,
  FaCheckCircle,
  FaExternalLinkAlt,
  FaClock,
  FaUserCheck,
  FaRedo,
  FaList,
  FaPlus,
  FaTrash,
  FaCheck,
  FaDatabase
} from 'react-icons/fa';

export default function InteractiveDemos() {
  const [activeTab, setActiveTab] = useState('citas'); // 'citas' | 'api'

  // --- State for Demo 1: Mini Citas Agendador ---
  const [citasSubTab, setCitasSubTab] = useState('agendar'); // 'agendar' | 'agenda'
  const [selectedService, setSelectedService] = useState('Consultoría Técnica Inicial (45 min)');
  const [selectedTime, setSelectedTime] = useState('10:00 AM');
  const [clientName, setClientName] = useState('');
  const [bookingConfirmed, setBookingConfirmed] = useState(false);
  const [confirmedBookingData, setConfirmedBookingData] = useState(null);

  const [bookedAppointments, setBookedAppointments] = useState(() => {
    try {
      const saved = localStorage.getItem('rolicode_demo_citas');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) return parsed;
      }
    } catch {
      // fallback
    }
    return [
      {
        id: 'DEMO-RC-8041',
        service: 'Consultoría Técnica Inicial (45 min)',
        time: '10:00 AM',
        client: 'Ing. Uriel Rojas',
        date: 'Hoy',
        status: 'Confirmada'
      }
    ];
  });

  const availableHours = ['09:00 AM', '10:00 AM', '11:30 AM', '02:00 PM', '04:00 PM', '05:30 PM'];

  const handleBookDemo = (e) => {
    e.preventDefault();
    if (!clientName.trim()) {
      alert('Por favor introduce tu nombre o el de tu empresa.');
      return;
    }
    const ticketId = 'DEMO-RC-' + Math.floor(1000 + Math.random() * 9000);
    const newBooking = {
      id: ticketId,
      service: selectedService,
      time: selectedTime,
      client: clientName,
      date: new Date().toLocaleDateString('es-MX', { day: '2-digit', month: 'short' }),
      status: 'Confirmada'
    };
    const updated = [newBooking, ...bookedAppointments];
    setBookedAppointments(updated);
    try {
      localStorage.setItem('rolicode_demo_citas', JSON.stringify(updated));
    } catch {
      // ignore
    }
    setConfirmedBookingData(newBooking);
    setBookingConfirmed(true);
  };

  const handleToggleDemoStatus = (id) => {
    const updated = bookedAppointments.map((item) =>
      item.id === id
        ? { ...item, status: item.status === 'Confirmada' ? 'Atendida' : 'Confirmada' }
        : item
    );
    setBookedAppointments(updated);
    try {
      localStorage.setItem('rolicode_demo_citas', JSON.stringify(updated));
    } catch {
      // ignore
    }
  };

  const handleDeleteDemoBooking = (id) => {
    const updated = bookedAppointments.filter((item) => item.id !== id);
    setBookedAppointments(updated);
    try {
      localStorage.setItem('rolicode_demo_citas', JSON.stringify(updated));
    } catch {
      // ignore
    }
  };

  const handleResetBooking = () => {
    setBookingConfirmed(false);
    setConfirmedBookingData(null);
    setClientName('');
  };

  // --- State for Demo 2: API Tester Console ---
  const [selectedEndpoint, setSelectedEndpoint] = useState('GET /api/v1/health');
  const [apiResponse, setApiResponse] = useState(null);
  const [isLoadingApi, setIsLoadingApi] = useState(false);
  const [responseTime, setResponseTime] = useState(null);

  const endpointsMap = {
    'GET /api/v1/health': {
      method: 'GET',
      path: '/api/v1/health',
      headers: { 'Content-Type': 'application/json', 'X-Runtime': 'Node.js v20 / Spring Boot' },
      body: {
        status: 'UP',
        timestamp: '2026-09-27T23:59:00Z',
        database: {
          status: 'CONNECTED',
          engine: 'PostgreSQL 16.2',
          pool_active_connections: 4,
          max_connections: 50
        },
        uptime_seconds: 489201,
        system_load: '0.12'
      }
    },
    'GET /api/v1/projects': {
      method: 'GET',
      path: '/api/v1/projects',
      headers: { 'Content-Type': 'application/json', 'Cache-Control': 'max-age=300' },
      body: {
        total: 4,
        page: 1,
        items: [
          { id: 'citas-rolicode', name: 'App de Gestión de Citas', status: 'ACTIVE', url: 'https://citas.rolicode.com.mx' },
          { id: 'api-inventario', name: 'API Spring Boot Retail', status: 'DEPLOYED', version: 'v3.2' },
          { id: 'habitflow', name: 'HabitFlow Android', status: 'BUILD_PASS', platform: 'Kotlin' }
        ]
      }
    },
    'POST /api/v1/orders/estimate': {
      method: 'POST',
      path: '/api/v1/orders/estimate',
      headers: { 'Content-Type': 'application/json', 'X-Service-Cost': 'Calculated' },
      body: {
        quote_id: 'QT-2026-88',
        currency: 'MXN',
        estimated_duration_weeks: 3,
        suggested_architecture: 'React + Node.js + PostgreSQL',
        included_features: ['Autenticación JWT', 'Base de datos relacional', 'SSL + Despliegue Cloud'],
        ready_for_production: true
      }
    }
  };

  const handleRunApiRequest = () => {
    setIsLoadingApi(true);
    setApiResponse(null);
    setResponseTime(null);

    const randomLatency = Math.floor(Math.random() * 45) + 20;

    setTimeout(() => {
      setApiResponse(endpointsMap[selectedEndpoint]);
      setResponseTime(randomLatency);
      setIsLoadingApi(false);
    }, randomLatency);
  };

  return (
    <section id="demos" className="py-5 position-relative">
      <div className="container py-4">
        {/* Section Header */}
        <div className="text-center max-w-700 mx-auto mb-5">
          <span className="rc-section-badge rc-section-badge-warning">
            Laboratorio de Pruebas en Vivo
          </span>
          <h2 className="display-5 fw-bold text-white mb-3">
            Interactúa con Funcionalidades de Muestra
          </h2>
          <p className="lead mx-auto" style={{ maxWidth: '680px' }}>
            Prueba directamente en esta página tres de los módulos esenciales que implementamos: sistema de reservas en tiempo real, consola de APIs REST y gestor de inventario con PostgreSQL/Supabase.
          </p>

          {/* Tab Switcher */}
          <div className="d-inline-flex p-1 rounded-pill rc-inner-panel mt-3">
            <button
              type="button"
              className={`btn btn-sm px-4 rounded-pill fw-semibold ${
                activeTab === 'citas'
                  ? 'btn-primary text-white shadow'
                  : 'text-light border-0 bg-transparent'
              }`}
              onClick={() => setActiveTab('citas')}
            >
              <FaCalendarCheck className="me-2 text-info" /> 1. Simulador de Citas
            </button>
            <button
              type="button"
              className={`btn btn-sm px-4 rounded-pill fw-semibold ${
                activeTab === 'api'
                  ? 'btn-primary text-white shadow'
                  : 'text-light border-0 bg-transparent'
              }`}
              onClick={() => setActiveTab('api')}
            >
              <FaTerminal className="me-2 text-warning" /> 2. Consola de APIs
            </button>
            <button
              type="button"
              className={`btn btn-sm px-4 rounded-pill fw-semibold ${
                activeTab === 'inventario'
                  ? 'btn-primary text-white shadow'
                  : 'text-light border-0 bg-transparent'
              }`}
              onClick={() => setActiveTab('inventario')}
            >
              <FaBoxes className="me-2 text-success" /> 3. Almacén & Stock en Vivo
            </button>
          </div>
        </div>

        {/* --- DEMO 1: Mini Citas Agendador --- */}
        {activeTab === 'citas' && (
          <div className="row g-4 justify-content-center">
            <div className="col-lg-8">
              <div className="rc-card rc-card-glow-border">
                <div className="d-flex align-items-center justify-content-between pb-3 mb-4 border-bottom border-secondary border-opacity-25">
                  <div className="d-flex align-items-center gap-2">
                    <span className="p-2 rounded-2 bg-success bg-opacity-20 text-success">
                      <FaCalendarCheck size={18} />
                    </span>
                    <div>
                      <h4 className="h5 text-white fw-bold mb-0">Demostración: Flujo de Reserva de Turnos</h4>
                      <small className="text-info font-monospace">Módulo real de Citas RoliCode</small>
                    </div>
                  </div>
                  <a
                    href="https://citas.rolicode.com.mx"
                    target="_blank"
                    rel="noreferrer"
                    className="rc-btn-outline py-1 px-3 small"
                  >
                    Ver App Completa <FaExternalLinkAlt size={11} />
                  </a>
                </div>

                {/* Sub-navegación: Agendar vs Ver Agenda */}
                <div className="d-flex flex-wrap align-items-center justify-content-between gap-2 mb-4 pb-3 border-bottom border-secondary border-opacity-25">
                  <div className="d-flex gap-2">
                    <button
                      type="button"
                      className={`btn btn-sm rounded-pill px-3 fw-semibold ${
                        citasSubTab === 'agendar'
                          ? 'btn-primary text-white shadow-sm'
                          : 'btn-outline-secondary text-light'
                      }`}
                      onClick={() => {
                        setCitasSubTab('agendar');
                        setBookingConfirmed(false);
                      }}
                    >
                      <FaPlus className="me-1" size={10} /> Agendar Turno
                    </button>
                    <button
                      type="button"
                      className={`btn btn-sm rounded-pill px-3 fw-semibold ${
                        citasSubTab === 'agenda'
                          ? 'btn-primary text-white shadow-sm'
                          : 'btn-outline-secondary text-light'
                      }`}
                      onClick={() => setCitasSubTab('agenda')}
                    >
                      <FaList className="me-1" size={11} /> Ver Citas Agendadas ({bookedAppointments.length})
                    </button>
                  </div>
                  <span className="badge bg-dark border border-secondary border-opacity-40 text-muted font-monospace small">
                    Demo interactiva en vivo
                  </span>
                </div>

                {citasSubTab === 'agendar' ? (
                  !bookingConfirmed ? (
                    <form onSubmit={handleBookDemo}>
                      <div className="mb-4">
                        <label className="form-label text-white small fw-bold">
                          1. Selecciona el Tipo de Servicio o Consulta:
                        </label>
                        <div className="row g-2">
                          {[
                            'Consultoría Técnica Inicial (45 min)',
                            'Desarrollo de Web / SaaS a Medida',
                            'Desarrollo de API & Backend',
                            'Auditoría de Código y Despliegue'
                          ].map((srv) => (
                            <div key={srv} className="col-md-6">
                              <div
                                className={`rc-option-card ${
                                  selectedService === srv ? 'selected' : ''
                                }`}
                                onClick={() => setSelectedService(srv)}
                              >
                                <div className="d-flex align-items-center justify-content-between">
                                  <span className="text-white fw-medium small">{srv}</span>
                                  {selectedService === srv && (
                                    <FaCheckCircle className="text-primary flex-shrink-0" />
                                  )}
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="mb-4">
                        <label className="form-label text-white small fw-bold">
                          2. Elige un Horario Disponible:
                        </label>
                        <div className="d-flex flex-wrap gap-2">
                          {availableHours.map((hr) => (
                            <button
                              key={hr}
                              type="button"
                              className={`btn btn-sm px-3 rounded-3 font-monospace ${
                                selectedTime === hr
                                  ? 'btn-info text-dark fw-bold shadow'
                                  : 'rc-btn-secondary text-white border-opacity-50'
                              }`}
                              onClick={() => setSelectedTime(hr)}
                            >
                              <FaClock className="me-1" size={11} /> {hr}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div className="mb-4">
                        <label className="form-label text-white small fw-bold">
                          3. Nombre o Empresa para la Reserva:
                        </label>
                        <input
                          type="text"
                          className="form-control rc-input"
                          placeholder="Ej. Ing. Uriel Rojas / Mi Empresa"
                          value={clientName}
                          onChange={(e) => setClientName(e.target.value)}
                          required
                        />
                      </div>

                      <button type="submit" className="rc-btn-primary w-100 py-3">
                        <FaUserCheck /> Confirmar Cita de Demostración
                      </button>
                    </form>
                  ) : (
                    <div className="text-center py-4">
                      <div className="d-inline-flex p-3 rounded-circle bg-success bg-opacity-20 text-success mb-3">
                        <FaCheckCircle size={40} />
                      </div>
                      <h4 className="text-white fw-bold mb-2">¡Cita Agendada Exitosamente!</h4>
                      <p className="text-light small mb-4">
                        Se ha generado tu ticket de prueba y se guardó en tu agenda de demostración.
                      </p>

                      <div className="rc-inner-panel p-4 text-start font-monospace small mb-4 mx-auto border border-success border-opacity-40" style={{ maxWidth: '480px' }}>
                        <div className="d-flex justify-content-between mb-2">
                          <span className="text-muted">Ticket ID:</span>
                          <span className="text-info fw-bold">{confirmedBookingData.id}</span>
                        </div>
                        <div className="d-flex justify-content-between mb-2">
                          <span className="text-muted">Cliente / Empresa:</span>
                          <span className="text-white fw-semibold">{confirmedBookingData.client}</span>
                        </div>
                        <div className="d-flex justify-content-between mb-2">
                          <span className="text-muted">Servicio:</span>
                          <span className="text-white fw-semibold">{confirmedBookingData.service}</span>
                        </div>
                        <div className="d-flex justify-content-between mb-2">
                          <span className="text-muted">Horario Asignado:</span>
                          <span className="text-warning fw-bold">{confirmedBookingData.time}</span>
                        </div>
                        <div className="d-flex justify-content-between pt-2 border-top border-secondary border-opacity-25">
                          <span className="text-muted">Estado del Registro:</span>
                          <span className="text-success fw-bold">Guardado en tu Agenda Local</span>
                        </div>
                      </div>

                      <div className="d-flex flex-wrap gap-2 justify-content-center">
                        <button
                          type="button"
                          onClick={() => setCitasSubTab('agenda')}
                          className="btn btn-primary btn-sm py-2 px-3 fw-semibold d-flex align-items-center gap-2"
                        >
                          <FaList size={12} /> Ver en la Agenda ({bookedAppointments.length})
                        </button>
                        <button
                          type="button"
                          onClick={handleResetBooking}
                          className="btn btn-outline-secondary btn-sm py-2 px-3 text-white border-opacity-50"
                        >
                          <FaRedo className="me-1" /> Agendar Otra Cita
                        </button>
                        <a
                          href="https://citas.rolicode.com.mx"
                          target="_blank"
                          rel="noreferrer"
                          className="btn btn-outline-info btn-sm py-2 px-3"
                        >
                          Ir al Sistema Central en Supabase ↗
                        </a>
                      </div>
                    </div>
                  )
                ) : (
                  <div>
                    <div className="d-flex align-items-center justify-content-between mb-3">
                      <div>
                        <h5 className="text-white fw-bold mb-0">Agenda de Citas Registradas</h5>
                        <small className="text-muted">Listado en tiempo real de citas simuladas en este navegador</small>
                      </div>
                      <button
                        type="button"
                        onClick={() => {
                          setCitasSubTab('agendar');
                          setBookingConfirmed(false);
                        }}
                        className="rc-btn-primary py-1 px-3 small"
                      >
                        <FaPlus className="me-1" size={10} /> Nueva Cita
                      </button>
                    </div>

                    {bookedAppointments.length === 0 ? (
                      <div className="text-center py-5 rc-inner-panel rounded-3">
                        <p className="text-muted mb-3">No hay citas registradas en tu agenda de demostración.</p>
                        <button
                          type="button"
                          onClick={() => setCitasSubTab('agendar')}
                          className="rc-btn-primary btn-sm py-2 px-3"
                        >
                          <FaPlus className="me-1" /> Agendar Cita de Muestra
                        </button>
                      </div>
                    ) : (
                      <div className="table-responsive rc-inner-panel rounded-3 p-2 mb-3">
                        <table className="table table-dark table-hover align-middle mb-0 small">
                          <thead>
                            <tr className="text-muted border-bottom border-secondary border-opacity-40">
                              <th>Ticket ID</th>
                              <th>Cliente / Empresa</th>
                              <th>Servicio</th>
                              <th>Fecha & Hora</th>
                              <th>Estado</th>
                              <th className="text-end">Acción</th>
                            </tr>
                          </thead>
                          <tbody>
                            {bookedAppointments.map((appt) => (
                              <tr key={appt.id}>
                                <td className="font-monospace text-info">{appt.id}</td>
                                <td className="text-white fw-semibold">{appt.client}</td>
                                <td className="text-light">{appt.service}</td>
                                <td>
                                  <span className="badge bg-dark border border-secondary border-opacity-50 text-warning">
                                    {appt.date} • {appt.time}
                                  </span>
                                </td>
                                <td>
                                  <span
                                    className={`badge ${
                                      appt.status === 'Confirmada'
                                        ? 'bg-success bg-opacity-25 text-success border border-success border-opacity-40'
                                        : 'bg-secondary bg-opacity-25 text-light border border-secondary border-opacity-40'
                                    }`}
                                  >
                                    {appt.status}
                                  </span>
                                </td>
                                <td className="text-end">
                                  <div className="d-inline-flex gap-1">
                                    <button
                                      type="button"
                                      onClick={() => handleToggleDemoStatus(appt.id)}
                                      className="btn btn-sm btn-outline-success py-1 px-2"
                                      title={appt.status === 'Confirmada' ? 'Marcar como atendida' : 'Marcar como confirmada'}
                                    >
                                      <FaCheck size={11} />
                                    </button>
                                    <button
                                      type="button"
                                      onClick={() => handleDeleteDemoBooking(appt.id)}
                                      className="btn btn-sm btn-outline-danger py-1 px-2"
                                      title="Eliminar cita"
                                    >
                                      <FaTrash size={11} />
                                    </button>
                                  </div>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    )}

                    {/* Nota informativa clara sobre dónde se guardan */}
                    <div className="p-3 rounded-3 bg-primary bg-opacity-10 border border-primary border-opacity-30 d-flex flex-column flex-sm-row align-items-sm-center justify-content-between gap-3">
                      <div>
                        <div className="text-white small fw-bold d-flex align-items-center gap-2">
                          <FaDatabase className="text-info" /> ¿Cómo ver las citas en la base de datos central?
                        </div>
                        <div className="text-light small mt-1" style={{ fontSize: '0.82rem' }}>
                          Esta tabla muestra las citas de prueba generadas en este portafolio. Para la gestión sincronizada con Supabase PostgreSQL en la nube, visita tu app completa.
                        </div>
                      </div>
                      <a
                        href="https://citas.rolicode.com.mx"
                        target="_blank"
                        rel="noreferrer"
                        className="rc-btn-primary btn-sm py-2 px-3 text-nowrap"
                      >
                        Abrir citas.rolicode.com.mx ↗
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* --- DEMO 2: API Tester Console --- */}
        {activeTab === 'api' && (
          <div className="row g-4 justify-content-center">
            <div className="col-lg-9">
              <div className="rc-terminal-box">
                {/* Terminal Header */}
                <div className="rc-terminal-header">
                  <div className="rc-terminal-dots">
                    <span className="rc-terminal-dot bg-danger"></span>
                    <span className="rc-terminal-dot bg-warning"></span>
                    <span className="rc-terminal-dot bg-success"></span>
                  </div>
                  <span className="text-white small font-monospace fw-semibold">
                    RoliCode API Interactive Tester
                  </span>
                  <span className="badge bg-success bg-opacity-25 text-success small font-monospace border border-success border-opacity-50">
                    ONLINE 200 OK
                  </span>
                </div>

                {/* Terminal Controls */}
                <div className="p-3 rc-inner-panel rounded-0 border-start-0 border-end-0 border-top-0 d-flex flex-column flex-md-row align-items-md-center justify-content-between gap-3">
                  <div className="d-flex align-items-center gap-2 flex-grow-1">
                    <span className="text-info fw-bold font-monospace small">ENDPOINT:</span>
                    <select
                      className="form-select form-select-sm rc-input font-monospace text-warning fw-bold"
                      value={selectedEndpoint}
                      onChange={(e) => {
                        setSelectedEndpoint(e.target.value);
                        setApiResponse(null);
                      }}
                    >
                      <option value="GET /api/v1/health">GET /api/v1/health (Estado del Servidor & DB)</option>
                      <option value="GET /api/v1/projects">GET /api/v1/projects (Catálogo de Proyectos)</option>
                      <option value="POST /api/v1/orders/estimate">POST /api/v1/orders/estimate (Cotizador Automático)</option>
                    </select>
                  </div>

                  <button
                    type="button"
                    onClick={handleRunApiRequest}
                    disabled={isLoadingApi}
                    className="rc-btn-primary py-2 px-4 small font-monospace"
                  >
                    {isLoadingApi ? (
                      'Consultando...'
                    ) : (
                      <>
                        <FaPlay size={11} className="me-1" /> Ejecutar Request
                      </>
                    )}
                  </button>
                </div>

                {/* Terminal Screen Output */}
                <div className="rc-terminal-body">
                  {!apiResponse && !isLoadingApi && (
                    <div className="text-light font-monospace py-4 text-center">
                      <p className="mb-2 text-info">// Selecciona un endpoint arriba y haz clic en "Ejecutar Request".</p>
                      <p className="small mb-0 text-muted">
                        Simula respuestas en tiempo real con cabeceras de servidor, medición de latencia y JSON payload.
                      </p>
                    </div>
                  )}

                  {isLoadingApi && (
                    <div className="text-info font-monospace py-3">
                      <span className="spinner-border spinner-border-sm me-2"></span>
                      Enviando payload al microservicio... calculando latencia...
                    </div>
                  )}

                  {apiResponse && !isLoadingApi && (
                    <div className="font-monospace">
                      {/* Status line */}
                      <div className="d-flex align-items-center gap-3 pb-2 mb-3 border-bottom border-secondary border-opacity-25">
                        <span className="badge bg-success text-dark fw-bold">HTTP 200 OK</span>
                        <span className="text-white small">
                          Latencia: <strong className="text-info">{responseTime} ms</strong>
                        </span>
                        <span className="text-white small">
                          Tamaño: <strong className="text-warning">~{JSON.stringify(apiResponse.body).length} bytes</strong>
                        </span>
                      </div>

                      {/* Headers */}
                      <div className="small mb-3">
                        <div className="text-info fw-bold">// Response Headers:</div>
                        {Object.entries(apiResponse.headers).map(([k, v]) => (
                          <div key={k}>
                            <span className="text-muted">{k}:</span> <span className="text-white ms-1">{v}</span>
                          </div>
                        ))}
                      </div>

                      {/* JSON Body */}
                      <div className="text-info fw-bold mb-1">// JSON Response Payload:</div>
                      <pre className="text-success m-0 p-3 rounded-3 bg-black border border-secondary border-opacity-30 overflow-auto" style={{ fontSize: '0.88rem' }}>
                        {JSON.stringify(apiResponse.body, null, 2)}
                      </pre>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* --- DEMO 3: Gestor de Inventario & Stock en Vivo --- */}
        {activeTab === 'inventario' && <InventoryDemo />}
      </div>
    </section>
  );
}
