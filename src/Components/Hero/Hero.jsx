import React from 'react';
import { Flex, Text, Image, Box, keyframes,useColorMode , useColorModeValue,  Heading, Link } from '@chakra-ui/react';
import { GrLocation } from "react-icons/gr";
import { FaLinkedin } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { SiGmail } from "react-icons/si";



export const Hero = () => {


    const bg = useColorModeValue('white', '#161A1D');
    const color = useColorModeValue('black', 'white');

    return (
        <Flex
        direction={{ base: 'column', lg: 'row' }}
        align="center"
        justify="space-around"
        p={10}
        bg={bg}
        pt={{ base: '100px', lg: '150px' }}
        pb={[200,225,300,150,175]}    >
        {/* Text Section */}
        <Box mr={{ base: 0, lg: 10 }} w={{ base: '100%', lg: '50%' }} textAlign={{ base: 'center', lg: 'left' }} mb={{ base: 10, lg: 0 }}>
            <Heading color={color} fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }} mb={4}>
                Hi, I'm Anas
            </Heading>
            <Text fontSize={{ base: 'md', lg: 'lg' }} mb={6}>
            A skilled Full-Stack Developer and UI/UX Designer proficient in React.js, Laravel, Tailwind CSS, and Figma, delivering responsive web solutions with a focus on agile development and continuous improvement.
            </Text>
            <Box mb={10}>
            <Flex ml={1} align="center" justify={{ base: 'center', lg: 'flex-start' }} mb={4}>
                    <GrLocation color={color} transform='scale(1.5)' />
                    <Text ml={3} fontSize={{ base: 'sm', lg: 'md' }}>
                        Casablanca Morocco
                    </Text>
                </Flex>
                <Flex align="center" justify={{ base: 'center', lg: 'flex-start' }}>
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
                <Flex mt={6}  justify={{ base: 'center', lg: 'flex-start' }}>
                    <Link href='https://github.com/AnasOudadsse' isExternal mr={4}>
                        <FiGithub size={30} color={color} />
                    </Link>
                    <Link href='https://www.linkedin.com/in/anas-oudadsse/' isExternal mr={4}>
                        <FaLinkedin size={30} color={color} />
                    </Link>
                    <Link href='mailto:anas.oudadsse1@gmail.com' isExternal>
                        <SiGmail  size={30} color={color} />
                    </Link>
                </Flex>
            </Box>
        </Box>

        {/* Image Section */}
        <Box boxSize={[200,250,300,400]}  display="flex" alignItems="flex-end" justifyContent="center">
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