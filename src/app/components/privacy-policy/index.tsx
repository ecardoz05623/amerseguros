"use client";

import Link from "next/link";

function PrivacyPolicy() {
  return (
    <section className="bg-white text-secondary">
      <div className="container">
        <div className="flex flex-col gap-6 py-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Política de Privacidad</h2>

          <p>
            Esta política de privacidad explica cómo recopilamos, usamos y protegemos la información personal de nuestros clientes y usuarios. Describe nuestras prácticas respecto al uso de nuestros sitios web, plataformas interactivas, servicios, herramientas y actividades relacionadas.
          </p>

          <p>
            Al registrarse en nuestros servicios y aceptar los Términos y Condiciones, usted acepta la recolección, uso y divulgación de su información tal como se describe en esta política.
          </p>

          <p>
            Nuestros servicios pueden contener enlaces a sitios web externos. Las prácticas de privacidad de dichos sitios estarán regidas por sus propias políticas de privacidad.
          </p>

          <p>
            Esta política puede ser actualizada periódicamente. En caso de cambios, se le notificará a través de la fecha actualizada en la parte superior de esta página o mediante avisos adicionales. Le recomendamos revisar esta política frecuentemente para mantenerse informado.
          </p>

          <div className="my-6">
            <h4 className="text-2xl font-semibold mb-3">Recolección de Información Personal</h4>
            <p className="mb-4">
              Durante el uso de nuestros servicios, podemos solicitar información personal identificable como: nombre, correo electrónico, número de teléfono, empresa, cargo, o cualquier otro dato que usted decida proporcionarnos.
            </p>

            <p>
              No recopilamos información financiera directamente (como números de tarjeta de crédito). Los pagos se procesan mediante proveedores externos.
            </p>
          </div>

          <div className="my-6">
            <h4 className="text-2xl font-semibold mb-3">Información Proporcionada por el Usuario</h4>
            <p className="mb-4">
              Al interactuar con nuestras plataformas (formularios de contacto, soporte al cliente, creación de cuentas), usted nos proporciona información que será tratada con confidencialidad y únicamente para los fines establecidos.
            </p>

            <p>
              Como se indicó anteriormente, no recolectamos datos bancarios de forma directa. Todos los pagos son gestionados mediante terceros.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PrivacyPolicy;
