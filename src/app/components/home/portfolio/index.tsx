import "swiper/css";
import Projectswiper from "./projectswiper";

function Portfolio() {
  return (
    <section className="bg-lightgray dark:bg-darkblack py-20 md:py-40">
      <div className="flex flex-col items-center gap-24">
        <div className="container flex flex-col items-center text-center">
          <div className="flex flex-col gap-5 max-w-3xl">
            <h2 className="text-4xl md:text-5xl font-bold">Nuestros servicios</h2>
            <p className="text-secondary/70 dark:text-white/70">
              Ofrecemos una amplia gama de seguros personales y corporativos. Nuestra propuesta se enfoca en brindar soluciones confiables, integrales y ajustadas a tus necesidades.
            </p>
          </div>
        </div>

        <div className="px-3.5 w-full">
          <Projectswiper />
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
