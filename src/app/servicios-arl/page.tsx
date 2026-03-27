import type { Metadata } from "next";
import ServicePage from "../components/service-page";

export const metadata: Metadata = {
  title: "Servicios ARL en Duitama, Boyacá | Afiliación para Empresas — AMER Seguros",
  description:
    "Afiliación y gestión de ARL para empresas en Duitama y Boyacá. Cumple la normativa laboral y protege a tus colaboradores. Asesoría gratuita.",
  alternates: { canonical: "https://amerseguros.com/servicios-arl" },
  openGraph: {
    title: "Servicios ARL en Duitama | Afiliación para Empresas — AMER Seguros",
    description: "Gestión de ARL para empresas y contratistas en Boyacá. Cumple la normativa y protege a tu equipo.",
    type: "website",
    url: "https://amerseguros.com/servicios-arl",
  },
};

const schemaService = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Servicios ARL en Duitama",
  description: "Afiliación, gestión y asesoría en Administradoras de Riesgos Laborales para empresas en Boyacá.",
  provider: { "@type": "InsuranceAgency", name: "AMER Seguros", url: "https://amerseguros.com", telephone: "+573182723559" },
  areaServed: { "@type": "State", name: "Boyacá" },
  serviceType: "Servicios ARL",
};

const schemaFaq = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "¿Qué es la ARL y por qué es obligatoria?", acceptedAnswer: { "@type": "Answer", text: "La ARL (Administradora de Riesgos Laborales) es una entidad que cubre accidentes de trabajo y enfermedades laborales. En Colombia es obligatorio afiliar a todos los empleados al Sistema de Riesgos Laborales." } },
    { "@type": "Question", name: "¿Cuánto cuesta la ARL para una empresa en Duitama?", acceptedAnswer: { "@type": "Answer", text: "El costo depende del nivel de riesgo de la actividad económica (I a V) y se calcula como un porcentaje del salario de cada trabajador, desde 0.522% hasta 6.960%." } },
    { "@type": "Question", name: "¿AMER Seguros gestiona la afiliación ARL?", acceptedAnswer: { "@type": "Answer", text: "Sí. Como intermediarios autorizados, gestionamos la afiliación de tu empresa y tus empleados a la ARL, te asesoramos sobre la clasificación de riesgo correcta y te acompañamos en caso de accidentes laborales." } },
  ],
};

const schemaBreadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: "https://amerseguros.com" },
    { "@type": "ListItem", position: 2, name: "Servicios ARL", item: "https://amerseguros.com/servicios-arl" },
  ],
};

