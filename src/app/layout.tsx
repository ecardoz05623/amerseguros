"use client";
import { Manrope, Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { SessionProvider } from "next-auth/react";
import { ThemeProvider } from "next-themes";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Header from "./components/layout/header";
import Footer from "./components/layout/footer";


const manrope = Manrope({
  subsets: ["latin"],
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-display-next",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-body-next",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const [is404, setIs404] = useState(false);

  useEffect(() => {
    fetch(pathname, { method: "HEAD" }).then((res) => {
      if (res.status === 404) {
        setIs404(true);
      } else {
        setIs404(false);
      }
    });
  }, [pathname]);

  const excludedRoutes = ["/", "/signin", "/signup", "/forgot-password", "/documentation"];
  const hideLayout = excludedRoutes.includes(pathname) || is404;

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${manrope.className} ${playfairDisplay.variable} ${dmSans.variable}`}>
        <SessionProvider>
          <ThemeProvider attribute="class" enableSystem={false} defaultTheme="light" forcedTheme="light">
            {!hideLayout && <Header />}
            {children}
            {!hideLayout && <Footer />}

          </ThemeProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
