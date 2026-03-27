"use client";

import { useState } from "react";

const contactInfo = [
  {
    icon: "bi-whatsapp",
    label: "WhatsApp",
    value: "+57 318 272 3559",
    href: "https://wa.me/573182723559",
  },
  {
    icon: "bi-telephone",
    label: "Teléfono",
    value: "+57 301 663 8053",
    href: "tel:+573016638053",
  },
  {
    icon: "bi-envelope",
    label: "Correo",
    value: "contacto@amerseguros.com",
    href: "mailto:contacto@amerseguros.com",
  },
  {
    icon: "bi-geo-alt",
    label: "Oficina",
    value: "Cl. 10 #37-82, Sevilla\nDuitama, Boyacá",
    href: "https://share.google/oU85wXMsfXYN57ybE",
  },
];

const trustBadges = [
  { icon: "bi-shield-check", label: "Sin compromiso" },
  { icon: "bi-lock", label: "Datos protegidos" },
  { icon: "bi-clock", label: "Respuesta en <2h" },
];

const ContactSection = () => {
  const [form, setForm] = useState({
    nombre: "",
    telefono: "",
    seguro: "",
    mensaje: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const msg = `Hola, quiero cotizar un seguro.\n\nNombre: ${form.nombre}\nTeléfono: ${form.telefono}\nTipo de seguro: ${form.seguro || "No especificado"
      }\nMensaje: ${form.mensaje || "—"}`;
    window.open(
      `https://wa.me/573182723559?text=${encodeURIComponent(msg)}`,
      "_blank"
    );

    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setForm({ nombre: "", telefono: "", seguro: "", mensaje: "" });
    }, 4000);
  };

  return (
    <section id="contacto" className="contact-section">
      {/* Decorative radial glow */}
      <div aria-hidden className="contact-glow" />

      <div className="contact-container">
        <div className="contact-layout">
          {/* ── LEFT: Contact info ── */}
          <div className="contact-info">
            <div className="contact-badge">Contáctanos</div>
            <h2 className="contact-h2">Hablemos de lo que necesitas proteger</h2>
            <p className="contact-desc">
              Un asesor real te responderá en menos de 2 horas en horario
              laboral.
            </p>

            {/* Info items */}
            <div className="contact-items-wrapper">
              {contactInfo.map((item) => (
                <div key={item.label} className="contact-item">
                  <div className="contact-icon">
                    <i className={`bi ${item.icon}`} />
                  </div>
                  <div className="contact-item-text">
                    <div className="contact-item-label">{item.label}</div>
                    <div className="contact-item-value">
                      {item.href ? (
                        <a
                          href={item.href}
                          target={item.href.startsWith("http") ? "_blank" : undefined}
                          rel="noopener noreferrer"
                          className="contact-link"
                        >
                          {item.value}
                        </a>
                      ) : (
                        item.value
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── RIGHT: Form card ── */}
          <div className="contact-form-wrapper">
            <div className="contact-form-card">
              <h3 className="form-h3">Solicita tu cotización</h3>
              <p className="form-desc">
                Completa estos datos y te contactamos hoy.
              </p>

              <form onSubmit={handleSubmit}>
                <div className="form-grid">
                  {/* Nombre */}
                  <div className="form-col">
                    <input
                      name="nombre"
                      type="text"
                      placeholder="Tu nombre"
                      value={form.nombre}
                      onChange={handleChange}
                      required
                      className="form-input"
                    />
                  </div>

                  {/* Teléfono */}
                  <div className="form-col">
                    <input
                      name="telefono"
                      type="tel"
                      placeholder="Tu teléfono / WhatsApp"
                      value={form.telefono}
                      onChange={handleChange}
                      required
                      className="form-input"
                    />
                  </div>

                  {/* Select tipo de seguro */}
                  <div className="form-full">
                    <select
                      name="seguro"
                      value={form.seguro}
                      onChange={handleChange}
                      required
                      className="form-input form-select"
                    >
                      <option value="" disabled>
                        ¿Qué tipo de seguro necesitas?
                      </option>
                      <option>Seguro de vehículo</option>
                      <option>Seguro de vida</option>
                      <option>Póliza de cumplimiento</option>
                      <option>Servicios ARL</option>
                      <option>Seguro empresarial</option>
                      <option>Otro / No estoy seguro</option>
                    </select>
                  </div>

                  {/* Textarea */}
                  <div className="form-full">
                    <textarea
                      name="mensaje"
                      rows={3}
                      placeholder="Cuéntanos brevemente qué necesitas (opcional)"
                      value={form.mensaje}
                      onChange={handleChange}
                      className="form-input"
                      style={{ resize: "vertical" }}
                    />
                  </div>

                  {/* Submit button */}
                  <div className="form-full">
                    <button
                      type="submit"
                      disabled={submitted}
                      className={`form-submit ${submitted ? "submitted" : ""}`}
                    >
                      {submitted ? (
                        <>
                          <i className="bi bi-check-circle" />
                          ¡Recibido! WhatsApp…
                        </>
                      ) : (
                        <>
                          <i className="bi bi-send" />
                          Solicitar gratis
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </form>

              {/* Trust badges */}
              <div className="trust-badges">
                {trustBadges.map((badge) => (
                  <div key={badge.label} className="trust-badge">
                    <i className={`bi ${badge.icon} trust-icon`} />
                    {badge.label}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        /* ── ESTRATEGIA MOBILE-FIRST (Fluida) ── */

        .contact-section {
          background: linear-gradient(135deg, var(--navy) 0%, #0F2440 100%);
          position: relative;
          overflow: hidden;
          padding: var(--space-section) 0;
        }

        .contact-glow {
          position: absolute;
          top: -200px;
          right: -200px;
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, rgba(46,107,181,0.12) 0%, transparent 70%);
          border-radius: 50%;
          pointer-events: none;
        }

        .contact-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 var(--container-padding);
          position: relative;
          z-index: 1;
        }

        .contact-layout {
          display: flex;
          flex-direction: column;
          gap: var(--space-section-sm);
          align-items: center;
        }

        .contact-info {
          width: 100%;
          text-align: center;
          margin-bottom: var(--space-gap-lg);
        }

        .contact-badge {
          text-transform: uppercase;
          font-size: var(--fs-label);
          letter-spacing: 3px;
          color: var(--blue-light);
          font-family: var(--font-body);
          font-weight: 600;
          margin-bottom: 12px;
        }

        .contact-h2 {
          font-family: var(--font-display);
          font-weight: 700;
          color: var(--white);
          line-height: 1.2;
          letter-spacing: -0.5px;
          margin-bottom: 16px;
          font-size: var(--fs-h2);
        }

        .contact-desc {
          font-family: var(--font-body);
          color: rgba(255,255,255,0.6);
          margin-bottom: 40px;
          line-height: 1.7;
          font-size: var(--fs-body);
        }

        .contact-items-wrapper {
          display: flex;
          flex-direction: column;
          gap: var(--space-gap-lg);
        }

        .contact-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: var(--space-gap);
        }

        .contact-item-text {
          text-align: center;
        }

        .contact-icon {
          width: 44px;
          height: 44px;
          border-radius: 10px;
          background: rgba(255,255,255,0.08);
          color: var(--blue-light);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.1rem;
          flex-shrink: 0;
        }

        .contact-item-label {
          font-family: var(--font-body);
          font-size: var(--fs-label);
          color: rgba(255,255,255,0.45);
          text-transform: uppercase;
          letter-spacing: 1px;
          font-weight: 500;
        }

        .contact-item-value {
          font-family: var(--font-body);
          color: var(--white);
          font-weight: 500;
          font-size: var(--fs-body);
          white-space: pre-line;
          margin-top: 4px;
        }

        .contact-link {
          color: var(--white);
          text-decoration: none;
          transition: color 0.2s;
        }
        .contact-link:hover {
          color: var(--blue-light);
        }

        .contact-form-wrapper {
          width: 100%;
        }

        .contact-form-card {
          background: var(--white);
          box-shadow: var(--shadow-xl);
          position: relative;
          z-index: 1;
          padding: var(--space-gap-lg);
          border-radius: 16px;
        }

        .form-h3 {
          font-family: var(--font-display);
          font-weight: 700;
          color: var(--navy);
          margin-bottom: 6px;
          text-align: center;
          font-size: var(--fs-h3);
        }

        .form-desc {
          font-family: var(--font-body);
          color: var(--gray-500);
          font-size: var(--fs-body);
          margin-bottom: 24px;
          text-align: center;
        }

        .form-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: var(--space-gap);
        }

        .form-col {
          width: 100%;
        }

        .form-full {
          grid-column: 1 / -1;
        }

        .form-input {
          width: 100%;
          border: 1.5px solid var(--gray-200);
          border-radius: 10px;
          font-family: var(--font-body);
          background: var(--gray-50);
          color: var(--gray-700);
          outline: none;
          transition: all 0.2s;
          padding: 12px 14px;
          font-size: var(--fs-body);
        }

        .form-input:focus {
          border-color: var(--blue-light);
          box-shadow: 0 0 0 3px rgba(74,144,217,0.12);
          background: var(--white);
        }

        .form-select {
          cursor: pointer;
        }

        .form-submit {
          border: none;
          border-radius: 10px;
          font-family: var(--font-body);
          font-weight: 600;
          width: 100%;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          transition: all 0.3s;
          background: var(--green);
          color: var(--white);
          font-size: var(--fs-btn);
          padding: 14px;
        }

        .form-submit:not(.submitted):hover {
          background: var(--green-hover);
          transform: translateY(-1px);
          box-shadow: 0 4px 20px rgba(34,197,94,0.3);
        }

        .form-submit.submitted {
          background: #16A34A;
          cursor: default;
        }

        .trust-badges {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          align-items: center;
          margin-top: 20px;
          gap: var(--space-gap);
        }

        .trust-badge {
          display: flex;
          align-items: center;
          gap: 6px;
          font-family: var(--font-body);
          color: var(--gray-500);
          font-size: var(--fs-small);
        }

        .trust-icon {
          color: var(--green);
          font-size: 1rem;
        }

        /* ── BREAKPOINTS (Solo Layout) ── */

        @media (min-width: 768px) {
          .contact-form-card {
            padding: 36px;
          }
          .form-grid {
            grid-template-columns: 1fr 1fr;
          }
          .trust-badges {
            flex-wrap: nowrap;
          }
        }

        @media (min-width: 1024px) {
          .contact-layout {
            flex-direction: row;
            align-items: flex-start;
          }
          .contact-info {
            flex: 0 0 40%;
            text-align: left;
            margin-bottom: 0;
          }
          .contact-h2 {
            text-align: left;
          }
          .contact-item {
            flex-direction: row;
            align-items: flex-start;
            gap: 16px;
          }
          .contact-item-text {
            text-align: left;
          }
          .form-h3, .form-desc {
            text-align: left;
          }
          .contact-form-wrapper {
            flex: 1;
            max-width: 60%;
          }
          .contact-form-card {
            padding: var(--space-section-sm);
            border-radius: var(--radius-lg);
          }
        }
      `}</style>
    </section>
  );
};

export default ContactSection;
