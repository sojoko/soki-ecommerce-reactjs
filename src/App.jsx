import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import NavBar from './components/NavBar/NavBar'
import { ChakraProvider } from '@chakra-ui/react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import PageNotFound from './components/pageNotFound/404'
import Cart from './components/Cart/Cart'
import { ContextProvider } from './context/CartContext'
import Checkout from './components/Checkout/Checkout'

function App() {

  return (
    <ChakraProvider>
      <ContextProvider>
        <BrowserRouter>
          <NavBar/>
          <Routes>
            <Route path='/' element={<ItemListContainer title='Tienda' texto='prop desde App'/>}/>
            <Route path='/categoria/:categoryId' element={<ItemListContainer title='Tienda' />}/>
            <Route path='/producto/:productId' element={<ItemDetailContainer />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/checkout' element={<Checkout/>} />
            <Route path='*' element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
      </ContextProvider>
    </ChakraProvider>
  )
}

export default App
