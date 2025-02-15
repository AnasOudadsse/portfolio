import {
  Box,
  Grid,
  Heading,
  Text,
  useColorModeValue,
  Tag,
  VStack,
  Image,
  Link,
  HStack,
  Icon,
  Flex,
  useBreakpointValue,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalBody,
  useDisclosure,
  Button,
} from "@chakra-ui/react";
import { FiExternalLink, FiGithub, FiPlayCircle } from "react-icons/fi";

const projectsData = [
  {
    title: "Blood-Nation",
    description:
      "Blood-Nation est un système complet de gestion de banque de sang conçu pour rationaliser l'enregistrement des donneurs, les demandes des hôpitaux et le suivi des stocks de sang. L'application envoie des alertes en temps réel pour les pénuries critiques, garantissant une gestion efficace des ressources. Construit avec React, Tailwind CSS, Laravel et MySQL, le système a été optimisé à la fois pour l'expérience utilisateur et la fonctionnalité, offrant une navigation fluide et un backend robuste pour gérer les données et automatiser les processus.",
    tags: ["React", "Tailwindcss", "Laravel", "MySQL", "Github", "Chakra UI"],
    videoSrc: "blood-nation-demo.webm",
    repoLink: "https://github.com/AnasOudadsse/BloodBankManagement",
    flexDirection: ['column', 'column', 'column'],
  },
  {
    title: "Ticketing App",
    description:
      "Blood-Nation est un système complet de gestion de banque de sang conçu pour rationaliser l'enregistrement des donneurs, les demandes des hôpitaux et le suivi des stocks de sang. L'application envoie des alertes en temps réel pour les pénuries critiques, garantissant une gestion efficace des ressources. Construit avec React, Tailwind CSS, Laravel et MySQL, le système a été optimisé à la fois pour l'expérience utilisateur et la fonctionnalité, offrant une navigation fluide et un backend robuste pour gérer les données et automatiser les processus.",
    videoSrc: "ticketing-app-demo.webm",
    tags: ["React", "Chakra UI", "Node.js", "MongoDB", "Git"],
    repoLink: "https://github.com/AnasOudadsse/myCoach",
    flexDirection: ['column', 'column', 'column'],
  },
  {
    title: "X Capital (UI/UX)",
    description:
      "Un exemple de travail en UI/UX réalisé pour X Capital, axé sur la création de pages d'accueil réactives et visuellement attrayantes. Utilisant Figma, le projet met en évidence une attention particulière aux détails et un accent sur l'optimisation de l'expérience utilisateur tout en respectant les directives de la marque et les objectifs commerciaux.",
    imageSrc: "HomePage.jpg",
    tags: ["Figma", "UI/UX Design"],
    externalLink: "https://www.figma.com/design/XIRuymUHVHqSp5IvtBRJpd",
    flexDirection: ['column', 'column', 'column'],
    repoLink: null,
  },
  {
    title: "Simple Shell",
    description:
      "Un projet de programmation système en C visant à développer un interpréteur de commandes inspiré des shells UNIX. Ce projet met en évidence la gestion des processus, l'exécution de commandes et la manipulation des entrées/sorties, tout en respectant les principes fondamentaux des systèmes d'exploitation.",
    imageSrc: "Ans-dev.png",
    tags: ["C", "Shell", "UNIX", "Programmation Système"],
    externalLink: null,
    flexDirection: ['column', 'column', 'column'],
    repoLink: "https://github.com/AnasOudadsse/_simple_shell",
  },
];

export const Projects = () => {
  const bg = useColorModeValue("white", "#161A1D");
  const cardBg = useColorModeValue("white", "#2C333A");
  const textColor = useColorModeValue("black", "white");
  const tagBg = useColorModeValue("gray.100", "#38414A");
  const tagColor = useColorModeValue("gray.800", "white");

  return (
    <Box id="Projects" py={12} px={{ base: 4, md: 8 }} bg={bg}>
      {/* Title */}
      <VStack align="center" mb={10}>
        <Heading size="lg">Projets</Heading>
        <Text fontSize="lg" color={textColor} textAlign="center" maxW="700px">
          Découvrez quelques-uns de mes projets les plus remarquables.
        </Text>
      </VStack>

      {/* Projects Grid */}
      <Grid templateColumns={{ base: "1fr" }} gap={6} w={["90%", "90%", "80%", "55%"]} mx="auto">
        {projectsData.map((project, index) => (
          <Flex
            key={index}
            p={6}
            bg={cardBg}
            borderRadius="lg"
            boxShadow="lg"
            overflow="hidden"
            transition="transform 0.3s ease-in-out"
            _hover={{ transform: "translateY(-5px)", boxShadow: "xl" }}
            direction={project.flexDirection}
            align="center"
          >
            {/* Media Section */}
            <MediaPreview project={project} />

            {/* Project Details */}
            <Box w={{ base: "100%", lg: "95%" }} p={4}>
              <VStack align="start" spacing={3}>
                <Heading size="md" color={textColor}>
                  {project.title}
                </Heading>
                <Text fontSize="sm" color={textColor}>
                  {project.description}
                </Text>

                {/* Tags */}
                <HStack wrap="wrap">
                  {project.tags.map((tag, i) => (
                    <Tag key={i} size="sm" color={tagColor} bg={tagBg} borderRadius="full" px={3} py={1}>
                      {tag}
                    </Tag>
                  ))}
                </HStack>

                {/* Links */}
                <HStack spacing={4} mt={2}>
                  {project.repoLink && (
                    <Link href={project.repoLink} isExternal>
                      <HStack align="center" spacing={1} _hover={{ color: "teal.500" }}>
                        <Icon boxSize="20px" as={FiGithub} color={textColor} />
                        <Text fontSize="sm">GitHub</Text>
                      </HStack>
                    </Link>
                  )}
                </HStack>
              </VStack>
            </Box>
          </Flex>
        ))}
      </Grid>
    </Box>
  );
};

/* MediaPreview Component */
const MediaPreview = ({ project }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box w={{ base: "100%", lg: "80%" }} position="relative">
        {project.videoSrc ? (
          <Box
            as="button"
            onClick={onOpen}
            w="100%"
            h="100%"
            borderRadius="lg"
            overflow="hidden"
            position="relative"
          >
            <video
              src={project.videoSrc}
              style={{
                width: "100%",
                height: "100%",
                borderRadius: "inherit",
                filter: "brightness(60%)",
              }}
              muted
              loop
              playsInline
            />
            <Icon
              as={FiPlayCircle}
              position="absolute"
              top="50%"
              left="50%"
              transform="translate(-50%, -50%)"
              fontSize="50px"
              color="whiteAlpha.900"
              _hover={{ color: "teal.400" }}
            />
          </Box>
        ) : (
          <Box w="100%" h={["160px","220px","280px","255px","340px"]} overflow="auto" m={2}  
            // display="flex"
            justifyContent="center"
            alignItems="center">
            <Image
              src={project.imageSrc}
              alt={project.title}
              w="100%"
              h=""
              objectPosition={'top'}
              objectFit="contain" // Keeps aspect ratio while filling width
              borderRadius="lg"
            />
          </Box>

        )}
      </Box>

      {/* Video Modal */}
      <Modal isOpen={isOpen} onClose={onClose} size="xl">
        <ModalOverlay />
        <ModalContent bg="black">
          <ModalCloseButton color="white" />
          <ModalBody p={0}>
            <video src={project.videoSrc} controls autoPlay style={{ width: "100%", borderRadius: "lg" }} />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
