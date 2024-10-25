import { Box, Button, Text } from "@radix-ui/themes";

import { MdOutlineStarPurple500 } from "react-icons/md";

import MySelect from "../../shared/Select";

const product = [
  {
    id: 1,
    name: "Gucci bag",
    img: "/bags.svg",
    price: 5000,
    description: "A fashion and classic bag",
    review: 9,
    rating: 2,
    color1: "bg-red-700",
    color2: "bg-blue-700",
    color3: "bg-black",
  },
  {
    id: 2,
    img: "/fixed-height.svg",
    review: 7,
    name: "Blouse",
    price: 5000,
    description: "An elegant top",
    rating: 7,
    color1: "bg-green-700",
    color2: "bg-pink-700",
    color3: "bg-orange-600",
  },
  {
    id: 3,
    name: "shirt",
    img: "taylor.svg",
    price: 2000,
    description: "A stunning shirt",
    review: 10,
    rating: 7,
    color1: "bg-gray-700",
    color2: "bg-slate-700",
    color3: "bg-yellow-600",
  },
  {
    id: 11,
    img: "/shoes.svg",
    name: "Sneakers",
    description: "A comfortable sneakers",
    price: 2000,
    rating: 3,
    review: 4,
    color1: "bg-gray-700",
    color2: "bg-orange-700",
    color3: "bg-black",
  },
  {
    id: 9,
    img: "/joggers.svg",
    name: "Joggers",
    price: 5000,
    description: "Look fashionable",
    rating: 1.7,
    review: 14,
    color1: "bg-gray-700",
    color2: "bg-slate-700",
    color3: "bg-yellow-600",
  },

  {
    id: 4,
    name: "Versacci Bag",
    price: 7000,
    img: "/Component 8.svg",
    description: "A classic bag",
    rating: 4.7,
    review: 7,
    color1: "bg-gray-700",
    color2: "bg-orange-700",
    color3: "bg-black",
  },
  {
    id: 5,
    name: "Single Sofa",
    price: 9000,
    img: "/sofa.svg",
    description: "A comfortable sofa",
    review: 20,
    rating: 7.5,
    color1: "bg-gray-700",
    color2: "bg-slate-700",
    color3: "bg-yellow-600",
  },
  {
    id: 6,
    name: "Queen Sofa",
    price: 12000,
    img: "Group 3742.svg",
    description: "Sit in comfort",
    review: 14,
    rating: 5,
    color1: "bg-blue-700",
    color2: "bg-red-700",
    color3: "bg-yellow-600",
  },
  {
    id: 7,
    name: "Hat",
    price: 1000,
    img: "/hat.svg",
    description: "A stylish hat",
    review: 11,
    rating: 3.5,
    color1: "bg-red-700",
    color2: "bg-blue-700",
    color3: "bg-black",
  },
  {
    id: 8,
    name: "Headset",
    price: 2000,
    img: "/Component 7.svg",
    description: "Music all around you",
    review: 27,
    rating: 4.8,
    color1: "bg-gray-700",
    color2: "bg-orange-700",
    color3: "bg-black",
  },

  {
    id: 10,
    img: "/interiors.svg",
    name: "Interiors",
    price: 5000,
    description: "A nice flower pot",
    review: 12,
    rating: 3.6,
    color1: "bg-purple-700",
    color2: "bg-blue-700",
    color3: "bg-yellow-300",
  },

  {
    id: 12,
    img: "/dress.svg",
    name: "Dress",
    price: 1500,
    description: "A nice dress",
    review: 10,
    rating: 2.5,
    color1: "bg-gray-700",
    color2: "bg-slate-700",
    color3: "bg-yellow-600",
  },
];

const Product = () => {
  return (
    <Box
      as="div"
      className="mt-[200px] px-4 pb-14 md:px-8 lg:px-16 xl:px-32 2xl:px-64"
    >
      <Box
        as="div"
        className="grid  gap-4 gap-y-8 md:grid-cols-2 lg:grid-cols-3 laptop:grid-cols-4 xl:grid-cols-3  px-4 w-full h-full"
      >
        {product.map((item) => {
          return (
            <Box as='div' className="grid gap-y-2 border border-gray-300 rounded-md shadow-md shadow-[#efefef]">
              <Box as='div' className="w-full  h-max  lg:h-80">
                <img
                  src={item.img}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </Box>
              <Box as='div' className="flex justify-between px-2">
                <Text as='p' className="font-medium">{item.name}</Text>
                <Text as='p' className="font-semibold">${item.price}</Text>
              </Box>
              <Box as='div' className="flex justify-between px-2">
                <Box as='div' className="flex gap-2 items-center ">
                  <Text as='span' className="flex gap-[3px] items-center">
                    {" "}
                    <MdOutlineStarPurple500 className="text-yellow-500" />{" "}
                    {item.rating}
                  </Text>
                  <Text as='span' className="text-gray-500 text-sm">
                    ({item.review} reviews)
                  </Text>
                </Box>
                <Text as='span' className="text-gray-500 font-mediun w-max">
                  <MySelect
                    placeholder="Size"
                    options={[
                      {
                        label: "L",
                        value: "L",
                      },
                      {
                        label: "M",
                        value: "M",
                      },
                      {
                        label: "XL",
                        value: "XL",
                      },
                    ]}
                  />
                </Text>
              </Box>

              <Box as='div' className="flex justify-between px-2">
                <Text as='p' className="text-sm text-gray-500">{item.description}</Text>
                <Box as='div' className='flex gap-2'>
                  <Box as='div' className={`${item.color1} w-4 h-4 rounded-full `}/>
                  <Box as='div' className={`${item.color2} w-4 h-4 rounded-full `}/>
                  <Box as='div' className={`${item.color3} w-4 h-4 rounded-full `}/>
                </Box>
              </Box>

              <Button className="rounded-2xl ring-1 ring-lama text-lama w-max py-2 px-4 text-xs mx-2 mb-4 ">
                Add to Cart
              </Button>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default Product;
