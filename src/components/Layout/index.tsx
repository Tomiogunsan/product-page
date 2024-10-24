import { Box } from "@radix-ui/themes";
import Navbar from "../Navbar.tsx";
import SocialMediaBanner from "../SocialMediaBanner";
import { Outlet } from "react-router-dom";
import Footer from "../Footer";

const RootLayout = () => {
  return (
    <>
      <Box as="div" className="fixed top-0 z-20 w-full">
        <SocialMediaBanner />
        <Navbar />
      </Box>
      <Outlet />
      <Footer />
    </>
  );
};

export default RootLayout;
