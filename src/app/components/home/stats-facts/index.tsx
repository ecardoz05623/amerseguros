"use client";
import {
  ShieldCheck,
  Handshake,
  Zap,
  FileText,
  UserCheck,
  DollarSign,
  Sliders,
  ClipboardCheck,
  HeartHandshake,
} from "lucide-react";

export default function StatsFacts() {
  return (
    <section className="relative bg-white text-secondary py-20">
      <div className="container max-w-6xl px-6 mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-14">
          ¿Por qué elegirnos?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Líderes en asesoría confiable y personalizada */}
          <div className="flex flex-col items-center text-center">
            <ShieldCheck size={48} className="text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-1">
              Líderes en asesoría confiable y personalizada
            </h3>
            <p className="text-secondary/70 text-sm">
              Te conectamos con las mejores aseguradoras y te acompañamos desde
              la cotización hasta la gestión de tu póliza.
            </p>
          </div>

          {/* Multimarca con respaldo */}
          <div className="flex flex-col items-center text-center">
            <Handshake size={48} className="text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-1">
              Multimarca con respaldo
            </h3>
            <p className="text-secondary/70 text-sm">
              Trabajamos con aseguradoras reconocidas para que puedas comparar y
              elegir con confianza. Más opciones, más beneficios.
            </p>
          </div>

          {/* Acompañamiento real de principio a fin */}
          <div className="flex flex-col items-center text-center">
            <Zap size={48} className="text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-1">
              Acompañamiento real de principio a fin
            </h3>
            <p className="text-secondary/70 text-sm">
              Desde el primer contacto hasta el manejo de un siniestro, nuestros
              asesores te guían paso a paso. Nunca estás solo.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Cotizaciones rápidas y claras */}
          <div className="flex flex-col items-center text-center">
            <FileText size={48} className="text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-1">
              Cotizaciones rápidas y claras
            </h3>
            <p className="text-secondary/70 text-sm">
              Sin letra pequeña ni demoras. Te entregamos información clara para
              que tomes decisiones seguras y sin presiones.
            </p>
          </div>

          {/* Asesoría 100% personalizada */}
          <div className="flex flex-col items-center text-center">
            <UserCheck size={48} className="text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-1">
              Asesoría 100% personalizada
            </h3>
            <p className="text-secondary/70 text-sm">
              No te damos un seguro genérico. Un asesor analiza tu perfil y te
              ofrece lo que realmente necesitas. Nada de ventas forzadas.
            </p>
          </div>

          {/* Precios competitivos */}
          <div className="flex flex-col items-center text-center">
            <DollarSign size={48} className="text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-1">Precios competitivos</h3>
            <p className="text-secondary/70 text-sm">
              Te ayudamos a encontrar la mejor relación costo–beneficio,
              ajustada a tu presupuesto y tus prioridades.
            </p>
          </div>

          {/* Coberturas a tu medida */}
          <div className="flex flex-col items-center text-center">
            <Sliders size={48} className="text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-1">
              Coberturas a tu medida
            </h3>
            <p className="text-secondary/70 text-sm">
              Planes básicos o premium, individuales o familiares, personales o
              empresariales. Tú eliges. Nosotros te guiamos.
            </p>
          </div>

          {/* Trámites sin complicaciones */}
          <div className="flex flex-col items-center text-center">
            <ClipboardCheck size={48} className="text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-1">
              Trámites sin complicaciones
            </h3>
            <p className="text-secondary/70 text-sm">
              Olvídate del papeleo. Nos encargamos de la gestión de tu póliza y
              te mantenemos informado en todo momento.
            </p>
          </div>

          {/* Atención cercana y humana */}
          <div className="flex flex-col items-center text-center">
            <HeartHandshake size={48} className="text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-1">
              Atención cercana y humana
            </h3>
            <p className="text-secondary/70 text-sm">
              Desde el primer contacto te atenderá una persona real que se toma el tiempo de escucharte y acompañarte con empatía en cada paso del proceso.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
