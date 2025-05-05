import { Box, Flex, Heading } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { CircleLoader } from "react-spinners";
import { getProducts, getProductsByCategory } from "../../data/mock";

const ItemListContainer = ({title}) => {
  const [ products, setProducts ] = useState([])
  const [ loading, setLoading ] = useState(true)
  const { categoryId } = useParams()

  useEffect(() => {
    setLoading(true)
    const getData = async () => {
      let response;

      if (!categoryId) {
        response = await getProducts();
      } else {
        response = await getProductsByCategory(categoryId);
      }

      setProducts(response)
      setLoading(false)
    }
    getData()
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
