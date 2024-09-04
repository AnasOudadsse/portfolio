import { Box, Heading, Text, Grid, Image, VStack } from "@chakra-ui/react";
import data from "./index.json";
import React from 'react';

function Expertise() {
  return (
    <Box py={250} px={8} bg={'gray.50'} mt={-200}   height={'800px'}>
      {/* Title and Heading */}
      <VStack align="center" spacing={6} mb={12}>
        <Heading size="lg">
          Expertise
        </Heading>
        <Text fontSize="lg" color="gray.500">Here is a quick overview of my core skills and expertise:</Text>
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
            p={8}
            _hover={{ borderBottom: "4px solid", borderBottomColor: "black" }}
          >
            <VStack align="flex-start" spacing={6}>
              {/* Icon/Image */}
              <Box
                p={4}
                bg="gray.50"
                borderRadius="md"
                boxShadow="md"
                display="flex"
                justifyContent="center"
                alignItems="center"
                boxSize={'60px'}
              >
                <Image src={item.src} alt={item.title} boxSize="50px" />
              </Box>

              {/* Card Content */}
              <VStack align="flex-start" spacing={4}>
                <Heading size="md" fontWeight="bold">
                  {item.title}
                </Heading>
                <Text
                  fontSize="md"
                  color="gray.600"
                  _hover={{ color: "blue.600" }}
                >
                  {item.description}
                </Text>
              </VStack>
            </VStack>
          </Box>
        ))}
      </Grid>
    </Box>
  );
}

export default Expertise;
