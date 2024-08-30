import React, { useState, useEffect } from 'react';
import { Box, Button, Flex, Heading, Icon, IconButton, Link, useColorMode , useColorModeValue} from '@chakra-ui/react';
import { SunIcon, MoonIcon } from '@chakra-ui/icons';

const Header = () => {
    
    const { colorMode, toggleColorMode } = useColorMode();

    const bg = useColorModeValue('white', 'black');
    const color = useColorModeValue('#696969', 'white');

    const buttonColor = useColorModeValue('white', 'black')
    const buttonbg = useColorModeValue('black', 'white')
    const buttonHoverBg = useColorModeValue('gray.700', 'gray.300')


  const [isScrolled, setIsScrolled] = useState(false);

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
      width="100%"
      bg={isScrolled ? 'rgba(255, 255, 255, 0.85)' : bg}
      boxShadow="md"
      transition="background-color 0.3s ease"
      zIndex="1000"
      h={70}
      mb={20}

        >
      <Flex justify={'space-between'} 
            alignItems="center" 
            height="70px" 
            mx={150}>
        
            <Heading fontFamily={'sans-serif'}  justifySelf={'start'} fontSize={35}>
                {`<AO />`}
            </Heading>

            <Flex 
                align={'center'} 
                gap={'30px'}
                color={color}
                fontWeight={400}
                >
                

                <Link _hover={{color : 'black'}} href='#'> About </Link>
                <Link _hover={{color : 'black'}} href='#'> Skills </Link>
                <Link _hover={{color : 'black'}} href='#'> Projects </Link>
                <Link _hover={{color : 'black'}} href='#'> Recomendation </Link>

                <IconButton
                    onClick={toggleColorMode}
                    icon={colorMode === 'dark' ? <SunIcon/> : <MoonIcon/> }
                />


                <Button 
                    color={buttonColor} 
                    borderRadius={13} 
                    bg={buttonbg}
                    h={9}
                    width={'135px'}
                    _hover={{bg : buttonHoverBg}}
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
