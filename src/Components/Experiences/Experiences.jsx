import { Box, Flex, Heading, Text, VStack, Image } from "@chakra-ui/react";
import experienceData from './experienceData.json'; // Adjust the path based on your project structure

const ExperienceItem = ({ logo, company, role, description, dateRange, width }) => {
  return (
    <Flex
      direction={{ base: "column", md: "row" }}
      bg="white"
      boxShadow="md"
      rounded="lg"
      p={6}
      align="center"
      justify="space-between"
      w="60%"
      mb={8}
    >

      <Flex p={2} align="center" mb={{ base: 4, md: 0 }}>
        <Image src={logo} alt={company} w={width} mr={4} />
        <Box>
            <Heading size="md" fontWeight="bold" my={5}>
                {role}
            </Heading>
            <VStack align="start">
            {description.map((item, index) => (
                <Text key={index} fontSize="sm" color="gray.700">
                • {item}
            </Text>
            ))}
            </VStack>
        </Box>
      <Text fontSize="sm" color="gray.500" mb={4} textAlign={{ base: "center", md: "right" }}>
        {dateRange}
      </Text>
        </Flex>
    </Flex>
  );
};

const Experience = () => {
  return (
    <Flex
      justify="center"
      align="center"
      direction="column"
      bg="gray.50"
      py={12}
      px={{ base: 4, md: 8 }}
      minHeight="100vh"
    >
      <VStack spacing={4} align="center" mb={8}>
        <Heading size="lg" textAlign="center">
          Experience
        </Heading>
        <Text fontSize="md" color="gray.500" textAlign="center">
          Here is a quick summary of my most recent experiences:
        </Text>
      </VStack>
      {experienceData.map((experience, index) => (
        <ExperienceItem
          width={experience.width}
          key={index}
          logo={experience.logo}
          company={experience.company}
          role={experience.role}
          dateRange={experience.dateRange}
          description={experience.description}
        />
      ))}
    </Flex>
  );
};

export default Experience;
