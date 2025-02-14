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
  keyframes,
  background,
} from "@chakra-ui/react";
import { FiExternalLink } from "react-icons/fi";  
import { FiGithub } from "react-icons/fi";

const projectsData = [
  {
    title: "Blood-Nation",
    description:
      "Blood-Nation est un système complet de gestion de banque de sang conçu pour rationaliser l'enregistrement des donneurs, les demandes des hôpitaux et le suivi des stocks de sang. L'application envoie des alertes en temps réel pour les pénuries critiques, garantissant une gestion efficace des ressources. Construit avec React, Tailwind CSS, Laravel et MySQL, le système a été optimisé à la fois pour l'expérience utilisateur et la fonctionnalité, offrant une navigation fluide et un backend robuste pour gérer les données et automatiser les processus.",
    videoSrc: "blood-nation-demo.mp4",
    tags: ["React", "Tailwindcss", "Laravel", "MySQL", "Github", "Git", "Chakra UI", "Composer", "Sanctum"],
    externalLink: "https://example.com",
    repoLink: "https://github.com/AnasOudadsse/BloodBankManagement",
  },
  {
    title: "Ticketing app",
    description:
      "My-Coach est une plateforme conçue pour connecter les utilisateurs avec des coachs personnels. J'ai développé la page d'accueil en me concentrant sur un design épuré et une fonctionnalité optimale. Construite avec React et Chakra UI, la page est entièrement responsive et présente une mise en page intuitive. De plus, j'ai mis en place un système de soumission de formulaire avec Express.js en backend pour gérer les demandes et les requêtes des utilisateurs. Ce projet met en valeur ma capacité à intégrer des technologies front-end et back-end pour des interactions utilisateur fluides.",
    videoSrc: "ticketing-app-demo.mp4",
    tags: ["React", "Tailwindcss", "Chakra UI", "Node.js", "Express.js", "MongoDB", "Github", "Git"],
    externalLink: "https://my-coach-online.github.io/My-Coach-Landing-Page/",
    repoLink: "https://github.com/AnasOudadsse/myCoach",
  },
  {
    title: "X Capital (UI/UX)",
    description:
      "Un exemple de travail en UI/UX réalisé pour X Capital, axé sur la création de pages d'accueil réactives et visuellement attrayantes. Utilisant Figma, le projet met en évidence une attention particulière aux détails et un accent sur l'optimisation de l'expérience utilisateur tout en respectant les directives de la marque et les objectifs commerciaux.",
    imageSrc: "HomePage.jpg", 
    tags: ["Figma", "UI/UX Design"],
    externalLink: "https://www.figma.com/design/XIRuymUHVHqSp5IvtBRJpd/A-Sample-Of-My-Work-at-X-Capital?node-id=0-1&t=JHT48svd4058edeZ-1", 
    flexDirection: ['column', 'column', 'column','column','row'],
    repoLink: null 
  },
  {
    title: "My-Coach Platform (UI/UX)",
    description:
      "Ce projet est une conception UI/UX pour la plateforme My-Coach, axée sur la page des détails des coachs et le processus de réservation. Le design met l'accent sur une navigation conviviale et une grande clarté, permettant aux utilisateurs de consulter facilement les profils des coachs, de lire les avis et de réserver des sessions. L'expérience utilisateur a été soigneusement conçue pour garantir un processus de réservation fluide avec un minimum d'étapes, en maintenant l'engagement des utilisateurs et en simplifiant les interactions avec les coachs potentiels.",
    imageSrc: "Coach details reviews.jpg", 
    tags: ["Figma", "UI/UX Design"],
    externalLink: "https://www.figma.com/design/rCQecy2Kg3UGGzOzATCqBw/My-Coach-Product-Demo?node-id=0-1&t=Rz05EXeqFoEYgdvX-1", 
    flexDirection: ['column', 'column', 'column','column','row-reverse'],
    repoLink: null 
  },
];

