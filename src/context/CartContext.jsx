import React, { createContext, useState } from 'react'

const Context = createContext()



export const ContextProvider = ({ children }) => {
    const [ cart, setCart ] = useState([])

    const addItem = (productToAdd, quantity) => {
        const newProduct = {
            ...productToAdd,
            quantity
        }
        if(isInCart(newProduct.id)) {
            const updatedCart = cart.map((el) => {
                if(el.id === newProduct.id) {
                    return { ...el, quantity: el.quantity + newProduct.quantity}
                }
                return el
            })
            setCart(updatedCart)
        }else{
            setCart([...cart, newProduct])
        }
    }
    const isInCart = (id) => {
        return cart.some((prod) => prod.id === id)
    }

    const removeItem = (id) => {
        const deleteItem = cart.filter((prod) => prod.id !== id)
        setCart([...deleteItem])
    }
    const getTotal = () => {
        const total = cart.reduce((acc, item) => acc + item.precio * item.quantity, 0)
        // 0 + 1300 * 1 
        // 13000 + 8500 * 1
        // 21500 + 8900 * 1
        // 30400
        return total
    }

    const clearCart = () => {
        setCart([])
    }

    const getQuantity = () => {
        let total = 0
        cart.forEach((prod) => {
            total = total + prod.quantity
        // 0 + 1 
        // 1 + 5
        // 6 + 1
        // 7
        })
        return total
    }
  const currentQuantity = (productId) => {
    // obtenemos el producto
    const product = cart.find((item) => item.id === productId);
    // retornamos la cantidad de items del producto, si el producto no está en el carrito, entonces es 0
    return product ? product.quantity : 0;
  };

  return (
    <Context.Provider 
        value={{
            cart,
            addItem,
            removeItem,
            getTotal,
            clearCart,
            getQuantity,
            currentQuantity
        }}
    >
        {children}
    </Context.Provider>
  )
}

export default Context