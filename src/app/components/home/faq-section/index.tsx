"use client";

import { useState, useEffect, useRef } from "react";

const faqs = [
  {
    question: "¿Cómo funciona la cotización con AMER Seguros?",
    answer:
      "Nos escribes por WhatsApp o llenas el formulario. Un asesor te contacta, entiende lo que necesitas y cotiza con múltiples aseguradoras. Te enviamos las opciones comparadas para que tú decidas. Sin compromiso, sin costo.",
  },
  {
    question: "¿Con qué aseguradoras trabajan?",
    answer:
      "Trabajamos con aseguradoras reconocidas como Sura, Bolívar, Allianz, Mapfre, AXA Colpatria, Liberty, Positiva y Seguros del Estado, entre otras. Así puedes comparar y elegir con confianza.",
  },
  {
    question: "¿La asesoría tiene algún costo?",
    answer:
      "No. Nuestra asesoría y cotización son completamente gratuitas. Nuestro ingreso proviene de las comisiones que nos pagan las aseguradoras, no de ti. El precio de tu póliza es exactamente el mismo que si fueras directo.",
  },
  {
    question: "¿Qué pasa si tengo un siniestro?",
    answer:
      "Te acompañamos en todo el proceso. Nos contactas, te orientamos con la documentación necesaria y hacemos seguimiento a tu reclamación con la aseguradora hasta que se resuelva. No te dejamos solo.",
  },
  {
    question: "¿Cuánto tarda obtener una póliza?",
    answer:
      "Dependiendo del tipo de seguro, puedes tener tu póliza lista en 24 a 72 horas. Pólizas de vehículos y SOAT suelen estar listas el mismo día. Cumplimiento puede tomar de 1 a 3 días hábiles.",
  },
  {
    question: "¿Atienden solo en Duitama?",
    answer:
      "Nuestra oficina está en Duitama, pero atendemos clientes en todo Boyacá y a nivel nacional. La mayoría de trámites se pueden hacer de forma virtual por WhatsApp, correo o videollamada.",
  },
];

const FaqSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  const toggle = (idx: number) => {
    setActiveIndex((prev) => (prev === idx ? null : idx));
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    itemRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <section id="faq" className="faq-section">
      <div className="faq-container-global">
        {/* Header */}
        <div className="faq-header">
          <div className="faq-badge">Preguntas frecuentes</div>
          <h2 className="faq-h2">Resolvemos tus dudas</h2>
        </div>

        {/* Accordion */}
        <div className="faq-accordion">
          {faqs.map((faq, idx) => {
            const isActive = activeIndex === idx;
            return (
              <div
                key={faq.question}
                ref={(el) => {
                  itemRefs.current[idx] = el;
                }}
                className={`fade-up faq-item ${isActive ? "active" : ""}`}
              >
                {/* Question row */}
                <button
                  onClick={() => toggle(idx)}
                  className="faq-q"
                  aria-expanded={isActive}
                >
                  {faq.question}
                  <i className="bi bi-plus-lg faq-icon" />
                </button>

                {/* Answer */}
                <div className="faq-a-wrapper">
                  <div className="faq-a">
                    <p>{faq.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        /* ── ESTRATEGIA MOBILE-FIRST (Fluida) ── */

        .faq-section {
          background: var(--gray-50);
          padding: var(--space-section) 0;
        }

        .faq-container-global {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 var(--container-padding);
        }

        .faq-header {
          text-align: center;
          margin-bottom: var(--space-section-sm);
        }

        .faq-badge {
          text-transform: uppercase;
          font-size: var(--fs-label);
          letter-spacing: 3px;
          color: var(--blue);
          font-family: var(--font-body);
          font-weight: 600;
          margin-bottom: 12px;
        }

        .faq-h2 {
          font-family: var(--font-display);
          font-size: var(--fs-h2);
          font-weight: 700;
          color: var(--navy);
          line-height: 1.2;
          letter-spacing: -0.5px;
        }

        .faq-accordion {
          width: 100%;
          max-width: 100%;
          margin: 0 auto;
        }

        .faq-item {
          border: 1px solid var(--gray-200);
          border-radius: var(--radius);
          overflow: hidden;
          transition: border-color 0.3s;
          margin-bottom: 8px;
        }

        .faq-item.active {
          border-color: var(--blue-light);
        }

        .faq-q {
          width: 100%;
          font-family: var(--font-body);
          font-weight: 600;
          color: var(--navy);
          cursor: pointer;
          display: flex;
          justify-content: space-between;
          align-items: center;
          background: var(--white);
          border: none;
          text-align: left;
          transition: background 0.2s;
          font-size: var(--fs-btn);
          padding: 16px var(--space-gap);
        }
        
        .faq-q:hover {
          background: var(--gray-50);
        }

        .faq-item.active .faq-q {
          background: var(--white);
        }

        .faq-icon {
          color: var(--blue);
          flex-shrink: 0;
          margin-left: 16px;
          transition: transform 0.3s;
          font-size: var(--fs-h3);
          transform: rotate(0deg);
        }

        .faq-item.active .faq-icon {
          transform: rotate(45deg);
        }

        .faq-a-wrapper {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.35s ease;
        }

        .faq-item.active .faq-a-wrapper {
          max-height: 350px;
        }

        .faq-a {
          padding: 0 var(--space-gap) 16px;
        }

        .faq-a p {
          font-family: var(--font-body);
          color: var(--gray-500);
          line-height: 1.7;
          margin: 0;
          font-size: var(--fs-body);
        }

        /* ── BREAKPOINTS (Solo Layout) ── */

        @media (min-width: 768px) {
          .faq-accordion {
            max-width: 640px;
          }
          .faq-item {
            margin-bottom: 10px;
          }
        }

        @media (min-width: 1024px) {
          .faq-accordion {
            max-width: 740px;
          }
        }
      `}</style>
    </section>
  );
};

export default FaqSection;
