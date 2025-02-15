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

} from "@chakra-ui/react";
import { FiExternalLink, FiGithub } from "react-icons/fi";

const projectsData = [
  {
    title: "Blood-Nation",
    description:
    "Blood-Nation est un système complet de gestion de banque de sang conçu pour rationaliser l'enregistrement des donneurs, les demandes des hôpitaux et le suivi des stocks de sang. L'application envoie des alertes en temps réel pour les pénuries critiques, garantissant une gestion efficace des ressources. Construit avec React, Tailwind CSS, Laravel et MySQL, le système a été optimisé à la fois pour l'expérience utilisateur et la fonctionnalité, offrant une navigation fluide et un backend robuste pour gérer les données et automatiser les processus.",    
    tags: ["React", "Tailwindcss", "Laravel", "MySQL", "Github", "Chakra UI"],
    externalLink: "https://example.com",
    videoSrc: "blood-nation-demo.mp4",
    repoLink: "https://github.com/AnasOudadsse/BloodBankManagement",
    flexDirection: ['column', 'column', 'column', 'row']
  },
  {
    title: "Ticketing App",
    description:
    "Blood-Nation est un système complet de gestion de banque de sang conçu pour rationaliser l'enregistrement des donneurs, les demandes des hôpitaux et le suivi des stocks de sang. L'application envoie des alertes en temps réel pour les pénuries critiques, garantissant une gestion efficace des ressources. Construit avec React, Tailwind CSS, Laravel et MySQL, le système a été optimisé à la fois pour l'expérience utilisateur et la fonctionnalité, offrant une navigation fluide et un backend robuste pour gérer les données et automatiser les processus.",    
    videoSrc: "ticketing-app-demo.mp4",
    tags: ["React", "Chakra UI", "Node.js", "MongoDB", "Git"],
    externalLink: "https://my-coach-online.github.io/My-Coach-Landing-Page/",
    repoLink: "https://github.com/AnasOudadsse/myCoach",
    flexDirection: ['column', 'column', 'column','row-reverse', ]
  },
  {
    title: "X Capital (UI/UX)",
    description:
"Un exemple de travail en UI/UX réalisé pour X Capital, axé sur la création de pages d'accueil réactives et visuellement attrayantes. Utilisant Figma, le projet met en évidence une attention particulière aux détails et un accent sur l'optimisation de l'expérience utilisateur tout en respectant les directives de la marque et les objectifs commerciaux.",    imageSrc: "HomePage.jpg",
    tags: ["Figma", "UI/UX Design"],
    externalLink: "https://www.figma.com/design/XIRuymUHVHqSp5IvtBRJpd",
    flexDirection: ['column', 'column', 'column','row'],
    repoLink: null,
  },
  {
    title: "Simple Shell",
    description:
    "Un projet de programmation système en C visant à développer un interpréteur de commandes inspiré des shells UNIX. Ce projet met en évidence la gestion des processus, l'exécution de commandes et la manipulation des entrées/sorties, tout en respectant les principes fondamentaux des systèmes d'exploitation.",    imageSrc: "Ans-dev.png",
    tags: ["C", "Shell", "UNIX", "Programmation Système"],
    externalLink: null,
    flexDirection: ['column', 'column', 'column','row-reverse'],
    repoLink: "https://github.com/AnasOudadsse/_simple_shell",
  },
];

export const Projects = () => {
  const bg = useColorModeValue("white", "#161A1D");
  const cardBg = useColorModeValue("white", "#2C333A");
  const textColor = useColorModeValue("black", "white");
  const tagBg = useColorModeValue("gray.100", "#38414A");
  const tagColor = useColorModeValue("gray.800", "white");


  const detailsText = useBreakpointValue({
    base: "Click for preview",  // Mobile & tablets
    md: "Hover for preview"      // Medium screens and larger
  });

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
      <Grid
        templateColumns={{ base: "1fr"}}
        gap={6}
        w={[ "90%","90%","80%","80%","80%", "65%"]}
        mx="auto"
      >
        {projectsData.map((project, index) => (
          <Flex
  
            mb={10}
            key={index}
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
      <Box
      px={3}

      w={{ base: "100%", lg: "50%" }}
      h={{ base: "250px", md: "100%" }}
      overflow="hidden"
      position="relative"
      borderRadius="xl"
      boxShadow="lg"
      _hover={{ boxShadow: "xl" }}
    >
      {project.videoSrc ? (
        // Video Preview
        <Flex h={"100%"} alignItems={'center'}>
          <video
            src={project.videoSrc}
            style={{
              width: "100%",
              height: "100%",
              borderRadius: "inherit",
            }}
            muted
            loop
            playsInline
            onMouseEnter={(e) => {
              if (e.target.readyState >= 2) {
                e.target.play();
              }
            }}
            onMouseLeave={(e) => {
              setTimeout(() => {
                e.target.pause();
              }, 200);
            }}
          />
                <Box
                    position="absolute"
                    bottom={2}
                    right={2}
                    bg="rgba(0, 0, 0, 0.7)"
                    color="white"
                    px={2}
                    py={1}
                    borderRadius="md"
                    fontSize="xs"
                >
                    {detailsText}
                </Box>
        </Flex>
      ) : (
        // Image Preview
        <Flex
          justify={'center'}
          align={'center'}
          w="100%"
          h="100%"
        >
          <Image
            src={project.imageSrc}
            alt={project.title}
            style={{
              width: "100%",
              height: "auto",
              objectFit: "cover",
              borderRadius: "inherit",
            }}
            objectPosition={'top'}
            maxH={"300px"}
          />
   
        </Flex>
        
      )}
    </Box>

            {/* Project Details */}
            <Box w={{ base: "100%", lg: "50%" }} p={4}>
              <VStack align="start" spacing={3}>
                <Heading size="md" color={textColor}>
                  {project.title}
                </Heading>
                <Text fontSize="sm" color="gray.600">
                  {project.description}
                </Text>

                {/* Tags */}
                <HStack wrap="wrap">
                  {project.tags.map((tag, i) => (
                    <Tag
                      key={i}
                      size="sm"
                      color={tagColor}
                      bg={tagBg}
                      borderRadius="full"
                      px={3}
                      py={1}
                    >
                      {tag}
                    </Tag>
                  ))}
                </HStack>

                {/* Links */}
                <HStack spacing={4} mt={2}>
                  {project.externalLink && (
                    <Link href={project.externalLink} isExternal>
                      <HStack align="center" spacing={1} _hover={{ color: "teal.500" }}>
                        <Icon boxSize="20px" as={FiExternalLink} color={textColor} />
                        <Text fontSize="sm">Live Demo</Text>
                      </HStack>
                    </Link>
                  )}
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
