"use client";
import Image from "next/image";

const Herobanner = ({ bannerimage, heading, desc, headingClass = "large-heading" }: { bannerimage: string; heading: string; desc: string; headingClass?: string }) => {
    const splitDesc = desc.split(/<\/?span>/);

    return (
        <section className="relative flex items-end text-white bg-black h-screen max-h-650px">
            <Image
                className="absolute top-0 left-0 w-full h-full object-cover"
                alt="Image"
                src={bannerimage}
                height={694}
                width={1800}
                unoptimized
            />
            <div className="absolute top-0 left-0 w-full h-full bg-overlay"></div>

            {/* Content */}
            <div className="absolute inset-0 z-10 container pointer-events-none">
                <div className="h-full flex items-start pt-32 md:pt-40">
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white/30 uppercase tracking-widest select-none">
                        {heading}
                    </h1>
                </div>
            </div>
        </section>
    );
}

export default Herobanner;
