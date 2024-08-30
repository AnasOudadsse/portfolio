import React from 'react';
import { Flex, Text, Image, Box, keyframes,useColorMode , useColorModeValue,  Heading, Link } from '@chakra-ui/react';
import { color } from 'framer-motion';
import { GrLocation } from "react-icons/gr";
import { FaLinkedin } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";



export const Hero = () => {


    const bg = useColorModeValue('white', 'black');
    const color = useColorModeValue('black', 'white');
    const buttonColor = useColorModeValue('white', 'black')
    const buttonbg = useColorModeValue('black', 'white')
    const buttonHoverBg = useColorModeValue('gray.700', 'gray.300')

    return (
    <Box pt={150} bg={bg}>
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


        </Flex>

        <Box mx={182} mt={-150}>

            <Flex>
                <GrLocation color='' transform='scale(1.5)'/>

                <Text mt={-1} ml={3} fontSize={17}
                >Casablanca Morocco
                </Text>
        
            </Flex>

            <Flex ml={-1} mt={2}>

                <div className="flex h-6 w-6 items-center justify-center">
                    <span className="relative flex h-3 w-3">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-500"></span>
                    </span>
                </div>

                <Text ml={2} fontSize={17}>
                     Available for new projects
                </Text>
            </Flex>

            <Flex mt={10}>

                <Link  ml={1} mr={8} as={'a'} target='_blank' href='https://github.com/AnasOudadsse'>
                    <FiGithub transform='scale(1.6)' />
                </Link>

                <Link as={'a'} target='_blank' href='https://www.linkedin.com/in/anas-oudadsse/'>
                    <FaLinkedin transform='scale(1.6)' />
                </Link>
                



            </Flex>
      </Box>

  </Box>

);
}