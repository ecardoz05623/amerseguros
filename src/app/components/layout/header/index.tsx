import { useEffect, useState } from "react";
import Logo from "../logo";
import ThemeToggler from "./ThemeToggle";

const Header = () => {
  const [sticky, setSticky] = useState(false);

  const handleScroll = () => {
    setSticky(window.scrollY >= 80);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full border-t-4 border-primary transition-all duration-500 ease-in-out before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-0 before:bg-primary before:transition-all before:duration-500 before:ease-in-out ${sticky ? "before:h-full" : "before:h-0"
        }`}
    >
      <div className="container">
        <nav
          className={`relative flex items-center justify-between ${sticky ? "py-5" : "py-7"}`}
        >
          <div className="flex items-center">
            <Logo sticky={sticky} />
          </div>
          <div className="flex items-center">
            <ThemeToggler />
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
