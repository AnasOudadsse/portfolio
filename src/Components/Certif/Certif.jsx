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
        title: "Programmation avec JavaScript",
        date: "December 2023",
        issuer: "Meta",
        description: "Cette certification se concentre sur les concepts fondamentaux de la programmation en JavaScript, y compris les structures de données, les fonctions et les objets. Elle démontre une solide compréhension des fonctionnalités et des meilleures pratiques pour développer des applications web robustes et évolutives.",
        credetials : "https://coursera.org/verify/RB3VERHZ5NUN",
        skills : [
            "Objets",
            "ES6+",
            "Fonctions"
        ]
    },
    {
        title: "Les Bases de React",
        date: "December 2023",
        issuer: "Meta",
        description: "Cette certification couvre tous les bases de React,  y compris JSX, la  structure des composants, la  gestion de l'état, et  les méthodes du cycle de vie. Elle  fournit une solide fondation pour la  création d'interfaces utilisateur  interactives avec React, démontre la capacité à gérer efficacement la logique d'interface et les états.",
        credetials : "https://coursera.org/verify/4SYCFES8XCL5",
        skills : [
            "JSX",
            "Composants",
            "Gestion d'état"
        ]
    },
    {
        title: "Contrôle de Version",
        date: "December 2023",
        issuer: "Meta",
        description: "Cette certification atteste de l'expertise dans les systèmes de contrôle de version, en particulier Git et GitHub. Elle démontre la capacité à suivre les modifications d'un projet, à collaborer efficacement avec des équipes, et à gérer des dépôts de code en utilisant des outils de contrôle de version reconnus dans l'industrie.",
        credetials : "https://coursera.org/verify/P58AGWZ4DRZ6",
        skills : [
            "Git",
            "GitHub",
            "Branches Git",
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
            flexDirection={['column', 'column','column','column', 'row']}
            >   

                {
                    CertifData.map((certif, index) => (
                        
                        <Box
                            key={index}
                            maxW={["100%","lg","lg","lg", "lg"]}
                            h={['750px','650px','650px','650px','700px']}
                            w='full'
                            bg={cardbg}
                            rounded="xl"
                            shadow="2xl"
                            overflow="hidden"
                            transform="scale(0.7)"
                            transition="transform 0.5s"
                            _hover={{ transform: "scale(0.72)" }}
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
                                as={'a'}
                                href={certif.credetials}
                                target="_blank"
                                mt={[10]}
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
