import { Badge, Flex } from '@chakra-ui/react';
import React, { useContext } from 'react'
import { FaCartShopping } from "react-icons/fa6";
import Context from '../../context/CartContext';

const CartWidget = () => {
  const { getQuantity } = useContext(Context)
  return (
    <Flex className='p-4 mr-4 w-100'>
      <FaCartShopping className='text-3xl text-white'/>
      <Flex justify={'center'} align={'center'} h={'50%'} w={'50%'} >
        <Badge borderRadius={'50%'}  color={'#c86f43'} fontSize={'md'}>{getQuantity()}</Badge>
      </Flex>
    </Flex>
  )
}

export default CartWidget