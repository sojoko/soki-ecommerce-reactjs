
import { FaRobot } from 'react-icons/fa';
import './App.css';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { NavBar } from './components/NavBar/NavBar';
import { ChakraProvider } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'


function App() {
  return (
    <div>  
   
    <ChakraProvider >
      <Box fontFamily={'roboto'}>
        <Box  display='flex' alignItems='center' justifyContent='flex-end' padding={3}  bg ='violet' fontSize={24}>    
          <NavBar/>
        </Box>     
        <Box fontSize={40} display={'flex'} alignItems={'center'} justifyContent={'center'}>
          <ItemListContainer title='Tienda'/>    
        </Box>
      </Box>      
    </ChakraProvider>    
  
    </div>
  );
}

export default App;
