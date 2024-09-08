import { Box, Text, Link, VStack , useColorModeValue} from "@chakra-ui/react";

const Footer = () => {

    const bg = useColorModeValue('gray.50', '#22272B');
    const color = useColorModeValue('gray.500', 'gray.300');

  return (
    <Box bg={bg} color={color} py={8} px={4}>
      <VStack spacing={4}>
        {/* Portfolio Status */}
        <Text fontSize="md" color="gray.400" textAlign="center">
        © 2024 Anas Oudadsse™ | This portfolio is not 100% complete yet and will be improved over time.
        </Text>
      </VStack>
    </Box>
  );
};

export default Footer;
