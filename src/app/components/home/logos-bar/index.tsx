import Image from "next/image";

// Server Component — no hooks needed

const logos = [
  { name: "SURA", src: "/images/logos/SURA.png" },
  { name: "Bolívar", src: "/images/logos/seguros-bolivar.png" },
  { name: "Allianz", src: "/images/logos/Allianz.png" },
  { name: "Mapfre", src: "/images/logos/Mapfre.png" },
  { name: "AXA Colpatria", src: "/images/logos/axa colpatria.png" },
  { name: "Liberty", src: "/images/logos/liberty seguros.png" },
  { name: "S. del Estado", src: "/images/logos/Seguros del estado.png" },
];

const LogosBar = () => {
  return (
    <div className="logos-section">
      <div className="logos-container">
        {/* Title */}
        <div className="logos-title">Aseguradoras que nos respaldan</div>

        {/* Logos grid */}
        <div className="logos-grid">
          {logos.map((logo) => (
            <div key={logo.name} className="logo-item-amer">
              <Image
                src={logo.src}
                alt={`Logo ${logo.name}`}
                width={150}
                height={32}
                quality={100}
                className="logo-img"
              />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        /* ── ESTRATEGIA MOBILE-FIRST (Fluida) ── */

        .logos-section {
          background: var(--gray-50);
          border-top: 1px solid var(--gray-200);
          border-bottom: 1px solid var(--gray-200);
          padding: var(--space-gap-lg) 0;
        }

        .logos-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 var(--container-padding);
        }

        .logos-title {
          text-transform: uppercase;
          font-family: var(--font-body);
          font-weight: 600;
          color: var(--gray-400);
          text-align: center;
          margin-bottom: var(--space-gap-lg);
          font-size: var(--fs-label);
          letter-spacing: 2px;
        }

        .logos-grid {
          display: grid;
          grid-template-columns: repeat(2, auto);
          gap: var(--space-gap) var(--space-gap-lg);
          justify-content: center;
          align-items: center;
        }

        .logo-item-amer {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .logo-img {
          width: auto;
          height: 1.5rem; 
          object-fit: contain;
          transition: all 0.3s ease;
          filter: grayscale(100%);
          opacity: 0.6;
        }
        
        .logo-item-amer:hover .logo-img {
          filter: grayscale(0%);
          opacity: 1;
        }

        /* ── BREAKPOINTS (Solo Layout) ── */

        @media (min-width: 768px) {
          .logos-grid {
            grid-template-columns: repeat(4, auto);
          }
          .logo-img {
            height: 1.8rem;
          }
        }

        @media (min-width: 1024px) {
          .logos-grid {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            gap: calc(var(--space-gap-lg) * 2);
          }
          .logo-img {
            height: 32px;
          }
        }
      `}</style>
    </div>
  );
};

export default LogosBar;
