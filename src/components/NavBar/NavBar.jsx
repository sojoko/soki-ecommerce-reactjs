import { CartWidget } from "../CartWidget/CartWidget";
import { Box, Center } from '@chakra-ui/react'
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
} from '@chakra-ui/react'
import { px } from "framer-motion";
import { FaBold } from "react-icons/fa";



function NavBar() {
    return (
       <div>
        <Box display='flex' alignContent='center' alignItems={"center"} justifyContent={'space-between'} width={350} color={"black"} fontSize={'bold'}>
        
          <Menu isLazy>
            <MenuButton>Menu desplegable</MenuButton>
            <MenuList>
              {/* MenuItems are not rendered unless Menu is open */}
              <MenuItem>nosotros</MenuItem>
              <MenuItem>contacto</MenuItem>
              <MenuItem>iniciar sesion</MenuItem>
              <MenuItem>crear cuenta</MenuItem>
            </MenuList>
         </Menu>        
         
         <Box marginRight={8}>
          <CartWidget/>
         </Box>
      </Box>
       </div>
    );
  }

export { NavBar };