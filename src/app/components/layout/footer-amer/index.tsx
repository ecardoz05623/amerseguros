"use client";

import Image from "next/image";
import Link from "next/link";

const footerServices = [
  { label: "Vehículos", href: "/seguros-vehiculos" },
  { label: "Vida y Personas", href: "/seguros-vida" },
  { label: "Cumplimiento", href: "/polizas-cumplimiento" },
  { label: "ARL", href: "/servicios-arl" },
];

const footerCompany = [
  { label: "¿Por qué AMER?", href: "#beneficios" },
  { label: "Testimonios", href: "#testimonios" },
  { label: "Preguntas frecuentes", href: "#faq" },
  { label: "Contacto", href: "#contacto" },
];

const socials = [
  { icon: "bi-facebook", href: "https://www.facebook.com/amerseguros.ltda/" },
  { icon: "bi-instagram", href: "https://www.instagram.com/amerseguros.co/" },
  { icon: "bi-tiktok", href: "https://www.tiktok.com/@amerseguros.co" },
];

const FooterAmer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        {/* Main Grid */}
        <div className="footer-grid">
          {/* Col 1: Brand */}
          <div className="footer-brand">
            <Link href="/">
              <Image
                src="/images/logo/WhiteLogo.png"
                alt="AMER Seguros logo"
                width={160}
                height={40}
                className="footer-logo"
              />
            </Link>
            <p className="footer-desc">
              Intermediario de seguros multimarca en Duitama, Boyacá. Te
              ayudamos a comparar y elegir el mejor seguro para ti.
            </p>
          </div>

          {/* Col 2: Servicios */}
          <div className="footer-servicios">
            <h5 className="footer-heading">Servicios</h5>
            <ul className="footer-links">
              {footerServices.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="footer-link">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Empresa */}
          <div className="footer-empresa">
            <h5 className="footer-heading">Empresa</h5>
            <ul className="footer-links">
              {footerCompany.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="footer-link">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contáctanos */}
          <div className="footer-contacto">
            <h5 className="footer-heading">Contáctanos</h5>

            <div className="footer-contact-list">
              <p className="footer-contact-item">
                <i className="bi bi-geo-alt footer-contact-icon" />
                <a href="https://share.google/h6lDNMfSlj0weRndw" target="_blank" rel="noopener noreferrer" className="footer-contact-link">Cl. 10 #37-82, Sevilla, Duitama</a>
              </p>
              <p className="footer-contact-item">
                <i className="bi bi-telephone footer-contact-icon" />
                <a href="tel:+573182723559" className="footer-contact-link">+573182723559</a>
              </p>
              <p className="footer-contact-item">
                <i className="bi bi-envelope footer-contact-icon" />
                <a href="mailto:contacto@amerseguros.com" className="footer-contact-link">contacto@amerseguros.com</a>
              </p>
            </div>

            {/* Social icons */}
            <div className="footer-socials">
              {socials.map((s) => (
                <a
                  key={s.icon}
                  href={s.href}
                  className="social-link"
                  aria-label={s.icon.replace("bi-", "")}
                >
                  <i className={`bi ${s.icon}`} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Footer bottom */}
        <div className="footer-bottom">
          <p className="footer-copyright">
            © 2025 AMER Seguros — Todos los derechos reservados.
          </p>
        </div>
      </div>

      <style>{`
        /* ── ESTRATEGIA MOBILE-FIRST (Fluida) ── */

        .footer-section {
          background: #060E1A;
          padding: 48px 0 24px;
        }

        .footer-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px; /* O variable --container-padding */
        }

        .footer-grid {
          display: grid;
          /* Mobile base: 1fr 1fr para lado a lado */
          grid-template-columns: 1fr 1fr;
          gap: 32px 16px;
        }

        .footer-brand {
          grid-column: 1 / -1;
          text-align: center;
          margin-bottom: 28px;
          order: 1;
        }
        
        .footer-servicios {
          grid-column: 1 / 2;
          text-align: center;
          order: 2;
        }
        
        .footer-empresa {
          grid-column: 2 / -1;
          text-align: center;
          order: 3;
        }
        
        .footer-contacto {
          grid-column: 1 / -1;
          text-align: center;
          order: 4;
        }

        .footer-logo {
          height: 32px;
          width: auto;
          display: block;
          object-fit: contain;
          margin: 0 auto 12px;
        }

        .footer-desc {
          color: rgba(255,255,255,0.4);
          font-size: 0.82rem;
          line-height: 1.6;
          max-width: 300px;
          margin: 12px auto 0;
        }

        .footer-heading {
          font-weight: 600;
          color: #FFFFFF;
          font-size: 1rem;
          margin: 0 0 16px 0;
        }

        .footer-links {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .footer-link {
          color: rgba(255,255,255,0.4);
          text-decoration: none;
          font-size: 0.82rem;
          display: inline-block;
          margin-bottom: 8px;
          transition: color 0.2s;
        }
        .footer-link:hover {
          color: rgba(255,255,255,0.7);
        }

        .footer-contact-list {
          display: flex;
          flex-direction: column;
          align-items: center; /* En mobile */
          gap: 8px;
        }

        .footer-contact-item {
          display: flex;
          align-items: center;
          gap: 10px;
          margin: 0;
        }

        .footer-contact-icon {
          color: #4A90D9;
          font-size: 0.9rem;
          flex-shrink: 0;
        }

        .footer-contact-text {
          color: rgba(255,255,255,0.4);
          font-size: 0.82rem;
        }
        
        .footer-contact-link {
          color: rgba(255,255,255,0.4);
          text-decoration: none;
          font-size: 0.82rem;
          transition: color 0.2s;
        }
        .footer-contact-link:hover {
          color: rgba(255,255,255,0.7);
        }

        .footer-socials {
          display: flex;
          justify-content: center;
          gap: 16px;
          margin-top: 16px;
        }

        .social-link {
          color: rgba(255,255,255,0.35);
          text-decoration: none;
          transition: color 0.2s;
          font-size: 1rem;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .social-link:hover {
          color: rgba(255,255,255,0.7);
        }

        .footer-bottom {
          border-top: 1px solid rgba(255,255,255,0.06);
          text-align: center;
          margin-top: 32px;
          padding-top: 24px;
        }

        .footer-copyright {
          color: rgba(255,255,255,0.3);
          margin: 0;
          font-size: 0.72rem;
        }

        /* ── BREAKPOINTS ── */

        @media (max-width: 767px) {
          .footer-logo {
            height: 28px;
          }
        }

        @media (min-width: 768px) {
          /* TABLET: 2x2 grid */
          .footer-grid {
            grid-template-columns: 1fr 1fr;
            gap: 48px 32px;
          }
          
          .footer-brand {
            grid-column: 1 / 2;
            text-align: left;
            margin-bottom: 0;
            order: 1;
          }

          .footer-logo {
            margin-left: 0; /* left-align on tablet/desktop */
          }
          
          .footer-desc {
            margin: 12px 0 0 0; /* Left align */
          }
          
          .footer-contacto {
            grid-column: 2 / 3;
            text-align: left;
            order: 2;
          }
          
          .footer-contact-list {
            align-items: flex-start;
          }
          
          .footer-socials {
            justify-content: flex-start;
          }
          
          .footer-servicios {
            grid-column: 1 / 2;
            text-align: left;
            order: 3;
          }
          
          .footer-empresa {
            grid-column: 2 / 3;
            text-align: left;
            order: 4;
          }
          
          .footer-copyright {
            font-size: 0.78rem;
          }
        }

        @media (min-width: 1024px) {
          /* DESKTOP: 4 cols: ~35%, ~20%, ~20%, ~25% */
          .footer-grid {
            grid-template-columns: 35% 20% 20% 25%;
            gap: 0; /* Controlamos el espacio con las fracciones de grid */
          }
          
          .footer-brand {
            grid-column: auto;
            order: 1;
          }
          .footer-servicios {
            grid-column: auto;
            order: 2;
          }
          .footer-empresa {
            grid-column: auto;
            order: 3;
          }
          .footer-contacto {
            grid-column: auto;
            order: 4;
          }
        }

        @media (min-width: 1536px) {
          .footer-logo {
            height: 36px;
          }
        }
      `}</style>
    </footer>
  );
};

export default FooterAmer;
