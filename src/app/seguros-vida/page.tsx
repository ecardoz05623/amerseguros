import type { Metadata } from "next";
import ServicePage from "../components/service-page";
import LogosBar from "../components/home/logos-bar";
import FooterAmer from "../components/layout/footer-amer";

export const metadata: Metadata = {
  title: "Seguros de Vida en Duitama, Boyacá | Protege a Tu Familia — AMER Seguros",
  description:
    "Cotiza seguros de vida, accidentes personales y enfermedades graves en Duitama. Comparamos opciones de 8+ aseguradoras. Asesoría gratis por WhatsApp.",
  alternates: { canonical: "https://amerseguros.com/seguros-vida" },
  openGraph: {
    title: "Seguros de Vida en Duitama | Protege a Tu Familia — AMER Seguros",
    description: "Comparamos seguros de vida y accidentes personales con 8+ aseguradoras en Boyacá.",
    type: "website",
    url: "https://amerseguros.com/seguros-vida",
  },
};

const schemaService = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Seguros de Vida en Duitama",
  description: "Cotización y comparación de seguros de vida, accidentes personales y enfermedades graves en Boyacá.",
  provider: { "@type": "InsuranceAgency", name: "AMER Seguros", url: "https://amerseguros.com", telephone: "+573182723559" },
  areaServed: { "@type": "State", name: "Boyacá" },
  serviceType: "Seguro de Vida",
};

const schemaFaq = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "¿Cuánto cuesta un seguro de vida en Duitama?", acceptedAnswer: { "@type": "Answer", text: "Desde $30.000 mensuales para personas jóvenes y sanas. El precio varía por edad, salud y cobertura." } },
    { "@type": "Question", name: "¿Qué cubre un seguro de vida en Colombia?", acceptedAnswer: { "@type": "Answer", text: "Fallecimiento, incapacidad total y permanente, enfermedades graves, gastos funerarios y en algunos planes renta educativa." } },
    { "@type": "Question", name: "¿A partir de qué edad puedo tomar un seguro de vida?", acceptedAnswer: { "@type": "Answer", text: "Desde los 18 hasta los 65-70 años. Entre más joven, más económica la prima." } },
  ],
};

const schemaBreadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: "https://amerseguros.com" },
    { "@type": "ListItem", position: 2, name: "Seguros de Vida", item: "https://amerseguros.com/seguros-vida" },
  ],
};

export default function SegurosVidaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaService) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFaq) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb) }} />
      <ServicePage
        active="vida"
        logosBar={<LogosBar />}
        footer={<FooterAmer />}
        whatsappMsg="Hola, quiero cotizar un seguro de vida"
        breadcrumb="Seguros de Vida"
        badgeIcon="bi-heart-pulse-fill"
        badgeBg="rgba(239,68,68,0.10)"
        badgeColor="#F87171"
        badgeText="Protección para ti y tu familia"
        heroH1={<>Seguros de vida en <span className="hl">Duitama</span> para quienes más quieres</>}
        heroText="Protege el futuro de tu familia con un seguro de vida que realmente se ajuste a tus necesidades. Comparamos planes de las mejores aseguradoras del país."
        ctaPrimaryText="Cotizar seguro de vida"
        ctaPhoneText="Llamar ahora"
        coverageSectionLabel="Tipos de protección"
        coverageSectionTitle="¿Qué cubren los seguros de vida y personas?"
        coverages={[
          { icon: "bi-heart-pulse", title: "Fallecimiento", text: "Indemnización a tus beneficiarios en caso de muerte por cualquier causa, natural o accidental.", iconBg: "#FEE2E2", iconColor: "#DC2626" },
          { icon: "bi-bandaid", title: "Incapacidad total", text: "Soporte económico si sufres una incapacidad permanente que te impida trabajar." },
          { icon: "bi-hospital", title: "Enfermedades graves", text: "Pago anticipado si te diagnostican cáncer, infarto, ACV u otras enfermedades cubiertas.", iconBg: "#DCFCE7", iconColor: "#16A34A" },
          { icon: "bi-mortarboard", title: "Renta educativa", text: "Algunos planes incluyen auxilio para la educación de tus hijos si llegas a faltar.", iconBg: "#FEF3C7", iconColor: "#D97706" },
        ]}
        contentHtml={`
          <h2>¿Por qué contratar un seguro de vida en Boyacá?</h2>
          <p>Un seguro de vida no es un lujo, es una decisión responsable. En Colombia, muchas familias quedan en situación vulnerable cuando el principal proveedor fallece o queda incapacitado. Un seguro de vida garantiza que tus seres queridos mantengan su estabilidad económica incluso en los momentos más difíciles.</p>
          <p>En AMER Seguros te ayudamos a encontrar el plan que se ajuste a tu realidad. Te presentamos opciones de múltiples aseguradoras como Sura, Bolívar, Allianz y Mapfre para que compares coberturas, exclusiones y precios antes de decidir.</p>
          <h3>¿Para quién es un seguro de vida?</h3>
          <p>Si tienes personas que dependen económicamente de ti — hijos, pareja, padres —, un seguro de vida es fundamental. También es importante para emprendedores y dueños de negocio que quieren proteger su patrimonio familiar, y para personas con créditos hipotecarios o deudas importantes.</p>
          <h3>¿Cuánto cuesta un seguro de vida en Duitama?</h3>
          <p>Los precios varían según la edad, estado de salud, hábitos y el monto asegurado. Un seguro de vida básico puede arrancar desde $30.000 mensuales para una persona joven y sana. Entre más joven lo tomes, más económico será.</p>
          <h3>Seguros de accidentes personales</h3>
          <p>Los seguros de accidentes personales cubren lesiones, incapacidad o muerte causada por accidentes. Son ideales para personas con trabajos de riesgo, deportistas, o para complementar tu seguro de vida principal.</p>
        `}
        faqSectionTitle="Dudas sobre seguros de vida en Boyacá"
        faqs={[
          { question: "¿Cuánto cuesta un seguro de vida en Duitama?", answer: "Desde $30.000 mensuales para una persona joven y sana. El precio depende de la edad, estado de salud y cobertura elegida." },
          { question: "¿Qué cubre un seguro de vida en Colombia?", answer: "Según el plan: fallecimiento, incapacidad permanente, enfermedades graves (cáncer, infarto, ACV), gastos funerarios y renta educativa." },
          { question: "¿Me hacen exámenes médicos?", answer: "Depende de la aseguradora y el monto. Para coberturas menores generalmente no. Para montos altos o mayores de 45 años puede requerirse un chequeo básico." },
          { question: "¿Puedo cambiar los beneficiarios?", answer: "Sí, en cualquier momento durante la vigencia de la póliza. Te ayudamos con el trámite sin costo." },
        ]}
        ctaBannerH2="Protege a quienes más quieres"
        ctaBannerP="Cotiza un seguro de vida gratis. Te asesoramos sin compromiso para encontrar el plan ideal."
        ctaBannerBtn="Cotizar por WhatsApp"
        trustBadges={[
          { icon: "bi-shield-check", label: "Sin compromiso" },
          { icon: "bi-clock", label: "Respuesta en <2h" },
          { icon: "bi-cash-stack", label: "Desde $30.000/mes" },
        ]}
      />
    </>
  );
}
