import Image from "next/image";
import { useEffect, useState } from "react";

const Footer = () => {
  const [footerData, setFooterData] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/layout-data");
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
        setFooterData(data?.footerData);
      } catch (error) {
        console.error("Error fetching footer data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <footer>
      <div className="bg-[#003f6d] py-16">
        <div className="container flex flex-col gap-10 md:gap-20 xl:flex-row xl:justify-between">
          {/* Columna izquierda */}
          <div className="flex flex-col gap-8 xl:max-w-xl w-full">
            {footerData?.tagline && (
              <h2 className="text-white text-2xl md:text-3xl font-bold">
                {footerData.tagline}
              </h2>
            )}
            <div className="flex flex-col gap-4 text-white text-sm">
              {footerData?.info?.map((item: any, index: number) => (
                <a key={index} href={item.href} className="flex items-center gap-3 hover:text-primary">
                  <Image src={item.icon} alt="icon" width={20} height={20} />
                  <span>{item.link}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Enlaces y redes */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-white text-sm w-full">
            {/* Navegación */}
            <ul className="flex flex-col gap-2">
              <h4 className="font-semibold mb-2">Navegación</h4>
              {footerData?.links?.map((link: any, index: number) => (
                <li key={index}>
                  <a href={link.href} className="hover:text-primary">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>

            {/* Redes sociales */}
            <ul className="flex flex-col gap-2">
              <h4 className="font-semibold mb-2">Síguenos</h4>
              {footerData?.socialLinks?.map((social: any, index: number) => (
                <li key={index}>
                  <a href={social.href} className="hover:text-primary" target="_blank">
                    {social.name}
                  </a>
                </li>
              ))}
            </ul>

            {/* Derechos */}
            <div className="md:col-span-1 flex items-start md:items-end">
              <p className="text-white/70 max-w-xs">
                {footerData?.copyright || "© AMER Seguros 2025 — Todos los derechos reservados."}
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
