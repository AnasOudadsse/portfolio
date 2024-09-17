import {
    Box,
    Button,
    Flex,
    Heading,
    Image,
    Text,
    Badge,
    Icon,
    Tag,
    useColorModeValue,
    useColorMode,
    VStack
  } from "@chakra-ui/react";
  import { FiExternalLink } from "react-icons/fi";


const CertifData = [
    {
        title: "Programming with JavaScript",
        date: "December 2023",
        issuer: "Meta",
        description: "This certification focuses on core JavaScript programming concepts, including data structures, functions, objects, and asynchronous programming. It demonstrates a strong understanding of JavaScript's language features and best practices for building robust, scalable web applications.",
        credetials : "https://coursera.org/verify/RB3VERHZ5NUN",
        skills : [
            "JavaScript",
            "Programming",
            "Web Development"
        ]
    },
    {
        title: "React Basics",
        date: "December 2023",
        issuer: "Meta",
        description: "This certification covers the fundamentals of React, including JSX, component structure, state management, and lifecycle methods. It provides a solid foundation in building interactive user interfaces using React and demonstrates the ability to manage complex UI logic and states efficiently.",
        credetials : "https://coursera.org/verify/4SYCFES8XCL5",
        skills : [
            "JavaScript",
            "Programming",
            "Web Development"
        ]
    },
    {
        title: "Version Control",
        date: "December 2023",
        issuer: "Meta",
        description: "This certification provides expertise in version control systems, particularly Git and GitHub. It demonstrates the ability to track project changes, collaborate effectively with teams, and manage code repositories using industry-standard tools for version control.",
        credetials : "https://coursera.org/verify/P58AGWZ4DRZ6",
        skills : [
            "JavaScript",
            "Programming",
            "Web Development",
            "OOP"
        ]
    },
]

export const Certif = () => {

    const bg = useColorModeValue('gray.50', '#22272B');
    const imgBg = useColorModeValue('#F5F6F7', '#282E33');
    const color = useColorModeValue('black', 'white');
    const cardbg = useColorModeValue('white', '#2C333A')  
    const buttonColor = useColorModeValue('white', 'black');
    const buttonBg = useColorModeValue('black', 'white');
    const buttonHoverBg = useColorModeValue('gray.700', 'gray.300');

    const colorMode = useColorMode()
  
    console.log(colorMode);
    


  return (

        <Box
            minH="100vh"
            bg={bg}
            py={21}
        >

            <VStack align="center" mt={14}>
                <Heading size="lg" mb={4}>
                    Mes Certifications
                </Heading>
                <Text fontSize="lg" color={color} textAlign="center">
                    Découvrez mes compétences validées à travers des certifications professionnelles
                </Text>
            </VStack>
            <Flex
            justify="center"
            align="center"
            p={4}
            flexDirection={['column', 'column','column', 'row']}
            >   

                {
                    CertifData.map((certif, index) => (
                        
                        <Box
                            key={index}
                            maxW={["100%","100%","100%", "lg"]}
                            w={["100%","100%","100%", "full"]}
                            bg={cardbg}
                            rounded="xl"
                            shadow="2xl"
                            overflow="hidden"
                            transform="scale(0.7)"
                            transition="transform 0.5s"
                            // _hover={{ transform: "scale(0.73)" }}
                        >
                            <Flex 
                                justify={'center'}                        
                                bg={imgBg}
                            >

                            <Image
                                w={300}
                                h="40"
                                objectFit="cover"
                                src={colorMode.colorMode === "light" ? "Meta_lockup_positive primary_RGB.svg" : "Meta_lockup_mono_white_RGB.svg"} 
                                alt="Nature scene"
                                borderRadius={2000}
                                p={5}
                            />
                        
                            </Flex>
                            <Box p={6}>
                            <Heading as="h2" fontSize="2xl" fontWeight={600} mb={4} color={color}>
                                {certif.title}
                            </Heading>
                            <Text fontSize={'lg'} color={color} mb={4}>
                                {certif.description}
                            </Text>
                            <Badge
                                my={5}
                                px={2}
                                py={1}
                                rounded="md"
                                fontSize="sm"
                                fontWeight="semibold"
                                colorScheme="blue"
                            >
                                Skills
                            </Badge>
                            <Flex wrap={'wrap'}>

                                {
                                    certif.skills.map((skill, index) => (
                                        <Tag
                                            key={index}
                                            bg={imgBg}
                                            color={color}
                                            mr={2}
                                            mb={2}
                                            rounded="md"
                                            px={2}
                                            py={1}
                                            fontSize="md"
                                            fontWeight="semibold"
                                            w={'fit-content'}
                                        >
                                            {skill}
                                        </Tag>
                                    ))
                                }
                                
                            </Flex>

                            <Flex justify="center" align="center">
                                <Button
                                mt={5}
                                px={4}
                                py={2}
                                bg={buttonBg}
                                color={buttonColor}
                                fontWeight="semibold"
                                rounded="lg"
                                shadow="md"
                                _hover={{ bg: buttonHoverBg }}
                                _focus={{ outline: "none", ring: 2, ringColor: "indigo.500", ringOpacity: 0.75 }}
                                transition="all 0.3s ease-in-out"
                                >
                                credentials
                                <Icon ml={2} boxSize="30px" borderRadius="md" p={1} as={FiExternalLink} color={buttonColor} />
                                </Button>
                            </Flex>

                            </Box>
                        </Box>
                    )
                )
                }
            </Flex>
    </Box>
        
  );
};
