import { Button, Flex, Heading } from '@chakra-ui/react'
import React, { useState } from 'react'
import useCounter from '../hooks/useCounter'

const ItemCount = ({ stock, initialValue, onAdd}) => {
  const { count, incrementar, decrementar } = useCounter(initialValue, stock)

  return (
    <Flex>
      <Button 
        size='lg' 
        onClick={decrementar} 
        bg="#06b6d4" 
        color={'#fff'} 
        fontSize={'2xl'} 
        _hover={{ bg: '#67e8f9' }}>
          -</Button>
      
      <Heading className='ml-4 mr-4'><p className='text-pink-500 text-4xl'>{count}</p></Heading>
      <Button 
        size='lg' 
        onClick={incrementar} 
        bg="#06b6d4"
        color={'#fff'} 
        fontSize={'2xl'} 
        _hover={{ bg: '#67e8f9' }}>
        +</Button>
      <Button 
        size='lg' 
        onClick={() => onAdd(count)} 
        bg="#06b6d4" 
        color={'#fff'} 
        fontSize={'xl'} 
        ml={2} 
        _hover={{ bg: '#67e8f9' }}
        >Agregar al carrito
      </Button>
    </Flex>
  )
}

export default ItemCount