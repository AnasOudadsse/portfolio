import React from 'react';
import { Flex, Text, Image, Box, keyframes,useColorMode , useColorModeValue,  Heading } from '@chakra-ui/react';
import { color } from 'framer-motion';
import { GrLocation } from "react-icons/gr";



export const Hero = () => {


    const bg = useColorModeValue('white', 'black');
    const color = useColorModeValue('black', 'white');
    const buttonColor = useColorModeValue('white', 'black')
    const buttonbg = useColorModeValue('black', 'white')
    const buttonHoverBg = useColorModeValue('gray.700', 'gray.300')

    return (
    <Box pt={200}
        bg={bg}
    >
        <Flex 
            mx={177}
            my={21}
            w={'fit-content'}
            >
            <Heading color={color} fontSize={65} as="h1" >
                Hi, I'm Anas
            </Heading>

        </Flex>

        <Flex
            pos={'relative'}
            justify={'space-around'}
            mx={20}
            >
            <Text w={'50%'}>
            A skilled Full-Stack Developer and UI/UX Designer proficient in React.js, Laravel, Tailwind CSS, and Figma, delivering responsive web solutions with a focus on agile development and continuous improvement.
            </Text>


 
            <div class="flex justify-center items-center h-screen">
  <div class="relative group">
    <img 
      src="Professional-pic-no-bg-cp.png" 
      class="w-60 h-60 rounded-full object-cover transition-transform duration-500 ease-in-out transform group-hover:scale-110 group-hover:rotate-12"
      alt="Profile Picture"
    />
    <div class="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 opacity-75 rounded-full transition-opacity duration-500 ease-in-out group-hover:opacity-0"></div>
  </div>
</div>


      </Flex>

            <Flex
                mx={182}
                mt={-150}

            >
                <GrLocation color='' transform='scale(1.5)'/>
                <Text
                    ml={5}
                    fontSize={17}
                >Casablanca Morocco</Text>
            </Flex>

            <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-blue-600">Hello, Tailwind CSS in React!</h1>
        <p className="mt-4 text-lg text-gray-700">If you can see this, Tailwind CSS is working in your React project!</p>
        <button className="mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300">
          Click Me
        </button>
      </div>
    </div>
  </Box>

);
}