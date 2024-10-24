import { Box, Button, Heading} from "@radix-ui/themes";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const slides = [
  {
    id: 1,
    title: " New Furniture Sales Collection ",
    description: "Sales! up to 25% discount",
    img: "/Group 3742.svg",
    img2: "/sofa.svg",
    url: "/shop",
    bg: "bg-gradient-to-r from-[#DCA3B7] to-[#f3e1e1] ",
  },

  {
    id: 2,
    title: "New Summer Sales Collections",
    description: "Sales! 30% discount",
    img: "/clothing.svg",
    url: "/shop",
    bg: "bg-gradient-to-r from-[#f3e1e1] to-pink-50 ",
  },

  {
    id: 3,
    title: " Get Cosmetics Sales Collections ",
    description: "Sale! up to 40% off",
    img: "/cosmetics.svg",
    url: "/shop",
    bg: "bg-gradient-to-r from-[#eae9e7] to-[#d8d5d0] ",
  },
  {
    id: 4,
    title: "Accessories Sale ",
    description: "Sale! up to 30% off",
    img: "accessories.svg",
    url: "/shop",
    bg: "bg-gradient-to-r from-blue-50 to-yellow-50",
  },
  {
    id: 5,
    title: " Household Sales ",
    description: "Up to -30% discount!.",
    img: "/interiors.svg",
    url: "/shop",
    bg: "bg-gradient-to-r from-[#eae9e7] to-[#eae9e7] ",
  },
];

const Slider = () => {
    const [current, setCurrent] = useState(0);
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
      }, 3000);

      return () => clearInterval(interval);
    }, []);
  return (
    <Box
      as="div"
      className="lg:h-[calc(100vh-160px)] h-[calc(100vh-80px)] mt-20 lg:mt-40 overflow-hidden relative"
    >
      <Box
        as="div"
        className="w-max h-full flex transition-all ease-in-out duration-1000"
        style={{ transform: `translateX(-${current * 100}vw)` }}
      >
        {slides.map((slide) => (
          <Box
            as="div"
            className={`${slide.bg} w-screen h-full flex  flex-col gap-16 xl:flex-row`}
            key={slide.id}
          >
            <Box
              as="div"
              className="h-1/2 xl:w-1/2 xl:h-full flex flex-col   items-center justify-center gap-8 2xl:gap-12 text-center "
            >
              <Heading
                as="h2"
                className="text-xl lg:text-3xl 2xl:text-5xl pt-8 lg:pt-14"
              >
                {slide.description}
              </Heading>
              <Heading
                as="h1"
                className="text-4xl lg:text-6xl 2xl:text-8xl font-semibold "
              >
                {slide.title}
              </Heading>
              <Link to={slide.url}>
                <Button className="rounded-md bg-black text-white py-3 px-4 pb-4 ">
                  SHOP NOW
                </Button>
              </Link>
            </Box>
            <Box as="div" className="h-1/2  xl:w-1/2  xl:h-full relative  ">
              <img
                src={slide.img}
                alt=""
                className="object-contain xl:object-cover block lg:hidden xl:block"
                style={{
                  width: "100%",
                  height: "100%",
                  backgroundPosition: "center",
                  // backgroundSize: "cover",
                }}
              />
            </Box>
          </Box>
        ))}
      </Box>
      <Box
        as="div"
        className="absolute m-auto left-1/2 -translate-x-1/2 bottom-6 flex gap-4"
      >
        {slides.map((slide, index) => (
          <Box as='div'
            className={`w-3 h-3  rounded-full ring-1 ring-gray-600 cursor-pointer flex items-center justify-center ${
              current === index ? "scale-150" : ""
            }`}
            key={slide.id}
            onClick={() => setCurrent(index)}
          >
            {current === index && (
              <Box as='div' className="w-[6px] h-[6px] bg-gray-600 rounded-full"></Box>
            )}
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Slider;
