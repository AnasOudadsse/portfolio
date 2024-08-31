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
        <Flex
        direction={{ base: 'column', lg: 'row' }}
        align="center"
        justify="space-around"
        p={10}
        bg={bg}
        pt={150}
        pb={250}
    >
        {/* Text Section */}
        <Box mr={{ base: 0, lg: 30 }} w={'50%'}>
            <Heading color={color} fontSize={{ base: '3xl', lg: '5xl' }} mb={6}>
                Hi, I'm Anas
            </Heading>
            <Text fontSize={{ base: 'md', lg: 'lg' }} mb={10}>
                A skilled Full-Stack Developer and UI/UX Designer proficient in React.js, Laravel, Tailwind CSS, and Figma, delivering responsive web solutions with a focus on agile development and continuous improvement.
            </Text>
            <Box mb={10}>
                <Flex align="center" mb={4}>
                    <GrLocation color={color} transform='scale(1.5)' />
                    <Text mt={-1} ml={3} fontSize={{ base: 'sm', lg: 'md' }}>
                        Casablanca Morocco
                    </Text>
                </Flex>
                <Flex align="center" mb={4}>
                    <div className="flex h-6 w-6 items-center justify-center">
                        <span className="relative flex h-3 w-3">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                            <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-500"></span>
                        </span>
                    </div>
                    <Text ml={2} fontSize={{ base: 'sm', lg: 'md' }}>
                        Available for new projects
                    </Text>
                </Flex>
                <Flex>
                    <Link ml={1} mr={4} as={'a'} target='_blank' href='https://github.com/AnasOudadsse'>
                        <FiGithub transform='scale(1.6)' color={color} />
                    </Link>
                    <Link as={'a'} target='_blank' href='https://www.linkedin.com/in/anas-oudadsse/'>
                        <FaLinkedin transform='scale(1.6)' color={color} />
                    </Link>
                </Flex>
            </Box>
        </Box>

        {/* Image Section */}
        <Box  display="flex" alignItems="flex-end" justifyContent="center">
            <div className="relative w-full max-w-md">
                <div className="relative overflow-hidden rounded-[50px] shadow-lg transition-transform duration-500 hover:shadow-2xl transform hover:rotate-3">
                    <img
                        src="myPic-croped.jpg"
                        className="w-full h-auto rounded-[50px] transition-transform duration-500 ease-in-out hover:scale-110"
                        alt="My Portfolio Picture"
                    />
                </div>
            </div>
        </Box>
    </Flex>

);
}