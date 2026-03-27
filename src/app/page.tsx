import { Metadata, Viewport } from "next";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

// New AMER components
import NavbarAmer from "./components/layout/navbar-amer";
import HeroAmer from "./components/home/hero-amer";
import LogosBar from "./components/home/logos-bar";
import ServicesSection from "./components/home/services-section";
import BenefitsSection from "./components/home/benefits-section";
import CountersSection from "./components/home/counters-section";
import TestimonialsSection from "./components/home/testimonials-section";
import FaqSection from "./components/home/faq-section";
import ContactSection from "./components/home/contact-section";
import FooterAmer from "./components/layout/footer-amer";
import WhatsAppFloat from "./components/layout/whatsapp-float-amer";

// ── Full SEO metadata (App Router) ──────────────────────────────────────────
export const metadata: Metadata = {
  title: "Seguros en Duitama, Boyacá | Cotiza Gratis — AMER Seguros",
  description:
    "Cotiza y compara seguros con 8+ aseguradoras en Duitama. ARL, vehículos, cumplimiento y vida. Asesoría gratis y sin compromiso. ¡Cotiza hoy!",
  keywords:
    "seguros Duitama, intermediario seguros Boyacá, cotizar seguros Duitama, asesor seguros Boyacá, póliza cumplimiento Boyacá, seguro vehicular Duitama, ARL Duitama, seguro de vida Boyacá, agencia seguros Duitama, comparar seguros Colombia",
  alternates: { canonical: "https://amerseguros.com/" },
  robots: "index, follow",
  openGraph: {
    title: "Seguros en Duitama | Cotiza y Compara con 8+ Aseguradoras — AMER Seguros",
    description:
      "Intermediario de seguros en Duitama, Boyacá. Cotiza ARL, vehículos, cumplimiento y vida. Asesoría personalizada y gratuita.",
    type: "website",
    url: "https://amerseguros.com/",
    locale: "es_CO",
    siteName: "AMER Seguros",
    images: [
      {
        url: "https://amerseguros.com/images/og-image.jpg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Seguros en Duitama | Cotiza Gratis — AMER Seguros",
    description:
      "Cotiza y compara seguros con 8+ aseguradoras en Duitama, Boyacá. Asesoría gratis.",
    images: ["https://amerseguros.com/images/og-image.jpg"],
  },
  authors: [{ name: "AMER Seguros" }],
  icons: {
    icon: "/favicon.ico",
  },
  other: {
    "geo.region": "CO-BOY",
    "geo.placename": "Duitama, Boyacá",
    "geo.position": "5.8268;-73.0333",
    "ICBM": "5.8268, -73.0333",
  },
};

// ── JSON-LD Schema (InsuranceAgency) ────────────────────────────────────────
const schemaJsonLd = {
  "@context": "https://schema.org",
  "@type": "InsuranceAgency",
  name: "AMER Seguros",
  description:
    "Intermediario de seguros multimarca en Duitama, Boyacá. Cotización y asesoría gratuita.",
  url: "https://amerseguros.com",
  telephone: "+573223322322",
  email: "contacto@amerseguros.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Cl. 10 #37-82, Sevilla",
    addressLocality: "Duitama",
    addressRegion: "Boyacá",
    addressCountry: "CO",
  },
  areaServed: {
    "@type": "State",
    name: "Boyacá",
  },
  serviceType: [
    "ARL",
    "Pólizas de Cumplimiento",
    "Seguros de Vehículos",
    "Seguros de Vida",
  ],
};
export default function Home() {
  return (
    <>
      {/* JSON-LD structured data — rendered server-side */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaJsonLd) }}
      />

      {/* ── NEW AMER LANDING PAGE ── */}
      <NavbarAmer />
      <HeroAmer />
      <LogosBar />
      <ServicesSection />
      <BenefitsSection />
      <CountersSection />
      <TestimonialsSection />
      <FaqSection />
      <ContactSection />
      <FooterAmer />
      <WhatsAppFloat /> 

    </>
  );
}

