"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { useState } from "react";

interface ProjectHeroProps {
    title: string;
    subtitle?: string;
    image: string;
}

const ProjectHero = ({ title, subtitle, image }: ProjectHeroProps) => {
    const [inputValue, setInputValue] = useState("");

    const handleQuoteClick = () => {
        const message = `Hola, estoy interesado en cotizar el seguro: ${title}. ${inputValue ? `Mis datos son: ${inputValue}` : ""}`;
        const whatsappUrl = `https://wa.me/573182723559?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, "_blank");
    };

    return (
        <section className="w-full bg-slate-50 relative overflow-hidden py-20 lg:py-28">
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-50/50 rounded-l-[100px] -z-10 translate-x-1/3" />

            <div className="container mx-auto px-4 md:px-8">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                    {/* Content Side */}
                    <div className="flex flex-col gap-8 relative z-10">
                        <h1 className="text-5xl lg:text-7xl font-bold text-[#004080] leading-[1.1] tracking-tight">
                            {title}
                        </h1>

                        <p className="text-xl text-gray-500 leading-relaxed max-w-lg font-medium">
                            {subtitle || "La mejor protección para tu vehículo y tu familia. Cotiza ahora y viaja tranquilo."}
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 max-w-xl relative">
                            <input
                                type="text"
                                placeholder="Ingresa tu placa o email"
                                className="flex-1 px-6 py-4 rounded-xl border border-gray-200 bg-white text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#004080]/20 focus:border-[#004080] shadow-sm text-lg transition-all"
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                            />
                            <button
                                onClick={handleQuoteClick}
                                className="bg-[#004080] text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-[#003060] transition-colors shadow-lg shadow-blue-900/20 flex items-center justify-center gap-2 group whitespace-nowrap cursor-pointer z-10"
                            >
                                Cotizar Ahora
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </button>

                            {/* Doodle Arrow */}
                            <div className="absolute -bottom-24 left-1/2 w-32 h-32 hidden lg:block pointer-events-none opacity-60">
                                <svg
                                    viewBox="0 0 200 200"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-full h-full text-blue-400 rotate-12"
                                >
                                    <path
                                        d="M20 20 C 50 100, 120 120, 180 60"
                                        stroke="currentColor"
                                        strokeWidth="3"
                                        strokeLinecap="round"
                                        markerEnd="url(#arrowhead)"
                                        strokeDasharray="10 5"
                                    />
                                    <defs>
                                        <marker
                                            id="arrowhead"
                                            markerWidth="10"
                                            markerHeight="7"
                                            refX="9"
                                            refY="3.5"
                                            orient="auto"
                                        >
                                            <polygon points="0 0, 10 3.5, 0 7" fill="currentColor" />
                                        </marker>
                                    </defs>
                                </svg>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 text-sm font-semibold text-gray-400 mt-4">
                            <div className="flex -space-x-3">
                                <div className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white" />
                                <div className="w-8 h-8 rounded-full bg-gray-300 border-2 border-white" />
                                <div className="w-8 h-8 rounded-full bg-gray-400 border-2 border-white" />
                            </div>
                            <p>Más de 1.000 clientes satisfechos</p>
                        </div>
                    </div>

                    {/* Image Side */}
                    <div className="relative">
                        <div className="relative aspect-[4/3] lg:aspect-square w-full rounded-[3rem] overflow-hidden shadow-2xl shadow-blue-900/10">
                            <Image
                                src={image}
                                alt={title}
                                fill
                                className="object-cover hover:scale-105 transition-transform duration-700"
                                priority
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#004080]/20 to-transparent pointer-events-none" />
                        </div>

                        {/* Floating Badge */}
                        <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-xl shadow-blue-900/10 max-w-[200px] hidden md:block animate-bounce-slow">
                            <div className="flex items-center gap-3 mb-2">
                                <div className="w-3 h-3 rounded-full bg-green-500" />
                                <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Estado</span>
                            </div>
                            <p className="text-[#004080] font-bold text-lg leading-tight">Cobertura Activa 24/7</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProjectHero;
