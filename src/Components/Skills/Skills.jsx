import { Box, Flex, Heading, Text, VStack, SimpleGrid, imgSrc, ChakraProvider, Image, Badge } from "@chakra-ui/react";
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
  // {
  //   category: "Backend",
  //   skills: [
  //     { name: "PHP", imgSrc: "php.png" },
  //     { name: "Laravel", imgSrc: "laravel.svg" },
  //     { name: "Express.js", imgSrc: "express-js.svg" },
  //     { name: "Nodejs", imgSrc: "node.svg" },
  //   ],
  // },
  // {
  //   category: "Base de données", 
  //   skills: [
  //     { name: "MySQL", imgSrc: "mysql.svg" },
  //     { name: "MongoDB", imgSrc: "mongodb.svg" },
  //   ],
  // },
  // {
  //   category: "Programmation",
  //   skills: [
  //     { name: "C", imgSrc: "c.svg" },
  //     { name: "Python", imgSrc: "python.svg" },
  //     // { name: "Pandas", imgSrc: SiPandas },
  //   ],
  // },

];

const Skills = () => {
  return (
    <ChakraProvider>
      <Box as={motion.div} initial="hidden" animate="visible" variants={{
        hidden: { scale: 0.8, opacity: 0 },
        visible: { scale: 1, opacity: 1, transition: { delay: 0.5 } },
      }} w="full" py="12" px="6">
      <VStack spacing={4} align="center" mb={8}>
        <Heading size="lg" textAlign="center">
          Skills
        </Heading>
          <Text fontSize="md" color="gray.500">
            Here is a quick summary of skills:
          </Text>
      </VStack>


        {skillsData.map((section, index) => (
          <VStack key={index} spacing="4" mb="10"  transform={'scale(1)'} > 
              {/* <Badge               
                colorScheme="blue"
                fontSize="0.8em"
                p={2}
                // mr={10}
                borderRadius="md"
                zIndex={2}
              >

                {section.category}
              </Badge> */}
            <Flex p="8" rounded="2xl"  align={'center'}>

              <SimpleGrid display={'flex'} spacing="58" flexWrap={'wrap'} justifyContent={'space-around'} mx={20}  >
                {section.skills.map((skill, i) => (
                  <Flex key={i} direction="column" align="center" fontWeight="bold">
                      <Image src={skill.imgSrc} w={10} h={10} mb="5" />
                    <Text color={'gray.600'} fontSize="lg" fontWeight={400}>{skill.name}</Text>
                  </Flex>
                ))}
              </SimpleGrid>

            </Flex>
          </VStack>
        ))}
      </Box>
    </ChakraProvider>
  );
};

export default Skills;
