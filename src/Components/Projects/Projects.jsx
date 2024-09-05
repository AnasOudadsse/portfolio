import { Box, Grid, Heading, Text, Tag, VStack, Image, Link, HStack, Icon, Flex } from "@chakra-ui/react";
import { FiExternalLink } from "react-icons/fi";
import { FiGithub } from "react-icons/fi";

const projectsData = [
  {
    title: "Blood-Nation",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
    imageSrc: "BloodNationHP.png", 
    tags: ["React", "Tailwindcss", "Figma", "Laravel", "MySQL", "Git"],
    externalLink: "https://example.com", 
    repoLink: "https://github.com/AnasOudadsse/BloodBankManagement",
    flexDirection: ['column', 'column','row']
  },
  {
    title: "My-coach",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
    imageSrc: "My-coach-Lp.png", 
    tags: ["React","Styled Components", "Tailwindcss", "Figma", "Laravel", "MySQL", "Git"],
    externalLink: "https://my-coach-online.github.io/My-Coach-Landing-Page/", 
    repoLink: "https://github.com/AnasOudadsse/myCoach",
    flexDirection: ['column', 'column','row-reverse', ]
  },
  {
    title: "X Capital UI/UX",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
    imageSrc: "HomePage.jpg", 
    tags: ["React","Styled Components", "Tailwindcss", "Figma", "Laravel", "MySQL", "Git"],
    externalLink: "https://www.figma.com/design/XIRuymUHVHqSp5IvtBRJpd/A-Sample-Of-My-Work-at-X-Capital?node-id=0-1&t=JHT48svd4058edeZ-1", 
    flexDirection: ['column', 'column','row'],
    repoLink: null // No GitHub link, so GitHub icon should not display
  },
  {
    title: "X Capital UI/UX",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
    imageSrc: "Coach details reviews.jpg", 
    tags: ["React","Styled Components", "Tailwindcss", "Figma", "Laravel", "MySQL", "Git"],
    externalLink: "https://www.figma.com/design/rCQecy2Kg3UGGzOzATCqBw/My-Coach-Product-Demo?node-id=0-1&t=Rz05EXeqFoEYgdvX-1", 
    flexDirection: ['column', 'column','row-reverse'],
    repoLink: null // No GitHub link
  },
];

export const Projects = () => {
  return (
    <Box py={16} px={{ base: 4, md: 8 }} bg="white">
      {/* Heading and Subtitle */}
      <VStack align="center" mb={12}>
        <Heading size="lg" mb={4}>
          Projects
        </Heading>
        <Text fontSize="lg" color="gray.500" textAlign="center">
          Some of the noteworthy projects I have built:
        </Text>
      </VStack>

      {/* Projects Grid */}
      <Grid
        gap={10}
        w={{ base: "100%", md: "80%" }} 
        mx="auto"
        justifyContent="center" 
      >
        {projectsData.map((project, index) => (
          <Box
            key={index}
            display="flex"
            justifySelf="center"
            
            flexDirection={project.flexDirection}
            bg="white"
            borderRadius="lg"
            boxShadow="md"
            overflow="hidden"
            w="100%" 
            maxW="1300px" 
            maxH={["800px","700px","800px","400px"]}
          >
            {/* Project Image */}
            <Box  bg="#F5F6F7" w={{ base: "100%", lg: "50%" }} h={["50%","50%","100%",'100%']}>
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
                // maxW={"1000px"}
                // maxH={"00px"}
              />
            </Box>

            {/* Project Details */}
            <Box p={10} w={{ base: "100%", lg: "50%" }}>
              <VStack align="start" spacing={4}>
                <Heading fontWeight={600} size="md">{project.title}</Heading>
                <Text fontSize="md" color="gray.600">
                  {project.description}
                </Text>

                {/* Tags */}
                <HStack my={2} wrap="wrap" spacing={2}>
                  {project.tags.map((tag, i) => (
                    <Tag key={i} size="lg" color="gray.600" bg="#F5F6F7">
                      {tag}
                    </Tag>
                  ))}
                </HStack>

                {/* External Links */}
                <Flex>
                  <Link mr={2} href={project.externalLink} isExternal>
                    <HStack align="center" spacing={1}>
                      <Icon boxSize="30px" borderRadius="md" p={1} as={FiExternalLink} color="gray.700" />
                    </HStack>
                  </Link>
                  {project.repoLink && (
                    <Link href={project.repoLink} isExternal>
                      <HStack align="center" spacing={1}>
                        <Icon boxSize="30px" borderRadius="md" p={1} as={FiGithub} color="gray.700" />
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
