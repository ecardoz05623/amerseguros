
import ProjectList from "@/app/components/projects";
import Herobanner from "@/app/components/shared/hero-banner";
import { getAllProjects } from "@/lib/markdown";
import { Metadata } from "next";
export const metadata: Metadata = {
    title: "AMER SEGUROS | Servicios",
};

export default function Page() {
    const projects = getAllProjects();
    return (
        <main>
            <Herobanner
                bannerimage="/images/projects/banner/projects-banner.png"
                heading="Servicios"
                desc="En <span>AMER Seguros</span> brindamos soluciones ágiles y personalizadas que van más allá de la protección tradicional. Acompañamos a nuestros clientes en cada etapa, ofreciendo asesoría experta y procesos digitales para facilitar la gestión de sus seguros con confianza y eficiencia."/>
            <ProjectList />    
        </main>
    );
};
