import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import "../Nav/Nav.css";
import ShimmerButton from "../Button/ShimmerButton";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef(null);

  const toggleMenu = () => setIsOpen(!isOpen);

  // Navigation Links Array
  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About Us" },
    { path: "/our-services", label: "Service" },
    { path: "/project", label: "Project" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <header className="bg-[#fafafa] h-20 sticky z-40 top-0 shadow-md p-3">
      <nav className="flex items-center justify-between max-w-screen-xl mx-auto h-full px-4 font-ui-sans-serif">
        {/* Logo */}
        <div className="flex-shrink-0 w-20 h-20">
          <Link to="/">
            <img src="/logo.jpg" alt="Sky innovation logo" />
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden flex items-center text-black hover:text-red-700 focus:text-[#f0db1b]"
          onClick={toggleMenu}
        >
          <div className="flex flex-col absolute right-5 gap-1 items-center">
            <section
              className={` w-7 rounded h-1 origin-left transition-transform duration-300  bg-[#008bd0] ${
                isOpen ? "rotate-[45deg]" : "rotate-0"
              }`}
            ></section>
            <section
              className={` w-7 rounded h-1  bg-[#008bd0] ${
                isOpen ? "opacity-0" : "opacity-100"
              }`}
            ></section>
            <section
              className={` w-7 rounded h-1 origin-left transition-transform duration-300  bg-[#008bd0] ${
                isOpen
                  ? "rotate-[-45deg] translate-x-0 translate-y-1"
                  : "rotate-0"
              }`}
            ></section>
          </div>
        </button>

        {/* Navigation Items */}
        <div
          className={`flex-grow  flex items-center ${
            isOpen ? "" : ""
          } md:flex md:items-center md:justify-center`}
        >
          <ul
            ref={navRef}
            className={`flex  flex-col md:flex-row md:space-x-8 md:space-y-0 space-y-4 absolute md:static ring-1 ring-white md:ring-0  md:bg-transparent w-full md:w-auto bg-[#fafafa] ${
              isOpen ? "top-20 left-0" : "top-[-100vh] left-0"
            } duration-500 w-screen md:top-0 px-4 md:px-0`}
          >
            {navLinks.map(({ path, label }) => (
              <li key={path} className="relative group">
                <Link
                  onClick={() => setIsOpen(false)}
                  to={path}
                  className="nav-link flex items-center  py-2 md:py-0 hover:text-[#008bd0] text-lg font-semibold"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Join Us Button */}
        <div className="flex-shrink-0 hidden md:block">
          <Link to={"/contact"} className="bg-[#a95670] text-white">
            <ShimmerButton text={"Contact us"} />
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
