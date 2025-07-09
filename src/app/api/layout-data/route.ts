import { NextResponse } from "next/server";

const MenuData = [
  {
    id: 1,
    title: "Home",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "About",
    path: "/about",
    newTab: false,
  },
  {
    id: 3,
    title: "Projects",
    path: "/projects",
    newTab: false,
  },
  {
    id: 4,
    title: "Blog",
    path: "/blog",
    newTab: false,
  },
  {
    id: 5,
    title: "Services",
    path: "/#services",
    newTab: false,
  },
  {
    id: 6,
    title: "Contact",
    path: "/contact",
    newTab: false,
  },
  {
    id: 7,
    title: "Docs",
    path: "/documentation",
    newTab: false,
  }
];


const footerData = {
    name: "AMER SEGUROS",
    tagline: "Enlaces rápidos",
    info: [
        {
            icon: "/images/footer/email-arrow.svg",
            link: "info@amerseguros.com"
            
        },
        {
            icon: "/images/footer/Location.svg",
            link: "Samacá, Boyacá",
            href: "https://maps.app.goo.gl/qQELqkkiyJWqvtst6"
        }
    ],
    links: [
        { name: "Terminos y condiciones", href: "/terms-and-conditions" },
        { name: "Politica de privacidad", href: "/privacy-policy" },
        { name: "Error 404", href: "/not-found" }
    ],
    socialLinks: [
        { name: "Facebook", href: "https://www.facebook.com/" },
        { name: "Instagram", href: "https://www.instagram.com/" },
        { name: "Twitter", href: "https://x.com/" }
    ],
    copyright: "© AMER SEGUROS copyright 2025"
};

export const GET = async () => {
    return NextResponse.json({
        footerData,
        MenuData
    });
};