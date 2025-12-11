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
      link: "Duitama Boyaca, Cl. 10 #37-82",
      href: "https://www.google.com/maps/dir//Amerseguros+Duitama+Boyaca,+Cl.+10+%2337-82,+Sevilla,+Duitama,+Boyac%C3%A1/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x8e6a3f8fcd31ab51:0x988b54e9ed1fa02e?sa=X&ved=1t:57443&ictx=111"
    }
  ],
  links: [
    { name: "Terminos y condiciones", href: "/terms-and-conditions" },
    { name: "Politica de privacidad", href: "/privacy-policy" },

  ],
  socialLinks: [
    { name: "Facebook", href: "https://www.facebook.com/amerseguros.ltda" },
    { name: "Instagram", href: "https://www.instagram.com/amerseguros.co/" },

  ],
  copyright: "© AMER SEGUROS copyright 2025"
};

export const GET = async () => {
  return NextResponse.json({
    footerData,
    MenuData
  });
};