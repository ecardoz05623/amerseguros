
import FeatureSection from "@/app/components/shared/feature-section";
import ProjectHero from "@/app/components/shared/project-hero";
import { getProjectsBySlug } from "@/lib/markdown";
import markdownToHtml from "@/lib/markdownToHtml";
import Image from "next/image";
import Link from "next/link";

type Props = {
    params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props) {
    const { slug } = await params;

    const project = getProjectsBySlug(slug, ["title", "ScopeOfWork", "industry", "raised", "website", "description", "coverImage", "gallery", "content"]);

    const siteName = process.env.SITE_NAME || "Amerseguros";
    const authorName = process.env.AUTHOR_NAME || "Amerseguros";

    if (project) {
        const metadata = {
            title: `${project.title || "Single Post Page"} | ${siteName}`,
            robots: {
                index: true,
                follow: true,
                nocache: true,
                googleBot: {
                    index: true,
                    follow: false,
                    "max-video-preview": -1,
                    "max-image-preview": "large",
                    "max-snippet": -1,
                },
            },
        };

        return metadata;
    } else {
        return {
            title: "Not Found",
            description: "No blog article has been found",
            author: authorName,
            robots: {
                index: false,
                follow: false,
                nocache: false,
                googleBot: {
                    index: false,
                    follow: false,
                    "max-video-preview": -1,
                    "max-image-preview": "large",
                    "max-snippet": -1,
                },
            },
        };
    }
}

export default async function Post({ params }: Props) {
    const { slug } = await params;
    const project = getProjectsBySlug(slug, [
        "title", "ScopeOfWork", "industry", "raised", "website", "description", "coverImage", "gallery", "content", "features"
    ]);

    const content = await markdownToHtml(project.content || "");


    return (
        <>
            <ProjectHero
                title={project.title}
                subtitle={project.description}
                image={project.coverImage}
            />

            <div className="dark:bg-darkblack">
                <div className="container">
                    <div className="flex flex-col gap-8 md:gap-16 py-10 xl:py-20">
                        <div className="flex flex-col gap-10">

                            <div className="flex flex-col md:flex-row gap-5 lg:gap-10">
                                {/* Back button area already removed */}
                            </div>

                            {/* Old Title and Description removed in favor of Hero */}

                            {/* Feature Sections */}
                        </div>
                    </div>

                    {/* Feature Sections */}

                    <div className="flex flex-col gap-0">
                        {project.features?.map((feature: any, index: number) => (
                            <FeatureSection
                                key={index}
                                title={feature.title}
                                description={feature.description}
                                items={feature.items}
                                image={feature.image || project.coverImage}
                                reversed={index % 2 !== 0}
                            />
                        ))}
                    </div>


                    {project.gallery?.length > 0 && (
                        <div className="w-full max-w-5xl mx-auto aspect-[16/9] rounded-xl overflow-hidden shadow-md">
                            <Image
                                src={project.gallery[0]}
                                alt="Imagen destacada"
                                width={1200}
                                height={675}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    )}
                </div>

            </div>


        </>
    );
}