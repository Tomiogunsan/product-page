import { Box, Button, Heading} from "@radix-ui/themes"
import { Link } from "react-router-dom";


const About = () => {
  return (
    <Box
      as="div"
      className=" mt-20 h-[400px] w-full flex flex-col  gap-8 items-center justify-center "
    >
      <Heading as='h1'>About coming soon....</Heading>
       <Link to="/">
        <Button  className="rounded-md bg-black text-white py-3 px-4 pb-4 ">
          GO TO HOMEPAGE
        </Button>
      </Link>
    </Box>
  );
}

export default About