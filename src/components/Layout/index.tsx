import { Box } from "@radix-ui/themes";
import Navbar from "../Navbar.tsx";
import SocialMediaBanner from "../SocialMediaBanner";
import { Outlet } from "react-router-dom";
import Footer from "../Footer";

const RootLayout = ({
  searchQuery,
  setSearchQuery,
}: {
  searchQuery: string;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
}) => {
  return (
    <>
      <Box as="div" className="fixed top-0 z-20 w-full">
        <SocialMediaBanner />
        <Navbar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      </Box>
      <Outlet />
      <Footer />
    </>
  );
};

export default RootLayout;
