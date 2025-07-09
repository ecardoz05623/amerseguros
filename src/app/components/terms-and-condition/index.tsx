"use client";
import React from "react";

function TermsAndCondition() {
  return (
    <section className="bg-white text-secondary">
      <div className="container">
        <div className="flex flex-col py-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Términos y Condiciones</h2>

          <p>
            Este documento de Términos de Servicio (“<span className="font-semibold">Acuerdo</span>”) es celebrado entre AMER Seguros (“<span className="font-semibold">AMER</span>”) y la persona o entidad que accede o usa nuestros servicios (“<span className="font-semibold">Cliente</span>”). Este Acuerdo entra en vigencia a partir de su aceptación y rige el acceso y uso de los servicios proporcionados por AMER Seguros.
          </p>

          <p className="mt-5">
            Los términos en mayúscula se definen a continuación o donde se utilizan por primera vez en el documento.
          </p>

          <div className="my-6">
            <h4 className="text-2xl font-semibold mb-4">1. Definiciones</h4>
            <ul className="space-y-5 list-disc list-inside">
              <li>
                <strong>1.1 “Dispositivos Autorizados”:</strong> dispositivos móviles o de escritorio desde los cuales se accede a los Servicios.
              </li>
              <li>
                <strong>1.2 “Contenido”:</strong> materiales, documentos, gráficos u otros elementos creados o subidos por el Cliente.
              </li>
              <li>
                <strong>1.3 “Documentación”:</strong> materiales técnicos proporcionados por AMER para el uso adecuado del Servicio.
              </li>
              <li>
                <strong>1.4 “Servicios”:</strong> soluciones digitales ofrecidas por AMER para sus asegurados y clientes empresariales.
              </li>
              <li>
                <strong>1.5 “Formulario de Orden”:</strong> documento donde se especifican los servicios contratados por el Cliente.
              </li>
              <li>
                <strong>1.6 “Componentes”:</strong> módulos complementarios desarrollados por AMER o terceros. Su soporte puede variar.
              </li>
              <li>
                <strong>1.7 “Usuario”:</strong> persona autorizada por el Cliente a acceder a los Servicios de AMER.
              </li>
              <li>
                <strong>1.8 “Sitio Web”:</strong> plataforma digital gestionada por AMER desde la cual se accede a los Servicios.
              </li>
            </ul>
          </div>

          <div className="my-6">
            <h4 className="text-2xl font-semibold mb-4">2. Licencia y Uso</h4>
            <ul className="space-y-5 list-disc list-inside">
              <li>
                <strong>2.1 Servicios:</strong> AMER otorga al Cliente una licencia no exclusiva e intransferible para acceder a los Servicios durante el plazo contratado, únicamente para fines legítimos del negocio del Cliente.
              </li>
              <li>
                <strong>2.2 Acceso a los Servicios:</strong> AMER proporcionará los protocolos de acceso requeridos (contraseñas, enlaces, etc.) para que los Usuarios accedan a los Servicios. El Cliente es responsable de la gestión y seguridad de estos accesos.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TermsAndCondition;
