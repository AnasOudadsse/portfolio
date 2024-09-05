import { Box, Flex, Heading, Text, VStack, Image } from "@chakra-ui/react";
import experienceData from './experienceData.json'; // Adjust the path based on your project structure

const ExperienceItem = ({ logo, company, role, description, dateRange, width }) => {
  return (
    <Flex
      bg="white"
      boxShadow="md"
      rounded="xl"
      p={6}
      align={{ base: "flex-start", lg: "center" }}
      direction={{ base: "column", lg: "row" }} // Stack vertically on small screens
      justify="space-between"
      mb={8}
      w={["full","80%","80%", "full"]}
      maxW="900px" // Ensure max width but allow flexibility on smaller screens
    >
      {/* Logo and Role Section */}
      <Flex align="start"  w="full" flexDirection={{ base: "column", lg: "row" }}>
        {/* Company Logo */}
        <Box mr={4}
            flexShrink={0} 
            flexBasis={{lg: "200px", md : "30px" }} 
            order={{ base: 1, lg: 1 }} 
            mb={[5,5,5,0]}
            >
          <Image
            src={logo}
            alt={company}
            width={width}
            objectFit="contain"
          />
        </Box>

        {/* Date Range */}
        <Text
          order={{ base: 2, xl:3, lg: 3 , md : 2, }} // The order should change based on the screen size 
          w={"250px"} 
          fontSize="sm" 
          color="gray.500" 
          alignSelf={'start'} 
          // textAlign="right" 
          mt={{ base: 2, lg: 0 }} >
          {dateRange}
        </Text>
        
        {/* Role and Description */}
        <Box 
          order={{ base: 3, xl:2, lg: 2, md: 3 }} 
          w={["full"]}
          
          >

          <Heading fontSize={{ base: "18px", md: "22px" }} fontWeight={600} my={3} ml={7}>
            {role}
          </Heading>
          <VStack align="start">
            {description.map((item, index) => (
              <Flex key={index} align="start" mb={2}>
                <Box color="gray.700"  transform={'scale(1.2)'} mr={5} as="span">
                  •
                </Box>
                <Text fontSize={{ base: "sm", md: "md" }} color="gray.700">
                  {item}
                </Text>
              </Flex>
            ))}
          </VStack>
        </Box>
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
        <Text fontSize="md" color="gray.500">
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
        />
      ))}
    </Flex>
  );
};

export default Experience;
