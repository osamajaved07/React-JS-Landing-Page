import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "../assets/logo.png";
import { navItems } from "../constants";
import { Link } from "react-scroll";

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
      <div className="container px-4 mx-auto relative lg:text-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0">
            <img className="h-10 w-10 mr-2" src={logo} alt="Logo" />
            <span className="text-xl tracking-tight">VirtualR</span>
          </div>

          {/* Desktop Nav */}
          <ul className="hidden lg:flex ml-14 space-x-12">
            {navItems.map((item, index) => (
              <li key={index}>
                <Link to={item.href.replace("#", "")} smooth={true} duration={500} offset={-80} spy={true} className="relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-cyan-500 after:transition-all after:duration-300 hover:after:w-full cursor-pointer">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop Buttons */}
          <div className="hidden lg:flex justify-center space-x-12 items-center">
            <a href="#" className="relative py-2 px-3 border rounded-md cursor-pointer after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-cyan-500 after:transition-all after:duration-300 hover:after:w-full hover:bg-gradient-to-r from-cyan-500 to-cyan-800">
              Sign In
            </a>
            <a href="#" className="relative py-2 px-3 border rounded-md cursor-pointer after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-cyan-500 after:transition-all after:duration-300 hover:after:w-full hover:bg-gradient-to-r from-cyan-500 to-cyan-800">
              Create an account
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleNavbar}>{mobileDrawerOpen ? <X /> : <Menu />}</button>
          </div>
        </div>

        {/* Mobile Menu Drawer */}
        {mobileDrawerOpen && (
          <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
            <ul>
              {navItems.map((item, index) => (
                <li key={index} className="py-4">
                  <Link to={item.href.replace("#", "")} smooth={true} duration={500} offset={-80} spy={true} onClick={toggleNavbar} className="relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-cyan-500 after:transition-all after:duration-300 hover:after:w-full cursor-pointer">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="flex space-x-6 mt-8">
              <a href="#" className="relative py-2 px-3 border rounded-md cursor-pointer after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-cyan-500 after:transition-all after:duration-300 hover:after:w-full hover:bg-gradient-to-r from-cyan-500 to-cyan-800">
                Sign In
              </a>
              <a href="#" className="relative py-2 px-3 border rounded-md cursor-pointer after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-cyan-500 after:transition-all after:duration-300 hover:after:w-full hover:bg-gradient-to-r from-cyan-500 to-cyan-800">
                Create an account
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
