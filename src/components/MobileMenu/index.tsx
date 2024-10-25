import { Box } from "@radix-ui/themes";
import { useState } from "react";
import { Link } from "react-router-dom";


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
          <Link to="/" onClick={() => setOpen(false)}>
            Home
          </Link>
          <Link to="/product" onClick={() => setOpen(false)}>
            Product
          </Link>
          <Link to="/about" onClick={() => setOpen(false)}>
            About
          </Link>
          <Link to="/blog" onClick={() => setOpen(false)}>
            Blog
          </Link>
          <Link to="/contact" onClick={() => setOpen(false)}>
            Contact
          </Link>
        </Box>
      )}
    </Box>
  );
}

export default MobileMenu