"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

/* ── Types ── */
export interface CoverageCard {
  icon: string;
  title: string;
  text: string;
  iconBg?: string;
  iconColor?: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface HeroStat {
  icon: string;
  label: string;
  value: string;
}

export interface TrustBadge {
  icon: string;
  label: string;
}

export interface ServicePageProps {
  /** Navbar active link: "vehiculos" | "vida" | "cumplimiento" | "arl" */
  active: string;
  whatsappMsg: string;
  /* Hero */
  breadcrumb: string;
  badgeIcon: string;
  badgeBg: string;
  badgeColor: string;
  badgeText: string;
  heroH1: React.ReactNode;
  heroText: string;
  ctaPrimaryText: string;
  ctaPhoneText?: string;
  heroStats?: HeroStat[];
  /* Coverages */
  coverageSectionLabel: string;
  coverageSectionTitle: string;
  coverages: CoverageCard[];
  /* Content */
  contentHtml: string;
  /* FAQ */
  faqSectionTitle: string;
  faqs: FaqItem[];
  /* CTA Banner */
  ctaBannerH2: string;
  ctaBannerP: string;
  ctaBannerBtn: string;
  trustBadges: TrustBadge[];
  /** Server component slots — passed from page.tsx to avoid hydration mismatch */
  logosBar: React.ReactNode;
  footer: React.ReactNode;
}

const NAV_LINKS = [
  { href: "/", label: "Inicio", key: "inicio" },
  { href: "/seguros-vehiculos", label: "Vehículos", key: "vehiculos" },
  { href: "/seguros-vida", label: "Vida", key: "vida" },
  { href: "/polizas-cumplimiento", label: "Cumplimiento", key: "cumplimiento" },
  { href: "/servicios-arl", label: "ARL", key: "arl" },
];




export default function ServicePage(props: ServicePageProps) {
  const {
    active, whatsappMsg, breadcrumb, badgeIcon, badgeBg, badgeColor, badgeText,
    heroH1, heroText, ctaPrimaryText, ctaPhoneText, heroStats,
    coverageSectionLabel, coverageSectionTitle, coverages,
    contentHtml, faqSectionTitle, faqs,
    ctaBannerH2, ctaBannerP, ctaBannerBtn, trustBadges,
    logosBar, footer,
  } = props;

  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [mobileOpen, setMobileOpen] = useState(false);

  const waHref = `https://wa.me/573182723559?text=${encodeURIComponent(whatsappMsg)}`;

  return (
    <>
      {/* ── NAVBAR ── */}
      <nav className="sp-navbar">
        <div className="sp-nav-inner">
          {/* Logo */}
          <Link href="/" className="sp-brand">
            <Image
              src="/images/logo/WhiteLogo.png"
              alt="AMER Seguros"
              width={140}
              height={36}
              className="sp-logo-img"
              priority
            />
          </Link>

          {/* Desktop links */}
          <div className="sp-nav-links">
            {NAV_LINKS.map((l) => (
              <Link
                key={l.key}
                href={l.href}
                className={`sp-link ${active === l.key ? "sp-link-active" : ""}`}
              >
                {l.label}
              </Link>
            ))}
            <a href={waHref} className="sp-link sp-cta" target="_blank" rel="noopener noreferrer">
              <i className="bi bi-whatsapp" /> Cotizar
            </a>
          </div>

          {/* Hamburger */}
          <button className="sp-hamburger" onClick={() => setMobileOpen((p) => !p)} aria-label="Menu">
            <i className={`bi ${mobileOpen ? "bi-x-lg" : "bi-list"}`} />
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="sp-mobile-menu">
            {NAV_LINKS.map((l) => (
              <Link
                key={l.key}
                href={l.href}
                className={`sp-mobile-link ${active === l.key ? "sp-link-active" : ""}`}
                onClick={() => setMobileOpen(false)}
              >
                {l.label}
              </Link>
            ))}
            <a href={waHref} className="sp-mobile-link sp-mobile-cta" target="_blank" rel="noopener noreferrer" onClick={() => setMobileOpen(false)}>
              <i className="bi bi-whatsapp" /> Cotizar gratis
            </a>
          </div>
        )}
      </nav>

      {/* ── PAGE HERO ── */}
      <section className="sp-hero">
        <div className="sp-container">
          {/* Breadcrumb */}
          <div className="sp-breadcrumb">
            <Link href="/">Inicio</Link>
            <span>›</span>
            <span className="sp-bc-current">{breadcrumb}</span>
          </div>

