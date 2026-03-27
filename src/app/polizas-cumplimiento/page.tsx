import type { Metadata } from "next";
import ServicePage from "../components/service-page";
import LogosBar from "../components/home/logos-bar";
import FooterAmer from "../components/layout/footer-amer";

export const metadata: Metadata = {
  title: "Pólizas de Cumplimiento en Boyacá | Contratos Públicos y Privados — AMER Seguros",
  description:
    "Cotiza pólizas de cumplimiento para contratos estatales y privados en Boyacá. Seriedad de oferta, cumplimiento, anticipo y calidad. Expedición en 24-72h.",
  alternates: { canonical: "https://amerseguros.com/polizas-cumplimiento" },
  openGraph: {
    title: "Pólizas de Cumplimiento en Boyacá — AMER Seguros",
    description: "Expedición de pólizas de cumplimiento en 24-72h para contratos públicos y privados. Cotización gratuita.",
    type: "website",
    url: "https://amerseguros.com/polizas-cumplimiento",
  },
};

const schemaService = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Pólizas de Cumplimiento en Boyacá",
  description: "Gestión y expedición de pólizas de cumplimiento para contratos estatales y privados en Boyacá, Colombia.",
  provider: { "@type": "InsuranceAgency", name: "AMER Seguros", url: "https://amerseguros.com", telephone: "+573182723559" },
  areaServed: { "@type": "State", name: "Boyacá" },
  serviceType: "Póliza de Cumplimiento",
};

const schemaFaq = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "¿Qué es una póliza de cumplimiento?", acceptedAnswer: { "@type": "Answer", text: "Es un seguro que garantiza que un contratista cumplirá con las obligaciones pactadas en un contrato. Si incumple, la aseguradora indemniza al contratante por los perjuicios causados." } },
    { "@type": "Question", name: "¿Cuánto tarda la expedición de una póliza de cumplimiento?", acceptedAnswer: { "@type": "Answer", text: "Entre 24 y 72 horas hábiles una vez se cuente con toda la documentación del contrato y el estudio de la aseguradora." } },
    { "@type": "Question", name: "¿Qué documentos necesito para una póliza de cumplimiento en Boyacá?", acceptedAnswer: { "@type": "Answer", text: "Minuta o borrador del contrato, NIT o cédula del contratista, estados financieros, y el número de proceso si es contratación pública." } },
  ],
};

const schemaBreadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: "https://amerseguros.com" },
    { "@type": "ListItem", position: 2, name: "Pólizas de Cumplimiento", item: "https://amerseguros.com/polizas-cumplimiento" },
  ],
};

