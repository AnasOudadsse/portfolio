import { Box, Button, Flex, Heading, keyframes, Image, Text, useColorModeValue } from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import { PiDownloadLight } from "react-icons/pi";

export const About = () => {
  const fadeIn = keyframes`
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  `;

  const bg = useColorModeValue('#F5F6F7', 'black');
  const color = useColorModeValue('black', 'white');
  const buttonColor = useColorModeValue('white', 'black');
  const buttonbg = useColorModeValue('black', 'white');
  const buttonHoverBg = useColorModeValue('gray.700', 'gray.300');

  const [isInView, setIsInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsInView(true);
          observer.unobserve(ref.current); // Stop observing once it's in view
        }
      },
      {
        threshold: 0.5, // Trigger when 50% of the component is visible
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <Flex
      pos={'relative'}
      bottom={{ base: 0, lg: 130 }}
      justify={'center'}
      w={['75%', '80%', "60%"]}
      m={'auto'}
      h={'auto'} // Adjust height to auto for better responsiveness
      ref={ref}
      visibility={isInView ? 'visible' : 'hidden'}
      opacity={isInView ? 1 : 0}
      animation={isInView ? `${fadeIn} 1s ease-out forwards` : 'none'}
    >
      <Flex
        alignItems={'center'}
        px={{ base: 4, md: 8, lg: 10 }}
        borderRadius={10}
        boxShadow={'lg'}
        bg={bg}
        direction={{ base: 'column', lg: 'row' }} // Stacks vertically on small screens
        pos={'relative'}
        top={{ base: 0, lg: 50 }}
        w={['75%', '100%', "100%"]}
        p={5}
      >
        {/* Image Section */}
        <Flex boxSize={{ base: 150, md: 220 }} align={'center'} justifyContent={'center'}>
          <Box m={5}>
            <Image borderRadius={'full'} src="myPic-croped.jpg" alt="Profile Picture" />
          </Box>
        </Flex>

        {/* Text Section */}
        <Box w={{ base: '100%', lg: '550px' }} textAlign={{ base: 'center', lg: 'left' }} mt={{ base: 4, lg: 0 }}>
          <Heading fontSize={{ base: '22px', md: '27px' }} mb={4}>
            Full-Stack Developer & UI/UX Designer.
          </Heading>
          <Text fontSize={{ base: '14px', md: '15px' }} mb={4}>
            A skilled Full-Stack Developer and UI/UX Designer proficient in React.js, Laravel, Tailwind CSS, and Figma,
            delivering responsive web solutions with a focus on agile development and continuous improvement.
          </Text>
        </Box>

        {/* Buttons Section */}
        <Flex alignItems={'center'} mt={{ base: 4, lg: 0 }} flexDirection={{ base: 'column', lg: 'row' }}>
          <Box my={10} ml={{ base: 0, lg: 5 }}>
            <Flex align={'center'} mb={2}>
              <Button
                fontSize={{ base: '12px', md: '14px' }}
                w={{ base: '150px', md: '175px' }}
                bg={buttonbg}
                color={buttonColor}
                _hover={{ bg: buttonHoverBg }}
              >
                Request Quotation
                <IoIosArrowRoundForward style={{ marginLeft: '5px' }} />
              </Button>
            </Flex>

            <Flex align={'center'}>
              <Button
                fontSize={{ base: '12px', md: '14px' }}
                w={{ base: '150px', md: '175px' }}
                bg={buttonbg}
                color={buttonColor}
                _hover={{ bg: buttonHoverBg }}
                mt={2}
              >
                <PiDownloadLight style={{ marginRight: '10px' }} />
                Download CV
              </Button>
            </Flex>
          </Box>
        </Flex>
      </Flex>
    </Flex>
  );
};
