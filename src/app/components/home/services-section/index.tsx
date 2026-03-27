"use client";

import { useEffect, useRef } from "react";

const services = [
  {
    icon: "bi-car-front-fill",
    iconClass: "si-blue",
    title: "Vehículos",
    description:
      "Todo riesgo, pérdida total, SOAT y responsabilidad civil. Comparamos tarifas para que pagues lo justo.",
    delay: 0,
  },
  {
    icon: "bi-heart-pulse-fill",
    iconClass: "si-green",
    title: "Personas y Vida",
    description:
      "Seguros de vida, accidentes personales y enfermedades graves. Protege a quienes más quieres.",
    delay: 100,
  },
  {
    icon: "bi-file-earmark-check-fill",
    iconClass: "si-gold",
    title: "Cumplimiento",
    description:
      "Pólizas de cumplimiento para contratos públicos y privados. Garantías de seriedad, calidad y estabilidad.",
    delay: 200,
  },
  {
    icon: "bi-people-fill",
    iconClass: "si-navy",
    title: "Servicios ARL",
    description:
      "Afiliación y gestión de ARL para empresas. Cumple la normativa y protege a tus colaboradores.",
    delay: 300,
  },
];

const iconStyles: Record<string, React.CSSProperties> = {
  "si-blue": { background: "var(--blue-pale)", color: "var(--blue)" },
  "si-green": { background: "#DCFCE7", color: "#16A34A" },
  "si-gold": { background: "#FEF3C7", color: "#D97706" },
  "si-navy": { background: "#E2E8F0", color: "var(--navy)" },
};

const ServicesSection = () => {
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            const delay = parseInt(el.dataset.delay ?? "0", 10);
            setTimeout(() => el.classList.add("visible"), delay);
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.15 }
    );

    cardRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="servicios" className="services-section">
      <div className="services-container">
        {/* Header */}
        <div className="services-header">
          <div className="services-badge">Nuestros servicios</div>
          <h2 className="services-h2">
            Seguros para cada etapa de tu vida y tu negocio
          </h2>
        </div>

        {/* Cards grid */}
        <div className="services-grid">
          {services.map((svc, idx) => (
            <div
              key={svc.title}
              ref={(el) => {
                cardRefs.current[idx] = el;
              }}
              data-delay={svc.delay}
              className="fade-up service-card-amer"
            >
              {/* Icon */}
              <div className="service-icon" style={iconStyles[svc.iconClass]}>
                <i className={`bi ${svc.icon}`} />
              </div>

              {/* Title */}
              <h3 className="service-title">{svc.title}</h3>

              {/* Description */}
              <p className="service-text">{svc.description}</p>

              {/* CTA link */}
              <a href="#contacto" className="service-link-amer">
                Cotizar ahora <i className="bi bi-arrow-right" />
              </a>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        /* ── ESTRATEGIA MOBILE-FIRST (Fluida) ── */

        .services-section {
          background: var(--white);
          padding: var(--space-section) 0;
        }

        .services-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 var(--container-padding);
        }

        .services-header {
          text-align: center;
          margin-bottom: var(--space-section-sm);
        }

        .services-badge {
          text-transform: uppercase;
          font-size: var(--fs-label);
          letter-spacing: 3px;
          color: var(--blue);
          font-family: var(--font-body);
          font-weight: 600;
          margin-bottom: 12px;
        }

        .services-h2 {
          font-family: var(--font-display);
          font-weight: 700;
          color: var(--navy);
          line-height: 1.2;
          max-width: 600px;
          margin: 0 auto;
          letter-spacing: -0.5px;
          font-size: var(--fs-h2);
        }

        .services-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: var(--space-gap);
          width: 100%;
        }

        .service-card-amer {
          background: var(--white);
          border: 1px solid var(--gray-200);
          border-radius: var(--radius-lg);
          position: relative;
          overflow: hidden;
          transition: all 0.3s ease;
          height: 100%;
          padding: var(--space-gap-lg);
        }

        .service-icon {
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 20px;
          width: 56px;
          height: 56px;
          font-size: var(--fs-h2);
        }

        .service-title {
          font-family: var(--font-display);
          font-weight: 600;
          color: var(--navy);
          margin-bottom: 10px;
          font-size: var(--fs-h3);
        }

        .service-text {
          font-family: var(--font-body);
          color: var(--gray-500);
          line-height: 1.6;
          margin: 0;
          font-size: var(--fs-body);
        }

        .service-link-amer {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          color: var(--blue);
          font-family: var(--font-body);
          font-weight: 600;
          text-decoration: none;
          margin-top: 16px;
          transition: gap 0.2s;
          font-size: var(--fs-btn-sm);
        }

        /* Animate bottom line and hover */
        .service-card-amer::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 3px;
          background: var(--blue);
          transform: scaleX(0);
          transition: transform 0.3s;
        }
        .service-card-amer:hover {
          border-color: transparent;
          box-shadow: var(--shadow-lg);
          transform: translateY(-4px);
        }
        .service-card-amer:hover::after {
          transform: scaleX(1);
        }
        .service-link-amer:hover {
          gap: 10px;
        }

        /* ── BREAKPOINTS (Solo Layout) ── */

        @media (min-width: 480px) {
          .services-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (min-width: 768px) {
          .services-grid {
            gap: var(--space-gap-lg);
          }
        }

        @media (min-width: 1024px) {
          .services-grid {
            grid-template-columns: repeat(4, 1fr);
          }
        }
      `}</style>
    </section>
  );
};

export default ServicesSection;
