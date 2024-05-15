import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import { 
    Heading,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Button,
    Flex,
 } from '@chakra-ui/react'
 import { FaAngleDown } from "react-icons/fa";
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <Flex justify={'space-between'} align={'center'} className='navbar bg-pink-400'>

      <Heading className='bg-pink-400 text-white p-6'>
        <Link to='/'>
          SOKIS
        </Link>
        </Heading>
      <Menu>
        <MenuButton as={Button} rightIcon={<FaAngleDown className='text-pink-500'/>}>
            <h3 className='text-pink-500' >Categoría</h3>
        </MenuButton>
        <MenuList>
            <MenuItem >
              <Link to='/categoria/Buzos' className='text-pink-500 hover:text-cyan-400'>
                Buzos
              </Link>
            </MenuItem>
            <MenuItem >
              <Link to='/categoria/Mousepads' className='text-pink-500 hover:text-cyan-400'>
                Mousepads
              </Link>
            </MenuItem>
            <MenuItem >
              <Link to='/categoria/Calcetines' className='text-pink-500 hover:text-cyan-400'>
                Calcetines
              </Link>
            </MenuItem>
            <MenuItem >
              <Link to='/categoria/Dakimakura' className='text-pink-500 hover:text-cyan-400'>
                Dakimakura
              </Link>
            </MenuItem>
        </MenuList>
        </Menu>
        <Link to='/cart'>
          <CartWidget />
        </Link>
    </Flex>
  )
}

export default NavBar