"use client";

import { useEffect, useRef } from "react";

const benefits = [
  {
    icon: "bi-arrows-angle-expand",
    title: "Multimarca real",
    description:
      "Comparamos entre 8+ aseguradoras para darte opciones reales, no una sola cotización.",
    delay: 0,
  },
  {
    icon: "bi-lightning-charge",
    title: "Cotización en minutos",
    description:
      "Sin papeleo ni demoras. Te enviamos opciones claras por WhatsApp el mismo día.",
    delay: 100,
  },
  {
    icon: "bi-person-check",
    title: "Asesor dedicado",
    description:
      "Un humano real analiza tu caso. Cero bots, cero respuestas genéricas, cero ventas forzadas.",
    delay: 200,
  },
  {
    icon: "bi-headset",
    title: "Soporte en siniestros",
    description:
      "Cuando más lo necesitas, te acompañamos en todo el proceso de reclamación paso a paso.",
    delay: 300,
  },
];

const BenefitsSection = () => {
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
    <section id="beneficios" className="benefits-section">
      <div className="benefits-container">
        <div className="benefits-layout">
          {/* ── LEFT: Text column ── */}
          <div className="benefits-left">
            <div className="benefits-badge">¿Por qué AMER?</div>
            <h2 className="benefits-h2">Lo que nos hace diferentes</h2>
            <p className="benefits-text">
              No somos una aseguradora. Somos tu aliado para encontrar la mejor
              protección al mejor precio, sin complicaciones.
            </p>
          </div>

          {/* ── RIGHT: 2×2 cards grid ── */}
          <div className="benefits-right">
            <div className="benefits-grid">
              {benefits.map((benefit, idx) => (
                <div
                  key={benefit.title}
                  ref={(el) => {
                    cardRefs.current[idx] = el;
                  }}
                  data-delay={benefit.delay}
                  className="fade-up benefit-card-amer"
                >
                  {/* Icon */}
                  <div className="benefit-icon">
                    <i className={`bi ${benefit.icon}`} />
                  </div>

                  {/* Title */}
                  <h4 className="benefit-title">{benefit.title}</h4>

                  {/* Description */}
                  <p className="benefit-desc">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        /* ── ESTRATEGIA MOBILE-FIRST (Fluida) ── */

        .benefits-section {
          background: var(--gray-50);
          padding: var(--space-section) 0;
        }

        .benefits-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 var(--container-padding);
        }

        .benefits-layout {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: var(--space-section-sm);
        }

        .benefits-left {
          width: 100%;
          text-align: center;
        }

        .benefits-badge {
          text-transform: uppercase;
          font-size: var(--fs-label);
          letter-spacing: 3px;
          color: var(--blue);
          font-family: var(--font-body);
          font-weight: 600;
          margin-bottom: 12px;
        }

        .benefits-h2 {
          font-family: var(--font-display);
          font-weight: 700;
          color: var(--navy);
          line-height: 1.2;
          letter-spacing: -0.5px;
          margin-bottom: 16px;
          font-size: var(--fs-h2);
        }

        .benefits-text {
          font-family: var(--font-body);
          color: var(--gray-500);
          max-width: 560px;
          line-height: 1.7;
          margin: 0 auto;
          font-size: var(--fs-body);
        }

        .benefits-right {
          width: 100%;
        }

        .benefits-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: var(--space-gap-lg);
        }

        .benefit-card-amer {
          background: var(--white);
          border-radius: var(--radius-lg);
          box-shadow: var(--shadow-sm);
          transition: all 0.3s;
          border: 1px solid transparent;
          padding: var(--space-gap-lg) 20px;
        }
        
        .benefit-card-amer:hover {
          box-shadow: var(--shadow-md);
          border-color: var(--blue-pale);
          transform: translateY(-2px);
        }

        .benefit-icon {
          width: 48px;
          height: 48px;
          border-radius: 12px;
          background: var(--blue-pale);
          color: var(--blue);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: var(--fs-h2);
          margin-bottom: 18px;
        }

        .benefit-title {
          font-family: var(--font-body);
          font-weight: 700;
          font-size: var(--fs-h3);
          color: var(--navy);
          margin-bottom: 8px;
        }

        .benefit-desc {
          font-family: var(--font-body);
          color: var(--gray-500);
          font-size: var(--fs-body);
          line-height: 1.6;
          margin: 0;
        }

        /* ── BREAKPOINTS (Solo Layout) ── */

        @media (min-width: 480px) {
          .benefits-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (min-width: 768px) {
          .benefit-card-amer {
            padding: var(--space-gap-lg) 28px;
          }
        }

        @media (min-width: 1024px) {
          .benefits-layout {
            flex-direction: row;
            align-items: flex-start;
          }
          .benefits-left {
            flex: 0 0 41.666%;
            text-align: left;
            position: sticky;
            top: 120px;
          }
          .benefits-text {
            margin: 0;
          }
          .benefits-right {
            flex: 1;
          }
        }
      `}</style>
    </section>
  );
};

export default BenefitsSection;
