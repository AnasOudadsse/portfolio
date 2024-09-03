import { Box, ChakraBaseProvider,extendTheme, ColorModeScript, Text, useColorModeValue } from '@chakra-ui/react';
import Header from './Components/Header/Header';
import { Hero } from './Components/Hero/Hero.jsx';
import { About } from './Components/About/About.jsx';
import Skills from './Components/Skills/Skills.jsx';
import Experiences from './Components/Experiences/Experiences.jsx';

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
          
          <Hero/>

          <About/> 

          <Skills/>

          <Experiences/>

        </Box>
    </ChakraBaseProvider>
  );
}

export default App;
