
import Logo from "../logo";
const Header = () => {
  return (
    <header
      className="fixed top-0 z-50 w-full border-t-4 border-primary bg-primary shadow-md transition-all duration-500 ease-in-out"
    >
      <div className="w-full px-2 sm:px-4 lg:px-6 Xxl:px-10">
        <nav
          className="relative flex items-center justify-between py-5"
        >
          <div className="flex items-center">
            <Logo />
          </div>
          <div className="flex items-center">
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
