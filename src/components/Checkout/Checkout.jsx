import React, { useContext, useState } from 'react'
import {
    FormControl,
    Input,
    Button,
    Flex,
    Heading,
    Image,
    Box,
    Text,
  } from '@chakra-ui/react'
import { Timestamp, addDoc, collection, doc, getDoc, updateDoc } from 'firebase/firestore'
import { db } from '../../data/firebase'
import Context from '../../context/CartContext'
import { useNavigate } from 'react-router-dom'


const Checkout = () => {
    
    const [ user, setUser ] = useState({
        name: '',
        email: '',
        repeatedEmail: '',
        phone:''
    })
    const [ emailMatch, setEmailMatch ] = useState(true)
    const [ error, setError] = useState({})

    const { cart, getTotal, clearCart } = useContext(Context)

    const updateUser = (event) => {
        setUser((user) => ({
            ...user,
            [event.target.name]: event.target.value
        }))
    }

    const navigate = useNavigate()

    const validateEmails = () => {
        if(user.email === user.repeatedEmail) {
            setEmailMatch(true)
        }else{
            setEmailMatch(false)
        }
    }

    const validateForm = () => {
        const errors = {}
        if(!user.name){
            errors.name= "Tenés que agregar un nombre"
            if(user.name.length < 3){
                errors.name= "El nombre debe tener al menos 3 caracteres"
            }
        }
        if(!user.email){
            errors.email= "Tenés que agregar un email"
        }
        if(!user.repeatedEmail){    
            errors.repeatedEmail= "Tenés que repetir el email"
            validateEmails()
            if(!emailMatch){
                errors.repeatedEmail= "Los emails no coinciden"
            }
        }
        if(!user.phone){
            errors.phone= "Tenés que agregar un teléfono"
            if (user.phone.length < 8){
                errors.phone= "El teléfono debe tener al menos 8 caracteres"
            }
        }
        setError(errors)
        return Object.keys(errors).length === 0
    }
   
    const getOrder = async () => {
    const isFormValid = validateForm()
         if(isFormValid){
          const ordersCollection = collection(db, 'orders')  
          console.log(ordersCollection)
            try {
                for(const item of cart) {
                    const productRef = doc(db, 'productos', item.id)
                    const productDoc = await getDoc(productRef)

                    const currentStock = productDoc.data().stock

                    if(currentStock >= item.quantity) {
                        await updateDoc(productRef, {
                            stock: currentStock - item.quantity
                        })
                    }else {
                        // mostrarle al usuario el error que no tiene suficiente stock
                        console.log(`No hay suficiente stock para ${item.name}`)
                    }
                    const order = {
                        buyer: user,
                        cart: cart,
                        total: getTotal(),
                        // fecha de la compra
                        fechaDeCompra: Timestamp.now() 
                    }
                    
                    const orderDocRef = await addDoc(ordersCollection, order)
                    Swal.fire({
                        title: 'Gracias por tu compra',
                        text: `El número de orden es: ${orderDocRef.id}`,
                        icon: 'success',
                        confirmButtonText: 'Cool'
                      }).then(()=> {
                        clearCart()
                        navigate('/')
                      })
                }
            } catch (error) {
                console.log(error)
            }
        }
    }


  return (
    <Flex direction={'column'} justify={'center'} align={'center'} mt={10}>
        <Box>
        <Heading><p className='text-pink-400'>Resumen de la compra</p></Heading>
        {
            cart.map((prod) => (
                <Flex key={prod.id}>
                    <Image src={prod.img} />
                </Flex>
            ))
        }
        <Text className='text-cyan-400 text-center mt-4 text-xl mb-4'>total de la compra: {getTotal()}</Text>
        </Box>
        <Heading mb={2}> <p className='text-pink-400'>Datos de facturación</p></Heading>
        <FormControl w={'40%'}>
            {/* mostrarle al usuario el error en los inputs */}
            <Input type='text' name='name' placeholder='Ingrese el nombre' onChange={updateUser} mb={2}/>
            <Input type='email' name='email' placeholder='Ingrese email' onChange={updateUser} mb={2}/>
            <Input type='email' name='repeatedEmail' placeholder='Ingrese nuevamente el email'  onChange={updateUser} mb={2}/>
            <Input type='text' name='phone' placeholder='Ingrese su teléfono' onChange={updateUser} mb={2}/>
            <Flex w={'100%'} justify={'center'} align={'center'}>
                <Button onClick={getOrder}>Finalizar compra</Button>
            </Flex>
        </FormControl>
    </Flex>
  )
}

export default Checkout