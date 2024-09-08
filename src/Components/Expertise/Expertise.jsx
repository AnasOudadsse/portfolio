import { Box, Heading, Text, Grid, Image, VStack, Flex, useColorModeValue } from "@chakra-ui/react";
import data from "./index.json";
import React from "react";

function Expertise() {

  // const { colorMode, toggleColorMode } = useColorMode();

  const bg = useColorModeValue('gray.50', '#22272B');
  const cardbg = useColorModeValue('white', '#2C333A')
  const color = useColorModeValue('#696969', 'gray.300');
  const text = useColorModeValue('#696969', 'blue.300');
  const borderBottomColor = useColorModeValue('gray.700', 'gray.300');





  return (
    <Flex align={'center'} id="Expertise" >
      <Box  px={10} pb={[100, 150, 200]} pt={[500,350,500,250,250]} bg={bg} minHeight="550px">
        {/* Title and Heading */}
        <VStack align="center" spacing={4} mb={12}>
          <Heading size="lg" textAlign="center">
            Expertise
          </Heading>
          <Text fontSize="lg" color={color} textAlign="center" maxW="600px">
            Here is a quick overview of my core skills and expertise:
          </Text>
        </VStack>

        {/* Skills Cards Grid */}
        <Grid
          templateColumns={{ base: "1fr", md : "repeat(2, 1fr)",  sm: "repeat(1, 1fr)", lg: "repeat(4, 1fr)" }}
          gap={8}
          justifyContent="center"
          
        >
          {data?.skills?.map((item, index) => (
            <Box
              key={index}
              bg={cardbg}
              borderRadius="md"
              p={10}
              boxShadow="md"
              transition="transform 0.3s ease"
              _hover={{
                transform: "translateY(-10px)", // Add a subtle lift on hover
                borderBottom: "4px solid",
                borderBottomColor: borderBottomColor,
              }}
            >
              <VStack align="center" spacing={4}>
                {/* Icon/Image */}
                <Box
                  p={3}
                  bg="gray.100"
                  borderRadius="full"
                  boxShadow="sm"
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  w="60px"
                  h="60px"
                  mb={3}
                >
                  <Image textAlign={'center'} src={item.src} alt={item.title} boxSize="40px" />
                </Box>

                {/* Card Content */}
                <VStack align="center" textAlign={'center'} spacing={2}>
                  <Heading mb={5}  size="md" fontWeight="bold">
                    {item.title}
                  </Heading>
                  <Text fontSize="sm" color={color} _hover={{ color: text }}>
                    {item.description}
                  </Text>
                </VStack>
              </VStack>
            </Box>
          ))}
        </Grid>
      </Box>

    </Flex>
  );
}

export default Expertise;
