import { Box, ChakraBaseProvider, extendTheme, ColorModeScript } from '@chakra-ui/react';
import Header from './pages/Header/Header.jsx';
import { Hero } from './pages/Hero/Hero.jsx';
import { About } from './pages/About/About.jsx';
import Skills from './pages/Skills/Skills.jsx';
import Experiences from './pages/Experiences/Experiences.jsx';
import Expertise from './pages/Expertise/Expertise.jsx';
import { Projects } from './pages/Projects/Projects.jsx';
import Footer from './pages/Footer/Footer.jsx';
import Certifications from './pages/Certifications/Certifications.jsx';
import { LanguageProvider } from './context/language-context.jsx';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from './pages/theme-provider/theme-provider.jsx';
import { Volunteering } from './pages/volunteering/volunteering.jsx';
import { Education } from './pages/Education/Education.jsx';
import { Languages } from './pages/Languages/Languages.jsx';
import { Recommendations } from './pages/Recommendations/Recommendations.jsx';

function App() {



  const config = {
    initialColorMode: 'light',
    useSystemColorMode: false,
  };

  const theme = extendTheme({ config });

  return (
    <ChakraBaseProvider theme={theme}>
      <ThemeProvider>

        <LanguageProvider >
          <BrowserRouter>
              <ColorModeScript initialColorMode={theme.config.initialColorMode} />
              <Box fontFamily={'Inter, sans-serif'}>

                <Header/>
                
                <Hero/>
                
                <About/> 
                  
                <Expertise/>

                <Skills/>

                <Experiences/>

                <Education/>

                <Volunteering/>

                <Projects/>
                
                <Certifications/>

                <Languages/>

                <Recommendations/>

                <Footer/>

              </Box>
          </BrowserRouter>
        </LanguageProvider>
      </ThemeProvider>

    </ChakraBaseProvider>
  );
}

export default App;
