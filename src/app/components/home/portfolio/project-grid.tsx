"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

type Project = {
    title: string;
    slug: string;
    ScopeOfWork: string[];
    industry?: string;
    coverImage: string;
};

const ProjectGrid = () => {
    const [projects, setProjects] = useState<Project[]>([]);

    useEffect(() => {
        fetch("/api/projects")
            .then((res) => res.json())
            .then((data) => setProjects(data));
    }, []);

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {projects.map((value, index) => {
                return (
                    <div key={index} className="flex flex-col gap-4 bg-white dark:bg-twilliteblack p-5 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                        <div className="w-16 h-16 relative">
                            {/* Placeholder generic icon logic if typical images are banners, but using coverImage for now */}
                            <Image
                                src={value.coverImage}
                                alt={value.title}
                                width={64}
                                height={64}
                                className="w-full h-full object-contain rounded-md"
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <h3 className="text-xl font-bold">{value.title}</h3>
                            <p className="text-secondary/70 dark:text-white/70 text-sm">
                                {value.ScopeOfWork && value.ScopeOfWork[0] ? value.ScopeOfWork[0] : "Protección completa"}
                            </p>
                            <Link href={`/projects/${value.slug}`} className="text-primary font-medium hover:underline text-sm mt-2">
                                Ver más detalles
                            </Link>
                        </div>
                    </div>
                )
            })}
        </div>
    );
};

export default ProjectGrid;
