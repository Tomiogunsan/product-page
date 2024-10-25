import { Box, Button, Heading, Text } from "@radix-ui/themes"
import { Link } from "react-router-dom";
import { FaInstagram } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";


const Footer = () => {
  return (
    <Box
      as="div"
      className="py-24 px-4 md:px-8 lg:px-16 xl:32 2xl:px-64 bg-gray-100 text-sm mt-18"
    >
      <Box as="div" className="flex justify-between">
        <Link to="/">
          <Text as="p" className="text-2xl tracking-wide">
            TOMIA
          </Text>
        </Link>
        <Box as="div" className="flex items-center gap-2">
          <FaInstagram />
          <BsTwitterX />
          <FaFacebook />
          <FaYoutube />
        </Box>
      </Box>
      <Box className="border-b-[1px] border-gray-300 mt-8" />
      <Box className="grid  grid-cols-2 md:grid-cols-3 lg:grid-cols-5  gap-y-8 pt-14">
        <Box as="div" className="grid gap-y-4">
          <Heading weight={"medium"} className="font-medium text-lg">
            COMPANY
          </Heading>
          <Box className="flex flex-col gap-4">
            <Link to="/About">About Us</Link>
            <Link to="/product">Product</Link>

            <Link to="/blog">Blog</Link>
            <Link to="/contact">Contact Us</Link>
          </Box>
        </Box>
        <Box as="div" className="grid gap-y-4">
          <Heading weight={"medium"} className="font-medium text-lg">
            LEGAL
          </Heading>
          <Box as="div" className="flex flex-col gap-4">
            <Link to="/About">About Us</Link>
            <Link to="/product">Product</Link>

            <Link to="/blog">Blog</Link>
            <Link to="/contact">Contact Us</Link>
          </Box>
        </Box>
        <Box as="div" className="grid gap-y-4">
          <Heading weight={"medium"} className="font-medium text-lg">
            RESOURCES
          </Heading>
          <Box as="div" className="flex flex-col gap-4">
            <Link to="">IOS & Andriod</Link>
            <Link to="">Watch a Demo</Link>

            <Link to="">Customers</Link>
            <Link to="">API</Link>
          </Box>
        </Box>
        <Box as="div" className="grid gap-y-4">
          <Heading className="font-medium text-lg">FEATURES</Heading>
          <Box className="flex flex-col gap-4">
            <Link to="">Business Marketing</Link>
            <Link to="">User Analytic</Link>

            <Link to="">Live Chat</Link>
            <Link to="">Unlimited Support</Link>
          </Box>
        </Box>
        <Box as="div" className="grid gap-y-4">
          <Heading weight={"medium"} className="font-medium text-lg">
            SUBSCRIBE
          </Heading>
          <Text>
            Be the first to get the latest news about trends, promotions, and
            much more!
          </Text>
          <Box as='div' className="flex">
            <input
              type="text"
              placeholder="Email address"
              className="p-4 w-3/4"
            />
            <Button className="w-1/4 bg-[#94004f] text-white">JOIN</Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Footer