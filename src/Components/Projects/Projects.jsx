import { Box, Grid, Heading, Text,useColorModeValue, Tag, VStack, Image, Link, HStack, Icon, Flex } from "@chakra-ui/react";
import { FiExternalLink } from "react-icons/fi";
import { FiGithub } from "react-icons/fi";

const projectsData = [
  {
    title: "Blood-Nation",
    description:
      "Blood-Nation est un système complet de gestion de banque de sang conçu pour rationaliser l'enregistrement des donneurs, les demandes des hôpitaux et le suivi des stocks de sang. L'application envoie des alertes en temps réel pour les pénuries critiques, garantissant une gestion efficace des ressources. Construit avec React, Tailwind CSS, Laravel et MySQL, le système a été optimisé à la fois pour l'expérience utilisateur et la fonctionnalité, offrant une navigation fluide et un backend robuste pour gérer les données et automatiser les processus.",
    imageSrc: "BloodNationHP.png", 
    tags: ["React", "Tailwindcss", "Laravel", "MySQL","Github", "Git", 'Chakra UI', "Composer", "Sanctum"],
    externalLink: "https://example.com", 
    repoLink: "https://github.com/AnasOudadsse/BloodBankManagement",
    flexDirection: ['column', 'column', 'column','row']
  },
  {
    title: "My-Coach Landing Page",
    description:
      "My-Coach est une plateforme conçue pour connecter les utilisateurs avec des coachs personnels. J'ai développé la page d'accueil en me concentrant sur un design épuré et une fonctionnalité optimale. Construite avec React et Chakra UI, la page est entièrement responsive et présente une mise en page intuitive. De plus, j'ai mis en place un système de soumission de formulaire avec Express.js en backend pour gérer les demandes et les requêtes des utilisateurs. Ce projet met en valeur ma capacité à intégrer des technologies front-end et back-end pour des interactions utilisateur fluides.",
    imageSrc: "My-coach-Lp.png", 
    tags: ["React","Tailwindcss", "Chakra UI", "Node.js",  "Express.js", "MongoDB", "Github", "Git"],
    externalLink: "https://my-coach-online.github.io/My-Coach-Landing-Page/", 
    repoLink: "https://github.com/AnasOudadsse/myCoach",
    flexDirection: ['column', 'column', 'column','row-reverse', ]
  },
  {
    title: "X Capital (UI/UX)",
    description:
      "Un exemple de travail en UI/UX réalisé pour X Capital, axé sur la création de pages d'accueil réactives et visuellement attrayantes. Utilisant Figma, le projet met en évidence une attention particulière aux détails et un accent sur l'optimisation de l'expérience utilisateur tout en respectant les directives de la marque et les objectifs commerciaux.",
    imageSrc: "HomePage.jpg", 
    tags: ["Figma", "UI/UX Design"],
    externalLink: "https://www.figma.com/design/XIRuymUHVHqSp5IvtBRJpd/A-Sample-Of-My-Work-at-X-Capital?node-id=0-1&t=JHT48svd4058edeZ-1", 
    flexDirection: ['column', 'column', 'column','row'],
    repoLink: null 
  },
  {
    title: "My-Coach Platform (UI/UX)",
    description:
      "Ce projet est une conception UI/UX pour la plateforme My-Coach, axée sur la page des détails des coachs et le processus de réservation. Le design met l'accent sur une navigation conviviale et une grande clarté, permettant aux utilisateurs de consulter facilement les profils des coachs, de lire les avis et de réserver des sessions. L'expérience utilisateur a été soigneusement conçue pour garantir un processus de réservation fluide avec un minimum d'étapes, en maintenant l'engagement des utilisateurs et en simplifiant les interactions avec les coachs potentiels.",
    imageSrc: "Coach details reviews.jpg", 
    tags: ["Figma", "UI/UX Design"],
    externalLink: "https://www.figma.com/design/rCQecy2Kg3UGGzOzATCqBw/My-Coach-Product-Demo?node-id=0-1&t=Rz05EXeqFoEYgdvX-1", 
    flexDirection: ['column', 'column', 'column','row-reverse'],
    repoLink: null 
  },
];

export const Projects = () => {

  const bg = useColorModeValue('white', '#161A1D');
  const imgBg = useColorModeValue('gray.50', '#38414A');
  const color = useColorModeValue('black', 'white');
  const cardbg = useColorModeValue('white', '#2C333A')



  return (
    <Box id="Projects" py={16} px={{ base: 4, md: 8 }} bg={bg}>
      {/* Heading and Subtitle */}
      <VStack align="center" mb={12}>
        <Heading size="lg" mb={4}>
          Projects
        </Heading>
        <Text fontSize="lg" color={color} textAlign="center">
          Some of the noteworthy projects I have built:
        </Text>
      </VStack>

      {/* Projects Grid */}
      <Grid
        gap={10}
        w={["80%","80%","80%","75%"]} 
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
            boxShadow="md"
            overflow="hidden"
            w="100%" 
            maxW="1300px" 
            // maxH={["900px","720px","600px","430px"]}
          >
            {/* Project Image */}
            <Box  bg={imgBg} w={{ base: "100%", lg: "50%" }} h={["50%","50%","50%%",'100%']}>
              <Image 
                transform={'scale(0.8)'}
                transition="transform 0.5s ease-in-out" 
                _hover={{ transform: "scale(0.85)" }} 
                borderRadius="xl" 
                objectFit="cover"   
                objectPosition={'top'}
                src={project.imageSrc} 
                alt={project.title} 
                w="full"
                h="full" 
                maxW={"800px"}
                maxH={"500px"}
              />
            </Box>

            {/* Project Details */}
            <Box p={10} w={{ base: "100%", lg: "50%" }} h={["500px","300px","100%",'100%']}>
              <VStack align="start" spacing={4}>
                <Heading fontWeight={600} size={["sm","sm","sm","md"]} >{project.title}</Heading>
                <Text fontSize={["sm","sm","sm","md"]} color={color}>
                  {project.description}
                </Text>

                {/* Tags */}
                <HStack my={2} wrap="wrap" spacing={2}>
                  {project.tags.map((tag, i) => (
                    <Tag key={i} size={["md","md","md","lg"]} color={color} bg={imgBg}>
                      {tag}
                    </Tag>
                  ))}
                </HStack>

                {/* External Links */}
                <Flex>
                  <Link mr={2} href={project.externalLink} isExternal>
                    <HStack align="center" spacing={1}>
                      <Icon boxSize="30px" borderRadius="md" p={1} as={FiExternalLink} color={color} />
                    </HStack>
                  </Link>
                  {project.repoLink && (
                    <Link href={project.repoLink} isExternal>
                      <HStack align="center" spacing={1}>
                        <Icon boxSize="30px" borderRadius="md" p={1} as={FiGithub} color={color} />
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
