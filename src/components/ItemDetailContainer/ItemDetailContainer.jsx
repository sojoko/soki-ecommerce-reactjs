import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { getProductById } from '../../data/mock'
import ItemDetail from '../ItemDetail/ItemDetail'
import { Box, Flex } from '@chakra-ui/react'
import { CircleLoader } from 'react-spinners'
import Context from '../../context/CartContext'
import { doc, getDoc } from 'firebase/firestore'
import { db } from '../../data/firebase'


const ItemDetailContainer = () => {
    const [ producto, setProducto ] = useState({})
    const [ loading, setLoading ] = useState(true)
    const { productId } = useParams()
    const { currentQuantity } = useContext(Context);

    const navigate = useNavigate()
    useEffect(() => {
        const getProductById = async() => {
            const qr = doc(db, 'products', productId)
            const response = await getDoc(qr)
            const newItem = { id: response.id, ...response.data() }
            setProducto(newItem)
            console.log(newItem)
            setLoading(false)

        }
        getProductById()
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