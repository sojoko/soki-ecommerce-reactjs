import { Box, Image } from '@chakra-ui/react'
import React from 'react'
import errorImg from '../../assets/error.jpg'
const PageNotFound = () => {
  return (
    <Box 
      w={'100%'}
      h={'90vh'}>
      <Image 
        w={'100%'} 
        h={'100%'}
        src={errorImg} 
        objectFit={'contain'}
        
        />
    </Box>
      
  )
}

export default PageNotFound