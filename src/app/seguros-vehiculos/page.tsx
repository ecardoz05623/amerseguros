import type { Metadata } from "next";
import ServicePage from "../components/service-page";

export const metadata: Metadata = {
  title: "Seguro Vehicular en Duitama, Boyacá | Todo Riesgo y SOAT — AMER Seguros",
  description:
    "Cotiza seguro todo riesgo para carro y moto en Duitama. Comparamos tarifas de 8+ aseguradoras para que pagues lo justo. Asesoría gratis por WhatsApp.",
  alternates: { canonical: "https://amerseguros.com/seguros-vehiculos" },
  openGraph: {
    title: "Seguro Vehicular en Duitama | Cotiza y Compara — AMER Seguros",
    description:
      "Comparamos seguros de carro y moto con 8+ aseguradoras en Boyacá. Todo riesgo, SOAT y responsabilidad civil al mejor precio.",
    type: "website",
    url: "https://amerseguros.com/seguros-vehiculos",
  },
};

const schemaService = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Seguro Vehicular en Duitama",
  description:
    "Cotización y comparación de seguros para vehículos (todo riesgo, SOAT, responsabilidad civil) con múltiples aseguradoras en Boyacá.",
  provider: {
    "@type": "InsuranceAgency",
    name: "AMER Seguros",
    url: "https://amerseguros.com",
    telephone: "+573182723559",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Cl. 10 #37-82, Sevilla",
      addressLocality: "Duitama",
      addressRegion: "Boyacá",
      addressCountry: "CO",
    },
  },
  areaServed: { "@type": "State", name: "Boyacá" },
  serviceType: "Seguro Vehicular",
};

const schemaFaq = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Cuánto cuesta un seguro todo riesgo en Duitama?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "El precio varía según el modelo, año y uso del vehículo. En AMER Seguros cotizamos con 8+ aseguradoras para encontrar la mejor tarifa. Desde aproximadamente $1.200.000 al año para vehículos de gama media.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué diferencia hay entre el SOAT y el seguro todo riesgo?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "El SOAT es obligatorio y cubre lesiones a personas en accidentes de tránsito. El seguro todo riesgo es voluntario y cubre daños al vehículo propio, hurto, daños a terceros, asistencia en carretera y más.",
      },
    },
    {
      "@type": "Question",
      name: "¿Puedo cotizar seguro vehicular por WhatsApp en Boyacá?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí. En AMER Seguros puedes cotizar tu seguro vehicular por WhatsApp al +57 318 272 3559. Te enviamos las opciones comparadas el mismo día, sin compromiso.",
      },
    },
  ],
};

const schemaBreadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: "https://amerseguros.com" },
    { "@type": "ListItem", position: 2, name: "Seguros Vehiculares", item: "https://amerseguros.com/seguros-vehiculos" },
  ],
};

