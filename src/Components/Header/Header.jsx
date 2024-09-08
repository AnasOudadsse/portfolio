import React, { useState, useEffect } from 'react';
import { Box, Button, Flex, Heading,DrawerBody, Text, DrawerCloseButton,scrollToSection,DrawerContent,DrawerOverlay,Stack,Drawer, IconButton, Link, useColorMode, useColorModeValue } from '@chakra-ui/react';
import { SunIcon, MoonIcon } from '@chakra-ui/icons';
import { FaBars } from "react-icons/fa6";
import { space } from 'postcss/lib/list';


// const scrollToSection = (sectionId) => {
//   const element = document.getElementById(sectionId);
//   if (element) {
//     const top = element.getBoundingClientRect().top + window.scrollY - 50; // Adjusting offset if needed
//     window.scrollTo({ top, behavior: 'smooth' });
//   }
// };

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  const bg = useColorModeValue('white', '#161A1D');
  const color = useColorModeValue('#696969', 'white');
  const scrolledBg = useColorModeValue('rgba(255, 255, 255, 0.85)', 'rgb(22, 26, 29, 0.95)' );
  const buttonColor = useColorModeValue('white', 'black');
  const buttonBg = useColorModeValue('black', 'white');
  const buttonHoverBg = useColorModeValue('gray.700', 'gray.300');

  const [isScrolled, setIsScrolled] = useState(false);

  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  const handleDrawerLinkClick = (sectionId) => {
    toggleDrawer(); // Close the drawer first
    setTimeout(() => {
      // scrollToSection(sectionId); // Then scroll to the section after the drawer closes
    }, 300); // 300ms delay (Adjust if necessary based on drawer animation speed)
  };

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Box
      as="header"
      position="fixed"
      top="0"
      width="100vw"
      bg={isScrolled ? scrolledBg : bg}
      boxShadow={isScrolled ? 'md' : 'none'}
      transition="background-color 0.3s ease, box-shadow 0.3s ease"
      zIndex="1000"
      h={70}
    >
      <Flex
        justify="space-between"
        alignItems="center"
        height="70px"
        mx={{ base: '20px', md: '50px', lg: '100px', xl: '150px' }}
      >
        <Heading fontFamily="sans-serif" justifySelf="start" fontSize={{ base: '24px', lg: '35px' }}>
          {`<AO />`}
        </Heading>

        <Flex 
          align="center" 
          gap={{ base: '15px', md: '30px' }} 
          color={color} 
          fontWeight={400}
          >
          <Flex  
            align="center" 
            gap={{ base: '15px', md: '30px' }} 
            color={color} 
            fontWeight={400}         
            display={["none", "none", "none", "flex"]}
            justify={'space-around'}
          >
            <Link 
                _hover={{ color: 'gray.700', fontWeight: 'bold' }} 
                href="#"
                minWidth="80px"  // Set a fixed min-width
            >
              About
            </Link>
            <Link 
                _hover={{ color: color, fontWeight: 'bold' }} 
                href="#"
                minWidth="80px"
            >
              Skills
            </Link>
            <Link 
                _hover={{ color: color, fontWeight: 'bold' }} 
                href="#"
                minWidth="80px"
            >
              Projects
            </Link>
            <Link 
                _hover={{ color: color, fontWeight: 'bold' }} 
                href="#"
                minWidth="150px"
            >
              Recommendations
            </Link>
          </Flex>



          <IconButton
            aria-label="Toggle color mode"
            onClick={toggleColorMode}
            icon={colorMode === 'dark' ? <SunIcon /> : <MoonIcon />}
          />

        {/* Hamburger Menu Button - Visible on small screens */}
        <IconButton
          aria-label="Open Menu"
          icon={<FaBars />}
          display={["flex", "flex", "flex", "none"]}  // Visible on small screens
          onClick={toggleDrawer}
        />

        {/* Drawer for Mobile Navigation */}
        <Drawer placement="right" onClose={toggleDrawer} isOpen={isOpen}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerBody>
              <Stack spacing={4} mt={10}>
                <Text cursor="pointer" onClick={() => handleDrawerLinkClick('Home')}>Accueil</Text>
                <Text cursor="pointer" onClick={() => handleDrawerLinkClick('About')}>À Propos</Text>
                <Text cursor="pointer" onClick={() => handleDrawerLinkClick('WhyChooseUs')}>Pourquoi Nous Choisir</Text>
                <Text cursor="pointer" onClick={() => handleDrawerLinkClick('HowItWorks')}>Comment Ça Marche</Text>
                <Text cursor="pointer" onClick={() => handleDrawerLinkClick('Contact')}>Contact</Text>
              </Stack>
            </DrawerBody>
          </DrawerContent>
        </Drawer>

          <Button
            as={'a'}
            target="_blank"
            href="https://drive.google.com/file/d/1eV6ii-y3SeLuUfvE87Sw-XMGyoGvl1sx/view?usp=sharing"
            color={buttonColor}
            borderRadius={13}
            bg={buttonBg}
            h={9}
            width={{ base: '135px' }}
            _hover={{ bg: buttonHoverBg }}
            fontWeight={500}
          >
            Download CV
          </Button>
        </Flex>
        
      </Flex>

      
    </Box>
  );
};

export default Header;
