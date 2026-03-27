"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { label: "Servicios", href: "#servicios" },
  { label: "Beneficios", href: "#beneficios" },
  { label: "Testimonios", href: "#testimonios" },
  { label: "FAQ", href: "#faq" },
  { label: "Contacto", href: "#contacto" },
];

const WHATSAPP_URL =
  "https://wa.me/573182723559?text=Hola%2C%20quiero%20cotizar%20un%20seguro";

const NavbarAmer = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    // Run once on mount
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Body scroll lock when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    // Cleanup on unmount
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const handleSmooth = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
        setMobileOpen(false);
      }
    }
  };

  return (
    <>
      <nav className={`navbar-amer ${scrolled ? "scrolled" : ""}`}>
        <div className="navbar-container">
          <div className="navbar-top-row">
            {/* Logo */}
            <Link href="/" onClick={() => setMobileOpen(false)}>
              <Image 
                src="/images/logo/WhiteLogo.png" 
                alt="AMER Seguros - Intermediario de seguros en Duitama Boyacá" 
                width={160} 
                height={40} 
                className="navbar-logo"
                priority
              />
            </Link>

            {/* Desktop Nav (Hidden on Mobile) */}
            <div className="desktop-nav">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleSmooth(e, link.href)}
                  className="desktop-link"
                >
                  {link.label}
                </a>
              ))}
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="desktop-cta"
              >
                <i className="bi bi-whatsapp" />
                Cotiza gratis
              </a>
            </div>

            {/* Hamburger Button */}
            <button
              className="hamburger-btn"
              onClick={() => setMobileOpen(true)}
              aria-label="Abrir menú"
            >
              <i className="bi bi-list" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-overlay ${mobileOpen ? "open" : ""}`}>
        {/* Close Button */}
        <button
          className="close-btn"
          onClick={() => setMobileOpen(false)}
          aria-label="Cerrar menú"
        >
          <i className="bi bi-x-lg" />
        </button>

        <div className="mobile-menu-content">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleSmooth(e, link.href)}
              className="mobile-link"
            >
              {link.label}
            </a>
          ))}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mobile-cta"
            onClick={() => setMobileOpen(false)}
          >
            <i className="bi bi-whatsapp" />
            Cotiza gratis
          </a>
        </div>
      </div>

      <style>{`
        /* ── ESTRATEGIA MOBILE-FIRST (Fluida) ── */

        /* Variables & Base Nav */
        .navbar-amer {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 1000;
          transition: all 0.3s ease;
          padding: 16px 0;
          background: transparent;
        }
        .navbar-amer.scrolled {
          padding: 10px 0;
          background: rgba(12,29,54,0.97);
          backdrop-filter: blur(12px);
          box-shadow: 0 4px 30px rgba(0,0,0,0.15);
        }

        .navbar-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 var(--container-padding);
          transition: max-width 0.3s ease;
        }

        .navbar-top-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .navbar-logo {
          height: 36px;
          width: auto;
          display: block;
          object-fit: contain;
        }

        .desktop-nav {
          display: none;
        }

        .hamburger-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          background: none;
          border: none;
          color: var(--white);
          font-size: 2rem;
          cursor: pointer;
          min-width: 44px;
          min-height: 44px;
          padding: 0;
        }

        .mobile-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100vh;
          background: var(--navy);
          z-index: 1001;
          display: flex;
          flex-direction: column;
          opacity: 0;
          pointer-events: none;
          transform: translateY(-10px) scale(0.98);
          transition: opacity 0.3s ease, transform 0.3s ease;
        }
        .mobile-overlay.open {
          opacity: 1;
          pointer-events: auto;
          transform: translateY(0) scale(1);
        }

        .close-btn {
          position: absolute;
          top: 16px;
          right: 24px;
          background: none;
          border: none;
          color: var(--white);
          font-size: 1.6rem;
          cursor: pointer;
          min-width: 44px;
          min-height: 44px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .mobile-menu-content {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: var(--space-gap-lg);
        }

        .mobile-link {
          color: var(--white);
          font-family: var(--font-body);
          font-size: var(--fs-h3);
          font-weight: 500;
          text-decoration: none;
          padding: 16px; 
          text-align: center;
          transition: color 0.2s;
        }
        .mobile-link:hover {
          color: var(--blue-light);
        }

        .mobile-cta {
          margin-top: 16px;
          width: 100%;
          background: var(--green);
          color: var(--white);
          border-radius: 8px;
          padding: 16px;
          font-family: var(--font-body);
          font-weight: 600;
          font-size: var(--fs-btn);
          text-decoration: none;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          transition: background 0.2s;
        }
        .mobile-cta:hover {
          background: var(--green-hover);
        }

        /* ── BREAKPOINTS (Solo Layout) ── */

        @media (max-width: 767px) {
          .navbar-logo {
            height: 30px;
          }
        }

        @media (min-width: 480px) {
          .mobile-menu-content {
            flex-direction: row;
            flex-wrap: wrap;
            align-content: center;
            justify-content: center;
            gap: 16px;
          }
          .mobile-link {
            width: 45%; 
            padding: 12px;
          }
          .mobile-cta {
            width: 100%;
            max-width: 400px;
            margin-top: 32px;
          }
        }

        @media (min-width: 768px) {
          .hamburger-btn {
            display: none;
          }
          .desktop-nav {
            display: flex;
            align-items: center;
            gap: 4px;
          }
          
          .desktop-link {
            color: rgba(255,255,255,0.8);
            font-family: var(--font-body);
            font-weight: 500;
            font-size: var(--fs-small);
            padding: 8px 12px;
            text-decoration: none;
            transition: color 0.2s;
          }
          .desktop-link:hover {
            color: var(--white);
          }
          
          .desktop-cta {
            background: var(--green);
            color: var(--white);
            border-radius: 8px;
            padding: 8px 16px;
            font-family: var(--font-body);
            font-weight: 600;
            font-size: var(--fs-btn-sm);
            text-decoration: none;
            display: inline-flex;
            align-items: center;
            gap: 6px;
            margin-left: 8px;
            transition: background 0.2s;
          }
          .desktop-cta:hover {
            background: var(--green-hover);
          }

          .mobile-overlay {
            display: none !important; 
          }
        }

        @media (min-width: 1024px) {
          .desktop-link {
            padding: 8px 18px;
          }
          .desktop-cta {
            padding: 10px 24px;
          }
        }

        @media (min-width: 1536px) {
          .navbar-amer {
            padding: 18px 0;
          }
          .navbar-container {
            max-width: 1400px;
          }
          .navbar-logo {
            height: 42px;
          }
          .desktop-link {
            font-size: 0.95rem;
            padding: 10px 22px;
          }
          .desktop-cta {
            padding: 12px 28px;
            font-size: 0.95rem;
          }
        }

        @media (min-width: 1920px) {
          .navbar-container {
            max-width: 1500px;
          }
        }
      `}</style>
    </>
  );
};

export default NavbarAmer;