export default function PolizasCumplimientoPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaService) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFaq) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb) }} />
      <ServicePage
        active="cumplimiento"
        logosBar={<LogosBar />}
        footer={<FooterAmer />}
        whatsappMsg="Hola, necesito una póliza de cumplimiento"
        breadcrumb="Pólizas de Cumplimiento"
        badgeIcon="bi-file-earmark-check-fill"
        badgeBg="rgba(245,158,11,0.10)"
        badgeColor="#FBBF24"
        badgeText="Contratos estatales y privados"
        heroH1={<>Pólizas de cumplimiento en <span className="hl">Boyacá</span> para tus contratos</>}
        heroText="Gestionamos pólizas de seriedad de oferta, cumplimiento, anticipo, calidad y estabilidad de obra con las principales aseguradoras del país. Expedición en 24 a 72 horas."
        ctaPrimaryText="Solicitar póliza"
        ctaPhoneText="Llamar ahora"
        coverageSectionLabel="Amparos disponibles"
        coverageSectionTitle="Garantías que gestionamos para tus contratos"
        coverages={[
          { icon: "bi-hand-thumbs-up", title: "Seriedad de oferta", text: "Garantiza que mantendrás tu propuesta en procesos de licitación y contratación.", iconBg: "#FEF3C7", iconColor: "#D97706" },
          { icon: "bi-file-check", title: "Cumplimiento", text: "Respalda el cumplimiento de todas las obligaciones establecidas en el contrato." },
          { icon: "bi-cash-coin", title: "Anticipo", text: "Garantiza el buen manejo y correcta inversión del pago anticipado recibido.", iconBg: "#DCFCE7", iconColor: "#16A34A" },
          { icon: "bi-award", title: "Calidad y estabilidad", text: "Cubre la calidad del servicio y la estabilidad de la obra entregada.", iconBg: "#EDE9FE", iconColor: "#7C3AED" },
        ]}
        contentHtml={`
          <h2>¿Qué es una póliza de cumplimiento y cuándo la necesitas?</h2>
          <p>Una póliza de cumplimiento es un seguro que garantiza ante la entidad contratante — ya sea pública o privada — que el contratista cumplirá con todas las obligaciones pactadas en el contrato. Si el contratista incumple, la aseguradora responde económicamente ante el beneficiario de la póliza.</p>
          <p>En Colombia, las pólizas de cumplimiento son obligatorias para la mayoría de contratos con entidades estatales. Pero también son cada vez más solicitadas en el sector privado, especialmente en contratos de construcción, prestación de servicios, suministro y consultoría.</p>
          <h3>Tipos de amparos que gestionamos</h3>
          <p>Cotizamos todos los amparos exigidos por la normativa colombiana: seriedad de la oferta, cumplimiento del contrato, buen manejo y correcta inversión del anticipo, pago de salarios y prestaciones sociales, estabilidad y calidad de la obra, y calidad del servicio.</p>
          <h3>¿Cuánto cuesta una póliza de cumplimiento en Boyacá?</h3>
          <p>El costo depende del valor total del contrato, los amparos requeridos, las vigencias y el perfil financiero del contratista. En AMER te cotizamos con varias aseguradoras como Seguros del Estado, Sura, Bolívar y Liberty para encontrar la mejor tarifa.</p>
          <h3>Documentos necesarios</h3>
          <p>Para cotizar una póliza de cumplimiento necesitas la minuta o borrador del contrato (o pliego de condiciones), NIT o cédula del contratista, estados financieros recientes, y el número de proceso si es contratación pública. Nos envías la documentación por WhatsApp o correo y nosotros hacemos toda la gestión con la aseguradora.</p>
        `}
        faqSectionTitle="Dudas sobre pólizas de cumplimiento"
        faqs={[
          { question: "¿Qué es una póliza de cumplimiento?", answer: "Es un seguro que garantiza que un contratista cumplirá con las obligaciones pactadas en un contrato. Si incumple, la aseguradora indemniza al contratante." },
          { question: "¿Cuánto tarda la expedición?", answer: "Entre 24 y 72 horas hábiles una vez se cuente con toda la documentación del contrato y el estudio de la aseguradora sea aprobado." },
          { question: "¿Qué documentos necesito?", answer: "Minuta o borrador del contrato, NIT o cédula del contratista, estados financieros, y número de proceso si es contratación estatal." },
          { question: "¿Sirve para contratos privados?", answer: "Sí. Las pólizas de cumplimiento pueden expedirse para contratos tanto públicos como privados. En el sector privado las condiciones pueden ser más flexibles." },
          { question: "¿Puedo cotizar si mi empresa es nueva?", answer: "Depende de la aseguradora. Algunas solicitan estados financieros con cierta antigüedad. Te ayudamos a encontrar la opción que mejor se adapte a tu perfil empresarial." },
        ]}
        ctaBannerH2="¿Necesitas una póliza de cumplimiento?"
        ctaBannerP="Envíanos la información de tu contrato y te cotizamos en horas. Sin costo, sin compromiso."
        ctaBannerBtn="Solicitar por WhatsApp"
        trustBadges={[
          { icon: "bi-clock", label: "Expedición 24-72h" },
          { icon: "bi-shield-check", label: "Aseguradoras autorizadas" },
          { icon: "bi-cash-stack", label: "Cotización gratis" },
        ]}
      />
    </>
  );
}
