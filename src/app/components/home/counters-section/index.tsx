"use client";

import { useEffect, useRef, useState } from "react";

const counters = [
  { target: 350, suffix: "+", label: "Clientes activos", delay: 0 },
  { target: 8, suffix: "", label: "Aseguradoras", delay: 100 },
  { target: 600, suffix: "+", label: "Pólizas gestionadas", delay: 200 },
  { target: 98, suffix: "%", label: "Satisfacción", delay: 300 },
];

const SVG_PATTERN = `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.02'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C%2Fg%3E%3C%2Fsvg%3E")`;

const AnimatedCounter = ({
  target,
  suffix,
  label,
  delay,
}: {
  target: number;
  suffix: string;
  label: string;
  delay: number;
}) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const animated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animated.current) {
          animated.current = true;
          observer.unobserve(el);

          setTimeout(() => {
            const duration = 2000;
            const steps = 60;
            const interval = duration / steps;
            let step = 0;

            const timer = setInterval(() => {
              step++;
              const progress = step / steps;
              const eased = 1 - Math.pow(1 - progress, 3);
              setCount(Math.round(eased * target));

              if (step >= steps) {
                clearInterval(timer);
                setCount(target);
              }
            }, interval);
          }, delay);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target, delay]);

  return (
    <div ref={ref} className="counter-item">
      <div className="counter-number">
        {count}
        <span>{suffix}</span>
      </div>
      <div className="counter-label">{label}</div>
    </div>
  );
};

const CountersSection = () => {
  return (
    <section className="counters-section">
      <div className="counters-overlay" aria-hidden />

      <div className="counters-container">
        <div className="counters-grid">
          {counters.map((c) => (
            <AnimatedCounter key={c.label} {...c} />
          ))}
        </div>
      </div>

      <style>{`
        /* ── ESTRATEGIA MOBILE-FIRST (Fluida) ── */

        .counters-section {
          background: linear-gradient(135deg, var(--navy) 0%, #0F2440 100%);
          position: relative;
          overflow: hidden;
          padding: var(--space-section) 0;
        }

        .counters-overlay {
          position: absolute;
          inset: 0;
          background-image: ${SVG_PATTERN};
          pointer-events: none;
        }

        .counters-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 var(--container-padding);
          position: relative;
          z-index: 1;
        }

        .counters-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: var(--space-gap-lg);
        }

        .counter-item {
          text-align: center;
          position: relative;
          z-index: 1;
        }

        .counter-number {
          font-family: var(--font-display);
          font-weight: 700;
          color: var(--white);
          line-height: 1;
          font-size: var(--fs-h1);
        }
        .counter-number span {
          color: var(--green);
        }

        .counter-label {
          font-family: var(--font-body);
          color: rgba(255, 255, 255, 0.5);
          text-transform: uppercase;
          font-weight: 500;
          margin-top: 8px;
          font-size: var(--fs-label);
          letter-spacing: 1px;
        }

        /* ── BREAKPOINTS (Solo Layout) ── */

        @media (min-width: 768px) {
          .counters-grid {
            grid-template-columns: repeat(4, 1fr);
          }
        }
      `}</style>
    </section>
  );
};

export default CountersSection;
