import { Box, Flex, Text } from "@radix-ui/themes"
import { MdOutlinePhone } from "react-icons/md";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";


const SocialMediaBanner = () => {
  return (
    <Box
      as="div"
      className="hidden lg:block h-20  bg-[#94004f] text-[#fff] font-bold"
    >
      <Box
        as="div"
        className="flex justify-between items-center px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 pt-6"
      >
        <Box as="div" className="flex items-center gap-4">
          <Box as="div" className="flex items-center gap-2">
            <MdOutlinePhone />
            <Text as="p">+1234567890</Text>
          </Box>
          <Box as="div" className="flex items-center gap-2">
            <MdOutlineMailOutline />
            <Text as="p">tomiamabel@gmail.com</Text>
          </Box>
        </Box>
        <Text as="div">Follow us and get a chance to win 80% off</Text>
        <Box as="div" className="flex gap-4">
          <Text as="p">Follow us :</Text>
          <Box  as="div" className="flex items-center gap-2">
            <FaInstagram />
            <BsTwitterX />
            <FaFacebook />
            <FaYoutube />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default SocialMediaBanner