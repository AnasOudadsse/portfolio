import { Box, Button, Flex, Heading, Image, Text,useColorModeValue } from "@chakra-ui/react";
import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import { PiDownloadLight } from "react-icons/pi";


export const About = () => {


    const bg = useColorModeValue('white', 'black');
    const color = useColorModeValue('black', 'white');
    const buttonColor = useColorModeValue('white', 'black')
    const buttonbg = useColorModeValue('black', 'white')
    const buttonHoverBg = useColorModeValue('gray.700', 'gray.300')


    return(
        <Flex
            pos={'relative'}
            bottom={130}
            justify={'center'}
            w={'75%'}
            m={'auto'}
            bg={bg}
            h={'250px'}
            >

            <Flex 
                alignItems={'center'}
                mr={10}
            >

                <Flex
                    boxSize={230}
                    align={'center'}
                    mx={5}
>
                    <Box
                        // transform={'scale(0.5)'}
                        // boxSize={500}
                        m={5}

                        // justify={}

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