          <div className="sp-hero-inner">
            <div className="sp-hero-left">
              <div className="sp-badge" style={{ background: badgeBg, border: `1px solid ${badgeColor}33`, color: badgeColor }}>
                <i className={`bi ${badgeIcon}`} /> {badgeText}
              </div>
              <h1 className="sp-h1">{heroH1}</h1>
              <p className="sp-hero-text">{heroText}</p>
              <div className="sp-cta-group">
                <a href={waHref} className="sp-btn-primary" target="_blank" rel="noopener noreferrer">
                  <i className="bi bi-whatsapp" /> {ctaPrimaryText}
                </a>
                {ctaPhoneText && (
                  <a href="tel:+573182723559" className="sp-btn-secondary">
                    <i className="bi bi-telephone" /> {ctaPhoneText}
                  </a>
                )}
              </div>
            </div>

            {heroStats && (
              <div className="sp-hero-right">
                <div className="sp-mini-cards">
                  {heroStats.map((s) => (
                    <div key={s.label} className="sp-mini-card">
                      <div className="sp-mc-icon"><i className={`bi ${s.icon}`} /></div>
                      <div className="sp-mc-label">{s.label}</div>
                      <div className="sp-mc-value">{s.value}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ── LOGOS BAR ── */}
      {logosBar}

      {/* ── COVERAGES ── */}
      <section className="sp-section sp-bg-gray">
        <div className="sp-container">
          <div className="sp-section-head">
            <div className="sp-section-label">{coverageSectionLabel}</div>
            <h2 className="sp-section-title">{coverageSectionTitle}</h2>
          </div>
          <div className="sp-cards-grid">
            {coverages.map((c) => (
              <div key={c.title} className="sp-coverage-card">
                <div
                  className="sp-coverage-icon"
                  style={{
                    background: c.iconBg ?? "var(--blue-pale)",
                    color: c.iconColor ?? "var(--blue)",
                  }}
                >
                  <i className={`bi ${c.icon}`} />
                </div>
                <h3>{c.title}</h3>
                <p>{c.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SEO CONTENT ── */}
      <section className="sp-section">
        <div className="sp-container">
          <div className="sp-content-col">
            <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="sp-section">
        <div className="sp-container">
          <div className="sp-section-head">
            <div className="sp-section-label">Preguntas frecuentes</div>
            <h2 className="sp-section-title">{faqSectionTitle}</h2>
          </div>
          <div className="sp-faq-wrap">
            {faqs.map((f, i) => (
              <div key={i} className={`sp-faq-item ${openFaq === i ? "sp-faq-open" : ""}`}>
                <button className="sp-faq-q" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                  {f.question}
                  <i className="bi bi-plus-lg sp-faq-icon" />
                </button>
                <div className="sp-faq-a-wrap">
                  <div className="sp-faq-a"><p>{f.answer}</p></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="sp-section sp-bg-gray">
        <div className="sp-container">
          <div className="sp-cta-banner">
            <div className="sp-cta-banner-content">
              <h2>{ctaBannerH2}</h2>
              <p>{ctaBannerP}</p>
            </div>
            <div className="sp-cta-banner-actions">
              <a href={waHref} className="sp-btn-primary" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-whatsapp" /> {ctaBannerBtn}
              </a>
              <div className="sp-trust-row">
                {trustBadges.map((t) => (
                  <div key={t.label} className="sp-trust-item">
                    <i className={`bi ${t.icon}`} /> {t.label}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      {footer}

      {/* ── WHATSAPP FLOAT ── */}
      <a href={waHref} className="sp-wa-float" target="_blank" rel="noopener noreferrer" aria-label="Contactar por WhatsApp">
        <i className="bi bi-whatsapp" />
      </a>

      {/* ── STYLES ── */}
      <style>{`
        /* ── RESET & TOKENS ── */
        .sp-navbar *, .sp-hero *, .sp-section *, .sp-footer *, .sp-wa-float { box-sizing: border-box; }

        /* ── NAVBAR ── */
        .sp-navbar {
          background: var(--navy);
          position: sticky;
          top: 0;
          z-index: 200;
          box-shadow: 0 2px 20px rgba(0,0,0,0.18);
        }
        .sp-nav-inner {
          max-width: 1320px;
          margin: 0 auto;
          padding: 14px var(--container-padding);
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .sp-brand { display: flex; align-items: center; text-decoration: none; }
        .sp-logo-img { height: 36px; width: auto; }
        .sp-nav-links { display: none; align-items: center; gap: 4px; }
        @media (min-width: 768px) { .sp-nav-links { display: flex; } }
        .sp-link {
          color: rgba(255,255,255,0.75);
          font-weight: 500;
          font-size: 0.88rem;
          text-decoration: none;
          padding: 8px 14px;
          border-radius: 8px;
          transition: color 0.2s;
          font-family: var(--font-body);
        }
        .sp-link:hover { color: var(--white); }
        .sp-link-active { color: var(--white) !important; font-weight: 600; }
        .sp-cta {
          background: var(--green);
          color: var(--white) !important;
          border-radius: 8px;
          padding: 10px 20px !important;
          font-weight: 600;
          margin-left: 8px;
          transition: background 0.2s;
        }
        .sp-cta:hover { background: var(--green-hover); }
        .sp-hamburger {
          display: flex;
          background: none;
          border: none;
          color: white;
          font-size: 1.6rem;
          cursor: pointer;
          padding: 4px;
        }
        @media (min-width: 768px) { .sp-hamburger { display: none; } }
        .sp-mobile-menu {
          background: var(--navy-light);
          padding: 16px var(--container-padding) 20px;
          display: flex;
          flex-direction: column;
          gap: 4px;
          border-top: 1px solid rgba(255,255,255,0.08);
        }
        .sp-mobile-link {
          color: rgba(255,255,255,0.8);
          text-decoration: none;
          font-weight: 500;
          font-size: 0.95rem;
          padding: 10px 12px;
          border-radius: 8px;
          font-family: var(--font-body);
          transition: background 0.2s;
        }
        .sp-mobile-link:hover { background: rgba(255,255,255,0.06); color: white; }
        .sp-mobile-cta {
          background: var(--green);
          color: var(--white) !important;
          margin-top: 8px;
          font-weight: 600;
          text-align: center;
        }
        .sp-mobile-cta:hover { background: var(--green-hover); }

        /* ── HERO ── */
        .sp-hero {
          background: linear-gradient(135deg, var(--navy) 0%, var(--navy-light) 50%, #1a3a5c 100%);
          padding: 72px 0 56px;
          position: relative;
          overflow: hidden;
        }
        .sp-hero::before {
          content: '';
          position: absolute;
          top: -40%;
          right: -15%;
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, rgba(46,107,181,0.12) 0%, transparent 70%);
          border-radius: 50%;
          pointer-events: none;
        }
        .sp-container {
          max-width: 1320px;
          margin: 0 auto;
          padding: 0 var(--container-padding);
          position: relative;
          z-index: 1;
        }
        .sp-breadcrumb {
          display: flex;
          align-items: center;
          gap: 6px;
          margin-bottom: 20px;
          font-size: 0.85rem;
        }
        .sp-breadcrumb a { color: rgba(255,255,255,0.5); text-decoration: none; transition: color 0.2s; }
        .sp-breadcrumb a:hover { color: var(--blue-light); }
        .sp-breadcrumb span { color: rgba(255,255,255,0.3); }
        .sp-bc-current { color: rgba(255,255,255,0.8); }
        .sp-hero-inner {
          display: flex;
          flex-direction: column;
          gap: 40px;
        }
        @media (min-width: 1024px) {
          .sp-hero-inner {
            flex-direction: row;
            align-items: center;
            gap: 64px;
          }
          .sp-hero-left { flex: 0 0 58%; }
          .sp-hero-right { flex: 0 0 42%; }
        }
        .sp-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          border-radius: 50px;
          padding: 6px 18px;
          font-size: 0.8rem;
          font-weight: 600;
          margin-bottom: 20px;
          font-family: var(--font-body);
        }
        .sp-h1 {
          font-family: var(--font-display);
          font-size: clamp(1.9rem, 4vw, 3rem);
          font-weight: 700;
          color: var(--white);
          line-height: 1.2;
          margin-bottom: 18px;
          letter-spacing: -0.5px;
        }
        .sp-h1 .hl { color: var(--blue-light); }
        .sp-hero-text {
          font-size: 1.05rem;
          color: rgba(255,255,255,0.65);
          max-width: 580px;
          margin-bottom: 32px;
          line-height: 1.7;
          font-family: var(--font-body);
        }
        .sp-cta-group { display: flex; gap: 16px; flex-wrap: wrap; }
        .sp-btn-primary {
          background: var(--green);
          color: var(--white);
          border: none;
          padding: 15px 28px;
          border-radius: 10px;
          font-weight: 600;
          font-size: 0.98rem;
          display: inline-flex;
          align-items: center;
          gap: 10px;
          text-decoration: none;
          transition: all 0.3s;
          box-shadow: 0 4px 20px rgba(34,197,94,0.3);
          font-family: var(--font-body);
        }
        .sp-btn-primary:hover { background: var(--green-hover); color: var(--white); transform: translateY(-2px); box-shadow: 0 8px 30px rgba(34,197,94,0.4); }
        .sp-btn-secondary {
          background: transparent;
          color: var(--white);
          border: 1.5px solid rgba(255,255,255,0.25);
          padding: 15px 28px;
          border-radius: 10px;
          font-weight: 500;
          font-size: 0.98rem;
          display: inline-flex;
          align-items: center;
          gap: 10px;
          text-decoration: none;
          transition: all 0.3s;
          font-family: var(--font-body);
        }
        .sp-btn-secondary:hover { border-color: rgba(255,255,255,0.5); color: var(--white); background: rgba(255,255,255,0.05); }

        /* Hero mini cards */
        .sp-mini-cards {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }
        .sp-mini-card {
          background: rgba(255,255,255,0.06);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 12px;
          padding: 20px;
          color: var(--white);
          text-align: center;
          transition: transform 0.3s;
        }
        .sp-mini-card:hover { transform: translateY(-3px); }
        .sp-mc-icon { font-size: 1.8rem; margin-bottom: 8px; color: var(--blue-light); }
        .sp-mc-label { font-size: 0.75rem; color: rgba(255,255,255,0.5); text-transform: uppercase; letter-spacing: 1px; font-weight: 500; }
        .sp-mc-value { font-family: var(--font-display); font-size: 1.3rem; font-weight: 700; margin-top: 2px; }

        /* ── SECTIONS ── */
        .sp-section { padding: var(--space-section, 80px) 0; }
        .sp-bg-gray { background: var(--gray-50); }
        .sp-text-center { text-align: center; }
        .sp-section-head { text-align: center; margin-bottom: 40px; }
        .sp-section-label {
          text-transform: uppercase;
          font-size: 0.75rem;
          letter-spacing: 3px;
          color: var(--blue);
          font-weight: 600;
          margin-bottom: 10px;
          font-family: var(--font-body);
        }
        .sp-section-title {
          font-family: var(--font-display);
          font-size: clamp(1.6rem, 3vw, 2.2rem);
          font-weight: 700;
          color: var(--navy);
          line-height: 1.25;
          margin-bottom: 0;
        }

        /* Coverage grid */
        .sp-cards-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }
        @media (min-width: 768px) { .sp-cards-grid { grid-template-columns: repeat(4, 1fr); } }
        .sp-coverage-card {
          background: var(--white);
          border: 1px solid var(--gray-200);
          border-radius: 20px;
          padding: 28px 20px;
          text-align: center;
          transition: all 0.3s;
        }
        .sp-coverage-card:hover { border-color: transparent; box-shadow: 0 8px 40px rgba(0,0,0,0.12); transform: translateY(-4px); }
        .sp-coverage-icon {
          width: 64px;
          height: 64px;
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.6rem;
          margin: 0 auto 16px;
        }
        .sp-coverage-card h3 { font-family: var(--font-display); font-size: 1rem; font-weight: 600; color: var(--navy); margin-bottom: 8px; }
        .sp-coverage-card p { color: var(--gray-500); font-size: 0.85rem; line-height: 1.6; margin: 0; }

        /* Content */
        .sp-content-col { max-width: 760px; margin: 0 auto; }
        .sp-content-col p { color: var(--gray-600); font-size: 0.95rem; line-height: 1.8; margin-bottom: 16px; font-family: var(--font-body); }
        .sp-content-col h2 { font-family: var(--font-display); font-size: 1.6rem; font-weight: 700; color: var(--navy); margin-bottom: 16px; margin-top: 40px; }
        .sp-content-col h3 { font-family: var(--font-display); font-size: 1.2rem; font-weight: 600; color: var(--navy); margin-bottom: 10px; margin-top: 28px; }

        /* Brands */
        .sp-brands { display: flex; flex-wrap: wrap; gap: 16px; justify-content: center; align-items: center; }
        .sp-brand-item {
          font-family: var(--font-display);
          font-weight: 700;
          font-size: 1.05rem;
          color: var(--gray-400);
          opacity: 0.55;
          padding: 10px 18px;
          border: 1px solid var(--gray-200);
          border-radius: 12px;
          transition: all 0.3s;
          cursor: default;
        }
        .sp-brand-item:hover { opacity: 1; color: var(--navy); border-color: var(--blue-pale); background: var(--blue-pale); }

        /* FAQ */
        .sp-faq-wrap { max-width: 740px; margin: 0 auto; }
        .sp-faq-item {
          border: 1px solid var(--gray-200);
          border-radius: 12px;
          margin-bottom: 10px;
          overflow: hidden;
          transition: border-color 0.3s;
        }
        .sp-faq-item.sp-faq-open { border-color: var(--blue-light); }
        .sp-faq-q {
          width: 100%;
          padding: 18px 22px;
          font-weight: 600;
          color: var(--navy);
          cursor: pointer;
          display: flex;
          justify-content: space-between;
          align-items: center;
          background: var(--white);
          border: none;
          text-align: left;
          font-size: 0.92rem;
          font-family: var(--font-body);
          transition: background 0.2s;
        }
        .sp-faq-q:hover { background: var(--gray-50); }
        .sp-faq-icon { color: var(--blue); flex-shrink: 0; margin-left: 16px; transition: transform 0.3s; font-size: 1.1rem; }
        .sp-faq-item.sp-faq-open .sp-faq-icon { transform: rotate(45deg); }
        .sp-faq-a-wrap { max-height: 0; overflow: hidden; transition: max-height 0.35s ease; }
        .sp-faq-item.sp-faq-open .sp-faq-a-wrap { max-height: 300px; }
        .sp-faq-a { padding: 0 22px 16px; }
        .sp-faq-a p { color: var(--gray-500); font-size: 0.9rem; line-height: 1.7; margin: 0; font-family: var(--font-body); }

        /* CTA Banner */
        .sp-cta-banner {
          background: linear-gradient(135deg, var(--navy) 0%, #0F2440 100%);
          border-radius: 20px;
          padding: 48px 40px;
          position: relative;
          overflow: hidden;
          max-width: 900px;
          margin: 0 auto;
        }
        .sp-cta-banner::before {
          content: '';
          position: absolute;
          top: -100px; right: -100px;
          width: 400px; height: 400px;
          background: radial-gradient(circle, rgba(46,107,181,0.15) 0%, transparent 70%);
          border-radius: 50%;
          pointer-events: none;
        }
        .sp-cta-banner-content { position: relative; }
        .sp-cta-banner-actions { position: relative; }
        .sp-cta-banner h2 { font-family: var(--font-display); color: var(--white); font-size: 1.8rem; font-weight: 700; margin-bottom: 12px; }
        .sp-cta-banner p { color: rgba(255,255,255,0.6); font-size: 1rem; margin-bottom: 0; max-width: 460px; }
        .sp-cta-banner-actions .sp-btn-primary { margin-top: 28px; display: inline-flex; }
        .sp-trust-row { display: flex; gap: 20px; margin-top: 20px; flex-wrap: wrap; }
        .sp-trust-item { display: flex; align-items: center; gap: 8px; font-size: 0.82rem; color: rgba(255,255,255,0.5); font-family: var(--font-body); }
        .sp-trust-item .bi { color: var(--green); }

        @media (min-width: 1024px) {
          .sp-cta-banner {
            padding: 52px 56px;
            max-width: 1000px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 48px;
          }
          .sp-cta-banner-content { flex: 1; }
          .sp-cta-banner-actions { flex-shrink: 0; text-align: right; }
          .sp-cta-banner-actions .sp-btn-primary { margin-top: 0; }
          .sp-cta-banner p { margin-bottom: 0; }
          .sp-trust-row { justify-content: flex-end; }
        }
        @media (min-width: 1536px) {
          .sp-cta-banner { max-width: 1100px; padding: 56px 64px; }
        }


        /* WhatsApp float */
        .sp-wa-float {
          position: fixed;
          bottom: 28px;
          right: 28px;
          width: 60px;
          height: 60px;
          background: #25D366;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 1.8rem;
          box-shadow: 0 4px 20px rgba(37,211,102,0.4);
          z-index: 999;
          text-decoration: none;
          transition: all 0.3s;
        }
        .sp-wa-float:hover { transform: scale(1.1); box-shadow: 0 6px 28px rgba(37,211,102,0.5); color: white; }

        /* Responsive */
        @media (max-width: 767px) {
          .sp-section { padding: 56px 0; }
          .sp-cta-banner { padding: 32px 20px; }
          .sp-hero { padding: 60px 0 44px; }
          .sp-mini-cards { display: none; }
        }
        @media (min-width: 1536px) {
          .sp-nav-inner { max-width: 1400px; }
          .sp-container { max-width: 1400px; }
        }
        @media (min-width: 1920px) {
          .sp-nav-inner { max-width: 1500px; }
          .sp-container { max-width: 1500px; }
        }
      `}</style>
    </>
  );
}
