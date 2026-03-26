
import Image from "next/image";
import { Check } from "lucide-react";

interface FeatureProps {
    title: string;
    description: string;
    items: string[];
    image: string;
    reversed?: boolean;
    color?: string; // Optional: to set specific icon/bg colors
}

const FeatureSection = ({ title, description, items, image, reversed, color = "text-[#004080]" }: FeatureProps) => {
    return (
        <div className={`flex flex-col ${reversed ? "lg:flex-row-reverse" : "lg:flex-row"} items-center gap-12 lg:gap-24 py-16 lg:py-24`}>
            {/* Content Side */}
            <div className="flex-1 flex flex-col gap-8 relative z-10">
                <div className={`p-4 w-fit rounded-2xl bg-white shadow-lg shadow-blue-900/5 ring-1 ring-blue-50 dark:bg-gray-800 ${color}`}>
                    <Check size={28} className="text-[#004080]" />
                </div>

                <h2 className="text-4xl md:text-5xl font-extrabold text-[#004080] dark:text-white leading-tight drop-shadow-sm">
                    {title}
                </h2>

                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed font-medium">
                    {description}
                </p>

                <ul className="flex flex-col gap-4 mt-2">
                    {items.map((item, index) => (
                        <li key={index} className="flex items-start gap-4 group">
                            <div className="mt-1 flex-shrink-0 transition-transform duration-300 group-hover:scale-110">
                                <div className="bg-[#004080]/10 rounded-full p-1.5 backdrop-blur-sm">
                                    <Check size={18} className="text-[#004080]" />
                                </div>
                            </div>
                            <span className="text-gray-700 dark:text-gray-200 text-lg group-hover:text-[#004080] transition-colors duration-300">{item}</span>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Image Side */}
            <div className="flex-1 w-full perspective-1000">
                <div className={`relative w-full aspect-[4/3] rounded-[2rem] overflow-hidden shadow-2xl shadow-[#004080]/20 transform hover:scale-[1.02] transition-all duration-500 ease-out ${reversed ? "lg:rounded-bl-[100px]" : "lg:rounded-br-[100px]"} ring-1 ring-black/5`}>
                    <Image
                        src={image}
                        alt={title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    {/* Lighting/Volumetric effect overlay */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-[#004080]/10 to-transparent pointer-events-none mix-blend-overlay"></div>
                </div>
            </div>
        </div>
    );
};

export default FeatureSection;
