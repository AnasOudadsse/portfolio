import { Box, ChakraBaseProvider,extendTheme, ColorModeScript, Text, useColorModeValue } from '@chakra-ui/react';
import Header from './pages/Header/Header.jsx';
import { Hero } from './pages/Hero/Hero.jsx';
import { About } from './pages/About/About.jsx';
import Skills from './pages/Skills/Skills.jsx';
import Experiences from './pages/Experiences/Experiences.jsx';
import Expertise from './pages/Expertise/Expertise.jsx';
import { Projects } from './pages/Projects/Projects.jsx';
import { Gap } from './pages/Expertise/Gap.jsx';
import Footer from './pages/Footer/Footer.jsx';
import Certifications from './pages/Certifications/Certifications.jsx';
import { LanguageProvider } from './context/language-context.jsx';
import { BrowserRouter } from 'react-router-dom';

function App() {



  const config = {
    initialColorMode: 'light',
    useSystemColorMode: false,
  };

  const theme = extendTheme({ config });

  return (
    <ChakraBaseProvider theme={theme}>
      <LanguageProvider >
        <BrowserRouter>
            <ColorModeScript initialColorMode={theme.config.initialColorMode} />
            <Box fontFamily={'inter'}>

              <Header/>
              
              <Hero/>
              
              <About/> 
              
              <Gap/>
              

              <Expertise/>

              <Skills/>

              <Experiences/>

              <Projects/>
              
              <Certifications/>

              <Footer/>

    



            </Box>
        </BrowserRouter>
      </LanguageProvider>

    </ChakraBaseProvider>
  );
}

export default App;