export default function ServiciosArlPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaService) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFaq) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb) }} />
      <ServicePage
        active="arl"
        whatsappMsg="Hola, necesito asesoría sobre ARL para mi empresa"
        breadcrumb="Servicios ARL"
        badgeIcon="bi-people-fill"
        badgeBg="rgba(46,107,181,0.12)"
        badgeColor="#4A90D9"
        badgeText="Para empresas y contratistas"
        heroH1={<>Servicios ARL en <span className="hl">Duitama</span> para tu empresa</>}
        heroText="Te ayudamos con la afiliación, gestión y asesoría en riesgos laborales. Cumple la normativa colombiana y protege a tus colaboradores con el acompañamiento de un intermediario autorizado."
        ctaPrimaryText="Asesoría ARL gratis"
        ctaPhoneText="Llamar ahora"
        coverageSectionLabel="Nuestros servicios"
        coverageSectionTitle="¿Qué hacemos en gestión de ARL?"
        coverages={[
          { icon: "bi-person-plus", title: "Afiliación", text: "Gestionamos la afiliación de tu empresa y tus empleados a la ARL de forma rápida y correcta." },
          { icon: "bi-clipboard-check", title: "Clasificación de riesgo", text: "Te asesoramos sobre la clase de riesgo correcta según tu actividad económica (niveles I a V).", iconBg: "#DCFCE7", iconColor: "#16A34A" },
          { icon: "bi-exclamation-triangle", title: "Gestión de accidentes", text: "Te acompañamos en el reporte y seguimiento de accidentes laborales ante la ARL.", iconBg: "#FEF3C7", iconColor: "#D97706" },
          { icon: "bi-shield-check", title: "Cumplimiento normativo", text: "Verificamos que tu empresa cumpla con todas las obligaciones del Sistema de Riesgos Laborales.", iconBg: "#EDE9FE", iconColor: "#7C3AED" },
        ]}
        contentHtml={`
          <h2>¿Por qué necesitas un intermediario para la ARL en Boyacá?</h2>
          <p>En Colombia, toda empresa que tenga empleados con contrato laboral está obligada a afiliarlos a una Administradora de Riesgos Laborales. Esto aplica también para contratistas independientes que trabajan bajo ciertos tipos de contratos. El incumplimiento puede generar multas, sanciones y responsabilidad directa del empleador en caso de accidentes.</p>
          <p>En AMER Seguros te simplificamos todo el proceso. Como intermediarios autorizados, gestionamos la afiliación, te orientamos sobre la clasificación de riesgo correcta para tu actividad económica, y te acompañamos si ocurre un accidente laboral.</p>
          <h3>¿Cuánto cuesta la ARL para una empresa en Duitama?</h3>
          <p>La cotización de ARL se calcula como un porcentaje del salario de cada trabajador, según el nivel de riesgo de la actividad económica. Va desde 0.522% del salario para riesgo I (actividades de oficina) hasta 6.960% para riesgo V (construcción, minería). Este costo lo asume el empleador en su totalidad.</p>
          <h3>¿Qué cubre la ARL?</h3>
          <p>La ARL cubre accidentes de trabajo, enfermedades laborales, incapacidades temporales, indemnizaciones por incapacidad permanente parcial, pensiones de invalidez por causa laboral, y gastos funerarios. También incluye programas de prevención y capacitación para las empresas afiliadas.</p>
          <h3>Contratistas independientes</h3>
          <p>Si trabajas como contratista independiente o tienes contratos de prestación de servicios, la afiliación a ARL también puede ser obligatoria dependiendo del tipo de actividad y el nivel de riesgo. Te asesoramos sobre si aplica en tu caso y quién debe asumir el costo.</p>
        `}
        faqSectionTitle="Dudas sobre ARL en Boyacá"
        faqs={[
          { question: "¿Qué es la ARL y por qué es obligatoria?", answer: "La ARL cubre accidentes de trabajo y enfermedades laborales. En Colombia es obligatorio afiliar a todos los empleados al Sistema de Riesgos Laborales. El incumplimiento genera multas y responsabilidad directa del empleador." },
          { question: "¿Cuánto cuesta la ARL para mi empresa?", answer: "Depende del nivel de riesgo: desde 0.522% del salario (riesgo I, oficina) hasta 6.960% (riesgo V, construcción). El costo lo asume completamente el empleador." },
          { question: "¿Cómo sé qué nivel de riesgo tiene mi empresa?", answer: "La clasificación se basa en la actividad económica principal de tu empresa según el Decreto 1607 de 2002. Te asesoramos para determinar el nivel correcto y evitar sobrecostos o sanciones." },
          { question: "¿Qué hago si un empleado tiene un accidente laboral?", answer: "Reporta el accidente a la ARL dentro de los 2 días hábiles siguientes. Nosotros te acompañamos en todo el proceso: reporte, seguimiento médico y gestión de incapacidades." },
          { question: "¿Los contratistas independientes necesitan ARL?", answer: "En muchos casos sí, especialmente si la actividad involucra riesgo nivel IV o V. El contratante puede ser responsable de la afiliación según el tipo de contrato." },
        ]}
        ctaBannerH2="Protege a tu equipo de trabajo"
        ctaBannerP="Te asesoramos gratis sobre ARL para tu empresa. Gestión completa, sin complicaciones."
        ctaBannerBtn="Asesoría por WhatsApp"
        trustBadges={[
          { icon: "bi-shield-check", label: "Intermediario autorizado" },
          { icon: "bi-clock", label: "Respuesta en <2h" },
          { icon: "bi-cash-stack", label: "Asesoría gratis" },
        ]}
      />
    </>
  );
}
