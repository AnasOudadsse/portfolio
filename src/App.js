import { Box, ChakraBaseProvider,extendTheme, ColorModeScript, useColorModeValue } from '@chakra-ui/react';
import Header from './Components/Header/Header';

function App() {

  const config = {
    initialColorMode: 'light',
    useSystemColorMode: false,
  };

  const theme = extendTheme({ config });

  return (
    <ChakraBaseProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <Box fontFamily={'inter'}>

          <Header/>
          <Box>
           
          </Box>

      </Box>
    </ChakraBaseProvider>
  );
}

export default App;
