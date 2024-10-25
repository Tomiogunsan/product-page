import { Box, Text } from "@radix-ui/themes";
import { Link } from "react-router-dom";
import MobileMenu from "../MobileMenu";
import { CgProfile } from "react-icons/cg";
import { FaShoppingCart } from "react-icons/fa";
import { FcLikePlaceholder } from "react-icons/fc";
import { CiBellOn } from "react-icons/ci";
import SearchBar from "../SearchBar";

const Navbar = ({
  searchQuery,
  setSearchQuery,
}: {
  searchQuery: string;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
}) => {
  return (
    <Box
      as="div"
      className="h-20 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative bg-[#fff]"
    >
      {/* mobile */}
      <Box
        as="div"
        className="h-full flex items-center justify-between md:hidden"
      >
        <Link to="/">
          <Text as="div" className="text-2xl tracking-wide">
            TOMIA
          </Text>
        </Link>
        <MobileMenu />
      </Box>
      {/* desktop */}
      <Box
        as="div"
        className="hidden md:flex items-center justify-between gap-8 h-full"
      >
        {/* left */}
        <Box as="div" className="w-1/3 xl:w-1/2 flex items-center gap-12 ">
          <Link to="/" className="flex items-center gap-3">
            <img src="/logo.png" alt="logo" className="w-12 h-12" />
            <Text as="div" className="text-2xl tracking-wide">
              TOMIA
            </Text>
          </Link>
          <Box as="div" className="hidden xl:flex gap-4">
            <Link to="/">Home</Link>
            <Link to="/product">Product</Link>

            <Link to="/about">About</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/contact">Contact</Link>
          </Box>
        </Box>
        {/* right */}
        <Box
          as="div"
          className="w-2/3 xl:w-1/2 flex items-center justify-between gap-8"
        >
          <SearchBar
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          />
          <Box as="div" className="flex gap-2">
            <CgProfile size={24} />
            <FaShoppingCart size={24} />
            <FcLikePlaceholder size={24} />
            <CiBellOn size={24} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Navbar;
