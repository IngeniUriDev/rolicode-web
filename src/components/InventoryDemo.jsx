import { useState, useEffect } from 'react';
import {
  FaBoxes,
  FaExclamationTriangle,
  FaPlus,
  FaMinus,
  FaHistory,
  FaCheckCircle,
  FaSyncAlt,
  FaDatabase,
  FaExternalLinkAlt,
  FaWarehouse,
  FaDollarSign,
  FaTag,
  FaArrowUp,
  FaArrowDown,
  FaTimes
} from 'react-icons/fa';

const API_BASE_URL = 'http://localhost:8080/api/v1';

const FALLBACK_PRODUCTOS = [
  {
    id: 1,
    sku: 'KART-LLANTA-SLICK-01',
    nombre: 'Llanta Delantera Kart Slick 5 pulgadas',
    descripcion: 'Compuesto blando de alto agarre para competencia en pista seca',
    categoria: 'Neumáticos & Ruedas',
    precio: 850.00,
    stockActual: 24,
    stockMinimo: 8,
    activo: true
  },
  {
    id: 2,
    sku: 'LUB-MOTUL-2T-1L',
    nombre: 'Aceite Sintético Motul Kart Grand Prix 2T (1L)',
    descripcion: 'Lubricante de competición de altas revoluciones hasta 23,000 RPM',
    categoria: 'Lubricantes & Químicos',
    precio: 420.00,
    stockActual: 35,
    stockMinimo: 10,
    activo: true
  },
  {
    id: 3,
    sku: 'FREN-PAST-BRM-01',
    nombre: 'Juego de Balatas de Freno Cerámicas Racing',
    descripcion: 'Balatas de alta fricción resistentes al sobrecalentamiento para chasis estándar',
    categoria: 'Frenos & Seguridad',
    precio: 680.00,
    stockActual: 12,
    stockMinimo: 4,
    activo: true
  },
  {
    id: 4,
    sku: 'BUJ-NGK-IRID-09',
    nombre: 'Bujía NGK Racing Iridium B9EGV',
    descripcion: 'Electrodo fino para encendido ultra rápido y máxima respuesta en aceleración',
    categoria: 'Motor & Encendido',
    precio: 290.00,
    stockActual: 5,
    stockMinimo: 6,
    activo: true
  },
  {
    id: 5,
    sku: 'SEG-CASCO-DOT-M',
    nombre: 'Casco Integral Homologado DOT / ECE Talla M',
    descripcion: 'Visor anti-empañante con interior desmontable y lavable',
    categoria: 'Equipamiento Piloto',
    precio: 2100.00,
    stockActual: 8,
    stockMinimo: 3,
    activo: true
  }
];

