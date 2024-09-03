import { useState } from "react";
import { Box, Flex, Text, ChakraProvider, Image } from "@chakra-ui/react";
import { motion } from "framer-motion";

const skillsData = {
  "Front-End": [
    { imgSrc: "html-5.png" },
    { imgSrc: "css-3.png" },
    { imgSrc: "js.png" },
    { imgSrc: "react.png" },
    { imgSrc: "bootstrap.png" },
    { imgSrc: "tailwind-css.svg" },
  ],
  "Back-End": [ 
    { imgSrc: "php.png" },
    { imgSrc: "laravel.svg" },
    { imgSrc: "express-js.svg" },
    { imgSrc: "node.svg" },
  ],
  Programmation: [
    { imgSrc: "c.svg" },
    { imgSrc: "python.svg" },
  ],
  "Gestion de base de données": [
    { imgSrc: "mysql.svg" },
    { imgSrc: "mongodb.svg" },
  ],
  "Analyse et conception de systèmes": [
    { imgSrc: "Merise" },
    { imgSrc: "UML.svg" },
  ],
  "Systèmes d'exploitation": [
    { imgSrc: "Windows 11.svg" },
    { imgSrc: "Linux.svg" },
  ],
  "Contrôle de version": [
    { imgSrc: "git.png" },
    { imgSrc: "github.png" },
    ],
    "Compétences Générales": [
    { imgSrc: "Travail en équipe" },
    { imgSrc: "Communication" },
    { imgSrc: "Engagement communautaire" },
    { imgSrc: "Résolution de problème" },
  ],
};

const skillsOrder = [
  "Front-End",
  "Back-End",
  "Programmation",
  "Gestion de base de données",
  "Analyse et conception de systèmes",
  "Systèmes d'exploitation",
  "Contrôle de version",
  "Compétences Générales",
];

const Skills = () => {
  const [selectedSkill, setSelectedSkill] = useState(null);

  const radius = 250; // Radius of the circle

  return (
    <ChakraProvider>
      <Flex justify="center" align="center" minHeight="100vh" bg="white">
        <Box  position="relative" w={`${radius * 2.6}px`} h={`${radius * 2.6}px`} bg="#F5F6F7" rounded="full">
          {skillsOrder.map((skill, index) => {
            const angle = (360 / skillsOrder.length) * index;
            const radians = (angle * Math.PI) / 180;
            const x = radius * Math.cos(radians);
            const y = radius * Math.sin(radians);

            return (
              <Box
                key={skill}
                position="absolute"
                top="50%"
                left="50%"
                transform={`translate(-50%, -50%) translate(${x}px, ${y}px)`}
                onMouseEnter={() => setSelectedSkill(skill)}
                onMouseLeave={() => setSelectedSkill(null)}
                bg="white"
                p="4"
                rounded="full"
                boxShadow="md"
                cursor="pointer"
                textAlign="center"
                zIndex="1"
                width="150px"
              >
                <Text fontSize="sm" fontWeight="bold" color="Black">
                  {skill}
                </Text>
              </Box>
            );
          })}

          {selectedSkill && (
            <Flex align={'center'} justify={'center'}>

              <Box
                as={motion.div}
                position="absolute"
                top="35%"
                // left="35%"
                transform="translate(-50%, -50%)"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                textAlign="center"
                bg="white"
                p="6"
                rounded="xl"
                boxShadow="lg"
                w="auto"
                zIndex="2"
              >
                <Text fontSize="lg" fontWeight="bold" mb="4" color="Black">
                  {selectedSkill}
                </Text>
                <Flex  justify={'center'} align="center" gap={4}>
                  {skillsData[selectedSkill].map((tool, i) => (
                    <Image
                      key={i}
                      boxSize="40px"
                    src={tool.imgSrc}
                  />
                  ))}
                </Flex>
              </Box>
            </Flex>
          )}
        </Box>
      </Flex>
    </ChakraProvider>
  );
};

export default Skills;
