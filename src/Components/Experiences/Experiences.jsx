import { Box, Flex, Heading, Text, VStack, Image } from "@chakra-ui/react";
import experienceData from './experienceData.json'; // Adjust the path based on your project structure

const ExperienceItem = ({ logo, company, role, description, dateRange, width }) => {
  return (
<Flex
  bg="white"
  boxShadow="md"
  rounded="lg"
  p={8}
  align="center"
  justify="space-between"
  mb={8}
  w="900px"
>
  <Flex align="start">
    <Box mr={4} flexShrink={0} flexBasis="200px">
      <Image
        src={logo}
        alt={company}
        width={width}
        objectFit="contain"
      />
    </Box>
    <Box w="500px">
      <Heading fontSize={'22px'} fontWeight={600} my={3}>
        {role}
      </Heading>
      <VStack align="start">
        {description.map((item, index) => (
          <Text key={index} fontSize="md" color="gray.700">
            • {item}
          </Text>
        ))}
      </VStack>
    </Box>
  </Flex>

  <Text fontSize="sm" color="gray.500" textAlign='right' alignSelf={'start'}  mt={4}>
    {dateRange}
  </Text>
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
          <Text fontSize="md" color="gray.500">
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
