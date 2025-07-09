import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="fixed bottom-8 right-8 z-[999]">
      <div className="flex items-center gap-2.5">
        <Link
          href="https://wa.me/573104771068?text=Hola%2C%20vi%20el%20enlace%20en%20su%20sitio%20web%20amerseguros.com%20y%20estoy%20interesado%20en%20cotizar%20un%20seguro.%20%C2%BFPodr%C3%ADan%20brindarme%20m%C3%A1s%20informaci%C3%B3n%2C%20por%20favor%3F
" // <-- Reemplaza con tu número de WhatsApp
          target="_blank"
          className="hidden lg:block"
        >
          <Image
            src="/images/Icon/whatsapp.png"
            alt="WhatsApp"
            width={50}
            height={50}
            className="hover:scale-110 transition duration-300 ease-in-out"
          />
        </Link>
        {isVisible && (
          <div
            onClick={scrollToTop}
            aria-label="scroll to top"
            className="flex cursor-pointer items-center justify-center transition duration-300 ease-in-out"
          >
            <Image src="/images/Icon/up-arrow.svg" alt="Up Arrow" width={50} height={50} />
          </div>
        )}
      </div>
    </div>
  );
}

