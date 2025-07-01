"use client";

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
  VStack,
  useBreakpointValue,
} from "@chakra-ui/react";
import { FiExternalLink } from "react-icons/fi";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useLanguage } from "@/context/language-context";
import { useTheme } from "../theme-provider/theme-provider";

const MotionBox = motion(Box);

const CertifData = [
  {
    title: {
      en: "Programming with JavaScript",
      fr: "Programmation avec JavaScript",
    },
    date: "22 December 2023",
    issuer: {
      en: "Meta & Coursera",
      fr: "Meta & Coursera",
    },
    description: {
      en: "An online non-credit course authorized by Meta and offered through Coursera.",
      fr: "Un cours en ligne sans crédit autorisé par Meta et proposé via Coursera.",
    },
    credentials: "https://coursera.org/verify/RB3VERHZ5NUN",
    skills: ["JavaScript", "ES6+", "Functions"],
    image: "/js-certif.png",
  },
  {
    title: {
      en: "ALX Ventures Founder Academy",
      fr: "ALX Ventures Founder Academy",
    },
    date: "24th July 2024",
    completionDate: "30th June 2024",
    issuer: {
      en: "ALX & Mastercard Foundation",
      fr: "ALX & Fondation Mastercard",
    },
    description: {
      en: "For completing the ALX Ventures Founder Academy course and graduation requirements in 2024.",
      fr: "Pour avoir complété le cours ALX Ventures Founder Academy et les exigences d'obtention du diplôme en 2024.",
    },
    credentials: "https://intranet.alxswe.com/certificates/2CyBRCJmep",
    skills: ["Entrepreneurship", "Business Strategy", "Leadership"],
    image: "/alx-certif.png",
  },
  {
    title: {
      en: "React Basics",
      fr: "Fondamentaux de React",
    },
    date: "24 December 2023",
    issuer: {
      en: "Meta & Coursera",
      fr: "Meta & Coursera",
    },
    description: {
      en: "An online non-credit course authorized by Meta and offered through Coursera.",
      fr: "Un cours en ligne sans crédit autorisé par Meta et proposé via Coursera.",
    },
    credentials: "https://coursera.org/verify/4SYCFES8XCL5",
    skills: ["React", "JSX", "State Management"],
    image: "/React-certif.png",
  },
  {
    title: {
      en: "Software Engineering",
      fr: "Ingénierie Logicielle",
    },
    date: "15 November 2024",
    issuer: {
      en: "ALX & Holberton School",
      fr: "ALX & École Holberton",
    },
    description: {
      en: "This certificate is awarded for successfully completing the 12-month ALX Software Engineering Programme with a specialization in Back-end development.",
      fr: "Ce certificat est décerné pour avoir réussi le programme d'ingénierie logicielle ALX de 12 mois avec une spécialisation en développement Back-end.",
    },
    credentials: "https://intranet.alxswe.com/certificates/T2CRES7nmF",
    skills: [
      "Back-end Development",
      "Software Engineering",
      "Programming",
      "Data Structures & Algorithms",
      "Database Management",
      "API Development",
      "System Design",
      "Debugging & Problem-Solving",
      "Version Control (Git & GitHub)",
    ],
    image: "/Se-alx.png",
  },
  {
    title: {
      en: "Version Control",
      fr: "Contrôle de Version",
    },
    date: "25 December 2023",
    issuer: {
      en: "Meta & Coursera",
      fr: "Meta & Coursera",
    },
    description: {
      en: "An online non-credit course authorized by Meta and offered through Coursera.",
      fr: "Un cours en ligne sans crédit autorisé par Meta et proposé via Coursera.",
    },
    credentials: "https://coursera.org/verify/P58AGWZ4DRZ6",
    skills: ["Git", "GitHub", "Version Control"],
    image: "/git-certif.png",
  },
];

