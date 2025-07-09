"use client";

import Image from "next/image";
import { useState } from "react";

type ContactProps = {
  contactdataNumber?: string;
};

const Contact = ({ contactdataNumber }: ContactProps) => {
  const [submitted, setSubmitted] = useState(false);
  const [loader, setLoader] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const reset = () => setFormData({ name: "", email: "", message: "" });

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoader(true);

    fetch("https://formsubmit.co/ajax/ejecutivoamerseguros@gmail.com", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(formData)
    })
      .then((res) => res.json())
      .then((data) => {
        setSubmitted(data.success);
        setLoader(false);
        reset();
      })
      .catch((err) => console.error(err.message));
  };

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section className="py-20 md:py-40 bg-white dark:bg-darkblack">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12 px-6">
        {/* Imagen */}
        <div className="w-full">
          <Image
            src="/images/contact/banner/contact-banner.png"
            alt="Contacto AMER Seguros"
            width={600}
            height={400}
            className="w-full h-auto rounded-xl shadow-md object-cover"
          />
        </div>

        {/* Formulario */}
        <div>
          {contactdataNumber && (
            <span className="text-primary text-sm font-semibold uppercase tracking-widest mb-2 block">
              {contactdataNumber}
            </span>
          )}
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center md:text-left">Contáctenos</h2>
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <input
              required
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Nombre"
              className="border-b border-secondary dark:border-white/20 py-3.5 focus:outline-none focus:border-primary"
            />
            <input
              required
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Correo"
              className="border-b border-secondary dark:border-white/20 py-3.5 focus:outline-none focus:border-primary"
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              placeholder="¿Qué tipo de protección estás buscando?"
              className="border-b border-secondary dark:border-white/20 py-3.5 focus:outline-none focus:border-primary"
            />
            {submitted && (
              <p className="text-green-600 font-medium">¡Mensaje enviado correctamente!</p>
            )}
            <button
              type="submit"
              className="bg-primary text-white font-bold py-3 rounded-full hover:bg-secondary transition"
              disabled={loader}
            >
              {loader ? "Enviando..." : "Enviar"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
