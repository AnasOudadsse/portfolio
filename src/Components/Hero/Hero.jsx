import React from 'react';
import { Flex, Text, Image, Box, keyframes,useColorMode , useColorModeValue,  Heading } from '@chakra-ui/react';
import { color } from 'framer-motion';
import { CiLocationOn } from "react-icons/ci";



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
            display={'block'}
            mx={177}
            my={30}
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


 
            <Box
                w="20%"
                h="20%"
                position="relative"
                top={-130}
                display="flex"
                alignItems="center"
                justifyContent="center"
            >
                <Image
                w="90%"
                h="90%"
                src='Professional-pic-no-bg-cp.png'
                borderRadius="full"
                />
            </Box>

            <Flex>
            <CiLocationOn />
            <Text>Casablanca Morocco</Text>
            </Flex>

      </Flex>

  </Box>

);
}