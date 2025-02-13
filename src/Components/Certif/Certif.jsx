import {
    Box,
    Button,
    Flex,
    Heading,
    Image,
    Text,
    Badge,
    Icon,
    Tag,
    useColorModeValue,
    VStack,
    useBreakpointValue,
  } from "@chakra-ui/react";
  import { FiExternalLink } from "react-icons/fi";
  import { motion } from "framer-motion";
  import { useState } from "react";
  
  const MotionBox = motion(Box);
  
  const CertifData = [
    {
      title: "ALX Ventures Founder Academy",
      date: "24th July 2024",
      completionDate: "30th June 2024",
      issuer: "ALX & Mastercard Foundation",
      description: "For completing the ALX Ventures Founder Academy course and graduation requirements in 2024.",
      credentials: "https://intranet.alxswe.com/certificates/2CyBRCJmep",
      skills: ["Entrepreneurship", "Business Strategy", "Leadership"],
      image: "alx-certif.png",
    },
    {
      title: "Programming with JavaScript",
      date: "22 December 2023",
      issuer: "Meta & Coursera",
      description: "An online non-credit course authorized by Meta and offered through Coursera.",
      credentials: "https://coursera.org/verify/RB3VERHZ5NUN",
      skills: ["JavaScript", "ES6+", "Functions"],
      image: "js-certif.png",
    },
    {
      title: "React Basics",
      date: "24 December 2023",
      issuer: "Meta & Coursera",
      description: "An online non-credit course authorized by Meta and offered through Coursera.",
      credentials: "https://coursera.org/verify/4SYCFES8XCL5",
      skills: ["React", "JSX", "State Management"],
      image: "React-certif.png",
    },
    {
      title: "Version Control",
      date: "25 December 2023",
      issuer: "Meta & Coursera",
      description: "An online non-credit course authorized by Meta and offered through Coursera.",
      credentials: "https://coursera.org/verify/P58AGWZ4DRZ6",
      skills: ["Git", "GitHub", "Version Control"],
      image: "git-certif.png",
    },
  ];
  
  export const Certif = () => {
    const bg = useColorModeValue("gray.50", "#22272B");
    const color = useColorModeValue("black", "white");
    const cardbg = useColorModeValue("white", "#2C333A");
    const buttonColor = useColorModeValue("white", "black");
    const buttonBg = useColorModeValue("black", "white");
    const buttonHoverBg = useColorModeValue("gray.700", "gray.300");
  
    const [flippedCards, setFlippedCards] = useState(Array(CertifData.length).fill(false));
  
    const handleMouseEnter = (index) => {
      const newFlippedState = [...flippedCards];
      newFlippedState[index] = true;
      setFlippedCards(newFlippedState);
    };
  
    const handleMouseLeave = (index) => {
      const newFlippedState = [...flippedCards];
      newFlippedState[index] = false;
      setFlippedCards(newFlippedState);
    };
  
    // Responsive values
    const cardWidth = useBreakpointValue({ base: "300px", sm: "350px", md: "400px", lg: "450px" });
    const cardHeight = useBreakpointValue({ base: "200px", sm: "250px", md: "280px", lg: "300px" });
    const headingSize = useBreakpointValue({ base: "md", md: "lg" });
  
    return (
      <Box minH="100vh" bg={bg} py={21}>
        <VStack align="center" mt={14}>
          <Heading size={headingSize} mb={4}>
            My Certifications
          </Heading>
        </VStack>
  
        <Flex wrap="wrap" justify="center" align="center" gap={6} mt={10} px={4}>
          {CertifData.map((certif, index) => (
            <Box
              key={index}
              width={cardWidth}
              height={cardHeight}
              style={{
                perspective: "1200px",
              }}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave(index)}
            >
              <MotionBox
                position="relative"
                width="full"
                height="full"
                style={{
                  transformStyle: "preserve-3d",
                }}
                animate={{ rotateY: flippedCards[index] ? 180 : 0 }}
                transition={{ duration: 1 }}
              >
                {/* Front Side - Certificate Image */}
                <Box
                  position="absolute"
                  width="full"
                  height="full"
                  bg={cardbg}
                  shadow="lg"
                  rounded="xl"
                  border="2px solid gray"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  overflow="hidden"
                  p={0.1}
                  style={{ backfaceVisibility: "hidden" }}
                >
                  <Image
                    src={certif.image}
                    alt="Certificate"
                    objectFit="cover"
                    objectPosition="left"
                    width="100%"
                    height="100%"
                    fallbackSrc="https://via.placeholder.com/400x250"
                  />
                </Box>
  
                {/* Back Side - Certification Details */}
                <Box
                    position="absolute"
                    width="full"
                    height="full"
                    bg={cardbg}
                    shadow="lg"
                    rounded="xl"
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    justifyContent="flex-start" // Changed to flex-start to align content from the top
                    textAlign="center"
                    p={{ base: 2, md: 4 }} // Reduced padding on mobile
                    overflowY="auto" // Enable vertical scrolling if content overflows
                    style={{
                        backfaceVisibility: "hidden",
                        transform: "rotateY(180deg)",
                    }}
                    >
                    <Heading as="h3" fontSize={{ base: "sm", md: "lg" }} fontWeight="bold" color={color}>
                        {certif.title}
                    </Heading>
                    <Text fontSize={{ base: "xs", md: "sm" }} color="gray.500" mt={1}>
                        Issuer: {certif.issuer}
                    </Text>
                    <Text fontSize={{ base: "xs", md: "xs" }} color="gray.400" mt={1}>
                        Date of Issue: {certif.date}
                    </Text>
                    <Text fontSize={{ base: "xs", md: "md" }} color={color} mt={2} px={2}>
                        {certif.description}
                    </Text>

                    <Badge px={2} py={1} rounded="md" fontSize="xs" fontWeight="semibold" colorScheme="blue" mt={2}>
                        Skills
                    </Badge>

                    <Flex wrap="wrap" overflowWrap={2} mt={1} justify="center">
                        {certif.skills &&
                        certif.skills.map((skill, skillIndex) => (
                            <Tag
                            key={skillIndex}
                            bg={bg}
                            color={color}
                            m={0.5} // Reduced margin on mobile
                            px={2}
                            py={1}
                            rounded="md"
                            fontSize="xs"
                            >
                            {skill}
                            </Tag>
                        ))}
                    </Flex>

                    <Button
                        size={'50'}
                        as="a"
                        href={certif.credentials}
                        target="_blank"
                        mt={5} // Reduced margin on mobile
                        px={3}
                        py={2} // Reduced padding on mobile
                        bg={buttonBg}
                        color={buttonColor}
                        fontWeight="semibold"
                        rounded="lg"
                        shadow="md"
                        _hover={{ bg: buttonHoverBg }}
                        _focus={{ outline: "none" }}
                        transition="all 0.3s ease-in-out"
                        fontSize="sm"
                    >
                        View Certificate
                        <Icon ml={2} as={FiExternalLink} />
                    </Button>
                    </Box>
              </MotionBox>
            </Box>
          ))}
        </Flex>
      </Box>
    );
  };