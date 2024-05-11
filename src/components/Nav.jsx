import { navLinks } from "../constant";

import logo from "../assets/images/logo.svg";
import menu from "../assets/images/icon-hamburger.svg";
import closeMenu from "../assets/images/icon-close.svg";
import { useState } from "react";

const Nav = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-white w-full justify-center items-center fixed top-0 left-0 ">
      <div className="w-full flex md:justify-evenly justify-between items-center py-8 md:px-0 px-8 gap-3 duration-500 ">
        <div>
          <a href="#">
            <img src={logo} alt="" width={200} />
          </a>
        </div>

        <div>
          <ul
            className={`flex md:gap-9  item-center justify-center ${
              open
                ? "absolute top-[120px] left-0 right-0 mx-auto flex-col   justify-center  items-center gap-4 py-10 bg-white md:w-auto w-[300px] rounded-lg  md:static transition-transform duration-500 ease-in-out transform translate-y-0"
                : "hidden md:flex"
            }`}
          >
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  key={link.id}
                  href={link.href}
                  rel={link.rel}
                  target={link.target}
                  className="md:text-grayish-blue text-dark-blue md:text-base text-xl"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex md:hidden">
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen(!open)}
            className="cursor-pointer flex items-center gap-4 transition-transform duration-300 ease-in-out"
          >
            <img
              className={`h-6 w-6 ${
                open ? "rotate-90" : "rotate-0"
              } transition-transform duration-300 ease-in-out`}
              src={open ? closeMenu : menu}
              alt="menubar"
            />
          </button>
        </div>

        <div className="md:block hidden">
          <button className="text-white text-md font-medium bg-gradient-to-r from-lime-green to-bright-cyan md:py-2 px-4 rounded-full cursor-pointer ">
            Request Invite
          </button>
        </div>
      </div>
    </header>
  );
};

export default Nav;