export default function SegurosVehiculosPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaService) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFaq) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb) }} />
      <ServicePage
        active="vehiculos"
        whatsappMsg="Hola, quiero cotizar un seguro vehicular"
        breadcrumb="Seguros Vehiculares"
        badgeIcon="bi-car-front-fill"
        badgeBg="rgba(34,197,94,0.12)"
        badgeColor="#22C55E"
        badgeText="Seguros para carro y moto"
        heroH1={<>Seguro vehicular en <span className="hl">Duitama</span> al mejor precio</>}
        heroText="Comparamos tarifas de todo riesgo, SOAT y responsabilidad civil con más de 8 aseguradoras en Boyacá. Tú eliges, nosotros negociamos. Cotización gratuita en minutos."
        ctaPrimaryText="Cotizar seguro vehicular"
        ctaPhoneText="Llamar ahora"
        heroStats={[
          { icon: "bi-shield-check", label: "Coberturas", value: "Todo Riesgo" },
          { icon: "bi-speedometer2", label: "Cotización", value: "5 minutos" },
          { icon: "bi-graph-down-arrow", label: "Ahorro hasta", value: "40%" },
          { icon: "bi-building", label: "Aseguradoras", value: "8+" },
        ]}
        coverageSectionLabel="Coberturas disponibles"
        coverageSectionTitle="¿Qué cubre un seguro vehicular en Boyacá?"
        coverages={[
          { icon: "bi-car-front", title: "Pérdida total", text: "Indemnización completa si tu vehículo sufre daños superiores al 75% de su valor o robo total." },
          { icon: "bi-tools", title: "Pérdida parcial", text: "Cubre reparaciones por daños menores: choques, rayones, golpes y vandalismo.", iconBg: "#DCFCE7", iconColor: "#16A34A" },
          { icon: "bi-people", title: "Responsabilidad civil", text: "Cubre daños a terceros: personas, otros vehículos o propiedad ajena en un accidente.", iconBg: "#FEF3C7", iconColor: "#D97706" },
          { icon: "bi-truck", title: "Asistencia vial", text: "Grúa, conductor elegido, cerrajería, paso de corriente y cambio de llanta 24/7.", iconBg: "#EDE9FE", iconColor: "#7C3AED" },
        ]}
        contentHtml={`
          <h2>¿Por qué cotizar tu seguro vehicular con AMER Seguros en Duitama?</h2>
          <p>Cuando buscas un seguro para tu carro o moto en Boyacá, la mayoría de las personas van directamente a una sola aseguradora y aceptan la primera cotización que les dan. El problema es que las tarifas pueden variar hasta un 40% entre una aseguradora y otra para el mismo vehículo y las mismas coberturas.</p>
          <p>En AMER Seguros trabajamos como intermediarios autorizados, lo que significa que cotizamos tu seguro vehicular con múltiples aseguradoras como Sura, Bolívar, Allianz, Mapfre, AXA Colpatria, Liberty, Positiva y Seguros del Estado, y te presentamos las opciones comparadas para que tú decidas cuál se ajusta mejor a tu presupuesto y necesidades.</p>
          <p>No cobramos nada por la cotización ni por la asesoría. Nuestro servicio es completamente gratuito para ti.</p>
          <h3>Tipos de seguro vehicular que cotizamos en Boyacá</h3>
          <p>Ofrecemos cotización para todos los tipos de seguros de vehículos disponibles en el mercado colombiano. El seguro todo riesgo es la opción más completa y cubre pérdida total y parcial por accidente, robo, daños a terceros, asistencia en carretera, conductor elegido y asesoría jurídica. También cotizamos planes de pérdida total con responsabilidad civil y pólizas de solo responsabilidad civil extracontractual.</p>
          <h3>¿Cuánto cuesta un seguro todo riesgo en Duitama?</h3>
          <p>El precio depende del modelo del vehículo, su año, la ciudad de circulación, la edad del conductor y el historial de siniestros. Para un carro de gama media en Duitama, los precios pueden arrancar desde $1.200.000 al año. Nosotros te ayudamos a entender cada opción para que no pagues de más ni te quedes con menos cobertura de la que necesitas.</p>
        `}
        faqSectionTitle="Dudas sobre seguros vehiculares en Boyacá"
        faqs={[
          { question: "¿Cuánto cuesta un seguro todo riesgo en Duitama?", answer: "El precio varía según el modelo, año y uso del vehículo. En AMER Seguros cotizamos con 8+ aseguradoras para encontrar la mejor tarifa. Desde aproximadamente $1.200.000 al año para vehículos de gama media." },
          { question: "¿Qué diferencia hay entre el SOAT y el seguro todo riesgo?", answer: "El SOAT es obligatorio y cubre solo lesiones a personas en accidentes de tránsito. El seguro todo riesgo es voluntario y cubre daños al vehículo propio, hurto, daños a terceros, asistencia en carretera, conductor elegido y más." },
          { question: "¿Puedo cotizar seguro vehicular por WhatsApp?", answer: "Sí. Escríbenos al +57 318 272 3559 con la marca, modelo, año y placa de tu vehículo. Te enviamos las opciones comparadas el mismo día, sin costo y sin compromiso." },
          { question: "¿Qué hago si tengo un accidente con mi carro asegurado?", answer: "Contáctanos y te orientamos paso a paso: documentación necesaria, reporte a la aseguradora, seguimiento de la reclamación y acompañamiento hasta la resolución." },
          { question: "¿Aseguran motos también?", answer: "Sí. Cotizamos seguros para motos de cualquier cilindraje con las mismas aseguradoras. Las coberturas incluyen hurto, daños y responsabilidad civil." },
        ]}
        ctaBannerH2="¿Listo para proteger tu vehículo?"
        ctaBannerP="Cotiza gratis con las mejores aseguradoras de Colombia. Te respondemos en menos de 2 horas."
        ctaBannerBtn="Cotizar por WhatsApp"
        trustBadges={[
          { icon: "bi-shield-check", label: "Sin compromiso" },
          { icon: "bi-clock", label: "Respuesta en <2h" },
          { icon: "bi-cash-stack", label: "100% gratis" },
        ]}
      />
    </>
  );
}
