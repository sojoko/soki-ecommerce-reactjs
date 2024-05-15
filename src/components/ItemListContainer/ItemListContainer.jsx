import { Box, Flex, Heading } from "@chakra-ui/react";
import React, { useContext, useEffect, useState } from "react";
import { getProducts, getProductsByCategory } from "../../data/mock";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { CircleLoader } from "react-spinners";
import { db } from "../../data/firebase";
import { addDoc, collection, getDocs, query, where } from "firebase/firestore";

const ItemListContainer = ({title}) => {
  const [ products, setProducts ] = useState([])
  const [ loading, setLoading ] = useState(true)
  const { categoryId } = useParams()

  useEffect(() => {
    setLoading(true)
    const getData = async () => {
      const coleccion = collection(db, 'products')
      const qr = !categoryId ? coleccion 
      :
      query(coleccion, where('categoria', '==', categoryId))
      const response = await getDocs(qr)

      const products = response.docs.map(doc => {
        const newProduct = { id: doc.id, ...doc.data() }        
        return newProduct
      })
      setProducts(products)
      setLoading(false)

    }
    getData()
    console.log("se ejecuta")
  }, [categoryId])

  return (
    <Box >
      <Heading className="text-center p-8 text-cyan-400">{title}</Heading>
      {
        loading ? 
        <Flex justify={'center'} align={'center'} h={'30vh'}>

          <CircleLoader color="#416d6d" /> 
        </Flex>
        :
        <ItemList products={products} />
      }
    </Box>
  )
};

export default ItemListContainer;