export const Projects = () => {
  const bg = useColorModeValue("white", "#161A1D");
  const imgBg = useColorModeValue("gray.50", "#38414A");
  const color = useColorModeValue("black", "white");
  const cardbg = useColorModeValue("white", "#2C333A");
  const tagBg = useColorModeValue("gray.100", "#38414A");
  const tagColor = useColorModeValue("gray.800", "white");

  // Animation for image hover
  const scaleUp = keyframes`
    0% { transform: scale(1); }
    100% { transform: scale(1.05); }
  `;

  return (
    <Box id="Projects" py={16} px={{ base: 4, md: 8 }} bg={bg}>
      {/* Heading and Subtitle */}
      <VStack align="center" mb={12}>
        <Heading size="lg" mb={4}>
          Projets
        </Heading>
        <Text fontSize="lg" color={color} textAlign="center">
          Quelques projets remarquables que j'ai réalisés :
        </Text>
      </VStack>

      {/* Projects Grid */}
      <Grid
        gap={10}
        w={["80%", "80%", "90%", "75%"]}
        mx="auto"
        justifyContent="center"
      >
        {projectsData.map((project, index) => (
          <Box
            key={index}
            display="flex"
            justifySelf="center"
            flexDirection={project.flexDirection}
            bg={cardbg}
            borderRadius="lg"
            boxShadow="lg"
            overflow="hidden"
            w="100%"
            maxW="1300px"
            transition="transform 0.3s ease-in-out"
            _hover={{ transform: "translateY(-5px)", boxShadow: "xl" }}
          >
        <Box
          px={5}
          w={{ base: "100%", xl: "50%" }}
          h={{ base: "250px", md: "100%" }}
          overflow="hidden"
          position="relative"
          borderRadius="xl" // Rounded corners for the frame
          border="2px solid" // Add a border
          borderColor={"gray.600"} // Border color based on theme
          boxShadow="lg" // Add a shadow for depth
          _hover={{ boxShadow: "xl" }} // Enhance shadow on hover
        >
 
          <video
            src={project.videoSrc}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain", // Ensure the video covers the container
              borderRadius: "inherit", // Inherit rounded corners from the parent
            }}
            muted
            loop
            playsInline
            onMouseEnter={(e) => {
              if (e.target.readyState >= 2) {
                // Check if the video is ready to play
                e.target.play();
              }
            }}
            onMouseLeave={(e) => {
              setTimeout(() => {
                e.target.pause();
              }, 200); // 200ms delay before pausing
            }}
          />
        </Box>

            {/* Project Details */}
            <Box p={8} w={{ base: "100%", xl: "50%" }} h="100%">
              <VStack align="start" spacing={4}>
                <Heading fontWeight={600} size={["sm", "sm", "sm", "md"]}>
                  {project.title}
                </Heading>
                <Text fontSize={["sm", "sm", "sm", "md"]} color={color}>
                  {project.description}
                </Text>

                {/* Tags */}
                <HStack my={2} wrap="wrap" spacing={2}>
                  {project.tags.map((tag, i) => (
                    <Tag
                      key={i}
                      size={["md", "md", "md", "lg"]}
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

                {/* External Links */}
                <Flex>
                  <Link mr={4} href={project.externalLink} isExternal>
                    <HStack
                      align="center"
                      spacing={1}
                      _hover={{ color: "teal.500" }}
                    >
                      <Icon
                        boxSize="30px"
                        borderRadius="md"
                        p={1}
                        as={FiExternalLink}
                        color={color}
                      />
                      <Text fontSize="sm">Live Demo</Text>
                    </HStack>
                  </Link>
                  {project.repoLink && (
                    <Link href={project.repoLink} isExternal>
                      <HStack
                        align="center"
                        spacing={1}
                        _hover={{ color: "teal.500" }}
                      >
                        <Icon
                          boxSize="30px"
                          borderRadius="md"
                          p={1}
                          as={FiGithub}
                          color={color}
                        />
                        <Text fontSize="sm">GitHub</Text>
                      </HStack>
                    </Link>
                  )}
                </Flex>
              </VStack>
            </Box>
          </Box>
        ))}
      </Grid>
    </Box>
  );
};