
import Link from "next/link";

const CtaSection = () => {
    return (
        <section className="py-16 bg-white dark:bg-darkblack">
            <div className="container flex flex-col items-center justify-center text-center gap-8">
                <div className="flex flex-col items-center gap-4">
                    <h2 className="text-4xl md:text-6xl font-bold text-secondary dark:text-white tracking-tight">
                        Protegemos lo que más valoras
                    </h2>
                    <div className="w-24 h-1.5 bg-primary rounded-full"></div>
                </div>

                <Link href="https://wa.me/573182723559?text=Hola%2C%20vi%20el%20enlace%20en%20su%20sitio%20web%20amerseguros.com%20y%20estoy%20interesado%20en%20cotizar%20un%20seguro.%20%C2%BFPodr%C3%ADan%20brindarme%20m%C3%A1s%20informaci%C3%B3n%2C%20por%20favor%3F" target="_blank">
                    <button className="bg-primary hover:bg-secondary text-white font-bold py-4 px-12 rounded-full transition-colors duration-300 shadow-xl text-lg uppercase tracking-wide">
                        Adquirir
                    </button>
                </Link>
            </div>
        </section>
    );
};

export default CtaSection;
