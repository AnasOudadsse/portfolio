import { Box, Button, Flex, Heading,keyframes , Image, Text,useColorModeValue } from "@chakra-ui/react";
import React , {useEffect, useRef, useState } from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import { PiDownloadLight } from "react-icons/pi";


export const About = () => {

    // Define the fade-in keyframes for the animation
    const fadeIn = keyframes`
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
    `;


    const bg = useColorModeValue('#F5F6F7', 'black');
    const color = useColorModeValue('black', 'white');
    const buttonColor = useColorModeValue('white', 'black')
    const buttonbg = useColorModeValue('black', 'white')
    const buttonHoverBg = useColorModeValue('gray.700', 'gray.300')

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
          threshold: 0.5, // Trigger when 10% of the component is visible
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

    return(
        <Flex
            pos={'relative'}
            bottom={130}
            justify={'center'}
            w={'75%'}
            m={'auto'}
            h={'250px'}
            ref={ref}
            visibility={isInView ? 'visible' : 'hidden'} // Hidden before it comes into view
            opacity={isInView ? 1 : 0} // Start hidden
            animation={isInView ? `${fadeIn} 1s ease-out forwards` : 'none'}



            >

            <Flex 
                alignItems={'center'}
                px={10}
                borderRadius={10}
                boxShadow={'lg'}
                bg={bg}
                pos={'relative'}
                top={50}

            >

                <Flex
                    boxSize={220}
                    align={'center'}>
                    <Box
                        m={5}

                    >
                        <Image 
                            borderRadius={'full'}
                            src="myPic-croped.jpg"
                        />
                    </Box>
                </Flex>

                <Box w={'550px'}>
                    <Heading
                        fontSize={'27px'}
                        mb={4}
                    >
                        Full-Stack Developer & UI/UX Designer.
                    </Heading>
                    <Text
                        fontSize={'15px'}
                    >
                    A skilled Full-Stack Developer and UI/UX Designer proficient in React.js, Laravel, Tailwind CSS, and Figma, delivering responsive web solutions with a focus on agile development and continuous improvement.                    </Text>
                </Box>

                <Flex
                    alignItems={'center'}
                >
                    <Box
                        my={10}
                        ml={5}


                    >
                        <Flex align={'center'} >
                            <Button
                                fontSize={'14px'}
                                w={'175px'}
                                bg={buttonbg}
                                color={buttonColor}
                                _hover={{bg :buttonHoverBg}}
                            >
                                Request Quotation
                            <IoIosArrowRoundForward style={{marginLeft: '5px'}} />
                            </Button>
                        </Flex>

                        <Flex align={'center'} >
                            <Button 
                                fontSize={'14px'}
                                w={'175px'}
                                bg={buttonbg}
                                color={buttonColor}
                                _hover={{bg : buttonHoverBg}}
                                mt={2}
                                >
                            <PiDownloadLight style={{marginRight: '10px'}} />
                                Download CV
                            </Button>
                        </Flex>
                    </Box>
                </Flex>



            </Flex>


        </Flex>
    )
    }