export default function InventoryDemo() {
  const [productos, setProductos] = useState(FALLBACK_PRODUCTOS);
  const [loading, setLoading] = useState(true);
  const [isLiveConnected, setIsLiveConnected] = useState(false);
  const [activeFilter, setActiveFilter] = useState('todos'); // 'todos' | 'alertas' | 'crear'
  const [selectedProductHistory, setSelectedProductHistory] = useState(null);
  const [movimientosHistory, setMovimientosHistory] = useState([]);
  const [loadingHistory, setLoadingHistory] = useState(false);

  // Modal para ajuste rápido de existencias
  const [stockModalProduct, setStockModalProduct] = useState(null);
  const [modalActionType, setModalActionType] = useState('ENTRADA'); // 'ENTRADA' | 'SALIDA'
  const [modalQty, setModalQty] = useState(5);
  const [modalReason, setModalReason] = useState('Reabastecimiento de stock');
  const [isSubmittingMovement, setIsSubmittingMovement] = useState(false);

  // Formulario nuevo producto
  const [newProd, setNewProd] = useState({
    sku: '',
    nombre: '',
    descripcion: '',
    categoria: 'Mecánica General',
    precio: '',
    stockActual: 10,
    stockMinimo: 5
  });
  const [isCreatingProduct, setIsCreatingProduct] = useState(false);
  const [statusMessage, setStatusMessage] = useState(null);

  const fetchProductos = async () => {
    setLoading(true);
    try {
      const res = await fetch(`${API_BASE_URL}/productos`);
      if (!res.ok) throw new Error(`HTTP error ${res.status}`);
      const data = await res.json();
      setProductos(data);
      setIsLiveConnected(true);
    } catch (err) {
      console.warn('Backend local no detectado o CORS error, usando datos iniciales:', err);
      setIsLiveConnected(false);
      setProductos(FALLBACK_PRODUCTOS);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    let isMounted = true;
    const initData = async () => {
      try {
        const res = await fetch(`${API_BASE_URL}/productos`);
        if (!res.ok) throw new Error(`HTTP error ${res.status}`);
        const data = await res.json();
        if (isMounted) {
          setProductos(data);
          setIsLiveConnected(true);
        }
      } catch (err) {
        console.warn('Backend local no detectado o CORS error, usando datos iniciales:', err);
        if (isMounted) {
          setIsLiveConnected(false);
          setProductos(FALLBACK_PRODUCTOS);
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };
    initData();
    return () => {
      isMounted = false;
    };
  }, []);

  const showNotification = (text, type = 'success') => {
    setStatusMessage({ text, type });
    setTimeout(() => setStatusMessage(null), 4000);
  };

  const handleOpenMovementModal = (producto, type) => {
    setStockModalProduct(producto);
    setModalActionType(type);
    setModalQty(type === 'ENTRADA' ? 10 : 2);
    setModalReason(type === 'ENTRADA' ? 'Llegada de pedido de proveedor' : 'Merma / Salida de taller');
  };

  const handleSubmitMovement = async (e) => {
    e.preventDefault();
    if (!stockModalProduct) return;
    setIsSubmittingMovement(true);

    const payload = {
      tipo: modalActionType,
      cantidad: parseInt(modalQty, 10),
      motivo: modalReason || 'Operación de inventario',
      usuarioResponsable: 'Operador RoliCode Web'
    };

    if (isLiveConnected) {
      try {
        const res = await fetch(`${API_BASE_URL}/productos/${stockModalProduct.id}/movimientos`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        });

        if (!res.ok) {
          const errorData = await res.json().catch(() => ({}));
          throw new Error(errorData.mensaje || errorData.error || 'Error al ajustar existencias');
        }

        const updatedProd = await res.json();
        setProductos((prev) =>
          prev.map((p) => (p.id === updatedProd.id ? updatedProd : p))
        );
        showNotification(`✅ Stock actualizado en Supabase: ${updatedProd.nombre} ahora tiene ${updatedProd.stockActual} unidades.`);
      } catch (err) {
        showNotification(`❌ Error: ${err.message}`, 'error');
      }
    } else {
      // Simulación local offline
      const delta = modalActionType === 'ENTRADA' ? payload.cantidad : -payload.cantidad;
      setProductos((prev) =>
        prev.map((p) => {
          if (p.id === stockModalProduct.id) {
            const nextStock = Math.max(0, p.stockActual + delta);
            return { ...p, stockActual: nextStock };
          }
          return p;
        })
      );
      showNotification(`ℹ️ [Simulación Offline] Stock actualizado: ${stockModalProduct.nombre}.`);
    }

    setIsSubmittingMovement(false);
    setStockModalProduct(null);
  };

  const handleViewHistory = async (producto) => {
    setSelectedProductHistory(producto);
    setLoadingHistory(true);
    if (isLiveConnected) {
      try {
        const res = await fetch(`${API_BASE_URL}/productos/${producto.id}/movimientos`);
        if (!res.ok) throw new Error('No se pudo obtener el historial');
        const data = await res.json();
        setMovimientosHistory(data);
      } catch (err) {
        console.error(err);
        setMovimientosHistory([]);
      }
    } else {
      // Fallback demo history
      setMovimientosHistory([
        {
          id: 1,
          tipo: 'ENTRADA',
          cantidad: producto.stockActual,
          stockPrevio: 0,
          stockPosterior: producto.stockActual,
          motivo: 'Inventario inicial de apertura de almacén',
          usuarioResponsable: 'Sistema Automático',
          fecha: new Date().toISOString()
        }
      ]);
    }
    setLoadingHistory(false);
  };

  const handleCreateProduct = async (e) => {
    e.preventDefault();
    if (!newProd.sku || !newProd.nombre || !newProd.precio) {
      showNotification('Por favor llena los campos requeridos', 'warning');
      return;
    }

    setIsCreatingProduct(true);
    const payload = {
      sku: newProd.sku.toUpperCase().trim(),
      nombre: newProd.nombre.trim(),
      descripcion: newProd.descripcion.trim(),
      categoria: newProd.categoria,
      precio: parseFloat(newProd.precio),
      stockActual: parseInt(newProd.stockActual, 10) || 0,
      stockMinimo: parseInt(newProd.stockMinimo, 10) || 0
    };

    if (isLiveConnected) {
      try {
        const res = await fetch(`${API_BASE_URL}/productos`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        });

        if (!res.ok) {
          const errData = await res.json().catch(() => ({}));
          throw new Error(errData.mensaje || errData.error || 'No se pudo crear el producto');
        }

        const created = await res.json();
        setProductos((prev) => [created, ...prev]);
        showNotification(`🎉 Producto ${created.sku} registrado en Supabase con éxito!`);
        setActiveFilter('todos');
        setNewProd({
          sku: '',
          nombre: '',
          descripcion: '',
          categoria: 'Mecánica General',
          precio: '',
          stockActual: 10,
          stockMinimo: 5
        });
      } catch (err) {
        showNotification(`❌ Error al crear: ${err.message}`, 'error');
      }
    } else {
      const mockCreated = { ...payload, id: Date.now(), activo: true };
      setProductos((prev) => [mockCreated, ...prev]);
      showNotification(`ℹ️ [Simulación Offline] Producto ${mockCreated.sku} creado.`);
      setActiveFilter('todos');
    }
    setIsCreatingProduct(false);
  };

  // Cálculos de métricas
  const totalSkus = productos.length;
  const totalUnidades = productos.reduce((acc, p) => acc + (p.stockActual || 0), 0);
  const valorTotalAlmacen = productos.reduce(
    (acc, p) => acc + (p.stockActual || 0) * (parseFloat(p.precio) || 0),
    0
  );
  const alertasBajoStock = productos.filter((p) => p.stockActual <= p.stockMinimo);

  const displayedProductos =
    activeFilter === 'alertas' ? alertasBajoStock : productos;

  return (
    <div className="row g-4 justify-content-center">
      <div className="col-12 col-xl-11">
        <div className="rc-card rc-card-glow-border p-3 p-md-4">
          {/* Header de la tarjeta */}
          <div className="d-flex flex-column flex-md-row align-items-md-center justify-content-between pb-3 mb-4 border-bottom border-secondary border-opacity-25 gap-3">
            <div className="d-flex align-items-center gap-3">
              <div className="p-2 rounded-3 bg-success bg-opacity-20 text-success border border-success border-opacity-30">
                <FaBoxes size={24} />
              </div>
              <div>
                <div className="d-flex align-items-center gap-2">
                  <h4 className="h5 text-white fw-bold mb-0">
                    Sistema de Control de Inventario & Almacén
                  </h4>
                  {isLiveConnected ? (
                    <span className="badge bg-success bg-opacity-25 text-success border border-success border-opacity-50 small d-inline-flex align-items-center gap-1 font-monospace">
                      <span className="rc-pulse-dot bg-success" style={{ width: 8, height: 8 }}></span>
                      LIVE SUPABASE DB
                    </span>
                  ) : (
                    <span className="badge bg-warning bg-opacity-20 text-warning border border-warning border-opacity-40 small font-monospace">
                      MODO DEMO LOCAL
                    </span>
                  )}
                </div>
                <small className="text-secondary font-monospace">
                  Spring Boot 4.1.1 (Java 21) &bull; PostgreSQL 17.6 en Supabase Pooler &bull; Swagger 3
                </small>
              </div>
            </div>

            <div className="d-flex align-items-center gap-2 flex-wrap">
              <button
                type="button"
                onClick={fetchProductos}
                disabled={loading}
                className="btn btn-sm btn-outline-info d-inline-flex align-items-center gap-1 font-monospace"
                title="Sincronizar existencias desde Supabase"
              >
                <FaSyncAlt className={loading ? 'fa-spin' : ''} size={12} />
                {loading ? 'Actualizando...' : 'Sincronizar'}
              </button>

              <a
                href="http://localhost:8080/swagger-ui.html"
                target="_blank"
                rel="noreferrer"
                className="btn btn-sm rc-btn-secondary d-inline-flex align-items-center gap-2 font-monospace"
              >
                <FaDatabase size={12} />
                <span>Swagger UI</span>
                <FaExternalLinkAlt size={10} />
              </a>
            </div>
          </div>

          {/* Toast Notification */}
          {statusMessage && (
            <div
              className={`alert ${
                statusMessage.type === 'error'
                  ? 'alert-danger bg-danger bg-opacity-20 border-danger'
                  : statusMessage.type === 'warning'
                  ? 'alert-warning bg-warning bg-opacity-20 border-warning'
                  : 'alert-success bg-success bg-opacity-20 border-success'
              } text-white d-flex align-items-center gap-2 py-2 px-3 small rounded-3 mb-4`}
            >
              <FaCheckCircle />
              <span>{statusMessage.text}</span>
            </div>
          )}

          {/* Tarjetas de Métricas en Vivo */}
          <div className="row g-3 mb-4">
            <div className="col-6 col-md-3">
              <div className="rc-inner-panel p-3 rounded-3 h-100 border border-secondary border-opacity-25">
                <div className="text-secondary small font-monospace d-flex align-items-center justify-content-between mb-1">
                  <span>TOTAL SKUS</span>
                  <FaTag className="text-info" />
                </div>
                <div className="fs-3 fw-bold text-white font-monospace">{totalSkus}</div>
                <div className="text-muted small" style={{ fontSize: '0.75rem' }}>Artículos activos</div>
              </div>
            </div>

            <div className="col-6 col-md-3">
              <div className="rc-inner-panel p-3 rounded-3 h-100 border border-secondary border-opacity-25">
                <div className="text-secondary small font-monospace d-flex align-items-center justify-content-between mb-1">
                  <span>UNIDADES STOCK</span>
                  <FaWarehouse className="text-primary" />
                </div>
                <div className="fs-3 fw-bold text-info font-monospace">{totalUnidades}</div>
                <div className="text-muted small" style={{ fontSize: '0.75rem' }}>En almacén físico</div>
              </div>
            </div>

            <div className="col-6 col-md-3">
              <div className="rc-inner-panel p-3 rounded-3 h-100 border border-secondary border-opacity-25">
                <div className="text-secondary small font-monospace d-flex align-items-center justify-content-between mb-1">
                  <span>VALUACIÓN TOTAL</span>
                  <FaDollarSign className="text-success" />
                </div>
                <div className="fs-3 fw-bold text-success font-monospace">
                  ${valorTotalAlmacen.toLocaleString('es-MX', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </div>
                <div className="text-muted small" style={{ fontSize: '0.75rem' }}>Costo de inventario</div>
              </div>
            </div>

            <div className="col-6 col-md-3">
              <div
                className={`rc-inner-panel p-3 rounded-3 h-100 border ${
                  alertasBajoStock.length > 0
                    ? 'border-danger border-opacity-60 bg-danger bg-opacity-10'
                    : 'border-secondary border-opacity-25'
                }`}
              >
                <div className="text-secondary small font-monospace d-flex align-items-center justify-content-between mb-1">
                  <span className={alertasBajoStock.length > 0 ? 'text-danger fw-bold' : ''}>ALERTAS MÍNIMAS</span>
                  <FaExclamationTriangle className={alertasBajoStock.length > 0 ? 'text-danger' : 'text-muted'} />
                </div>
                <div className={`fs-3 fw-bold font-monospace ${alertasBajoStock.length > 0 ? 'text-danger' : 'text-white'}`}>
                  {alertasBajoStock.length}
                </div>
                <div className="text-muted small" style={{ fontSize: '0.75rem' }}>
                  {alertasBajoStock.length > 0 ? 'Requieren compra urgente' : 'Todo en nivel óptimo'}
                </div>
              </div>
            </div>
          </div>

          {/* Barra de Navegación y Filtros Internos */}
          <div className="d-flex flex-column flex-sm-row align-items-sm-center justify-content-between gap-3 p-2 rounded-3 rc-inner-panel mb-4">
            <div className="d-flex align-items-center gap-2 flex-wrap">
              <button
                type="button"
                className={`btn btn-sm px-3 rounded-pill fw-semibold font-monospace ${
                  activeFilter === 'todos' ? 'btn-primary text-white shadow-sm' : 'text-secondary border-0'
                }`}
                onClick={() => setActiveFilter('todos')}
              >
                📦 Catálogo Completo ({productos.length})
              </button>

              <button
                type="button"
                className={`btn btn-sm px-3 rounded-pill fw-semibold font-monospace position-relative ${
                  activeFilter === 'alertas' ? 'btn-danger text-white shadow-sm' : 'text-secondary border-0'
                }`}
                onClick={() => setActiveFilter('alertas')}
              >
                <FaExclamationTriangle className="me-1" size={11} />
                Alertas de Stock ({alertasBajoStock.length})
              </button>

              <button
                type="button"
                className={`btn btn-sm px-3 rounded-pill fw-semibold font-monospace ${
                  activeFilter === 'crear' ? 'btn-success text-white shadow-sm' : 'text-secondary border-0'
                }`}
                onClick={() => setActiveFilter('crear')}
              >
                <FaPlus className="me-1" size={11} /> Nuevo SKU
              </button>
            </div>

            <div className="text-muted small font-monospace px-2">
              Endpoint: <code className="text-warning">GET /api/v1/productos</code>
            </div>
          </div>

          {/* VISTA 1 & 2: Tabla de Productos / Alertas */}
          {activeFilter !== 'crear' && (
            <div className="table-responsive rounded-3 border border-secondary border-opacity-25 bg-black bg-opacity-40">
              <table className="table table-dark table-hover align-middle mb-0 font-monospace">
                <thead>
                  <tr className="text-secondary small border-bottom border-secondary border-opacity-40">
                    <th className="ps-3 py-3">SKU / ARTÍCULO</th>
                    <th>CATEGORÍA</th>
                    <th className="text-end">PRECIO UNIT.</th>
                    <th className="text-center" style={{ width: '220px' }}>STOCK / CAPACIDAD</th>
                    <th>ESTADO</th>
                    <th className="text-end pe-3">ACCIONES AUDITABLES</th>
                  </tr>
                </thead>
                <tbody>
                  {displayedProductos.length === 0 ? (
                    <tr>
                      <td colSpan="6" className="text-center py-5 text-muted">
                        No hay productos que coincidan con este filtro.
                      </td>
                    </tr>
                  ) : (
                    displayedProductos.map((p) => {
                      const isLowStock = p.stockActual <= p.stockMinimo;
                      const maxCapacity = Math.max(p.stockActual, p.stockMinimo * 2.5, 30);
                      const percentage = Math.min(100, Math.round((p.stockActual / maxCapacity) * 100));

                      return (
                        <tr key={p.id} className="border-bottom border-secondary border-opacity-15">
                          <td className="ps-3 py-3">
                            <div className="fw-bold text-white">{p.nombre}</div>
                            <div className="d-flex align-items-center gap-2">
                              <span className="badge bg-secondary bg-opacity-30 text-info border border-secondary border-opacity-40" style={{ fontSize: '0.72rem' }}>
                                {p.sku}
                              </span>
                              <span className="text-muted small" style={{ fontSize: '0.75rem' }}>
                                ID #{p.id}
                              </span>
                            </div>
                          </td>

                          <td>
                            <span className="badge bg-dark text-secondary border border-secondary border-opacity-30 small">
                              {p.categoria || 'General'}
                            </span>
                          </td>

                          <td className="text-end text-success fw-bold">
                            ${parseFloat(p.precio).toFixed(2)}
                          </td>

                          <td>
                            <div className="d-flex justify-content-between small mb-1">
                              <span className={isLowStock ? 'text-danger fw-bold' : 'text-white'}>
                                {p.stockActual} unidades
                              </span>
                              <span className="text-muted" style={{ fontSize: '0.72rem' }}>
                                Min: {p.stockMinimo}
                              </span>
                            </div>
                            <div className="progress" style={{ height: '6px', backgroundColor: '#1e293b' }}>
                              <div
                                className={`progress-bar ${isLowStock ? 'bg-danger' : 'bg-success'}`}
                                role="progressbar"
                                style={{ width: `${percentage}%` }}
                              ></div>
                            </div>
                          </td>

                          <td>
                            {isLowStock ? (
                              <span className="badge bg-danger bg-opacity-20 text-danger border border-danger border-opacity-40 small d-inline-flex align-items-center gap-1">
                                <FaExclamationTriangle size={10} /> REABASTECER
                              </span>
                            ) : (
                              <span className="badge bg-success bg-opacity-20 text-success border border-success border-opacity-40 small d-inline-flex align-items-center gap-1">
                                <FaCheckCircle size={10} /> ÓPTIMO
                              </span>
                            )}
                          </td>

                          <td className="text-end pe-3">
                            <div className="btn-group btn-group-sm">
                              <button
                                type="button"
                                onClick={() => handleOpenMovementModal(p, 'ENTRADA')}
                                className="btn btn-sm btn-outline-success px-2 font-monospace"
                                title="Ingresar mercancía (+ Stock)"
                              >
                                <FaPlus size={11} className="me-1" /> Entrada
                              </button>
                              <button
                                type="button"
                                onClick={() => handleOpenMovementModal(p, 'SALIDA')}
                                className="btn btn-sm btn-outline-danger px-2 font-monospace"
                                title="Registrar salida o merma (- Stock)"
                                disabled={p.stockActual <= 0}
                              >
                                <FaMinus size={11} className="me-1" /> Salida
                              </button>
                              <button
                                type="button"
                                onClick={() => handleViewHistory(p)}
                                className="btn btn-sm btn-outline-info px-2 font-monospace"
                                title="Ver bitácora de auditoría / Kardex"
                              >
                                <FaHistory size={11} />
                              </button>
                            </div>
                          </td>
                        </tr>
                      );
                    })
                  )}
                </tbody>
              </table>
            </div>
          )}

          {/* VISTA 3: Formulario para Crear Nuevo Producto */}
          {activeFilter === 'crear' && (
            <div className="rc-inner-panel p-4 rounded-3 border border-secondary border-opacity-30">
              <div className="d-flex align-items-center justify-content-between pb-3 mb-3 border-bottom border-secondary border-opacity-25">
                <h5 className="text-white fw-bold mb-0 d-flex align-items-center gap-2">
                  <FaPlus className="text-success" /> Alta de Nuevo Producto / SKU
                </h5>
                <span className="text-muted small font-monospace">POST /api/v1/productos</span>
              </div>

              <form onSubmit={handleCreateProduct}>
                <div className="row g-3">
                  <div className="col-md-4">
                    <label className="form-label text-secondary small font-monospace">CÓDIGO SKU *</label>
                    <input
                      type="text"
                      className="form-control form-control-sm rc-input text-warning fw-bold font-monospace"
                      placeholder="Ej: KART-CADENA-RK-01"
                      value={newProd.sku}
                      onChange={(e) => setNewProd({ ...newProd, sku: e.target.value })}
                      required
                    />
                  </div>

                  <div className="col-md-5">
                    <label className="form-label text-secondary small font-monospace">NOMBRE DEL ARTÍCULO *</label>
                    <input
                      type="text"
                      className="form-control form-control-sm rc-input text-white"
                      placeholder="Ej: Cadena Reforzada O-Ring Oro"
                      value={newProd.nombre}
                      onChange={(e) => setNewProd({ ...newProd, nombre: e.target.value })}
                      required
                    />
                  </div>

                  <div className="col-md-3">
                    <label className="form-label text-secondary small font-monospace">CATEGORÍA</label>
                    <select
                      className="form-select form-select-sm rc-input text-white"
                      value={newProd.categoria}
                      onChange={(e) => setNewProd({ ...newProd, categoria: e.target.value })}
                    >
                      <option value="Neumáticos & Ruedas">Neumáticos & Ruedas</option>
                      <option value="Lubricantes & Químicos">Lubricantes & Químicos</option>
                      <option value="Frenos & Seguridad">Frenos & Seguridad</option>
                      <option value="Motor & Encendido">Motor & Encendido</option>
                      <option value="Transmisión & Cadena">Transmisión & Cadena</option>
                      <option value="Equipamiento Piloto">Equipamiento Piloto</option>
                      <option value="Mecánica General">Mecánica General</option>
                    </select>
                  </div>

                  <div className="col-12">
                    <label className="form-label text-secondary small font-monospace">DESCRIPCIÓN / ESPECIFICACIONES</label>
                    <textarea
                      rows="2"
                      className="form-control form-control-sm rc-input text-white"
                      placeholder="Detalles técnicos, compatibilidad de motor, materiales..."
                      value={newProd.descripcion}
                      onChange={(e) => setNewProd({ ...newProd, descripcion: e.target.value })}
                    ></textarea>
                  </div>

                  <div className="col-md-4">
                    <label className="form-label text-secondary small font-monospace">PRECIO UNITARIO ($ MXN) *</label>
                    <input
                      type="number"
                      step="0.01"
                      className="form-control form-control-sm rc-input text-success fw-bold font-monospace"
                      placeholder="0.00"
                      value={newProd.precio}
                      onChange={(e) => setNewProd({ ...newProd, precio: e.target.value })}
                      required
                    />
                  </div>

                  <div className="col-md-4">
                    <label className="form-label text-secondary small font-monospace">STOCK INICIAL *</label>
                    <input
                      type="number"
                      className="form-control form-control-sm rc-input text-white font-monospace"
                      value={newProd.stockActual}
                      onChange={(e) => setNewProd({ ...newProd, stockActual: e.target.value })}
                      required
                    />
                  </div>

                  <div className="col-md-4">
                    <label className="form-label text-secondary small font-monospace">STOCK MÍNIMO (UMBRAL) *</label>
                    <input
                      type="number"
                      className="form-control form-control-sm rc-input text-danger font-monospace"
                      value={newProd.stockMinimo}
                      onChange={(e) => setNewProd({ ...newProd, stockMinimo: e.target.value })}
                      required
                    />
                  </div>
                </div>

                <div className="d-flex justify-content-end gap-2 mt-4 pt-3 border-top border-secondary border-opacity-25">
                  <button
                    type="button"
                    className="btn btn-sm btn-outline-secondary font-monospace"
                    onClick={() => setActiveFilter('todos')}
                  >
                    Cancelar
                  </button>
                  <button
                    type="submit"
                    disabled={isCreatingProduct}
                    className="rc-btn-primary px-4 py-2 font-monospace small"
                  >
                    {isCreatingProduct ? 'Registrando en DB...' : 'Guardar Producto en Supabase'}
                  </button>
                </div>
              </form>
            </div>
          )}

          {/* Modal / Popup: Ajuste de Stock */}
          {stockModalProduct && (
            <div
              className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center bg-black bg-opacity-75 z-3 p-3"
              style={{ backdropFilter: 'blur(5px)' }}
            >
              <div
                className="rc-card p-4 rounded-4 border border-secondary border-opacity-40 shadow-lg"
                style={{ maxWidth: '520px', width: '100%' }}
              >
                <div className="d-flex align-items-center justify-content-between pb-3 mb-3 border-bottom border-secondary border-opacity-25">
                  <div className="d-flex align-items-center gap-2">
                    {modalActionType === 'ENTRADA' ? (
                      <span className="p-2 rounded-2 bg-success bg-opacity-20 text-success">
                        <FaArrowUp />
                      </span>
                    ) : (
                      <span className="p-2 rounded-2 bg-danger bg-opacity-20 text-danger">
                        <FaArrowDown />
                      </span>
                    )}
                    <div>
                      <h5 className="text-white fw-bold mb-0">
                        {modalActionType === 'ENTRADA' ? 'Registrar Entrada de Mercancía' : 'Registrar Salida / Merma'}
                      </h5>
                      <small className="text-info font-monospace">{stockModalProduct.sku}</small>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => setStockModalProduct(null)}
                    className="btn btn-sm btn-link text-secondary p-0"
                  >
                    <FaTimes size={16} />
                  </button>
                </div>

                <form onSubmit={handleSubmitMovement}>
                  <div className="mb-3">
                    <label className="text-muted small font-monospace d-block mb-1">ARTÍCULO SELECCIONADO</label>
                    <div className="p-2 rounded-2 bg-black bg-opacity-50 text-white font-monospace small border border-secondary border-opacity-25">
                      {stockModalProduct.nombre} &bull; Existencia Actual: <strong className="text-warning">{stockModalProduct.stockActual}</strong>
                    </div>
                  </div>

                  <div className="row g-3 mb-3">
                    <div className="col-md-6">
                      <label className="form-label text-secondary small font-monospace">TIPO DE OPERACIÓN</label>
                      <select
                        className="form-select form-select-sm rc-input text-white"
                        value={modalActionType}
                        onChange={(e) => setModalActionType(e.target.value)}
                      >
                        <option value="ENTRADA">🟢 ENTRADA (+ Stock)</option>
                        <option value="SALIDA">🔴 SALIDA (- Stock)</option>
                      </select>
                    </div>

                    <div className="col-md-6">
                      <label className="form-label text-secondary small font-monospace">CANTIDAD DE UNIDADES</label>
                      <input
                        type="number"
                        min="1"
                        max={modalActionType === 'SALIDA' ? stockModalProduct.stockActual : 1000}
                        className="form-control form-control-sm rc-input text-warning fw-bold font-monospace"
                        value={modalQty}
                        onChange={(e) => setModalQty(e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div className="mb-4">
                    <label className="form-label text-secondary small font-monospace">MOTIVO PARA LA AUDITORÍA</label>
                    <input
                      type="text"
                      className="form-control form-control-sm rc-input text-white"
                      value={modalReason}
                      onChange={(e) => setModalReason(e.target.value)}
                      placeholder="Ej: Factura Proveedor F-10829 o Ajuste físico"
                      required
                    />
                  </div>

                  <div className="d-flex justify-content-end gap-2">
                    <button
                      type="button"
                      onClick={() => setStockModalProduct(null)}
                      className="btn btn-sm btn-outline-secondary font-monospace"
                    >
                      Cancelar
                    </button>
                    <button
                      type="submit"
                      disabled={isSubmittingMovement}
                      className={`btn btn-sm ${
                        modalActionType === 'ENTRADA' ? 'btn-success' : 'btn-danger'
                      } px-3 font-monospace fw-semibold`}
                    >
                      {isSubmittingMovement ? 'Guardando...' : `Confirmar ${modalActionType}`}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}

          {/* Modal: Historial / Kardex de Auditoría */}
          {selectedProductHistory && (
            <div
              className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center bg-black bg-opacity-75 z-3 p-3"
              style={{ backdropFilter: 'blur(5px)' }}
            >
              <div
                className="rc-card p-4 rounded-4 border border-secondary border-opacity-40 shadow-lg"
                style={{ maxWidth: '680px', width: '100%' }}
              >
                <div className="d-flex align-items-center justify-content-between pb-3 mb-3 border-bottom border-secondary border-opacity-25">
                  <div className="d-flex align-items-center gap-2">
                    <span className="p-2 rounded-2 bg-info bg-opacity-20 text-info">
                      <FaHistory />
                    </span>
                    <div>
                      <h5 className="text-white fw-bold mb-0">Bitácora de Auditoría (Kardex)</h5>
                      <small className="text-secondary font-monospace">{selectedProductHistory.sku} &bull; {selectedProductHistory.nombre}</small>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => setSelectedProductHistory(null)}
                    className="btn btn-sm btn-link text-secondary p-0"
                  >
                    <FaTimes size={16} />
                  </button>
                </div>

                <div className="overflow-auto" style={{ maxHeight: '350px' }}>
                  {loadingHistory ? (
                    <div className="text-center py-4 text-info font-monospace">
                      <span className="spinner-border spinner-border-sm me-2"></span>
                      Consultando registros de auditoría en Supabase...
                    </div>
                  ) : movimientosHistory.length === 0 ? (
                    <div className="text-center py-4 text-muted font-monospace">
                      No hay movimientos registrados para este artículo.
                    </div>
                  ) : (
                    <div className="timeline font-monospace small">
                      {movimientosHistory.map((m) => {
                        const isEntrada = m.tipoMovimiento === 'ENTRADA' || m.tipo === 'ENTRADA';
                        const fechaStr = m.fecha ? new Date(m.fecha).toLocaleString('es-MX') : 'Reciente';

                        return (
                          <div
                            key={m.id}
                            className="p-3 mb-2 rounded-3 bg-black bg-opacity-50 border border-secondary border-opacity-20 d-flex align-items-start justify-content-between gap-3"
                          >
                            <div className="d-flex gap-3">
                              <span className={`p-2 rounded-2 ${isEntrada ? 'bg-success bg-opacity-20 text-success' : 'bg-danger bg-opacity-20 text-danger'}`}>
                                {isEntrada ? <FaArrowUp size={12} /> : <FaArrowDown size={12} />}
                              </span>
                              <div>
                                <div className="text-white fw-bold">
                                  {isEntrada ? '+' : '-'}{m.cantidad} unidades ({m.tipoMovimiento || m.tipo})
                                </div>
                                <div className="text-muted" style={{ fontSize: '0.78rem' }}>
                                  Motivo: <span className="text-secondary">{m.motivo || 'N/A'}</span>
                                </div>
                                <div className="text-muted" style={{ fontSize: '0.74rem' }}>
                                  Por: <span className="text-info">{m.usuarioResponsable || 'Admin'}</span> &bull; {fechaStr}
                                </div>
                              </div>
                            </div>

                            <div className="text-end">
                              <div className="text-muted" style={{ fontSize: '0.75rem' }}>Stock balance:</div>
                              <span className="badge bg-secondary bg-opacity-30 text-white font-monospace">
                                {m.stockPrevio} &rarr; <strong className="text-warning">{m.stockPosterior}</strong>
                              </span>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>

                <div className="d-flex justify-content-end mt-3 pt-3 border-top border-secondary border-opacity-25">
                  <button
                    type="button"
                    onClick={() => setSelectedProductHistory(null)}
                    className="btn btn-sm btn-outline-secondary font-monospace"
                  >
                    Cerrar Bitácora
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
