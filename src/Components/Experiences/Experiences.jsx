import { Box, Flex, Heading,useColorModeValue, Text, VStack, Image } from "@chakra-ui/react";
import experienceData from './experienceData.json'; // Adjust the path based on your project structure

const ExperienceItem = ({ logo, company, role, description, dateRange, width }) => {


  const cardbg = useColorModeValue('white', '#2C333A')
  const color = useColorModeValue('#696969', 'gray.300');
  const Datecolor = useColorModeValue('gray.700', 'gray.300');

  return (
    <Flex
    bg={cardbg}
    boxShadow="md"
    rounded="xl"
    py={10}
    px={'50px'}
    direction={["column","column","column","row"]} // Stack vertically on small screens
    justify="space-between"
    align="start"
    mb={8}
    w={["full", "80%", "80%", "80%", "60%"]}
    maxW="900px" // Ensure max width but allow flexibility on smaller screens
  >
    {/* Logo and Role Section */}
    <Box flex="1" w="full">
      <Box 
          ml={[0,0,0,5]}
          textAlign={["center","center","center", "left"]}
        order={{ base: 1, lg: 1 }}
      >
        {/* Company Logo */}
        <Image
          src={logo}
          alt={company}
          width={width}
          objectFit="contain"
          mx={{ base: "auto", lg: "0" }} // Center the logo on small screens
          mb={10}
        />
  
        {/* Role Heading */}
        <Heading
          fontSize={{ base: "18px", md: "22px" }}
          fontWeight={600}
          mt={4} // Spacing between logo and heading
          mb={4}
          ml={[0,0,0,0]}
          textAlign={["center","center","center", "left"] }
        >
          {role}
        </Heading>
      </Box>
  
      {/* Description with Bullet Points */}
      <VStack
        align={["center","center","center", "start"] }
        spacing={3}
        order={{ base: 3, lg: 3 }}
        w="full"
        ml={[0,0,0,25]}
        >
        {description.map((item, index) => (
          <Flex key={index} align="start" w="full">
            <Box color={color} transform="scale(1.2)" mr={2} as="span">
              •
            </Box>
            <Text fontSize={{ base: "sm", md: "md" }} color={color}>
              {item}
            </Text>
          </Flex>
        ))}
      </VStack>
    </Box>
  
    {/* Date Range */}
    <Text
      w="250px"
      fontSize="sm"
      fontWeight={500}
      color={Datecolor}
      textAlign={{ base: "center", lg: "right" }} // Aligns center on small, right on large screens
      mt={{ base: 7, lg: 0 }}
      alignSelf={{ base: "center", lg: "flex-start" }} // Aligns at the top right on large screens
      order={{ base: 2, lg: 2 }}
    >
      {dateRange}
    </Text>
  </Flex>
  
  );
};

const Experience = () => {

  const bg = useColorModeValue('gray.50', '#22272B');
  const color = useColorModeValue('#696969', 'gray.300');


  return (
    <Flex
      justify="center"
      align="center"
      direction="column"
      bg={bg}
      py={12}
      px={{ base: 4, md: 8 }}
      minHeight="100vh"
    >
      <VStack spacing={4} align="center" mb={8}>
        <Heading size="lg" textAlign="center">
          Experience
        </Heading>
        <Text fontSize="md" color={color}>
          Here is a quick summary of my most recent experiences:
        </Text>
      </VStack>
      
      {/* Experience List */}
      {experienceData.map((experience, index) => (
        <ExperienceItem
          width={experience.width}
          key={index}
          logo={experience.logo}
          company={experience.company}
          role={experience.role}
          dateRange={experience.dateRange}
          description={experience.description}
          // company={experience.company}
        />
      ))}
    </Flex>
  );
};

export default Experience;
