import { ChakraBaseProvider } from '@chakra-ui/react';
import Header from './Header/Header';

function App() {
  return (
    <ChakraBaseProvider>
        <Header/>
    </ChakraBaseProvider>
  );
}

export default App;
