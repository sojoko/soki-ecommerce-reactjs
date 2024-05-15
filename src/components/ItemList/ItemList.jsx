import React from 'react'
import Item from '../Item/Item'
import { Box, Flex } from '@chakra-ui/react'

const ItemList = ({ products }) => {

  return (
    <Flex wrap={'wrap'} justify={'center'} align={'center'} >
       {products.map((elem) => (
        <Box key={elem.id} >
            <Item {...elem}/>
        </Box>
       ))}
    </Flex>
  )
}

export default ItemList