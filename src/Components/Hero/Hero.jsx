import React from 'react';
import { Flex, Text, Image, Box, keyframes } from '@chakra-ui/react';

// Define the keyframes for the border animation
const borderAnimation = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;
export const Hero = () => {

    return (

    <Flex align="center">
    <Text w={'65%'}>
      A skilled Full-Stack Developer and UI/UX Designer proficient in React.js, Laravel, Tailwind CSS, and Figma, delivering responsive web solutions with a focus on agile development and continuous improvement.
    </Text>

    {/* Frame around the image with animated border */}
    <Box
      w="20%"
      h="20%"
      position="relative"
      display="flex"
      alignItems="center"
      justifyContent="center"
      borderRadius="full"
      p={2}
      _before={{
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        borderRadius: 'full',
        border: '4px solid teal',
        animation: `${borderAnimation} 5s infinite linear`,
      }}
    >
      <Image
        w="full"
        h="full"
        src='AnasProfessionalPicWhiteBg-cp.png'
        borderRadius="full"
        zIndex={1} // Ensures the image stays above the animated border
      />
    </Box>
  </Flex>
);
}