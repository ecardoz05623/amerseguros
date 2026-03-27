"use client";

import { useEffect, useRef } from "react";

const WHATSAPP_URL =
  "https://wa.me/573182723559?text=Hola%2C%20quiero%20cotizar%20un%20seguro";

const stats = [
  { number: "350+", label: "Clientes activos" },
  { number: "8", label: "Aseguradoras" },
  { number: "5 min", label: "Cotización" },
];

const HeroAmer = () => {
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    // Staggered fade-up for float cards on mount
    const timers: ReturnType<typeof setTimeout>[] = [];
    cardsRef.current.forEach((el, i) => {
      if (!el) return;
      const delay = i * 150;
      timers.push(
        setTimeout(() => {
          el.classList.add("visible");
        }, 400 + delay)
      );
    });
    return () => timers.forEach(clearTimeout);
  }, []);

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const target = document.querySelector(id);
    if (target) target.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="hero-section">
      {/* Decorative pseudo-element (top-right glow) */}
      <div aria-hidden className="hero-glow-1" />
      {/* Decorative pseudo-element (bottom-left glow) */}
      <div aria-hidden className="hero-glow-2" />

      {/* Content */}
      <div className="hero-container">
        <div className="hero-layout">
          {/* ── LEFT COLUMN ── */}
          <div className="hero-left">
            {/* Badge */}
            <div className="hero-badge">
              <i className="bi bi-shield-check" style={{ color: "var(--green)" }} />
              Intermediario autorizado · Duitama, Boyacá
            </div>

            {/* H1 */}
            <h1 className="hero-h1">
              Compara seguros.
              <br />
              Elige <span>el mejor</span>
              <br />
              para ti.
            </h1>

            {/* Subtitle */}
            <p className="hero-subtitle">
              Cotizamos con más de 8 aseguradoras para encontrar la póliza que
              realmente necesitas, al mejor precio. Sin letra pequeña, sin
              ventas forzadas.
            </p>

            {/* CTA buttons */}
            <div className="hero-cta-group">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="hero-cta-primary"
              >
                <i className="bi bi-whatsapp" />
                Cotiza gratis por WhatsApp
              </a>

              <a
                href="#servicios"
                onClick={(e) => handleScrollTo(e, "#servicios")}
                className="hero-cta-secondary"
              >
                Ver servicios <i className="bi bi-arrow-down-short" />
              </a>
            </div>

            {/* Mini-stats */}
            <div className="hero-stats-group">
              {stats.map((stat) => (
                <div key={stat.label} className="hero-stat-item">
                  <div className="hero-stat-number">{stat.number}</div>
                  <div className="hero-stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* ── RIGHT COLUMN: Float cards (hidden by default in mobile-first) ── */}
          <div className="hero-right">
            <div className="hero-visual">
                <div className="hero-card-stack">
                    <div className="hero-float-card hfc-1 fade-up" ref={(el) => { if (el) cardsRef.current[0] = el; }}>
                        <div className="hfc-icon blue"><i className="bi bi-car-front"></i></div>
                        <div className="hfc-title">Seguro Vehicular</div>
                        <div className="hfc-text">Todo riesgo y SOAT con las mejores tarifas del mercado.</div>
                    </div>
                    <div className="hero-float-card hfc-2 fade-up" style={{ transitionDelay: "0.15s" }} ref={(el) => { if (el) cardsRef.current[1] = el; }}>
                        <div className="hfc-icon green"><i className="bi bi-heart-pulse"></i></div>
                        <div className="hfc-title">Seguros de Vida</div>
                        <div className="hfc-text">Protección para ti y tu familia cuando más importa.</div>
                    </div>
                    <div className="hero-float-card hfc-3 fade-up" style={{ transitionDelay: "0.3s" }} ref={(el) => { if (el) cardsRef.current[2] = el; }}>
                        <div className="hfc-icon gold"><i className="bi bi-building-check"></i></div>
                        <div className="hfc-title">Pólizas de Cumplimiento</div>
                        <div className="hfc-text">Garantías para contratos públicos y privados.</div>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        /* ── ESTRATEGIA MOBILE-FIRST (Fluida) ── */

        .hero-section {
          background: linear-gradient(135deg, var(--navy) 0%, var(--navy-light) 50%, #1a3a5c 100%);
          min-height: auto; 
          display: flex;
          align-items: center;
          position: relative;
          overflow: hidden;
          padding: 120px 0 60px;
        }

        .hero-glow-1 {
          position: absolute;
          top: -10%;
          right: -10%;
          width: 300px;
          height: 300px;
          background: radial-gradient(circle, rgba(46,107,181,0.2) 0%, transparent 70%);
          border-radius: 50%;
          pointer-events: none;
        }

        .hero-glow-2 {
          position: absolute;
          bottom: -10%;
          left: -10%;
          width: 300px;
          height: 300px;
          background: radial-gradient(circle, rgba(34,197,94,0.15) 0%, transparent 70%);
          border-radius: 50%;
          pointer-events: none;
        }

        .hero-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 var(--container-padding);
          width: 100%;
          position: relative;
          z-index: 1;
        }

        .hero-layout {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .hero-left {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(255,255,255,0.08);
          border: 1px solid rgba(255,255,255,0.12);
          border-radius: 50px;
          padding: 5px 14px;
          font-size: var(--fs-label);
          color: rgba(255,255,255,0.85);
          font-family: var(--font-body);
          font-weight: 500;
          margin-bottom: 14px;
          backdrop-filter: blur(4px);
        }

        .hero-h1 {
          font-family: var(--font-display);
          font-size: var(--fs-h1);
          font-weight: 700;
          color: var(--white);
          line-height: 1.2;
          margin-bottom: 14px;
          letter-spacing: -1px;
        }
        .hero-h1 span {
          color: var(--blue-light);
        }

        .hero-subtitle {
          font-family: var(--font-body);
          font-size: var(--fs-body);
          color: rgba(255,255,255,0.7);
          line-height: 1.6;
          margin: 0 auto 24px auto;
          max-width: 100%;
        }

        .hero-cta-group {
          display: flex;
          flex-direction: column;
          gap: 16px;
          width: 100%;
          margin-bottom: 32px;
        }

        .hero-cta-primary {
          background: var(--green);
          color: var(--white);
          border: none;
          padding: 14px 24px;
          border-radius: 10px;
          font-family: var(--font-body);
          font-weight: 600;
          font-size: var(--fs-btn);
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          text-decoration: none;
          box-shadow: 0 4px 20px rgba(34,197,94,0.3);
          transition: all 0.3s;
          width: 100%;
        }
        .hero-cta-primary:hover {
          background: var(--green-hover);
          transform: translateY(-2px);
          box-shadow: 0 8px 30px rgba(34,197,94,0.4);
        }

        .hero-cta-secondary {
          background: transparent;
          color: var(--white);
          border: 1.5px solid rgba(255,255,255,0.25);
          padding: 14px 24px;
          border-radius: 10px;
          font-family: var(--font-body);
          font-weight: 500;
          font-size: var(--fs-btn);
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          text-decoration: none;
          transition: all 0.3s;
          width: 100%;
        }
        .hero-cta-secondary:hover {
          border-color: rgba(255,255,255,0.5);
          background: rgba(255,255,255,0.05);
        }

        .hero-stats-group {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: var(--space-gap);
          width: 100%;
        }

        .hero-stat-item {
          text-align: center;
          border-left: none;
          padding-left: 0;
        }

        .hero-stat-number {
          font-family: var(--font-display);
          font-size: var(--fs-h2);
          font-weight: 700;
          color: var(--white);
        }

        .hero-stat-label {
          font-family: var(--font-body);
          font-size: var(--fs-small);
          color: rgba(255,255,255,0.5);
          text-transform: uppercase;
          letter-spacing: 1px;
          font-weight: 500;
        }

        .hero-right {
          display: none;
        }

        /* ── Hero visual: contenedor de tarjetas ── */
        .hero-visual {
            position: relative;
            z-index: 1;
        }

        .hero-card-stack {
            position: relative;
            height: 450px;
        }

        /* ── Tarjeta flotante: glassmorphism ── */
        .hero-float-card {
            position: absolute;
            background: rgba(255, 255, 255, 0.06);
            backdrop-filter: blur(20px);
            -webkit-backdrop-filter: blur(20px);
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 20px;
            padding: 28px;
            color: white;
            transition: transform 0.3s ease;
        }

        .hero-float-card.fade-up {
            opacity: 0;
            transform: translateY(20px);
            transition: transform 0.4s ease, opacity 0.6s ease;
        }
        
        .hero-float-card.fade-up.visible {
            opacity: 1;
            transform: translateY(0);
        }

        .hero-float-card:hover {
            transform: translateY(-4px);
        }

        /* ── Posiciones: cada tarjeta en distinta posición para efecto cascada ── */
        .hfc-1 {
            top: 0;
            right: 0;
            width: 280px;
            z-index: 1;
        }

        .hfc-2 {
            top: 120px;
            right: 180px;
            width: 260px;
            z-index: 2;
        }

        .hfc-3 {
            top: 260px;
            right: 40px;
            width: 300px;
            z-index: 1;
        }

        /* ── Íconos dentro de tarjetas ── */
        .hfc-icon {
            width: 48px;
            height: 48px;
            border-radius: 12px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.3rem;
            margin-bottom: 14px;
        }

        .hfc-icon.blue {
            background: rgba(46, 107, 181, 0.3);
            color: #4A90D9;
        }

        .hfc-icon.green {
            background: rgba(34, 197, 94, 0.2);
            color: #22C55E;
        }

        .hfc-icon.gold {
            background: rgba(245, 158, 11, 0.2);
            color: #F59E0B;
        }

        /* ── Texto dentro de tarjetas ── */
        .hfc-title {
            font-weight: 600;
            font-size: 1rem;
            margin-bottom: 6px;
            color: white;
        }

        .hfc-text {
            font-size: 0.82rem;
            color: rgba(255, 255, 255, 0.55);
            line-height: 1.5;
        }

        /* ── BREAKPOINTS (Solo Layout) ── */

        /* Ocultar tarjetas en tablet y mobile */
        @media (max-width: 1023px) {
            .hero-card-stack {
                display: none;
            }
           .hero-left { text-align: center; }
           .hero-subtitle { margin-left: auto; margin-right: auto; }
           .hero-cta-group { justify-content: center; }
           .hero-stats-group { justify-content: center; }
        }

        @media (min-width: 480px) {
          .hero-cta-group {
            flex-direction: row;
            justify-content: center;
            width: auto;
          }
          .hero-cta-primary,
          .hero-cta-secondary {
            width: auto;
          }
          .hero-stats-group {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: center;
            gap: var(--space-gap-lg);
          }
        }

        @media (min-width: 768px) {
          .hero-section {
            padding: 120px 0 var(--space-section);
          }
          .hero-subtitle {
            max-width: 480px;
          }
          .hero-cta-primary,
          .hero-cta-secondary {
            padding: 16px 32px;
          }
          .hero-stat-item {
            border-left: 2px solid rgba(255,255,255,0.12);
            padding-left: 20px;
            text-align: left;
          }
          .hero-stat-item:first-child {
            border-left: none;
            padding-left: 0;
          }
        }

        @media (min-width: 1024px) {
          .hero-section {
            min-height: auto;
            padding: 100px 0 48px;
          }
          .hero-glow-1 {
            top: -50%;
            right: -20%;
            width: 800px;
            height: 800px;
          }
          .hero-glow-2 {
            bottom: -30%;
            left: -10%;
            width: 600px;
            height: 600px;
          }
          .hero-layout {
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            gap: 64px;
          }
          .hero-left {
            flex: 0 0 60%;
            align-items: flex-start;
            text-align: left;
          }
          .hero-subtitle {
            margin: 0 0 24px 0;
          }
          .hero-cta-group {
            justify-content: flex-start;
          }
          .hero-stats-group {
            justify-content: flex-start;
          }
          .hero-right {
            display: flex;
            flex: 0 0 40%;
            justify-content: center;
            min-width: 0;
          }
        }

        @media (min-width: 1024px) and (max-width: 1535px) {
          .hero-card-stack { margin-left: 40px; }
        }

        /* Ajuste para pantallas grandes */
        @media (min-width: 1536px) {
            .hero-section { padding: 108px 0 52px; }
            .hero-container {
              max-width: 1400px;
            }
            .hero-card-stack { margin-left: 60px; }
            .hero-h1 {
              font-size: 3.8rem;
            }
            .hero-subtitle {
              font-size: 1.15rem;
              max-width: 560px;
            }
            .hero-stat-number {
              font-size: 2rem;
            }

            .hfc-1 { width: 300px; }
            .hfc-2 { width: 280px; right: 200px; }
            .hfc-3 { width: 320px; }
            .hero-float-card { padding: 32px; }
            .hero-card-stack { height: 480px; }
        }
        
        @media (min-width: 1920px) {
            .hero-container {
              max-width: 1500px;
            }
            .hero-h1 {
              font-size: 4rem;
            }

            .hfc-1 { width: 320px; }
            .hfc-2 { width: 300px; right: 220px; top: 130px; }
            .hfc-3 { width: 340px; top: 280px; }
            .hero-card-stack { height: 520px; }
        }
      `}</style>
    </section>
  );
};

export default HeroAmer;
