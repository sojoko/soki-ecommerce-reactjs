import React, { useContext } from 'react'
import Context from '../../context/CartContext'
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
    Button,
    Flex,
    Heading,
    Link as ChakraLink,
    Text,
    Center
  } from '@chakra-ui/react'
  import { RiDeleteBin4Line, RiDeleteBin7Line } from "react-icons/ri";
import { Link } from 'react-router-dom';
const Cart = () => {
    const { cart, getTotal, removeItem, clearCart } = useContext(Context)
    if(cart.length === 0){
        return(
            <Flex direction={'column'} justify={'center'} align={'center'} mt={10}>
                <Heading color={'#416d6d'}>Todavía no agregaste productos</Heading>
                <ChakraLink color={'#c86f43'} fontSize={'1.5rem'} as={Link} to='/'>Ver productos</ChakraLink>
            </Flex>
        )
    }else{
        return (
            <TableContainer w={'80%'} m={'0 auto'} mt={10}>
            <Table variant='striped' >
                <Thead>
                <Tr >
                    <Th fontSize={'1rem'} color={'#06b6d4'}>Producto</Th>
                    <Th fontSize={'1rem'} color={'#06b6d4'}>Cantidad</Th>
                    <Th fontSize={'1rem'} color={'#06b6d4'}>Precio</Th>
                    <Th fontSize={'1rem'} color={'#06b6d4'}>Subtotal</Th>
                    <Th fontSize={'1rem'} color={'#06b6d4'}></Th>

                </Tr>
                </Thead>
                <Tbody >
                    {
                        cart.map((prod, index) => (
                            <Tr key={prod.id} ey={prod.id} bg={index % 2 === 0 ? '#c5d0d3' : '#608e8e'} color={index % 2 === 0 ? '#416d6d' : '#fff'}>
                                <Td border={'none'}>{prod.nombre}</Td>
                                <Td border={'none'}>{prod.quantity}</Td>
                                <Td border={'none'} >{prod.precio}</Td>
                                <Td border={'none'}>{prod.precio * prod.quantity}</Td>
                                <Td border={'none'}>
                                    <Button 
                                        bg={'transparent'} 
                                        fontSize={'1.5rem'}
                                        color={index % 2 === 0 ? '#416d6d' : '#fff'} 
                                        _hover={{
                                            backgroundColor: index % 2 === 0 ? '#416d6d' : '#c5d0d3',
                                            color:index % 2 === 0 ? '#c5d0d3' : '#416d6d',
                                        }}
                                        onClick={() => removeItem(prod.id)}>
                                        <RiDeleteBin4Line />
                                    </Button>
                                </Td>
                            </Tr>
                        ))
                    }
                </Tbody>
            </Table>
            <Center mt={10}>
                <Flex w={'60%'} justify={'space-around'} align={'center'}>
                    <Text fontSize={'3xl'} color={'#f472b6'} w={'15rem'}height={'3rem'}>Total: ${getTotal()}</Text>
                    <Button onClick={() => clearCart()}
                        w={'15rem'}
                        height={'3rem'} 
                        backgroundColor={'#06b6d4'} 
                        color={'#fff'} 
                        fontSize={'xl'}
                        _hover={{
                            backgroundColor: '#22d3ee',
                            color: '#fff',
                        }}
                        >
                        <span className='iconClearCart'>
                            <RiDeleteBin7Line/> 
                        </span>
                        Vaciar carrito
                    </Button>
                    <ChakraLink as={Link} to='/checkout'>
                        <p className='text-pink-500 text-xl'>Finalizar compra</p> 
                    </ChakraLink>
                </Flex>
            </Center>
        </TableContainer>
    )
}
}

export default Cart