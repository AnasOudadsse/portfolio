import React, { useState, useEffect } from 'react';
import { Box, Flex, Heading } from '@chakra-ui/react';

const Header = () => {
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
      bg={isScrolled ? 'rgba(255, 255, 255, 0.8)' : 'white'}
      boxShadow="md"
      transition="background-color 0.3s ease"
      zIndex="1000"
    >
      <Flex justifyContent="center" alignItems="center" height="60px">
        <Heading size="lg">My Header</Heading>
      </Flex>
    </Box>
  );
};

export default Header;
