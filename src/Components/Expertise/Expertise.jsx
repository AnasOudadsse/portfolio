import { Box, Heading, Text, Grid, Image, VStack, Flex } from "@chakra-ui/react";
import data from "./index.json";
import React from "react";

function Expertise() {
  return (
    <Flex align={'center'}>
      <Box  py={{ base: 20, md: 28 }} px={{ base: 4, md: 8 }} bg="gray.50" minHeight="550px">
        {/* Title and Heading */}
        <VStack align="center" spacing={4} mb={12}>
          <Heading size="lg" textAlign="center">
            Expertise
          </Heading>
          <Text fontSize="lg" color="gray.500" textAlign="center" maxW="600px">
            Here is a quick overview of my core skills and expertise:
          </Text>
        </VStack>

        {/* Skills Cards Grid */}
        <Grid
          templateColumns={{ base: "1fr", sm: "repeat(2, 1fr)", lg: "repeat(4, 1fr)" }}
          gap={8}
          justifyContent="center"
          
        >
          {data?.skills?.map((item, index) => (
            <Box
              key={index}
              bg="white"
              borderRadius="md"
              p={10}
              boxShadow="md"
              transition="transform 0.3s ease"
              _hover={{
                transform: "translateY(-10px)", // Add a subtle lift on hover
                borderBottom: "4px solid",
                borderBottomColor: "black",
              }}
            >
              <VStack align="flex-start" spacing={4}>
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
                >
                  <Image src={item.src} alt={item.title} boxSize="40px" />
                </Box>

                {/* Card Content */}
                <VStack align="flex-start" spacing={2}>
                  <Heading size="md" fontWeight="bold">
                    {item.title}
                  </Heading>
                  <Text fontSize="sm" color="gray.600" _hover={{ color: "blue.600" }}>
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
