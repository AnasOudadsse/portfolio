import { Box, Flex, Heading, Text, VStack, SimpleGrid, Image, ChakraProvider } from "@chakra-ui/react";
import { motion } from "framer-motion";

const skillsData = [
  {
    category: "Frontend",
    skills: [
      { name: "HTML5", imgSrc: "html-5.png" },
      { name: "CSS3", imgSrc: "css-3.png" },
      { name: "Javascript", imgSrc: "js.png" },
      { name: "React.js", imgSrc: "react.png" },
      { name: "Bootstrap", imgSrc: "bootstrap.png" },
      { name: "Tailwind Css", imgSrc: "tailwind-css.svg" },
      { name: "PHP", imgSrc: "php.png" },
      { name: "Laravel", imgSrc: "laravel.svg" },
      { name: "Express.js", imgSrc: "express-js.svg" },
      { name: "Nodejs", imgSrc: "node.svg" },
      { name: "MySQL", imgSrc: "mysql.svg" },
      { name: "MongoDB", imgSrc: "mongodb.svg" },
      { name: "C", imgSrc: "c.svg" },
      { name: "Python", imgSrc: "python.svg" },
      { name: "Git", imgSrc: "git.png" },
      { name: "Github", imgSrc: "github.png" },
      { name: "Linux", imgSrc: "Linux.svg" },
      { name: "UML", imgSrc: "UML.svg" },
      { name: "Figma", imgSrc: "icon-figma.svg" },
    ],
  },
];

const Skills = () => {
  return (
    <ChakraProvider>
      <Box
        as={motion.div}
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { scale: 0.8, opacity: 0 },
          visible: { scale: 1, opacity: 1, transition: { delay: 0.5 } },
        }}
        w="full"
        py={81}
        px={8}
      >
        <VStack spacing={4} align="center" mb={8}>
          <Heading size="lg" textAlign="center">
            Skills
          </Heading>
          <Text fontSize="md" color="gray.500">
            Here is a quick summary of skills:
          </Text>
        </VStack>

        {skillsData.map((section, index) => (
          <VStack key={index} spacing={6} mb={10} w="full">


            <SimpleGrid
              columns={{ base: 3, sm: 5, md: 7, lg: 9 }} // Define columns per breakpoint
              spacing={10} // Space between items
              justifyItems="center" // Center the items horizontally
              w="full"
            >
              {section.skills.map((skill, i) => (
                <VStack key={i} align="center" spacing={4}>
                  <Image 
                    src={skill.imgSrc} 
                    w={10} 
                    h={10} 
                    mb={2}
                    transition="transform 0.3s ease-in-out" 
                    _hover={{ transform: "scale(1.2)" }} 
                    />
                  <Text color="gray.600" fontSize="lg" fontWeight={400}>
                    {skill.name}
                  </Text>
                </VStack>
              ))}
            </SimpleGrid>
          </VStack>
        ))}
      </Box>
    </ChakraProvider>
  );
};

export default Skills;
