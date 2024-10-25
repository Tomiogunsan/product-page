import { Box } from "@radix-ui/themes";
import { useState } from "react";
import {  NavLink } from "react-router-dom";

const MobileMenu = () => {
  const [open, setOpen] = useState(false);
  return (
    <Box as="div">
      <img
        src="/menu.png"
        alt="menu"
        className="w-6 h-6 cursor-pointer"
        onClick={() => setOpen(!open)}
      />
      {open && (
        <Box
          as="div"
          className="absolute bg-black text-white left-0 top-20 w-full h-[calc(100vh-80px)] flex flex-col items-center justify-center gap-8 text-xl  z-10"
        >
          <NavLink
            to="/"
            onClick={() => setOpen(false)}
            className={({ isActive }) =>
              isActive
                ? "underline-pink-800 border-[#94004f] border-b-[3px]"
                : ""
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/product"
            onClick={() => setOpen(false)}
            className={({ isActive }) =>
              isActive
                ? "underline-pink-800 border-[#94004f] border-b-[3px]"
                : ""
            }
          >
            Product
          </NavLink>
          <NavLink
            to="/about"
            onClick={() => setOpen(false)}
            className={({ isActive }) =>
              isActive
                ? "underline-pink-800 border-[#94004f] border-b-[3px]"
                : ""
            }
          >
            About
          </NavLink>
          <NavLink
            to="/blog"
            onClick={() => setOpen(false)}
            className={({ isActive }) =>
              isActive
                ? "underline-pink-800 border-[#94004f] border-b-[3px]"
                : ""
            }
          >
            Blog
          </NavLink>
          <NavLink
            to="/contact"
            onClick={() => setOpen(false)}
            className={({ isActive }) =>
              isActive
                ? "underline-pink-800 border-[#94004f] border-b-[3px]"
                : ""
            }
          >
            Contact
          </NavLink>
        </Box>
      )}
    </Box>
  );
};

export default MobileMenu;
