import React, { useContext, useState } from 'react'
import { Card, CardBody, CardFooter, Stack, Heading, Text, Divider, ButtonGroup, Button, Image, Grid, Flex, Box, Link as ChakraLink } from "@chakra-ui/react";
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Context from '../../context/CartContext';

const ItemDetail = ({nombre, precio, stock, id, img, descripcion, categoria, currentQuantity}) => {
    const [ quantity, setQuantity] = useState(0)
    const { addItem } = useContext(Context)
    const onAdd = (quantity) => {
        const item = {
            id,
            nombre,
            precio,
            stock,
            img
        }
        setQuantity(quantity)
        addItem(item, quantity)
        toast.success(`Agregaste ${quantity} unidades`, {
            position: "top-center"
        })
    }

    const maxAvailable = stock - currentQuantity; 

  return (
    <>

    <Card w={'100%'} h={'100%'} boxShadow='lg'  >
        <Box className='bg-cyan-400'>              
            <Flex  h={'5rem'} justify={'flex-start'} align={'center'} borderRadius={'5px 5px 0 0'} >
                <Text className='text-white p-4 text-xl'>Categoría: {categoria}</Text>    
            </Flex>  
        </Box>

        <Flex
            wrap={'wrap'}
            align={'center'}
            justify={'space-between'}
            w={'100%'} 
            h={'100%'}
            className='cardFlex'
            >
            <Flex
                w={'40%'}
                h={'90%'}
                justify={'center'}
                align={'center'}
                >

            <Image
            src={img}
            alt={nombre}
            borderRadius="lg"
            boxSize='100%'
            objectFit='contain' 
            w='100%'
            h='400px' 
            rowSpan={2} colSpan={1} 
            />
            </Flex>
            <Flex
                direction={'column'}
                justify={'space-around'}
                align={'start'}
                w={'50%'}
                minHeight={'400px'}
                >
            <Heading className='text-pink-400'> {nombre}</Heading>
            <Text className='text-pink-400 text-md'>
                {descripcion}
            </Text>
            <Text className='text-pink-500 text-xl' >
                ${precio}
            </Text>
            </Flex>
            <Text w={'95%'} className='ml-4 text-pink-500 text-xl' >
                Stock:{stock}
            </Text>
            <Text className='ml-4 mb-2 text-pink-500 text-lg'>
                cantidad actual en el carrito: {currentQuantity}
            </Text>
            {
                quantity > 0 ? 
                <Flex 
                    justify={'space-around'} 
                    align={'center'} 
                    w={'100%'}
                    bg={'#06b6d4'}
                    h={'5rem'} 
                    color={'#fff'}
                    
                    >
                    <Flex justify={'center'} align={'center'} w={'100%'} _hover={{ bg: '#22d3ee', color: '#fff' }} >
                        <ChakraLink mr={4} w={'50%'} fontSize={'1.2rem'} as={Link} to='/cart'>Ir al carrito</ChakraLink>
                        <Flex justify={'center'} w={'20%'} align={'center'} bg={'#f472b6'}  h={'5rem'}>
                           x
                        </Flex>
                    </Flex>
                    <Divider orientation='vertical' />
                    <Flex justify={'center'} align={'center'} w={'100%'} _hover={{ bg: '#22d3ee', color: '#fff' }}>
                        <ChakraLink mr={4} w={'50%'}  fontSize={'1.2rem'} as={Link} to='/'>Seguir comprando</ChakraLink>
                        <Flex justify={'center'} w={'20%'} align={'center'} bg={'#f472b6'}  h={'5rem'}>
                           v
                        </Flex>
                    </Flex>
                </Flex>
                :
                <Flex w={'100%'} h={'10%'} justify={'center'} align={'center'} pb={5}>
                    <ItemCount stock={stock} initialValue={1} onAdd={onAdd} maxAvailable={maxAvailable}/>
                </Flex>
            }
            
        </Flex>
    </Card>
    <ToastContainer />
    </>
  )
}

export default ItemDetail