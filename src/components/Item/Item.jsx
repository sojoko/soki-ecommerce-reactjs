import React from "react";
import { Card, CardBody, CardFooter, Stack, Heading, Text, Divider, ButtonGroup, Button, Image, Box } from "@chakra-ui/react";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
const Item = ({ nombre, precio, img, stock, id }) => {
  return (
    <Box className="flex gap-4">
        <Card maxW="sm" m={2} w={'100%'} _hover={{boxShadow :'2xl'}} className="p-1" >
            <CardBody >
                <Image
                src={img}
                alt={nombre}
                borderRadius="lg"
                boxSize='100%'
                objectFit='cover' 
                w='250px'
                h='260px' 
                />
                <Stack mt="2" spacing="1">
                <Heading> <p className="text-xl text-cyan-400">{nombre}</p> </Heading>
                <Text className="text-xl text-pink-400">
                    ${precio}
                </Text>
                </Stack>
            </CardBody>
            <Divider />
            <CardFooter className="m-0">
                <ButtonGroup spacing="1">
                <Button variant="ghost" >
                    <Link to={`/producto/${id}`} className="text-pink-400">
                        Ver detalle
                    </Link>
                </Button>
                </ButtonGroup>
            </CardFooter>
        </Card>
    </Box>
  );
};

export default Item;