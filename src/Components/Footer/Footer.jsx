import { Box, Text, Link, VStack , useColorModeValue} from "@chakra-ui/react";

const Footer = () => {

  const bg = useColorModeValue('white', '#161A1D');
  const color = useColorModeValue('#696969', 'white');

  return (
    <Box bg={bg} color={color} py={8} px={4}>
      <VStack spacing={4}>
        {/* Portfolio Status */}
        <Text fontSize="md"  textAlign="center">
        © 2024 Anas Oudadsse™ | This portfolio is not 100% complete yet and will be improved over time.
        </Text>
      </VStack>
    </Box>
  );
};

export default Footer;
