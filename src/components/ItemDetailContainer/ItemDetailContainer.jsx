import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import ItemDetail from '../ItemDetail/ItemDetail'
import { Box, Flex } from '@chakra-ui/react'
import { CircleLoader } from 'react-spinners'
import Context from '../../context/CartContext'
import { getProductById } from '../../data/mock'


const ItemDetailContainer = () => {
    const [ producto, setProducto ] = useState({})
    const [ loading, setLoading ] = useState(true)
    const { productId } = useParams()
    const { currentQuantity } = useContext(Context);

    const navigate = useNavigate()
    useEffect(() => {
        const fetchProduct = async() => {
            const product = await getProductById(productId)
            setProducto(product)
            console.log(product)
            setLoading(false)
        }
        fetchProduct()
    }, [productId])

  return (
    <>
      {
        loading ? 
        <Flex justify={'center'} align={'center'} h={'50vh'}>
          <CircleLoader color="#416d6d" /> 
        </Flex>
      :
        <Box 
        w={'60%'} 
        minHeight={'40vh'}
        margin={'0 auto'}
        mt={10}
        borderRadius={'10px'}
        >
          <ItemDetail {...producto} currentQuantity={currentQuantity(productId)} />
        </Box>
      }
    </>
  )
}

export default ItemDetailContainer
