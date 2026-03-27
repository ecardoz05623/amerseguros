"use client";

import { useEffect, useRef } from "react";

/* TODO: Reemplazar con testimonios reales */
const testimonials = [
  {
    initials: "CR",
    name: "Carlos Rodríguez",
    role: "Duitama, Boyacá",
    badge: "Seguro vehicular",
    stars: 5,
    text: "Cotizaron mi seguro de carro con 5 aseguradoras distintas y me ahorraron casi $400.000 al año. El asesor me explicó cada opción sin presiones.",
    delay: 0,
  },
  {
    initials: "LP",
    name: "Laura Pérez",
    role: "Tunja, Boyacá",
    badge: "Póliza cumplimiento",
    stars: 5,
    text: "Necesitaba una póliza de cumplimiento urgente para un contrato público. En AMER me la gestionaron en menos de 48 horas. Excelente servicio.",
    delay: 150,
  },
  {
    initials: "AM",
    name: "Andrés Martínez",
    role: "Sogamoso, Boyacá",
    badge: "Servicios ARL",
    stars: 5,
    text: "Afiliamos a todo nuestro equipo a la ARL a través de AMER. Nos orientaron con la normativa y todo quedó en regla. Muy profesionales.",
    delay: 300,
  },
];

const TestimonialsSection = () => {
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
    <section id="testimonios" className="ts-section">
      <div className="ts-container">
        {/* Header */}
        <div className="ts-header">
          <div className="ts-badge">Testimonios</div>
          <h2 className="ts-h2">Lo que dicen nuestros clientes</h2>
          <p className="ts-desc">
            Historias reales de personas y empresas en Boyacá que confían en
            nosotros.
          </p>
        </div>

        {/* Cards grid / slider */}
        <div className="ts-grid">
          {testimonials.map((t, idx) => (
            <div
              key={t.name}
              ref={(el) => { cardRefs.current[idx] = el; }}
              data-delay={t.delay}
              className="fade-up ts-card"
            >
              {/* Decorative quote mark */}
              <div aria-hidden className="ts-quote">
                &ldquo;
              </div>

              {/* Stars */}
              <div className="ts-stars">
                {Array.from({ length: t.stars }).map((_, i) => (
                  <i key={i} className="bi bi-star-fill" />
                ))}
              </div>

              {/* Testimonial text */}
              <p className="ts-text">{t.text}</p>

              {/* Author */}
              <div className="ts-author-box">
                {/* Avatar with initials */}
                <div className="ts-avatar">{t.initials}</div>

                {/* Name, role, badge */}
                <div>
                  <div className="ts-name">{t.name}</div>
                  <div className="ts-role">{t.role}</div>
                  <span className="ts-badge-item">{t.badge}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Placeholder notice */}

      </div>

      <style>{`
        /* ── ESTRATEGIA MOBILE-FIRST (Fluida) ── */

        .ts-section {
          background: var(--white);
          padding: var(--space-section) 0;
        }

        .ts-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 var(--container-padding);
        }

        .ts-header {
          text-align: center;
          margin-bottom: var(--space-section-sm);
        }

        .ts-badge {
          text-transform: uppercase;
          font-size: var(--fs-label);
          letter-spacing: 3px;
          color: var(--blue);
          font-family: var(--font-body);
          font-weight: 600;
          margin-bottom: 12px;
        }

        .ts-h2 {
          font-family: var(--font-display);
          font-size: var(--fs-h2);
          font-weight: 700;
          color: var(--navy);
          line-height: 1.2;
          letter-spacing: -0.5px;
          margin-bottom: 16px;
        }

        .ts-desc {
          font-family: var(--font-body);
          font-size: var(--fs-body);
          color: var(--gray-500);
          max-width: 560px;
          line-height: 1.7;
          margin: 0 auto;
        }

        .ts-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: var(--space-gap);
        }

        .ts-card {
          background: var(--white);
          border: 1px solid var(--gray-200);
          border-radius: var(--radius-lg);
          position: relative;
          transition: box-shadow 0.3s;
          padding: var(--space-gap-lg) 20px;
        }

        .ts-card:hover {
          box-shadow: var(--shadow-md);
        }

        .ts-quote {
          position: absolute;
          font-family: Georgia, serif;
          line-height: 1;
          user-select: none;
          color: var(--blue-pale);
          font-size: clamp(2.5rem, 5vw, 4rem);
          top: 16px;
          right: 20px;
        }

        .ts-stars {
          color: var(--gold);
          font-size: 0.9rem;
          margin-bottom: 16px;
          display: flex;
          gap: 2px;
        }

        .ts-text {
          font-family: var(--font-body);
          color: var(--gray-600);
          line-height: 1.7;
          font-style: italic;
          font-size: var(--fs-body);
          margin-bottom: 24px;
        }

        .ts-author-box {
          display: flex;
          align-items: center;
          gap: 14px;
        }

        .ts-avatar {
          border-radius: 50%;
          background: var(--blue-pale);
          color: var(--blue);
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: var(--font-body);
          font-weight: 700;
          flex-shrink: 0;
          width: 44px;
          height: 44px;
          font-size: var(--fs-btn-sm);
        }

        .ts-name {
          font-family: var(--font-body);
          font-weight: 600;
          color: var(--navy);
          font-size: var(--fs-btn-sm);
        }

        .ts-role {
          font-family: var(--font-body);
          color: var(--gray-400);
          font-size: var(--fs-small);
        }

        .ts-badge-item {
          display: inline-block;
          background: var(--blue-pale);
          color: var(--blue);
          font-family: var(--font-body);
          font-weight: 600;
          border-radius: 50px;
          font-size: var(--fs-label);
          padding: 3px 10px;
          margin-top: 4px;
        }

        .ts-notice {
          text-align: center;
          margin-top: 24px;
        }
        .ts-notice small {
          font-family: var(--font-body);
          font-size: var(--fs-small);
          color: var(--gray-400);
        }

        /* ── BREAKPOINTS (Solo Layout) ── */

        @media (min-width: 480px) {
          .ts-grid {
            max-width: 500px;
            margin: 0 auto;
          }
        }

        @media (min-width: 768px) {
          .ts-grid {
            max-width: none;
            display: flex;
            overflow-x: auto;
            scroll-snap-type: x mandatory;
            padding-bottom: var(--space-gap-lg);
            gap: var(--space-gap-lg);
            scrollbar-width: none;
          }
          
          .ts-grid::-webkit-scrollbar {
            display: none;
          }

          .ts-card {
            flex: 0 0 80%;
            scroll-snap-align: center;
            padding: var(--space-gap-lg) 36px;
          }
        }

        @media (min-width: 1024px) {
          .ts-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            overflow-x: visible;
            scroll-snap-type: none;
            padding-bottom: 0;
          }
          .ts-card {
            flex: none;
          }
        }
      `}</style>
    </section>
  );
};

export default TestimonialsSection;
