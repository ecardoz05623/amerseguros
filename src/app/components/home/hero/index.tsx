"use client";

import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

function HeroSection() {
    const banners = [
        {
            src: "/images/home/banner/Servicios de ARL.png",
            link: "/projects/serviciosarl",
            title: "Servicios ARL"
        },
        {
            src: "/images/home/banner/Pólizas de cumplimiento.png",
            link: "/projects/polizascumplimiento",
            title: "Cumplimiento"
        },
        {
            src: "/images/home/banner/Pólizas de vehículos.png",
            link: "/projects/polizavehiculos",
            title: "Vehículos"
        },
        {
            src: "/images/home/banner/Seguros de personas.png",
            link: "/projects/segurospersonas",
            title: "Personas"
        }
    ];

    return (
        <section className="relative flex flex-col justify-end text-black bg-white pb-10 pt-28">
            {/* Content */}
            <div className="relative z-10 w-full mb-0 pb-0">
                <div className="w-full h-[50vh] md:h-[60vh] relative overflow-hidden group">
                    <Swiper
                        modules={[Autoplay, Pagination]}
                        spaceBetween={0}
                        slidesPerView={1}
                        autoplay={{ delay: 5000, disableOnInteraction: false }}
                        loop={true}
                        pagination={{ clickable: true }}
                        className="h-full w-full"
                    >
                        {banners.map((item, index) => (
                            <SwiperSlide key={index} className="relative w-full h-full">
                                <Image
                                    src={item.src}
                                    alt={`Hero Banner ${index + 1}`}
                                    fill
                                    className="object-cover"
                                    priority={index === 0}
                                    unoptimized
                                />
                                <div className="absolute inset-0 flex items-start justify-start pointer-events-none z-10 pt-10 pl-10 md:pt-16 md:pl-16">
                                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white/50 uppercase tracking-widest select-none">
                                        {item.title}
                                    </h2>
                                </div>
                                <div className="absolute bottom-10 left-10 z-20">
                                    <Link href={item.link}>
                                        <button className="bg-primary hover:bg-secondary text-white font-bold py-3 px-8 rounded-full transition-colors duration-300 shadow-lg">
                                            Ver más
                                        </button>
                                    </Link>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
}

export default HeroSection;
