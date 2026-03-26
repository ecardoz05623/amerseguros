"use client";

import { useState } from "react";
import { Mail, MapPin, Phone, Upload, ArrowRight } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    details: "",
    service: "Otro"
  });

  const services = ["Vehículos", "Vida", "Empresarial", "Otro"];

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, email, phone, details, service } = formData;

    if (!name || !email || !details) {
      alert("Por favor, completa los campos requeridos (Nombre, Correo y Detalles).");
      return;
    }

    const message = `Hola, estoy interesado en recibir más información sobre seguros. Te comparto mis datos:\n\n*Servicio de interés:* ${service}\n*Nombre:* ${name}\n*Correo:* ${email}\n*Teléfono:* ${phone}\n\n*Detalles del proyecto:*\n${details}`;

    const whatsappNumber = "573182723559";
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    // Abrir WhatsApp en una nueva pestaña
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section className="relative py-20 lg:py-32 bg-[#e5e5e5] dark:bg-darkblack overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">

          {/* Left Side: Contact Info */}
          <div className="w-full lg:w-5/12 flex flex-col gap-10">
            <div>
              <h2 className="text-5xl md:text-6xl font-bold text-secondary dark:text-white mb-4 tracking-tight">
                CONTÁCTANOS
              </h2>
              <p className="text-2xl md:text-3xl text-gray-500 font-light">
                ¿Tienes un proyecto en mente?
              </p>
            </div>

            <div className="flex flex-col gap-8 mt-4">
              <div className="flex items-start gap-4">
                <div className="bg-white p-3 rounded-full shadow-md text-primary">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-secondary dark:text-white">Nuestra oficina</h4>
                  <p className="text-gray-600 dark:text-gray-300">Cl. 10 #37-82, Sevilla, Duitama, Boyacá</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-white p-3 rounded-full shadow-md text-primary">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-secondary dark:text-white">Correo electrónico</h4>
                  <p className="text-gray-600 dark:text-gray-300">contacto@amerseguros.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-white p-3 rounded-full shadow-md text-primary">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-secondary dark:text-white">Teléfono</h4>
                  <p className="text-gray-600 dark:text-gray-300">+57 322 332 2322</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Form Card */}
          <div className="w-full lg:w-5/12 bg-[#003f6d] text-white p-6 md:p-8 rounded-[30px] shadow-2xl relative">
            <h3 className="text-xl font-bold mb-6">¿En qué podemos ayudarte?</h3>

            {/* Service Chips */}
            <div className="flex flex-wrap gap-3 mb-10">
              {services.map((service) => (
                <button
                  key={service}
                  onClick={() => setFormData({ ...formData, service })}
                  className={`px-6 py-2 rounded-full border border-white/20 text-sm font-medium transition-all duration-300 ${formData.service === service
                    ? "bg-primary border-primary text-white"
                    : "bg-transparent hover:bg-white/10"
                    }`}
                  type="button"
                >
                  {service}
                </button>
              ))}
            </div>

            <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
              <div>
                <label className="text-xs uppercase tracking-wider text-white/50 mb-1 block">Nombre</label>
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent border-b border-white/30 py-2 text-lg focus:border-white focus:outline-none transition-colors placeholder-transparent"
                  placeholder="Nombre"
                />
              </div>

              <div>
                <label className="text-xs uppercase tracking-wider text-white/50 mb-1 block">Correo</label>
                <input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent border-b border-white/30 py-2 text-lg focus:border-white focus:outline-none transition-colors placeholder-transparent"
                  placeholder="Correo"
                />
              </div>

              <div>
                <label className="text-xs uppercase tracking-wider text-white/50 mb-1 block">Teléfono</label>
                <input
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-white/30 py-2 text-lg focus:border-white focus:outline-none transition-colors placeholder-transparent"
                  placeholder="Teléfono"
                />
              </div>

              <div>
                <label className="text-xs uppercase tracking-wider text-white/50 mb-1 block">Detalles del proyecto</label>
                <textarea
                  name="details"
                  value={formData.details}
                  onChange={handleChange}
                  required
                  rows={2}
                  className="w-full bg-transparent border-b border-white/30 py-2 text-sm focus:border-white focus:outline-none transition-colors resize-none placeholder-transparent"
                  placeholder="Detalles"
                />
              </div>

              <div className="mt-4 flex justify-end">
                <button
                  type="submit"
                  className="bg-white text-secondary font-bold py-3 px-6 rounded-full flex items-center gap-3 hover:bg-gray-100 transition-colors shadow-lg text-sm"
                >
                  ENVIAR MENSAJE
                  <ArrowRight size={18} />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