export default function Certifications() {
  const { language } = useLanguage();
  const { theme } = useTheme(); // Get the current theme from your theme provider

  // Set colors based on the theme from your theme provider
  const bg = theme === "dark" ? "gray.800" : "gray.50";
  const color = theme === "dark" ? "white" : "black";
  const cardbg = theme === "dark" ? "#2C333A" : "white";
  const buttonColor = theme === "dark" ? "black" : "white";
  const buttonBg = theme === "dark" ? "white" : "black";
  const buttonHoverBg = theme === "dark" ? "gray.300" : "gray.700";
  const tagBg = theme === "dark" ? "#1A1E23" : "gray.100";
  const tagColor = theme === "dark" ? "gray.300" : "gray.700";

  const [flippedCards, setFlippedCards] = useState(
    Array(CertifData.length).fill(false)
  );
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

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

  const handleCardClick = (index) => {
    if (isMobile) {
      const newFlippedState = [...flippedCards];
      newFlippedState[index] = !newFlippedState[index];
      setFlippedCards(newFlippedState);
    }
  };

  const detailsText = useBreakpointValue({
    base: language === "fr" ? "Cliquez pour les détails" : "Click for details",
    md: language === "fr" ? "Survolez pour les détails" : "Hover for details",
  });

  // Responsive values
  const cardWidth = useBreakpointValue({
    base: "300px",
    sm: "300px",
    md: "300px",
    lg: "320px",
  });
  const cardHeight = useBreakpointValue({
    base: "200px",
    sm: "200px",
    md: "200px",
    lg: "220px",
  });
  const headingSize = useBreakpointValue({ base: "md", md: "lg" });

  // Translations
  const translations = {
    en: {
      title: "My Certifications",
      skills: "Skills",
      issuer: "Issuer",
      dateOfIssue: "Date of Issue",
      viewCertificate: "View Certificate",
      description:
        "Professional certifications and courses I've completed to enhance my skills.",
    },
    fr: {
      title: "Mes Certifications",
      skills: "Compétences",
      issuer: "Émetteur",
      dateOfIssue: "Date d'émission",
      viewCertificate: "Voir le certificat",
      description:
        "Certifications professionnelles et cours que j'ai complétés pour améliorer mes compétences.",
    },
  };

  const t = translations[language] || translations.en;

  return (
    <Box id="certifications"   bg={bg} py={150}>
      <VStack align="center">
        <Heading size={headingSize} mb={4} color={color}>
          {t.title}
        </Heading>
        <Text
          color={theme === "dark" ? "gray.300" : "gray.700"}
          fontSize={{ base: "sm", md: "md" }}
          mb={2}
          textAlign="center"
          maxW="2xl"
        >
          {t.description}
        </Text>
      </VStack>

      <Flex
        wrap="wrap"
        justify="space-around"
        align="center"
        gap={8}
        mt={10}
        px={4}
      >
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
            onClick={() => handleCardClick(index)}
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
                border={`2px solid ${theme === "dark" ? "gray.600" : "gray"}`}
                display="flex"
                alignItems="center"
                justifyContent="center"
                overflow="hidden"
                p={0.1}
                style={{ backfaceVisibility: "hidden" }}
              >
                <Image
                  src={certif.image || "/placeholder.svg"}
                  alt={certif.title[language] || certif.title.en}
                  objectFit="cover"
                  objectPosition="left"
                  width="100%"
                  height="100%"
                  fallbackSrc="https://via.placeholder.com/400x250"
                />
                <Box
                  position="absolute"
                  bottom={2}
                  right={2}
                  bg="rgba(0, 0, 0, 0.7)"
                  color="white"
                  px={2}
                  py={1}
                  borderRadius="md"
                  fontSize="xs"
                >
                  {detailsText}
                </Box>
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
                justifyContent="flex-start"
                textAlign="center"
                p={{ base: 2, md: 4 }}
                overflowY="auto"
                style={{
                  backfaceVisibility: "hidden",
                  transform: "rotateY(180deg)",
                }}
              >
                <Heading
                  as="h3"
                  fontSize={{ base: "sm", md: "lg" }}
                  fontWeight="bold"
                  color={color}
                >
                  {certif.title[language] || certif.title.en}
                </Heading>
                <Text
                  fontSize={{ base: "xs", md: "sm" }}
                  color={theme === "dark" ? "gray.400" : "gray.500"}
                  mt={1}
                >
                  {t.issuer}: {certif.issuer[language] || certif.issuer.en}
                </Text>
                <Text
                  fontSize={{ base: "xs", md: "xs" }}
                  color={theme === "dark" ? "gray.500" : "gray.400"}
                  mt={1}
                >
                  {t.dateOfIssue}: {certif.date}
                </Text>
                <Text
                  fontSize={{ base: "xs", md: "md" }}
                  color={color}
                  mt={2}
                  px={2}
                >
                  {certif.description[language] || certif.description.en}
                </Text>

                <Badge
                  px={2}
                  py={1}
                  rounded="md"
                  fontSize="xs"
                  fontWeight="semibold"
                  colorScheme="blue"
                  mt={2}
                >
                  {t.skills}
                </Badge>

                <Flex wrap="wrap" overflowWrap={2} mt={1} justify="center">
                  {certif.skills &&
                    certif.skills.map((skill, skillIndex) => (
                      <Tag
                        key={skillIndex}
                        bg={tagBg}
                        color={tagColor}
                        m={0.5}
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
                  size={"50"}
                  as="a"
                  href={certif.credentials}
                  target="_blank"
                  mt={5}
                  px={3}
                  py={2}
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
                  {t.viewCertificate}
                  <Icon ml={2} as={FiExternalLink} />
                </Button>
              </Box>
            </MotionBox>
          </Box>
        ))}
      </Flex>
    </Box>
  );
}
