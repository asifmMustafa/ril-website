import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-scroll";

const MenuButton = ({ onClick }) => {
  return (
    <button
      type="button"
      className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden"
      onClick={onClick}
    >
      <span className="sr-only">Open main menu</span>
      <svg
        className="w-5 h-5"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 17 14"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M1 1h15M1 7h15M1 13h15"
        />
      </svg>
    </button>
  );
};

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const links = [
    { text: "About Us", id: "about" },
    { text: "Services", id: "services" },
    { text: "Projects", id: "projects" },
    { text: "Careers", id: "careers" },
    { text: "Contact Us", id: "contact" },
  ];

  useEffect(() => {
    if (isMenuOpen) {
      const handleClickOutside = (event) => {
        if (menuRef.current && !menuRef.current.contains(event.target)) {
          setIsMenuOpen(false);
        }
      };

      document.addEventListener("mousedown", handleClickOutside);

      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }
  }, [isMenuOpen]);

  return (
    <>
      <nav className="md:flex hidden items-center justify-center gap-6 font-regular">
        {links.map((link, i) => (
          <Link
            key={i}
            className="cursor-pointer"
            spy={true}
            smooth={true}
            to={link.id}
          >
            {link.text}
          </Link>
        ))}
        <span className="flex items-center justify-center p-[2px] rounded-md bg-[#4BA5EF] cursor-pointer">
          <span className="mx-5">+880 1740827761</span>
          <img className="w-10" src="/phone.png" />
        </span>
      </nav>

      <nav className="relative md:hidden flex">
        <MenuButton onClick={() => setIsMenuOpen(!isMenuOpen)} />
        {isMenuOpen && (
          <div
            ref={menuRef}
            className="lg:hidden absolute right-2 top-10 z-20 text-black bg-white shadow-md rounded-lg px-5 py-2 flex flex-col items-center border-[0.5px] border-gray-400"
          >
            {links.map((link, index) => (
              <React.Fragment key={index}>
                <Link
                  className="py-2 hover:text-orange cursor-pointer text-center w-full"
                  spy={true}
                  smooth={true}
                  to={link.id}
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                  {link.text}
                </Link>
                <hr className="border-t border-gray-300 w-full" />
              </React.Fragment>
            ))}
            <span className="w-[210px] flex items-center my-2 p-[2px] rounded-md text-white bg-[#4BA5EF] cursor-pointer">
              <span className="mx-auto">+880 1740827761</span>
              <img className="w-10" src="/phone.png" />
            </span>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
